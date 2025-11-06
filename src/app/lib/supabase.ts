import { createClient } from '@supabase/supabase-js';

// Visitor tracking function
export const trackVisitor = async () => {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    if (!supabaseUrl || !supabaseAnonKey) {
      console.warn('Supabase environment variables not set, skipping visitor tracking');
      return;
    }

    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    const response = await fetch('https://ipapi.co/json/');
    const geoData = await response.json();

    const visitorData = {
      ip_address: geoData.ip,
      user_agent: navigator.userAgent,
      referrer: document.referrer || null,
      page_url: window.location.href,
      timestamp: new Date().toISOString(),
      country: geoData.country_name || null,
      city: geoData.city || null,
      region: geoData.region || null,
      timezone: geoData.timezone || null,
      latitude: geoData.latitude || null,
      longitude: geoData.longitude || null,
      isp: geoData.org || null,
      device_type: getDeviceType(),
      browser: getBrowserInfo(),
      os: getOSInfo(),
      screen_resolution: `${window.screen.width}x${window.screen.height}`,
      language: navigator.language,
      session_id: getSessionId(),
    };

    const { error } = await supabase
      .from('visitors')
      .insert([visitorData]);

    if (error) {
      console.error('Error tracking visitor:', error);
    }
  } catch (error) {
    console.error('Error in visitor tracking:', error);
  }
};

// Helper functions
function getDeviceType() {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return 'tablet';
  }
  if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
    return 'mobile';
  }
  return 'desktop';
}

function getBrowserInfo() {
  const ua = navigator.userAgent;
  let browser = 'Unknown';

  if (ua.indexOf('Chrome') > -1) browser = 'Chrome';
  else if (ua.indexOf('Safari') > -1) browser = 'Safari';
  else if (ua.indexOf('Firefox') > -1) browser = 'Firefox';
  else if (ua.indexOf('MSIE') > -1 || ua.indexOf('Trident/') > -1) browser = 'Internet Explorer';
  else if (ua.indexOf('Edge') > -1) browser = 'Edge';

  return browser;
}

function getOSInfo() {
  const ua = navigator.userAgent;
  let os = 'Unknown';

  if (ua.indexOf('Windows NT') > -1) os = 'Windows';
  else if (ua.indexOf('Mac OS X') > -1) os = 'macOS';
  else if (ua.indexOf('Linux') > -1) os = 'Linux';
  else if (ua.indexOf('Android') > -1) os = 'Android';
  else if (ua.indexOf('iOS') > -1 || ua.indexOf('iPhone') > -1 || ua.indexOf('iPad') > -1) os = 'iOS';

  return os;
}

function getSessionId() {
  let sessionId = localStorage.getItem('portfolio_session_id');
  if (!sessionId) {
    sessionId = Date.now().toString() + Math.random().toString(36).substr(2, 9);
    localStorage.setItem('portfolio_session_id', sessionId);
  }
  return sessionId;
}