import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

const categories = [
  { id: 'all', name: '全部作品' },
  { id: 'Game', name: '游戏设计' },
  { id: 'UIUX', name: '网站 / 交互' },
  { id: 'Other', name: '其他设计' },
];

export default function ProjectGrid() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredProjects = activeTab === 'all'
    ? projects
    : projects.filter(p => p.category === activeTab);

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
              onClick={() => setActiveTab(cat.id)}
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
