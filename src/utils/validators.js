// Email validation
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// URL validation
export const isValidURL = (url) => {
  try {
    new URL(url);
    // Must start with http:// or https://
    return /^https?:\/\//i.test(url);
  } catch (_) {
    return false;
  }
};

// Password strength validation
export const validatePassword = (password) => {
  const errors = [];

  if (password.length < 8) {
    errors.push('Password must be at least 8 characters long');
  }

  if (!/[A-Z]/.test(password)) {
    errors.push('Password must contain at least one uppercase letter');
  }

  if (!/[a-z]/.test(password)) {
    errors.push('Password must contain at least one lowercase letter');
  }

  if (!/[0-9]/.test(password)) {
    errors.push('Password must contain at least one number');
  }

  if (!/[!@#$%^&*]/.test(password)) {
    errors.push('Password must contain at least one special character (!@#$%^&*)');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

// Get password strength
export const getPasswordStrength = (password) => {
  let strength = 0;

  if (password.length >= 8) strength++;
  if (password.length >= 12) strength++;
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[!@#$%^&*]/.test(password)) strength++;

  if (strength <= 2) return { score: strength, label: 'Weak', color: 'red' };
  if (strength <= 3) return { score: strength, label: 'Fair', color: 'yellow' };
  if (strength <= 4) return { score: strength, label: 'Good', color: 'blue' };
  return { score: strength, label: 'Strong', color: 'green' };
};

// Required field validation
export const isRequired = (value) => {
  if (typeof value === 'string') {
    return value.trim().length > 0;
  }
  return value !== null && value !== undefined;
};

// Min length validation
export const minLength = (value, min) => {
  return value && value.length >= min;
};

// Max length validation
export const maxLength = (value, max) => {
  return value && value.length <= max;
};

// Number range validation
export const inRange = (value, min, max) => {
  const num = Number(value);
  return !isNaN(num) && num >= min && num <= max;
};

// File size validation
export const validateFileSize = (file, maxSizeInMB = 5) => {
  const maxSize = maxSizeInMB * 1024 * 1024;
  return file.size <= maxSize;
};

// File type validation
export const validateFileType = (file, allowedTypes) => {
  return allowedTypes.includes(file.type);
};

// Image file validation
export const validateImage = (file, maxSizeInMB = 5) => {
  const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];

  if (!validateFileType(file, allowedTypes)) {
    return {
      isValid: false,
      error: 'Invalid file type. Only JPEG, PNG, WebP, and GIF are allowed.',
    };
  }

  if (!validateFileSize(file, maxSizeInMB)) {
    return {
      isValid: false,
      error: `File size must be less than ${maxSizeInMB}MB`,
    };
  }

  return { isValid: true, error: null };
};

// Tool submission validation
export const validateToolSubmission = (data) => {
  const errors = {};

  // Tool Name
  if (!isRequired(data.name)) {
    errors.name = 'Tool name is required';
  } else if (!minLength(data.name, 3)) {
    errors.name = 'Tool name must be at least 3 characters';
  } else if (!maxLength(data.name, 100)) {
    errors.name = 'Tool name must be less than 100 characters';
  }

  // Description
  if (!isRequired(data.description)) {
    errors.description = 'Description is required';
  } else if (!minLength(data.description, 20)) {
    errors.description = 'Description must be at least 20 characters';
  } else if (!maxLength(data.description, 500)) {
    errors.description = 'Description must be less than 500 characters';
  }

  // URL
  if (!isRequired(data.url)) {
    errors.url = 'Tool URL is required';
  } else if (!isValidURL(data.url)) {
    errors.url = 'Please enter a valid URL (must start with http:// or https://)';
  }

  // Category
  if (!isRequired(data.category)) {
    errors.category = 'Please select a category';
  }

  // Image (optional but if provided, validate)
  if (data.image && typeof data.image === 'object') {
    const imageValidation = validateImage(data.image);
    if (!imageValidation.isValid) {
      errors.image = imageValidation.error;
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

// Login validation
export const validateLogin = (email, password) => {
  const errors = {};

  if (!isRequired(email)) {
    errors.email = 'Email is required';
  } else if (!isValidEmail(email)) {
    errors.email = 'Please enter a valid email';
  }

  if (!isRequired(password)) {
    errors.password = 'Password is required';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

// Signup validation
export const validateSignup = (name, email, password, confirmPassword) => {
  const errors = {};

  // Name
  if (!isRequired(name)) {
    errors.name = 'Name is required';
  } else if (!minLength(name, 2)) {
    errors.name = 'Name must be at least 2 characters';
  }

  // Email
  if (!isRequired(email)) {
    errors.email = 'Email is required';
  } else if (!isValidEmail(email)) {
    errors.email = 'Please enter a valid email';
  }

  // Password
  if (!isRequired(password)) {
    errors.password = 'Password is required';
  } else {
    const passwordValidation = validatePassword(password);
    if (!passwordValidation.isValid) {
      errors.password = passwordValidation.errors[0]; // Show first error
    }
  }

  // Confirm Password
  if (!isRequired(confirmPassword)) {
    errors.confirmPassword = 'Please confirm your password';
  } else if (password !== confirmPassword) {
    errors.confirmPassword = 'Passwords do not match';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

// Search query validation
export const validateSearchQuery = (query) => {
  if (!query || query.trim().length === 0) {
    return { isValid: false, error: 'Search query cannot be empty' };
  }

  if (query.trim().length < 2) {
    return { isValid: false, error: 'Search query must be at least 2 characters' };
  }

  if (query.length > 100) {
    return { isValid: false, error: 'Search query is too long' };
  }

  return { isValid: true, error: null };
};

// Report validation
export const validateReport = (reason, description) => {
  const errors = {};

  if (!isRequired(reason)) {
    errors.reason = 'Please select a reason';
  }

  if (!isRequired(description)) {
    errors.description = 'Please provide details';
  } else if (!minLength(description, 10)) {
    errors.description = 'Description must be at least 10 characters';
  } else if (!maxLength(description, 500)) {
    errors.description = 'Description must be less than 500 characters';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

export default {
  isValidEmail,
  isValidURL,
  validatePassword,
  getPasswordStrength,
  isRequired,
  minLength,
  maxLength,
  inRange,
  validateFileSize,
  validateFileType,
  validateImage,
  validateToolSubmission,
  validateLogin,
  validateSignup,
  validateSearchQuery,
  validateReport,
};
