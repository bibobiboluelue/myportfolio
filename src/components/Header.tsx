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
        id: 'motion',
        index: '01',
        label: 'motion',
        meta: 'game demo',
        title: posha.title,
        description: '风水华容道解谜游戏 Demo，负责主策、美术与文案。',
        link: posha.link || '/',
        images: [posha.imageUrl, gallery[1] ?? posha.imageUrl, gallery[2] ?? posha.imageUrl],
        tone: 'yellow',
      },
      {
        id: 'branding',
        index: '02',
        label: 'branding',
        meta: 'visual system',
        title: '品牌视觉占位项目',
        description: '这里先放品牌视觉、海报、角色设定或 UI 规范项目。',
        link: '#projects',
        images: [gallery[3] ?? placeholder('brand-a'), placeholder('brand-b'), placeholder('brand-c')],
        tone: 'gray',
      },
      {
        id: 'editorial',
        index: '03',
        label: 'editorial',
        meta: 'planning docs',
        title: '策划文档占位项目',
        description: '适合展示玩法拆解、系统文档、关卡流程和用户路径。',
        link: '#projects',
        images: [gallery[4] ?? placeholder('editorial-a'), placeholder('editorial-b'), placeholder('editorial-c')],
        tone: 'yellow',
      },
      {
        id: 'photoworks',
        index: '04',
        label: 'photoworks',
        meta: 'project record',
        title: '过程记录占位项目',
        description: '可以放调研截图、制作过程、测试反馈和现场记录。',
        link: '#projects',
        images: [gallery[5] ?? placeholder('photo-a'), placeholder('photo-b'), placeholder('photo-c')],
        tone: 'gray',
      },
      {
        id: 'illustration',
        index: '05',
        label: 'illustration',
        meta: 'art works',
        title: '插画与视觉占位项目',
        description: '用于放角色、场景、海报、道具和风格探索。',
        link: '#projects',
        images: [gallery[6] ?? placeholder('illus-a'), placeholder('illus-b'), placeholder('illus-c')],
        tone: 'yellow',
      },
      {
        id: 'tech',
        index: '06',
        label: '3D tech',
        meta: 'prototype',
        title: 'Vibe Coding 占位项目',
        description: '可以展示网站、交互原型、3D 小实验和技术验证。',
        link: '#projects',
        images: [gallery[7] ?? placeholder('tech-a'), placeholder('tech-b'), placeholder('tech-c')],
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
