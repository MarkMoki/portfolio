'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';
import { FaCode, FaRocket, FaUsers, FaLightbulb } from 'react-icons/fa';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  // Fix hydration by ensuring particles only render on client
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Advanced transforms with mouse interaction
  const y = useTransform(scrollYProgress, [0, 1], ['20vh', '-10vh']);
  const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1.2]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);
  const skewX = useTransform(scrollYProgress, [0, 1], [2, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  // Image becomes clear at 65% scroll progress
  const blur = useTransform(scrollYProgress, [0, 0.65, 1], ['blur(0px)', 'blur(0px)', 'blur(0px)']);
  const brightness = useTransform(scrollYProgress, [0, 0.65, 1], [0.5, 1, 1]);
  const contrast = useTransform(scrollYProgress, [0, 0.65, 1], [0.8, 1, 1]);

  // Text transforms
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.6]);
  const textBlur = useTransform(scrollYProgress, [0, 1], ['blur(0px)', 'blur(5px)']);
  const textScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.05]);

  // Floating elements animation
  const floatingY1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const floatingY2 = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const floatingY3 = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const floatingY4 = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section id="home"
      ref={heroRef}
      className="relative h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-gray-900 dark:via-gray-950 dark:to-black overflow-hidden"
    >
      {/* Animated background particles */}
      {isClient && (
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      )}

      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">

        {/* Floating tech icons */}
        <motion.div
          style={{ y: floatingY1, x: mousePosition.x * 0.5 }}
          className="absolute top-20 left-10 text-blue-400/30"
        >
          <FaCode size={40} />
        </motion.div>
        <motion.div
          style={{ y: floatingY2, x: mousePosition.x * -0.3 }}
          className="absolute top-32 right-16 text-purple-400/30"
        >
          <FaRocket size={35} />
        </motion.div>
        <motion.div
          style={{ y: floatingY3, x: mousePosition.x * 0.4 }}
          className="absolute bottom-32 left-20 text-green-400/30"
        >
          <FaUsers size={38} />
        </motion.div>
        <motion.div
          style={{ y: floatingY4, x: mousePosition.x * -0.5 }}
          className="absolute bottom-20 right-10 text-yellow-400/30"
        >
          <FaLightbulb size={42} />
        </motion.div>

        {/* Profile image with advanced transforms */}
        <motion.div
          style={{
            y,
            scale,
            rotate,
            skewX,
            opacity,
            filter: `blur(${blur}) brightness(${brightness}) contrast(${contrast})`,
            x: mousePosition.x * 0.1,
          }}
          className="absolute inset-0 flex items-center justify-center z-0"
        >
          <div className="relative w-[80vw] sm:w-[60vw] md:w-[50vw] lg:w-[40vw] xl:w-[35vw] aspect-square">
            <Image
              src="/linkedin-profile.jpg"
              alt="Moki Mark - Professional Software Developer"
              fill
              className="object-cover object-center rounded-full shadow-2xl border-4 border-white/20"
              priority
              sizes="(max-width: 768px) 80vw, (max-width: 1024px) 60vw, (max-width: 1280px) 50vw, (max-width: 1536px) 40vw, 35vw"
            />
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl scale-110" />
          </div>
        </motion.div>

        {/* Enhanced gradient mask */}
        <motion.div
          style={{ opacity }}
          className="absolute bottom-0 left-0 w-full h-40 sm:h-52 md:h-64 bg-gradient-to-t from-slate-900/80 dark:from-black/70 to-transparent pointer-events-none z-10"
        />

        {/* Hero content */}
        <motion.div
          style={{
            opacity: textOpacity,
            filter: textBlur,
            scale: textScale,
            y: mousePosition.y * 0.05,
          }}
          className="relative z-20 text-center px-4 max-w-4xl"
        >
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold rounded-full shadow-lg">
              Available for Projects
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent mb-6 drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Moki Mark
          </motion.h1>

          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl text-blue-300 font-medium mb-8 drop-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Senior Full Stack & Mobile Developer
          </motion.h2>

          <motion.p
            className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-300 leading-relaxed mb-8 drop-shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Crafting exceptional digital experiences with cutting-edge technologies.
            Specialized in scalable web applications, mobile solutions, and innovative
            software architecture that drives business growth.
          </motion.p>

          {/* Tech stack badges */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'AWS'].map((tech, index) => (
              <motion.span
                key={tech}
                className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm rounded-full hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.05 }}
                transition={{ delay: index * 0.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              onClick={() => {
                const element = document.getElementById('projects');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.button>
            <motion.button
              onClick={() => {
                const element = document.getElementById('contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
