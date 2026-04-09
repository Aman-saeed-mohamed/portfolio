import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Experience = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const experiences = [
    {
      id: 1,
      year: '2025',
      title: 'Web Development Intern',
      company: 'Tech Solutions Inc.',
      description: 'Worked on building robust frontend architectures using React and Redux. Assisted in the migration of legacy codebase to modern React hooks and Tailwind CSS.'
    },
    {
      id: 2,
      year: '2024',
      title: 'University Projects & Freelance',
      company: 'Self-Employed',
      description: 'Developed multiple full-stack applications for university coursework and small local businesses, focusing on clean UI/UX and solid database design.'
    },
    {
      id: 3,
      year: '2023',
      title: 'Data Analyst Intern',
      company: 'DataTech Analytics',
      description: 'Created comprehensive Power BI dashboards to visualize sales trends and user retention, providing actionable insights for the business team.'
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-dark-card transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white inline-block relative border-b-4 border-primary pb-2">
            {t('experience.title')}
          </h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div 
            className={`absolute top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-dark-border ${isRTL ? 'right-0 md:right-1/2' : 'left-0 md:left-1/2'} transform md:-translate-x-1/2 md:translate-x-0`}
          ></div>

          {experiences.map((exp, index) => (
            <div 
              key={exp.id} 
              className={`relative flex flex-col md:flex-row items-center mb-12 ${
                index % 2 === 0 ? (isRTL ? 'md:flex-row-reverse' : '') : (isRTL ? '' : 'md:flex-row-reverse')
              }`}
            >
              {/* Timeline Dot */}
              <div 
                className={`absolute w-4 h-4 bg-primary rounded-full shadow-[0_0_0_4px_rgba(59,130,246,0.2)] ${
                  isRTL ? 'right-[-8px] md:right-1/2 md:translate-x-1/2' : 'left-[-8px] md:left-1/2 md:-translate-x-1/2'
                }`}
              ></div>

              {/* Content Panel */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className={`w-full md:w-5/12 ${isRTL ? (index % 2 !== 0 ? 'pr-8 md:pr-0 md:pl-8 text-right md:-mr-4' : 'pr-8 md:pr-8 text-right') : (index % 2 === 0 ? 'pl-8 md:pl-0 md:pr-8 text-left md:text-right' : 'pl-8 md:pl-8 text-left')} mb-4 md:mb-0`}
              >
                <div className="bg-light-bg dark:bg-dark-bg p-6 rounded-2xl border border-slate-100 dark:border-dark-border shadow-sm hover:shadow-md transition-shadow">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary dark:bg-primary/20 rounded-full text-sm font-bold mb-3">
                    {exp.year}
                  </span>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-1">
                    {exp.title}
                  </h3>
                  <div className="text-primary font-medium text-sm mb-3">{exp.company}</div>
                  <p className="text-slate-600 dark:text-slate-400">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
              
              {/* Empty Space for the other side on Desktop */}
              <div className="hidden md:block w-5/12"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
