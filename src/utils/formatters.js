import { format, formatDistanceToNow, isToday, isYesterday, parseISO } from 'date-fns';

// Format number with K, M, B suffixes
export const formatNumber = (num) => {
  if (!num) return '0';

  const absNum = Math.abs(num);

  if (absNum >= 1000000000) {
    return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'B';
  }
  if (absNum >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
  }
  if (absNum >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
  }

  return num.toString();
};

// Format number with commas
export const formatNumberWithCommas = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

// Format currency (INR)
export const formatCurrency = (amount, currency = 'INR') => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount);
};

// Format percentage
export const formatPercentage = (value, decimals = 1) => {
  return `${value.toFixed(decimals)}%`;
};

// Format date (Jan 15, 2024)
export const formatDate = (date) => {
  if (!date) return '';

  try {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    return format(dateObj, 'MMM dd, yyyy');
  } catch (error) {
    console.error('Error formatting date:', error);
    return '';
  }
};

// Format date with time (Jan 15, 2024 at 3:30 PM)
export const formatDateTime = (date) => {
  if (!date) return '';

  try {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    return format(dateObj, 'MMM dd, yyyy \'at\' h:mm a');
  } catch (error) {
    console.error('Error formatting date time:', error);
    return '';
  }
};

// Format relative time (2 hours ago, 3 days ago)
export const formatRelativeTime = (date) => {
  if (!date) return '';

  try {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;

    if (isToday(dateObj)) {
      return 'Today at ' + format(dateObj, 'h:mm a');
    }

    if (isYesterday(dateObj)) {
      return 'Yesterday at ' + format(dateObj, 'h:mm a');
    }

    return formatDistanceToNow(dateObj, { addSuffix: true });
  } catch (error) {
    console.error('Error formatting relative time:', error);
    return '';
  }
};

// Format time only (3:30 PM)
export const formatTime = (date) => {
  if (!date) return '';

  try {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    return format(dateObj, 'h:mm a');
  } catch (error) {
    console.error('Error formatting time:', error);
    return '';
  }
};

// Format file size
export const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
};

// Format duration (in seconds to HH:MM:SS)
export const formatDuration = (seconds) => {
  if (!seconds || seconds < 0) return '0:00';

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);

  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }

  return `${minutes}:${secs.toString().padStart(2, '0')}`;
};

// Truncate text with ellipsis
export const truncateText = (text, maxLength = 100, suffix = '...') => {
  if (!text) return '';
  if (text.length <= maxLength) return text;

  return text.substring(0, maxLength).trim() + suffix;
};

// Truncate in middle (for long URLs, hashes)
export const truncateMiddle = (text, startChars = 10, endChars = 10, separator = '...') => {
  if (!text) return '';
  if (text.length <= startChars + endChars) return text;

  return text.substring(0, startChars) + separator + text.substring(text.length - endChars);
};

// Format phone number (for Indian numbers)
export const formatPhoneNumber = (phone) => {
  if (!phone) return '';

  // Remove all non-numeric characters
  const cleaned = phone.replace(/\D/g, '');

  // Format as +91 XXXXX XXXXX
  if (cleaned.length === 10) {
    return `+91 ${cleaned.substring(0, 5)} ${cleaned.substring(5)}`;
  }

  if (cleaned.length === 12 && cleaned.startsWith('91')) {
    return `+91 ${cleaned.substring(2, 7)} ${cleaned.substring(7)}`;
  }

  return phone;
};

// Format social media handle (add @ if missing)
export const formatSocialHandle = (handle) => {
  if (!handle) return '';
  return handle.startsWith('@') ? handle : `@${handle}`;
};

// Format URL (remove protocol and www)
export const formatURL = (url) => {
  if (!url) return '';

  try {
    const urlObj = new URL(url);
    return urlObj.hostname.replace('www.', '') + urlObj.pathname.replace(/\/$/, '');
  } catch (error) {
    return url;
  }
};

// Format rating (1.5 -> 1.5 out of 5)
export const formatRating = (rating, maxRating = 5) => {
  if (!rating) return '0 out of 5';
  return `${rating.toFixed(1)} out of ${maxRating}`;
};

// Format list to sentence (['a', 'b', 'c'] -> "a, b and c")
export const formatList = (items, conjunction = 'and') => {
  if (!items || items.length === 0) return '';
  if (items.length === 1) return items[0];
  if (items.length === 2) return `${items[0]} ${conjunction} ${items[1]}`;

  const allButLast = items.slice(0, -1).join(', ');
  const last = items[items.length - 1];

  return `${allButLast}, ${conjunction} ${last}`;
};

// Capitalize first letter
export const capitalize = (str) => {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

// Convert to title case
export const toTitleCase = (str) => {
  if (!str) return '';

  return str
    .toLowerCase()
    .split(' ')
    .map((word) => capitalize(word))
    .join(' ');
};

// Format bytes/second to human readable
export const formatSpeed = (bytesPerSecond) => {
  const speeds = ['B/s', 'KB/s', 'MB/s', 'GB/s'];
  let i = 0;
  let speed = bytesPerSecond;

  while (speed >= 1024 && i < speeds.length - 1) {
    speed /= 1024;
    i++;
  }

  return `${speed.toFixed(2)} ${speeds[i]}`;
};

export default {
  formatNumber,
  formatNumberWithCommas,
  formatCurrency,
  formatPercentage,
  formatDate,
  formatDateTime,
  formatRelativeTime,
  formatTime,
  formatFileSize,
  formatDuration,
  truncateText,
  truncateMiddle,
  formatPhoneNumber,
  formatSocialHandle,
  formatURL,
  formatRating,
  formatList,
  capitalize,
  toTitleCase,
  formatSpeed,
};
