import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, LogOut, Sparkles } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

export default function ChatPage() {
  const { logout } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-theme-50 via-white to-sky-50 flex flex-col items-center justify-center px-4 gap-8">

      {/* Icon */}
      <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-theme-900 to-primary flex items-center justify-center shadow-2xl shadow-primary/30">
        <MessageSquare className="w-10 h-10 text-white" />
      </div>

      {/* Copy */}
      <div className="text-center space-y-3 max-w-md">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-theme-50 border border-theme-200/60">
          <Sparkles className="w-3.5 h-3.5 text-primary fill-primary" />
          <span className="text-xs font-bold text-theme-900 uppercase tracking-wide">You're in!</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-theme-950 tracking-tight">
          Chat is coming soon
        </h1>
        <p className="text-base text-slate-500 leading-relaxed">
          You've successfully authenticated. The full chat interface will live here.
          This is a protected route — only logged-in users can reach this page.
        </p>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link
          to="/"
          className="px-6 py-3 rounded-xl border border-slate-200 bg-white text-slate-700 font-semibold text-sm hover:border-theme-300 hover:text-primary transition-all duration-200 shadow-sm hover:shadow-md"
        >
          ← Back to Home
        </Link>
        <button
          id="chat-logout-btn"
          onClick={logout}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-theme-900 to-primary text-white font-semibold text-sm shadow-md shadow-primary/25 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
        >
          <LogOut className="w-4 h-4" />
          Log out
        </button>
      </div>
    </div>
  );
}
