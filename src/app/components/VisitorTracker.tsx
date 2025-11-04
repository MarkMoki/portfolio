'use client';

import { useEffect } from 'react';
import { trackVisitor } from '../lib/supabase';

const VisitorTracker = () => {
  useEffect(() => {
    // Track visitor on component mount
    trackVisitor();

    // Track page views on route changes (for SPA navigation)
    const handleRouteChange = () => {
      trackVisitor();
    };

    // Listen for navigation events
    window.addEventListener('popstate', handleRouteChange);

    // Track when user comes back to tab
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        // User returned to tab, track as potential new session
        trackVisitor();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default VisitorTracker;