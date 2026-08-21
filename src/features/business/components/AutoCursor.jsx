import React from "react";

/** Fixed-position overlay for hands-free workflow demonstration */
export default function AutoCursor({ x, y, visible, clicking, label }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0"
      style={{
        zIndex: 9999,
        transform: `translate(${x}px, ${y}px)`,
        transition: "transform 560ms cubic-bezier(0.65,0,0.35,1), opacity 200ms ease",
        opacity: visible ? 1 : 0,
      }}
    >
      {clicking && (
        <span
          className="absolute rounded-full cursor-click-ripple"
          style={{
            left: -15,
            top: -15,
            width: 30,
            height: 30,
            border: "2px solid #2563EB",
            background: "rgba(37,99,235,0.18)",
          }}
        />
      )}
      <svg
        width="20"
        height="24"
        viewBox="0 0 20 24"
        style={{ filter: "drop-shadow(0 2px 3px rgba(15,23,42,0.4))" }}
      >
        <path
          d="M1 1 L1 18.5 L5.8 14.6 L9 21.3 L12.1 19.9 L9 13.2 L15.6 13.2 Z"
          fill="#0F172A"
          stroke="white"
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
      </svg>
      {label && (
        <div
          className="absolute left-5 top-4 whitespace-nowrap px-2 py-1 rounded-md text-[10.5px] font-semibold text-white shadow-md"
          style={{ background: "#0F172A" }}
        >
          {label}
        </div>
      )}
    </div>
  );
}
