import React from "react";
import { Plus, Play } from "lucide-react";
import { C, WA_GREEN } from "../constants/businessData";

export default function BottomStats({ data, onCreate, onTest }) {
  if (!data || !data.metrics) return null;

  return (
    <div className="border-t border-[#E7ECF3] bg-white px-8 py-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {data.metrics.map((m, i) => {
          const c = C[m.color] || C.blue;
          const IconComp = m.icon;
          return (
            <div
              key={i}
              className="lift-hover rise-in border border-[#E7ECF3] rounded-xl p-4 flex items-center gap-3 bg-white"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div
                style={{ background: c.bg }}
                className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
              >
                {IconComp && <IconComp size={17} style={{ color: c.text }} />}
              </div>
              <div>
                <div className="text-lg font-bold text-[#0F172A] leading-tight">{m.value}</div>
                <div className="text-[11.5px] text-[#94A3B8]">{m.label}</div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2 border border-[#E7ECF3] rounded-xl p-4 bg-white">
          <div className="text-sm font-semibold text-[#0F172A] mb-3">Recent Execution Activity</div>
          <div className="flex flex-col gap-2.5">
            {data.activity &&
              data.activity.map((a, i) => (
                <div key={i} className="flex items-center gap-2.5 text-[13px] text-[#475569]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] flex-shrink-0" />
                  {a}
                </div>
              ))}
          </div>
          <div className="flex gap-6 mt-4 pt-4 border-t border-[#F1F5F9]">
            <div>
              <div className="text-[11px] text-[#94A3B8]">Success Rate</div>
              <div className="text-sm font-bold text-[#16A34A]">{data.successRate}</div>
            </div>
            <div>
              <div className="text-[11px] text-[#94A3B8]">Avg. Processing Time</div>
              <div className="text-sm font-bold text-[#0F172A]">{data.avgTime}</div>
            </div>
          </div>
        </div>

        <div className="border border-[#E7ECF3] rounded-xl p-4 flex flex-col justify-center gap-2.5 bg-[#F9FAFC]">
          <div className="text-sm font-semibold text-[#0F172A] mb-0.5">Ready to go further?</div>
          <button
            onClick={onCreate}
            className="press-hover w-full py-2.5 rounded-lg text-sm font-semibold text-white flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow-md transition-shadow"
            style={{ background: WA_GREEN }}
          >
            <Plus size={15} /> Create Automation
          </button>
          <button
            onClick={onTest}
            className="press-hover w-full py-2.5 rounded-lg text-sm font-semibold border border-[#E7ECF3] text-[#334155] bg-white flex items-center justify-center gap-2 cursor-pointer hover:bg-slate-50 transition-colors"
          >
            <Play size={14} /> Test Workflow
          </button>
        </div>
      </div>
    </div>
  );
}
