import React, { useState } from 'react';
import { MessageSquare, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Messaging', href: '#messaging' },
    { name: 'Calling', href: '#calling' },
    { name: 'Security', href: '#security' },
    { name: 'Business', href: '#business' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-600 to-cyan-500 flex items-center justify-center shadow-md shadow-sky-500/20">
            <MessageSquare className="w-5 h-5 text-white stroke-[2.5]" />
          </div>
          <span className="text-xl font-bold text-slate-800 tracking-tight">WhatsApp</span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-sky-600 transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Auth / Action Buttons */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="#login"
            className="text-sm font-semibold text-sky-700 hover:text-sky-800 transition-colors duration-200"
          >
            Log in
          </a>
          <a
            href="#download"
            className="px-6 py-2.5 rounded-full bg-[#006699] hover:bg-[#005580] text-white text-sm font-medium transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
          >
            Download
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-700 hover:text-sky-600 py-1"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
            <a
              href="#login"
              className="text-center py-2 text-sm font-semibold text-sky-700"
            >
              Log in
            </a>
            <a
              href="#download"
              className="text-center py-2.5 rounded-full bg-[#006699] text-white text-sm font-medium shadow-sm"
            >
              Download
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
