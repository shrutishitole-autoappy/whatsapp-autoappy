import React from "react";
import { UserPlus, ShieldCheck, UploadCloud, TrendingUp, ArrowUpRight, Activity } from "lucide-react";

export default function PerformanceSummary({ data }) {
  const activityItem = data?.activity?.[0] || "Rahul Mehta synced to CRM · 1m ago";
  const successRate = data?.successRate || "96.4%";
  const avgTime = data?.avgTime || "1m 40s";

  const metrics = [
    {
      label: "Leads Captured",
      value: "1,420",
      change: "+14.2%",
      icon: UserPlus,
      color: "#2563EB",
      bg: "#EFF6FF",
    },
    {
      label: "Qualified Leads",
      value: "94.2%",
      change: "+5.8%",
      icon: ShieldCheck,
      color: "#16A34A",
      bg: "#DCFCE7",
    },
    {
      label: "Sent to CRM",
      value: "99.4%",
      change: "Real-time",
      icon: UploadCloud,
      color: "#D97706",
      bg: "#FEF3C7",
    },
    {
      label: "Conversion Rate",
      value: "18.6%",
      change: "+3.4%",
      icon: TrendingUp,
      color: "#7C3AED",
      bg: "#EDE9FE",
    },
  ];

  const volumeData = [
    { hour: "9a", val: 42 },
    { hour: "11a", val: 78 },
    { hour: "1p", val: 95 },
    { hour: "3p", val: 86 },
    { hour: "5p", val: 64 },
    { hour: "7p", val: 50 },
    { hour: "9p", val: 30 },
  ];

  return (
    <div className="border-t border-[#E7ECF3] bg-white px-5 sm:px-6 py-4">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
        {/* Left 4 metric cards */}
        <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {metrics.map((m, idx) => {
            const IconC = m.icon;
            return (
              <div
                key={idx}
                className="lift-hover border border-[#E7ECF3] rounded-xl p-3 bg-white shadow-2xs transition-all"
              >
                <div className="flex items-center justify-between gap-1 mb-1.5">
                  <div
                    className="w-6 h-6 rounded-md flex items-center justify-center"
                    style={{ background: m.bg, color: m.color }}
                  >
                    <IconC size={13} />
                  </div>
                  <span className="inline-flex items-center text-[10px] font-bold text-[#16A34A] leading-none">
                    <ArrowUpRight size={10} />
                    {m.change}
                  </span>
                </div>
                <div className="text-base sm:text-lg font-extrabold text-[#0F172A] leading-tight">
                  {m.value}
                </div>
                <div className="text-[10.5px] text-[#64748B] font-medium mt-0.5 truncate">
                  {m.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Performance chart & execution log */}
        <div className="lg:col-span-5 border border-[#E7ECF3] rounded-xl p-3 bg-[#F9FAFC] flex flex-col justify-between gap-2.5 shadow-2xs">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5">
              <Activity size={13} className="text-[#2563EB]" />
              <span className="text-[11px] font-bold text-[#0F172A]">
                Automation Volume & Health
              </span>
            </div>
            <div className="flex items-center gap-2 text-[10px]">
              <span className="text-[#64748B]">Success:</span>
              <span className="font-bold text-[#16A34A]">{successRate}</span>
              <span className="text-[#CBD5E1]">|</span>
              <span className="text-[#64748B]">Avg Time:</span>
              <span className="font-bold text-[#0F172A]">{avgTime}</span>
            </div>
          </div>

          {/* Mini hourly activity bar chart */}
          <div className="flex items-end justify-between gap-1.5 h-9 pt-1 px-1">
            {volumeData.map((bar, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1 h-full justify-end group">
                <div
                  className="w-full rounded-sm bg-[#BFDBFE] group-hover:bg-[#2563EB] transition-colors"
                  style={{ height: `${bar.val}%` }}
                  title={`${bar.hour}: ${bar.val}% peak volume`}
                />
                <span className="text-[8.5px] font-semibold text-[#94A3B8] leading-none">
                  {bar.hour}
                </span>
              </div>
            ))}
          </div>

          {/* Live activity pill */}
          <div className="flex items-center gap-1.5 text-[10.5px] text-[#475569] bg-white border border-[#E7ECF3] rounded-lg px-2.5 py-1 truncate">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] shrink-0 animate-pulse" />
            <span className="text-[#94A3B8] font-medium shrink-0">Live:</span>
            <span className="truncate">{activityItem}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
