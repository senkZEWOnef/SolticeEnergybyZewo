export interface User {
  id: string;
  email: string;
  name: string;
  role: 'superadmin' | 'admin' | 'assistant';
  isActive: boolean;
  createdAt: Date;
  lastLogin?: Date;
  createdBy?: string; // ID of user who created this user
  mustChangePassword?: boolean; // Forces password change on next login
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface CreateUserData {
  email: string;
  name: string;
  role: 'admin' | 'assistant';
  temporaryPassword?: string;
}

export interface ElevateUserData {
  userId: string;
  newRole: 'admin';
}

export interface ChangePasswordData {
  currentPassword: string;
  newPassword: string;
}

export interface SiteAnalytics {
  totalVisitors: number;
  todayVisitors: number;
  activeChats: number;
  totalChats: number;
  pendingContacts: number;
  completedChats: number;
  averageResponseTime: number;
  topPages: Array<{
    path: string;
    visits: number;
  }>;
  visitorsByHour: Array<{
    hour: number;
    count: number;
  }>;
  chatsByAssistant: Array<{
    assistantId: string;
    assistantName: string;
    activeChats: number;
    completedChats: number;
  }>;
}

export interface ChatAssignment {
  chatId: string;
  assistantId: string;
  assignedAt: Date;
  status: 'active' | 'completed' | 'transferred';
}