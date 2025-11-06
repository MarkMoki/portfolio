'use client';

import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: 'Full Stack Developer - Attachment',
      company: 'Onfon Media',
      period: 'Oct 2024 - Dec 2024',
      achievements: [
        'Developed and maintained robust backend services, leveraging Firebase and Firestore to manage real-time user data for scalable applications.',
        'Led the design and successful launch of scalable full-stack web (Next.js) and mobile (Flutter) applications, enhancing user engagement by integrating critical third-party services and RESTful APIs.',
        'Engineered responsive user interfaces with Tailwind CSS, improving cross-device compatibility across 90% of targeted devices.',
        'Contributed to seamless user experiences through collaborative code reviews, improving code quality by 20% and adhering to Agile and GitFlow practices.'
      ]
    },
    {
      title: 'Frontend Developer - Contract',
      company: 'Bullione Africa',
      period: 'Feb 2025 - Apr 2025',
      achievements: [
        'Designed, engineered, and deployed a dynamic company landing page using Next.js, HTML5, CSS3, and JavaScript, significantly enhancing brand presence and user engagement.',
        'Optimized web application performance, reducing load times by 15% (to under 2 seconds) and significantly improving overall user experience.',
        'Integrated SEO best practices, boosting search engine ranking by 20% and increasing organic visibility for the platform.'
      ]
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
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-300 mb-4">Professional Experience</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A track record of delivering high-impact solutions across diverse projects
          </p>
        </motion.div>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                  <p className="text-lg text-blue-600 font-semibold">{exp.company}</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                    {exp.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.achievements.map((achievement, achIndex) => (
                  <li key={achIndex} className="flex items-start">
                    <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4"></div>
                    <p className="text-gray-300 leading-relaxed">{achievement}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;