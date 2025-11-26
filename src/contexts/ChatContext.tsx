'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface Message {
  id: string;
  text: string;
  sender: 'client' | 'admin';
  timestamp: Date;
  senderName?: string;
  chatId: string;
}

export interface FormSubmission {
  id: string;
  type: 'hero_form' | 'contact_form' | 'quote_request';
  name: string;
  email?: string;
  phone: string;
  town?: string;
  message?: string;
  source: string;
  submittedAt: Date;
  status: 'new' | 'contacted' | 'converted' | 'closed';
  assignedTo?: string;
  notes?: string;
}

export interface ChatSession {
  id: string;
  clientName?: string;
  clientEmail?: string;
  clientPhone?: string;
  status: 'active' | 'closed' | 'waiting';
  lastMessage?: Message;
  createdAt: Date;
  assignedTo?: string;
  formSubmissionId?: string; // Link to form submission if chat started from form
  source: 'widget' | 'form' | 'whatsapp' | 'phone';
  priority: 'low' | 'medium' | 'high';
}

export interface Product {
  id: string;
  name: string;
  power: string;
  description: string;
  category: string;
  specifications: {
    capacity: string;
    outlets: string[];
    cycles: string;
    chargeTime: string;
    display: string;
    usage: string;
    portability: string;
    maintenance: string;
  };
  tagline: string;
  image: string;
  createdAt: Date;
  price?: string;
  rating?: number;
  features?: string[];
}

interface ChatContextType {
  // Client side
  currentChatId: string | null;
  messages: Message[];
  isConnected: boolean;
  sendMessage: (text: string) => void;
  
  // Admin side
  chatSessions: ChatSession[];
  selectedChatId: string | null;
  selectChat: (chatId: string) => void;
  sendAdminMessage: (chatId: string, text: string, senderName: string) => void;
  updateChatStatus: (chatId: string, status: ChatSession['status']) => void;
  assignChatToSecretary: (chatId: string, secretaryName: string) => boolean;
  releaseChatAssignment: (chatId: string, secretaryName: string) => void;
  getCurrentSecretary: () => string | null;
  
  // Form submissions
  formSubmissions: FormSubmission[];
  addFormSubmission: (submission: Omit<FormSubmission, 'id' | 'submittedAt' | 'status'>) => string;
  updateFormSubmission: (id: string, updates: Partial<FormSubmission>) => void;
  createChatFromForm: (formSubmissionId: string) => string;
  
  // Products
  products: Product[];
  addProduct: (product: Omit<Product, 'id' | 'createdAt'>) => string;
  updateProduct: (id: string, updates: Partial<Product>) => void;
  deleteProduct: (id: string) => void;
  
  // Common
  initializeChat: (clientInfo?: { name?: string; email?: string; phone?: string; source?: ChatSession['source'] }) => string;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const useChatContext = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChatContext must be used within ChatProvider');
  }
  return context;
};

interface ChatProviderProps {
  children: ReactNode;
}

