import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-dark-card py-10 border-t border-slate-100 dark:border-dark-border transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-xl font-bold text-slate-800 dark:text-white tracking-wide">
              Aman<span className="text-primary">.</span>
            </a>
            <p className="text-slate-500 mt-2 text-sm">
              Building modern web applications and data-driven solutions.
            </p>
          </div>

          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <a href="https://github.com/Aman-saeed-mohamed" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition">
              <span className="sr-only">GitHub</span>
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com/in/aman-saeed-mohamed" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-500 transition">
              <span className="sr-only">LinkedIn</span>
              <FaLinkedin size={24} />
            </a>
            <a href="mailto:amann9084@gmail.com" className="text-slate-400 hover:text-primary transition">
              <span className="sr-only">Email</span>
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-100 dark:border-dark-border flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {currentYear} Aman Saeed. All rights reserved.</p>
          <div className="flex space-x-4 rtl:space-x-reverse mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
