import React from 'react';
import { Download } from 'lucide-react';

export default function HeroContent() {
  return (
    <div className="flex flex-col justify-center space-y-8 max-w-xl">
      {/* Main Headline */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
        Connect. <span className="animate-shimmer">Chat.</span> Call. Share.
      </h1>

      {/* Subtitle / Body Copy */}
      <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
        Experience seamless, secure communication. Stay connected with friends,
        family, and teams in a premium, distraction-free environment.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center gap-4 pt-2">
        <a
          href="#get-started"
          className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-slate-50 border border-slate-200/80 text-slate-700 font-semibold text-sm hover:bg-slate-100 hover:text-slate-900 hover:border-slate-300 transition-all duration-200 shadow-xs hover:shadow-sm"
        >
          Get Started
        </a>

        <a
          href="#download-app"
          className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#006699] text-white font-semibold text-sm hover:bg-[#005580] transition-all duration-200 shadow-md shadow-sky-900/10 hover:shadow-lg hover:-translate-y-0.5"
        >
          <span>Download App</span>
          <Download className="w-4 h-4" />
        </a>
      </div>

      {/* Social Proof: Trusted by teams */}
      <div className="flex items-center gap-3 pt-1">
        {/* Avatar Stack */}
        <div className="flex items-center -space-x-2.5">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=80"
            alt="User 1"
            className="w-9 h-9 rounded-full border-2 border-white object-cover shadow-sm"
          />
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=80"
            alt="User 2"
            className="w-9 h-9 rounded-full border-2 border-white object-cover shadow-sm"
          />
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=80"
            alt="User 3"
            className="w-9 h-9 rounded-full border-2 border-white object-cover shadow-sm"
          />
          {/* +2k Pill */}
          <div className="w-9 h-9 rounded-full border-2 border-white bg-sky-50 flex items-center justify-center shadow-sm">
            <span className="text-[10px] font-bold text-sky-700">+2k</span>
          </div>
        </div>

        {/* Label */}
        <p className="text-sm text-slate-600 font-medium">
          Trusted by <span className="font-bold text-slate-800">teams worldwide</span>
        </p>
      </div>
    </div>
  );
}
