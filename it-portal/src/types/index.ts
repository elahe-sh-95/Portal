export interface Announcement {
  id: string;
  title: string;
  content: string;
  priority: 'critical' | 'warning' | 'info' | 'maintenance';
  createdAt: string;
  author?: string;
}

export interface SystemTool {
  id: string;
  name: string;
  description: string;
  url: string;
  icon: string;
  category: string;
}

export interface PortalConfig {
  announcements: Announcement[];
  tools: SystemTool[];
}
