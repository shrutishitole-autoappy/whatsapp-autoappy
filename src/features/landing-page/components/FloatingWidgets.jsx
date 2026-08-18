import React, { useState } from 'react';
import { Phone, Lock } from 'lucide-react';

export default function FloatingWidgets() {
  const [reacted, setReacted] = useState(false);

  return (
    <>
      {/* 1. Top-Left: Contact Card Notification */}
      <div className="absolute top-8 -left-6 sm:-left-14 z-20 bg-white/95 backdrop-blur-md pl-3 pr-5 py-2.5 rounded-2xl shadow-xl shadow-slate-900/8 border border-slate-100/90 flex items-center gap-3 animate-float hover:scale-105 transition-all duration-300">
        {/* Avatar */}
        <div className="relative w-9 h-9 rounded-full overflow-hidden border border-slate-200 shrink-0">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
            alt="Shruti"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Name + Label */}
        <div>
          <h4 className="text-xs font-bold text-slate-800 leading-tight">New Message</h4>
          <p className="text-[11px] font-medium text-sky-600 mt-0.5">From Shruti</p>
        </div>
        {/* Blue Tick */}
        <div className="ml-auto pl-2">
          <svg className="w-4 h-4 text-sky-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </div>

      {/* 2. Bottom-Left: Floating Emoji Reactions */}
      <div className="absolute bottom-24 -left-8 sm:-left-14 z-20 flex flex-col gap-3 animate-float-delayed">
        {/* Fire Emoji Chip */}
        <button
          onClick={() => setReacted(!reacted)}
          className={`bg-white/95 backdrop-blur-md shadow-lg shadow-slate-900/8 border border-slate-100/90 rounded-2xl px-3 py-2 flex items-center gap-2 text-lg font-semibold transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer select-none ${reacted ? 'ring-2 ring-amber-400' : ''}`}
        >
          <span>🔥</span>
          <span className="text-xs font-bold text-slate-600">12</span>
        </button>

        {/* Heart Emoji Chip */}
        <button
          className="bg-white/95 backdrop-blur-md shadow-lg shadow-slate-900/8 border border-slate-100/90 rounded-2xl px-3 py-2 flex items-center gap-2 text-lg font-semibold hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer select-none"
        >
          <span>❤️</span>
          <span className="text-xs font-bold text-slate-600">8</span>
        </button>
      </div>

      {/* 3. Right: Call Button */}
      <div className="absolute bottom-28 -right-5 sm:-right-8 z-20">
        <button className="animate-pulse-ring w-12 h-12 rounded-full bg-white shadow-xl shadow-sky-900/10 border border-slate-100 flex items-center justify-center text-sky-600 hover:bg-sky-50 transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer">
          <Phone className="w-5 h-5" />
        </button>
      </div>

      {/* 4. Right: End-to-End Encrypted Badge */}
      <div className="absolute top-1/3 -right-6 sm:-right-16 z-20 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg shadow-slate-900/8 border border-slate-100/90 flex items-center gap-2 hover:scale-105 transition-all duration-300 animate-float">
        <Lock className="w-3.5 h-3.5 text-sky-600 shrink-0" />
        <span className="text-xs font-semibold text-sky-700 whitespace-nowrap">End-to-end encrypted</span>
      </div>
    </>
  );
}
