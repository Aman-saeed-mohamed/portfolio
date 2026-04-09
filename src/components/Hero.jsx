import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 dark:bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-500/20 dark:bg-purple-500/10 rounded-full blur-3xl -z-10 animation-delay-2000"></div>

      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col space-y-6"
          >
            <div className="inline-flex items-center space-x-2 bg-slate-100 dark:bg-dark-card border border-slate-200 dark:border-dark-border px-4 py-2 rounded-full w-max shadow-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300 mx-2">
                3+ {t('hero.experience_badge')}
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight">
              {t('hero.greeting').includes('Aman Saeed') ? (
                <>
                  {t('hero.greeting').split('Aman Saeed')[0]}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">Aman Saeed</span>
                  {t('hero.greeting').split('Aman Saeed')[1]}
                </>
              ) : (
                <>
                  {t('hero.greeting').split('أمان سعيد')[0]}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">أمان سعيد</span>
                  {t('hero.greeting').split('أمان سعيد')[1]}
                </>
              )}
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-700 dark:text-slate-200">
              {t('hero.title')}
            </h2>
            
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
              {t('hero.tagline')}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-medium transition flex items-center shadow-lg shadow-primary/30"
              >
                {t('hero.view_projects')} <ArrowRight className="mx-2" size={20} />
              </a>
              <a
                href="#contact"
                className="bg-white dark:bg-dark-card hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-dark-border px-8 py-4 rounded-full font-medium transition shadow-sm"
              >
                {t('hero.hire_me')}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center md:justify-end relative"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Abstract shape behind image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-purple-500 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] animate-spin-slow"></div>
              
              {/* Image Container */}
              <div className="absolute inset-2 bg-light-bg dark:bg-dark-bg rounded-[28%_68%_68%_28%/28%_28%_68%_68%] overflow-hidden border-4 border-white dark:border-dark-card shadow-2xl flex justify-center items-center">
                <img
                  src="https://github.com/Aman-saeed-mohamed.png"
                  alt="Aman Saeed"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
