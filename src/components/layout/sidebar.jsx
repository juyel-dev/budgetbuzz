import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Package,
  Users,
  Settings,
  BarChart3,
  Flag,
  MessageSquare,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const Sidebar = ({ isOpen, onToggle }) => {
  const location = useLocation();

  const menuItems = [
    {
      name: 'Dashboard',
      icon: LayoutDashboard,
      path: '/admin',
      description: 'Overview & stats',
    },
    {
      name: 'Tools',
      icon: Package,
      path: '/admin/tools',
      description: 'Manage all tools',
    },
    {
      name: 'Users',
      icon: Users,
      path: '/admin/users',
      description: 'User management',
    },
    {
      name: 'Analytics',
      icon: BarChart3,
      path: '/admin/analytics',
      description: 'Site analytics',
    },
    {
      name: 'Reports',
      icon: Flag,
      path: '/admin/reports',
      description: 'User reports',
    },
    {
      name: 'Feedback',
      icon: MessageSquare,
      path: '/admin/feedback',
      description: 'User feedback',
    },
    {
      name: 'Settings',
      icon: Settings,
      path: '/admin/settings',
      description: 'Site settings',
    },
  ];

  const isActive = (path) => {
    if (path === '/admin') {
      return location.pathname === '/admin';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onToggle}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{
          x: isOpen ? 0 : -280,
          width: isOpen ? 280 : 0,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className={clsx(
          'fixed left-0 top-16 h-[calc(100vh-4rem)] bg-white dark:bg-dark-card border-r border-gray-200 dark:border-dark-border z-40 overflow-hidden',
          'lg:sticky lg:translate-x-0'
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-4 border-b border-gray-200 dark:border-dark-border">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-600 to-orange-600 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-sm font-semibold text-gray-900 dark:text-white">
                  Admin Panel
                </h2>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  God Mode Activated
                </p>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 overflow-y-auto p-3 space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={clsx(
                    'group relative flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200',
                    active
                      ? 'bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 text-primary-700 dark:text-primary-400'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  )}
                >
                  {/* Active Indicator */}
                  {active && (
                    <motion.div
                      layoutId="adminSidebar"
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-primary-600 to-secondary-600 rounded-r-full"
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}

                  <Icon
                    className={clsx(
                      'w-5 h-5 transition-transform',
                      active && 'scale-110'
                    )}
                  />
                  <div className="flex-1">
                    <p className={clsx('text-sm font-medium', active && 'font-semibold')}>
                      {item.name}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-1">
                      {item.description}
                    </p>
                  </div>

                  {/* Hover effect */}
                  <div
                    className={clsx(
                      'absolute inset-0 rounded-lg bg-gradient-to-r from-primary-600/5 to-secondary-600/5 opacity-0 group-hover:opacity-100 transition-opacity',
                      active && 'opacity-100'
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200 dark:border-dark-border">
            <div className="px-3 py-2 rounded-lg bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 border border-primary-200 dark:border-primary-800">
              <p className="text-xs font-medium text-primary-700 dark:text-primary-400">
                Quick Tip
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                Use keyboard shortcuts for faster navigation
              </p>
            </div>
          </div>
        </div>
      </motion.aside>

      {/* Toggle Button - Desktop */}
      <button
        onClick={onToggle}
        className="hidden lg:flex fixed left-0 top-1/2 -translate-y-1/2 z-50 items-center justify-center w-6 h-12 bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-r-lg shadow-md hover:shadow-lg transition-all duration-200 text-gray-600 dark:text-gray-300"
        style={{ left: isOpen ? '280px' : '0px' }}
      >
        {isOpen ? (
          <ChevronLeft className="w-4 h-4" />
        ) : (
          <ChevronRight className="w-4 h-4" />
        )}
      </button>
    </>
  );
};

export default Sidebar;
