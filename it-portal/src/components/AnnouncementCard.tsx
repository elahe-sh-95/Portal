'use client';

import { Announcement } from '@/types';
import { AlertTriangle, Info, Wrench, Bell } from 'lucide-react';

interface AnnouncementCardProps {
  announcement: Announcement;
}

const priorityConfig = {
  critical: {
    bgColor: 'bg-red-50 dark:bg-red-900/20',
    borderColor: 'border-red-500',
    textColor: 'text-red-700 dark:text-red-400',
    badgeColor: 'bg-red-100 dark:bg-red-900/40 text-red-800 dark:text-red-300',
    icon: AlertTriangle,
  },
  warning: {
    bgColor: 'bg-amber-50 dark:bg-amber-900/20',
    borderColor: 'border-amber-500',
    textColor: 'text-amber-700 dark:text-amber-400',
    badgeColor: 'bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300',
    icon: AlertTriangle,
  },
  maintenance: {
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    borderColor: 'border-blue-500',
    textColor: 'text-blue-700 dark:text-blue-400',
    badgeColor: 'bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300',
    icon: Wrench,
  },
  info: {
    bgColor: 'bg-green-50 dark:bg-green-900/20',
    borderColor: 'border-green-500',
    textColor: 'text-green-700 dark:text-green-400',
    badgeColor: 'bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-300',
    icon: Info,
  },
};

export default function AnnouncementCard({ announcement }: AnnouncementCardProps) {
  const config = priorityConfig[announcement.priority];
  const Icon = config.icon;
  
  const formattedDate = new Date(announcement.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div
      className={`relative overflow-hidden rounded-lg border-l-4 ${config.borderColor} ${config.bgColor} p-6 shadow-sm transition-all duration-200 hover:shadow-md dark:border-opacity-50`}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className={`rounded-full p-2 ${config.badgeColor}`}>
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <h3 className={`font-semibold ${config.textColor}`}>{announcement.title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {formattedDate} • {announcement.author || 'IT Team'}
            </p>
          </div>
        </div>
        <span
          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium uppercase ${config.badgeColor}`}
        >
          {announcement.priority}
        </span>
      </div>
      <div className="mt-4">
        <p className="text-gray-700 dark:text-gray-300">{announcement.content}</p>
      </div>
    </div>
  );
}
