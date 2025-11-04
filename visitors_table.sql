-- Create the visitors table for tracking portfolio website visitors
-- Run this SQL in your Supabase SQL editor or database management tool

CREATE TABLE IF NOT EXISTS visitors (
    id SERIAL PRIMARY KEY,
    ip_address INET,
    user_agent TEXT,
    referrer TEXT,
    page_url TEXT NOT NULL,
    timestamp TIMESTAMPTZ DEFAULT NOW(),
    country TEXT,
    city TEXT,
    region TEXT,
    timezone TEXT,
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8),
    isp TEXT,
    device_type TEXT CHECK (device_type IN ('mobile', 'tablet', 'desktop')),
    browser TEXT,
    os TEXT,
    screen_resolution TEXT,
    language TEXT,
    session_id TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_visitors_timestamp ON visitors(timestamp);
CREATE INDEX IF NOT EXISTS idx_visitors_session_id ON visitors(session_id);
CREATE INDEX IF NOT EXISTS idx_visitors_ip_address ON visitors(ip_address);
CREATE INDEX IF NOT EXISTS idx_visitors_country ON visitors(country);
CREATE INDEX IF NOT EXISTS idx_visitors_device_type ON visitors(device_type);
CREATE INDEX IF NOT EXISTS idx_visitors_page_url ON visitors(page_url);

-- Create a view for daily visitor statistics
CREATE OR REPLACE VIEW daily_visitor_stats AS
SELECT
    DATE(timestamp) as date,
    COUNT(DISTINCT session_id) as unique_visitors,
    COUNT(*) as total_visits,
    COUNT(DISTINCT ip_address) as unique_ips,
    COUNT(DISTINCT CASE WHEN device_type = 'mobile' THEN session_id END) as mobile_visitors,
    COUNT(DISTINCT CASE WHEN device_type = 'desktop' THEN session_id END) as desktop_visitors,
    COUNT(DISTINCT CASE WHEN device_type = 'tablet' THEN session_id END) as tablet_visitors,
    ARRAY_AGG(DISTINCT country) FILTER (WHERE country IS NOT NULL) as countries_visited,
    ARRAY_AGG(DISTINCT browser) FILTER (WHERE browser IS NOT NULL) as browsers_used
FROM visitors
GROUP BY DATE(timestamp)
ORDER BY date DESC;

-- Create a view for real-time visitor activity (last 24 hours)
CREATE OR REPLACE VIEW recent_visitor_activity AS
SELECT
    session_id,
    ip_address,
    country,
    city,
    device_type,
    browser,
    os,
    page_url,
    timestamp,
    CASE
        WHEN timestamp > NOW() - INTERVAL '5 minutes' THEN 'online'
        WHEN timestamp > NOW() - INTERVAL '1 hour' THEN 'recent'
        ELSE 'away'
    END as status
FROM visitors
WHERE timestamp > NOW() - INTERVAL '24 hours'
ORDER BY timestamp DESC;

-- Enable Row Level Security (RLS) if needed for your application
-- ALTER TABLE visitors ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow inserts (for the tracking function)
-- CREATE POLICY "Allow visitor tracking inserts" ON visitors
-- FOR INSERT WITH CHECK (true);

-- Comments for documentation
COMMENT ON TABLE visitors IS 'Tracks visitor analytics for the portfolio website';
COMMENT ON COLUMN visitors.ip_address IS 'Visitor IP address (anonymized for privacy)';
COMMENT ON COLUMN visitors.session_id IS 'Unique session identifier for tracking user journeys';
COMMENT ON COLUMN visitors.device_type IS 'Type of device: mobile, tablet, or desktop';
COMMENT ON VIEW daily_visitor_stats IS 'Daily aggregated visitor statistics';
COMMENT ON VIEW recent_visitor_activity IS 'Real-time view of recent visitor activity';