import React, { useState, useEffect, useRef } from 'react';
import { Bot, TrendingUp, Workflow, MessageSquareMore, Sparkles, ArrowRight } from 'lucide-react';

/* ─── All colors sourced from tailwind.config.js theme ───────────────
   primary:        #147db5     (theme-600 ~ primary)
   primary-dark:   #0f5b8a     (theme-700 ~ primary-dark)
   secondary:      #50b8e7     (theme-400 ~ secondary)
   theme-50:       #f1f8fe
   theme-100:      #e3f0fb
   theme-200:      #c1e1f6
   theme-300:      #8ac8ef
   theme-400:      #4bade5
   theme-500:      #2493d3
   theme-600:      #1675b3
   theme-700:      #135d91
   theme-800:      #144f78
   theme-900:      #164264
   theme-950:      #0f2b42
──────────────────────────────────────────────────────────────────── */

const steps = [
  {
    id: '1',
    stepNumber: '01',
    icon: MessageSquareMore,
    title: 'Connect WhatsApp',
    description: 'Link your business number securely in seconds to open your communication channel.',
    tag: '⚡ Instant Setup',
    // Tag uses theme-50 bg + primary text
    tagStyle: { background: '#f1f8fe', color: '#135d91', borderColor: '#c1e1f6' },
    // Icon gradient: primary → secondary
    iconStyle: { background: 'linear-gradient(135deg, #147db5 0%, #50b8e7 100%)' },
    iconShadowColor: 'rgba(20,125,181,0.25)',
    hoverShadowColor: 'rgba(20,125,181,0.18)',
    cardGlowFrom: '#f1f8fe',
    connectorType: 'primary-down',
    connectorColor: '#147db5',
    connectorPulse: '#c1e1f6',
    offset: 'lg:translate-y-0',
  },
  {
    id: '2',
    stepNumber: '02',
    icon: Workflow,
    title: 'Build Automation',
    description: 'Use our visual drag-and-drop builder to design workflows without writing any code.',
    tag: '🎨 Visual Canvas',
    // Tag uses theme-100 bg + theme-700 text
    tagStyle: { background: '#e3f0fb', color: '#135d91', borderColor: '#8ac8ef' },
    // Icon gradient: secondary → theme-400
    iconStyle: { background: 'linear-gradient(135deg, #50b8e7 0%, #4bade5 100%)' },
    iconShadowColor: 'rgba(80,184,231,0.25)',
    hoverShadowColor: 'rgba(80,184,231,0.18)',
    cardGlowFrom: '#e3f0fb',
    connectorType: 'secondary-up',
    connectorColor: '#2493d3',
    connectorPulse: '#8ac8ef',
    offset: 'lg:translate-y-6',
  },
  {
    id: '3',
    stepNumber: '03',
    icon: Bot,
    title: 'Let AI Handle It',
    description: 'Our intelligent neural network engages users, answers queries, and guides intent 24/7.',
    tag: '🤖 24/7 Neural AI',
    // Tag uses theme-900 bg + white text
    tagStyle: { background: '#164264', color: '#e3f0fb', borderColor: '#135d91' },
    // Icon gradient: theme-800 → theme-500
    iconStyle: { background: 'linear-gradient(135deg, #144f78 0%, #2493d3 100%)' },
    iconShadowColor: 'rgba(36,147,211,0.25)',
    hoverShadowColor: 'rgba(36,147,211,0.18)',
    cardGlowFrom: '#f1f8fe',
    connectorType: 'dark-down',
    connectorColor: '#135d91',
    connectorPulse: '#8ac8ef',
    offset: 'lg:translate-y-0',
  },
  {
    id: '4',
    stepNumber: '04',
    icon: TrendingUp,
    title: 'Convert Customers',
    description: 'Turn automated conversations into qualified leads and closed deals automatically.',
    tag: '📈 3.5x Conversions',
    // Tag uses theme-50 bg + theme-600 text
    tagStyle: { background: '#f1f8fe', color: '#1675b3', borderColor: '#c1e1f6' },
    // Icon gradient: primary-dark → primary
    iconStyle: { background: 'linear-gradient(135deg, #0f5b8a 0%, #147db5 100%)' },
    iconShadowColor: 'rgba(15,91,138,0.25)',
    hoverShadowColor: 'rgba(15,91,138,0.18)',
    cardGlowFrom: '#e3f0fb',
    connectorType: null,
    offset: 'lg:translate-y-6',
  },
];

