'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useAnalytics } from '@/hooks/useAnalytics';
import { 
  Users, 
  MessageSquare, 
  Eye, 
  Clock, 
  TrendingUp, 
  Shield,
  BarChart3,
  Activity,
  CheckCircle,
  AlertCircle,
  LogOut,
  RefreshCw,
  Package,
  Menu,
  X
} from 'lucide-react';
import UserManagement from './SecretaryManagement';
import LiveChatMonitor from './LiveChatMonitor';
import ProductManager from './ProductManager';

const SuperAdminDashboard = () => {
  const { user, logout } = useAuth();
  const { analytics, isLoading, refreshAnalytics } = useAnalytics();
  const [activeTab, setActiveTab] = useState<'overview' | 'users' | 'chats' | 'products' | 'analytics'>('overview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Auto refresh every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      refreshAnalytics();
    }, 30000);

    return () => clearInterval(interval);
  }, [refreshAnalytics]);

  const StatCard = ({ 
    title, 
    value, 
    icon: Icon, 
    change, 
    changeType = 'neutral',
    color = 'green'
  }: {
    title: string;
    value: string | number;
    icon: React.ComponentType<{ className?: string }>;  // eslint-disable-line @typescript-eslint/no-explicit-any
    change?: string;
    changeType?: 'positive' | 'negative' | 'neutral';
    color?: 'green' | 'blue' | 'purple' | 'orange';
  }) => {
    const colorClasses = {
      green: 'from-green-400 to-green-500',
      blue: 'from-blue-400 to-blue-500',
      purple: 'from-purple-400 to-purple-500',
      orange: 'from-orange-400 to-orange-500'
    };

    return (
      <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-400 text-sm font-medium">{title}</p>
            <p className="text-3xl font-bold text-white mt-1">{value}</p>
            {change && (
              <p className={`text-sm font-medium mt-2 ${
                changeType === 'positive' ? 'text-green-400' : 
                changeType === 'negative' ? 'text-red-400' : 
                'text-gray-400'
              }`}>
                {change}
              </p>
            )}
          </div>
          <div className={`p-4 rounded-xl bg-gradient-to-r ${colorClasses[color]} shadow-lg`}>
            <Icon className="w-6 h-6 text-black" />
          </div>
        </div>
      </div>
    );
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-white text-center">
          <RefreshCw className="w-12 h-12 animate-spin mx-auto mb-4" />
          <p className="text-xl font-semibold">Cargando dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-black/30 backdrop-blur-xl border-r border-white/10 transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-4 border-b border-white/10">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-green-400 to-green-500 rounded-xl">
                <Shield className="w-5 h-5 text-black" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-white">Admin Panel</h1>
                <p className="text-xs text-gray-400">{user?.name}</p>
              </div>
            </div>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors duration-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {[
              { id: 'overview', label: 'Resumen', icon: BarChart3 },
              { id: 'users', label: 'Usuarios', icon: Users },
              { id: 'chats', label: 'Chat en Vivo', icon: MessageSquare },
              { id: 'products', label: 'Productos', icon: Package },
              { id: 'analytics', label: 'Analíticas', icon: Activity }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id as 'overview' | 'users' | 'chats' | 'products' | 'analytics');
                  setIsSidebarOpen(false);
                }}
                className={`w-full flex items-center space-x-3 px-3 py-3 rounded-xl font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-green-400/20 text-green-400 border border-green-400/30'
                    : 'text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>

          {/* Sidebar Footer */}
          <div className="p-4 border-t border-white/10">
            <button
              onClick={refreshAnalytics}
              className="w-full mb-3 flex items-center space-x-3 px-3 py-2 bg-white/10 hover:bg-white/20 rounded-xl border border-white/20 text-white transition-all duration-200"
              title="Actualizar datos"
            >
              <RefreshCw className="w-4 h-4" />
              <span className="text-sm">Actualizar</span>
            </button>
            <button
              onClick={logout}
              className="w-full flex items-center space-x-3 px-3 py-2 bg-red-500/20 hover:bg-red-500/30 rounded-xl border border-red-500/30 text-red-400 hover:text-red-300 transition-all duration-200"
            >
              <LogOut className="w-4 h-4" />
              <span className="text-sm">Cerrar Sesión</span>
            </button>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen lg:ml-0">
        {/* Top Header */}
        <div className="bg-black/20 backdrop-blur-xl border-b border-white/10">
          <div className="px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setIsSidebarOpen(true)}
                  className="lg:hidden p-2 text-white hover:text-green-400 transition-colors duration-200"
                >
                  <Menu className="w-6 h-6" />
                </button>
                <div className="lg:hidden">
                  <h1 className="text-xl font-bold text-white">Super Admin</h1>
                </div>
                <div className="hidden lg:block">
                  <h1 className="text-2xl font-black text-white">Super Admin Panel</h1>
                  <p className="text-gray-400 font-medium">Bienvenido, {user?.name}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 lg:hidden">
                <button
                  onClick={refreshAnalytics}
                  className="p-2 bg-white/10 hover:bg-white/20 rounded-xl border border-white/20 text-white transition-all duration-200"
                  title="Actualizar datos"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
                <button
                  onClick={logout}
                  className="p-2 bg-red-500/20 hover:bg-red-500/30 rounded-xl border border-red-500/30 text-red-400 hover:text-red-300 transition-all duration-200"
                  title="Cerrar Sesión"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-4 lg:p-8">
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard
                title="Visitantes Hoy"
                value={analytics.todayVisitors}
                icon={Eye}
                change="+12% vs ayer"
                changeType="positive"
                color="blue"
              />
              <StatCard
                title="Total Visitantes"
                value={analytics.totalVisitors}
                icon={Users}
                change="+8% esta semana"
                changeType="positive"
                color="green"
              />
              <StatCard
                title="Chats Activos"
                value={analytics.activeChats}
                icon={MessageSquare}
                change={`${analytics.completedChats} completados`}
                changeType="neutral"
                color="purple"
              />
              <StatCard
                title="Tiempo Respuesta"
                value={`${Math.floor(analytics.averageResponseTime / 60)}m ${analytics.averageResponseTime % 60}s`}
                icon={Clock}
                change="Promedio hoy"
                changeType="neutral"
                color="orange"
              />
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Top Pages */}
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-green-400" />
                  Páginas Más Visitadas
                </h3>
                <div className="space-y-3">
                  {analytics.topPages.slice(0, 5).map((page, index) => (
                    <div key={page.path} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="w-6 h-6 bg-green-400/20 text-green-400 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                          {index + 1}
                        </span>
                        <span className="text-white font-medium">{page.path}</span>
                      </div>
                      <span className="text-gray-400 font-medium">{page.visits} visitas</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Assistant Performance */}
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Users className="w-5 h-5 mr-2 text-blue-400" />
                  Rendimiento Asistentes
                </h3>
                <div className="space-y-3">
                  {analytics.chatsByAssistant.length > 0 ? (
                    analytics.chatsByAssistant.map((assistant) => (
                      <div key={assistant.assistantId} className="flex items-center justify-between">
                        <div>
                          <span className="text-white font-medium">{assistant.assistantName}</span>
                          <div className="flex items-center space-x-2 mt-1">
                            <span className="text-green-400 text-sm">
                              {assistant.activeChats} activos
                            </span>
                            <span className="text-gray-400">•</span>
                            <span className="text-blue-400 text-sm">
                              {assistant.completedChats} completados
                            </span>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-400 text-center py-4">
                      No hay asistentes registrados
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'users' && <UserManagement />}
        
        {activeTab === 'chats' && <LiveChatMonitor />}
        
        {activeTab === 'products' && <ProductManager />}

        {activeTab === 'analytics' && (
          <div className="space-y-6">
            {/* Visitors by Hour Chart */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">Visitantes por Hora (Hoy)</h3>
                <div className="text-sm text-gray-400">
                  Total: {analytics.visitorsByHour.reduce((sum, v) => sum + v.count, 0)} visitantes
                </div>
              </div>
              <div className="grid grid-cols-12 gap-1 sm:gap-2 h-40 mb-4">
                {analytics.visitorsByHour.map(({ hour, count }) => {
                  const maxCount = Math.max(...analytics.visitorsByHour.map(v => v.count)) || 1;
                  const height = count > 0 ? Math.max((count / maxCount) * 100, 8) : 2; // Minimum 8% height for visibility
                  const isCurrentHour = hour === new Date().getHours();
                  
                  return (
                    <div key={hour} className="flex flex-col items-center justify-end h-full">
                      {/* Visitor count label */}
                      {count > 0 && (
                        <span className="text-xs text-green-400 font-bold mb-1">
                          {count}
                        </span>
                      )}
                      
                      {/* Bar */}
                      <div 
                        className={`w-full rounded-t-sm transition-all duration-300 hover:opacity-75 cursor-pointer ${
                          count > 0 
                            ? isCurrentHour 
                              ? 'bg-gradient-to-t from-green-300 to-green-400 shadow-lg' 
                              : 'bg-gradient-to-t from-green-400 to-green-500'
                            : 'bg-gray-600/30'
                        }`}
                        style={{ 
                          height: `${height}%`,
                          minHeight: count > 0 ? '8px' : '2px'
                        }}
                        title={`${hour.toString().padStart(2, '0')}:00 - ${count} visitante${count !== 1 ? 's' : ''}`}
                      ></div>
                      
                      {/* Hour label */}
                      <span className={`text-xs mt-2 font-medium ${
                        isCurrentHour ? 'text-green-400' : 'text-gray-400'
                      }`}>
                        {hour.toString().padStart(2, '0')}
                      </span>
                    </div>
                  );
                })}
              </div>
              
              {/* Legend */}
              <div className="flex items-center justify-center space-x-6 text-xs text-gray-400">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-gradient-to-t from-green-300 to-green-400 rounded-sm"></div>
                  <span>Hora actual</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-gradient-to-t from-green-400 to-green-500 rounded-sm"></div>
                  <span>Otras horas</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-gray-600/30 rounded-sm"></div>
                  <span>Sin visitantes</span>
                </div>
              </div>
            </div>

            {/* Detailed Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 text-center">
                <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h4 className="text-lg font-bold text-white mb-2">Chats Completados</h4>
                <p className="text-3xl font-black text-green-400">{analytics.completedChats}</p>
                <p className="text-gray-400 text-sm mt-2">Total histórico</p>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 text-center">
                <AlertCircle className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <h4 className="text-lg font-bold text-white mb-2">Contactos Pendientes</h4>
                <p className="text-3xl font-black text-orange-400">{analytics.pendingContacts}</p>
                <p className="text-gray-400 text-sm mt-2">Requieren seguimiento</p>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 text-center">
                <Activity className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h4 className="text-lg font-bold text-white mb-2">Tasa de Conversión</h4>
                <p className="text-3xl font-black text-blue-400">
                  {analytics.totalChats > 0 ? Math.round((analytics.completedChats / analytics.totalChats) * 100) : 0}%
                </p>
                <p className="text-gray-400 text-sm mt-2">Chats a ventas</p>
              </div>
            </div>
          </div>
        )}
        </div>
      </div>
    </div>
  );
};

export default SuperAdminDashboard;