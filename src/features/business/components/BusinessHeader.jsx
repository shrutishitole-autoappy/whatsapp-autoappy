import React from "react";
import { Link } from "react-router-dom";
import { MessageCircle, ChevronDown } from "lucide-react";
import { WA_GREEN } from "../constants/businessData";

export default function BusinessHeader({ onBookDemo }) {
  return (
    <header className="h-16 border-b border-[#E7ECF3] bg-white flex items-center justify-between px-6 flex-shrink-0 z-20">
      <Link to="/" className="flex items-center gap-2.5 hover:opacity-90 transition-opacity">
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center shadow-xs"
          style={{ background: WA_GREEN }}
        >
          <MessageCircle size={19} color="#fff" />
        </div>
        <div className="leading-tight">
          <div className="text-[15px] font-extrabold text-[#0F172A] tracking-tight">WhatsApp</div>
          <div className="text-[10px] font-semibold text-[#64748B] -mt-0.5 tracking-wider uppercase">
            Business Automation
          </div>
        </div>
      </Link>

      <nav className="hidden md:flex items-center gap-7 text-[13.5px] font-medium text-[#334155]">
        <Link to="/#features" className="cursor-pointer hover:text-[#0F172A] transition-colors">
          Features
        </Link>
        <Link to="/#messaging" className="cursor-pointer hover:text-[#0F172A] transition-colors">
          Messaging
        </Link>
        <Link to="/solutions" className="cursor-pointer hover:text-[#0F172A] transition-colors">
          Solutions
        </Link>
        <Link to="/security" className="cursor-pointer hover:text-[#0F172A] transition-colors">
          Security
        </Link>
        <span
          className="flex items-center gap-1 cursor-pointer font-semibold"
          style={{ color: "#2563EB" }}
        >
          Business <ChevronDown size={14} />
        </span>
      </nav>

      <div className="flex items-center gap-3">
        <Link
          to="/login"
          className="press-hover px-4 py-2 rounded-lg text-[13px] font-semibold border border-[#E7ECF3] text-[#334155] hover:bg-slate-50 transition-colors"
        >
          Log in
        </Link>
        <button
          onClick={onBookDemo}
          className="press-hover px-4 py-2 rounded-lg text-[13px] font-semibold text-white cursor-pointer shadow-xs hover:shadow-md transition-shadow"
          style={{ background: "#2563EB" }}
        >
          Book Demo
        </button>
      </div>
    </header>
  );
}
