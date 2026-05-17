import React from 'react';
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

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <TechStack />
        <Services />
        <Solutions />
        <Industries />
        <Benefits />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}

export default App;
