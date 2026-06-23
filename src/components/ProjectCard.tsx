import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '../lib/utils';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const hoverColors = {
    UIUX: 'hover:bg-poly-cyan hover:text-swiss-black',
    Game: 'hover:bg-swiss-green hover:text-swiss-black',
    Other: 'hover:bg-swiss-purple hover:text-swiss-white',
  };

  const categoryColors = {
    UIUX: 'border-poly-cyan text-poly-cyan',
    Game: 'border-swiss-green text-swiss-green',
    Other: 'border-swiss-purple text-swiss-purple',
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Link
        to={project.link || '/'}
        className={cn(
          "group relative border-b-4 border-swiss-black py-7 px-4 md:px-12 flex flex-col md:flex-row items-center gap-8 transition-all duration-300 cursor-pointer overflow-hidden bg-swiss-white",
          hoverColors[project.category] || 'hover:bg-swiss-purple hover:text-swiss-white'
        )}
      >
        <div className="absolute left-0 top-0 h-full w-5 poly-bg border-r-4 border-swiss-black opacity-90" />
        <div className="absolute right-8 top-5 w-16 h-12 bg-swiss-yellow border-4 border-swiss-black poly-clip opacity-0 group-hover:opacity-100 transition-opacity sticker-shadow" />

        {/* Index Number */}
        <span className="relative z-10 text-sm font-black opacity-50 group-hover:opacity-100">
          0{index + 1}
        </span>

        {/* Title & Category */}
        <div className="relative z-10 flex-1 flex flex-col md:flex-row md:items-center gap-4 md:gap-12">
          <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none group-hover:[text-shadow:3px_3px_0_rgba(255,255,255,0.72)]">
            {project.title}
          </h3>
          <span className={cn(
            "text-xs font-black uppercase tracking-widest px-3 py-1 border-4 bg-swiss-white group-hover:border-current group-hover:text-current",
            categoryColors[project.category]
          )}>
            {project.category}
          </span>
        </div>

        {/* Description */}
        <p className="relative z-10 hidden lg:block w-48 shrink-0 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.description}
        </p>

        {/* Hover Image Preview */}
        <div className="relative z-10 hidden lg:block shrink-0 w-48 h-28 overflow-hidden opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 pointer-events-none border-4 border-swiss-black poster-shadow poly-bg">
          <img
            src={project.imageUrl}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover mix-blend-multiply saturate-150 contrast-125"
          />
        </div>

        {/* Arrow */}
        <div className="relative z-10 shrink-0">
          <ArrowUpRight size={32} strokeWidth={3} />
        </div>
      </Link>
    </motion.div>
  );
}
