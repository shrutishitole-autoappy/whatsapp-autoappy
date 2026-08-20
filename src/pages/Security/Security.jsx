import React from 'react';
import Navbar from '../../features/landing-page/components/Navbar';
import SecuritySection from '../../features/landing-page/components/SecuritySection';
import Footer from '../../features/landing-page/components/Footer';

export default function Security() {
  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-white font-sans text-slate-900 flex flex-col justify-between selection:bg-sky-100 selection:text-sky-900 relative">
      <Navbar />
      <main className="flex-grow w-full max-w-full overflow-x-hidden">
        <SecuritySection />
      </main>
      <Footer />
    </div>
  );
}
