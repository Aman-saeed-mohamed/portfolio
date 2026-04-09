import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Star, GitFork, BookOpen } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const GithubSection = () => {
  const { t } = useTranslation();
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/Aman-saeed-mohamed/repos?sort=updated&per_page=6');
        if (response.ok) {
          const data = await response.json();
          setRepos(data);
        }
      } catch (error) {
        console.error('Error fetching github repos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 md:mb-0 border-l-4 border-primary pl-4">
            {t('github.title')}
          </h2>
          <a
            href="https://github.com/Aman-saeed-mohamed"
            target="_blank"
            rel="noreferrer"
            className="flex items-center space-x-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-3 rounded-xl font-medium hover:bg-slate-800 dark:hover:bg-slate-100 transition shadow-sm"
          >
            <FaGithub size={20} className="mr-2" />
            {t('github.view_profile')}
          </a>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-48 bg-slate-200 dark:bg-slate-800 rounded-2xl animate-pulse"></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo, index) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white dark:bg-dark-card border border-slate-100 dark:border-dark-border p-6 rounded-2xl hover:shadow-lg transition-all group flex flex-col"
              >
                <div className="flex items-center mb-4">
                  <BookOpen className="text-primary mr-3" size={24} />
                  <h3 className="text-lg font-bold text-slate-800 dark:text-white group-hover:text-primary transition-colors truncate">
                    {repo.name}
                  </h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-grow line-clamp-3">
                  {repo.description || "No description provided."}
                </p>
                <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-500 mt-auto pt-4 border-t border-slate-100 dark:border-dark-border">
                  <span className="flex items-center font-medium">
                    <span className="w-3 h-3 rounded-full bg-purple-500 mr-2"></span>
                    {repo.language || 'Multiple'}
                  </span>
                  <div className="flex space-x-4 rtl:space-x-reverse">
                    <span className="flex items-center hover:text-primary transition">
                      <Star size={16} className="mr-1" /> {repo.stargazers_count}
                    </span>
                    <span className="flex items-center hover:text-primary transition">
                      <GitFork size={16} className="mr-1" /> {repo.forks_count}
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default GithubSection;
