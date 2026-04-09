import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce website with real-time inventory and payments.',
      longDescription: 'This comprehensive e-commerce platform includes features like product searching, filtering, user authentication, a shopping cart, and mock payment gateway integration. Fully responsive and built with performance in mind.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'TailwindCSS'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/Aman-saeed-mohamed'
    },
    {
      id: 2,
      title: 'Data Dashboard',
      description: 'Interactive analytics dashboard visualizing complex datasets.',
      longDescription: 'Created dynamic data visualizations for business metrics. Features include responsive charts, filterable tables, and dark mode support to easily analyze sales trends and user retention.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
      tech: ['React', 'Power BI', 'SQL', 'Chart.js'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Aman-saeed-mohamed'
    },
    {
      id: 3,
      title: 'SaaS Landing Page',
      description: 'High-converting landing page for a modern software product.',
      longDescription: 'Designed and developed a fast, SEO-optimized landing page with Framer Motion animations. Optimized for maximum conversion rates with a focus on web vitals and accessibility.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      tech: ['React', 'Framer Motion', 'TailwindCSS'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Aman-saeed-mohamed'
    },
    {
      id: 4,
      title: 'Portfolio Design',
      description: 'Minimalist developer portfolio showcasing projects and skills.',
      longDescription: 'A sleek, customizable personal portfolio built with React. Features dark mode, multi-language support (i18n), and a modern responsive design.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
      tech: ['React', 'TailwindCSS', 'Vite'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Aman-saeed-mohamed'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-dark-card transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white inline-block relative border-b-4 border-primary pb-2">
            {t('projects.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-light-bg dark:bg-dark-bg rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-dark-border flex flex-col cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white font-medium bg-primary/90 px-4 py-2 rounded-lg backdrop-blur-sm">
                    View Details
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.slice(0, 3).map((t, i) => (
                    <span key={i} className="text-xs font-medium px-3 py-1 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-xs font-medium px-3 py-1 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
                
                <div className="flex gap-4" onClick={(e) => e.stopPropagation()}>
                  <a
                    href={project.liveUrl}
                    className="flex-1 flex justify-center items-center py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl text-sm font-medium hover:bg-slate-800 dark:hover:bg-slate-100 transition"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    {t('projects.live_demo')}
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex-none p-2.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary rounded-xl transition"
                    aria-label={t('projects.github')}
                  >
                    <FaGithub size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;
