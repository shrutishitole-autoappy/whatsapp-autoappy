import React, { useState, useEffect } from 'react';
import {
  MessageSquare,
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
    hoverBorder: 'hover:border-sky-300',
    hoverGlow:
      'hover:shadow-[0_20px_45px_-12px_rgba(2,132,199,0.18)]',
    title: 'Instant Messaging',
    desc: 'Send messages instantly across all your devices with synchronized reliability and zero latency.',
    highlights: [
      'Multi-device sync',
      'Offline delivery',
      'Live typing indicator',
    ],
  },

  {
    id: 'ai-chatbot',
    tag: 'AI Automation',
    tagBg: 'bg-sky-50 text-sky-700 border-sky-200/80',
    icon: Sparkles,
    iconGradient: 'from-sky-500 to-blue-600',
    shadowColor: 'shadow-sky-500/20',
    hoverBorder: 'hover:border-sky-300',
    hoverGlow:
      'hover:shadow-[0_20px_45px_-12px_rgba(2,132,199,0.18)]',
    title: 'AI Chatbot Automation',
    desc: 'Automate customer conversations with AI-powered replies that work 24/7 and seamlessly hand off complex queries to your team.',
    highlights: [
      '24/7 automatic customer replies',
      'AI-powered conversations',
      'FAQ automation',
      'Human handoff',
    ],
  },

  {
    id: 'lead-generation',
    tag: 'Lead Automation',
    tagBg: 'bg-sky-50 text-sky-700 border-sky-200/80',
    icon: Users,
    iconGradient: 'from-sky-500 to-blue-600',
    shadowColor: 'shadow-sky-500/20',
    hoverBorder: 'hover:border-sky-300',
    hoverGlow:
      'hover:shadow-[0_20px_45px_-12px_rgba(2,132,199,0.18)]',
    title: 'Lead Generation & Qualification',
    desc: 'Capture, qualify, and organize leads directly from WhatsApp conversations so your sales team can focus on high-value prospects.',
    highlights: [
      'Capture leads from WhatsApp',
      'Auto-qualify leads',
      'Lead scoring',
      'Assign leads to sales agents',
    ],
  },

  {
    id: 'broadcast-campaigns',
    tag: 'Campaign Automation',
    tagBg: 'bg-sky-50 text-sky-700 border-sky-200/80',
    icon: Zap,
    iconGradient: 'from-sky-500 to-blue-600',
    shadowColor: 'shadow-sky-500/20',
    hoverBorder: 'hover:border-sky-300',
    hoverGlow:
      'hover:shadow-[0_20px_45px_-12px_rgba(2,132,199,0.18)]',
    title: 'WhatsApp Broadcast & Campaigns',
    desc: 'Reach your audience at scale with automated WhatsApp campaigns, personalized messaging, and targeted customer segments.',
    highlights: [
      'Bulk messaging',
      'Scheduled campaigns',
      'Personalized messages',
      'Audience segmentation',
    ],
  },

  {
    id: 'automated-notifications',
    tag: 'Automated Notifications',
    tagBg: 'bg-sky-50 text-sky-700 border-sky-200/80',
    icon: Bell,
    iconGradient: 'from-sky-400 to-blue-500',
    shadowColor: 'shadow-sky-400/20',
    hoverBorder: 'hover:border-sky-300',
    hoverGlow:
      'hover:shadow-[0_20px_45px_-12px_rgba(14,165,233,0.18)]',

    title: 'Automated Notifications',

    desc:
      'Keep customers informed automatically with timely WhatsApp notifications throughout their customer journey.',

    highlights: [
      'Order updates',
      'Appointment reminders',
      'Payment reminders',
      'Delivery notifications',
    ],
  },

  {
    id: 'commerce-payments',
    tag: 'Commerce & Payments',
    tagBg: 'bg-sky-50 text-sky-700 border-sky-200/80',
    icon: ShoppingCart,
    iconGradient: 'from-sky-400 to-blue-500',
    shadowColor: 'shadow-sky-400/20',
    hoverBorder: 'hover:border-sky-300',
    hoverGlow:
      'hover:shadow-[0_20px_45px_-12px_rgba(14,165,233,0.18)]',

    title: 'Commerce & Payments',

    desc:
      'Turn WhatsApp into a powerful commerce channel where customers can discover products, place orders, and complete payments.',

    highlights: [
      'Product catalog',
      'Order management',
      'Payment links',
      'Purchase notifications',
    ],
  },
];

