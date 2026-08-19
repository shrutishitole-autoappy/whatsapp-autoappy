import React from 'react';
import { MessageSquare, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const productLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Messaging', href: '#messaging' },
    { name: 'Multi-Device', href: '#download' },
    { name: 'Automation', href: '#features' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms of Service', href: '#terms' },
    { name: 'Security', href: '#security' },
  ];

  return (
    <footer className="bg-slate-50 border-t border-slate-200/80 transition-colors w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-8 sm:pb-10 border-b border-slate-200/60">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-sky-600 to-cyan-500 flex items-center justify-center shadow-xs">
                <MessageSquare className="w-4 h-4 text-white stroke-[2.5]" />
              </div>
              <span className="text-lg font-bold text-slate-900 tracking-tight">WhatsApp</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-sm leading-relaxed font-normal">
              Intelligent conversation workflows and automated messaging to help your business engage, qualify, and convert leads.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider">Product</h4>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm text-slate-600 hover:text-sky-600 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal / Company */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider">Company</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm text-slate-600 hover:text-sky-600 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-xs text-slate-500 font-normal">
            &copy; {new Date().getFullYear()} WhatsApp. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-sky-600 transition-colors duration-200 cursor-pointer"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
