'use client';

import { useState, useEffect, useRef } from 'react';
import { useChatContext } from '@/contexts/ChatContext';
import ProductManager from '@/components/Admin/ProductManager';

const AdminDashboard = () => {
  const [newMessage, setNewMessage] = useState('');
  const [adminName, setAdminName] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState<'chats' | 'products'>('chats');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const { 
    chatSessions, 
    selectedChatId, 
    messages,
    selectChat, 
    sendAdminMessage,
    updateChatStatus,
    assignChatToSecretary,
    releaseChatAssignment,
    getCurrentSecretary
  } = useChatContext();

  // Get messages for selected chat
  const selectedChatMessages = messages.filter(msg => msg.chatId === selectedChatId);
  const selectedChat = chatSessions.find(chat => chat.id === selectedChatId);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [selectedChatMessages]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminName.trim()) {
      setIsLoggedIn(true);
      localStorage.setItem('soltice_admin_name', adminName);
    }
  };

  const handleChatSelect = (chatId: string) => {
    const currentSecretary = getCurrentSecretary();
    if (!currentSecretary) return;

    // Try to assign the chat to current secretary
    const assigned = assignChatToSecretary(chatId, currentSecretary);
    
    if (assigned) {
      selectChat(chatId);
    } else {
      // Show error message if chat is already assigned
      alert('Este chat ya está siendo atendido por otro representante.');
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || !selectedChatId) return;

    sendAdminMessage(selectedChatId, newMessage, adminName);
    setNewMessage('');
  };

  const handleReleaseChat = () => {
    if (selectedChatId && adminName) {
      releaseChatAssignment(selectedChatId, adminName);
      selectChat(''); // Deselect the chat
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('es-PR', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('es-PR', {
      day: '2-digit',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return '#25D366';
      case 'waiting': return '#ffa502';
      case 'closed': return '#747d8c';
      default: return '#ffffff';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active': return 'Activo';
      case 'waiting': return 'Esperando';
      case 'closed': return 'Cerrado';
      default: return status;
    }
  };

  // Check for saved admin name
  useEffect(() => {
    const savedAdminName = localStorage.getItem('soltice_admin_name');
    if (savedAdminName) {
      setAdminName(savedAdminName);
      setIsLoggedIn(true);
    }
  }, []);

  // Login form
  if (!isLoggedIn) {
    return (
      <div 
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: '100vh', background: '#131d3b' }}
      >
        <div 
          className="card border-0"
          style={{
            width: '400px',
            background: 'rgba(19, 29, 59, 0.95)',
            backdropFilter: 'blur(20px)',
            borderRadius: '20px',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          <div className="card-body p-4">
            <div className="text-center mb-4">
              <h3 
                style={{
                  background: 'linear-gradient(135deg, #b4fe00 0%, #00d4ff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontFamily: 'Rubik, sans-serif'
                }}
              >
                Soltice Energy
              </h3>
              <h5 style={{ color: '#ffffff' }}>Panel de Administración</h5>
              <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '14px' }}>
                Servicio al Cliente - Chat
              </p>
            </div>

            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label style={{ color: '#ffffff', fontSize: '14px', fontWeight: '500' }}>
                  Nombre del Representante
                </label>
                <input
                  type="text"
                  value={adminName}
                  onChange={(e) => setAdminName(e.target.value)}
                  className="form-control mt-2"
                  placeholder="Ej: María González"
                  required
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '10px',
                    color: '#ffffff',
                    padding: '12px 16px'
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn w-100 fw-bold border-0"
                style={{
                  background: 'linear-gradient(135deg, #b4fe00 0%, #00d4ff 100%)',
                  color: '#131d3b',
                  borderRadius: '10px',
                  padding: '12px',
                  fontSize: '16px'
                }}
              >
                Acceder al Panel
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // If products tab is active, show ProductManager
  if (activeTab === 'products') {
    return <ProductManager />;
  }

  return (
    <div 
      className="d-flex"
      style={{ height: '100vh', background: '#131d3b' }}
    >
      {/* Chat Sessions Sidebar */}
      <div 
        className="border-end"
        style={{
          width: '350px',
          background: 'rgba(19, 29, 59, 0.95)',
          borderColor: 'rgba(255, 255, 255, 0.1)'
        }}
      >
        {/* Header with Tabs */}
        <div 
          className="p-3 border-bottom"
          style={{
            borderColor: 'rgba(255, 255, 255, 0.1)',
            background: 'linear-gradient(135deg, rgba(180, 254, 0, 0.1) 0%, rgba(0, 212, 255, 0.1) 100%)'
          }}
        >
          <div className="d-flex align-items-center justify-content-between mb-3">
            <div>
              <h6 className="mb-0" style={{ color: '#ffffff', fontWeight: '600' }}>
                Panel de Administración
              </h6>
              <small style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                {adminName}
              </small>
            </div>
            <div 
              className="rounded-circle d-flex align-items-center justify-content-center"
              style={{
                width: '30px',
                height: '30px',
                background: 'linear-gradient(135deg, #b4fe00 0%, #00d4ff 100%)',
                color: '#131d3b',
                fontSize: '12px',
                fontWeight: '600'
              }}
            >
              {chatSessions.filter(chat => chat.status !== 'closed').length}
            </div>
          </div>
          
          {/* Navigation Tabs */}
          <div className="d-flex gap-2">
            <button
              className={`btn btn-sm border-0 fw-bold ${activeTab === 'chats' ? 'active' : ''}`}
              style={{
                background: activeTab === 'chats' 
                  ? 'linear-gradient(135deg, #b4fe00 0%, #00d4ff 100%)'
                  : 'rgba(255, 255, 255, 0.1)',
                color: activeTab === 'chats' ? '#131d3b' : '#ffffff',
                borderRadius: '8px',
                fontSize: '12px',
                padding: '6px 12px'
              }}
              onClick={() => setActiveTab('chats')}
            >
              💬 Chats
            </button>
            <button
              className={`btn btn-sm border-0 fw-bold ${(activeTab as string) === 'products' ? 'active' : ''}`}
              style={{
                background: (activeTab as string) === 'products' 
                  ? 'linear-gradient(135deg, #b4fe00 0%, #00d4ff 100%)'
                  : 'rgba(255, 255, 255, 0.1)',
                color: (activeTab as string) === 'products' ? '#131d3b' : '#ffffff',
                borderRadius: '8px',
                fontSize: '12px',
                padding: '6px 12px'
              }}
              onClick={() => setActiveTab('products')}
            >
              🔋 Productos
            </button>
          </div>
        </div>

        {/* Chat List */}
        <div className="overflow-auto" style={{ height: 'calc(100vh - 120px)' }}>
          {chatSessions.length === 0 ? (
            <div className="text-center p-4">
              <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                No hay chats disponibles
              </p>
            </div>
          ) : (
            chatSessions.map((chat) => (
              <div
                key={chat.id}
                className={`p-3 border-bottom ${selectedChatId === chat.id ? 'bg-primary bg-opacity-10' : ''}`}
                style={{
                  borderColor: 'rgba(255, 255, 255, 0.1)',
                  cursor: chat.assignedTo && chat.assignedTo !== adminName ? 'not-allowed' : 'pointer',
                  background: selectedChatId === chat.id ? 'rgba(180, 254, 0, 0.1)' : 
                            chat.assignedTo && chat.assignedTo !== adminName ? 'rgba(255, 71, 87, 0.1)' : 'transparent',
                  opacity: chat.assignedTo && chat.assignedTo !== adminName ? 0.6 : 1
                }}
                onClick={() => handleChatSelect(chat.id)}
              >
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <div className="d-flex align-items-center">
                    <div 
                      className="rounded-circle me-2"
                      style={{
                        width: '8px',
                        height: '8px',
                        background: getStatusColor(chat.status)
                      }}
                    />
                    <h6 className="mb-0" style={{ color: '#ffffff', fontSize: '14px' }}>
                      {chat.clientName || `Cliente ${chat.id.slice(-4)}`}
                      {chat.assignedTo && (
                        <span 
                          className="ms-2 badge" 
                          style={{ 
                            background: chat.assignedTo === adminName ? '#25D366' : '#ff4757',
                            fontSize: '9px'
                          }}
                        >
                          {chat.assignedTo === adminName ? 'Tuyo' : chat.assignedTo}
                        </span>
                      )}
                    </h6>
                  </div>
                  <small style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '11px' }}>
                    {formatDate(chat.createdAt)}
                  </small>
                </div>
                
                <div className="d-flex align-items-center justify-content-between">
                  <small 
                    style={{ 
                      color: 'rgba(255, 255, 255, 0.7)', 
                      fontSize: '12px',
                      maxWidth: '200px',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    {chat.lastMessage?.text || 'No hay mensajes'}
                  </small>
                  <span 
                    className="badge"
                    style={{
                      background: getStatusColor(chat.status),
                      fontSize: '10px'
                    }}
                  >
                    {getStatusText(chat.status)}
                  </span>
                </div>

                {chat.clientEmail && (
                  <small style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '11px' }}>
                    📧 {chat.clientEmail}
                  </small>
                )}
                {chat.clientPhone && (
                  <small style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '11px', marginLeft: '8px' }}>
                    📞 {chat.clientPhone}
                  </small>
                )}
              </div>
            ))
          )}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-grow-1 d-flex flex-column">
        {selectedChatId ? (
          <>
            {/* Chat Header */}
            <div 
              className="p-3 border-bottom d-flex align-items-center justify-content-between"
              style={{
                borderColor: 'rgba(255, 255, 255, 0.1)',
                background: 'rgba(255, 255, 255, 0.05)'
              }}
            >
              <div>
                <h6 className="mb-0" style={{ color: '#ffffff' }}>
                  {selectedChat?.clientName || `Cliente ${selectedChatId.slice(-4)}`}
                </h6>
                <small style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                  {selectedChat?.clientEmail || selectedChat?.clientPhone || 'Sin información de contacto'}
                </small>
              </div>
              
              <div className="d-flex gap-2">
                {selectedChat?.assignedTo === adminName && (
                  <button
                    className="btn btn-sm border-0"
                    style={{
                      background: 'rgba(255, 165, 2, 0.8)',
                      color: 'white',
                      fontSize: '12px'
                    }}
                    onClick={handleReleaseChat}
                    title="Liberar chat para otros representantes"
                  >
                    Liberar
                  </button>
                )}
                <button
                  className="btn btn-sm border-0"
                  style={{
                    background: selectedChat?.status === 'active' ? '#25D366' : 'rgba(37, 211, 102, 0.2)',
                    color: 'white',
                    fontSize: '12px'
                  }}
                  onClick={() => updateChatStatus(selectedChatId, 'active')}
                >
                  Activo
                </button>
                <button
                  className="btn btn-sm border-0"
                  style={{
                    background: selectedChat?.status === 'closed' ? '#ff4757' : 'rgba(255, 71, 87, 0.2)',
                    color: 'white',
                    fontSize: '12px'
                  }}
                  onClick={() => updateChatStatus(selectedChatId, 'closed')}
                >
                  Cerrar
                </button>
              </div>
            </div>

            {/* Messages */}
            <div 
              className="flex-grow-1 p-3 overflow-auto"
              style={{ background: 'rgba(0, 0, 0, 0.2)' }}
            >
              {selectedChatMessages.map((message) => (
                <div 
                  key={message.id}
                  className={`mb-3 d-flex ${message.sender === 'admin' ? 'justify-content-end' : 'justify-content-start'}`}
                >
                  <div 
                    className="px-3 py-2 rounded-3"
                    style={{
                      maxWidth: '70%',
                      background: message.sender === 'admin' 
                        ? 'linear-gradient(135deg, #b4fe00 0%, #00d4ff 100%)'
                        : 'rgba(255, 255, 255, 0.1)',
                      color: message.sender === 'admin' ? '#131d3b' : '#ffffff',
                      fontSize: '14px'
                    }}
                  >
                    {message.sender === 'admin' && message.senderName && (
                      <div style={{ fontSize: '11px', opacity: 0.8, marginBottom: '2px' }}>
                        {message.senderName}
                      </div>
                    )}
                    <div>{message.text}</div>
                    <div 
                      className="text-end mt-1"
                      style={{ 
                        fontSize: '10px', 
                        opacity: 0.7 
                      }}
                    >
                      {formatTime(message.timestamp)}
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Message Input */}
            <div 
              className="p-3 border-top"
              style={{
                borderColor: 'rgba(255, 255, 255, 0.1)',
                background: 'rgba(255, 255, 255, 0.05)'
              }}
            >
              <form onSubmit={handleSendMessage} className="d-flex">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Escribe tu respuesta..."
                  className="form-control me-2"
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '20px',
                    color: '#ffffff',
                    fontSize: '14px',
                    padding: '12px 16px'
                  }}
                />
                <button
                  type="submit"
                  className="btn border-0"
                  style={{
                    background: 'linear-gradient(135deg, #b4fe00 0%, #00d4ff 100%)',
                    color: '#131d3b',
                    borderRadius: '20px',
                    padding: '8px 20px',
                    fontSize: '14px'
                  }}
                >
                  Enviar
                </button>
              </form>
            </div>
          </>
        ) : (
          <div 
            className="d-flex align-items-center justify-content-center h-100"
            style={{ color: 'rgba(255, 255, 255, 0.7)' }}
          >
            <div className="text-center">
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>💬</div>
              <h5>Selecciona un chat para comenzar</h5>
              <p>Escoge una conversación de la lista para responder a los clientes</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;