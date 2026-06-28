import { Header } from '@/components/Header';
import AnnouncementCard from '@/components/AnnouncementCard';
import SystemDirectory from '@/components/SystemDirectory';
import portalConfig from '../data/portal-config.json';
import { Bell, Link } from 'lucide-react';

export default function Home() {
  const sortedAnnouncements = [...portalConfig.announcements].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Welcome to the IT Portal
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Your centralized dashboard for IT announcements and internal systems access.
          </p>
        </div>

        {/* Announcements Section */}
        <section className="mb-12">
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-lg bg-primary-100 p-2 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
              <Bell className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                IT Announcements
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Latest updates, maintenance schedules, and alerts
              </p>
            </div>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2">
            {sortedAnnouncements.map((announcement) => (
              <AnnouncementCard key={announcement.id} announcement={announcement} />
            ))}
          </div>
        </section>

        {/* Internal Systems Directory */}
        <section>
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-lg bg-primary-100 p-2 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
              <Link className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Internal Systems
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Quick access to all enterprise tools and services
              </p>
            </div>
          </div>
          
          <SystemDirectory tools={portalConfig.tools} />
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-12 border-t border-gray-200 bg-white py-6 dark:border-gray-700 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            IT Portal • For internal use only • Contact IT Support for assistance
          </p>
        </div>
      </footer>
    </div>
  );
}
