'use client';

import { motion } from 'framer-motion';

const Education = () => {
  const education = {
    degree: 'BSc Computer Science',
    institution: 'Meru University of Science & Technology',
    graduation: '2025',
    details: 'Focused on comprehensive computer science fundamentals, software engineering principles, and modern development practices.'
  };

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-300 mb-4">Education</h2>
          <p className="text-xl text-gray-300">
            Academic foundation in computer science and software development
          </p>
        </motion.div>

        <motion.div
          className="bg-gray-50 rounded-xl p-8 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ y: -5 }}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{education.degree}</h3>
              <p className="text-lg text-blue-600 font-semibold">{education.institution}</p>
            </div>
            <div className="mt-4 md:mt-0">
              <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                Graduated: {education.graduation}
              </span>
            </div>
          </div>

          <p className="text-gray-800 leading-relaxed">
            {education.details}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;