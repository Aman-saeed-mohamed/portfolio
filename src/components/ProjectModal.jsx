import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" style={{ direction: 'ltr' }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          ></motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-dark-card rounded-2xl shadow-2xl overflow-y-auto flex flex-col"
          >
            <div className="sticky top-0 right-0 z-10 flex justify-end p-4 bg-gradient-to-b from-white/80 dark:from-dark-card/80 to-transparent pointer-events-none">
              <button
                onClick={onClose}
                className="pointer-events-auto p-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6 sm:p-8 pt-0">
              <div className="aspect-video w-full rounded-xl overflow-hidden mb-8 bg-slate-100 dark:bg-slate-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                {project.title}
              </h2>

              <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">
                {project.longDescription || project.description}
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-4 py-2 bg-primary/10 text-primary dark:bg-primary/20 rounded-lg font-medium text-sm">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-100 dark:border-dark-border">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-xl font-medium transition"
                  >
                    <ExternalLink className="mr-2" size={18} />
                    Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 rounded-xl font-medium transition"
                  >
                    <FaGithub className="mr-2" size={18} />
                    Source Code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
