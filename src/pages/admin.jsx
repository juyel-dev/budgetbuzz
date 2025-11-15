import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Package, Users, BarChart3, CheckCircle, XCircle } from 'lucide-react';
import Card from '@components/ui/card';
import Button from '@components/ui/button';
import Sidebar from '@components/layout/sidebar';
import { useAuth } from '@contexts/auth-context';

const Admin = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    if (!user?.isAdmin) {
      navigate('/');
    }
  }, [user, navigate]);

  if (!user?.isAdmin) {
    return null;
  }

  const stats = [
    { label: 'Total Tools', value: 0, icon: Package, color: 'bg-blue-500' },
    { label: 'Total Users', value: 0, icon: Users, color: 'bg-green-500' },
    { label: 'Pending Review', value: 0, icon: CheckCircle, color: 'bg-yellow-500' },
    { label: 'Total Views', value: 0, icon: BarChart3, color: 'bg-purple-500' },
  ];

  return (
    <div className="flex">
      <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />

      <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'lg:ml-280' : ''}`}>
        <div className="container mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-8">
              <Shield className="w-10 h-10 text-red-600" />
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Admin Dashboard
                </h1>
                <p className="text-gray-600 dark:text-gray-400">
                  Welcome back, {user.displayName || 'Admin'}
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card padding="lg">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-gray-900 dark:text-white">
                          {stat.value}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {stat.label}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Quick Actions */}
            <Card padding="lg" className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Quick Actions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button variant="primary" icon={CheckCircle} fullWidth>
                  Review Submissions
                </Button>
                <Button variant="secondary" icon={Users} fullWidth>
                  Manage Users
                </Button>
                <Button variant="outline" icon={BarChart3} fullWidth>
                  View Analytics
                </Button>
              </div>
            </Card>

            {/* Recent Activity */}
            <Card padding="lg">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Recent Activity
              </h2>
              <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                No recent activity
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
