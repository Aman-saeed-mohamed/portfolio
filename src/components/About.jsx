import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Download, User } from 'lucide-react';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 bg-white dark:bg-dark-card transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-2xl mb-6">
            <User className="text-primary" size={28} />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
            {t('about.title')}
          </h2>
          
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed mb-10">
            {t('about.description')}
          </p>

          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-3 rounded-xl font-medium hover:bg-slate-800 dark:hover:bg-slate-100 transition shadow-lg"
          >
            <Download className="mx-2" size={20} />
            {t('about.download_cv')}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