export default function SolutionsSection() {
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
      { threshold: 0.12 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="solution"
      className="py-20 sm:py-24 lg:py-28 relative overflow-hidden w-full max-w-full"
      style={{ background: 'linear-gradient(to bottom, #ffffff, #f1f8fe, #ffffff)' }}
    >
      {/* Target anchor supporting both case-sensitive hashes */}
      <div id="Solution" className="absolute -top-24 pointer-events-none" />

      {/* Background Soft Glow Orbs — using theme palette */}
      <div
        className="absolute top-10 left-1/2 -translate-x-1/2 w-[min(900px,95vw)] h-[350px] rounded-full blur-3xl pointer-events-none -z-10 animate-float"
        style={{ background: 'radial-gradient(ellipse, rgba(138,200,239,0.20) 0%, rgba(193,225,246,0.12) 50%, transparent 100%)' }}
      />
      <div
        className="absolute bottom-10 right-10 w-80 h-80 rounded-full blur-3xl pointer-events-none -z-10 animate-float-delayed"
        style={{ background: 'radial-gradient(ellipse, rgba(80,184,231,0.12) 0%, transparent 70%)' }}
      />

      <div className="section-container">

        {/* Section Header */}
        <div
          className={`text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-12 sm:mb-14 lg:mb-16 transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {/* Theme-matched label badge */}
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border shadow-sm"
            style={{ background: '#e3f0fb', borderColor: '#8ac8ef' }}
          >
            <Sparkles className="w-3.5 h-3.5" style={{ color: '#147db5', fill: '#147db5' }} />
            <span className="text-xs font-bold tracking-wide uppercase" style={{ color: '#135d91' }}>
              Proven Architecture
            </span>
          </div>

          {/* theme-900 headline – matches SecuritySection headline */}
          <h2
            className="section-heading"
            style={{ color: '#164264' }}
          >
            How it Works
          </h2>
          <p className="text-sm sm:text-base text-slate-500 font-normal leading-relaxed max-w-2xl mx-auto">
            Transform your customer engagement in four simple steps. Our AI-driven platform seamlessly
            integrates with WhatsApp to automate conversations and drive growth.
          </p>
        </div>

        {/* 4 Cards Grid + Live Animated Dotted Connectors */}
        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 lg:gap-5 relative">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.id}
                  style={{ transitionDelay: isVisible ? `${idx * 100}ms` : '0ms' }}
                  className={`relative flex flex-col items-center transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none ${step.offset} ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  }`}
                >
                  {/* ── Step Card ── */}
                  <div
                    className="group relative w-full rounded-[24px] sm:rounded-[28px] border p-5 sm:p-6 text-center flex flex-col items-center justify-between hover:-translate-y-2 transition-all duration-400 min-h-[300px] sm:min-h-[320px] z-10 overflow-hidden cursor-default"
                    style={{
                      background: 'rgba(255,255,255,0.97)',
                      borderColor: '#c1e1f6',
                      boxShadow: `0 12px 32px rgba(20,79,120,0.06), 0 2px 6px rgba(0,0,0,0.02), inset 0 1px 2px rgba(255,255,255,1)`,
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.boxShadow = `0 20px 45px -10px ${step.hoverShadowColor}, 0 4px 12px rgba(20,79,120,0.05)`;
                      e.currentTarget.style.borderColor = '#8ac8ef';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.boxShadow = `0 12px 32px rgba(20,79,120,0.06), 0 2px 6px rgba(0,0,0,0.02), inset 0 1px 2px rgba(255,255,255,1)`;
                      e.currentTarget.style.borderColor = '#c1e1f6';
                    }}
                  >
                    {/* Diagonal glass sheen sweep */}
                    <div className="absolute -inset-full top-0 h-full w-1/2 z-20 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-[380%] transition-all duration-1000 ease-out pointer-events-none" />
                    {/* Ambient card gradient on hover */}
                    <div
                      className="absolute inset-0 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                      style={{ background: `linear-gradient(to bottom, ${step.cardGlowFrom}99, transparent)` }}
                    />

                    {/* Top Row: Tag + Step Watermark */}
                    <div className="w-full flex items-center justify-between z-10 mb-2">
                      <span
                        className="px-2 py-0.5 rounded-full text-[10px] font-bold border whitespace-nowrap shadow-sm"
                        style={step.tagStyle}
                      >
                        {step.tag}
                      </span>
                      <span className="text-xs font-extrabold text-slate-300 group-hover:text-slate-400 transition-colors tracking-wider">
                        {step.stepNumber}
                      </span>
                    </div>

                    <div className="relative flex flex-col items-center space-y-3 sm:space-y-3.5 z-10 my-auto">
                      {/* Gradient Icon Squircle */}
                      <div
                        className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl text-white flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300"
                        style={{
                          ...step.iconStyle,
                          boxShadow: `0 6px 20px ${step.iconShadowColor}`,
                        }}
                      >
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.2]" />
                      </div>

                      {/* Title — theme-900 matching SecuritySection */}
                      <h3
                        className="text-base sm:text-[17px] font-extrabold tracking-tight transition-colors leading-snug"
                        style={{ color: '#164264' }}
                      >
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-[12.5px] text-slate-500 leading-relaxed font-normal">
                        {step.description}
                      </p>
                    </div>

                    {/* Footer micro-action — primary color on hover */}
                    <div
                      className="w-full pt-3 mt-1 border-t flex items-center justify-center gap-1.5 z-10 text-slate-400 group-hover:text-[#147db5] transition-colors"
                      style={{ borderTopColor: '#e3f0fb' }}
                    >
                      <span className="text-[10.5px] font-bold tracking-wide">Learn workflow</span>
                      <ArrowRight className="w-3 h-3 stroke-[2.5] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  {/* ── Desktop Animated S-Curve Connectors ── */}

                  {step.connectorType === 'primary-down' && (
                    <div className="hidden lg:block absolute -right-7 xl:-right-8 top-[32%] w-14 xl:w-16 h-20 pointer-events-none z-30 overflow-visible">
                      <svg className="w-full h-full overflow-visible" viewBox="0 0 65 80" fill="none">
                        <defs>
                          <marker id="arr-primary" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                            <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill={step.connectorColor} />
                          </marker>
                        </defs>
                        <circle cx="2" cy="10" r="4.5" fill={step.connectorColor} className="animate-pulse" />
                        <circle cx="2" cy="10" r="8" stroke={step.connectorColor} strokeWidth="1.5" className="animate-ping opacity-30" />
                        <path
                          d="M 5 10 C 35 10, 30 65, 58 66"
                          stroke={step.connectorColor}
                          strokeWidth="2.6"
                          strokeLinecap="round"
                          strokeDasharray="5 5"
                          className="animate-flow-dash"
                          markerEnd="url(#arr-primary)"
                          style={{ filter: `drop-shadow(0 2px 4px ${step.connectorColor}66)` }}
                        />
                      </svg>
                    </div>
                  )}

                  {step.connectorType === 'secondary-up' && (
                    <div className="hidden lg:block absolute -right-7 xl:-right-8 top-[18%] w-14 xl:w-16 h-20 pointer-events-none z-30 overflow-visible">
                      <svg className="w-full h-full overflow-visible" viewBox="0 0 65 80" fill="none">
                        <defs>
                          <marker id="arr-secondary" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                            <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill={step.connectorColor} />
                          </marker>
                        </defs>
                        <circle cx="2" cy="66" r="4.5" fill={step.connectorColor} className="animate-pulse" />
                        <circle cx="2" cy="66" r="8" stroke={step.connectorColor} strokeWidth="1.5" className="animate-ping opacity-30" />
                        <path
                          d="M 5 66 C 35 65, 30 10, 58 11"
                          stroke={step.connectorColor}
                          strokeWidth="2.6"
                          strokeLinecap="round"
                          strokeDasharray="5 5"
                          className="animate-flow-dash"
                          markerEnd="url(#arr-secondary)"
                          style={{ filter: `drop-shadow(0 2px 4px ${step.connectorColor}66)` }}
                        />
                      </svg>
                    </div>
                  )}

                  {step.connectorType === 'dark-down' && (
                    <div className="hidden lg:block absolute -right-7 xl:-right-8 top-[32%] w-14 xl:w-16 h-20 pointer-events-none z-30 overflow-visible">
                      <svg className="w-full h-full overflow-visible" viewBox="0 0 65 80" fill="none">
                        <defs>
                          <marker id="arr-dark" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                            <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill={step.connectorColor} />
                          </marker>
                        </defs>
                        <circle cx="2" cy="10" r="4.5" fill={step.connectorColor} className="animate-pulse" />
                        <circle cx="2" cy="10" r="8" stroke={step.connectorColor} strokeWidth="1.5" className="animate-ping opacity-30" />
                        <path
                          d="M 5 10 C 35 10, 30 65, 58 66"
                          stroke={step.connectorColor}
                          strokeWidth="2.6"
                          strokeLinecap="round"
                          strokeDasharray="5 5"
                          className="animate-flow-dash"
                          markerEnd="url(#arr-dark)"
                          style={{ filter: `drop-shadow(0 2px 4px ${step.connectorColor}66)` }}
                        />
                      </svg>
                    </div>
                  )}

                  {/* Mobile Vertical Dotted Arrow */}
                  {idx < steps.length - 1 && (
                    <div className="lg:hidden flex flex-col items-center my-3 sm:my-4">
                      <div className="w-2.5 h-2.5 rounded-full mb-1 animate-ping opacity-50" style={{ background: '#147db5' }} />
                      <div className="w-2 h-2 rounded-full mb-1 -mt-3.5" style={{ background: '#147db5' }} />
                      <div className="w-0.5 h-10 border-l-2 border-dashed animate-flow-dash" style={{ borderColor: '#50b8e7' }} />
                      <div className="w-2.5 h-2.5 border-r-2 border-b-2 rotate-45 -mt-1" style={{ borderColor: '#147db5' }} />
                    </div>
                  )}

                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Button — primary color matching site theme */}
        <div className="mt-12 sm:mt-14 lg:mt-16 flex justify-center">
          <a
            href="#download"
            className="inline-flex items-center justify-center px-8 sm:px-9 py-3.5 rounded-full bg-primary hover:bg-primary-dark text-white font-semibold text-[15px] shadow-md shadow-primary/25 hover:shadow-lg hover:shadow-primary/35 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
          >
            Book Demo
          </a>
        </div>

      </div>
    </section>
  );
}
