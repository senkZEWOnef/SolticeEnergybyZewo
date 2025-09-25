'use client';

import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { 
  UserPlus, 
  Mail, 
  User, 
  Shield, 
  ToggleLeft, 
  ToggleRight, 
  Trash2, 
  RefreshCw
} from 'lucide-react';

const SecretaryManagement = () => {
  const { 
    createSecretary, 
    getAllSecretaries, 
    toggleSecretaryStatus, 
    deleteSecretary, 
    forcePasswordReset 
  } = useAuth();

  const [secretaries] = useState(() => getAllSecretaries());
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  // const [showPasswords, setShowPasswords] = useState<{ [key: string]: boolean }>({});
  // const [copiedPasswords, setCopiedPasswords] = useState<{ [key: string]: boolean }>({});

  const [newSecretary, setNewSecretary] = useState({
    name: '',
    email: '',
    customPassword: ''
  });

  const showMessage = (type: 'success' | 'error', text: string) => {
    setMessage({ type, text });
    setTimeout(() => setMessage(null), 5000);
  };

  const handleCreateSecretary = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const result = await createSecretary({
      name: newSecretary.name,
      email: newSecretary.email,
      role: 'secretary',
      temporaryPassword: newSecretary.customPassword || undefined
    });

    if (result.success) {
      showMessage('success', `Secretaria creada exitosamente. Contraseña temporal: ${result.temporaryPassword}`);
      setNewSecretary({ name: '', email: '', customPassword: '' });
      setShowCreateForm(false);
      // Refresh the page to show updated data
      setTimeout(() => window.location.reload(), 1500);
    } else {
      showMessage('error', result.error || 'Error creando secretaria');
    }

    setIsLoading(false);
  };

  const handleToggleStatus = async (userId: string) => {
    setIsLoading(true);
    const result = await toggleSecretaryStatus(userId);
    
    if (result.success) {
      showMessage('success', 'Estado actualizado correctamente');
      setTimeout(() => window.location.reload(), 1000);
    } else {
      showMessage('error', result.error || 'Error actualizando estado');
    }
    
    setIsLoading(false);
  };

  const handleDeleteSecretary = async (userId: string, name: string) => {
    if (!confirm(`¿Estás seguro que deseas eliminar a ${name}? Esta acción no se puede deshacer.`)) {
      return;
    }

    setIsLoading(true);
    const result = await deleteSecretary(userId);
    
    if (result.success) {
      showMessage('success', 'Secretaria eliminada correctamente');
      setTimeout(() => window.location.reload(), 1000);
    } else {
      showMessage('error', result.error || 'Error eliminando secretaria');
    }
    
    setIsLoading(false);
  };

  const handleResetPassword = async (userId: string, name: string) => {
    if (!confirm(`¿Deseas generar una nueva contraseña temporal para ${name}?`)) {
      return;
    }

    setIsLoading(true);
    const result = await forcePasswordReset(userId);
    
    if (result.success) {
      showMessage('success', `Nueva contraseña para ${name}: ${result.temporaryPassword}`);
    } else {
      showMessage('error', result.error || 'Error reiniciando contraseña');
    }
    
    setIsLoading(false);
  };

  // Unused functions commented out
  // const togglePasswordVisibility = (secretaryId: string) => {
  //   setShowPasswords(prev => ({
  //     ...prev,
  //     [secretaryId]: !prev[secretaryId]
  //   }));
  // };

  // const copyPassword = async (password: string, secretaryId: string) => {
  //   try {
  //     await navigator.clipboard.writeText(password);
  //     setCopiedPasswords(prev => ({ ...prev, [secretaryId]: true }));
  //     setTimeout(() => {
  //       setCopiedPasswords(prev => ({ ...prev, [secretaryId]: false }));
  //     }, 2000);
  //   } catch (error) {
  //     console.error('Error copying password:', error);
  //   }
  // };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Gestión de Secretarias</h2>
          <p className="text-gray-400">Administra las cuentas de las secretarias del sistema</p>
        </div>
        <button
          onClick={() => setShowCreateForm(!showCreateForm)}
          className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-black rounded-xl font-bold transition-all duration-300 transform hover:scale-105"
        >
          <UserPlus className="w-5 h-5" />
          <span>Nueva Secretaria</span>
        </button>
      </div>

      {/* Success/Error Message */}
      {message && (
        <div className={`p-4 rounded-xl border ${
          message.type === 'success' 
            ? 'bg-green-500/20 border-green-500/30 text-green-400' 
            : 'bg-red-500/20 border-red-500/30 text-red-400'
        }`}>
          <p className="font-medium">{message.text}</p>
        </div>
      )}

      {/* Create Secretary Form */}
      {showCreateForm && (
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center">
            <UserPlus className="w-5 h-5 mr-2 text-green-400" />
            Crear Nueva Secretaria
          </h3>
          
          <form onSubmit={handleCreateSecretary} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Nombre Completo
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    value={newSecretary.name}
                    onChange={(e) => setNewSecretary(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
                    placeholder="María González"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    value={newSecretary.email}
                    onChange={(e) => setNewSecretary(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
                    placeholder="maria@solticeenergy.com"
                    required
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Contraseña Personalizada (Opcional)
              </label>
              <div className="relative">
                <Shield className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  value={newSecretary.customPassword}
                  onChange={(e) => setNewSecretary(prev => ({ ...prev, customPassword: e.target.value }))}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Si se deja vacío, se generará automáticamente"
                />
              </div>
              <p className="text-xs text-gray-400 mt-1">
                Si no especificas una contraseña, se generará una temporal que deberá ser cambiada en el primer acceso.
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <button
                type="submit"
                disabled={isLoading}
                className="px-6 py-3 bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 disabled:from-gray-400 disabled:to-gray-500 text-black rounded-xl font-bold transition-all duration-300"
              >
                {isLoading ? 'Creando...' : 'Crear Secretaria'}
              </button>
              
              <button
                type="button"
                onClick={() => setShowCreateForm(false)}
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-medium border border-white/20 transition-all duration-300"
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Secretaries List */}
      <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 overflow-hidden">
        <div className="p-6 border-b border-white/10">
          <h3 className="text-xl font-bold text-white flex items-center">
            <Shield className="w-5 h-5 mr-2 text-blue-400" />
            Secretarias Registradas ({secretaries.length})
          </h3>
        </div>

        {secretaries.length === 0 ? (
          <div className="p-8 text-center">
            <UserPlus className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-400 text-lg font-medium">No hay secretarias registradas</p>
            <p className="text-gray-500 text-sm mt-2">Crea la primera secretaria para comenzar</p>
          </div>
        ) : (
          <div className="divide-y divide-white/10">
            {secretaries.map((secretary) => (
              <div key={secretary.id} className="p-6 hover:bg-white/5 transition-all duration-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-xl ${
                      secretary.isActive 
                        ? 'bg-green-400/20 text-green-400' 
                        : 'bg-gray-400/20 text-gray-400'
                    }`}>
                      <User className="w-6 h-6" />
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-bold text-white">{secretary.name}</h4>
                      <p className="text-gray-400">{secretary.email}</p>
                      <div className="flex items-center space-x-4 mt-2 text-sm">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          secretary.isActive 
                            ? 'bg-green-400/20 text-green-400' 
                            : 'bg-red-400/20 text-red-400'
                        }`}>
                          {secretary.isActive ? 'Activa' : 'Inactiva'}
                        </span>
                        <span className="text-gray-500">
                          Creada: {secretary.createdAt.toLocaleDateString()}
                        </span>
                        {secretary.lastLogin && (
                          <span className="text-gray-500">
                            Último acceso: {secretary.lastLogin.toLocaleDateString()}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    {/* Toggle Status */}
                    <button
                      onClick={() => handleToggleStatus(secretary.id)}
                      disabled={isLoading}
                      className={`p-2 rounded-xl transition-all duration-200 ${
                        secretary.isActive
                          ? 'bg-green-400/20 text-green-400 hover:bg-green-400/30'
                          : 'bg-gray-400/20 text-gray-400 hover:bg-gray-400/30'
                      }`}
                      title={secretary.isActive ? 'Desactivar' : 'Activar'}
                    >
                      {secretary.isActive ? <ToggleRight className="w-5 h-5" /> : <ToggleLeft className="w-5 h-5" />}
                    </button>

                    {/* Reset Password */}
                    <button
                      onClick={() => handleResetPassword(secretary.id, secretary.name)}
                      disabled={isLoading}
                      className="p-2 bg-blue-400/20 text-blue-400 hover:bg-blue-400/30 rounded-xl transition-all duration-200"
                      title="Reiniciar contraseña"
                    >
                      <RefreshCw className="w-5 h-5" />
                    </button>

                    {/* Delete */}
                    <button
                      onClick={() => handleDeleteSecretary(secretary.id, secretary.name)}
                      disabled={isLoading}
                      className="p-2 bg-red-400/20 text-red-400 hover:bg-red-400/30 rounded-xl transition-all duration-200"
                      title="Eliminar"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {isLoading && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
            <div className="flex items-center space-x-4">
              <RefreshCw className="w-6 h-6 text-green-400 animate-spin" />
              <span className="text-white font-medium">Procesando...</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SecretaryManagement;