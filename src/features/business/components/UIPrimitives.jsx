import React from "react";
import { CheckCircle2, Circle } from "lucide-react";
import { C, WA_GREEN } from "../constants/businessData";

export function Pill({ children, color = "blue", subtle = true }) {
  const c = C[color] || C.blue;
  return (
    <span
      style={{ background: subtle ? c.bg : c.solid, color: subtle ? c.text : "#fff" }}
      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold whitespace-nowrap"
    >
      {children}
    </span>
  );
}

export function IconCircle({ Icon, color, size = 36, pulse = false, number, muted = false }) {
  const c = C[color] || C.blue;
  return (
    <div className="relative flex-shrink-0" style={{ width: size, height: size }}>
      {pulse && (
        <span
          className="absolute inset-0 rounded-full animate-ping"
          style={{ background: c.solid, opacity: 0.35 }}
        />
      )}
      <div
        style={{
          background: muted ? "#F1F5F9" : c.bg,
          width: size,
          height: size,
        }}
        className="relative rounded-full flex items-center justify-center transition-colors duration-300 shadow-2xs"
      >
        {Icon && (
          <Icon
            size={size * 0.44}
            color={muted ? "#94A3B8" : c.solid}
            strokeWidth={2.2}
          />
        )}
      </div>
      {number != null && (
        <div
          className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-white flex items-center justify-center text-[9px] font-extrabold border shadow-2xs"
          style={{
            borderColor: muted ? "#CBD5E1" : c.solid,
            color: muted ? "#94A3B8" : c.text,
          }}
        >
          {number}
        </div>
      )}
    </div>
  );
}

export function Block({ block }) {
  if (!block) return null;

  if (block.type === "message") {
    return (
      <div>
        <div className="typing-dots mt-1 inline-flex items-center gap-1 bg-[#F1F5F9] border border-[#E7ECF3] rounded-lg rounded-tl-xs px-2.5 py-1.5">
          <span className="w-1 h-1 rounded-full bg-[#94A3B8] inline-block" />
          <span className="w-1 h-1 rounded-full bg-[#94A3B8] inline-block" />
          <span className="w-1 h-1 rounded-full bg-[#94A3B8] inline-block" />
        </div>
        <div
          className="block-pop-in mt-1 inline-block max-w-[90%] bg-[#F1F5F9] border border-[#E7ECF3] rounded-lg rounded-tl-xs px-2.5 py-1.5 text-[12px] text-[#334155]"
          style={{ animationDelay: "480ms" }}
        >
          “{block.text}”
        </div>
      </div>
    );
  }

  if (block.type === "fields") {
    return (
      <div className="mt-1 flex flex-wrap gap-1.5">
        {block.items.map((f, i) => (
          <div
            key={i}
            className="block-pop-in flex items-center gap-1 border border-[#E7ECF3] bg-[#F9FAFC] rounded-md px-2 py-1 text-[11px]"
            style={{ animationDelay: `${i * 70}ms` }}
          >
            <span className="text-[#94A3B8] font-medium">{f.label}:</span>
            <span className="text-[#0F172A] font-semibold">{f.value}</span>
          </div>
        ))}
      </div>
    );
  }

  if (block.type === "badges") {
    return (
      <div className="mt-1 flex flex-wrap gap-1.5">
        {block.items.map((b, i) => (
          <span key={i} className="badge-pop inline-block" style={{ animationDelay: `${i * 90}ms` }}>
            <Pill color={b.color}>{b.text}</Pill>
          </span>
        ))}
      </div>
    );
  }

  if (block.type === "note") {
    return <p className="block-pop-in mt-1 text-[11.5px] text-[#64748B]">{block.text}</p>;
  }

  if (block.type === "buttons") {
    return (
      <div className="block-pop-in mt-1.5 flex gap-1.5">
        {block.items.map((label, i) => (
          <button
            key={i}
            className={
              i === 0
                ? "press-hover px-3 py-1 rounded-md text-[11px] font-semibold text-white cursor-pointer"
                : "press-hover px-3 py-1 rounded-md text-[11px] font-semibold border border-[#E7ECF3] text-[#334155] bg-white cursor-pointer"
            }
            style={i === 0 ? { background: WA_GREEN } : {}}
          >
            {label}
          </button>
        ))}
      </div>
    );
  }

  if (block.type === "list") {
    return (
      <div className="mt-1 flex flex-col gap-1">
        {block.items.map((it, i) => (
          <div
            key={i}
            className="block-pop-in flex items-center gap-1.5 text-[11.5px]"
            style={{ animationDelay: `${i * 70}ms` }}
          >
            {it.done ? (
              <CheckCircle2 size={13} className="text-[#22C55E]" />
            ) : (
              <Circle size={13} className="text-[#CBD5E1]" />
            )}
            <span className={it.done ? "text-[#0F172A] font-medium" : "text-[#94A3B8]"}>
              {it.text}
            </span>
          </div>
        ))}
      </div>
    );
  }

  return null;
}
