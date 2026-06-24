import Navbar from './components/Navbar';
import Header from './components/Header';
import ProjectGrid from './components/ProjectGrid';
import TechStack from './components/TechStack';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-swiss-purple selection:text-swiss-black">
      <Navbar />
      <main className="flex flex-col">
        <Header />
        <ProjectGrid />
        <TechStack />
      </main>
      <footer className="site-footer">
        <p>© 2026 / Works Archive / Built with React</p>
      </footer>
    </div>
  );
}
