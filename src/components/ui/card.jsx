import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const Card = ({
  children,
  header,
  footer,
  padding = 'md',
  className = '',
  hoverable = false,
  onClick,
  ...props
}) => {
  const paddingClasses = {
    sm: 'p-3',
    md: 'p-6',
    lg: 'p-8',
    none: 'p-0',
  };

  const cardClasses = clsx(
    'bg-white dark:bg-dark-card rounded-xl border border-gray-200 dark:border-dark-border shadow-soft transition-all duration-200',
    hoverable && 'hover:shadow-medium cursor-pointer',
    className
  );

  const CardWrapper = hoverable ? motion.div : 'div';
  const motionProps = hoverable
    ? {
        whileHover: { y: -4, scale: 1.01 },
        transition: { duration: 0.2 },
      }
    : {};

  return (
    <CardWrapper className={cardClasses} onClick={onClick} {...motionProps} {...props}>
      {header && (
        <div className="px-6 py-4 border-b border-gray-200 dark:border-dark-border">
          {header}
        </div>
      )}
      <div className={paddingClasses[padding]}>{children}</div>
      {footer && (
        <div className="px-6 py-4 border-t border-gray-200 dark:border-dark-border bg-gray-50 dark:bg-dark-bg rounded-b-xl">
          {footer}
        </div>
      )}
    </CardWrapper>
  );
};

export const CardHeader = ({ children, className = '' }) => (
  <div className={clsx('mb-4', className)}>{children}</div>
);

export const CardTitle = ({ children, className = '' }) => (
  <h3 className={clsx('text-xl font-semibold text-gray-900 dark:text-white', className)}>
    {children}
  </h3>
);

export const CardDescription = ({ children, className = '' }) => (
  <p className={clsx('text-sm text-gray-600 dark:text-gray-400 mt-1', className)}>
    {children}
  </p>
);

export default Card;
