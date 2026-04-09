import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Skills = () => {
  const { t } = useTranslation();

  const skillCategories = [
    {
      title: t('skills.frontend'),
      skills: ['HTML', 'CSS', 'JavaScript', 'React']
    },
    {
      title: t('skills.backend'),
      skills: ['Node.js', 'PHP']
    },
    {
      title: t('skills.data'),
      skills: ['SQL', 'Power BI', 'Data Analysis']
    },
    {
      title: t('skills.tools'),
      skills: ['Git', 'Figma', 'Python', 'C', 'C#', 'C++', 'Kotlin']
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="py-20 bg-light-bg dark:bg-dark-bg transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white inline-block relative border-b-4 border-primary pb-2">
            {t('skills.title')}
          </h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-dark-card rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-dark-border hover:shadow-md transition-shadow group"
            >
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-6 group-hover:text-primary transition-colors">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-3 py-1.5 rounded-lg text-sm font-medium"
                  >
                    {skill}
                  </span>
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
