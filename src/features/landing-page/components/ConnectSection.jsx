import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  MessageSquare,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Zap,
  Smartphone,
  Globe,
  Monitor,
  Shield,
  Users,
  Bell,
  ShoppingCart,
} from 'lucide-react';

const modernFeatures = [
  {
    id: 'messaging',
    tag: 'Real-time Sync',
    tagBg: 'bg-sky-50 text-sky-700 border-sky-200/80',
    icon: MessageSquare,
    iconGradient: 'from-sky-500 to-blue-600',
    shadowColor: 'shadow-sky-500/20',
    glowRgb: '2,132,199',
    hoverBorder: 'hover:border-sky-300',
    title: 'Instant Messaging',
    desc: 'Send messages instantly across all your devices with synchronized reliability and zero latency.',
    highlights: ['Multi-device sync', 'Offline delivery', 'Live typing indicator'],
  },
  {
    id: 'ai-chatbot',
    tag: 'AI Automation',
    tagBg: 'bg-sky-50 text-sky-700 border-sky-200/80',
    icon: Sparkles,
    iconGradient: 'from-sky-500 to-blue-600',
    shadowColor: 'shadow-sky-500/20',
    glowRgb: '2,132,199',
    hoverBorder: 'hover:border-sky-300',
    title: 'AI Chatbot Automation',
    desc: 'Automate customer conversations with AI-powered replies that work 24/7 and seamlessly hand off complex queries to your team.',
    highlights: ['24/7 automatic customer replies', 'AI-powered conversations', 'FAQ automation', 'Human handoff'],
  },
  {
    id: 'lead-generation',
    tag: 'Lead Automation',
    tagBg: 'bg-sky-50 text-sky-700 border-sky-200/80',
    icon: Users,
    iconGradient: 'from-sky-500 to-blue-600',
    shadowColor: 'shadow-sky-500/20',
    glowRgb: '2,132,199',
    hoverBorder: 'hover:border-sky-300',
    title: 'Lead Generation & Qualification',
    desc: 'Capture, qualify, and organize leads directly from WhatsApp conversations so your sales team can focus on high-value prospects.',
    highlights: ['Capture leads from WhatsApp', 'Auto-qualify leads', 'Lead scoring', 'Assign leads to sales agents'],
  },
  {
    id: 'broadcast-campaigns',
    tag: 'Campaign Automation',
    tagBg: 'bg-sky-50 text-sky-700 border-sky-200/80',
    icon: Zap,
    iconGradient: 'from-sky-500 to-blue-600',
    shadowColor: 'shadow-sky-500/20',
    glowRgb: '2,132,199',
    hoverBorder: 'hover:border-sky-300',
    title: 'WhatsApp Broadcast & Campaigns',
    desc: 'Reach your audience at scale with automated WhatsApp campaigns, personalized messaging, and targeted customer segments.',
    highlights: ['Bulk messaging', 'Scheduled campaigns', 'Personalized messages', 'Audience segmentation'],
  },
  {
    id: 'automated-notifications',
    tag: 'Automated Notifications',
    tagBg: 'bg-sky-50 text-sky-700 border-sky-200/80',
    icon: Bell,
    iconGradient: 'from-sky-400 to-blue-500',
    shadowColor: 'shadow-sky-400/20',
    glowRgb: '14,165,233',
    hoverBorder: 'hover:border-sky-300',
    title: 'Automated Notifications',
    desc: 'Keep customers informed automatically with timely WhatsApp notifications throughout their customer journey.',
    highlights: ['Order updates', 'Appointment reminders', 'Payment reminders', 'Delivery notifications'],
  },
  {
    id: 'commerce-payments',
    tag: 'Commerce & Payments',
    tagBg: 'bg-sky-50 text-sky-700 border-sky-200/80',
    icon: ShoppingCart,
    iconGradient: 'from-sky-400 to-blue-500',
    shadowColor: 'shadow-sky-400/20',
    glowRgb: '14,165,233',
    hoverBorder: 'hover:border-sky-300',
    title: 'Commerce & Payments',
    desc: 'Turn WhatsApp into a powerful commerce channel where customers can discover products, place orders, and complete payments.',
    highlights: ['Product catalog', 'Order management', 'Payment links', 'Purchase notifications'],
  },
];

