'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { FaRocket, FaCode, FaLightbulb, FaHeart } from 'react-icons/fa';
import { useEffect, useState, useMemo } from 'react';

const FloatingElements = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [viewport, setViewport] = useState({ width: 0, height: 0 });
  const prefersReducedMotion = useReducedMotion();

  // 🔹 Generate consistent random values once
  const randomValues = useMemo(() => Array.from({ length: 24 }, () => Math.random()), []);

  // 🔹 Update viewport size and listen for resize
  useEffect(() => {
    const updateSize = () => {
      setViewport({ width: window.innerWidth, height: window.innerHeight });
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  // 🔹 Handle both mouse and touch movements
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) =>
      setMousePosition({ x: e.clientX, y: e.clientY });

    const handleTouchMove = (e: TouchEvent) =>
      setMousePosition({ x: e.touches[0].clientX, y: e.touches[0].clientY });

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  // 🔹 Disable animation if user prefers reduced motion
  if (prefersReducedMotion) return null;

  const floatingElements = [
    { icon: <FaRocket className="text-blue-500 text-xl sm:text-2xl" />, delay: 0, xOffset: 20, yOffset: 100 },
    { icon: <FaCode className="text-green-500 text-lg sm:text-xl" />, delay: 2, xOffset: -20, yOffset: 200 },
    { icon: <FaLightbulb className="text-yellow-500 text-base sm:text-lg" />, delay: 4, xOffset: 40, yOffset: 300 },
    { icon: <FaHeart className="text-red-500 text-lg sm:text-xl" />, delay: 1, xOffset: -40, yOffset: 150 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating Icons */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute opacity-15 sm:opacity-25 will-change-transform"
          aria-hidden="true"
          initial={{ x: element.xOffset, y: element.yOffset, scale: 0 }}
          animate={{
            x: element.xOffset + mousePosition.x * 0.02,
            y: element.yOffset + mousePosition.y * 0.02,
            scale: [0.8, 1, 0.9, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            delay: element.delay,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        >
          {element.icon}
        </motion.div>
      ))}

      {/* Floating Particles */}
      {viewport.width > 0 &&
        [...Array(6)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full bg-blue-400/20 sm:bg-blue-400/30 will-change-transform"
            aria-hidden="true"
            style={{
              width: `${Math.max(1, viewport.width * 0.002)}px`,
              height: `${Math.max(1, viewport.width * 0.002)}px`,
            }}
            initial={{
              x: randomValues[i * 2] * viewport.width,
              y: randomValues[i * 2 + 1] * viewport.height,
              scale: 0,
            }}
            animate={{
              x: randomValues[i * 2 + 6] * viewport.width,
              y: randomValues[i * 2 + 7] * viewport.height,
              scale: [0, 1, 0],
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: randomValues[i] * 10 + 15,
              repeat: Infinity,
              delay: randomValues[i + 1] * 5,
              ease: 'easeInOut',
            }}
          />
        ))}
    </div>
  );
};

export default FloatingElements;
