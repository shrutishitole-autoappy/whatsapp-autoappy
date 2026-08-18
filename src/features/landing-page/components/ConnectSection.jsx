import React, { useState, useEffect } from 'react';
import {
  MessageSquare,
  Video,
  Users,
  Sparkles,
  ShieldCheck,
  Images,
  ArrowRight,
  CheckCircle2,
  Zap,
  Smartphone,
  Globe,
  Monitor,
  Download,
  ExternalLink,
  Shield,
} from 'lucide-react';

const modernFeatures = [
  {
    id: 'messaging',
    tag: 'Real-time Sync',
    tagBg: 'bg-sky-50 text-sky-700 border-sky-200/80',
    icon: MessageSquare,
    iconGradient: 'from-sky-500 to-blue-600',
    shadowColor: 'shadow-sky-500/20',
    hoverBorder: 'hover:border-sky-300',
    hoverGlow: 'hover:shadow-[0_20px_45px_-12px_rgba(2,132,199,0.18)]',
    title: 'Instant Messaging',
    desc: 'Send messages instantly across all your devices with synchronized reliability and zero latency.',
    highlights: ['Multi-device sync', 'Offline delivery', 'Live typing indicator'],
  },
  {
    id: 'calls',
    tag: 'HD Audio & Video',
    tagBg: 'bg-indigo-50 text-indigo-700 border-indigo-200/80',
    icon: Video,
    iconGradient: 'from-indigo-500 to-violet-600',
    shadowColor: 'shadow-indigo-500/20',
    hoverBorder: 'hover:border-indigo-300',
    hoverGlow: 'hover:shadow-[0_20px_45px_-12px_rgba(99,102,241,0.18)]',
    title: 'Voice & Video Calls',
    desc: 'Talk face-to-face with crystal clear audio and high-definition video built for bandwidth efficiency.',
    highlights: ['Up to 32 participants', 'Noise cancellation', 'HD screen sharing'],
  },
  {
    id: 'groups',
    tag: 'Team & Community',
    tagBg: 'bg-emerald-50 text-emerald-700 border-emerald-200/80',
    icon: Users,
    iconGradient: 'from-emerald-500 to-teal-600',
    shadowColor: 'shadow-emerald-500/20',
    hoverBorder: 'hover:border-emerald-300',
    hoverGlow: 'hover:shadow-[0_20px_45px_-12px_rgba(16,185,129,0.18)]',
    title: 'Group Channels',
    desc: 'Bring everyone together. Organize projects, family circles, and community discussions effortlessly.',
    highlights: ['Granular admin controls', 'Polls & announcements', 'Searchable history'],
  },
  {
    id: 'status',
    tag: '24h Stories',
    tagBg: 'bg-amber-50 text-amber-700 border-amber-200/80',
    icon: Sparkles,
    iconGradient: 'from-amber-500 to-orange-600',
    shadowColor: 'shadow-amber-500/20',
    hoverBorder: 'hover:border-amber-300',
    hoverGlow: 'hover:shadow-[0_20px_45px_-12px_rgba(245,158,11,0.18)]',
    title: 'Status & Stories',
    desc: 'Share your moments. Post text, photo, video, and GIF updates that automatically disappear after 24 hours.',
    highlights: ['Custom privacy lists', 'Original quality photos', 'Interactive reactions'],
  },
  {
    id: 'security',
    tag: '256-Bit Encrypted',
    tagBg: 'bg-cyan-50 text-cyan-700 border-cyan-200/80',
    icon: ShieldCheck,
    iconGradient: 'from-cyan-500 to-blue-600',
    shadowColor: 'shadow-cyan-500/20',
    hoverBorder: 'hover:border-cyan-300',
    hoverGlow: 'hover:shadow-[0_20px_45px_-12px_rgba(6,182,212,0.18)]',
    title: 'Privacy & Security',
    desc: 'Keep conversations protected with default end-to-end encryption. Your personal messages stay strictly between you.',
    highlights: ['Zero-knowledge storage', 'Disappearing messages', 'Biometric lock'],
  },
  {
    id: 'media',
    tag: 'Lossless Sharing',
    tagBg: 'bg-rose-50 text-rose-700 border-rose-200/80',
    icon: Images,
    iconGradient: 'from-rose-500 to-pink-600',
    shadowColor: 'shadow-rose-500/20',
    hoverBorder: 'hover:border-rose-300',
    hoverGlow: 'hover:shadow-[0_20px_45px_-12px_rgba(244,63,94,0.18)]',
    title: 'Rich Media Sharing',
    desc: 'Share high-resolution photos, documents, and 4K video seamlessly without lossy compression.',
    highlights: ['Files up to 2GB', 'Instant previews', 'Cloud storage sync'],
  },
];

