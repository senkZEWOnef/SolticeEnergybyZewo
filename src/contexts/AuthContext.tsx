'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { User, AuthState, LoginCredentials, CreateUserData, ChangePasswordData, ElevateUserData } from '@/types/auth';

interface AuthContextType extends AuthState {
  login: (credentials: LoginCredentials) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  createUser: (userData: CreateUserData) => Promise<{ success: boolean; error?: string; temporaryPassword?: string }>;
  changePassword: (passwordData: ChangePasswordData) => Promise<{ success: boolean; error?: string }>;
  getAllUsers: () => User[];
  getAllAssistants: () => User[];
  getAllAdmins: () => User[];
  toggleUserStatus: (userId: string) => Promise<{ success: boolean; error?: string }>;
  deleteUser: (userId: string) => Promise<{ success: boolean; error?: string }>;
  elevateUser: (elevateData: ElevateUserData) => Promise<{ success: boolean; error?: string }>;
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

// Default Super Admin credentials - In production, this should be properly hashed and stored securely
const DEFAULT_SUPERADMIN = {
  id: 'superadmin-001',
  email: 'admin@solticeenergy.com',
  name: 'Super Administrator',
  role: 'superadmin' as const,
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
      // Check default Super Admin
      if (credentials.email === DEFAULT_SUPERADMIN.email && credentials.password === DEFAULT_SUPERADMIN.password) {
        const user: User = {
          ...DEFAULT_SUPERADMIN,
          lastLogin: new Date()
        };
        
        const token = 'superadmin-token-' + Date.now();
        
        localStorage.setItem('soltice_auth_user', JSON.stringify(user));
        localStorage.setItem('soltice_auth_token', token);
        
        setAuthState({
          user,
          isAuthenticated: true,
          isLoading: false
        });
        
        return { success: true };
      }

      // Check users (admins and assistants)
      const savedUsers = localStorage.getItem('soltice_users');
      if (savedUsers) {
        const users = JSON.parse(savedUsers);
        const foundUser = users.find((u: User & { password: string }) => 
          u.email === credentials.email && u.password === credentials.password && u.isActive
        );

        if (foundUser) {
          const user: User = {
            id: foundUser.id,
            email: foundUser.email,
            name: foundUser.name,
            role: foundUser.role,
            isActive: foundUser.isActive,
            createdAt: new Date(foundUser.createdAt),
            lastLogin: new Date(),
            createdBy: foundUser.createdBy,
            mustChangePassword: foundUser.mustChangePassword
          };
          
          const token = `${foundUser.role}-token-` + Date.now();
          
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

  const createUser = useCallback(async (userData: CreateUserData) => {
    try {
      // Only superadmin and admin can create users
      if (!authState.user || !['superadmin', 'admin'].includes(authState.user.role)) {
        return { success: false, error: 'No tienes permisos para crear usuarios' };
      }

      const savedUsers = localStorage.getItem('soltice_users');
      const users = savedUsers ? JSON.parse(savedUsers) : [];
      
      // Check if email already exists
      const existingUser = users.find((u: User) => u.email === userData.email);
      if (existingUser) {
        return { success: false, error: 'El email ya está en uso' };
      }

      // Use generic password as specified: Soltice2025!
      const defaultPassword = 'Soltice2025!';
      const newUser = {
        id: `${userData.role}-` + Date.now(),
        email: userData.email,
        name: userData.name,
        role: userData.role,
        isActive: true,
        createdAt: new Date(),
        createdBy: authState.user.id,
        mustChangePassword: true, // Force password change on first login
        password: defaultPassword // In production, this should be hashed
      };

      users.push(newUser);
      localStorage.setItem('soltice_users', JSON.stringify(users));
      
      return { success: true, temporaryPassword: defaultPassword };
    } catch (error) {
      console.error('Create user error:', error);
      return { success: false, error: 'Error creando usuario' };
    }
  }, [authState.user]);

  const changePassword = useCallback(async (passwordData: ChangePasswordData) => {
    try {
      if (!authState.user) {
        return { success: false, error: 'Usuario no autenticado' };
      }

      if (authState.user.role === 'superadmin') {
        // For superadmin, check against default password
        if (passwordData.currentPassword !== DEFAULT_SUPERADMIN.password) {
          return { success: false, error: 'Contraseña actual incorrecta' };
        }
        
        // Update superadmin password (in production, implement proper security)
        DEFAULT_SUPERADMIN.password = passwordData.newPassword;
        
        return { success: true };
      } else {
        // For admin and assistant, update in localStorage
        const savedUsers = localStorage.getItem('soltice_users');
        if (!savedUsers) {
          return { success: false, error: 'Usuario no encontrado' };
        }

        const users = JSON.parse(savedUsers);
        const userIndex = users.findIndex((u: User & { password: string }) => 
          u.id === authState.user!.id
        );

        if (userIndex === -1) {
          return { success: false, error: 'Usuario no encontrado' };
        }

        if (users[userIndex].password !== passwordData.currentPassword) {
          return { success: false, error: 'Contraseña actual incorrecta' };
        }

        users[userIndex].password = passwordData.newPassword;
        users[userIndex].mustChangePassword = false; // Remove mandatory change flag
        localStorage.setItem('soltice_users', JSON.stringify(users));
        
        // Update current user state to remove mustChangePassword flag
        const updatedUser = { ...authState.user, mustChangePassword: false };
        localStorage.setItem('soltice_auth_user', JSON.stringify(updatedUser));
        setAuthState(prev => ({ ...prev, user: updatedUser }));
        
        return { success: true };
      }
    } catch (error) {
      console.error('Change password error:', error);
      return { success: false, error: 'Error cambiando contraseña' };
    }
  }, [authState.user]);

  const getAllUsers = useCallback(() => {
    const savedUsers = localStorage.getItem('soltice_users');
    if (!savedUsers) return [];
    
    return JSON.parse(savedUsers).map((u: User & { password: string }) => ({
      id: u.id,
      email: u.email,
      name: u.name,
      role: u.role,
      isActive: u.isActive,
      createdAt: new Date(u.createdAt),
      lastLogin: u.lastLogin ? new Date(u.lastLogin) : undefined,
      createdBy: u.createdBy,
      mustChangePassword: u.mustChangePassword
    }));
  }, []);

  const getAllAssistants = useCallback(() => {
    return getAllUsers().filter((user: User) => user.role === 'assistant');
  }, [getAllUsers]);

  const getAllAdmins = useCallback(() => {
    return getAllUsers().filter((user: User) => user.role === 'admin');
  }, [getAllUsers]);

  const toggleUserStatus = useCallback(async (userId: string) => {
    try {
      if (!authState.user || !['superadmin', 'admin'].includes(authState.user.role)) {
        return { success: false, error: 'No tienes permisos' };
      }

      const savedUsers = localStorage.getItem('soltice_users');
      if (!savedUsers) {
        return { success: false, error: 'Usuario no encontrado' };
      }

      const users = JSON.parse(savedUsers);
      const userIndex = users.findIndex((u: User) => u.id === userId);

      if (userIndex === -1) {
        return { success: false, error: 'Usuario no encontrado' };
      }

      users[userIndex].isActive = !users[userIndex].isActive;
      localStorage.setItem('soltice_users', JSON.stringify(users));
      
      return { success: true };
    } catch (error) {
      console.error('Toggle user status error:', error);
      return { success: false, error: 'Error actualizando estado' };
    }
  }, [authState.user]);

  const deleteUser = useCallback(async (userId: string) => {
    try {
      if (!authState.user || !['superadmin', 'admin'].includes(authState.user.role)) {
        return { success: false, error: 'No tienes permisos' };
      }

      const savedUsers = localStorage.getItem('soltice_users');
      if (!savedUsers) {
        return { success: false, error: 'Usuario no encontrado' };
      }

      const users = JSON.parse(savedUsers);
      const userToDelete = users.find((u: User) => u.id === userId);
      
      // Prevent deletion of admins by non-superadmin users
      if (userToDelete && userToDelete.role === 'admin' && authState.user.role !== 'superadmin') {
        return { success: false, error: 'Solo el Super Admin puede eliminar Administradores' };
      }
      
      const filteredUsers = users.filter((u: User) => u.id !== userId);
      localStorage.setItem('soltice_users', JSON.stringify(filteredUsers));
      
      return { success: true };
    } catch (error) {
      console.error('Delete user error:', error);
      return { success: false, error: 'Error eliminando usuario' };
    }
  }, [authState.user]);

  const elevateUser = useCallback(async (elevateData: ElevateUserData) => {
    try {
      // Only superadmin can elevate users
      if (authState.user?.role !== 'superadmin') {
        return { success: false, error: 'Solo el Super Admin puede elevar usuarios' };
      }

      const savedUsers = localStorage.getItem('soltice_users');
      if (!savedUsers) {
        return { success: false, error: 'Usuario no encontrado' };
      }

      const users = JSON.parse(savedUsers);
      const userIndex = users.findIndex((u: User) => u.id === elevateData.userId);

      if (userIndex === -1) {
        return { success: false, error: 'Usuario no encontrado' };
      }

      // Only elevate assistants to admin
      if (users[userIndex].role !== 'assistant') {
        return { success: false, error: 'Solo se pueden elevar Asistentes a Administrador' };
      }

      users[userIndex].role = elevateData.newRole;
      localStorage.setItem('soltice_users', JSON.stringify(users));
      
      return { success: true };
    } catch (error) {
      console.error('Elevate user error:', error);
      return { success: false, error: 'Error elevando usuario' };
    }
  }, [authState.user]);

  const forcePasswordReset = useCallback(async (userId: string) => {
    try {
      if (!authState.user || !['superadmin', 'admin'].includes(authState.user.role)) {
        return { success: false, error: 'No tienes permisos' };
      }

      const savedUsers = localStorage.getItem('soltice_users');
      if (!savedUsers) {
        return { success: false, error: 'Usuario no encontrado' };
      }

      const users = JSON.parse(savedUsers);
      const userIndex = users.findIndex((u: User) => u.id === userId);

      if (userIndex === -1) {
        return { success: false, error: 'Usuario no encontrado' };
      }

      const temporaryPassword = generateTemporaryPassword();
      users[userIndex].password = temporaryPassword;
      users[userIndex].mustChangePassword = true;
      localStorage.setItem('soltice_users', JSON.stringify(users));
      
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
    createUser,
    changePassword,
    getAllUsers,
    getAllAssistants,
    getAllAdmins,
    toggleUserStatus,
    deleteUser,
    elevateUser,
    forcePasswordReset
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};