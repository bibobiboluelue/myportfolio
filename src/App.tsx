import Navbar from './components/Navbar';
import Header from './components/Header';
import ProjectGrid from './components/ProjectGrid';
import TechStack from './components/TechStack';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (!href || href === '#') return;
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen selection:bg-swiss-yellow selection:text-swiss-black">
      <Navbar />
      <main className="flex flex-col">
        <Header />
        <ProjectGrid />
        <TechStack />
      </main>
      <footer className="p-12 border-t-4 border-swiss-black text-center">
        <p className="text-xs font-black uppercase tracking-widest">
          © 2024 / Designed in Swiss Style / Built with React
        </p>
      </footer>
    </div>
  );
}
