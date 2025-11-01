'use client';

import { useState } from 'react';
import { FaExternalLinkAlt, FaGithub, FaEye, FaCode } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'FitLetter',
      description: 'An AI-powered web application that helps job seekers create optimized resumes and cover letters tailored to specific job descriptions. Built with Next.js, TypeScript, Tailwind, Supabase, and Google Gemini AI.',
      features: [
        'Analyzes resumes for flaws and rewrites content for impact',
        'Generates tone-adjustable cover letters',
        'Boosts ATS scores with relevant keywords',
        'Tracks application performance',
        'Gamified elements: badges, XP levels, streak rewards, daily challenges',
        'Sleek, animated interface with offline access and real-time previews'
      ],
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Google Gemini AI'],
      links: [
        { type: 'demo', label: 'Application', url: 'https://fitletter.vercel.app' },
      ]
    },
    {
      title: 'P2P Social App',
      description: 'An offline-first, peer-to-peer social networking application that enables cross-platform communication without internet dependency.',
      features: [
        'Cross-platform networking for Android, iOS, and Linux devices',
        'Offline message queuing and retry logic for unstable connections',
        'Posts, likes, and messaging functionality',
        'Advanced data management for reliable communication'
      ],
      technologies: ['Flutter', 'SQLite', 'WebSocket', 'Nearby Connections'],
      links: []
    },
    {
      title: 'Flutbuilder',
      description: 'An AI-powered SaaS platform that turns app ideas into fully functional Flutter applications using natural language descriptions.',
      features: [
        'Alien-themed, gamified interface',
        'IDE-like environment for app creation',
        'Real-time validation and AI chat assistance',
        'APK generation and Docker-based builds',
        'Analytics, rich template library, and secure API endpoints',
        'Gamification: levels, achievements, leaderboards'
      ],
      technologies: ['Next.js', 'Supabase', 'Tailwind CSS', 'Google Gemini AI', 'Flutter'],
      links: [
         { type: 'demo', label: 'Application', url: 'https://flutbuilder.vercel.app' },
      ]
    },
    {
      title: '0Face – AI Idea Generator',
      description: 'A web tool that generates over 100 daily prompts for creators, powered by AI and scalable backend infrastructure.',
      features: [
        'Generates daily creative prompts',
        'Firebase-powered backend for data synchronization',
        'Scalable data management solutions'
      ],
      technologies: ['Flutter', 'Firebase'],
      links: []
    },
    {
      title: 'SavvyTrack Finance App',
      description: 'An offline-first finance tracker with integrated savings management and interactive visualization features.',
      features: [
        'Interactive charts for financial insights',
        'Offline data management',
        'Personal finance tracking and task management'
      ],
      technologies: ['Flutter', 'Hive'],
      links: []
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Innovative solutions built with cutting-edge technologies and creative problem-solving
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 sm:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl dark:hover:shadow-gray-900/50 transition-all duration-300 cursor-pointer group relative border border-gray-100 dark:border-gray-700"
              variants={itemVariants}
              whileHover={{ y: -15, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
              onClick={() => {
                const demo = project.links.find(l => l.type === 'demo');
                if (demo) window.open(demo.url, '_blank');
              }}
            >
              {/* Hover overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                initial={false}
                animate={{ opacity: hoveredProject === index ? 1 : 0 }}
              />

              {/* Interactive buttons */}
              <motion.div
                className="absolute top-4 right-4 flex gap-2 z-20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: hoveredProject === index ? 1 : 0,
                  scale: hoveredProject === index ? 1 : 0.8
                }}
                transition={{ duration: 0.2 }}
              >
                <motion.button
                  className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    const demo = project.links.find(l => l.type === 'demo');
                    if (demo) window.open(demo.url, '_blank');
                  }}
                >
                  <FaEye className="text-sm" />
                </motion.button>
                <motion.button
                  className="bg-gray-700 hover:bg-gray-800 text-white p-2 rounded-full shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    const github = project.links.find(l => l.type === 'github');
                    if (github) window.open(github.url, '_blank');
                  }}
                >
                  <FaCode className="text-sm" />
                </motion.button>
              </motion.div>
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">{project.description}</p>

                <div className="mb-4 sm:mb-6">
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.slice(0, 3).map((feature, featIndex) => (
                      <li key={featIndex} className="flex items-start">
                        <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                        <span className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4 sm:mb-6">
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {project.links.length > 0 && (
                  <div className="flex gap-4">
                    {project.links.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-200"
                      >
                        {link.type === 'demo' ? <FaExternalLinkAlt /> : <FaGithub />}
                        <span>{link.label}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;