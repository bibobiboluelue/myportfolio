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
    UIUX: 'bg-swiss-purple',
    Game: 'bg-swiss-green',
    Other: 'bg-swiss-yellow',
  }[project.category];

  const accentText = {
    UIUX: 'text-swiss-purple',
    Game: 'text-swiss-green',
    Other: 'text-swiss-yellow',
  }[project.category];

  const headerText = {
    UIUX: 'text-swiss-white',
    Game: 'text-swiss-black',
    Other: 'text-swiss-black',
  }[project.category];

  return (
    <div className="min-h-screen">
      {/* Back Button */}
      <div className="fixed top-6 left-6 z-50">
        <Link
          to="/"
          className="flex items-center gap-2 bg-swiss-white border-4 border-swiss-black px-4 py-2 font-black text-sm uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(26,26,26,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
        >
          <ArrowLeft size={16} strokeWidth={3} />
          返回
        </Link>
      </div>

      {/* Hero */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`${accentBg} ${headerText} min-h-[60vh] flex flex-col justify-end p-12 md:p-24 border-b-4 border-swiss-black`}
      >
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-sm font-black uppercase tracking-widest mb-4 opacity-60"
        >
          {project.category} / 项目详情
        </motion.p>
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-[8vw] font-black leading-[0.9] tracking-tighter uppercase"
        >
          {project.title}
        </motion.h1>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-3 mt-8"
        >
          {project.tags.map(tag => (
            <span key={tag} className="text-xs font-black uppercase tracking-widest border-2 border-current px-3 py-1 rounded-full">
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
            <div key={step} className="border-4 border-swiss-black p-8 shadow-[8px_8px_0px_0px_rgba(26,26,26,1)]">
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
          <div className="aspect-video bg-swiss-black/5 border-4 border-swiss-black flex items-center justify-center">
            <p className="text-sm font-black uppercase tracking-widest text-swiss-black/30">图片 / 视频 01</p>
          </div>
          {/* 图片占位 2 */}
          <div className="aspect-video bg-swiss-black/5 border-4 border-swiss-black flex items-center justify-center">
            <p className="text-sm font-black uppercase tracking-widest text-swiss-black/30">图片 / 视频 02</p>
          </div>
          {/* 宽图占位 */}
          <div className="md:col-span-2 aspect-video bg-swiss-black/5 border-4 border-swiss-black flex items-center justify-center">
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