const devices = [
  // =====================================================
  // 1. BROWSER
  // =====================================================
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
    badgeColor:
      'bg-indigo-100/80 text-indigo-800 border-indigo-200',
    ctaText: 'Book for Web App',
    ctaLink: '#book-web',
    image: '/web_preview.jpg',
    imageAlt: 'WhatsApp web automation preview',
    floatingBadge: '🌐 Zero Install Needed',
    bullets: [
      {
        title: 'Zero Installation',
        desc: 'Works seamlessly from any modern desktop browser',
      },
      {
        title: 'AI Automation',
        desc: 'Automate replies and qualify incoming leads',
      },
      {
        title: 'Campaign Management',
        desc: 'Create and manage targeted WhatsApp campaigns',
      },
    ],
  },

  // =====================================================
  // 2. MOBILE
  // =====================================================
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
    badgeColor:
      'bg-sky-100/80 text-sky-800 border-sky-200',
    ctaText: 'Book for Mobile',
    ctaLink: '#book-mobile',
    image: '/mobile_preview.jpg',
    imageAlt: 'WhatsApp mobile automation preview',
    floatingBadge: '⚡ Real-time synced',
    bullets: [
      {
        title: 'Push Notifications',
        desc: 'Instant alerts for new customer messages and updates',
      },
      {
        title: 'AI Customer Replies',
        desc: 'Automate customer conversations 24/7',
      },
      {
        title: 'Offline Resilience',
        desc: 'Queue messages when connection drops',
      },
    ],
  },

  // =====================================================
  // 3. DESKTOP
  // =====================================================
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
    badgeColor:
      'bg-slate-100 text-slate-800 border-slate-200',
    ctaText: 'Book for Desktop',
    ctaLink: '#book-desktop',
    image:
      'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&q=80&w=900',
    imageAlt: 'WhatsApp desktop automation preview',
    floatingBadge: '🖥️ Native Performance',
    bullets: [
      {
        title: 'Sales Productivity',
        desc: 'Manage conversations and leads efficiently',
      },
      {
        title: 'Automated Workflows',
        desc: 'Trigger actions based on customer activity',
      },
      {
        title: 'Team Collaboration',
        desc: 'Route conversations to the right sales agents',
      },
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

    const stepIncrement =
      (stepTime / AUTOPLAY_INTERVAL) * 100;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveDeviceIndex(
            (prevIndex) =>
              (prevIndex + 1) % devices.length
          );

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
      {/* =====================================================
          SECTION 1 — CORE FEATURES
      ====================================================== */}

      <section
        id="features"
        className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#f8fbfe] via-white to-sky-50/40 relative overflow-hidden w-full max-w-full"
      >
        {/* Background Glow */}

        <div className="absolute top-1/4 left-10 w-[min(384px,80vw)] h-[min(384px,80vw)] bg-sky-200/25 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="absolute bottom-10 right-10 w-[min(384px,80vw)] h-[min(384px,80vw)] bg-indigo-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}

          <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-14 sm:mb-20">

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200/60 shadow-2xs">

              <Zap
                className="w-3.5 h-3.5 text-sky-600 fill-sky-600"
              />

              <span className="text-xs font-bold text-sky-800 tracking-wide uppercase">
                Core Capabilities
              </span>

            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B3B60] tracking-tight leading-tight break-words">
              Everything you need to automate WhatsApp.
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto font-normal">
              Connect with customers, automate conversations,
              generate leads, and grow your business through
              powerful WhatsApp automation.
            </p>

          </div>

          {/* Feature Cards */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

            {modernFeatures.map((item) => {

              const Icon = item.icon;

              return (
                <div
                  key={item.id}
                  className={`group relative bg-white rounded-[24px] sm:rounded-[28px] border border-slate-100/90 p-6 sm:p-8 lg:p-9 shadow-[0_4px_25px_rgba(11,59,96,0.04)] ${item.hoverGlow} ${item.hoverBorder} hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-default min-w-0`}
                >

                  {/* Ambient Glow */}

                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-sky-100/50 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

                  {/* Card Content */}

                  <div>

                    {/* Icon + Tag */}

                    <div className="flex items-center justify-between mb-5 sm:mb-6">

                      <div
                        className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr ${item.iconGradient} text-white flex items-center justify-center shadow-lg ${item.shadowColor} group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
                      </div>

                      <span
                        className={`px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-semibold border ${item.tagBg} transition-colors whitespace-nowrap`}
                      >
                        {item.tag}
                      </span>

                    </div>

                    {/* Title */}

                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3 group-hover:text-[#0B3B60] transition-colors leading-snug break-words">
                      {item.title}
                    </h3>

                    {/* Description */}

                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal mb-5 sm:mb-6 break-words">
                      {item.desc}
                    </p>

                    {/* Highlights */}

                    <div className="space-y-2 pt-2 border-t border-slate-100">

                      {item.highlights.map((h) => (

                        <div
                          key={h}
                          className="flex items-center gap-2 text-xs text-slate-600 font-medium"
                        >

                          <CheckCircle2 className="w-3.5 h-3.5 text-sky-500 shrink-0" />

                          <span className="truncate">
                            {h}
                          </span>

                        </div>

                      ))}

                    </div>

                  </div>

                  {/* Learn More */}

                  <div className="pt-5 sm:pt-6 mt-5 sm:mt-6 border-t border-slate-100/80 flex items-center justify-between">

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

      {/* =====================================================
          SECTION 2 — MULTI PLATFORM
      ====================================================== */}

      <section
        id="download"
        className="py-16 sm:py-20 lg:py-24 bg-white border-t border-slate-100 relative overflow-hidden w-full max-w-full"
      >

        {/* Background Glow */}

        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[min(700px,90vw)] h-[400px] bg-sky-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}

          <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-10 sm:mb-14">

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200/60 shadow-2xs">

              <Sparkles
                className="w-3.5 h-3.5 text-sky-600 fill-sky-600"
              />

              <span className="text-xs font-bold text-sky-800 tracking-wide uppercase">
                Cross-Platform Freedom
              </span>

            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B3B60] tracking-tight leading-tight break-words">
              Automate from anywhere, anytime.
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-slate-500 max-w-xl mx-auto leading-relaxed font-normal">
              Switch seamlessly between your phone, browser,
              and desktop while keeping your conversations,
              leads, and automation workflows synchronized.
            </p>

          </div>

          {/* Device Tabs */}

          <div className="flex flex-col items-center gap-4 mb-8 sm:mb-12 w-full">

            <div className="inline-flex p-1 sm:p-1.5 bg-slate-100/80 backdrop-blur-md rounded-full border border-slate-200 shadow-inner max-w-full overflow-x-auto scrollbar-none">

              {devices.map((d, idx) => {

                const TabIcon = d.icon;

                const isActive =
                  activeDeviceIndex === idx;

                return (
                  <button
                    key={d.id}
                    onClick={() =>
                      handleSelectDevice(idx)
                    }
                    className={`relative overflow-hidden flex items-center gap-2 sm:gap-2.5 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold text-xs sm:text-sm transition-all duration-300 whitespace-nowrap cursor-pointer shrink-0 ${
                      isActive
                        ? 'bg-[#0B3B60] text-white shadow-lg shadow-sky-950/20 scale-[1.02]'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                    }`}
                  >

                    {/* Progress */}

                    {isActive && (
                      <span
                        className="absolute bottom-0 left-0 h-1 bg-sky-400/80 transition-all duration-75 rounded-full"
                        style={{
                          width: `${progress}%`,
                        }}
                      />
                    )}

                    <TabIcon
                      className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${
                        isActive
                          ? 'text-sky-300'
                          : 'text-slate-400'
                      }`}
                    />

                    <span>
                      {d.label}
                    </span>

                  </button>
                );
              })}

            </div>

          </div>

          {/* Active Device Showcase */}

          <div
            className={`rounded-[24px] sm:rounded-[36px] border-2 ${active.border} ${active.bg} p-5 sm:p-8 lg:p-12 shadow-[0_20px_50px_-10px_rgba(11,59,96,0.08)] transition-all duration-500 relative overflow-hidden w-full`}
          >

            <div
              key={active.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center animate-in fade-in zoom-in-95 duration-400"
            >

              {/* LEFT SIDE */}

              <div className="lg:col-span-6 flex flex-col justify-center space-y-5 sm:space-y-7 min-w-0">

                {/* Badge */}

                <div className="inline-flex items-center gap-2 w-fit">

                  <span
                    className={`px-3 sm:px-3.5 py-1 rounded-full text-xs font-bold border ${active.badgeColor} shadow-2xs`}
                  >
                    {active.badge}
                  </span>

                </div>

                {/* Title */}

                <div className="space-y-2.5 sm:space-y-3">

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight break-words">
                    {active.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {active.subtitle}
                  </p>

                </div>

                {/* Benefits */}

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

                {/* CTA */}

                <div className="pt-2 sm:pt-3 flex flex-wrap items-center gap-4">

                  <a
                    href={active.ctaLink}
                    className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl bg-[#0B3B60] hover:bg-[#082b47] text-white font-semibold text-xs sm:text-sm shadow-md shadow-sky-900/15 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 w-full sm:w-auto"
                  >
                    <span>
                      {active.ctaText}
                    </span>
                    {active.ctaIcon && (
                      <active.ctaIcon className="w-4 h-4 text-sky-300" />
                    )}
                  </a>

                  <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">

                    <Shield className="w-3.5 h-3.5 text-emerald-500" />

                    <span>
                      End-to-End Encrypted
                    </span>

                  </div>

                </div>

              </div>

              {/* RIGHT SIDE IMAGE */}

              <div className="lg:col-span-6 relative flex items-center justify-center w-full">

                <div className="relative w-full max-w-[500px] mx-auto rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(11,59,96,0.2)] ring-1 ring-slate-900/10 bg-white p-2 sm:p-2.5 transition-all duration-500 hover:scale-[1.01]">

                  {/* Floating Badge */}

                  <div className="absolute top-3 sm:top-5 right-3 sm:right-5 z-20 bg-white/90 backdrop-blur-md px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold text-slate-800 shadow-md border border-slate-100 flex items-center gap-1.5">

                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />

                    <span>
                      {active.floatingBadge}
                    </span>

                  </div>

                  {/* Device Image */}

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