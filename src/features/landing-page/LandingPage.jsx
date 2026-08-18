import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MessagingSection from './components/MessagingSection';
import ConnectSection from './components/ConnectSection';
import Footer from './components/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 flex flex-col justify-between selection:bg-sky-100 selection:text-sky-900">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <MessagingSection />
        <ConnectSection />
      </main>
      <Footer />
    </div>
  );
}


