import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, PlusCircle, User, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { useAuth } from '@contexts/auth-context';

const BottomNav = () => {
  const location = useLocation();
  const { user } = useAuth();

  const isAdmin = user?.role === 'admin' || user?.isAdmin;

  const navItems = [
    {
      name: 'Home',
      icon: Home,
      path: '/',
      color: 'text-primary-600',
      show: true,
    },
    {
      name: 'Create',
      icon: PlusCircle,
      path: '/create',
      color: 'text-green-600',
      show: true,
    },
    {
      name: 'You',
      icon: User,
      path: user ? '/profile' : '/login',
      color: 'text-purple-600',
      show: true,
    },
    {
      name: 'Admin',
      icon: Shield,
      path: '/admin',
      color: 'text-red-600',
      show: isAdmin,
    },
  ].filter((item) => item.show);

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/90 dark:bg-dark-card/90 backdrop-blur-lg border-t border-gray-200 dark:border-dark-border md:hidden">
      <div className="flex items-center justify-around h-16 px-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.path);

          return (
            <Link
              key={item.name}
              to={item.path}
              className="relative flex flex-col items-center justify-center w-full h-full group"
            >
              <motion.div
                className="relative flex flex-col items-center"
                whileTap={{ scale: 0.9 }}
              >
                {/* Active Indicator */}
                {active && (
                  <motion.div
                    layoutId="bottomNav"
                    className="absolute -top-1 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}

                {/* Icon */}
                <div
                  className={clsx(
                    'p-2 rounded-xl transition-all duration-200',
                    active
                      ? `${item.color} bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20`
                      : 'text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-200'
                  )}
                >
                  <Icon
                    className={clsx(
                      'w-6 h-6 transition-transform',
                      active && 'scale-110'
                    )}
                  />
                </div>

                {/* Label */}
                <span
                  className={clsx(
                    'text-xs font-medium mt-0.5 transition-colors',
                    active
                      ? 'text-gray-900 dark:text-white'
                      : 'text-gray-500 dark:text-gray-400'
                  )}
                >
                  {item.name}
                </span>

                {/* Badge for Admin */}
                {item.name === 'Admin' && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                )}
              </motion.div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
