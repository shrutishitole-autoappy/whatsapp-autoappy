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
      {/* ─── LEFT SIDE BADGES ─────────────────────────────────────────────── */}

      {/* Lead Captured — upper-left, fully outside phone frame */}
      <div
        className="absolute top-[18%] z-40 bg-white/95 backdrop-blur-xl pl-2.5 pr-4 py-2 rounded-2xl shadow-[0_12px_30px_-5px_rgba(0,0,0,0.14),0_0_0_1px_rgba(255,255,255,0.9)_inset] border border-white/80 flex items-center gap-2 animate-float-delayed hover:scale-105 transition-all duration-300 pointer-events-auto cursor-pointer whitespace-nowrap"
        style={{ right: 'calc(100% + 12px)' }}
      >
        <div className="w-6 h-6 rounded-full bg-orange-50 flex items-center justify-center shrink-0">
          <UserPlus className="w-3.5 h-3.5 text-orange-500" />
        </div>
        <span className="text-[11px] font-semibold text-slate-800">Lead Captured</span>
      </div>

      {/* 🔥 Fire reaction — mid-left, same vertical level as Order Confirmed, outside phone */}
      <button
        onClick={toggleFire}
        className={`absolute top-1/2 z-40 bg-white/95 backdrop-blur-xl shadow-[0_12px_28px_-6px_rgba(0,0,0,0.15),0_0_0_1px_rgba(255,255,255,0.9)_inset] border border-white/80 rounded-2xl px-3 py-1.5 flex items-center gap-2 text-base font-semibold transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer select-none animate-float-delayed pointer-events-auto whitespace-nowrap ${
          fireActive ? 'ring-2 ring-amber-400 bg-amber-50/95 scale-105' : ''
        }`}
        style={{ right: 'calc(100% + 12px)' }}
        title="React with Fire"
      >
        <span>🔥</span>
        <span className="text-xs font-semibold text-slate-700">{fireCount}</span>
      </button>

      {/* ❤️ Heart reaction — bottom-left, outside phone */}
      <button
        onClick={toggleHeart}
        className={`absolute bottom-24 z-40 bg-white/95 backdrop-blur-xl shadow-[0_12px_28px_-6px_rgba(0,0,0,0.15),0_0_0_1px_rgba(255,255,255,0.9)_inset] border border-white/80 rounded-2xl px-3 py-1.5 flex items-center gap-2 text-base font-semibold transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer select-none animate-float pointer-events-auto whitespace-nowrap ${
          heartActive ? 'ring-2 ring-rose-400 bg-rose-50/95 scale-105' : ''
        }`}
        style={{ right: 'calc(100% + 12px)' }}
        title="React with Heart"
      >
        <span>❤️</span>
        <span className="text-xs font-semibold text-slate-700">{heartCount}</span>
      </button>

      {/* ─── RIGHT SIDE BADGES ────────────────────────────────────────────── */}

      {/* End-to-End Encrypted — upper-right, fully outside phone frame */}
      <div
        className="absolute top-[18%] z-40 bg-white/95 backdrop-blur-xl px-3 py-2 rounded-2xl shadow-[0_15px_35px_-5px_rgba(15,91,138,0.14),0_0_0_1px_rgba(255,255,255,0.9)_inset] border border-white/80 flex items-center gap-2 hover:scale-105 transition-all duration-300 animate-float pointer-events-auto cursor-pointer whitespace-nowrap"
        style={{ left: 'calc(100% + 12px)' }}
      >
        <div className="w-6 h-6 rounded-full bg-theme-100 flex items-center justify-center text-primary shrink-0">
          <Lock className="w-3.5 h-3.5 stroke-[2.5]" />
        </div>
        <span className="text-[11px] font-semibold text-slate-800">
          End-to-end encrypted
        </span>
      </div>

      {/* Order Confirmed — mid-right, fully outside phone frame */}
      <div
        className="absolute top-1/2 z-40 bg-white/95 backdrop-blur-xl pl-2.5 pr-4 py-2 rounded-2xl shadow-[0_12px_30px_-5px_rgba(15,91,138,0.14),0_0_0_1px_rgba(255,255,255,0.9)_inset] border border-white/80 flex items-center gap-2 animate-float hover:scale-105 transition-all duration-300 pointer-events-auto cursor-pointer whitespace-nowrap"
        style={{ left: 'calc(100% + 12px)' }}
      >
        <div className="w-6 h-6 rounded-full bg-theme-100 flex items-center justify-center shrink-0">
          <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
        </div>
        <span className="text-[11px] font-semibold text-slate-800">Order Confirmed</span>
      </div>

      {/* Call button — bottom-right, fully outside phone frame */}
      <div
        className="absolute bottom-24 z-40 pointer-events-auto"
        style={{ left: 'calc(100% + 16px)' }}
      >
        <button
          onClick={() => {}}
          className="animate-pulse-ring w-11 h-11 rounded-full bg-white shadow-[0_15px_35px_-5px_rgba(20,125,181,0.3),0_0_0_1px_rgba(255,255,255,0.9)_inset] border border-theme-100 flex items-center justify-center text-primary hover:bg-theme-50 transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer"
          title="Quick Audio Call"
        >
          <Phone className="w-4 h-4 stroke-[2.2]" />
        </button>
      </div>
    </>
  );
}
