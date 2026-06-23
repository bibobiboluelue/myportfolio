import { motion } from 'motion/react';
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
      <div className="px-5 py-2 flex items-center gap-6 pointer-events-auto bg-swiss-white/92 border-4 border-swiss-black poster-shadow backdrop-blur-md">
        <a href="#" className="font-black text-sm tracking-tighter text-swiss-black [text-shadow:2px_2px_0_#ff3fb4]">PORTFOLIO.</a>
        <div className="flex items-center gap-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-[10px] font-black uppercase tracking-widest text-swiss-black/55 hover:text-swiss-purple transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
