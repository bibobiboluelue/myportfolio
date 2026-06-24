import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const isFeatured = index === 0;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className={isFeatured ? 'archive-project-card featured' : 'archive-project-card'}
    >
      <Link to={project.link || '/'} className="archive-project-link">
        <div className="archive-card-tab">
          <span>Featured Work {String(index + 1).padStart(2, '0')}</span>
          <span>{project.category}</span>
        </div>

        <div className="archive-project-main">
          <div className="archive-project-copy">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="archive-tags">
              {project.tags.slice(0, 4).map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>

          <div className="archive-project-media">
            <img src={project.imageUrl} alt={project.title} />
          </div>

          <div className="archive-project-meta">
            <p>{project.period || '2024'}</p>
            <p>{project.role || project.category}</p>
            <ArrowUpRight size={28} strokeWidth={1.8} />
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
