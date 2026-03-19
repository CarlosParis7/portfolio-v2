import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useAppContext } from './context/AppContext';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Capabilities from './components/Capabilities';
import Contact from './components/Contact';

function App() {
  const { lang, theme, toggleLang, toggleTheme, t } = useAppContext();

  return (
    <div className="min-h-screen">
      <nav className="glass sticky-nav">
        <div className="container nav-content">
          <div className="logo">Carlos Paris</div>
          <div className="nav-links">
            <a href="#work">{t.nav.work}</a>
            <a href="#capabilities">{t.nav.capabilities}</a>
            <a href="#contact">{t.nav.contact}</a>
          </div>
          <div className="nav-toggles">
            <button onClick={toggleLang} className="toggle-btn" aria-label="Toggle Language" style={{ fontSize: '0.85rem', fontWeight: 600 }}>
              {lang === 'en' ? 'ES' : 'EN'}
            </button>
             <span style={{color: 'var(--border-color)', margin: '0 4px'}}>|</span>
            <button onClick={toggleTheme} className="toggle-btn" aria-label="Toggle Theme">
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </nav>

      <main className="container">
        <Hero />
        <Projects />
        <Capabilities />
        <Contact />
      </main>
    </div>
  );
}

export default App;
