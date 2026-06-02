import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Services from './components/Services';
import Solutions from './components/Solutions';
import Industries from './components/Industries';
import Benefits from './components/Benefits';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';
import Portfolio from './components/Portfolio';

function App() {
  const [view, setView] = useState('landing');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#/portafolio') {
        setView('portfolio');
        window.scrollTo(0, 0); // Scroll to top when entering portfolio
      } else {
        setView('landing');
      }
    };

    // Run on initial mount
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Smooth scroll back to section when coming from portfolio
  useEffect(() => {
    if (view === 'landing') {
      const hash = window.location.hash;
      if (hash && hash !== '#/portafolio') {
        setTimeout(() => {
          const targetId = hash.substring(1);
          // If hash is 'beneficios' or 'nosotros', map it correctly if needed.
          // The header links benefits to '#beneficios', but let's check what ID Benefits section actually has.
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }
  }, [view]);

  return (
    <div className="app">
      <Header currentView={view} />
      <main>
        {view === 'landing' ? (
          <>
            <Hero />
            <TechStack />
            <Services />
            <Solutions />
            <Industries />
            <Benefits />
            <ContactSection />
          </>
        ) : (
          <Portfolio />
        )}
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}

export default App;
