import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Features', href: '/#features' },
    { name: 'Messaging', href: '/#messaging' },
    { name: 'Solution', href: '/solutions' },
    { name: 'Security', href: '/security' },
    { name: 'Business', href: '/#business' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100/90 transition-all duration-300 w-full max-w-full">
      <div className="section-container h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          <img
            src="/logo/autoappy_robot.jpg"
            alt="AutoAppy Robot"
            className="w-9 h-9 sm:w-11 sm:h-11 object-contain drop-shadow-sm"
          />
          <span className="text-lg sm:text-xl font-bold text-slate-800 tracking-tight">WhatsApp</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-8">
          {navLinks.map((link) => (
            link.href.startsWith('/') && !link.href.startsWith('/#') ? (
              <Link
                key={link.name}
                to={link.href}
                className="text-[15px] font-medium text-slate-600 hover:text-primary transition-colors duration-200 whitespace-nowrap"
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className="text-[15px] font-medium text-slate-600 hover:text-primary transition-colors duration-200 whitespace-nowrap"
              >
                {link.name}
              </a>
            )
          ))}
        </nav>

        {/* Auth / Action Buttons */}
        <div className="hidden md:flex items-center gap-3 lg:gap-6 shrink-0">
          <Link
            to="/login"
            className="text-[15px] font-semibold text-primary hover:text-primary-dark transition-colors duration-200 px-2 py-1"
          >
            Log in
          </Link>
          <a
            href="#download"
            className="px-5 lg:px-6 py-2 sm:py-2.5 rounded-full bg-primary hover:bg-primary-dark text-white text-[15px] font-semibold transition-all duration-200 shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
          >
            Book Demo 
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="md:hidden flex items-center">
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
              link.href.startsWith('/') && !link.href.startsWith('/#') ? (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-slate-700 hover:text-sky-600 py-1"
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-slate-700 hover:text-sky-600 py-1"
                >
                  {link.name}
                </a>
              )
            ))}
          </div>
          <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
            <Link
              to="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center py-2 text-sm font-semibold text-primary"
            >
              Log in
            </Link>
            <a
              href="#download"
              className="text-center py-2.5 rounded-full bg-primary hover:bg-primary-dark text-white text-sm font-semibold shadow-sm"
            >
              Book Demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
