export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'secretary';
  isActive: boolean;
  createdAt: Date;
  lastLogin?: Date;
  createdBy?: string; // ID of admin who created this user
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
  role: 'secretary';
  temporaryPassword?: string;
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
  chatsBySecretary: Array<{
    secretaryId: string;
    secretaryName: string;
    activeChats: number;
    completedChats: number;
  }>;
}

export interface ChatAssignment {
  chatId: string;
  secretaryId: string;
  assignedAt: Date;
  status: 'active' | 'completed' | 'transferred';
}