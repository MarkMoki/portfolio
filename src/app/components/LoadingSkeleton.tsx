import { motion } from 'framer-motion';

const LoadingSkeleton = ({ className = "" }: { className?: string }) => {
  return (
    <motion.div
      className={`animate-pulse bg-gray-200 dark:bg-gray-700 rounded ${className}`}
      initial={{ opacity: 0.5 }}
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
  );
};

export const HeroSkeleton = () => (
  <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <LoadingSkeleton className="h-16 md:h-24 w-3/4 mx-auto mb-8" />
      <LoadingSkeleton className="h-8 md:h-12 w-1/2 mx-auto mb-8" />
      <div className="flex flex-wrap justify-center gap-6 mb-12">
        {[...Array(4)].map((_, i) => (
          <LoadingSkeleton key={i} className="h-12 w-32 rounded-full" />
        ))}
      </div>
      <LoadingSkeleton className="h-32 w-full max-w-3xl mx-auto rounded-2xl" />
    </div>
  </section>
);

export const CardSkeleton = ({ count = 1 }: { count?: number }) => (
  <div className={`grid grid-cols-1 ${count > 1 ? 'md:grid-cols-2 lg:grid-cols-3' : ''} gap-8`}>
    {[...Array(count)].map((_, i) => (
      <div key={i} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <LoadingSkeleton className="h-6 w-3/4 mb-4" />
        <LoadingSkeleton className="h-4 w-full mb-2" />
        <LoadingSkeleton className="h-4 w-5/6 mb-6" />
        <div className="space-y-2">
          <LoadingSkeleton className="h-3 w-full" />
          <LoadingSkeleton className="h-3 w-4/5" />
          <LoadingSkeleton className="h-3 w-3/4" />
        </div>
      </div>
    ))}
  </div>
);

export const TextSkeleton = ({ lines = 3 }: { lines?: number }) => (
  <div className="space-y-3">
    {[...Array(lines)].map((_, i) => (
      <LoadingSkeleton key={i} className={`h-4 ${i === lines - 1 ? 'w-3/4' : 'w-full'}`} />
    ))}
  </div>
);

export const StatsSkeleton = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
    {[...Array(4)].map((_, i) => (
      <div key={i} className="text-center">
        <LoadingSkeleton className="h-8 w-16 mx-auto mb-2" />
        <LoadingSkeleton className="h-4 w-20 mx-auto" />
      </div>
    ))}
  </div>
);

export default LoadingSkeleton;