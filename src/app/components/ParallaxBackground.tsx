'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 0.3, 0.1]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-blue-200/20 dark:bg-blue-800/20 rounded-full blur-xl"
        style={{ y: y1 }}
      />
      <motion.div
        className="absolute top-40 right-20 w-24 h-24 bg-purple-200/20 dark:bg-purple-800/20 rounded-full blur-xl"
        style={{ y: y2 }}
      />
      <motion.div
        className="absolute bottom-32 left-1/4 w-40 h-40 bg-indigo-200/20 dark:bg-indigo-800/20 rounded-full blur-xl"
        style={{ y: y3 }}
      />
      <motion.div
        className="absolute top-1/3 right-10 w-20 h-20 bg-pink-200/20 dark:bg-pink-800/20 rounded-full blur-xl"
        style={{ y: y1 }}
      />

      {/* Gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-50/30 dark:to-blue-900/30"
        style={{ opacity }}
      />
    </div>
  );
};

export default ParallaxBackground;