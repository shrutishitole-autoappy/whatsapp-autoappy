import React from 'react';

export default function HeroContent() {
  return (
    <div className="hero-content-stack w-full text-center lg:text-left items-center lg:items-start">

      {/* Section eyebrow label */}
      <div className="flex items-center justify-center lg:justify-start">
        <span className="section-eyebrow">
          WhatsApp Business Automation
        </span>
      </div>

     {/* Main Headline */}
<h1 className="hero-title hero-heading break-words">
  Turn Every WhatsApp{' '}
  <span className="animate-shimmer">
    Conversation
  </span>{' '}
  Into <span className="animate-shimmer">Growth</span>
</h1>

      {/* Subtitle / Body Copy */}
      <p className="hero-subtitle leading-relaxed font-normal max-w-[520px]">
        Transform every WhatsApp conversation with intelligent
        automation. Engage customers, capture and qualify leads,
        and turn meaningful conversations into business growth.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full">

        {/* Get Started */}
        <a
          href="#get-started"
          className="inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-slate-50 border border-slate-200/80 text-slate-700 font-semibold text-sm sm:text-[15px] hover:bg-slate-100 hover:text-slate-900 hover:border-slate-300 transition-all duration-200 shadow-xs hover:shadow-sm"
        >
          Start Free Trial
        </a>

        {/* Book Demo */}
        <a
          href="#book-demo"
          className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-primary hover:bg-primary-dark text-white font-semibold text-sm sm:text-[15px] transition-all duration-200 shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5"
        >
          <span>Book Demo</span>
        </a>

      </div>

    </div>
  );
}