'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { User, AuthState, LoginCredentials, CreateUserData, ChangePasswordData } from '@/types/auth';

interface AuthContextType extends AuthState {
  login: (credentials: LoginCredentials) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  createSecretary: (userData: CreateUserData) => Promise<{ success: boolean; error?: string; temporaryPassword?: string }>;
  changePassword: (passwordData: ChangePasswordData) => Promise<{ success: boolean; error?: string }>;
  getAllSecretaries: () => User[];
  toggleSecretaryStatus: (userId: string) => Promise<{ success: boolean; error?: string }>;
  deleteSecretary: (userId: string) => Promise<{ success: boolean; error?: string }>;
  forcePasswordReset: (userId: string) => Promise<{ success: boolean; temporaryPassword?: string; error?: string }>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Default admin credentials - In production, this should be properly hashed and stored securely
const DEFAULT_ADMIN = {
  id: 'admin-001',
  email: 'admin@solticeenergy.com',
  name: 'Super Administrator',
  role: 'admin' as const,
  isActive: true,
  createdAt: new Date('2024-01-01'),
  password: 'SolticeAdmin2024!' // In production, this should be hashed
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true
  });

  // Load auth data from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('soltice_auth_user');
    const savedToken = localStorage.getItem('soltice_auth_token');
    
    if (savedUser && savedToken) {
      try {
        const user = JSON.parse(savedUser);
        setAuthState({
          user: {
            ...user,
            createdAt: new Date(user.createdAt),
            lastLogin: user.lastLogin ? new Date(user.lastLogin) : undefined
          },
          isAuthenticated: true,
          isLoading: false
        });
      } catch (error) {
        console.error('Error parsing saved user:', error);
        localStorage.removeItem('soltice_auth_user');
        localStorage.removeItem('soltice_auth_token');
        setAuthState(prev => ({ ...prev, isLoading: false }));
      }
    } else {
      setAuthState(prev => ({ ...prev, isLoading: false }));
    }
  }, []);

  const generateTemporaryPassword = () => {
    const chars = 'ABCDEFGHJKMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789';
    let result = '';
    for (let i = 0; i < 10; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const login = useCallback(async (credentials: LoginCredentials) => {
    try {
      // Check default admin
      if (credentials.email === DEFAULT_ADMIN.email && credentials.password === DEFAULT_ADMIN.password) {
        const user: User = {
          ...DEFAULT_ADMIN,
          lastLogin: new Date()
        };
        
        const token = 'admin-token-' + Date.now();
        
        localStorage.setItem('soltice_auth_user', JSON.stringify(user));
        localStorage.setItem('soltice_auth_token', token);
        
        setAuthState({
          user,
          isAuthenticated: true,
          isLoading: false
        });
        
        return { success: true };
      }

      // Check secretaries
      const savedSecretaries = localStorage.getItem('soltice_secretaries');
      if (savedSecretaries) {
        const secretaries = JSON.parse(savedSecretaries);
        const secretary = secretaries.find((s: User & { password: string }) => 
          s.email === credentials.email && s.password === credentials.password && s.isActive
        );

        if (secretary) {
          const user: User = {
            id: secretary.id,
            email: secretary.email,
            name: secretary.name,
            role: secretary.role,
            isActive: secretary.isActive,
            createdAt: new Date(secretary.createdAt),
            lastLogin: new Date(),
            createdBy: secretary.createdBy
          };
          
          const token = 'secretary-token-' + Date.now();
          
          localStorage.setItem('soltice_auth_user', JSON.stringify(user));
          localStorage.setItem('soltice_auth_token', token);
          
          setAuthState({
            user,
            isAuthenticated: true,
            isLoading: false
          });
          
          return { success: true };
        }
      }

      return { success: false, error: 'Credenciales inválidas' };
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, error: 'Error del sistema. Intenta nuevamente.' };
    }
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('soltice_auth_user');
    localStorage.removeItem('soltice_auth_token');
    setAuthState({
      user: null,
      isAuthenticated: false,
      isLoading: false
    });
  }, []);

  const createSecretary = useCallback(async (userData: CreateUserData) => {
    try {
      if (authState.user?.role !== 'admin') {
        return { success: false, error: 'No tienes permisos para crear usuarios' };
      }

      const savedSecretaries = localStorage.getItem('soltice_secretaries');
      const secretaries = savedSecretaries ? JSON.parse(savedSecretaries) : [];
      
      // Check if email already exists
      const existingUser = secretaries.find((s: User) => s.email === userData.email);
      if (existingUser) {
        return { success: false, error: 'El email ya está en uso' };
      }

      const temporaryPassword = userData.temporaryPassword || generateTemporaryPassword();
      const newSecretary = {
        id: 'secretary-' + Date.now(),
        email: userData.email,
        name: userData.name,
        role: userData.role,
        isActive: true,
        createdAt: new Date(),
        createdBy: authState.user.id,
        password: temporaryPassword // In production, this should be hashed
      };

      secretaries.push(newSecretary);
      localStorage.setItem('soltice_secretaries', JSON.stringify(secretaries));
      
      return { success: true, temporaryPassword };
    } catch (error) {
      console.error('Create secretary error:', error);
      return { success: false, error: 'Error creando usuario' };
    }
  }, [authState.user]);

  const changePassword = useCallback(async (passwordData: ChangePasswordData) => {
    try {
      if (!authState.user) {
        return { success: false, error: 'Usuario no autenticado' };
      }

      if (authState.user.role === 'admin') {
        // For admin, check against default password
        if (passwordData.currentPassword !== DEFAULT_ADMIN.password) {
          return { success: false, error: 'Contraseña actual incorrecta' };
        }
        
        // Update admin password (in production, implement proper security)
        DEFAULT_ADMIN.password = passwordData.newPassword;
        
        return { success: true };
      } else {
        // For secretary, update in localStorage
        const savedSecretaries = localStorage.getItem('soltice_secretaries');
        if (!savedSecretaries) {
          return { success: false, error: 'Usuario no encontrado' };
        }

        const secretaries = JSON.parse(savedSecretaries);
        const secretaryIndex = secretaries.findIndex((s: User & { password: string }) => 
          s.id === authState.user!.id
        );

        if (secretaryIndex === -1) {
          return { success: false, error: 'Usuario no encontrado' };
        }

        if (secretaries[secretaryIndex].password !== passwordData.currentPassword) {
          return { success: false, error: 'Contraseña actual incorrecta' };
        }

        secretaries[secretaryIndex].password = passwordData.newPassword;
        localStorage.setItem('soltice_secretaries', JSON.stringify(secretaries));
        
        return { success: true };
      }
    } catch (error) {
      console.error('Change password error:', error);
      return { success: false, error: 'Error cambiando contraseña' };
    }
  }, [authState.user]);

  const getAllSecretaries = useCallback(() => {
    const savedSecretaries = localStorage.getItem('soltice_secretaries');
    if (!savedSecretaries) return [];
    
    return JSON.parse(savedSecretaries).map((s: User & { password: string }) => ({
      id: s.id,
      email: s.email,
      name: s.name,
      role: s.role,
      isActive: s.isActive,
      createdAt: new Date(s.createdAt),
      lastLogin: s.lastLogin ? new Date(s.lastLogin) : undefined,
      createdBy: s.createdBy
    }));
  }, []);

  const toggleSecretaryStatus = useCallback(async (userId: string) => {
    try {
      if (authState.user?.role !== 'admin') {
        return { success: false, error: 'No tienes permisos' };
      }

      const savedSecretaries = localStorage.getItem('soltice_secretaries');
      if (!savedSecretaries) {
        return { success: false, error: 'Usuario no encontrado' };
      }

      const secretaries = JSON.parse(savedSecretaries);
      const secretaryIndex = secretaries.findIndex((s: User) => s.id === userId);

      if (secretaryIndex === -1) {
        return { success: false, error: 'Usuario no encontrado' };
      }

      secretaries[secretaryIndex].isActive = !secretaries[secretaryIndex].isActive;
      localStorage.setItem('soltice_secretaries', JSON.stringify(secretaries));
      
      return { success: true };
    } catch (error) {
      console.error('Toggle secretary status error:', error);
      return { success: false, error: 'Error actualizando estado' };
    }
  }, [authState.user]);

  const deleteSecretary = useCallback(async (userId: string) => {
    try {
      if (authState.user?.role !== 'admin') {
        return { success: false, error: 'No tienes permisos' };
      }

      const savedSecretaries = localStorage.getItem('soltice_secretaries');
      if (!savedSecretaries) {
        return { success: false, error: 'Usuario no encontrado' };
      }

      const secretaries = JSON.parse(savedSecretaries);
      const filteredSecretaries = secretaries.filter((s: User) => s.id !== userId);
      
      localStorage.setItem('soltice_secretaries', JSON.stringify(filteredSecretaries));
      
      return { success: true };
    } catch (error) {
      console.error('Delete secretary error:', error);
      return { success: false, error: 'Error eliminando usuario' };
    }
  }, [authState.user]);

  const forcePasswordReset = useCallback(async (userId: string) => {
    try {
      if (authState.user?.role !== 'admin') {
        return { success: false, error: 'No tienes permisos' };
      }

      const savedSecretaries = localStorage.getItem('soltice_secretaries');
      if (!savedSecretaries) {
        return { success: false, error: 'Usuario no encontrado' };
      }

      const secretaries = JSON.parse(savedSecretaries);
      const secretaryIndex = secretaries.findIndex((s: User) => s.id === userId);

      if (secretaryIndex === -1) {
        return { success: false, error: 'Usuario no encontrado' };
      }

      const temporaryPassword = generateTemporaryPassword();
      secretaries[secretaryIndex].password = temporaryPassword;
      localStorage.setItem('soltice_secretaries', JSON.stringify(secretaries));
      
      return { success: true, temporaryPassword };
    } catch (error) {
      console.error('Force password reset error:', error);
      return { success: false, error: 'Error reiniciando contraseña' };
    }
  }, [authState.user]);

  const value: AuthContextType = {
    ...authState,
    login,
    logout,
    createSecretary,
    changePassword,
    getAllSecretaries,
    toggleSecretaryStatus,
    deleteSecretary,
    forcePasswordReset
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};