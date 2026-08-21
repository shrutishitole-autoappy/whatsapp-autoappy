import React from 'react';
import { Sparkles } from 'lucide-react';
import BusinessAutomation from '../../business';

export default function BusinessSection() {
  return (
    <section
      id="business"
      className="bg-slate-50/70 border-t border-slate-100 relative overflow-hidden w-full max-w-full"
    >
      {/* Subtle background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[min(900px,95vw)] h-[400px] bg-emerald-100/25 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-4">
      

          <h2 className="section-heading text-slate-900">
Automate Every Step of the Customer Journey
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Engage customers, qualify leads, track orders, book appointments, and sync your CRM — all automatically, in real time.
          </p>
        </div>

        {/* Embedded Interactive Business Automation — compact container */}
        <div className="w-full relative shadow-xl rounded-xl overflow-hidden bg-white border border-slate-200/80">
          <BusinessAutomation embedded={true} showHeader={false} />
        </div>
      </div>
    </section>
  );
}
