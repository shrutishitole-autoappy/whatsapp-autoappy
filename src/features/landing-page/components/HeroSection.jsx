import React from 'react';
import HeroContent from './HeroContent';
import PhoneMockup from './PhoneMockup';
import FloatingWidgets from './FloatingWidgets';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50/80 via-sky-50/40 to-white pt-12 pb-24 lg:pt-20 lg:pb-32">
      {/* Background Soft Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-200/30 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-cyan-100/40 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Headline & Description */}
          <div className="lg:col-span-6 z-10">
            <HeroContent />
          </div>

          {/* Right Column: Interactive Phone Mockup & Floating Badges */}
          <div className="lg:col-span-6 relative flex justify-center items-center mt-6 lg:mt-0">
            <div className="relative w-full max-w-[420px]">
              <PhoneMockup />
              <FloatingWidgets />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
