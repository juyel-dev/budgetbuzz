import React from 'react';
import clsx from 'clsx';

const Skeleton = ({ className = '', variant = 'rectangular', animation = 'pulse' }) => {
  const baseClasses = 'bg-gray-200 dark:bg-gray-700';

  const variants = {
    rectangular: 'rounded-lg',
    circular: 'rounded-full',
    text: 'rounded h-4',
  };

  const animations = {
    pulse: 'animate-pulse',
    wave: 'animate-pulse-slow',
    none: '',
  };

  return (
    <div
      className={clsx(
        baseClasses,
        variants[variant],
        animations[animation],
        className
      )}
    />
  );
};

export const ToolCardSkeleton = () => {
  return (
    <div className="bg-white dark:bg-dark-card rounded-xl border border-gray-200 dark:border-dark-border p-6 shadow-soft">
      {/* Image Skeleton */}
      <Skeleton className="w-full h-48 mb-4" />

      {/* Title Skeleton */}
      <Skeleton variant="text" className="w-3/4 mb-3" />

      {/* Description Skeleton */}
      <div className="space-y-2 mb-4">
        <Skeleton variant="text" className="w-full" />
        <Skeleton variant="text" className="w-5/6" />
        <Skeleton variant="text" className="w-4/6" />
      </div>

      {/* Tags Skeleton */}
      <div className="flex gap-2 mb-4">
        <Skeleton className="w-16 h-6" />
        <Skeleton className="w-20 h-6" />
        <Skeleton className="w-14 h-6" />
      </div>

      {/* Footer Skeleton */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-dark-border">
        <div className="flex items-center gap-2">
          <Skeleton variant="circular" className="w-6 h-6" />
          <Skeleton variant="text" className="w-12" />
        </div>
        <Skeleton className="w-24 h-10" />
      </div>
    </div>
  );
};

export const ProfileSkeleton = () => {
  return (
    <div className="space-y-6">
      {/* Header Skeleton */}
      <div className="bg-white dark:bg-dark-card rounded-xl border border-gray-200 dark:border-dark-border p-6 shadow-soft">
        <div className="flex items-center gap-4">
          <Skeleton variant="circular" className="w-20 h-20" />
          <div className="flex-1 space-y-3">
            <Skeleton variant="text" className="w-48 h-6" />
            <Skeleton variant="text" className="w-64" />
          </div>
        </div>
      </div>

      {/* Stats Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="bg-white dark:bg-dark-card rounded-xl border border-gray-200 dark:border-dark-border p-6 shadow-soft"
          >
            <Skeleton variant="text" className="w-24 mb-2" />
            <Skeleton variant="text" className="w-16 h-8" />
          </div>
        ))}
      </div>

      {/* Tools Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <ToolCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
};

export default Skeleton;
