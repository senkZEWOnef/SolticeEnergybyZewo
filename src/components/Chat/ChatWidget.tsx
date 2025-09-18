'use client';

import { useState, useEffect, useRef } from 'react';
import { useChatContext } from '@/contexts/ChatContext';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasInitialized, setHasInitialized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const { 
    currentChatId, 
    messages, 
    isConnected, 
    sendMessage, 
    initializeChat 
  } = useChatContext();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Initialize chat when widget first opens
  useEffect(() => {
    if (isOpen && !currentChatId && !hasInitialized) {
      initializeChat();
      setHasInitialized(true);
    }
  }, [isOpen, currentChatId, hasInitialized, initializeChat]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    sendMessage(newMessage);
    setNewMessage('');
    
    // Simulate typing indicator
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
    }, 2000);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('es-PR', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <div 
        className="position-fixed"
        style={{
          bottom: '20px',
          right: '20px',
          zIndex: 1000
        }}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="btn rounded-circle border-0 d-flex align-items-center justify-content-center"
          style={{
            width: '60px',
            height: '60px',
            background: 'linear-gradient(135deg, #b4fe00 0%, #00d4ff 100%)',
            color: '#131d3b',
            boxShadow: '0 8px 25px rgba(180, 254, 0, 0.3)',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)';
            e.currentTarget.style.boxShadow = '0 12px 35px rgba(180, 254, 0, 0.4)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 8px 25px rgba(180, 254, 0, 0.3)';
          }}
        >
          {isOpen ? (
            <span style={{ fontSize: '20px' }}>✕</span>
          ) : (
            <span style={{ fontSize: '20px' }}>💬</span>
          )}
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div 
          className="position-fixed"
          style={{
            bottom: '90px',
            right: '20px',
            width: '350px',
            height: '500px',
            zIndex: 999,
            background: 'rgba(19, 29, 59, 0.98)',
            backdropFilter: 'blur(20px)',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          {/* Chat Header */}
          <div 
            className="p-3 border-bottom"
            style={{
              borderColor: 'rgba(255, 255, 255, 0.1)',
              background: 'linear-gradient(135deg, rgba(180, 254, 0, 0.1) 0%, rgba(0, 212, 255, 0.1) 100%)'
            }}
          >
            <div className="d-flex align-items-center">
              <div 
                className="rounded-circle me-2 d-flex align-items-center justify-content-center"
                style={{
                  width: '40px',
                  height: '40px',
                  background: 'linear-gradient(135deg, #b4fe00 0%, #00d4ff 100%)'
                }}
              >
                <span style={{ fontSize: '16px' }}>👤</span>
              </div>
              <div>
                <h6 className="mb-0" style={{ color: '#ffffff', fontSize: '14px', fontWeight: '600' }}>
                  Soltice Energy
                </h6>
                <small style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '12px' }}>
                  Servicio al Cliente
                </small>
              </div>
              <div className="ms-auto">
                <div 
                  className="rounded-circle"
                  style={{
                    width: '8px',
                    height: '8px',
                    background: '#25D366'
                  }}
                />
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div 
            className="flex-grow-1 p-3 overflow-auto"
            style={{
              maxHeight: '350px'
            }}
          >
            {messages.map((message) => (
              <div 
                key={message.id}
                className={`mb-3 d-flex ${message.sender === 'client' ? 'justify-content-end' : 'justify-content-start'}`}
              >
                <div 
                  className="px-3 py-2 rounded-3"
                  style={{
                    maxWidth: '80%',
                    background: message.sender === 'client' 
                      ? 'linear-gradient(135deg, #b4fe00 0%, #00d4ff 100%)'
                      : 'rgba(255, 255, 255, 0.1)',
                    color: message.sender === 'client' ? '#131d3b' : '#ffffff',
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
            
            {isTyping && (
              <div className="mb-3 d-flex justify-content-start">
                <div 
                  className="px-3 py-2 rounded-3"
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: '#ffffff',
                    fontSize: '14px'
                  }}
                >
                  <div className="d-flex align-items-center">
                    <span>Escribiendo</span>
                    <div className="ms-2 d-flex">
                      <div 
                        className="rounded-circle me-1"
                        style={{
                          width: '4px',
                          height: '4px',
                          background: '#b4fe00',
                          animation: 'pulse 1.5s infinite'
                        }}
                      />
                      <div 
                        className="rounded-circle me-1"
                        style={{
                          width: '4px',
                          height: '4px',
                          background: '#b4fe00',
                          animation: 'pulse 1.5s infinite 0.2s'
                        }}
                      />
                      <div 
                        className="rounded-circle"
                        style={{
                          width: '4px',
                          height: '4px',
                          background: '#b4fe00',
                          animation: 'pulse 1.5s infinite 0.4s'
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Message Input */}
          <div 
            className="p-3 border-top"
            style={{
              borderColor: 'rgba(255, 255, 255, 0.1)'
            }}
          >
            <form onSubmit={handleSendMessage} className="d-flex">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Escribe tu mensaje..."
                className="form-control me-2"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '20px',
                  color: '#ffffff',
                  fontSize: '14px',
                  padding: '8px 16px'
                }}
              />
              <button
                type="submit"
                className="btn rounded-circle border-0 d-flex align-items-center justify-content-center"
                style={{
                  width: '40px',
                  height: '40px',
                  background: 'linear-gradient(135deg, #b4fe00 0%, #00d4ff 100%)',
                  color: '#131d3b'
                }}
              >
                <span style={{ fontSize: '16px' }}>→</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;