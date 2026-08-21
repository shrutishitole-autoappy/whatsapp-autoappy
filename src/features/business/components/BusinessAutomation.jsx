import React, { useState, useRef, useCallback } from "react";
import { CheckCircle2 } from "lucide-react";
import { PAGES, NAV } from "../constants/businessData";
import BusinessHeader from "./BusinessHeader";
import BusinessSidebar from "./BusinessSidebar";
import WorkflowPage from "./WorkflowPage";
import CustomAutomationPage from "./CustomAutomationPage";

export default function BusinessAutomation({
  initialPage = "how-it-works",
  showHeader = true,
  embedded = false,
}) {
  const [page, setPage] = useState(initialPage);
  const [toastMsg, setToastMsg] = useState(null);
  const toastTimer = useRef(null);

  const showToast = (msg) => {
    setToastMsg(msg);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToastMsg(null), 2800);
  };

  const handleNavigate = (id) => {
    setPage(id);
  };

  // Continuous nonstop loop across templates
  const handleWorkflowComplete = useCallback(() => {
    setPage((currentPage) => {
      const ids = NAV.map((n) => n.id);
      const currIdx = ids.indexOf(currentPage);
      const nextIdx = currIdx === -1 ? 0 : (currIdx + 1) % ids.length;
      return ids[nextIdx];
    });
  }, []);

  return (
    <div
      className={`w-full ${
        embedded
          ? "h-[600px] rounded-2xl border border-[#E7ECF3] shadow-xl overflow-hidden"
          : "h-screen min-h-[580px] overflow-hidden"
      } flex flex-col bg-white font-sans relative`}
      style={{ fontFamily: "Inter, system-ui, -apple-system, sans-serif" }}
    >
      <style>{`
        .step-line-fill {
          animation: lineFillDown 620ms cubic-bezier(0.4,0,0.2,1) forwards;
          transform: scaleY(0);
          transform-origin: top;
        }
        @keyframes lineFillDown {
          from { transform: scaleY(0); }
          to   { transform: scaleY(1); }
        }
        .flow-dot {
          animation: flowDotDown 620ms linear forwards;
          top: 0%;
        }
        @keyframes flowDotDown {
          0%   { top: 0%;  opacity: 0; }
          12%  { opacity: 1; }
          85%  { opacity: 1; }
          100% { top: 96%; opacity: 0; }
        }
        .wa-pattern-drift {
          animation: waPatternDrift 55s linear infinite;
        }
        @keyframes waPatternDrift {
          from { background-position: 0px 0px; }
          to   { background-position: 240px 240px; }
        }
        @keyframes pulseDot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%      { opacity: 0.55; transform: scale(0.85); }
        }
        .cursor-click-ripple {
          animation: cursorRipple 480ms ease-out forwards;
        }
        @keyframes cursorRipple {
          0%   { transform: scale(0.4); opacity: 0.9; }
          100% { transform: scale(1.7); opacity: 0; }
        }
        .block-pop-in {
          animation: blockPopIn 360ms cubic-bezier(0.22,1,0.36,1) both;
        }
        @keyframes blockPopIn {
          0%   { opacity: 0; transform: translateY(6px) scale(0.97); }
          100% { opacity: 1; transform: translateY(0)  scale(1); }
        }
        .typing-dots {
          animation: typingFade 620ms ease-out forwards;
        }
        .typing-dots span {
          animation: typingBounce 900ms ease-in-out infinite;
        }
        .typing-dots span:nth-child(2) { animation-delay: 120ms; }
        .typing-dots span:nth-child(3) { animation-delay: 240ms; }
        @keyframes typingBounce {
          0%, 60%, 100% { transform: translateY(0);   opacity: 0.5; }
          30%           { transform: translateY(-3px); opacity: 1; }
        }
        @keyframes typingFade {
          0%   { opacity: 1; }
          70%  { opacity: 1; }
          100% { opacity: 0; height: 0; margin: 0; padding: 0; overflow: hidden; }
        }
        .badge-pop {
          animation: badgePop 420ms cubic-bezier(0.34,1.56,0.64,1) both;
        }
        @keyframes badgePop {
          0%   { opacity: 0; transform: scale(0.5); }
          70%  { opacity: 1; transform: scale(1.12); }
          100% { opacity: 1; transform: scale(1); }
        }
        .toast-in {
          animation: toastIn 320ms cubic-bezier(0.22,1,0.36,1) both;
        }
        @keyframes toastIn {
          0%   { opacity: 0; transform: translate(-50%, 12px) scale(0.96); }
          100% { opacity: 1; transform: translate(-50%, 0)    scale(1); }
        }
        .rise-in {
          animation: riseIn 420ms cubic-bezier(0.22,1,0.36,1) both;
        }
        @keyframes riseIn {
          0%   { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .lift-hover {
          transition: transform 160ms ease, box-shadow 160ms ease;
        }
        .lift-hover:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(15,23,42,0.08);
        }
        .press-hover { transition: transform 120ms ease, filter 120ms ease; }
        .press-hover:hover  { filter: brightness(1.04); }
        .press-hover:active { transform: scale(0.97); }

        @media (prefers-reduced-motion: reduce) {
          .step-line-fill, .flow-dot, .wa-pattern-drift, .block-pop-in,
          .typing-dots, .typing-dots span, .badge-pop, .toast-in,
          .rise-in, .lift-hover, .press-hover, .cursor-click-ripple {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>

      {/* Optional header (standalone mode) */}
      {showHeader && (
        <BusinessHeader
          onBookDemo={() =>
            showToast("Booking demo requested! Our team will connect with you.")
          }
        />
      )}

      {/* Main layout: sidebar + content */}
      <div className="flex flex-1 min-h-0">
        <BusinessSidebar
          current={page}
          onNavigate={handleNavigate}
          onTalkSales={() =>
            showToast("Connecting you with our enterprise sales specialist…")
          }
        />

        <main className="flex-1 min-w-0 overflow-hidden bg-[#FDFEFE]">
          {page === "custom" ? (
            <CustomAutomationPage toast={showToast} />
          ) : (
            <WorkflowPage
              pageId={page}
              data={PAGES[page] || PAGES["how-it-works"]}
              onNavigate={handleNavigate}
              toast={showToast}
              onComplete={handleWorkflowComplete}
            />
          )}
        </main>
      </div>

      {/* Toast notification */}
      {toastMsg && (
        <div className="toast-in fixed bottom-6 left-1/2 -translate-x-1/2 bg-[#0F172A] text-white text-[13px] font-medium px-5 py-3 rounded-xl shadow-xl flex items-center gap-2.5 z-50 pointer-events-none">
          <CheckCircle2 size={16} className="text-[#4ADE80] shrink-0" />
          <span>{toastMsg}</span>
        </div>
      )}
    </div>
  );
}
