import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Folder, MousePointer2, Smile, Monitor, Paintbrush } from 'lucide-react';

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
      className={`w-32 h-32 ${color} rounded-2xl relative flex items-center justify-center shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] border-4 border-swiss-black cursor-pointer group`}
    >
      <div style={{ transform: "translateZ(20px)" }}>
        {children}
      </div>
    </motion.div>
  );
}

export default function Header() {
  return (
    <header className="w-full">
      {/* Top Banner - Swiss Purple */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: 'auto' }}
        className="bg-swiss-purple text-swiss-green p-12 md:p-24 flex flex-col items-center justify-center text-center overflow-hidden border-b-4 border-swiss-black relative"
      >
        {/* Floating Icons */}
        <div className="absolute top-10 left-10 hidden lg:block">
          <InteractiveIcon color="bg-swiss-green">
            <Smile size={48} className="text-swiss-black" strokeWidth={3} />
          </InteractiveIcon>
        </div>
        <div className="absolute bottom-10 right-10 hidden lg:block">
          <InteractiveIcon color="bg-swiss-yellow">
            <Monitor size={48} className="text-swiss-black" strokeWidth={3} />
          </InteractiveIcon>
        </div>

        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-6xl md:text-[12vw] font-black leading-[0.8] tracking-tighter uppercase relative z-10"
        >
          YOUR NAME<br />PORTFOLIO
        </motion.h1>
        
        {/* 3D Animated Folder Icon */}
        <div className="mt-8 relative z-10">
          <InteractiveIcon color="bg-swiss-yellow">
            <Folder size={64} className="text-swiss-black" strokeWidth={3} />
            <div className="absolute -top-4 left-0 w-12 h-4 bg-swiss-yellow border-t-4 border-x-4 border-swiss-black rounded-t-lg" />
          </InteractiveIcon>
        </div>
      </motion.div>

      {/* Bio Section - White with Black Borders */}
      <div className="grid grid-cols-1 md:grid-cols-2 border-b-4 border-swiss-black">
        <div className="p-8 md:p-12 border-b-4 md:border-b-0 md:border-r-4 border-swiss-black relative overflow-hidden group">
          <h2 className="text-sm font-black uppercase tracking-widest mb-4 text-swiss-purple">About Me / 个人简介</h2>
          <p className="text-2xl md:text-3xl font-bold leading-tight relative z-10">
            专注于 <span className="text-swiss-purple underline decoration-swiss-yellow decoration-4 underline-offset-4">UI/UX 交互</span> 与 <span className="text-swiss-green underline decoration-swiss-yellow decoration-4 underline-offset-4">游戏设计</span> 的实习求职者。
            我热衷于通过色彩与几何构建充满活力的数字世界。
          </p>
          {/* Decorative Brush */}
          <motion.div 
            whileHover={{ x: 10, y: -10 }}
            className="absolute -bottom-4 -right-4 text-swiss-green opacity-20 group-hover:opacity-100 transition-opacity"
          >
            <Paintbrush size={120} strokeWidth={1} />
          </motion.div>
        </div>
        <div className="p-8 md:p-12 flex flex-col justify-between relative overflow-hidden group">
          <div>
            <h2 className="text-sm font-black uppercase tracking-widest mb-4 text-swiss-purple">Contact / 联系方式</h2>
            <p className="text-2xl md:text-3xl font-bold break-all hover:text-swiss-purple transition-colors cursor-pointer relative z-10">
              hello@example.com
            </p>
          </div>
          <div className="flex gap-6 mt-8 relative z-10">
            {['GITHUB', 'LINKEDIN', 'INSTAGRAM'].map(link => (
              <a key={link} href="#" className="text-xs font-black underline hover:text-swiss-green transition-colors">
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
