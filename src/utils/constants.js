// App Configuration
export const APP_NAME = import.meta.env.VITE_APP_NAME || 'Free India Tools';
export const APP_URL = import.meta.env.VITE_APP_URL || 'https://freeindiatools.com';
export const APP_ENV = import.meta.env.VITE_APP_ENV || 'production';

// Tool Categories
export const CATEGORIES = [
  { id: 'ai', name: 'AI Tools', icon: '🤖', color: 'from-purple-500 to-pink-500' },
  { id: 'design', name: 'Design', icon: '🎨', color: 'from-blue-500 to-cyan-500' },
  { id: 'productivity', name: 'Productivity', icon: '⚡', color: 'from-yellow-500 to-orange-500' },
  { id: 'marketing', name: 'Marketing', icon: '📢', color: 'from-green-500 to-emerald-500' },
  { id: 'developer', name: 'Developer Tools', icon: '💻', color: 'from-indigo-500 to-purple-500' },
  { id: 'writing', name: 'Writing', icon: '✍️', color: 'from-red-500 to-pink-500' },
  { id: 'video', name: 'Video', icon: '🎬', color: 'from-teal-500 to-cyan-500' },
  { id: 'audio', name: 'Audio', icon: '🎵', color: 'from-violet-500 to-purple-500' },
  { id: 'photo', name: 'Photo Editing', icon: '📸', color: 'from-pink-500 to-rose-500' },
  { id: 'business', name: 'Business', icon: '💼', color: 'from-blue-500 to-indigo-500' },
  { id: 'education', name: 'Education', icon: '📚', color: 'from-amber-500 to-orange-500' },
  { id: 'social', name: 'Social Media', icon: '📱', color: 'from-cyan-500 to-blue-500' },
  { id: 'seo', name: 'SEO Tools', icon: '🔍', color: 'from-green-500 to-teal-500' },
  { id: 'analytics', name: 'Analytics', icon: '📊', color: 'from-purple-500 to-indigo-500' },
  { id: 'other', name: 'Other', icon: '🔧', color: 'from-gray-500 to-slate-500' },
];

// Tool Features/Tags
export const TOOL_FEATURES = [
  'Free Forever',
  'No Sign-up Required',
  'No Credit Card',
  'Open Source',
  'API Available',
  'Mobile App',
  'Browser Extension',
  'Dark Mode',
  'Unlimited Usage',
  'Export Options',
  'Collaboration',
  'Cloud Storage',
  'Real-time',
  'AI Powered',
  'Templates',
];

// Tool Status
export const TOOL_STATUS = {
  PENDING: 'pending',
  APPROVED: 'approved',
  REJECTED: 'rejected',
  FEATURED: 'featured',
  REPORTED: 'reported',
};

// User Roles
export const USER_ROLES = {
  USER: 'user',
  ADMIN: 'admin',
  MODERATOR: 'moderator',
};

// Sort Options
export const SORT_OPTIONS = [
  { value: 'newest', label: 'Newest First' },
  { value: 'popular', label: 'Most Popular' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'name', label: 'Name (A-Z)' },
];

// Rating Values
export const RATING_VALUES = [1, 2, 3, 4, 5];

// Pagination
export const ITEMS_PER_PAGE = 12;
export const ITEMS_PER_PAGE_ADMIN = 20;

// Animation Variants
export const FADE_IN_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
};

export const STAGGER_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Toast Duration
export const TOAST_DURATION = 5000;

// File Upload
export const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
export const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];

// Admin Emails
export const ADMIN_EMAILS = (import.meta.env.VITE_ADMIN_EMAILS || '').split(',').filter(Boolean);

// Local Storage Keys
export const STORAGE_KEYS = {
  THEME: 'fit-theme',
  USER: 'fit-user',
  RECENT_SEARCHES: 'fit-recent-searches',
  FAVORITES: 'fit-favorites',
};

// API Endpoints (if backend exists in future)
export const API_ENDPOINTS = {
  TOOLS: '/api/tools',
  USERS: '/api/users',
  ANALYTICS: '/api/analytics',
  REPORTS: '/api/reports',
};

// Social Links
export const SOCIAL_LINKS = {
  twitter: 'https://twitter.com/freeindiatools',
  instagram: 'https://instagram.com/freeindiatools',
  linkedin: 'https://linkedin.com/company/freeindiatools',
  github: 'https://github.com/freeindiatools',
};

// SEO Defaults
export const SEO_DEFAULTS = {
  title: 'Free India Tools - Discover Amazing Free AI Tools',
  description:
    'India\'s largest directory of free AI tools, design tools, productivity apps, and more. No credit card required. Discover, submit, and share amazing free tools.',
  keywords: 'free tools, AI tools, design tools, productivity, india, free software, web tools',
  ogImage: '/og-image.png',
};

// Feature Flags
export const FEATURES = {
  ENABLE_COMMENTS: false,
  ENABLE_RATINGS: true,
  ENABLE_FAVORITES: true,
  ENABLE_SHARING: true,
  ENABLE_REPORTS: true,
  ENABLE_ADS: false, // Enable after getting good traffic
  ENABLE_NEWSLETTER: true,
};

export default {
  APP_NAME,
  APP_URL,
  CATEGORIES,
  TOOL_FEATURES,
  TOOL_STATUS,
  USER_ROLES,
  SORT_OPTIONS,
  ADMIN_EMAILS,
  STORAGE_KEYS,
  FEATURES,
};