/* -------------------------------------------------------
   FeatureCard — self-contained so each card can track its
   own mouse position / tilt / reveal state independently
-------------------------------------------------------- */
function FeatureCard({ item, index }) {
  const Icon = item.icon;
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [spot, setSpot] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Scroll-triggered staggered reveal
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = useCallback((e) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    // Subtle 3D tilt (max ~7deg) toward cursor
    const rotateY = (px - 0.5) * 14;
    const rotateX = (0.5 - py) * 14;
    setTilt({ x: rotateX, y: rotateY });
    setSpot({ x: px * 100, y: py * 100 });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transitionDelay: isVisible ? `${index * 90}ms` : '0ms',
        transform: isVisible
          ? `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(${isHovered ? -6 : 0}px) scale(${isHovered ? 1.015 : 1})`
          : 'perspective(900px) translateY(28px) scale(0.96)',
        opacity: isVisible ? 1 : 0,
      }}
      className={`group relative bg-white rounded-[20px] sm:rounded-[22px] border border-slate-100/90 p-5 sm:p-6 shadow-[0_4px_25px_rgba(11,59,96,0.04)] ${item.hoverBorder} transition-all duration-300 ease-out flex flex-col justify-between overflow-hidden cursor-default min-w-0 will-change-transform`}
    >
      {/* Cursor-following spotlight glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[20px] sm:rounded-[22px]"
        style={{
          background: `radial-gradient(280px circle at ${spot.x}% ${spot.y}%, rgba(${item.glowRgb},0.14), transparent 70%)`,
        }}
      />

      {/* Animated gradient border sheen on hover */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[20px] sm:rounded-[22px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          padding: 1,
          background: `linear-gradient(120deg, rgba(${item.glowRgb},0) 0%, rgba(${item.glowRgb},0.45) 50%, rgba(${item.glowRgb},0) 100%)`,
          backgroundSize: '250% 250%',
          animation: isHovered ? 'sheenMove 2.2s linear infinite' : 'none',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
      />

      {/* Ambient blob */}
      <div
        className={`absolute -top-12 -right-12 w-32 h-32 bg-sky-100/50 rounded-full blur-2xl transition-transform duration-500 pointer-events-none ${
          isHovered ? 'scale-[1.8]' : 'scale-100'
        }`}
      />

      <div className="relative z-10">
        {/* Icon + Tag */}
        <div className="flex items-center justify-between mb-3.5 sm:mb-4">
          <div
            className={`relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-tr ${item.iconGradient} text-white flex items-center justify-center shadow-lg ${item.shadowColor} transition-all duration-300 ${
              isHovered ? 'scale-110 -rotate-6' : 'scale-100 rotate-0'
            }`}
          >
            <Icon className="w-5 h-5 stroke-[2.2]" />
            {/* Pulsing ring on hover */}
            <span
              className={`absolute inset-0 rounded-xl border-2 ${isHovered ? 'animate-ping-slow opacity-60' : 'opacity-0'}`}
              style={{ borderColor: `rgba(${item.glowRgb},0.6)` }}
            />
          </div>

          <span
            className={`px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-semibold border ${item.tagBg} transition-all duration-300 whitespace-nowrap ${
              isHovered ? 'scale-105' : ''
            }`}
          >
            {item.tag}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1.5 sm:mb-2 group-hover:text-[#0B3B60] transition-colors leading-snug break-words">
          {item.title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal mb-3.5 sm:mb-4 break-words">
          {item.desc}
        </p>

        {/* Highlights — each row staggers in slightly on hover */}
        <div className="space-y-1.5 pt-2 border-t border-slate-100">
          {item.highlights.map((h, i) => (
            <div
              key={h}
              style={{
                transitionDelay: isHovered ? `${i * 45}ms` : '0ms',
                transform: isHovered ? 'translateX(3px)' : 'translateX(0)',
              }}
              className="flex items-center gap-2 text-xs text-slate-600 font-medium transition-transform duration-300"
            >
              <CheckCircle2
                className={`w-3.5 h-3.5 shrink-0 transition-all duration-300 ${
                  isHovered ? 'text-sky-500 scale-110' : 'text-sky-500'
                }`}
              />
              <span className="truncate">{h}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Learn More */}
      <div className="relative z-10 pt-3.5 sm:pt-4 mt-3.5 sm:mt-4 border-t border-slate-100/80 flex items-center justify-between">
        <span className="text-xs font-bold text-slate-700 group-hover:text-[#0284c7] transition-colors">
          Learn more
        </span>
        <div
          className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
            isHovered ? 'bg-sky-50 text-sky-600 translate-x-1.5' : 'bg-slate-50 text-slate-400'
          }`}
        >
          <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
        </div>
      </div>

    </div>
  );
}

const devices = [
  {
    id: 'web',
    label: 'Browser',
    icon: Globe,
    badge: 'Chrome, Safari, Edge, Firefox',
    title: 'Open a tab, start automating',
    subtitle:
      'No download needed. Manage WhatsApp conversations, leads, campaigns, and customer interactions directly from your browser.',
    bg: 'bg-gradient-to-br from-indigo-50/80 via-white to-purple-50/50',
    border: 'border-indigo-200/80',
    badgeColor: 'bg-indigo-100/80 text-indigo-800 border-indigo-200',
    ctaText: 'Book for Web App',
    ctaLink: '#book-web',
    image: '/web_preview.jpg',
    imageAlt: 'WhatsApp web automation preview',
    floatingBadge: '🌐 Zero Install Needed',
    bullets: [
      { title: 'Zero Installation', desc: 'Works seamlessly from any modern desktop browser' },
      { title: 'AI Automation', desc: 'Automate replies and qualify incoming leads' },
      { title: 'Campaign Management', desc: 'Create and manage targeted WhatsApp campaigns' },
    ],
  },
  {
    id: 'mobile',
    label: 'Mobile',
    icon: Smartphone,
    badge: 'iOS & Android',
    title: 'Always in your pocket',
    subtitle:
      'Chat, automate conversations, capture leads, and manage customers anywhere you go with a fast and responsive mobile experience.',
    bg: 'bg-gradient-to-br from-sky-50/80 via-white to-blue-50/50',
    border: 'border-sky-200/80',
    badgeColor: 'bg-sky-100/80 text-sky-800 border-sky-200',
    ctaText: 'Book for Mobile',
    ctaLink: '#book-mobile',
    image: '/mobile_preview.jpg',
    imageAlt: 'WhatsApp mobile automation preview',
    floatingBadge: '⚡ Real-time synced',
    bullets: [
      { title: 'Push Notifications', desc: 'Instant alerts for new customer messages and updates' },
      { title: 'AI Customer Replies', desc: 'Automate customer conversations 24/7' },
      { title: 'Offline Resilience', desc: 'Queue messages when connection drops' },
    ],
  },
  {
    id: 'desktop',
    label: 'Desktop',
    icon: Monitor,
    badge: 'macOS & Windows App',
    title: 'Power at your fingertips',
    subtitle:
      'A powerful desktop experience built for sales teams, customer support, campaign management, and high-volume conversations.',
    bg: 'bg-gradient-to-br from-slate-50 via-white to-sky-50/60',
    border: 'border-slate-200',
    badgeColor: 'bg-slate-100 text-slate-800 border-slate-200',
    ctaText: 'Book for Desktop',
    ctaLink: '#book-desktop',
    image:
      'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&q=80&w=900',
    imageAlt: 'WhatsApp desktop automation preview',
    floatingBadge: '🖥️ Native Performance',
    bullets: [
      { title: 'Sales Productivity', desc: 'Manage conversations and leads efficiently' },
      { title: 'Automated Workflows', desc: 'Trigger actions based on customer activity' },
      { title: 'Team Collaboration', desc: 'Route conversations to the right sales agents' },
    ],
  },
];

const AUTOPLAY_INTERVAL = 4500;

export default function ConnectSection() {
  const [activeDeviceIndex, setActiveDeviceIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const active = devices[activeDeviceIndex];

  useEffect(() => {
    const stepTime = 50;
    const stepIncrement = (stepTime / AUTOPLAY_INTERVAL) * 100;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveDeviceIndex((prevIndex) => (prevIndex + 1) % devices.length);
          return 0;
        }
        return prev + stepIncrement;
      });
    }, stepTime);

    return () => clearInterval(interval);
  }, []);

  const handleSelectDevice = (index) => {
    setActiveDeviceIndex(index);
    setProgress(0);
  };

  return (
    <>
      {/* =====================================================
          SECTION 1 — CORE FEATURES (tightened spacing)
      ====================================================== */}
      <section
        id="features"
        className="py-20 sm:py-24 lg:py-28 bg-gradient-to-b from-[#f8fbfe] via-white to-sky-50/40 relative overflow-hidden w-full max-w-full"
      >
        <div className="absolute top-1/4 left-10 w-[min(384px,80vw)] h-[min(384px,80vw)] bg-sky-200/25 rounded-full blur-3xl pointer-events-none -z-10 animate-blob-float" />
        <div className="absolute bottom-10 right-10 w-[min(384px,80vw)] h-[min(384px,80vw)] bg-indigo-100/30 rounded-full blur-3xl pointer-events-none -z-10 animate-blob-float-delayed" />

        <div className="section-container">
          {/* Section Header — reduced bottom margin */}
          <div className="text-center max-w-3xl mx-auto space-y-2.5 sm:space-y-3 mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200/60 shadow-2xs">
              <Zap className="w-3.5 h-3.5 text-sky-600 fill-sky-600" />
              <span className="text-xs font-bold text-sky-800 tracking-wide uppercase">
                Core Capabilities
              </span>
            </div>

            <h2 className="section-heading text-theme-950">
              Everything you need to automate WhatsApp.
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto font-normal">
              Connect with customers, automate conversations, generate leads, and grow your
              business through powerful WhatsApp automation.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {modernFeatures.map((item, index) => (
              <FeatureCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>

      </section>

      {/* =====================================================
          SECTION 2 — MULTI PLATFORM
      ====================================================== */}
      <section
        id="download"
        className="py-20 sm:py-24 lg:py-28 bg-white border-t border-slate-100 relative overflow-hidden w-full max-w-full"
      >
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[min(700px,90vw)] h-[400px] bg-sky-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200/60 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-sky-600 fill-sky-600" />
              <span className="text-xs font-bold text-sky-800 tracking-wide uppercase">
                Cross-Platform Freedom
              </span>
            </div>

            <h2 className="section-heading text-theme-950">
              Automate from anywhere, anytime.
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-slate-500 max-w-xl mx-auto leading-relaxed font-normal">
              Switch seamlessly between your phone, browser, and desktop while keeping your
              conversations, leads, and automation workflows synchronized.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 mb-8 sm:mb-12 w-full">
            <div className="inline-flex p-1 sm:p-1.5 bg-slate-100/80 backdrop-blur-md rounded-full border border-slate-200 shadow-inner max-w-full overflow-x-auto scrollbar-none">
              {devices.map((d, idx) => {
                const TabIcon = d.icon;
                const isActive = activeDeviceIndex === idx;

                return (
                  <button
                    key={d.id}
                    onClick={() => handleSelectDevice(idx)}
                    className={`relative overflow-hidden flex items-center gap-2 sm:gap-2.5 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold text-xs sm:text-sm transition-all duration-300 whitespace-nowrap cursor-pointer shrink-0 ${
                      isActive
                        ? 'bg-primary text-white shadow-lg shadow-primary/25 scale-[1.02]'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                    }`}
                  >
                    {isActive && (
                      <span
                        className="absolute bottom-0 left-0 h-1 bg-secondary transition-all duration-75 rounded-full"
                        style={{ width: `${progress}%` }}
                      />
                    )}

                    <TabIcon
                      className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isActive ? 'text-secondary' : 'text-slate-400'}`}
                    />
                    <span>{d.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div
            className={`rounded-[24px] sm:rounded-[36px] border-2 ${active.border} ${active.bg} p-5 sm:p-8 lg:p-12 shadow-[0_20px_50px_-10px_rgba(11,59,96,0.08)] transition-all duration-500 relative overflow-hidden w-full`}
          >
            <div
              key={active.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center animate-in fade-in zoom-in-95 duration-400"
            >
              <div className="lg:col-span-6 flex flex-col justify-center space-y-5 sm:space-y-7 min-w-0">
                <div className="inline-flex items-center gap-2 w-fit">
                  <span
                    className={`px-3 sm:px-3.5 py-1 rounded-full text-xs font-bold border ${active.badgeColor} shadow-2xs`}
                  >
                    {active.badge}
                  </span>
                </div>

                <div className="space-y-2.5 sm:space-y-3">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight break-words">
                    {active.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {active.subtitle}
                  </p>
                </div>

                <div className="space-y-2.5 sm:space-y-3.5 pt-1 sm:pt-2">
                  {active.bullets.map((b) => (
                    <div
                      key={b.title}
                      className="flex items-start gap-3 sm:gap-3.5 p-3 sm:p-3.5 rounded-2xl bg-white/70 backdrop-blur-xs border border-slate-100/90 shadow-2xs hover:bg-white transition-colors min-w-0"
                    >
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-sky-100 text-[#0284c7] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug break-words">
                          {b.title}
                        </h4>
                        <p className="text-[11px] sm:text-xs text-slate-500 leading-normal mt-0.5 break-words">
                          {b.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-2 sm:pt-3 flex flex-wrap items-center gap-4">
                  <a
                    href={active.ctaLink}
                    className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl bg-[#0B3B60] hover:bg-[#082b47] text-white font-semibold text-xs sm:text-sm shadow-md shadow-sky-900/15 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 w-full sm:w-auto"
                  >
                    <span>{active.ctaText}</span>
                  </a>

                  <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                    <Shield className="w-3.5 h-3.5 text-emerald-500" />
                    <span>End-to-End Encrypted</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 relative flex items-center justify-center w-full">
                <div className="relative w-full max-w-[500px] mx-auto rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(11,59,96,0.2)] ring-1 ring-slate-900/10 bg-white p-2 sm:p-2.5 transition-all duration-500 hover:scale-[1.01]">
                  <div className="absolute top-3 sm:top-5 right-3 sm:right-5 z-20 bg-white/90 backdrop-blur-md px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold text-slate-800 shadow-md border border-slate-100 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>{active.floatingBadge}</span>
                  </div>

                  <div className="rounded-xl sm:rounded-2xl overflow-hidden bg-slate-900/5 max-h-[300px] sm:max-h-[380px] flex items-center justify-center">
                    <img
                      src={active.image}
                      alt={active.imageAlt}
                      className="w-full h-auto max-h-[300px] sm:max-h-[380px] object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
