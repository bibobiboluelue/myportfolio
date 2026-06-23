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
    <section id="projects" className="w-full border-b-4 border-swiss-black bg-poly-cream">
      <div className="flex flex-wrap items-center justify-between gap-4 p-6 md:px-12 border-b-4 border-swiss-black bg-swiss-yellow sticky top-0 z-40">
        <h2 className="text-xl font-black uppercase tracking-tighter [text-shadow:2px_2px_0_#ff3fb4]">Selected Works / 精选作品</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-1 text-[10px] font-black uppercase tracking-widest border-4 border-swiss-black poster-shadow transition-all ${
                activeTab === cat.id
                  ? 'bg-swiss-black text-swiss-white'
                  : 'bg-swiss-white text-swiss-black hover:bg-poly-cyan'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Project List */}
      <motion.div layout className="flex flex-col">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
