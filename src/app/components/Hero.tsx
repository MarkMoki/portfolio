'use client';

import { FaPhone, FaEnvelope, FaLinkedin, FaGlobe, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ParallaxBackground from './ParallaxBackground';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-900 relative overflow-hidden">
      {/* LinkedIn Profile Image Background */}
      <div className="absolute inset-0 opacity-15 dark:opacity-8">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 sm:w-96 sm:h-96 rounded-full overflow-hidden">
          <Image
            src="/linkedin-profile.jpg"
            alt="Moki Mark LinkedIn Profile"
            width={384}
            height={384}
            className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
      </div>
      <ParallaxBackground />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Moki Mark
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Full Stack & Mobile Developer
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Mobile-first responsive grid for contact buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:flex xl:flex-row gap-4 sm:gap-6 w-full xl:w-auto justify-center">
            <motion.a
              href="tel:+254794464025"
              className="flex items-center justify-center gap-2 bg-white dark:bg-gray-800 px-4 sm:px-6 py-3 rounded-full shadow-md hover:shadow-lg dark:shadow-gray-900/20 transition-all duration-300 hover:scale-105 hover:-translate-y-1 group min-w-0 flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaPhone className="text-blue-600 dark:text-blue-400 group-hover:rotate-12 transition-transform duration-300 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base truncate">+254 794 464 025</span>
            </motion.a>
            <motion.a
              href="https://wa.me/254759215000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 px-4 sm:px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1 group min-w-0 flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaWhatsapp className="text-white group-hover:bounce transition-all duration-300 flex-shrink-0" />
              <span className="text-white text-sm sm:text-base truncate">WhatsApp</span>
            </motion.a>
            <motion.a
              href="mailto:moki.dev01@gmail.com"
              className="flex items-center justify-center gap-2 bg-white dark:bg-gray-800 px-4 sm:px-6 py-3 rounded-full shadow-md hover:shadow-lg dark:shadow-gray-900/20 transition-all duration-300 hover:scale-105 hover:-translate-y-1 group min-w-0 flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaEnvelope className="text-blue-600 dark:text-blue-400 group-hover:bounce transition-all duration-300 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base truncate">moki.dev01@gmail.com</span>
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/markmoki"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-white dark:bg-gray-800 px-4 sm:px-6 py-3 rounded-full shadow-md hover:shadow-lg dark:shadow-gray-900/20 transition-all duration-300 hover:scale-105 hover:-translate-y-1 group min-w-0 flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin className="text-blue-600 dark:text-blue-400 group-hover:text-blue-500 transition-colors duration-300 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base truncate">LinkedIn</span>
            </motion.a>
            <motion.a
              href="https://moki.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-white dark:bg-gray-800 px-4 sm:px-6 py-3 rounded-full shadow-md hover:shadow-lg dark:shadow-gray-900/20 transition-all duration-300 hover:scale-105 hover:-translate-y-1 group min-w-0 flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGlobe className="text-blue-600 dark:text-blue-400 group-hover:animate-spin transition-all duration-300 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base truncate">Portfolio</span>
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 sm:p-8 md:p-12 border border-white/20 dark:border-gray-700/50"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">Professional Summary</h2>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            A highly adaptable Full Stack & Mobile Developer with a proven track record in building and scaling high-performance web and mobile applications. Possessing deep expertise in robust backend system design and database optimization, I excel at delivering high-quality, scalable solutions. Eager to apply technical expertise to accelerate AI innovation and contribute to a dynamic team focused on modern development practices.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;