import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, MessageSquare, ArrowRight, Loader2, User } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

export default function Signup() {
  const { login } = useAuth();
  const navigate  = useNavigate();

  const [form, setForm]       = useState({ name: '', email: '', password: '' });
  const [showPwd, setShowPwd] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState('');

  const handleChange = (e) => {
    setError('');
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password) {
      setError('Please fill in all fields.');
      return;
    }
    if (form.password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }
    setLoading(true);
    // Simulate async registration — replace with real API call when backend is ready
    await new Promise((r) => setTimeout(r, 900));
    login('session-token');
    navigate('/chat', { replace: true });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-theme-50 via-white to-sky-50 flex items-center justify-center px-4 py-12">
      {/* Card */}
      <div className="w-full max-w-md bg-white/80 backdrop-blur-md rounded-3xl shadow-[0_20px_60px_rgba(15,91,138,0.10)] border border-slate-100 px-8 py-10 sm:px-10 sm:py-12">

        {/* Logo / Brand */}
        <div className="flex flex-col items-center gap-3 mb-8">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-theme-900 to-primary flex items-center justify-center shadow-lg shadow-primary/25">
            <MessageSquare className="w-7 h-7 text-white" />
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-extrabold text-theme-950 tracking-tight">Create your account</h1>
            <p className="text-sm text-slate-500 mt-1">Start automating WhatsApp for free</p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} noValidate className="space-y-5">

          {/* Full Name */}
          <div className="space-y-1.5">
            <label htmlFor="signup-name" className="block text-xs font-semibold text-slate-700 uppercase tracking-wide">
              Full name
            </label>
            <div className="relative">
              <input
                id="signup-name"
                name="name"
                type="text"
                autoComplete="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Jane Smith"
                className="w-full px-4 py-3 pl-10 rounded-xl border border-slate-200 bg-slate-50/60 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400/60 focus:border-sky-400 transition-all duration-200"
              />
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-1.5">
            <label htmlFor="signup-email" className="block text-xs font-semibold text-slate-700 uppercase tracking-wide">
              Email address
            </label>
            <input
              id="signup-email"
              name="email"
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@company.com"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/60 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400/60 focus:border-sky-400 transition-all duration-200"
            />
          </div>

          {/* Password */}
          <div className="space-y-1.5">
            <label htmlFor="signup-password" className="block text-xs font-semibold text-slate-700 uppercase tracking-wide">
              Password
            </label>
            <div className="relative">
              <input
                id="signup-password"
                name="password"
                type={showPwd ? 'text' : 'password'}
                autoComplete="new-password"
                value={form.password}
                onChange={handleChange}
                placeholder="Min. 6 characters"
                className="w-full px-4 py-3 pr-11 rounded-xl border border-slate-200 bg-slate-50/60 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400/60 focus:border-sky-400 transition-all duration-200"
              />
              <button
                type="button"
                onClick={() => setShowPwd((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                aria-label={showPwd ? 'Hide password' : 'Show password'}
              >
                {showPwd ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Error */}
          {error && (
            <p className="text-xs font-medium text-red-500 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
              {error}
            </p>
          )}

          {/* Submit */}
          <button
            id="signup-submit-btn"
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-theme-900 to-primary text-white font-semibold text-sm shadow-md shadow-primary/25 hover:shadow-lg hover:shadow-primary/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Creating account…
              </>
            ) : (
              <>
                Create account
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>

          <p className="text-center text-[11px] text-slate-400 leading-snug">
            By creating an account, you agree to our{' '}
            <span className="text-slate-500 font-medium">Terms of Service</span>{' '}
            and{' '}
            <span className="text-slate-500 font-medium">Privacy Policy</span>.
          </p>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-slate-100" />
          <span className="text-xs text-slate-400 font-medium">or</span>
          <div className="flex-1 h-px bg-slate-100" />
        </div>

        {/* Login link */}
        <p className="text-center text-sm text-slate-500">
          Already have an account?{' '}
          <Link
            to="/login"
            id="signup-login-link"
            className="font-semibold text-primary hover:text-theme-900 transition-colors underline-offset-2 hover:underline"
          >
            Log in
          </Link>
        </p>

        {/* Back to landing */}
        <p className="text-center text-xs text-slate-400 mt-4">
          <Link to="/" className="hover:text-slate-600 transition-colors">
            ← Back to homepage
          </Link>
        </p>
      </div>
    </div>
  );
}
