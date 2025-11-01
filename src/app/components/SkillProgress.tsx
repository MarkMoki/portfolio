'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface SkillProgressProps {
  skill: string;
  level: number; // 0-100
  color?: string;
  delay?: number;
}

const SkillProgress = ({ skill, level, color = 'bg-blue-500', delay = 0 }: SkillProgressProps) => {
  const [animatedLevel, setAnimatedLevel] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setAnimatedLevel(level);
      }, delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [isInView, level, delay]);

  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-700 dark:text-gray-300 font-medium">{skill}</span>
        <span className="text-gray-500 dark:text-gray-400 text-sm">{animatedLevel}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
        <motion.div
          className={`h-full ${color} rounded-full relative`}
          initial={{ width: 0 }}
          animate={{ width: `${animatedLevel}%` }}
          transition={{
            duration: 2,
            delay: delay + 0.5,
            ease: "easeOut"
          }}
        >
          {/* Animated shine effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{
              duration: 1.5,
              delay: delay + 1,
              repeat: Infinity,
              repeatDelay: 3
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default SkillProgress;