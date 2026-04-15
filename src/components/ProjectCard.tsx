import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';
import { forwardRef } from 'react';
import { cn } from '../lib/utils';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = forwardRef<HTMLAnchorElement, ProjectCardProps>(({ project, index }, ref) => {
  const hoverColors = {
    UIUX: 'hover:bg-swiss-purple hover:text-swiss-white',
    Game: 'hover:bg-swiss-green hover:text-swiss-white',
    Other: 'hover:bg-swiss-yellow hover:text-swiss-black',
  };

  const categoryColors = {
    UIUX: 'border-swiss-purple text-swiss-purple',
    Game: 'border-swiss-green text-swiss-green',
    Other: 'border-swiss-yellow text-swiss-yellow',
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
        ref={ref}
        className={cn(
          "group relative border-b-2 border-swiss-black py-6 px-4 md:px-12 flex flex-col md:flex-row items-center gap-8 transition-all duration-300 cursor-pointer overflow-hidden",
          hoverColors[project.category] || 'hover:bg-swiss-purple hover:text-swiss-white'
        )}
      >
      {/* Index Number */}
      <span className="text-sm font-black opacity-30 group-hover:opacity-100">
        0{index + 1}
      </span>

      {/* Title & Category */}
      <div className="flex-1 flex flex-col md:flex-row md:items-center gap-4 md:gap-12">
        <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">
          {project.title}
        </h3>
        <span className={cn(
          "text-xs font-black uppercase tracking-widest px-3 py-1 border-2 rounded-full group-hover:border-current",
          categoryColors[project.category]
        )}>
          {project.category}
        </span>
      </div>

      {/* Description */}
      <p className="hidden lg:block w-48 shrink-0 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {project.description}
      </p>

      {/* Hover Image Preview */}
      <div className="hidden lg:block shrink-0 w-48 h-28 rounded-xl overflow-hidden opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 pointer-events-none border-2 border-swiss-black shadow-[4px_4px_0px_0px_rgba(26,26,26,1)]">
        <img
          src={project.imageUrl}
          alt={project.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Arrow */}
      <div className="shrink-0">
        <ArrowUpRight size={32} strokeWidth={3} />
      </div>
    </Link>
    </motion.div>
  );
});

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;
