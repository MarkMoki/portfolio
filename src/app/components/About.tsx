'use client';

import { motion } from 'framer-motion';
import { FaCode, FaRocket, FaUsers, FaLightbulb } from 'react-icons/fa';
import SectionReveal from './SectionReveal';

const About = () => {
  const values = [
    {
      icon: <FaCode className="text-3xl text-blue-600" />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code that stands the test of time.'
    },
    {
      icon: <FaRocket className="text-3xl text-green-600" />,
      title: 'Innovation',
      description: 'Embracing cutting-edge technologies and creative problem-solving approaches.'
    },
    {
      icon: <FaUsers className="text-3xl text-purple-600" />,
      title: 'Collaboration',
      description: 'Working effectively with teams to deliver exceptional results and shared success.'
    },
    {
      icon: <FaLightbulb className="text-3xl text-orange-600" />,
      title: 'Continuous Learning',
      description: 'Staying updated with industry trends and constantly improving technical skills.'
    }
  ];

  const journey = [
    {
      year: '2020',
      title: 'Started Programming Journey',
      description: 'Began learning programming fundamentals and web development basics.'
    },
    {
      year: '2021',
      title: 'First Professional Projects',
      description: 'Built initial client projects and gained experience in full-stack development.'
    },
    {
      year: '2022',
      title: 'Mobile Development Focus',
      description: 'Expanded skills to include Flutter and cross-platform mobile development.'
    },
    {
      year: '2023',
      title: 'AI Integration & Advanced Projects',
      description: 'Incorporated AI technologies and worked on complex, scalable applications.'
    },
    {
      year: '2024',
      title: 'Professional Growth',
      description: 'Took on leadership roles and contributed to enterprise-level solutions.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionReveal className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Passionate about technology and innovation, I transform ideas into digital reality through code and creativity.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Personal Story */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">My Story</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              I'm a dedicated Full Stack & Mobile Developer based in Nairobi, Kenya, with a passion for creating
              innovative digital solutions that make a difference. My journey in technology began with curiosity
              and has evolved into a career focused on delivering high-quality, scalable applications.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              With expertise spanning web and mobile development, I specialize in building robust backend systems,
              responsive user interfaces, and seamless user experiences. I believe in the power of technology to
              solve real-world problems and am committed to staying at the forefront of industry trends.
            </p>
            <p className="text-gray-700 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects,
              or sharing knowledge with the developer community. I'm always excited to take on new challenges and
              collaborate on projects that push the boundaries of what's possible.
            </p>
          </motion.div>

          {/* Values */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Core Values</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="mb-4">{value.icon}</div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Journey Timeline */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">My Journey</h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200 hidden md:block"></div>
            <div className="space-y-8">
              {journey.map((item, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:gap-8`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex-1 md:text-right">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                          {item.year}
                        </div>
                        <h4 className="text-xl font-semibold text-gray-900">{item.title}</h4>
                      </div>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:block w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg"></div>
                  <div className="flex-1"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-900/20 dark:via-indigo-900/20 dark:to-purple-900/20 rounded-2xl p-8 md:p-12 border border-blue-100/50 dark:border-blue-800/30 backdrop-blur-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Let's Build Something Amazing</h3>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
            Whether you have a project in mind or just want to connect, I'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200"
            >
              View My Work
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;