export const ChatProvider = ({ children }: ChatProviderProps) => {
  const [currentChatId, setCurrentChatId] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [chatSessions, setChatSessions] = useState<ChatSession[]>([]);
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null);
  const [formSubmissions, setFormSubmissions] = useState<FormSubmission[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [isConnected] = useState(true); // Simulate connection
  // const [, setIsConnected] = useState(true); // Simulate connection

  // Load chat data from localStorage on mount
  useEffect(() => {
    const savedChatId = localStorage.getItem('soltice_current_chat_id');
    const savedMessages = localStorage.getItem('soltice_chat_messages');
    const savedSessions = localStorage.getItem('soltice_chat_sessions');
    const savedSubmissions = localStorage.getItem('soltice_form_submissions');
    const savedProducts = localStorage.getItem('soltice_products');

    if (savedChatId) {
      setCurrentChatId(savedChatId);
    }
    
    if (savedMessages) {
      try {
        const parsedMessages = JSON.parse(savedMessages).map((msg: Message) => ({
          ...msg,
          timestamp: new Date(msg.timestamp)
        }));
        setMessages(parsedMessages);
      } catch (error) {
        console.error('Error parsing saved messages:', error);
      }
    }

    if (savedSessions) {
      try {
        const parsedSessions = JSON.parse(savedSessions).map((session: ChatSession) => ({
          ...session,
          createdAt: new Date(session.createdAt),
          lastMessage: session.lastMessage ? {
            ...session.lastMessage,
            timestamp: new Date(session.lastMessage.timestamp)
          } : undefined
        }));
        setChatSessions(parsedSessions);
      } catch (error) {
        console.error('Error parsing saved sessions:', error);
      }
    }

    if (savedSubmissions) {
      try {
        const parsedSubmissions = JSON.parse(savedSubmissions).map((submission: FormSubmission) => ({
          ...submission,
          submittedAt: new Date(submission.submittedAt)
        }));
        setFormSubmissions(parsedSubmissions);
      } catch (error) {
        console.error('Error parsing saved form submissions:', error);
      }
    }

    if (savedProducts) {
      try {
        const parsedProducts = JSON.parse(savedProducts).map((product: Product) => ({
          ...product,
          createdAt: new Date(product.createdAt)
        }));
        setProducts(parsedProducts);
      } catch (error) {
        console.error('Error parsing saved products:', error);
      }
    }
  }, []);

  // Save to localStorage whenever data changes
  useEffect(() => {
    if (currentChatId) {
      localStorage.setItem('soltice_current_chat_id', currentChatId);
    }
  }, [currentChatId]);

  useEffect(() => {
    localStorage.setItem('soltice_chat_messages', JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    localStorage.setItem('soltice_chat_sessions', JSON.stringify(chatSessions));
  }, [chatSessions]);

  useEffect(() => {
    localStorage.setItem('soltice_form_submissions', JSON.stringify(formSubmissions));
  }, [formSubmissions]);

  useEffect(() => {
    localStorage.setItem('soltice_products', JSON.stringify(products));
  }, [products]);

  const generateId = () => {
    return Date.now().toString() + Math.random().toString(36).substr(2, 9);
  };

  const initializeChat = (clientInfo?: { name?: string; email?: string; phone?: string; source?: ChatSession['source'] }) => {
    const chatId = generateId();
    
    // Create new chat session
    const newSession: ChatSession = {
      id: chatId,
      clientName: clientInfo?.name,
      clientEmail: clientInfo?.email,
      clientPhone: clientInfo?.phone,
      status: 'waiting',
      createdAt: new Date(),
      source: clientInfo?.source || 'widget',
      priority: 'medium'
    };

    setChatSessions(prev => [...prev, newSession]);
    setCurrentChatId(chatId);

    // Add welcome message
    const welcomeMessage: Message = {
      id: generateId(),
      text: '¡Hola! Soy María de Soltice Energy. ¿En qué puedo ayudarte hoy?',
      sender: 'admin',
      timestamp: new Date(),
      senderName: 'María - Servicio al Cliente',
      chatId
    };

    setMessages(prev => [...prev, welcomeMessage]);

    // Update session with first message
    setChatSessions(prev => prev.map(session => 
      session.id === chatId 
        ? { ...session, lastMessage: welcomeMessage, status: 'active' }
        : session
    ));

    return chatId;
  };

  const sendMessage = (text: string) => {
    if (!currentChatId) return;

    const newMessage: Message = {
      id: generateId(),
      text,
      sender: 'client',
      timestamp: new Date(),
      chatId: currentChatId
    };

    setMessages(prev => [...prev, newMessage]);

    // Update session with last message
    setChatSessions(prev => prev.map(session => 
      session.id === currentChatId 
        ? { ...session, lastMessage: newMessage, status: 'active' }
        : session
    ));

    // Simulate auto-response (remove this when implementing real backend)
    setTimeout(() => {
      const autoResponse: Message = {
        id: generateId(),
        text: 'Gracias por tu mensaje. Un representante te responderá pronto.',
        sender: 'admin',
        timestamp: new Date(),
        senderName: 'Sistema Automático',
        chatId: currentChatId
      };
      
      setMessages(prev => [...prev, autoResponse]);
      setChatSessions(prev => prev.map(session => 
        session.id === currentChatId 
          ? { ...session, lastMessage: autoResponse }
          : session
      ));
    }, 2000);
  };

  const sendAdminMessage = (chatId: string, text: string, senderName: string) => {
    const newMessage: Message = {
      id: generateId(),
      text,
      sender: 'admin',
      timestamp: new Date(),
      senderName,
      chatId
    };

    setMessages(prev => [...prev, newMessage]);

    // Update session
    setChatSessions(prev => prev.map(session => 
      session.id === chatId 
        ? { ...session, lastMessage: newMessage, status: 'active' }
        : session
    ));
  };

  const selectChat = (chatId: string) => {
    setSelectedChatId(chatId);
  };

  const updateChatStatus = (chatId: string, status: ChatSession['status']) => {
    setChatSessions(prev => prev.map(session => 
      session.id === chatId 
        ? { ...session, status }
        : session
    ));
  };

  const addFormSubmission = (submission: Omit<FormSubmission, 'id' | 'submittedAt' | 'status'>) => {
    const newSubmission: FormSubmission = {
      ...submission,
      id: generateId(),
      submittedAt: new Date(),
      status: 'new'
    };

    setFormSubmissions(prev => [...prev, newSubmission]);
    return newSubmission.id;
  };

  const updateFormSubmission = (id: string, updates: Partial<FormSubmission>) => {
    setFormSubmissions(prev => prev.map(submission => 
      submission.id === id 
        ? { ...submission, ...updates }
        : submission
    ));
  };

  const createChatFromForm = (formSubmissionId: string) => {
    const formSubmission = formSubmissions.find(sub => sub.id === formSubmissionId);
    if (!formSubmission) return '';

    const chatId = initializeChat({
      name: formSubmission.name,
      email: formSubmission.email,
      phone: formSubmission.phone,
      source: 'form'
    });

    // Update chat session to link to form submission
    setChatSessions(prev => prev.map(session => 
      session.id === chatId 
        ? { ...session, formSubmissionId, priority: 'high' }
        : session
    ));

    // Update form submission status
    updateFormSubmission(formSubmissionId, { status: 'contacted' });

    return chatId;
  };

  const getCurrentSecretary = () => {
    return localStorage.getItem('soltice_admin_name');
  };

  const assignChatToSecretary = (chatId: string, secretaryName: string) => {
    const chat = chatSessions.find(session => session.id === chatId);
    
    // Check if chat is already assigned to someone else
    if (chat?.assignedTo && chat.assignedTo !== secretaryName) {
      return false; // Assignment failed - already taken
    }

    // Assign the chat
    setChatSessions(prev => prev.map(session => 
      session.id === chatId 
        ? { ...session, assignedTo: secretaryName, status: 'active' as const }
        : session
    ));

    return true; // Assignment successful
  };

  const releaseChatAssignment = (chatId: string, secretaryName: string) => {
    setChatSessions(prev => prev.map(session => 
      session.id === chatId && session.assignedTo === secretaryName
        ? { ...session, assignedTo: undefined }
        : session
    ));
  };

  const addProduct = (product: Omit<Product, 'id' | 'createdAt'>) => {
    const newProduct: Product = {
      ...product,
      id: generateId(),
      createdAt: new Date()
    };

    setProducts(prev => [...prev, newProduct]);
    return newProduct.id;
  };

  const updateProduct = (id: string, updates: Partial<Product>) => {
    setProducts(prev => prev.map(product => 
      product.id === id 
        ? { ...product, ...updates }
        : product
    ));
  };

  const deleteProduct = (id: string) => {
    setProducts(prev => prev.filter(product => product.id !== id));
  };

  const contextValue: ChatContextType = {
    currentChatId,
    messages: messages.filter(msg => msg.chatId === currentChatId),
    isConnected,
    sendMessage,
    chatSessions,
    selectedChatId,
    selectChat,
    sendAdminMessage,
    updateChatStatus,
    assignChatToSecretary,
    releaseChatAssignment,
    getCurrentSecretary,
    formSubmissions,
    addFormSubmission,
    updateFormSubmission,
    createChatFromForm,
    products,
    addProduct,
    updateProduct,
    deleteProduct,
    initializeChat
  };

  return (
    <ChatContext.Provider value={contextValue}>
      {children}
    </ChatContext.Provider>
  );
};

export default ChatProvider;