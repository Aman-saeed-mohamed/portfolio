import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Code, Layout, Database, BarChart3, ArrowRight } from 'lucide-react';

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      id: 1,
      icon: <Code size={32} />,
      title: t('services.web_dev'),
      description: t('services.web_dev_desc'),
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      icon: <Layout size={32} />,
      title: t('services.ui_ux'),
      description: t('services.ui_ux_desc'),
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      icon: <Database size={32} />,
      title: t('services.db_design'),
      description: t('services.db_design_desc'),
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      id: 4,
      icon: <BarChart3 size={32} />,
      title: t('services.data_dashboards'),
      description: t('services.data_dashboards_desc'),
      gradient: "from-orange-500 to-amber-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-light-bg dark:bg-dark-bg transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white inline-block relative border-b-4 border-primary pb-2">
            {t('services.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-dark-card rounded-2xl p-8 border border-slate-100 dark:border-dark-border shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col relative overflow-hidden"
            >
              {/* Hover effect background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white bg-gradient-to-br ${service.gradient} shadow-lg mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-slate-600 dark:text-slate-400 mb-8 flex-grow">
                {service.description}
              </p>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                  // Find the select element and set it in the next step, not robust but okay for UI flow
                  setTimeout(() => {
                    const select = document.getElementById('serviceNeeded');
                    if(select) select.value = service.title;
                  }, 500);
                }}
                className="inline-flex items-center text-primary font-medium group/btn"
              >
                {t('services.request')}
                <ArrowRight size={16} className="ml-2 rtl:ml-0 rtl:mr-2 transform group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
