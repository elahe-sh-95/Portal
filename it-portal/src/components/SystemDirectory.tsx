'use client';

import { SystemTool } from '@/types';
import { Search } from 'lucide-react';
import * as Icons from 'lucide-react';
import { useState, useMemo } from 'react';

interface SystemDirectoryProps {
  tools: SystemTool[];
}

const iconMap: Record<string, keyof typeof Icons> = {
  gitlab: 'Gitlab',
  jira: 'Jira',
  confluence: 'BookOpen',
  ticket: 'Ticket',
  activity: 'Activity',
  server: 'Server',
  code: 'Code',
  'bar-chart': 'BarChart3',
  lock: 'Lock',
  package: 'Package',
  users: 'Users',
  book: 'Book',
};

export default function SystemDirectory({ tools }: SystemDirectoryProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = useMemo(() => {
    const cats = new Set(tools.map((tool) => tool.category));
    return ['all', ...Array.from(cats)];
  }, [tools]);

  const filteredTools = useMemo(() => {
    return tools.filter((tool) => {
      const matchesSearch =
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [tools, searchQuery, selectedCategory]);

  return (
    <div className="space-y-6">
      {/* Search and Filter Bar */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search tools..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-lg border border-gray-300 bg-white pl-10 pr-4 py-2.5 text-sm shadow-sm transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-primary-600 text-white shadow-sm'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              {category === 'all' ? 'All' : category}
            </button>
          ))}
        </div>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredTools.map((tool) => {
          const IconComponent = Icons[iconMap[tool.icon] || 'Globe'];
          
          return (
            <a
              key={tool.id}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-primary-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-primary-600"
            >
              <div className="flex items-start justify-between">
                <div className="rounded-lg bg-gradient-to-br from-primary-500 to-primary-600 p-3 text-white shadow-md group-hover:from-primary-600 group-hover:to-primary-700">
                  <IconComponent className="h-6 w-6" />
                </div>
                <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600 dark:bg-gray-700 dark:text-gray-300">
                  {tool.category}
                </span>
              </div>
              <div className="mt-4">
                <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 dark:text-white dark:group-hover:text-primary-400">
                  {tool.name}
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{tool.description}</p>
              </div>
              <div className="mt-4 flex items-center text-sm font-medium text-primary-600 opacity-0 transition-opacity group-hover:opacity-100 dark:text-primary-400">
                Open Tool
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          );
        })}
      </div>

      {filteredTools.length === 0 && (
        <div className="text-center py-12">
          <Search className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">No tools found</h3>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Try adjusting your search or filter to find what you're looking for.
          </p>
        </div>
      )}
    </div>
  );
}
