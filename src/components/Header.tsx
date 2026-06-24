import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

export default function Header() {
  const featured = projects.slice(0, 3);

  return (
    <header id="about" className="archive-shell min-h-screen overflow-hidden">
      <section className="archive-hero">
        <div className="archive-topline">
          <span>Portfolio 2026</span>
          <span>Game Design / Vibe Coding</span>
        </div>

        <div className="archive-title-row">
          <h1>Works</h1>
          <p>Archive</p>
        </div>

        <div className="archive-hero-copy">
          <p>
            游戏策划与交互创作作品集。这里收录游戏 Demo、策划文档、视觉实验和网站项目。
          </p>
        </div>

        <div className="archive-stack" aria-label="精选作品预览">
          {featured.map((project, index) => (
            <Link
              key={project.id}
              to={project.link || '/'}
              className={`archive-preview-card card-${index + 1}`}
            >
              <div className="archive-card-tab">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <span>{project.category}</span>
              </div>
              <div className="archive-card-body">
                <div>
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                </div>
                <img src={project.imageUrl} alt={project.title} />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </header>
  );
}
