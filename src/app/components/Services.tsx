'use client';

import { motion } from 'framer-motion';
import { FaCode, FaMobile, FaCloud, FaRobot, FaDatabase, FaPaintBrush, FaRocket, FaHandshake } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaCode className="text-4xl text-blue-600" />,
      title: 'Full-Stack Web Development',
      description: 'End-to-end web application development using modern frameworks like Next.js, React, and Node.js. From concept to deployment.',
      features: [
        'Custom web applications',
        'E-commerce platforms',
        'Content management systems',
        'Progressive web apps (PWAs)',
        'API development and integration'
      ],
      technologies: ['Next.js', 'React', 'Node.js', 'TypeScript', 'PostgreSQL']
    },
    {
      icon: <FaMobile className="text-4xl text-green-600" />,
      title: 'Cross-Platform Mobile Apps',
      description: 'Native-quality mobile applications that work seamlessly across iOS and Android platforms using Flutter.',
      features: [
        'Cross-platform compatibility',
        'Native performance',
        'Offline-first architecture',
        'Push notifications',
        'App store deployment'
      ],
      technologies: ['Flutter', 'Dart', 'Firebase', 'SQLite', 'REST APIs']
    },
    {
      icon: <FaCloud className="text-4xl text-purple-600" />,
      title: 'Cloud Solutions & DevOps',
      description: 'Scalable cloud infrastructure setup, deployment automation, and continuous integration/delivery pipelines.',
      features: [
        'Cloud architecture design',
        'Docker containerization',
        'CI/CD pipeline setup',
        'Infrastructure as Code',
        'Performance monitoring'
      ],
      technologies: ['AWS', 'Docker', 'GitHub Actions', 'Terraform', 'Kubernetes']
    },
    {
      icon: <FaRobot className="text-4xl text-orange-600" />,
      title: 'AI & Machine Learning Integration',
      description: 'Integrate cutting-edge AI capabilities into your applications using modern ML services and APIs.',
      features: [
        'AI-powered features',
        'Natural language processing',
        'Computer vision integration',
        'Recommendation systems',
        'Automated content generation'
      ],
      technologies: ['OpenAI API', 'Google Gemini', 'TensorFlow', 'Python', 'Firebase ML']
    },
    {
      icon: <FaDatabase className="text-4xl text-red-600" />,
      title: 'Database Design & Optimization',
      description: 'Expert database architecture, optimization, and management for high-performance applications.',
      features: [
        'Database schema design',
        'Performance optimization',
        'Data migration services',
        'Backup and recovery',
        'Real-time data synchronization'
      ],
      technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Firebase']
    },
    {
      icon: <FaPaintBrush className="text-4xl text-pink-600" />,
      title: 'UI/UX Design & Frontend',
      description: 'Beautiful, intuitive user interfaces designed with modern design principles and cutting-edge frontend technologies.',
      features: [
        'Responsive web design',
        'Mobile-first approach',
        'Accessibility compliance',
        'Interactive prototypes',
        'Design system creation'
      ],
      technologies: ['Figma', 'Tailwind CSS', 'Framer Motion', 'React', 'TypeScript']
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We start by understanding your vision, goals, and requirements through detailed consultation and analysis.'
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'Create wireframes, mockups, and interactive prototypes to visualize the solution before development begins.'
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'Build your solution using agile methodologies with continuous testing and quality assurance throughout.'
    },
    {
      step: '04',
      title: 'Deployment & Support',
      description: 'Launch your application and provide ongoing maintenance, updates, and technical support.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Services & Expertise</h2>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto">
            Comprehensive software development services tailored to bring your ideas to life with modern technologies and best practices.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 sm:p-8 hover:shadow-xl dark:hover:shadow-gray-900/50 transition-shadow duration-300 group"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="mb-4 sm:mb-6">{service.icon}</div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">{service.title}</h3>
              <p className="text-gray-300 dark:text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">{service.description}</p>

              <div className="mb-4 sm:mb-6">
                <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3">What I Offer:</h4>
                <ul className="space-y-2">
                  {service.features.slice(0, 3).map((feature, featIndex) => (
                    <li key={featIndex} className="flex items-start">
                      <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                      <span className="text-gray-300 dark:text-gray-400 text-xs sm:text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Process Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">My Development Process</h3>
            <p className="text-xl text-gray-800 max-w-2xl mx-auto">
              A proven methodology that ensures quality, efficiency, and successful project delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h4>
                <p className="text-gray-800 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-white text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <FaRocket className="text-6xl mx-auto mb-6 text-blue-200" />
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your vision and create something amazing together. I'm here to help bring your ideas to life with modern technology and innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <FaHandshake />
              Let's Talk
            </a>
            <a
              href="#projects"
              className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors duration-200"
            >
              View My Work
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;