import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { t } = useTranslation();
  const formRef = useRef(null);
  const [status, setStatus] = useState(null); // 'success' | 'error' | 'loading' | null

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');

    // === EMAILJS CONFIGURATION ===
    // 1. Create a free account at https://www.emailjs.com/
    // 2. Add your Gmail via "Add New Service" and copy the "Service ID"
    // 3. Go to "Email Templates" and create TWO templates:
    //    - Template 1: For YOU (To: your email, showing form variables like {{user_name}}, {{user_email}}, {{message}})
    //    - Template 2: For the CUSTOMER (To: {{user_email}}, Message: "Thanks for reaching out! I received your request...")
    // 4. Go to "Account" -> "API Keys" and copy your "Public Key"
    // Replace the strings below with your keys:

    const SERVICE_ID = 'service_ts9uy0p';
    const TEMPLATE_ID_OWNER = 'template_szpanbq'; // Your existing template
    const TEMPLATE_ID_CUSTOMER = 'template_17gtkwl'; // Create another template for the customer and put the ID here
    const PUBLIC_KEY = 'EkO02FHfga0d7a32F';

    // Send both emails simultaneously
    Promise.all([
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID_OWNER, formRef.current, PUBLIC_KEY),
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID_CUSTOMER, formRef.current, PUBLIC_KEY)
    ]).then(() => {
      setStatus('success');
      e.target.reset();
    }).catch((error) => {
      console.error("EmailJS Error:", error);
      setStatus('error');
    });

    // Remove the setTimeout block below once you add your real EmailJS keys.
    // This is just a simulation for the UI demo.

  };

  return (
    <section id="contact" className="py-20 bg-light-bg dark:bg-dark-bg transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white inline-block relative border-b-4 border-primary pb-2">
            {t('contact.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Let's talk about your next project.</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-10 leading-relaxed text-lg">
              Feel free to reach out for collaborations or just a friendly hello. I am currently available for new projects and opportunities.
            </p>

            <div className="space-y-6">
              <a href="mailto:amann9084@gmail.com" className="flex items-center text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition group p-4 bg-white dark:bg-dark-card rounded-xl border border-slate-100 dark:border-dark-border shadow-sm">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mr-4 rtl:mr-0 rtl:ml-4 group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-500 mb-1">Email</h4>
                  <p className="text-lg font-medium group-hover:text-primary transition">amann9084@gmail.com</p>
                </div>
              </a>

              <a href="https://linkedin.com/in/aman-saeed-mohamed" target="_blank" rel="noreferrer" className="flex items-center text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition group p-4 bg-white dark:bg-dark-card rounded-xl border border-slate-100 dark:border-dark-border shadow-sm">
                <div className="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-full flex items-center justify-center mr-4 rtl:mr-0 rtl:ml-4 group-hover:scale-110 transition-transform">
                  <FaLinkedin size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-500 mb-1">LinkedIn</h4>
                  <p className="text-lg font-medium group-hover:text-primary transition">aman-saeed-mohamed</p>
                </div>
              </a>

              <a href="https://github.com/Aman-saeed-mohamed" target="_blank" rel="noreferrer" className="flex items-center text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition group p-4 bg-white dark:bg-dark-card rounded-xl border border-slate-100 dark:border-dark-border shadow-sm">
                <div className="w-12 h-12 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-full flex items-center justify-center mr-4 rtl:mr-0 rtl:ml-4 group-hover:scale-110 transition-transform">
                  <FaGithub size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-500 mb-1">GitHub</h4>
                  <p className="text-lg font-medium group-hover:text-primary transition">Aman-saeed-mohamed</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-dark-card p-8 rounded-2xl border border-slate-100 dark:border-dark-border shadow-lg shadow-slate-200/50 dark:shadow-none"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">{t('contact.name')}</label>
                  <input type="text" id="name" name="user_name" required className="w-full px-4 py-3 bg-slate-50 dark:bg-dark-bg border border-slate-200 dark:border-dark-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition text-slate-900 dark:text-white" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">{t('contact.email')}</label>
                  <input type="email" id="email" name="user_email" required className="w-full px-4 py-3 bg-slate-50 dark:bg-dark-bg border border-slate-200 dark:border-dark-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition text-slate-900 dark:text-white" />
                </div>
              </div>

              <div>
                <label htmlFor="serviceNeeded" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">{t('contact.service')}</label>
                <select id="serviceNeeded" name="service" required defaultValue="" className="w-full px-4 py-3 bg-slate-50 dark:bg-dark-bg border border-slate-200 dark:border-dark-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition text-slate-900 dark:text-white appearance-none">
                  <option value="" disabled>{t('contact.select_service')}</option>
                  <option value="Web Development">{t('services.web_dev')}</option>
                  <option value="UI/UX Design">{t('services.ui_ux')}</option>
                  <option value="Database Design">{t('services.db_design')}</option>
                  <option value="Data Dashboards">{t('services.data_dashboards')}</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">{t('contact.budget')}</label>
                <input type="text" id="budget" name="budget" placeholder="e.g. $1000 - $5000" className="w-full px-4 py-3 bg-slate-50 dark:bg-dark-bg border border-slate-200 dark:border-dark-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition text-slate-900 dark:text-white" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">{t('contact.project_desc')}</label>
                <textarea id="message" name="message" rows="4" required className="w-full px-4 py-3 bg-slate-50 dark:bg-dark-bg border border-slate-200 dark:border-dark-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition text-slate-900 dark:text-white resize-none"></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-4 bg-primary hover:bg-primary-dark text-white rounded-xl font-medium transition flex items-center justify-center disabled:opacity-70"
              >
                {status === 'loading' ? (
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    {t('contact.send')} <Send className="ml-2 rtl:ml-0 rtl:mr-2" size={18} />
                  </>
                )}
              </button>

              {status === 'success' && (
                <div className="flex items-center text-green-600 dark:text-emerald-400 mt-4 bg-green-50 dark:bg-emerald-400/10 p-3 rounded-lg">
                  <CheckCircle size={20} className="mr-2" />
                  <span className="font-medium">Message sent successfully! I will get back to you soon.</span>
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center text-red-600 dark:text-red-400 mt-4 bg-red-50 dark:bg-red-400/10 p-3 rounded-lg">
                  <AlertCircle size={20} className="mr-2" />
                  <span className="font-medium">Oops! Something went wrong. Please try again.</span>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
