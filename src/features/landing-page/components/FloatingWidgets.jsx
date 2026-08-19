import React, { useState } from 'react';
import { Phone, Lock, CheckCircle2, UserPlus } from 'lucide-react';

export default function FloatingWidgets() {
  const [fireCount, setFireCount] = useState(12);
  const [heartCount, setHeartCount] = useState(8);
  const [fireActive, setFireActive] = useState(false);
  const [heartActive, setHeartActive] = useState(false);

  const toggleFire = () => {
    setFireActive(!fireActive);
    setFireCount((prev) => (fireActive ? prev - 1 : prev + 1));
  };

  const toggleHeart = () => {
    setHeartActive(!heartActive);
    setHeartCount((prev) => (heartActive ? prev - 1 : prev + 1));
  };

  return (
    <>


      {/* 2. Bottom-Left: Floating Emoji Reactions */}
      <div className="absolute bottom-16 sm:bottom-20 -left-2 sm:-left-6 lg:-left-8 z-40 flex flex-col gap-2 sm:gap-2.5 animate-float-delayed pointer-events-auto">
        {/* Fire Emoji Chip */}
        <button
          onClick={toggleFire}
          className={`bg-white/90 backdrop-blur-xl shadow-[0_12px_28px_-6px_rgba(0,0,0,0.12),0_0_0_1px_rgba(255,255,255,0.8)_inset] border border-white/60 rounded-2xl px-3 py-1.5 flex items-center gap-2 text-base sm:text-lg font-semibold transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer select-none ${
            fireActive ? 'ring-2 ring-amber-400 bg-amber-50/90 scale-105' : ''
          }`}
          title="React with Fire"
        >
          <span>🔥</span>
          <span className="text-[11px] sm:text-xs font-bold text-slate-700">{fireCount}</span>
        </button>

        {/* Heart Emoji Chip */}
        <button
          onClick={toggleHeart}
          className={`bg-white/90 backdrop-blur-xl shadow-[0_12px_28px_-6px_rgba(0,0,0,0.12),0_0_0_1px_rgba(255,255,255,0.8)_inset] border border-white/60 rounded-2xl px-3 py-1.5 flex items-center gap-2 text-base sm:text-lg font-semibold transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer select-none ${
            heartActive ? 'ring-2 ring-rose-400 bg-rose-50/90 scale-105' : ''
          }`}
          title="React with Heart"
        >
          <span>❤️</span>
          <span className="text-[11px] sm:text-xs font-bold text-slate-700">{heartCount}</span>
        </button>
      </div>


      {/* Order Confirmed — right side, mid-lower */}
      <div className="absolute top-1/2 -right-2 sm:-right-8 lg:-right-14 z-40 bg-white/95 backdrop-blur-xl pl-2.5 pr-4 py-2 rounded-2xl shadow-[0_12px_30px_-5px_rgba(0,0,0,0.12),0_0_0_1px_rgba(255,255,255,0.8)_inset] border border-white/60 flex items-center gap-2 animate-float hover:scale-105 transition-all duration-300 pointer-events-auto cursor-pointer">
        <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
        </div>
        <span className="text-[10px] sm:text-[11px] font-bold text-slate-800 whitespace-nowrap">Order Confirmed</span>
      </div>

      {/* Lead Captured — left side, near top message area */}
      <div className="absolute top-[22%] -left-2 sm:-left-8 lg:-left-14 z-40 bg-white/95 backdrop-blur-xl pl-2.5 pr-4 py-2 rounded-2xl shadow-[0_12px_30px_-5px_rgba(0,0,0,0.12),0_0_0_1px_rgba(255,255,255,0.8)_inset] border border-white/60 flex items-center gap-2 animate-float-delayed hover:scale-105 transition-all duration-300 pointer-events-auto cursor-pointer">
        <div className="w-6 h-6 rounded-full bg-orange-50 flex items-center justify-center shrink-0">
          <UserPlus className="w-3.5 h-3.5 text-orange-500" />
        </div>
        <span className="text-[10px] sm:text-[11px] font-bold text-slate-800 whitespace-nowrap">Lead Captured</span>
      </div>

      {/* Phone call button — bottom right */}
      <div className="absolute bottom-20 sm:bottom-24 -right-2 sm:-right-4 lg:-right-6 z-40 pointer-events-auto">
        <button
          onClick={() => {}}
          className="animate-pulse-ring w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-[0_15px_35px_-5px_rgba(14,165,233,0.3),0_0_0_1px_rgba(255,255,255,0.9)_inset] border border-sky-100 flex items-center justify-center text-sky-600 hover:bg-sky-50 transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer"
          title="Quick Audio Call"
        >
          <Phone className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
        </button>
      </div>

      {/* End-to-End Encrypted Security Badge */}
      <div className="absolute top-1/4 -right-2 sm:-right-6 lg:-right-10 z-40 bg-white/90 backdrop-blur-xl px-3 sm:px-4 py-2 rounded-2xl shadow-[0_15px_35px_-5px_rgba(0,0,0,0.12),0_0_0_1px_rgba(255,255,255,0.8)_inset] border border-white/60 flex items-center gap-2 hover:scale-105 transition-all duration-300 animate-float pointer-events-auto cursor-pointer">
        <div className="w-6 h-6 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 shrink-0">
          <Lock className="w-3.5 h-3.5 stroke-[2.5]" />
        </div>
        <span className="text-[10px] sm:text-xs font-semibold text-slate-800 whitespace-nowrap">
          End-to-end encrypted
        </span>
      </div>
    </>
  );
}
