import { motion } from 'motion/react';
import { cn } from '../lib/utils';

const navItems = [
  { name: '作品', href: '#projects' },
  { name: '关于', href: '#about' },
  { name: '技能', href: '#skills' },
  { name: '联系', href: '#contact' },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 pointer-events-none"
    >
      <div className="glass px-5 py-2 rounded-2xl flex items-center gap-6 shadow-sm pointer-events-auto">
        <a href="#" className="font-black text-sm tracking-tighter">PORTFOLIO.</a>
        <div className="flex items-center gap-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-[10px] font-black uppercase tracking-widest text-brand/40 hover:text-brand transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
