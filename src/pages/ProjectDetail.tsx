import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-6xl font-black mb-4">404</p>
          <Link to="/" className="underline font-bold">返回首页</Link>
        </div>
      </div>
    );
  }

  const accentBg = {
    UIUX: 'bg-poly-cyan',
    Game: 'bg-swiss-green',
    Other: 'bg-swiss-purple',
  }[project.category];

  const accentText = {
    UIUX: 'text-poly-cyan',
    Game: 'text-swiss-green',
    Other: 'text-swiss-purple',
  }[project.category];

  const headerText = {
    UIUX: 'text-swiss-black',
    Game: 'text-swiss-black',
    Other: 'text-swiss-white',
  }[project.category];

  return (
    <div className="min-h-screen bg-poly-cream">
      <div className="fixed top-6 left-6 z-50">
        <Link
          to="/"
          className="flex items-center gap-2 bg-swiss-yellow border-4 border-swiss-black px-4 py-2 font-black text-sm uppercase tracking-widest poster-shadow hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
        >
          <ArrowLeft size={16} strokeWidth={3} />
          返回
        </Link>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`${accentBg} ${headerText} min-h-[60vh] flex flex-col justify-end p-12 md:p-24 border-b-4 border-swiss-black relative overflow-hidden`}
      >
        <div className="absolute right-12 top-16 w-40 h-28 bg-swiss-yellow border-4 border-swiss-black poly-clip sticker-shadow opacity-80" />
        <div className="absolute left-1/2 top-24 w-24 h-24 bg-poly-orange border-4 border-swiss-black sticker-shadow opacity-70 [clip-path:polygon(50%_0,63%_32%,100%_36%,70%_58%,82%_100%,50%_76%,18%_100%,30%_58%,0_36%,37%_32%)]" />
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="relative z-10 text-sm font-black uppercase tracking-widest mb-4 opacity-70"
        >
          {project.category} / 项目详情
        </motion.p>
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="relative z-10 text-5xl md:text-[8vw] font-black leading-[0.9] tracking-tighter uppercase [text-shadow:4px_4px_0_rgba(255,255,255,0.45)]"
        >
          {project.title}
        </motion.h1>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="relative z-10 flex flex-wrap gap-3 mt-8"
        >
          {project.tags.map(tag => (
            <span key={tag} className="text-xs font-black uppercase tracking-widest border-4 border-current bg-swiss-white/80 text-swiss-black px-3 py-1">
              {tag}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 border-b-4 border-swiss-black">
        <div className="md:col-span-2 p-12 md:p-16 border-b-4 md:border-b-0 md:border-r-4 border-swiss-black">
          <h2 className={`text-xs font-black uppercase tracking-widest mb-6 ${accentText}`}>项目概述</h2>
          <p className="text-2xl md:text-3xl font-bold leading-relaxed">
            {project.description}
          </p>
          {/* 在这里添加更多描述文字 */}
          <p className="mt-6 text-lg font-medium text-swiss-black/60 leading-relaxed">
            在这里补充项目的详细背景、目标与挑战。你可以描述项目的起源、解决的核心问题，以及整体设计思路。
          </p>
        </div>
        <div className="p-12 md:p-16 flex flex-col gap-8">
          <div>
            <h2 className={`text-xs font-black uppercase tracking-widest mb-3 ${accentText}`}>类型</h2>
            <p className="text-xl font-bold">{project.category}</p>
          </div>
          <div>
            <h2 className={`text-xs font-black uppercase tracking-widest mb-3 ${accentText}`}>工具</h2>
            <div className="flex flex-col gap-1">
              {project.tags.map(tag => (
                <p key={tag} className="text-xl font-bold">{tag}</p>
              ))}
            </div>
          </div>
          <div>
            <h2 className={`text-xs font-black uppercase tracking-widest mb-3 ${accentText}`}>年份</h2>
            <p className="text-xl font-bold">2024</p>
          </div>
        </div>
      </div>

      {/* Main Image */}
      <div className="border-b-4 border-swiss-black">
        <div className="w-full aspect-video bg-swiss-black/5 flex items-center justify-center overflow-hidden">
          {/* 替换为你的主图 */}
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Process Section */}
      <div className="p-12 md:p-16 border-b-4 border-swiss-black">
        <h2 className={`text-xs font-black uppercase tracking-widest mb-12 ${accentText}`}>设计过程</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['研究 / Research', '设计 / Design', '迭代 / Iterate'].map((step, i) => (
            <div key={step} className="border-4 border-swiss-black p-8 poster-shadow bg-swiss-white relative overflow-hidden">
              <div className="absolute right-4 top-4 w-12 h-10 poly-bg border-4 border-swiss-black opacity-20" />
              <p className={`text-5xl font-black mb-4 ${accentText}`}>0{i + 1}</p>
              <h3 className="text-lg font-black uppercase tracking-tight mb-3">{step}</h3>
              <p className="text-sm font-medium text-swiss-black/60 leading-relaxed">
                在这里描述这个阶段的具体工作内容、方法与产出。
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Image / Video Grid */}
      <div className="p-12 md:p-16 border-b-4 border-swiss-black">
        <h2 className={`text-xs font-black uppercase tracking-widest mb-12 ${accentText}`}>项目展示</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 图片占位 1 */}
          <div className="aspect-video poly-bg border-4 border-swiss-black flex items-center justify-center">
            <p className="text-sm font-black uppercase tracking-widest text-swiss-black/30">图片 / 视频 01</p>
          </div>
          {/* 图片占位 2 */}
          <div className="aspect-video poly-bg border-4 border-swiss-black flex items-center justify-center">
            <p className="text-sm font-black uppercase tracking-widest text-swiss-black/30">图片 / 视频 02</p>
          </div>
          {/* 宽图占位 */}
          <div className="md:col-span-2 aspect-video poly-bg border-4 border-swiss-black flex items-center justify-center">
            <p className="text-sm font-black uppercase tracking-widest text-swiss-black/30">图片 / 视频 03（宽幅）</p>
          </div>
        </div>
      </div>

      {/* Footer Nav */}
      <div className="p-12 md:p-16 flex items-center justify-between">
        <Link
          to="/"
          className={`flex items-center gap-3 font-black text-lg uppercase tracking-tight hover:${accentText} transition-colors`}
        >
          <ArrowLeft size={24} strokeWidth={3} />
          所有作品
        </Link>
        <a
          href="#"
          className={`flex items-center gap-3 font-black text-lg uppercase tracking-tight hover:${accentText} transition-colors`}
        >
          查看原型
          <ExternalLink size={24} strokeWidth={3} />
        </a>
      </div>
    </div>
  );
}