const devices = [
  {
    id: 'mobile',
    label: 'Mobile',
    icon: Smartphone,
    badge: 'iOS & Android',
    title: 'Always in your pocket',
    subtitle: 'Chat, call, and share anywhere you go. Experience lightning-speed responses with low data consumption and offline queueing.',
    bg: 'bg-gradient-to-br from-sky-50/80 via-white to-blue-50/50',
    border: 'border-sky-200/80',
    badgeColor: 'bg-sky-100/80 text-sky-800 border-sky-200',
    ctaText: 'Get for Mobile',
    ctaIcon: Download,
    ctaLink: '#download-mobile',
    image: '/mobile_preview.jpg',
    imageAlt: 'WhatsApp mobile chat preview',
    floatingBadge: '⚡ Real-time synced',
    bullets: [
      { title: 'Push Notifications', desc: 'Instant alerts without battery drain' },
      { title: 'Rich Media & Voice', desc: 'Send HD photos & instant voice notes' },
      { title: 'Offline Resilience', desc: 'Queue messages when connection drops' },
    ],
  },
  {
    id: 'web',
    label: 'Browser',
    icon: Globe,
    badge: 'Chrome, Safari, Edge, Firefox',
    title: 'Open a tab, start chatting',
    subtitle: 'No download needed. Just open your preferred browser and start messaging anyone instantly with keyboard shortcuts and multi-tab sync.',
    bg: 'bg-gradient-to-br from-indigo-50/80 via-white to-purple-50/50',
    border: 'border-indigo-200/80',
    badgeColor: 'bg-indigo-100/80 text-indigo-800 border-indigo-200',
    ctaText: 'Launch Web App',
    ctaIcon: ExternalLink,
    ctaLink: '#open-web',
    image: '/web_preview.jpg',
    imageAlt: 'WhatsApp web browser preview',
    floatingBadge: '🌐 Zero Install Needed',
    bullets: [
      { title: 'Zero Installation', desc: 'Works seamlessly on any desktop computer' },
      { title: 'Live Cloud Sync', desc: 'All chat history instantly synchronized' },
      { title: 'Drag & Drop Files', desc: 'Share documents and screenshots with ease' },
    ],
  },
  {
    id: 'desktop',
    label: 'Desktop',
    icon: Monitor,
    badge: 'macOS & Windows App',
    title: 'Power at your fingertips',
    subtitle: 'Native full-screen desktop experience built for deep productivity, keyboard power users, and crystal-clear conference calls.',
    bg: 'bg-gradient-to-br from-slate-50 via-white to-sky-50/60',
    border: 'border-slate-200',
    badgeColor: 'bg-slate-100 text-slate-800 border-slate-200',
    ctaText: 'Download for Desktop',
    ctaIcon: Download,
    ctaLink: '#download-desktop',
    image: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&q=80&w=900',
    imageAlt: 'WhatsApp desktop app preview',
    floatingBadge: '🖥️ Native Performance',
    bullets: [
      { title: 'Productivity Shortcuts', desc: 'Fast keyboard navigation and quick search' },
      { title: 'HD Screen Sharing', desc: 'Present decks and screens during group calls' },
      { title: 'Multi-Window Workflow', desc: 'Pop out individual chats side-by-side' },
    ],
  },
];

