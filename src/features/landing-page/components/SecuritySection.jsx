import React, { useState, useEffect, useRef } from 'react';
import { Lock, ShieldCheck, ShieldAlert, Shield, CheckCircle2 } from 'lucide-react';

const securityFeatures = [
  {
    id: 'private',
    icon: Lock,
    title: 'Private conversations',
    description: 'Your messages are encrypted from the moment they leave your device.',
  },
  {
    id: 'secure',
    icon: ShieldCheck,
    title: 'Secure communication',
    description: 'Industry-leading security protocols for every call and message.',
  },
  {
    id: 'protected',
    icon: ShieldAlert,
    title: 'Protected personal data',
    description: 'We never sell your data. Your privacy is our priority.',
  },
];

export default function SecuritySection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="security"
      className="py-20 sm:py-24 lg:py-28 bg-gradient-to-b from-[#f8fbfe] via-white to-[#f4f9fd] relative overflow-hidden w-full max-w-full"
    >
      {/* Background Floating Soft Glow Orbs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[min(750px,92vw)] h-[380px] bg-gradient-to-tr from-sky-200/25 via-blue-100/20 to-sky-100/30 rounded-full blur-3xl pointer-events-none -z-10 animate-float" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-sky-100/30 to-blue-200/20 rounded-full blur-3xl pointer-events-none -z-10 animate-float-delayed" />
      <div className="absolute top-1/3 -left-20 w-80 h-80 bg-cyan-100/20 rounded-full blur-3xl pointer-events-none -z-10 animate-float" />

      <div className="section-container">
        
        {/* Top Centered Header with Animated Shield Icon Badge */}
        <div
          className={`text-center max-w-3xl mx-auto space-y-5 sm:space-y-6 mb-16 sm:mb-20 transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          
          {/* Circular Glowing Shield Badge with Multi-Stage Radar Ripples */}
          <div className="inline-flex items-center justify-center p-2 rounded-full bg-gradient-to-b from-sky-100/60 to-transparent relative">
            <div className="relative flex items-center justify-center">
              {/* Ripple Ring 1 */}
              <div className="absolute -inset-2 rounded-full bg-sky-400/25 animate-shield-ripple pointer-events-none" />
              {/* Ripple Ring 2 (Cascading Phase Offset) */}
              <div className="absolute -inset-2 rounded-full bg-sky-400/20 animate-shield-ripple-delayed pointer-events-none" />
              {/* Ambient Glowing Aura */}
              <div className="absolute -inset-4 rounded-full bg-sky-300/30 blur-md animate-badge-glow pointer-events-none -z-10" />
              
              {/* Shield container with gentle 1.0 - 1.025 pulse and subtle light blue glow */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white shadow-[0_12px_36px_rgba(2,132,199,0.22),0_4px_14px_rgba(11,59,96,0.08),inset_0_1px_1px_rgba(255,255,255,1)] border border-sky-100/80 flex items-center justify-center relative animate-shield-pulse transition-transform duration-300 hover:scale-105">
                {/* Shield with lock symbol */}
                <div className="relative w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center text-primary drop-shadow-[0_2px_10px_rgba(20,125,181,0.3)]">
                  <Shield className="w-10 h-10 sm:w-11 sm:h-11 stroke-[2.2] text-primary transition-transform duration-300 hover:scale-105" />
                  <Lock className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[2.6] text-primary absolute top-[52%] left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </div>
              </div>
            </div>
          </div>

          {/* Section Eyebrow Badge */}
          <div className="flex items-center justify-center">
            <span className="section-eyebrow">Enterprise Security</span>
          </div>

          {/* Section Headline */}
          <h2 className="section-heading text-theme-950">
            Your conversations belong to you.
          </h2>

          {/* Section Subtitle */}
          <p className="body-text mx-auto max-w-2xl text-center">
            Connect uses end-to-end encryption to ensure that only you and the person you're communicating with can read or listen to what is sent.
          </p>
        </div>

        {/* 3-Column Security Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {securityFeatures.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                style={{
                  transitionDelay: isVisible ? `${idx * 120}ms` : '0ms',
                }}
                className={`group relative bg-white/95 rounded-[24px] sm:rounded-[28px] border border-sky-100/80 p-8 sm:p-10 text-center flex flex-col items-center justify-between shadow-[0_10px_35px_-8px_rgba(15,91,138,0.06),inset_0_1px_1px_rgba(255,255,255,0.9)] hover:shadow-[0_24px_50px_-10px_rgba(20,125,181,0.20),0_8px_20px_-6px_rgba(15,91,138,0.08)] hover:border-theme-300 hover:-translate-y-2 transition-all duration-500 ease-out cursor-default overflow-hidden motion-reduce:transition-none motion-reduce:transform-none ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                {/* Diagonal Glass Sheen Light Sweep on Hover */}
                <div className="absolute -inset-full top-0 h-full w-1/2 z-10 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-[380%] transition-all duration-1000 ease-out pointer-events-none" />

                {/* Subtle Ambient Card Gradient Glow on hover */}
                <div className="absolute inset-0 rounded-[inherit] bg-gradient-to-b from-theme-50/60 via-white to-theme-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />

                <div className="relative flex flex-col items-center space-y-4 sm:space-y-5 z-10 w-full">
                  {/* Icon Circular Badge with Soft Glow & Micro Rotation on Hover */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-theme-50/90 border border-theme-100/90 text-primary flex items-center justify-center shadow-2xs group-hover:scale-110 group-hover:rotate-6 group-hover:bg-theme-900 group-hover:border-theme-900 group-hover:text-white group-hover:shadow-[0_0_24px_rgba(20,125,181,0.45)] transition-all duration-300">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2] transition-transform duration-300 group-hover:scale-105" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-theme-950 tracking-tight group-hover:text-primary transition-colors duration-300 leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
