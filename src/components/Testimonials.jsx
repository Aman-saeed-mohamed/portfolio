import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      id: 1,
      quote: "Aman is an exceptional developer. He delivered our project on time with an outstandingly clean and modern UI.",
      name: "Sarah Jenkins",
      role: "Product Manager, TechStart"
    },
    {
      id: 2,
      quote: "Working with Aman was a breeze. His understanding of complex Data structures and UI/UX patterns is top tier.",
      name: "David Chen",
      role: "CEO, DataFlow"
    },
    {
      id: 3,
      quote: "Highly recommended! Aman transformed our rough ideas into a beautifully crafted scalable web application.",
      name: "Emily Rodriguez",
      role: "Freelance Designer"
    }
  ];

  return (
    <section className="py-20 bg-primary/5 dark:bg-primary/5 transition-colors duration-300 overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white inline-block relative border-b-4 border-primary pb-2">
            {t('testimonials.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-dark-card p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-dark-border relative"
            >
              <Quote className="absolute top-6 right-6 text-primary/20 dark:text-primary/10" size={48} />
              
              <div className="relative z-10">
                <p className="text-slate-600 dark:text-slate-400 italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-tr from-primary to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 rtl:mr-0 rtl:ml-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 dark:text-white">{testimonial.name}</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