const AUTOPLAY_INTERVAL = 4500; // 4.5 seconds per device slide

export default function ConnectSection() {
  const [activeDeviceIndex, setActiveDeviceIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const active = devices[activeDeviceIndex];

  // Auto-scrolling interval logic (continuous, non-pausing)
  useEffect(() => {
    const stepTime = 50; // update progress every 50ms
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
  }, [activeDeviceIndex]);

  const handleSelectDevice = (index) => {
    setActiveDeviceIndex(index);
    setProgress(0);
  };

  return (
    <>
      {/* ── Section 1: Everything you need to stay connected ── */}
      <section id="features" className="py-24 bg-gradient-to-b from-[#f8fbfe] via-white to-sky-50/40 relative overflow-hidden">
        {/* Soft background glows */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-sky-200/25 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Section Header with Pill Badge */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200/60 shadow-2xs">
              <Zap className="w-3.5 h-3.5 text-sky-600 fill-sky-600" />
              <span className="text-xs font-bold text-sky-800 tracking-wide uppercase">
                Core Capabilities
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B3B60] tracking-tight leading-tight">
              Everything you need to stay connected.
            </h2>
            <p className="text-base sm:text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto font-normal">
              Experience seamless communication with enterprise-grade security and a beautifully crafted interface designed for clarity and speed.
            </p>
          </div>

          {/* 6 High-Performance Feature Cards (3x2 Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8">
            {modernFeatures.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className={`group relative bg-white rounded-[28px] border border-slate-100/90 p-8 sm:p-9 shadow-[0_4px_25px_rgba(11,59,96,0.04)] ${item.hoverGlow} ${item.hoverBorder} hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-default`}
                >
                  {/* Subtle Top-Right Ambient Corner Light */}
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-sky-100/50 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

                  {/* Card Content Top */}
                  <div>
                    {/* Top Row: Icon + Category Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${item.iconGradient} text-white flex items-center justify-center shadow-lg ${item.shadowColor} group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="w-6 h-6 stroke-[2.2]" />
                      </div>

                      <span
                        className={`px-3 py-1 rounded-full text-[11px] font-semibold border ${item.tagBg} transition-colors`}
                      >
                        {item.tag}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#0B3B60] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed font-normal mb-6">
                      {item.desc}
                    </p>

                    {/* Feature Highlights Pills */}
                    <div className="space-y-2 pt-2 border-t border-slate-100">
                      {item.highlights.map((h) => (
                        <div key={h} className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom CTA Link */}
                  <div className="pt-6 mt-6 border-t border-slate-100/80 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-700 group-hover:text-[#0284c7] transition-colors">
                      Learn more
                    </span>
                    <div className="w-7 h-7 rounded-full bg-slate-50 group-hover:bg-sky-50 text-slate-400 group-hover:text-sky-600 flex items-center justify-center transition-all duration-300 group-hover:translate-x-1">
                      <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── Section 2: Enhanced Multi-Platform Device Switcher with Auto-Scrolling ── */}
      <section id="download" className="py-24 bg-white border-t border-slate-100 relative overflow-hidden">
        {/* Soft Ambient Background Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-sky-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Header & Subtitle */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200/60 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-sky-600 fill-sky-600" />
              <span className="text-xs font-bold text-sky-800 tracking-wide uppercase">
                Cross-Platform Freedom
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B3B60] tracking-tight leading-tight">
              Use it anywhere, anytime.
            </h2>
            <p className="text-base sm:text-lg text-slate-500 max-w-xl mx-auto leading-relaxed font-normal">
              Switch seamlessly between your phone, browser, and desktop computer with zero lag and automatic cloud synchronization.
            </p>
          </div>

          {/* Segmented Device Switcher Tabs with Continuous Auto-Scroll */}
          <div className="flex flex-col items-center gap-4 mb-12">
            <div className="inline-flex p-1.5 bg-slate-100/80 backdrop-blur-md rounded-full border border-slate-200 shadow-inner max-w-full overflow-x-auto">
              {devices.map((d, idx) => {
                const TabIcon = d.icon;
                const isActive = activeDeviceIndex === idx;
                return (
                  <button
                    key={d.id}
                    onClick={() => handleSelectDevice(idx)}
                    className={`relative overflow-hidden flex items-center gap-2.5 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 whitespace-nowrap cursor-pointer ${
                      isActive
                        ? 'bg-[#0B3B60] text-white shadow-lg shadow-sky-950/20 scale-[1.02]'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                    }`}
                  >
                    {/* Active Tab Linear Progress Indicator */}
                    {isActive && (
                      <span
                        className="absolute bottom-0 left-0 h-1 bg-sky-400/80 transition-all duration-75 rounded-full"
                        style={{ width: `${progress}%` }}
                      />
                    )}
                    <TabIcon className={`w-4 h-4 ${isActive ? 'text-sky-300' : 'text-slate-400'}`} />
                    <span>{d.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Device Showcase Container */}
          <div
            className={`rounded-[36px] border-2 ${active.border} ${active.bg} p-6 sm:p-10 lg:p-12 shadow-[0_20px_50px_-10px_rgba(11,59,96,0.08)] transition-all duration-500 relative overflow-hidden`}
          >
            
            <div key={active.id} className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center animate-in fade-in zoom-in-95 duration-400">
              
              {/* Left Column: Platform Details, Features & Actions */}
              <div className="lg:col-span-6 flex flex-col justify-center space-y-7">
                
                {/* Platform Tag Badge */}
                <div className="inline-flex items-center gap-2 w-fit">
                  <span className={`px-3.5 py-1 rounded-full text-xs font-bold border ${active.badgeColor} shadow-2xs`}>
                    {active.badge}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div className="space-y-3">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight">
                    {active.title}
                  </h3>
                  <p className="text-base text-slate-600 leading-relaxed font-normal">
                    {active.subtitle}
                  </p>
                </div>

                {/* Detailed Benefit Rows */}
                <div className="space-y-3.5 pt-2">
                  {active.bullets.map((b) => (
                    <div
                      key={b.title}
                      className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/70 backdrop-blur-xs border border-slate-100/90 shadow-2xs hover:bg-white transition-colors"
                    >
                      <div className="w-8 h-8 rounded-xl bg-sky-100 text-[#0284c7] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4.5 h-4.5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 leading-snug">
                          {b.title}
                        </h4>
                        <p className="text-xs text-slate-500 leading-normal mt-0.5">
                          {b.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Action CTA Button & Security Subtext */}
                <div className="pt-3 flex flex-wrap items-center gap-4">
                  <a
                    href={active.ctaLink}
                    className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-[#0B3B60] hover:bg-[#082b47] text-white font-semibold text-sm shadow-md shadow-sky-900/15 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <span>{active.ctaText}</span>
                    <active.ctaIcon className="w-4 h-4 text-sky-300" />
                  </a>

                  <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                    <Shield className="w-3.5 h-3.5 text-emerald-500" />
                    <span>End-to-End Encrypted</span>
                  </div>
                </div>

              </div>

              {/* Right Column: Preserved Real Image with Elevated Showcase Frame */}
              <div className="lg:col-span-6 relative flex items-center justify-center">
                
                {/* Decorative Frame */}
                <div className="relative w-full max-w-[500px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(11,59,96,0.2)] ring-1 ring-slate-900/10 bg-white p-2 sm:p-2.5 transition-all duration-500 hover:scale-[1.01]">
                  
                  {/* Floating Live Status Badge */}
                  <div className="absolute top-5 right-5 z-20 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-slate-800 shadow-md border border-slate-100 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>{active.floatingBadge}</span>
                  </div>

                  {/* Preserved Device Image */}
                  <div className="rounded-xl sm:rounded-2xl overflow-hidden bg-slate-900/5 max-h-[380px] flex items-center justify-center">
                    <img
                      src={active.image}
                      alt={active.imageAlt}
                      className="w-full h-full object-cover max-h-[380px]"
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
