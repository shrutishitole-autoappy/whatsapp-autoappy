import React from 'react';
import Navbar from '../../features/landing-page/components/Navbar';
import SolutionsSection from '../../features/landing-page/components/SolutionsSection';
import Footer from '../../features/landing-page/components/Footer';

export default function Solutions() {
  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-white font-sans text-slate-900 flex flex-col justify-between selection:bg-sky-100 selection:text-sky-900 relative">
      <Navbar />
      <main className="flex-grow w-full max-w-full overflow-x-hidden">
        <SolutionsSection />
      </main>
      <Footer />
    </div>
  );
}
