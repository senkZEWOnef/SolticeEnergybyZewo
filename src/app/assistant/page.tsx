'use client';

import { useAuth } from '@/contexts/AuthContext';
import LoginPage from '@/components/Auth/LoginPage';
import AssistantDashboard from '@/components/Assistant/AssistantDashboard';
import { useEffect } from 'react';
import { useAnalytics } from '@/hooks/useAnalytics';

export default function AssistantPage() {
  const { isAuthenticated, user, isLoading } = useAuth();
  const { trackPageVisit } = useAnalytics();

  useEffect(() => {
    trackPageVisit('/assistant');
  }, [trackPageVisit]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-white text-center">
          <div className="w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-xl font-semibold">Verificando acceso...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated || !user) {
    return <LoginPage />;
  }

  // Only assistants can access this page
  if (user.role !== 'assistant') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">🚫</span>
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Acceso Denegado</h1>
          <p className="text-gray-400">Esta página es solo para asistentes.</p>
        </div>
      </div>
    );
  }

  return <AssistantDashboard />;
}