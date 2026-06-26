import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLocation } from 'react-router-dom';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

const categories = [
  { id: 'all', name: 'All Works' },
  { id: 'Game', name: 'Game Design' },
  { id: 'Interaction', name: 'Interaction Design' },
  { id: 'Brand', name: 'Brand Design' },
  { id: 'DigitalMedia', name: 'Digital Media Design' },
];

export default function ProjectGrid() {
  const [activeTab, setActiveTab] = useState('all');
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get('category');
    const validCategory = categories.some((item) => item.id === category);

    if (category && validCategory) {
      setActiveTab(category);
    }

    if (location.hash === '#projects') {
      requestAnimationFrame(() => {
        document.getElementById('projects')?.scrollIntoView({ block: 'start' });
      });
    }
  }, [location.hash, location.search]);

  const filteredProjects = activeTab === 'all'
    ? projects
    : projects.filter(p => p.category === activeTab);

  const handleTabClick = (category: string) => {
    setActiveTab(category);
    const query = category === 'all' ? '/' : `/?category=${category}`;
    window.history.replaceState(null, '', `${query}#projects`);
  };

  return (
    <section id="projects" className="archive-section archive-shell">
      <div className="archive-section-head">
        <div>
          <p>Selected Works</p>
          <h2>Archive Index</h2>
        </div>
        <div className="archive-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleTabClick(cat.id)}
              className={activeTab === cat.id ? 'active' : ''}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      <motion.div layout className="archive-project-list">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
