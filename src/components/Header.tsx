import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { MousePointer2, Sparkles, Gamepad2, Paintbrush } from 'lucide-react';

function InteractiveIcon({ children, color = "bg-swiss-yellow" }: { children: React.ReactNode, color?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`w-32 h-32 ${color} poly-clip relative flex items-center justify-center poster-shadow border-4 border-swiss-black cursor-pointer group`}
    >
      <div style={{ transform: "translateZ(20px)" }}>
        {children}
      </div>
    </motion.div>
  );
}

export default function Header() {
  return (
    <header id="about" className="w-full">
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: 'auto' }}
        className="min-h-[92vh] p-6 md:p-12 flex items-end overflow-hidden border-b-4 border-swiss-black relative bg-swiss-black"
      >
        <img
          src={`${import.meta.env.BASE_URL}assets/portfolio-hero-lowpoly.png`}
          alt=""
          className="absolute inset-0 w-full h-full object-cover saturate-125 contrast-110"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,24,39,0.92)_0%,rgba(17,24,39,0.62)_42%,rgba(17,24,39,0.08)_78%),linear-gradient(0deg,rgba(17,24,39,0.78)_0%,rgba(17,24,39,0)_48%)]" />
        <div className="absolute left-6 top-24 w-24 h-20 bg-swiss-purple border-4 border-swiss-black poly-clip sticker-shadow hidden md:block" />
        <div className="absolute right-16 top-28 w-24 h-24 bg-swiss-yellow border-4 border-swiss-black sticker-shadow hidden md:block [clip-path:polygon(50%_0,63%_32%,100%_36%,70%_58%,82%_100%,50%_76%,18%_100%,30%_58%,0_36%,37%_32%)]" />
        <div className="absolute right-[28%] bottom-16 w-36 h-20 bg-swiss-green border-4 border-swiss-black sticker-shadow hidden lg:block [clip-path:polygon(5%_38%,34%_4%,96%_17%,82%_76%,19%_100%)]" />

        <div className="relative z-10 max-w-5xl">
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-swiss-yellow text-swiss-black border-4 border-swiss-black px-4 py-2 text-xs font-black uppercase tracking-[0.24em] poster-shadow"
          >
            <Sparkles size={16} strokeWidth={3} />
            Game Design / Vibe Coding / Portfolio
          </motion.p>
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-7 text-6xl md:text-[10vw] font-black leading-[0.84] tracking-tighter uppercase text-swiss-white [text-shadow:4px_4px_0_#111827,8px_8px_0_rgba(255,63,180,0.7)]"
          >
            JINQIAOQIAO<br />PORTFOLIO
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mt-7 max-w-2xl text-base md:text-xl leading-8 text-swiss-white/85 font-bold"
          >
            一个偏 low-poly、高饱和、游戏海报感的实习求职作品集。展示游戏策划项目、网站 vibe coding 项目和其他创作实验。
          </motion.p>
        
          <motion.div
            className="mt-8 relative z-10"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div
              whileHover={{ scale: 1.15, rotate: -8 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <InteractiveIcon color="bg-poly-cyan">
                <Gamepad2 size={64} className="text-swiss-black" strokeWidth={3} />
                <div className="absolute -top-4 left-4 w-12 h-4 bg-swiss-purple border-t-4 border-x-4 border-swiss-black" />
              </InteractiveIcon>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 border-b-4 border-swiss-black">
        <div className="p-8 md:p-12 border-b-4 md:border-b-0 md:border-r-4 border-swiss-black relative overflow-hidden group bg-swiss-white">
          <h2 className="text-sm font-black uppercase tracking-widest mb-4 text-swiss-purple">About Me / 个人简介</h2>
          <p className="text-2xl md:text-3xl font-bold leading-tight relative z-10">
            专注于 <span className="text-swiss-purple underline decoration-swiss-yellow decoration-4 underline-offset-4">游戏策划</span> 与 <span className="text-poly-cyan underline decoration-swiss-yellow decoration-4 underline-offset-4">交互体验</span> 的实习求职者。
            我想把玩家目标、系统循环和视觉情绪做成能被体验到的作品。
          </p>
          <motion.div 
            whileHover={{ x: 10, y: -10 }}
            className="absolute -bottom-4 -right-4 text-swiss-green opacity-30 group-hover:opacity-100 transition-opacity"
          >
            <Paintbrush size={120} strokeWidth={1} />
          </motion.div>
        </div>
        <div id="contact" className="p-8 md:p-12 flex flex-col justify-between relative overflow-hidden group bg-[linear-gradient(130deg,#ffffff_0_55%,#baf7ff_55%_72%,#ffb6e6_72%_100%)]">
          <div>
            <h2 className="text-sm font-black uppercase tracking-widest mb-4 text-swiss-purple">Contact / 联系方式</h2>
            <p className="text-2xl md:text-3xl font-bold break-all hover:text-swiss-purple transition-colors cursor-pointer relative z-10">
              eventualli@163.com
            </p>
          </div>
          <div className="flex gap-6 mt-8 relative z-10">
            {['GITHUB', 'LINKEDIN', 'INSTAGRAM'].map(link => (
              <a key={link} href="#" className="text-xs font-black underline hover:text-swiss-purple transition-colors">
                {link}
              </a>
            ))}
          </div>
          {/* Decorative Pointer */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute top-4 right-4 text-swiss-purple opacity-20 group-hover:opacity-100 transition-opacity"
          >
            <MousePointer2 size={80} strokeWidth={1} />
          </motion.div>
        </div>
      </div>
    </header>
  );
}
