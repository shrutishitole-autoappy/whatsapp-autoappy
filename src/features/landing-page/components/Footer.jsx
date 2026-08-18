import React from 'react';

export default function Footer() {
  const footerLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Messaging', href: '#messaging' },
    { name: 'Calling', href: '#calling' },
    { name: 'Security', href: '#security' },
    { name: 'Business', href: '#business' },
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms of Service', href: '#terms' },
  ];

  return (
    <footer className="bg-sky-50/80 border-t border-sky-100/60 py-10 transition-colors">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Brand Info */}
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-[#006699] tracking-tight">Connect</h3>
            <p className="text-xs text-slate-500 font-normal">
              &copy; 2026 WhatsApp Messaging. All rights reserved.
            </p>
          </div>

          {/* Navigation Links */}
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-xs font-medium text-slate-600 hover:text-sky-700 transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
