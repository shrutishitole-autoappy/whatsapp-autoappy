import React from "react";
import { Plus } from "lucide-react";
import { NAV } from "../constants/businessData";

export default function BusinessSidebar({ current, onNavigate, navItemRefs, onTalkSales }) {
  return (
    <aside className="w-[195px] sm:w-[210px] border-r border-[#E7ECF3] bg-white flex-shrink-0 flex flex-col h-full overflow-hidden">
      <div className="p-2.5">
        <div className="text-[9.5px] font-bold tracking-wider text-[#94A3B8] px-1.5 mb-1.5 uppercase">
          Automation Templates
        </div>
        <div className="flex flex-col gap-0.5">
          {NAV.map((item, idx) => {
            const active = current === item.id;
            const IconComponent = item.icon;
            return (
              <button
                key={item.id}
                ref={(el) => {
                  if (navItemRefs) navItemRefs.current[idx] = el;
                }}
                onClick={() => onNavigate(item.id)}
                className="press-hover text-left transition-colors cursor-pointer w-full flex items-center gap-2 px-2 py-1.5 rounded-md"
                style={{
                  background: active ? "#EAF3FF" : "transparent",
                }}
              >
                <div
                  className="w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 transition-colors"
                  style={{
                    background: active ? "#2563EB" : "#F1F5F9",
                  }}
                >
                  <IconComponent size={12} color={active ? "#ffffff" : "#64748B"} />
                </div>
                <div className="min-w-0 flex-1">
                  <div
                    className="text-[11.5px] font-semibold leading-tight truncate"
                    style={{
                      color: active ? "#1D4ED8" : "#0F172A",
                    }}
                  >
                    {item.label}
                  </div>
                  <div className="text-[9.5px] leading-tight text-[#94A3B8] truncate mt-0.5">
                    {item.desc}
                  </div>
                </div>
              </button>
            );
          })}

          <button
            onClick={() => onNavigate("custom")}
            className="press-hover flex items-center gap-1.5 px-2 py-1.5 mt-1 rounded-md text-[11px] font-semibold text-[#2563EB] cursor-pointer transition-colors"
            style={{
              background: current === "custom" ? "#EAF3FF" : "transparent",
            }}
          >
            <div className="w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 bg-blue-100/70 text-blue-600">
              <Plus size={11} />
            </div>
            <span className="truncate">Custom Automation</span>
          </button>
        </div>
      </div>

      {/* <div className="mt-0 p-1.5"> */}
      <div className="mt-2.0 pt-1.5">
        <div className="lift-hover border border-[#E7ECF3] rounded-lg p-2.5 bg-[#F9FAFC]">
          <div className="text-[11px] font-bold text-[#0F172A] mb-0.5 leading-tight">
            Need assistance?
          </div>
          <p className="text-[10px] text-[#64748B] mb-2 leading-snug">
            Our team is here to help with your workflows.
          </p>
          <button
            onClick={onTalkSales}
            className="press-hover w-full py-1 rounded-md text-[10.5px] font-semibold border border-[#E7ECF3] bg-white text-[#334155] cursor-pointer hover:bg-slate-50 transition-colors shadow-2xs"
          >
            Talk to Sales
          </button>
        </div>
      </div>
    </aside>
  );
}
