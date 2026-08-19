import React from 'react';

export default function HeroContent() {
  return (
    <div className="flex flex-col justify-center space-y-6 sm:space-y-8 max-w-xl w-full">

      {/* Main Headline */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.14] break-words">
        Turn{' '}
        <span className="animate-shimmer">
          Conversations
        </span>{' '}
        Into Conversions
      </h1>

      {/* Subtitle / Body Copy */}
      <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed font-normal max-w-lg">
        Transform every WhatsApp conversation with intelligent
        automation. Engage customers, capture and qualify leads,
        and turn meaningful conversations into business growth.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-1 sm:pt-2 w-full">

        {/* Get Started */}
        <a
          href="#get-started"
          className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-slate-50 border border-slate-200/80 text-slate-700 font-semibold text-xs sm:text-sm hover:bg-slate-100 hover:text-slate-900 hover:border-slate-300 transition-all duration-200 shadow-xs hover:shadow-sm"
        >
          Get Started
        </a>

        {/* Book Demo */}
        <a
          href="#book-demo"
          className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-[#006699] text-white font-semibold text-xs sm:text-sm hover:bg-[#005580] transition-all duration-200 shadow-md shadow-sky-900/10 hover:shadow-lg hover:-translate-y-0.5"
        >
          <span>Book Demo</span>
        </a>

      </div>

    </div>
  );
}