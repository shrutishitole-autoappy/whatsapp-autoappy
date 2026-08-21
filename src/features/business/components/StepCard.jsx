import React from "react";
import { CheckCircle2 } from "lucide-react";
import { C, CYCLE } from "../constants/businessData";
import { Pill, IconCircle, Block } from "./UIPrimitives";

const STEP_CIRCLE = 34;

export default function StepCard({ step, index, colorKey, visible, flowing, isLast }) {
  const c = C[colorKey] || C.blue;
  const nextColor = C[CYCLE[(index + 1) % CYCLE.length]] || C.green;
  const isWaiting = !visible;
  const isActive = !!flowing;
  const isDone = visible && !flowing;

  return (
    <div
      className={`relative ${isWaiting ? "opacity-60" : "rise-in"}`}
      style={{
        paddingLeft: STEP_CIRCLE + 14,
        paddingBottom: isLast ? 2 : 10,
        transition: "opacity 300ms ease",
      }}
    >
      {!isLast && (
        <div
          className="absolute rounded-full overflow-hidden"
          style={{
            left: STEP_CIRCLE / 2 - 1.5,
            top: STEP_CIRCLE + 2,
            bottom: -2,
            width: 3,
            background: "#EEF1F6",
          }}
        >
          {(isDone || isActive) && (
            <div
              className={isActive ? "w-full rounded-full step-line-fill" : "w-full rounded-full"}
              style={{
                height: "100%",
                background: `linear-gradient(180deg, ${c.solid}, ${nextColor.solid})`,
              }}
            />
          )}
          {isActive && (
            <span
              className="absolute left-1/2 w-2.5 h-2.5 rounded-full -translate-x-1/2 flow-dot"
              style={{ background: c.solid, boxShadow: `0 0 0 4px ${c.ring}55` }}
            />
          )}
        </div>
      )}

      <div className="absolute left-0 top-0">
        <IconCircle
          Icon={step.icon}
          color={colorKey}
          size={STEP_CIRCLE}
          pulse={isActive}
          number={index + 1}
          muted={isWaiting}
        />
      </div>

      <div
        className="rounded-lg border px-3 transition-all duration-300 backdrop-blur-xs"
        style={{
          borderColor: isWaiting ? "#EEF1F6" : c.solid + "80",
          background: isWaiting ? "rgba(250, 251, 252, 0.85)" : c.bg,
          paddingTop: isActive ? 8 : 7,
          paddingBottom: isActive ? 8 : 7,
          boxShadow: isActive
            ? `0 0 0 2px ${c.ring}45, 0 3px 8px rgba(15,23,42,0.05)`
            : "0 1px 2px rgba(15,23,42,0.02)",
        }}
      >
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <div className="flex items-center gap-1.5">
            <span className="font-semibold text-[13px] text-[#0F172A]">{step.title}</span>
            {isActive && (
              <span className="badge-pop inline-block">
                <Pill color={colorKey}>Processing</Pill>
              </span>
            )}
          </div>
          {isActive && (
            <span className="badge-pop inline-flex items-center gap-1 text-[11px] font-semibold text-[#16A34A]">
              <CheckCircle2 size={12} /> {step.result}
            </span>
          )}
          {isDone && (
            <span className="badge-pop inline-flex items-center gap-1 text-[11px] font-semibold text-[#16A34A]">
              <CheckCircle2 size={12} /> Completed
            </span>
          )}
          {isWaiting && (
            <span className="text-[11px] text-[#94A3B8]">Waiting for previous step...</span>
          )}
        </div>
        {(isActive || isDone) &&
          step.blocks &&
          step.blocks.map((b, i) => <Block key={i} block={b} />)}
      </div>
    </div>
  );
}
