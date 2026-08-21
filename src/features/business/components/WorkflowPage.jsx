import React, { useState, useEffect, useRef, useCallback } from "react";
import { Zap, CheckCircle2, RotateCcw, Play } from "lucide-react";
import {
  CYCLE,
  WA_DARK,
  WA_GREEN,
  wallpaperStyle,
} from "../constants/businessData";
import { sleep } from "../hooks/useAutoPilot";
import StepCard from "./StepCard";

export default function WorkflowPage({ pageId, data, onNavigate, toast, onStepRefs, onComplete }) {
  const steps = data?.steps || [];
  const [visibleCount, setVisibleCount] = useState(steps.length);
  const [autoStatus, setAutoStatus] = useState("completed");
  const [activeIndex, setActiveIndex] = useState(-1);
  const cancelRef = useRef(false);
  const runningRef = useRef(false);

  const stepMiniRefs = useRef([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      onStepRefs?.(stepMiniRefs.current.slice(0, steps.length));
    }, 200);
    return () => clearTimeout(timer);
  }, [pageId, onStepRefs, steps.length]);

  const runWorkflow = useCallback(async () => {
    if (runningRef.current) return;
    runningRef.current = true;
    cancelRef.current = false;
    setVisibleCount(0);
    setActiveIndex(-1);
    setAutoStatus("running");

    for (let i = 0; i < steps.length; i++) {
      if (cancelRef.current) break;
      setActiveIndex(i);
      setVisibleCount(i + 1);
      await sleep(1500);
    }

    if (!cancelRef.current) {
      setActiveIndex(-1);
      setAutoStatus("completed");
      // Seamless nonstop transition to the next automation workflow
      await sleep(1500);
      if (!cancelRef.current) {
        onComplete?.();
      }
    }
    runningRef.current = false;
  }, [steps, onComplete]);

  useEffect(() => {
    cancelRef.current = false;
    const timer = setTimeout(runWorkflow, 200);
    return () => {
      cancelRef.current = true;
      runningRef.current = false;
      clearTimeout(timer);
    };
  }, [pageId, runWorkflow]);

  const statusMeta = {
    idle: { dot: "#94A3B8", pulse: false, label: "Ready", sub: "Click replay to test" },
    running: { dot: "#22C55E", pulse: true, label: "Running", sub: "Executing steps…" },
    completed: { dot: "#22C55E", pulse: false, label: "Active", sub: "All steps verified" },
  }[autoStatus] ?? { dot: "#22C55E", pulse: false, label: "Active", sub: "All steps verified" };

  return (
    <div className="flex-1 min-w-0">
      {/* Header section */}
      <div
        key={pageId}
        className="px-4 sm:px-5 pt-2.5 pb-2 flex items-center justify-between gap-3 flex-wrap rise-in border-b border-[#F1F5F9]"
      >
        <div>
          {data?.eyebrow && (
            <div className="flex items-center gap-1 mb-0.5">
              <span
                className="text-[10px] font-bold tracking-wider uppercase"
                style={{ color: WA_DARK }}
              >
                {data.eyebrow}
              </span>
            </div>
          )}
          <h1 className="text-base sm:text-lg lg:text-xl font-bold text-[#0F172A] leading-tight">
            {data?.title || "WhatsApp Business Automation"}
          </h1>
          <p className="text-[11.5px] sm:text-xs text-[#64748B] mt-0.5 max-w-xl">
            {data?.subtitle || "Automated customer workflows and live execution."}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              runWorkflow();
              toast?.("Rerunning workflow simulation…");
            }}
            className="hidden press-hover flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[11px] font-semibold border border-[#E7ECF3] bg-white text-[#334155] hover:bg-slate-50 cursor-pointer shadow-2xs"
            title="Re-run live workflow simulation"
          >
            <RotateCcw
              size={12}
              className={autoStatus === "running" ? "animate-spin" : ""}
            />
            <span>Replay</span>
          </button>

          <div className="lift-hover flex items-center gap-1.5 border border-[#E7ECF3] rounded-lg px-2.5 py-1.5 bg-white shadow-2xs">
            <span
              className="w-1.5 h-1.5 rounded-full shrink-0"
              style={{
                background: statusMeta.dot,
                boxShadow: `0 0 0 2px ${statusMeta.dot}33`,
                ...(statusMeta.pulse ? { animation: "pulseDot 1.4s ease-in-out infinite" } : {}),
              }}
            />
            <div className="flex items-center gap-1">
              <span className="text-[11px] font-semibold text-[#0F172A]">{statusMeta.label}</span>
              <span className="text-[10px] text-[#94A3B8]">· {statusMeta.sub}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid: Mini List + Live Execution Panel */}
      <div className="p-2.5 sm:p-3 grid grid-cols-1 md:grid-cols-[190px_1fr] gap-3">
        <div className="flex flex-col gap-3">
          <div className="border border-[#E7ECF3] rounded-lg p-2.5 bg-white shadow-2xs">
            <div className="text-[10px] font-bold tracking-wider text-[#94A3B8] mb-1.5 px-1 uppercase">
              How It Works
            </div>
            <div className="flex flex-col gap-0.5">
              {steps.map((s, i) => {
                const IconC = s.icon;
                const isStepVisible = i < visibleCount;
                return (
                  <div
                    key={i}
                    ref={(el) => {
                      stepMiniRefs.current[i] = el;
                    }}
                    onClick={() => {
                      setVisibleCount(i + 1);
                      setActiveIndex(i);
                    }}
                    className={`lift-hover flex items-center gap-2 px-2 py-1.5 rounded-md text-[11.5px] transition-all cursor-pointer ${
                      isStepVisible ? "rise-in" : ""
                    }`}
                    style={{
                      ...(isStepVisible
                        ? {
                            background: "#EFF6FF",
                            color: "#1D4ED8",
                            fontWeight: 600,
                            animationDelay: `${i * 30}ms`,
                          }
                        : { color: "#475569" }),
                      ...(activeIndex === i ? { boxShadow: "0 0 0 2px #2563EB55" } : {}),
                    }}
                  >
                    {IconC && <IconC size={12} className="flex-shrink-0" />}
                    <span className="truncate">{s.title}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {data?.sideCard && (
            <div
              className="lift-hover rise-in border border-[#E7ECF3] rounded-lg p-3 bg-[#F9FAFC] shadow-2xs"
              style={{ animationDelay: "120ms" }}
            >
              <div
                className="w-6 h-6 rounded-md flex items-center justify-center mb-1.5 shadow-2xs"
                style={{ background: WA_GREEN }}
              >
                <Zap size={13} color="#fff" />
              </div>
              <div className="text-[12px] font-bold text-[#0F172A] mb-0.5">
                {data.sideCard.title}
              </div>
              <p className="text-[11px] text-[#64748B] mb-2 leading-relaxed">
                {data.sideCard.desc}
              </p>
              <span className="inline-flex items-center gap-1 text-[10.5px] font-semibold text-[#16A34A]">
                <CheckCircle2 size={11} /> {data.sideCard.note}
              </span>
            </div>
          )}
        </div>

        <div className="relative border border-[#E7ECF3] rounded-lg overflow-hidden min-w-0 bg-[#F6F1E6] shadow-2xs">
          <div className="absolute inset-0 wa-pattern-drift" style={wallpaperStyle} />
          <div className="absolute inset-0 bg-white/65 backdrop-blur-[0.5px]" />
          <div className="relative p-3.5 sm:p-4">
            <div className="flex items-center justify-between gap-2 mb-3.5">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
                <span className="text-[10px] font-bold tracking-wider text-[#334155] uppercase">
                  Live Execution
                </span>
              </div>
              <button
                onClick={() => {
                  runWorkflow();
                  toast?.("Simulating live WhatsApp automation execution…");
                }}
                className="hidden text-[10.5px] font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 cursor-pointer"
              >
                <Play size={10} /> Simulate
              </button>
            </div>

            <div>
              {steps.slice(0, 6).map((s, i) => (
                <StepCard
                  key={i}
                  step={s}
                  index={i}
                  colorKey={CYCLE[i % CYCLE.length]}
                  visible={i < visibleCount}
                  isLast={i === Math.min(steps.length, 6) - 1}
                  flowing={i === activeIndex && i < Math.min(steps.length, 6) - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
