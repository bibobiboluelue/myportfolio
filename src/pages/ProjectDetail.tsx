import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((item) => item.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <main className="archive-shell detail-shell detail-not-found">
        <p>404</p>
        <Link to="/">Back to works</Link>
      </main>
    );
  }

  const heroImages = (project.gallery && project.gallery.length > 1)
    ? project.gallery.slice(0, 2)
    : [project.imageUrl, project.imageUrl];
  const displayImages = project.gallery && project.gallery.length > 0 ? project.gallery : [project.imageUrl];
  const detailRows = [
    { label: 'category', value: `${project.category} works` },
    { label: 'year', value: project.period || '2026' },
    { label: 'role', value: project.role || project.tags.slice(0, 2).join(' / ') },
    { label: 'award', value: project.award },
  ].filter((row) => row.value);

  return (
    <main className="archive-shell detail-shell">
      <nav className="detail-nav">
        <Link to="/">Home</Link>
        <Link to="/#projects">Works</Link>
        <Link to="/#about">About</Link>
        <Link to="/#contact">Contact</Link>
      </nav>

      <section className="detail-hero">
        <div className="detail-copy">
          <Link to="/#projects" className="detail-back">← See all works</Link>
          <h1>{project.title}</h1>

          <div className="detail-facts">
            {detailRows.map((row) => (
              <p key={row.label}>
                <span>{row.label}</span>
                {row.value}
              </p>
            ))}
          </div>

          <p className="detail-summary">{project.description}</p>

          <div className="detail-tags">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          {project.externalLinks && (
            <div className="detail-links">
              {project.externalLinks.map((item) => (
                <a key={item.label} href={item.url} target="_blank" rel="noreferrer">
                  {item.label}
                  <ExternalLink size={14} strokeWidth={2.5} />
                </a>
              ))}
            </div>
          )}
        </div>

        <div className="detail-hero-media">
          {heroImages.map((image, index) => (
            <img
              key={`${image}-${index}`}
              src={image}
              alt={`${project.title} preview ${index + 1}`}
            />
          ))}
        </div>
      </section>

      <section className="detail-overview">
        <div>
          <p className="detail-section-label">Overview</p>
          <h2>Project Notes</h2>
        </div>
        <div className="detail-overview-text">
          {(project.overview || ['这里可以补充项目的背景、目标、设计挑战和最终产出。']).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="detail-process">
        {(project.process || []).map((step, index) => (
          <article key={step.title}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </article>
        ))}
      </section>

      <section className="detail-gallery">
        {displayImages.map((image, index) => (
          <figure key={`${image}-${index}`}>
            <img
              src={image}
              alt={`${project.title} image ${index + 1}`}
              loading={index > 1 ? 'lazy' : 'eager'}
            />
          </figure>
        ))}
      </section>
    </main>
  );
}
