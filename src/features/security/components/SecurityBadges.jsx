import React from 'react';
import { ShieldCheck, Lock, Award, FileCheck, Server, Key, EyeOff, CheckCircle } from 'lucide-react';

export default function SecurityBadges() {
  const securityItems = [
    {
      icon: ShieldCheck,
      title: 'Official Meta Cloud API Partner',
      desc: 'Built directly on Meta Official Infrastructure for 99.99% uptime, zero account bans, and official Green Tick badge verification.'
    },
    {
      icon: Lock,
      title: 'End-to-End Encryption',
      desc: 'All message payloads are encrypted in transit with TLS 1.3 and at rest with 256-bit AES military grade standards.'
    },
    {
      icon: Award,
      title: 'SOC-2 Type II Certified',
      desc: 'Independently audited for security, availability, confidential handling, and strict organizational data protection controls.'
    },
    {
      icon: FileCheck,
      title: 'GDPR & CCPA Compliant',
      desc: 'Built-in customer consent management, instant contact opt-out triggers, and full data sovereignty compliance.'
    }
  ];

  return (
    <div className="glass-panel rounded-3xl p-6 lg:p-10 border border-emerald-500/20 shadow-2xl relative overflow-hidden">
      
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-semibold rounded-full border border-emerald-500/20 mb-3">
            <Lock className="w-3.5 h-3.5" />
            Enterprise Infrastructure Security
          </div>
          <h3 className="text-3xl font-extrabold text-white">
            Bank-Grade Security & Compliance
          </h3>
          <p className="text-sm text-slate-400 mt-2 max-w-xl">
            Protect your customer data and brand reputation with AutoAppy enterprise cloud security.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="px-4 py-2 bg-slate-900/90 border border-emerald-500/30 rounded-xl flex items-center gap-2 text-xs font-bold text-emerald-400">
            <CheckCircle className="w-4 h-4 text-[#25D366]" />
            Meta Verified API
          </div>
          <div className="px-4 py-2 bg-slate-900/90 border border-emerald-500/30 rounded-xl flex items-center gap-2 text-xs font-bold text-emerald-400">
            <CheckCircle className="w-4 h-4 text-[#25D366]" />
            ISO 27001
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {securityItems.map((item, idx) => {
          const SIcon = item.icon;
          return (
            <div 
              key={idx} 
              className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-[#25D366] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <SIcon className="w-5 h-5" />
              </div>
              <h5 className="font-bold text-sm text-white mb-2">{item.title}</h5>
              <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
