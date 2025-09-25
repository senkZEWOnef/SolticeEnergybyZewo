'use client';

import { useEffect } from 'react';
import { useAnalytics } from '@/hooks/useAnalytics';
import { usePathname } from 'next/navigation';

const VisitorTracker = () => {
  const { trackPageVisit, trackVisitor } = useAnalytics();
  const pathname = usePathname();

  useEffect(() => {
    // Track visitor on component mount
    trackVisitor();
  }, [trackVisitor]);

  useEffect(() => {
    // Track page visit when pathname changes
    trackPageVisit(pathname);
  }, [pathname, trackPageVisit]);

  return null; // This component doesn't render anything
};

export default VisitorTracker;