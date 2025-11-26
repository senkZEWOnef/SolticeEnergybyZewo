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
    sendMessage, 
    initializeChat 
  } = useChatContext();
  // isConnected unused

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
      <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 pb-safe">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center text-slate-900 shadow-2xl hover:scale-110 transition-all duration-300 min-h-[56px] min-w-[56px]"
        >
          {isOpen ? (
            <span className="text-xl">✕</span>
          ) : (
            <span className="text-xl">💬</span>
          )}
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 sm:bottom-24 right-4 sm:right-6 w-[min(calc(100vw-2rem),320px)] sm:w-80 md:w-96 max-h-[min(60vh,480px)] sm:h-[500px] z-50 bg-slate-900/95 backdrop-blur-lg rounded-2xl border border-slate-700/50 shadow-2xl flex flex-col pb-safe pt-safe">
          {/* Chat Header */}
          <div className="p-4 border-b border-slate-700/50 bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-t-2xl">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center mr-3">
                <span className="text-lg">👤</span>
              </div>
              <div className="flex-1">
                <h6 className="text-white font-semibold text-sm mb-0">
                  Soltice Energy
                </h6>
                <p className="text-white/70 text-xs">
                  Servicio al Cliente
                </p>
              </div>
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto max-h-[350px] sm:max-h-[300px]">
            {messages.map((message) => (
              <div 
                key={message.id}
                className={`mb-3 flex ${message.sender === 'client' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm ${
                    message.sender === 'client'
                      ? 'bg-gradient-to-r from-green-400 to-blue-400 text-slate-900'
                      : 'bg-white/10 text-white'
                  }`}
                >
                  {message.sender === 'admin' && message.senderName && (
                    <div className="text-xs opacity-80 mb-1">
                      {message.senderName}
                    </div>
                  )}
                  <div>{message.text}</div>
                  <div className="text-right mt-1 text-xs opacity-70">
                    {formatTime(message.timestamp)}
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="mb-3 flex justify-start">
                <div className="bg-white/10 text-white px-3 py-2 rounded-2xl text-sm">
                  <div className="flex items-center">
                    <span>Escribiendo</span>
                    <div className="ml-2 flex space-x-1">
                      <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
                      <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                      <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Message Input */}
          <div className="p-4 border-t border-slate-700/50">
            <form onSubmit={handleSendMessage} className="flex space-x-3">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Escribe tu mensaje..."
                className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 min-h-[40px]"
              />
              <button
                type="submit"
                className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center text-slate-900 hover:scale-105 transition-transform min-h-[44px] min-w-[44px]"
              >
                <span className="text-lg">→</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;