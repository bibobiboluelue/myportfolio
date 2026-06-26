import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

export default function Header() {
  const archiveItems = useMemo(() => {
    const posha = projects[0];
    const gallery = posha.gallery ?? [];
    const placeholder = (seed: string) => `https://picsum.photos/seed/${seed}/640/420`;

    return [
      {
        id: 'game',
        index: '01',
        label: 'Game Design',
        meta: 'game works',
        title: posha.title,
        description: '风水华容道解谜游戏 Demo，负责主策、美术与文案。',
        link: '/?category=Game#projects',
        images: [posha.imageUrl, gallery[1] ?? posha.imageUrl, gallery[2] ?? posha.imageUrl],
        tone: 'yellow',
      },
      {
        id: 'interaction',
        index: '02',
        label: 'Interaction Design',
        meta: 'ui / ux',
        title: '网站与交互项目',
        description: '展示 UI/UX、网页交互、信息架构与用户流程。',
        link: '/?category=Interaction#projects',
        images: [gallery[3] ?? placeholder('interaction-a'), placeholder('interaction-b'), placeholder('interaction-c')],
        tone: 'gray',
      },
      {
        id: 'brand',
        index: '03',
        label: 'Brand Design',
        meta: 'visual system',
        title: '品牌视觉项目',
        description: '展示品牌识别、海报、视觉规范与包装延展。',
        link: '/?category=Brand#projects',
        images: [gallery[4] ?? placeholder('brand-a'), placeholder('brand-b'), placeholder('brand-c')],
        tone: 'yellow',
      },
      {
        id: 'media',
        index: '04',
        label: 'Digital Media Design',
        meta: 'media works',
        title: '数字媒体项目',
        description: '展示影像、动效、3D、视觉实验和多媒体叙事。',
        link: '/?category=DigitalMedia#projects',
        images: [gallery[5] ?? placeholder('media-a'), placeholder('media-b'), placeholder('media-c')],
        tone: 'gray',
      },
    ];
  }, []);

  const [activeId, setActiveId] = useState(archiveItems[0].id);
  const activeItem = archiveItems.find((item) => item.id === activeId) ?? archiveItems[0];

  return (
    <header id="about" className="archive-shell hover-home-shell min-h-screen overflow-hidden">
      <section className="archive-hero hover-archive-hero">
        <div className="hover-category-list" aria-label="作品分类">
          {archiveItems.map((item) => (
            <Link
              key={item.id}
              to={item.link}
              className={`hover-category ${activeId === item.id ? 'is-active' : ''}`}
              onMouseEnter={() => setActiveId(item.id)}
              onFocus={() => setActiveId(item.id)}
            >
              <span>{item.index}</span>
              <strong>{item.label}</strong>
            </Link>
          ))}
        </div>

        <Link
          key={activeItem.id}
          to={activeItem.link}
          className={`hover-folder-card ${activeItem.tone === 'yellow' ? 'is-yellow' : 'is-gray'} active-${activeItem.id}`}
        >
          <div className="hover-thumbs" aria-hidden="true">
            {activeItem.images.map((image, index) => (
              <img
                key={`${activeItem.id}-${image}-${index}`}
                className={`hover-thumb thumb-${index + 1}`}
                src={image}
                alt=""
              />
            ))}
          </div>
          <div className="hover-folder-meta">
            <span>{activeItem.index}</span>
            <span>{activeItem.meta}</span>
          </div>
          <div className="hover-folder-body">
            <h2>{activeItem.label}</h2>
            <p>{activeItem.title}</p>
            <small>{activeItem.description}</small>
          </div>
        </Link>

        <div className="archive-play" aria-hidden="true" />
      </section>
    </header>
  );
}
