'use client';

import { motion } from 'framer-motion';
import SkillProgress from './SkillProgress';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'PHP', level: 90 },
        { name: 'JavaScript', level: 95 },
        { name: 'TypeScript', level: 85 },
        { name: 'Dart', level: 80 },
        { name: 'SQL', level: 88 },
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 90 }
      ],
      color: 'bg-blue-500'
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'Laravel', level: 92 },
        { name: 'Symfony', level: 85 },
        { name: 'Node.js', level: 88 },
        { name: 'Next.js', level: 90 },
        { name: 'React', level: 95 },
        { name: 'Flutter', level: 82 },
        { name: 'Tailwind CSS', level: 93 },
        { name: 'CodeIgniter', level: 80 }
      ],
      color: 'bg-green-500'
    },
    {
      title: 'Databases & ORM',
      skills: [
        { name: 'MySQL', level: 90 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'Firestore', level: 80 },
        { name: 'Firebase', level: 82 },
        { name: 'Supabase', level: 78 },
        { name: 'Eloquent ORM', level: 88 }
      ],
      color: 'bg-purple-500'
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'RESTful APIs', level: 92 },
        { name: 'Third-Party Integrations', level: 85 },
        { name: 'API Development', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'Git', level: 95 },
        { name: 'GitFlow', level: 88 },
        { name: 'Agile', level: 85 },
        { name: 'OOP', level: 92 },
        { name: 'Netlify', level: 80 },
        { name: 'Vercel', level: 82 },
        { name: 'Figma', level: 75 }
      ],
      color: 'bg-orange-500'
    },
    {
      title: 'Specializations',
      skills: [
        { name: 'Backend System Design', level: 88 },
        { name: 'Scalable Architecture', level: 85 },
        { name: 'Database Optimization', level: 82 },
        { name: 'Data Management', level: 90 }
      ],
      color: 'bg-red-500'
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
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit built through years of experience in full-stack development
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 sm:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center mb-4">
                <div className={`w-4 h-4 rounded-full ${category.color} mr-3`}></div>
                <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillProgress
                    key={skillIndex}
                    skill={skill.name}
                    level={skill.level}
                    color={category.color}
                    delay={skillIndex * 0.1}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;