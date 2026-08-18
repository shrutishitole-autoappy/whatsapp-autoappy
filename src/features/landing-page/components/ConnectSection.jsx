import React, { useState } from 'react';
import { Lock, Users, Video, CheckCircle2 } from 'lucide-react';

const features = [
  {
    icon: Lock,
    title: 'End-to-End Encryption',
    desc: "Your personal messages and calls are secured. Only you and the person you're talking to can read or listen to them.",
  },
  {
    icon: Users,
    title: 'Group Chats',
    desc: 'Keep in touch with the groups of people that matter the most, like your family or coworkers, in organized channels.',
  },
  {
    icon: Video,
    title: 'Voice & Video Calls',
    desc: 'Make secure, high-quality voice and video calls for free, anywhere in the world, on any device.',
  },
];

const devices = [
  {
    id: 'mobile',
    label: '📱 Mobile',
    title: 'Always in your pocket',
    subtitle: 'Chat, call, and share — anywhere you go. Your conversations are always with you.',
    bg: 'bg-sky-50',
    border: 'border-sky-200',
    image: '/mobile_preview.jpg',
    imageAlt: 'WhatsApp mobile chat preview',
    bullets: ['Notifications in real-time', 'Share photos & voice notes', 'Works offline too'],
  },
  {
    id: 'web',
    label: '🌐 Browser',
    title: 'Open a tab, start chatting',
    subtitle: 'No download needed. Just open your browser and start messaging anyone, instantly.',
    bg: 'bg-indigo-50',
    border: 'border-indigo-200',
    image: '/web_preview.jpg',
    imageAlt: 'WhatsApp web browser preview',
    bullets: ['No installation needed', 'Works on any computer', 'All chats auto-synced'],
  },
  {
    id: 'desktop',
    label: '🖥️ Desktop',
    title: 'Power at your fingertips',
    subtitle: 'Full-screen experience built for deep work, big teams, and crystal-clear calls.',
    bg: 'bg-slate-100',
    border: 'border-slate-300',
    image: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&q=80&w=900',
    imageAlt: 'WhatsApp desktop app preview',
    bullets: ['Keyboard shortcuts', 'Multi-window support', 'HD screen sharing'],
  },
];

export default function ConnectSection() {
  const [activeDevice, setActiveDevice] = useState('mobile');
  const active = devices.find((d) => d.id === activeDevice);

  return (
    <>
      {/* ── Section 1: Everything you need to connect ── */}
      <section className="py-20 bg-sky-50/50 border-t border-sky-100/60">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Everything you need to connect
            </h2>
            <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
              Built for performance and security, providing a seamless communication workspace.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-2xl border border-slate-100 p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-default"
              >
                <div className="w-11 h-11 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center mb-6 group-hover:bg-[#006699] group-hover:border-[#006699] transition-all duration-300">
                  <Icon className="w-5 h-5 text-sky-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 2: Interactive Device Switcher ── */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Header */}
          <div className="text-center space-y-3 mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Use it anywhere, anytime ✨
            </h2>
            <p className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto leading-relaxed">
              Pick a device below and see exactly how WhatsApp looks on it — same simple experience everywhere!
            </p>
          </div>

          {/* Device Tab Picker */}
          <div className="flex justify-center gap-3 flex-wrap mb-10">
            {devices.map((d) => (
              <button
                key={d.id}
                onClick={() => setActiveDevice(d.id)}
                className={`px-6 py-2.5 rounded-full font-semibold text-sm border-2 transition-all duration-200 ${
                  activeDevice === d.id
                    ? 'bg-[#006699] text-white border-[#006699] scale-105 shadow-md shadow-sky-900/10'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-sky-400 hover:text-sky-700'
                }`}
              >
                {d.label}
              </button>
            ))}
          </div>

          {/* Active Device Card */}
          <div className={`rounded-3xl border-2 ${active.border} ${active.bg} overflow-hidden shadow-lg transition-all duration-300`}>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left: Info Panel */}
              <div className="p-10 sm:p-12 flex flex-col justify-center space-y-6">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
                  {active.title}
                </h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  {active.subtitle}
                </p>
                <ul className="space-y-3.5">
                  {active.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#006699] shrink-0" />
                      <span className="text-sm font-semibold text-slate-700">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: Real Image */}
              <div className="relative overflow-hidden flex items-center justify-center p-6 sm:p-10 lg:p-8">
                <div className="rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/15 ring-1 ring-slate-900/5 transition-all duration-500">
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
      </section>
    </>
  );
}
