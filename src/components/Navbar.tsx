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
      className="archive-nav"
    >
      <a href="#">Home</a>
      {navItems.slice(0, 3).map((item) => (
        <a key={item.name} href={item.href}>
          {item.name === '作品' ? 'Works' : item.name === '关于' ? 'About' : 'Contact'}
        </a>
      ))}
    </motion.nav>
  );
}
