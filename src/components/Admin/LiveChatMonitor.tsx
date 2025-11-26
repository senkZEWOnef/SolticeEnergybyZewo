'use client';

import { useState, useEffect } from 'react';
import { useChatContext } from '@/contexts/ChatContext';
import { useAuth } from '@/contexts/AuthContext';
import { 
  MessageSquare, 
  User, 
  AlertCircle,
  Send,
  UserCheck
} from 'lucide-react';

interface ChatAssignment {
  chatId: string;
  assistantId: string;
  assignedAt: Date;
  status: 'active' | 'completed' | 'transferred';
}

const LiveChatMonitor = () => {
  const { chatSessions, messages, sendAdminMessage, updateChatStatus } = useChatContext();
  const { getAllAssistants } = useAuth();
  
  const [assignments, setAssignments] = useState<ChatAssignment[]>([]);
  const [assistants] = useState(() => getAllAssistants());
  const [selectedChat, setSelectedChat] = useState<string | null>(null);
  const [newMessage, setNewMessage] = useState('');
  const [autoAssign, setAutoAssign] = useState(true);

  // Load assignments from localStorage
  useEffect(() => {
    const savedAssignments = localStorage.getItem('soltice_chat_assignments');
    if (savedAssignments) {
      const parsed = JSON.parse(savedAssignments).map((a: ChatAssignment) => ({
        ...a,
        assignedAt: new Date(a.assignedAt)
      }));
      setAssignments(parsed);
    }
  }, []);

  // Auto-assign new chats if enabled
  useEffect(() => {
    if (!autoAssign || assistants.length === 0) return;

    const unassignedChats = chatSessions.filter(chat => 
      chat.status === 'active' && 
      !assignments.some(a => a.chatId === chat.id)
    );

    unassignedChats.forEach(chat => {
      // Find secretary with least active assignments
      const assistantWorkloads = assistants
        .filter(s => s.isActive)
        .map(assistant => ({
          ...assistant,
          activeChats: assignments.filter(a => 
            a.assistantId === assistant.id && a.status === 'active'
          ).length
        }))
        .sort((a, b) => a.activeChats - b.activeChats);

      if (assistantWorkloads.length > 0) {
        assignChatToAssistant(chat.id, assistantWorkloads[0].id);
      }
    });
  }, [chatSessions, assignments, autoAssign, assistants]);

  const assignChatToAssistant = (chatId: string, assistantId: string) => {
    const newAssignment: ChatAssignment = {
      chatId,
      assistantId,
      assignedAt: new Date(),
      status: 'active'
    };

    const updatedAssignments = [...assignments, newAssignment];
    setAssignments(updatedAssignments);
    localStorage.setItem('soltice_chat_assignments', JSON.stringify(updatedAssignments));

    // Send notification message to the chat
    const assistant = assistants.find(s => s.id === assistantId);
    if (assistant) {
      sendAdminMessage(chatId, `Hola! Soy ${assistant.name}, tu asesor de Soltice Energy. ¿En qué puedo ayudarte hoy? 😊`, assistant.name);
    }
  };

  const transferChat = (chatId: string, newAssistantId: string) => {
    const updatedAssignments = assignments.map(a => 
      a.chatId === chatId 
        ? { ...a, status: 'transferred' as const }
        : a
    );

    const newAssignment: ChatAssignment = {
      chatId,
      assistantId: newAssistantId,
      assignedAt: new Date(),
      status: 'active'
    };

    const finalAssignments = [...updatedAssignments, newAssignment];
    setAssignments(finalAssignments);
    localStorage.setItem('soltice_chat_assignments', JSON.stringify(finalAssignments));

    const assistant = assistants.find(s => s.id === newAssistantId);
    if (assistant) {
      sendAdminMessage(chatId, `Hola! Soy ${assistant.name}, me haré cargo de tu consulta desde ahora. ¿En qué puedo ayudarte? 😊`, assistant.name);
    }
  };

  const completeChat = (chatId: string) => {
    const updatedAssignments = assignments.map(a => 
      a.chatId === chatId && a.status === 'active'
        ? { ...a, status: 'completed' as const }
        : a
    );
    
    setAssignments(updatedAssignments);
    localStorage.setItem('soltice_chat_assignments', JSON.stringify(updatedAssignments));
    
    updateChatStatus(chatId, 'closed');
    sendAdminMessage(chatId, '¡Gracias por contactar a Soltice Energy! Esperamos haberte ayudado. 🌞⚡', 'Admin');
  };

  const sendMessage = () => {
    if (!selectedChat || !newMessage.trim()) return;
    
    sendAdminMessage(selectedChat, newMessage, 'Admin');
    setNewMessage('');
  };

  const getAssignedAssistant = (chatId: string) => {
    const assignment = assignments.find(a => a.chatId === chatId && a.status === 'active');
    if (!assignment) return null;
    return assistants.find(s => s.id === assignment.assistantId);
  };

  const getChatMessages = (chatId: string) => {
    return messages.filter(m => m.chatId === chatId).sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime());
  };

  const activeChats = chatSessions.filter(chat => chat.status === 'active');
  const completedChats = chatSessions.filter(chat => chat.status === 'closed');

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-200px)]">
      {/* Chat List */}
      <div className="lg:col-span-1 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 overflow-hidden">
        {/* Header */}
        <div className="p-4 border-b border-white/10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-white flex items-center">
              <MessageSquare className="w-5 h-5 mr-2 text-green-400" />
              Chats en Vivo
            </h3>
            <div className="flex items-center space-x-2">
              <label className="flex items-center space-x-2 text-sm text-gray-300">
                <input
                  type="checkbox"
                  checked={autoAssign}
                  onChange={(e) => setAutoAssign(e.target.checked)}
                  className="rounded border-gray-600 text-green-400 focus:ring-green-400"
                />
                <span>Auto-asignar</span>
              </label>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="bg-green-400/20 rounded-xl p-3">
              <p className="text-green-400 text-2xl font-bold">{activeChats.length}</p>
              <p className="text-green-400 text-sm">Activos</p>
            </div>
            <div className="bg-blue-400/20 rounded-xl p-3">
              <p className="text-blue-400 text-2xl font-bold">{completedChats.length}</p>
              <p className="text-blue-400 text-sm">Completados</p>
            </div>
          </div>
        </div>

        {/* Active Chats */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-2 bg-white/5">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Chats Activos</p>
          </div>
          
          {activeChats.length === 0 ? (
            <div className="p-6 text-center">
              <MessageSquare className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-400 text-sm">No hay chats activos</p>
            </div>
          ) : (
            <div className="space-y-1 p-2">
              {activeChats.map(chat => {
                const assignedAssistant = getAssignedAssistant(chat.id);
                const chatMessages = getChatMessages(chat.id);
                const lastMessage = chatMessages[chatMessages.length - 1];
                
                return (
                  <div
                    key={chat.id}
                    onClick={() => setSelectedChat(chat.id)}
                    className={`p-3 rounded-xl cursor-pointer transition-all duration-200 ${
                      selectedChat === chat.id 
                        ? 'bg-green-400/20 border border-green-400/30' 
                        : 'bg-white/5 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-white font-medium text-sm">
                          Cliente #{chat.id.slice(-4)}
                        </span>
                      </div>
                      <span className="text-xs text-gray-400">
                        {chat.createdAt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                    
                    {assignedAssistant ? (
                      <div className="flex items-center space-x-2 mb-2">
                        <UserCheck className="w-3 h-3 text-blue-400" />
                        <span className="text-blue-400 text-xs font-medium">
                          {assignedAssistant.name}
                        </span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2 mb-2">
                        <AlertCircle className="w-3 h-3 text-orange-400" />
                        <span className="text-orange-400 text-xs font-medium">Sin asignar</span>
                      </div>
                    )}
                    
                    {lastMessage && (
                      <p className="text-gray-300 text-xs truncate">
                        {lastMessage.text}
                      </p>
                    )}
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
                  <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">
                      Cliente #{selectedChat.slice(-8).toUpperCase()}
                    </h4>
                    {(() => {
                      const assignedAssistant = getAssignedAssistant(selectedChat);
                      return assignedAssistant ? (
                        <p className="text-blue-400 text-sm">
                          Asignado a: {assignedAssistant.name}
                        </p>
                      ) : (
                        <p className="text-orange-400 text-sm">Sin asignar</p>
                      );
                    })()}
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  {/* Assignment dropdown */}
                  <select
                    onChange={(e) => {
                      if (e.target.value) {
                        if (getAssignedAssistant(selectedChat)) {
                          transferChat(selectedChat, e.target.value);
                        } else {
                          assignChatToAssistant(selectedChat, e.target.value);
                        }
                      }
                    }}
                    className="bg-white/10 border border-white/20 rounded-lg px-3 py-1 text-white text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                  >
                    <option value="">Asignar/Transferir</option>
                    {assistants.filter(s => s.isActive).map(assistant => (
                      <option key={assistant.id} value={assistant.id} className="bg-slate-800">
                        {assistant.name}
                      </option>
                    ))}
                  </select>
                  
                  <button
                    onClick={() => completeChat(selectedChat)}
                    className="px-3 py-1 bg-green-400/20 text-green-400 rounded-lg text-sm font-medium hover:bg-green-400/30 transition-all duration-200"
                  >
                    Completar
                  </button>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {getChatMessages(selectedChat).map(message => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'client' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-xs lg:max-w-sm px-4 py-2 rounded-2xl ${
                    message.sender === 'client'
                      ? 'bg-green-400 text-black'
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
                  placeholder="Escribe tu respuesta..."
                  className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <button
                  onClick={sendMessage}
                  disabled={!newMessage.trim()}
                  className="px-4 py-2 bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 disabled:from-gray-400 disabled:to-gray-500 text-black rounded-xl font-medium transition-all duration-300 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <MessageSquare className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-400 text-lg font-medium">
                Selecciona un chat para comenzar
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Elige un chat de la lista para ver los mensajes y responder
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LiveChatMonitor;