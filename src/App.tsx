/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background from './components/Background';
import ScrollToTop from './components/ScrollToTop';
import LoadingScreen from './components/LoadingScreen';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial resource loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden selection:bg-primary/30">
      <LoadingScreen />
      
      <Background />
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Services />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
      
      {/* Dynamic noise texture overlay for professional finish */}
      <div className="fixed inset-0 z-[1] pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}

