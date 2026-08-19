import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MessagingSection from './components/MessagingSection';
import ConnectSection from './components/ConnectSection';
import Footer from './components/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-white font-sans text-slate-900 flex flex-col justify-between selection:bg-sky-100 selection:text-sky-900 relative">
      <Navbar />
      <main className="flex-grow w-full max-w-full overflow-x-hidden">
        <HeroSection />
        <MessagingSection />
        <ConnectSection />
      </main>
      <Footer />
    </div>
  );
}


