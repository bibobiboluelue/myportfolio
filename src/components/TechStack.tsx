import { motion } from 'motion/react';
import { cn } from '../lib/utils';

const skills = [
  { category: '设计工具', items: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'After Effects'] },
  { category: '游戏开发', items: ['Unity 3D', 'Unreal Engine', 'C#', 'Blender', 'Spine 2D'] },
  { category: '前端技术', items: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Three.js'] },
  { category: '软技能', items: ['用户研究', '原型制作', '交互逻辑', '关卡设计', '团队协作'] },
];

export default function TechStack() {
  const accentColors = ['bg-swiss-purple', 'bg-swiss-green', 'bg-swiss-yellow', 'bg-poly-cyan'];

  return (
    <section id="skills" className="w-full bg-swiss-white">
      <div className="p-6 md:px-12 border-b-4 border-swiss-black bg-poly-cyan">
        <h2 className="text-xl font-black uppercase tracking-tighter [text-shadow:2px_2px_0_#fff05a]">Toolkit / 能力工具箱</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {skills.map((group, idx) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="p-8 md:p-12 border-b-4 lg:border-b-0 lg:border-r-4 last:border-r-0 border-swiss-black relative overflow-hidden"
          >
            <div className={cn("absolute right-4 top-4 w-16 h-12 poly-clip border-4 border-swiss-black opacity-20", accentColors[idx % accentColors.length])} />
            <h3 className="text-sm font-black uppercase tracking-[0.2em] mb-8 text-swiss-purple">
              {group.category}
            </h3>
            <div className="flex flex-col gap-4">
              {group.items.map((item) => (
                <div
                  key={item}
                  className="text-2xl font-bold flex items-center justify-between group cursor-default"
                >
                  <span>{item}</span>
                  <div className={cn(
                    "w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity border-2 border-swiss-black poly-clip",
                    accentColors[idx % accentColors.length]
                  )} />
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
