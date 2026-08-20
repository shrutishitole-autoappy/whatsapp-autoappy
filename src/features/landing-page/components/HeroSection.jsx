import React from 'react';
import HeroContent from './HeroContent';
import PhoneMockup from './PhoneMockup';
import FloatingWidgets from './FloatingWidgets';

export default function HeroSection() {
  return (
    <section className="hero-section bg-gradient-to-b from-slate-50/80 via-sky-50/40 to-white">
      {/* Background Soft Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(560px,80vw)] h-[min(560px,80vw)] bg-sky-200/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-4 sm:right-10 w-[min(380px,60vw)] h-[min(380px,60vw)] bg-cyan-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="hero-container w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-16 items-center">
          {/* Left Column: Hero Headline & Description */}
          <div className="z-10 text-center lg:text-left flex flex-col items-center lg:items-start">
            <HeroContent />
          </div>

          {/* Right Column: Interactive Phone Mockup & Floating Badges */}
          <div className="relative flex justify-center items-center mt-6 lg:mt-0 w-full overflow-visible">
            <div className="phone-wrapper px-2 sm:px-0">
              <PhoneMockup />
              <FloatingWidgets />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
