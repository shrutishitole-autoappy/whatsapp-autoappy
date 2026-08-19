import React from 'react';
import HeroContent from './HeroContent';
import PhoneMockup from './PhoneMockup';
import FloatingWidgets from './FloatingWidgets';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden w-full max-w-full bg-gradient-to-b from-slate-50/80 via-sky-50/40 to-white pt-8 pb-16 sm:pt-12 sm:pb-24 lg:pt-20 lg:pb-28">
      {/* Background Soft Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(600px,90vw)] h-[min(600px,90vw)] bg-sky-200/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-4 sm:right-10 w-[min(400px,70vw)] h-[min(400px,70vw)] bg-cyan-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">
          {/* Left Column: Hero Headline & Description */}
          <div className="lg:col-span-6 z-10 text-center lg:text-left flex flex-col items-center lg:items-start">
            <HeroContent />
          </div>

          {/* Right Column: Interactive Phone Mockup & Floating Badges */}
          <div className="lg:col-span-6 relative flex justify-center items-center mt-4 lg:mt-0 w-full">
            <div className="relative w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[420px] mx-auto px-2 sm:px-0">
              <PhoneMockup />
              <FloatingWidgets />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
