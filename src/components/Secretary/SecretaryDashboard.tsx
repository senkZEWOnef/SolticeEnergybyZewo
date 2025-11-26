'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useChatContext } from '@/contexts/ChatContext';
import { 
  MessageSquare, 
  User, 
  CheckCircle,
  Bell,
  Settings,
  LogOut,
  Send
} from 'lucide-react';

const SecretaryDashboard = () => {
  const { user, logout, changePassword } = useAuth();
  const { chatSessions, messages, sendAdminMessage } = useChatContext();
  
  const [activeChats, setActiveChats] = useState<string[]>([]);
  const [selectedChat, setSelectedChat] = useState<string | null>(null);
  const [newMessage, setNewMessage] = useState('');
  const [showPasswordChange, setShowPasswordChange] = useState(false);
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [notification, setNotification] = useState<string | null>(null);

  // Get assigned chats for this secretary
  useEffect(() => {
    const assignments = JSON.parse(localStorage.getItem('soltice_chat_assignments') || '[]');
    interface Assignment { assistantId: string; status: string; chatId: string; }
    const myActiveChats = assignments
      .filter((a: Assignment) => a.assistantId === user?.id && a.status === 'active')
      .map((a: Assignment) => a.chatId);
    setActiveChats(myActiveChats);
  }, [user?.id]);

  // Auto-refresh assignments every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const assignments = JSON.parse(localStorage.getItem('soltice_chat_assignments') || '[]');
      interface Assignment { assistantId: string; status: string; chatId: string; }
      const myActiveChats = assignments
        .filter((a: Assignment) => a.assistantId === user?.id && a.status === 'active')
        .map((a: Assignment) => a.chatId);
      
      // Check for new assignments
      const newChats = myActiveChats.filter((chatId: string) => !activeChats.includes(chatId));
      if (newChats.length > 0) {
        setNotification(`¡Nuevo chat asignado! Cliente #${newChats[0].slice(-4)}`);
        setTimeout(() => setNotification(null), 5000);
      }
      
      setActiveChats(myActiveChats);
    }, 10000);

    return () => clearInterval(interval);
  }, [activeChats]);

  const sendMessage = () => {
    if (!selectedChat || !newMessage.trim()) return;
    
    sendAdminMessage(selectedChat, newMessage, user?.name || 'Asistente');
    setNewMessage('');
  };

  const getChatMessages = (chatId: string) => {
    return messages.filter(m => m.chatId === chatId).sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime());
  };

  const getClientInfo = (chatId: string) => {
    const chat = chatSessions.find(c => c.id === chatId);
    return chat ? {
      id: chatId.slice(-4).toUpperCase(),
      startTime: chat.createdAt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: chat.status
    } : null;
  };

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    const result = await changePassword({
      currentPassword: passwordData.currentPassword,
      newPassword: passwordData.newPassword
    });

    if (result.success) {
      alert('Contraseña cambiada exitosamente');
      setShowPasswordChange(false);
      setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
    } else {
      alert(result.error || 'Error cambiando contraseña');
    }
  };

  const completeChat = (chatId: string) => {
    // Mark assignment as completed
    const assignments = JSON.parse(localStorage.getItem('soltice_chat_assignments') || '[]');
    interface Assignment { assistantId: string; status: string; chatId: string; }
    const updatedAssignments = assignments.map((a: Assignment) => 
      a.chatId === chatId && a.assistantId === user?.id && a.status === 'active'
        ? { ...a, status: 'completed' }
        : a
    );
    localStorage.setItem('soltice_chat_assignments', JSON.stringify(updatedAssignments));
    
    // Send goodbye message
    sendAdminMessage(chatId, '¡Gracias por contactar a Soltice Energy! Ha sido un placer ayudarte. ¡Que tengas un excelente día! 🌞⚡', user?.name || 'Asistente');
    
    // Update local state
    setActiveChats(prev => prev.filter(c => c !== chatId));
    if (selectedChat === chatId) {
      setSelectedChat(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="bg-black/20 backdrop-blur-xl border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-gradient-to-r from-blue-400 to-blue-500 rounded-xl">
                <MessageSquare className="w-6 h-6 text-black" />
              </div>
              <div>
                <h1 className="text-2xl font-black text-white">Panel de Asistente</h1>
                <p className="text-gray-400 font-medium">Bienvenida, {user?.name}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Notification */}
              {notification && (
                <div className="bg-green-400/20 border border-green-400/30 text-green-400 px-4 py-2 rounded-xl text-sm font-medium animate-pulse">
                  <Bell className="w-4 h-4 inline mr-2" />
                  {notification}
                </div>
              )}
              
              {/* Active Chats Count */}
              <div className="bg-blue-400/20 border border-blue-400/30 text-blue-400 px-4 py-2 rounded-xl">
                <span className="font-bold text-lg">{activeChats.length}</span>
                <span className="text-sm ml-2">Chats Activos</span>
              </div>
              
              <button
                onClick={() => setShowPasswordChange(!showPasswordChange)}
                className="p-2 bg-white/10 hover:bg-white/20 rounded-xl border border-white/20 text-white transition-all duration-200"
                title="Cambiar contraseña"
              >
                <Settings className="w-5 h-5" />
              </button>
              
              <button
                onClick={logout}
                className="flex items-center space-x-2 px-4 py-2 bg-red-500/20 hover:bg-red-500/30 rounded-xl border border-red-500/30 text-red-400 hover:text-red-300 transition-all duration-200"
              >
                <LogOut className="w-4 h-4" />
                <span className="font-medium">Salir</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Password Change Modal */}
      {showPasswordChange && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 w-full max-w-md">
            <h3 className="text-xl font-bold text-white mb-4">Cambiar Contraseña</h3>
            
            <form onSubmit={handlePasswordChange} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Contraseña Actual
                </label>
                <input
                  type="password"
                  value={passwordData.currentPassword}
                  onChange={(e) => setPasswordData(prev => ({ ...prev, currentPassword: e.target.value }))}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Nueva Contraseña
                </label>
                <input
                  type="password"
                  value={passwordData.newPassword}
                  onChange={(e) => setPasswordData(prev => ({ ...prev, newPassword: e.target.value }))}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Confirmar Nueva Contraseña
                </label>
                <input
                  type="password"
                  value={passwordData.confirmPassword}
                  onChange={(e) => setPasswordData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              
              <div className="flex space-x-4">
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-blue-400 to-blue-500 text-black py-3 rounded-xl font-bold transition-all duration-300"
                >
                  Cambiar
                </button>
                <button
                  type="button"
                  onClick={() => setShowPasswordChange(false)}
                  className="flex-1 bg-white/10 text-white py-3 rounded-xl font-medium border border-white/20 transition-all duration-300"
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-140px)]">
        {/* Active Chats List */}
        <div className="lg:col-span-1 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 overflow-hidden">
          <div className="p-4 border-b border-white/10">
            <h3 className="text-lg font-bold text-white flex items-center">
              <MessageSquare className="w-5 h-5 mr-2 text-blue-400" />
              Mis Chats Activos ({activeChats.length})
            </h3>
          </div>
          
          <div className="flex-1 overflow-y-auto">
            {activeChats.length === 0 ? (
              <div className="p-6 text-center">
                <MessageSquare className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-400 font-medium">No tienes chats asignados</p>
                <p className="text-gray-500 text-sm mt-2">Los chats aparecerán aquí cuando se te asignen</p>
              </div>
            ) : (
              <div className="space-y-2 p-4">
                {activeChats.map(chatId => {
                  const clientInfo = getClientInfo(chatId);
                  const chatMessages = getChatMessages(chatId);
                  const lastMessage = chatMessages[chatMessages.length - 1];
                  
                  return (
                    <div
                      key={chatId}
                      onClick={() => setSelectedChat(chatId)}
                      className={`p-4 rounded-xl cursor-pointer transition-all duration-200 ${
                        selectedChat === chatId 
                          ? 'bg-blue-400/20 border border-blue-400/30' 
                          : 'bg-white/5 hover:bg-white/10'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                          <span className="text-white font-medium">
                            Cliente #{clientInfo?.id}
                          </span>
                        </div>
                        <span className="text-xs text-gray-400">
                          {clientInfo?.startTime}
                        </span>
                      </div>
                      
                      {lastMessage && (
                        <p className="text-gray-300 text-sm truncate">
                          {lastMessage.sender === 'client' ? '👤' : '📞'} {lastMessage.text}
                        </p>
                      )}
                      
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          completeChat(chatId);
                        }}
                        className="mt-2 px-3 py-1 bg-green-400/20 text-green-400 rounded-lg text-xs font-medium hover:bg-green-400/30 transition-all duration-200"
                      >
                        Completar Chat
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Chat Detail */}
        <div className="lg:col-span-2 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 overflow-hidden flex flex-col">
          {selectedChat ? (
            <>
              {/* Chat Header */}
              <div className="p-4 border-b border-white/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold">
                        Cliente #{getClientInfo(selectedChat)?.id}
                      </h4>
                      <p className="text-blue-400 text-sm">
                        Asignado a ti • {getClientInfo(selectedChat)?.startTime}
                      </p>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => completeChat(selectedChat)}
                    className="px-4 py-2 bg-green-400/20 text-green-400 rounded-xl font-medium hover:bg-green-400/30 transition-all duration-200"
                  >
                    <CheckCircle className="w-4 h-4 inline mr-2" />
                    Completar
                  </button>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {getChatMessages(selectedChat).map(message => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'client' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-xs lg:max-w-sm px-4 py-3 rounded-2xl ${
                      message.sender === 'client'
                        ? 'bg-blue-400 text-black'
                        : 'bg-white/10 text-white border border-white/20'
                    }`}>
                      <p className="text-sm">{message.text}</p>
                      <p className={`text-xs mt-1 ${
                        message.sender === 'client' ? 'text-black/70' : 'text-gray-400'
                      }`}>
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="p-4 border-t border-white/10">
                <div className="flex items-center space-x-3">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                    placeholder="Escribe tu respuesta al cliente..."
                    className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <button
                    onClick={sendMessage}
                    disabled={!newMessage.trim()}
                    className="px-4 py-3 bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 disabled:from-gray-400 disabled:to-gray-500 text-black rounded-xl font-medium transition-all duration-300 disabled:cursor-not-allowed"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <MessageSquare className="w-16 h-16 text-gray-400 mx-auto mb-6" />
                <p className="text-gray-400 text-xl font-medium mb-2">
                  {activeChats.length === 0 ? 'Esperando asignaciones' : 'Selecciona un chat'}
                </p>
                <p className="text-gray-500 text-sm">
                  {activeChats.length === 0 
                    ? 'Los chats aparecerán automáticamente cuando se te asignen'
                    : 'Elige un chat de la lista para comenzar a responder'
                  }
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SecretaryDashboard;