'use client';

import { useState, useEffect } from 'react';
import { SiteAnalytics } from '@/types/auth';

export const useAnalytics = () => {
  const [analytics, setAnalytics] = useState<SiteAnalytics>({
    totalVisitors: 0,
    todayVisitors: 0,
    activeChats: 0,
    totalChats: 0,
    pendingContacts: 0,
    completedChats: 0,
    averageResponseTime: 0,
    topPages: [],
    visitorsByHour: [],
    chatsBySecretary: []
  });

  const [isLoading, setIsLoading] = useState(true);

  // Track page visit
  const trackPageVisit = (path: string) => {
    const visits = JSON.parse(localStorage.getItem('soltice_page_visits') || '[]');
    const today = new Date().toDateString();
    
    visits.push({
      path,
      timestamp: new Date().toISOString(),
      date: today,
      hour: new Date().getHours()
    });
    
    localStorage.setItem('soltice_page_visits', JSON.stringify(visits));
  };

  // Track visitor
  const trackVisitor = () => {
    const visitorId = localStorage.getItem('soltice_visitor_id') || `visitor-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    localStorage.setItem('soltice_visitor_id', visitorId);

    const visitors = JSON.parse(localStorage.getItem('soltice_visitors') || '[]');
    const today = new Date().toDateString();
    
    const existingVisitor = visitors.find((v: { id: string, date: string }) => 
      v.id === visitorId && v.date === today
    );

    if (!existingVisitor) {
      visitors.push({
        id: visitorId,
        timestamp: new Date().toISOString(),
        date: today,
        hour: new Date().getHours(),
        userAgent: navigator.userAgent,
        referrer: document.referrer
      });
      
      localStorage.setItem('soltice_visitors', JSON.stringify(visitors));
    }
  };

  // Calculate analytics
  const calculateAnalytics = () => {
    const visits = JSON.parse(localStorage.getItem('soltice_page_visits') || '[]');
    const visitors = JSON.parse(localStorage.getItem('soltice_visitors') || '[]');
    const chatSessions = JSON.parse(localStorage.getItem('soltice_chat_sessions') || '[]');
    const formSubmissions = JSON.parse(localStorage.getItem('soltice_form_submissions') || '[]');
    const secretaries = JSON.parse(localStorage.getItem('soltice_secretaries') || '[]');

    const today = new Date().toDateString();
    
    // Visitors analytics
    const totalVisitors = new Set(visitors.map((v: { id: string }) => v.id)).size;
    const todayVisitors = visitors.filter((v: { date: string }) => v.date === today).length;

    // Chat analytics
    const activeChats = chatSessions.filter((c: { status: string }) => c.status === 'active').length;
    const totalChats = chatSessions.length;
    const completedChats = chatSessions.filter((c: { status: string }) => c.status === 'completed').length;
    const pendingContacts = formSubmissions.filter((f: { status: string }) => f.status === 'pending').length;

    // Response time calculation (mock data for now)
    const averageResponseTime = Math.floor(Math.random() * 300) + 60; // 1-5 minutes

    // Top pages
    const pageVisitCounts: { [key: string]: number } = {};
    visits.forEach((visit: { path: string }) => {
      pageVisitCounts[visit.path] = (pageVisitCounts[visit.path] || 0) + 1;
    });
    
    const topPages = Object.entries(pageVisitCounts)
      .map(([path, visits]) => ({ path, visits }))
      .sort((a, b) => b.visits - a.visits)
      .slice(0, 5);

    // Visitors by hour
    const hourCounts: { [key: number]: number } = {};
    for (let i = 0; i < 24; i++) {
      hourCounts[i] = 0;
    }
    
    visitors.forEach((visitor: { hour: number }) => {
      if (visitor.hour !== undefined) {
        hourCounts[visitor.hour]++;
      }
    });
    
    const visitorsByHour = Object.entries(hourCounts)
      .map(([hour, count]) => ({ hour: parseInt(hour), count }));

    // Chats by secretary
    const chatsBySecretary = secretaries.map((secretary: { id: string, name: string }) => {
      const secretaryChats = chatSessions.filter((c: { assignedTo?: string }) => c.assignedTo === secretary.id);
      const activeChats = secretaryChats.filter((c: { status: string }) => c.status === 'active').length;
      const completedChats = secretaryChats.filter((c: { status: string }) => c.status === 'completed').length;
      
      return {
        secretaryId: secretary.id,
        secretaryName: secretary.name,
        activeChats,
        completedChats
      };
    });

    return {
      totalVisitors,
      todayVisitors,
      activeChats,
      totalChats,
      pendingContacts,
      completedChats,
      averageResponseTime,
      topPages,
      visitorsByHour,
      chatsBySecretary
    };
  };

  // Load analytics on mount and set up refresh interval
  useEffect(() => {
    const loadAnalytics = () => {
      setAnalytics(calculateAnalytics());
      setIsLoading(false);
    };

    loadAnalytics();
    
    // Refresh analytics every 30 seconds
    const interval = setInterval(loadAnalytics, 30000);

    return () => clearInterval(interval);
  }, []);

  // Track visitor on first load
  useEffect(() => {
    trackVisitor();
  }, []);

  return {
    analytics,
    isLoading,
    trackPageVisit,
    trackVisitor,
    refreshAnalytics: () => setAnalytics(calculateAnalytics())
  };
};