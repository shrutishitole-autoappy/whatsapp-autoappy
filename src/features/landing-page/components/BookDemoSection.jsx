// import React, { useState } from 'react';
// import {
//   User,
//   Mail,
//   Building2,
//   Phone,
//   Users,
//   Briefcase,
//   MessageSquare,
//   ArrowRight,
//   Lock,
//   CheckCircle2,
//   Presentation,
//   Cpu,
//   Puzzle,
//   BotMessageSquare,
// } from 'lucide-react';

// const DEMO_FEATURES = [
//   {
//     icon: Presentation,
//     title: 'Personalized Demo',
//     desc: 'Tailored walkthrough focusing on your specific use cases and business goals.',
//   },
//   {
//     icon: BotMessageSquare,
//     title: 'Automation Strategy',
//     desc: 'Expert consultation on designing effective communication flows.',
//   },
//   {
//     icon: Cpu,
//     title: 'AI Walkthrough',
//     desc: 'Deep dive into our AI capabilities for intelligent routing and automated responses.',
//   },
//   {
//     icon: Puzzle,
//     title: 'Integration Discussion',
//     desc: 'Review how WABA Flow connects with your existing CRM and tech stack.',
//   },
// ];

// const COMPANY_SIZES = [
//   '1–10 employees',
//   '11–50 employees',
//   '51–200 employees',
//   '201–1,000 employees',
//   '1,000+ employees',
// ];

// const INDUSTRIES = [
//   'E-Commerce & Retail',
//   'Healthcare',
//   'Finance & Banking',
//   'Education',
//   'Real Estate',
//   'Travel & Hospitality',
//   'Logistics & Supply Chain',
//   'Other',
// ];

// const TRUSTED_AVATARS = [
//   { bg: '#3B82F6', initials: 'AK' },
//   { bg: '#10B981', initials: 'SR' },
//   { bg: '#F59E0B', initials: 'MJ' },
//   { bg: '#EF4444', initials: 'LP' },
//   { bg: '#8B5CF6', initials: 'CD' },
// ];

// export default function BookDemoSection() {
//   const [form, setForm] = useState({
//     fullName: '',
//     workEmail: '',
//     company: '',
//     phone: '',
//     companySize: '',
//     industry: '',
//     message: '',
//   });
//   const [submitted, setSubmitted] = useState(false);
//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//     if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
//   };

//   const validate = () => {
//     const newErrors = {};
//     if (!form.fullName.trim()) newErrors.fullName = 'Full name is required';
//     if (!form.workEmail.trim()) newErrors.workEmail = 'Work email is required';
//     else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.workEmail))
//       newErrors.workEmail = 'Enter a valid email';
//     if (!form.company.trim()) newErrors.company = 'Company name is required';
//     return newErrors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const errs = validate();
//     if (Object.keys(errs).length > 0) {
//       setErrors(errs);
//       return;
//     }
//     setSubmitted(true);
//   };

//   return (
//     <section
//       id="book-demo"
//       className="w-full bg-gradient-to-br from-[#EBF4FF] via-white to-[#F0F9FF] py-20 px-4 sm:px-6 relative overflow-hidden"
//       aria-labelledby="book-demo-heading"
//     >
//       {/* Decorative background blobs */}
//       <div
//         aria-hidden="true"
//         className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full opacity-25 blur-3xl pointer-events-none"
//         style={{ background: 'radial-gradient(circle, #3B82F6 0%, transparent 70%)' }}
//       />
//       <div
//         aria-hidden="true"
//         className="absolute -bottom-28 -right-28 w-[380px] h-[380px] rounded-full opacity-20 blur-3xl pointer-events-none"
//         style={{ background: 'radial-gradient(circle, #10B981 0%, transparent 70%)' }}
//       />

//       <div className="relative z-10 max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16 items-start">

//           {/* ── Left Column ── */}
//           <div className="flex flex-col justify-center">
//             {/* Badge */}
//             <div className="inline-flex items-center gap-2 bg-white border border-[#DCEDFE] rounded-full px-4 py-1.5 text-[13px] font-semibold text-[#1A7FE8] w-fit mb-6 shadow-sm">
//               <svg
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 className="w-4 h-4"
//                 aria-hidden="true"
//               >
//                 <circle cx="12" cy="12" r="11" fill="#25D366" />
//                 <path
//                   d="M17.5 14.5c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.6-.1-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.6s1.1 3 1.3 3.2c.2.2 2.2 3.4 5.4 4.7.8.3 1.4.5 1.8.6.8.2 1.5.2 2 .1.6-.1 1.8-.7 2.1-1.4.3-.7.3-1.3.2-1.4z"
//                   fill="#fff"
//                 />
//               </svg>

//             </div>

//             {/* Heading */}
//             <h2
//               id="book-demo-heading"
//               className="text-4xl sm:text-5xl font-extrabold leading-[1.12] text-[#0F172A] mb-6"
//             >
//               See What{' '}
//               <span className="text-[#25D366]">WhatsApp</span>
//               <br />
//               <span className="text-[#1A7FE8]">Automation</span>
//               <br />
//               Can Do For
//               <br />
//               Your Business
//             </h2>

//             <p className="text-[16px] text-[#475569] leading-relaxed mb-10 max-w-md">
//               Discover how WABA Flow can streamline customer interactions, reduce
//               operational overhead, and drive growth with intelligent automation.
//             </p>

//             {/* Feature Cards */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
//               {DEMO_FEATURES.map(({ icon: Icon, title, desc }) => (
//                 <div
//                   key={title}
//                   className="flex items-start gap-3 bg-white border border-[#E7EEF8] rounded-xl p-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
//                 >
//                   <div className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center bg-[#EBF4FF]">
//                     <Icon size={16} className="text-[#1A7FE8]" />
//                   </div>
//                   <div>
//                     <p className="text-[13px] font-bold text-[#0F172A] mb-0.5">{title}</p>
//                     <p className="text-[12px] text-[#64748B] leading-snug">{desc}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>

            
//           </div>

//           {/* ── Right Column — Form Card ── */}
//           <div className="bg-white rounded-2xl border border-[#E2EDF8] shadow-xl p-7 sm:p-8">
//             {submitted ? (
//               /* Success State */
//               <div className="flex flex-col items-center justify-center text-center py-12 gap-4">
//                 <div className="w-16 h-16 rounded-full bg-[#DCFCE7] flex items-center justify-center mb-2">
//                   <CheckCircle2 size={36} className="text-[#16A34A]" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-[#0F172A]">You're all set!</h3>
//                 <p className="text-[15px] text-[#475569] max-w-xs">
//                   Our team will reach out within 24 hours to confirm your personalized demo.
//                 </p>
//                 <button
//                   onClick={() => { setSubmitted(false); setForm({ fullName: '', workEmail: '', company: '', phone: '', companySize: '', industry: '', message: '' }); }}
//                   className="mt-4 text-[13px] font-semibold text-[#1A7FE8] hover:underline cursor-pointer"
//                 >
//                   Submit another request
//                 </button>
//               </div>
//             ) : (
//               <>
//                 {/* Card header */}
//                 <div className="flex items-start gap-3 mb-6">
//                   <div className="w-11 h-11 rounded-xl bg-[#EBF4FF] flex items-center justify-center flex-shrink-0 shadow-inner">
//                     <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" aria-hidden="true">
//                       <rect x="3" y="4" width="18" height="16" rx="3" stroke="#1A7FE8" strokeWidth="1.8" />
//                       <path d="M8 2v4M16 2v4M3 10h18" stroke="#1A7FE8" strokeWidth="1.8" strokeLinecap="round" />
//                       <circle cx="8" cy="15" r="1" fill="#1A7FE8" />
//                       <circle cx="12" cy="15" r="1" fill="#1A7FE8" />
//                       <circle cx="16" cy="15" r="1" fill="#1A7FE8" />
//                     </svg>
//                   </div>
//                   <div>
//                     <h3 className="text-[18px] font-bold text-[#0F172A] leading-tight">
//                       Let's Build Your Automation
//                     </h3>
//                     <p className="text-[13px] text-[#64748B] mt-0.5">
//                       Tell us about your business and we'll tailor the demo for you.
//                     </p>
//                   </div>
//                 </div>

//                 <form onSubmit={handleSubmit} noValidate>
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                     {/* Full Name */}
//                     <div className="flex flex-col gap-1">
//                       <label htmlFor="demo-fullName" className="text-[12.5px] font-semibold text-[#334155]">
//                         Full Name <span className="text-red-500">*</span>
//                       </label>
//                       <div className="relative">
//                         <User size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]" />
//                         <input
//                           id="demo-fullName"
//                           name="fullName"
//                           type="text"
//                           value={form.fullName}
//                           onChange={handleChange}
//                           placeholder="Jane Doe"
//                           className={`w-full pl-8 pr-3 py-2.5 rounded-lg border text-[13.5px] text-[#0F172A] placeholder-[#CBD5E1] outline-none transition-all focus:ring-2 focus:ring-[#1A7FE8]/25 focus:border-[#1A7FE8] ${errors.fullName ? 'border-red-400 bg-red-50' : 'border-[#E2E8F0] bg-white hover:border-[#94A3B8]'}`}
//                         />
//                       </div>
//                       {errors.fullName && <p className="text-[11px] text-red-500">{errors.fullName}</p>}
//                     </div>

//                     {/* Work Email */}
//                     <div className="flex flex-col gap-1">
//                       <label htmlFor="demo-workEmail" className="text-[12.5px] font-semibold text-[#334155]">
//                         Work Email <span className="text-red-500">*</span>
//                       </label>
//                       <div className="relative">
//                         <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]" />
//                         <input
//                           id="demo-workEmail"
//                           name="workEmail"
//                           type="email"
//                           value={form.workEmail}
//                           onChange={handleChange}
//                           placeholder="jane@company.com"
//                           className={`w-full pl-8 pr-3 py-2.5 rounded-lg border text-[13.5px] text-[#0F172A] placeholder-[#CBD5E1] outline-none transition-all focus:ring-2 focus:ring-[#1A7FE8]/25 focus:border-[#1A7FE8] ${errors.workEmail ? 'border-red-400 bg-red-50' : 'border-[#E2E8F0] bg-white hover:border-[#94A3B8]'}`}
//                         />
//                       </div>
//                       {errors.workEmail && <p className="text-[11px] text-red-500">{errors.workEmail}</p>}
//                     </div>

//                     {/* Company */}
//                     <div className="flex flex-col gap-1">
//                       <label htmlFor="demo-company" className="text-[12.5px] font-semibold text-[#334155]">
//                         Company <span className="text-red-500">*</span>
//                       </label>
//                       <div className="relative">
//                         <Building2 size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]" />
//                         <input
//                           id="demo-company"
//                           name="company"
//                           type="text"
//                           value={form.company}
//                           onChange={handleChange}
//                           placeholder="Acme Corp"
//                           className={`w-full pl-8 pr-3 py-2.5 rounded-lg border text-[13.5px] text-[#0F172A] placeholder-[#CBD5E1] outline-none transition-all focus:ring-2 focus:ring-[#1A7FE8]/25 focus:border-[#1A7FE8] ${errors.company ? 'border-red-400 bg-red-50' : 'border-[#E2E8F0] bg-white hover:border-[#94A3B8]'}`}
//                         />
//                       </div>
//                       {errors.company && <p className="text-[11px] text-red-500">{errors.company}</p>}
//                     </div>

//                     {/* Phone */}
//                     <div className="flex flex-col gap-1">
//                       <label htmlFor="demo-phone" className="text-[12.5px] font-semibold text-[#334155]">
//                         Phone Number
//                       </label>
//                       <div className="relative">
//                         <Phone size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]" />
//                         <input
//                           id="demo-phone"
//                           name="phone"
//                           type="tel"
//                           value={form.phone}
//                           onChange={handleChange}
//                           placeholder="+1 (555) 000-0000"
//                           className="w-full pl-8 pr-3 py-2.5 rounded-lg border border-[#E2E8F0] bg-white text-[13.5px] text-[#0F172A] placeholder-[#CBD5E1] outline-none transition-all hover:border-[#94A3B8] focus:ring-2 focus:ring-[#1A7FE8]/25 focus:border-[#1A7FE8]"
//                         />
//                       </div>
//                     </div>

//                     {/* Company Size */}
//                     <div className="flex flex-col gap-1">
//                       <label htmlFor="demo-companySize" className="text-[12.5px] font-semibold text-[#334155]">
//                         Company Size
//                       </label>
//                       <div className="relative">
//                         <Users size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8] pointer-events-none" />
//                         <select
//                           id="demo-companySize"
//                           name="companySize"
//                           value={form.companySize}
//                           onChange={handleChange}
//                           className="w-full pl-8 pr-8 py-2.5 rounded-lg border border-[#E2E8F0] bg-white text-[13.5px] text-[#0F172A] outline-none appearance-none transition-all hover:border-[#94A3B8] focus:ring-2 focus:ring-[#1A7FE8]/25 focus:border-[#1A7FE8] cursor-pointer"
//                         >
//                           <option value="" disabled>Select size</option>
//                           {COMPANY_SIZES.map((s) => <option key={s} value={s}>{s}</option>)}
//                         </select>
//                         <svg viewBox="0 0 16 16" className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#94A3B8] pointer-events-none" fill="none" stroke="currentColor" strokeWidth="2">
//                           <path d="M4 6l4 4 4-4" />
//                         </svg>
//                       </div>
//                     </div>

//                     {/* Industry */}
//                     <div className="flex flex-col gap-1">
//                       <label htmlFor="demo-industry" className="text-[12.5px] font-semibold text-[#334155]">
//                         Industry
//                       </label>
//                       <div className="relative">
//                         <Briefcase size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8] pointer-events-none" />
//                         <select
//                           id="demo-industry"
//                           name="industry"
//                           value={form.industry}
//                           onChange={handleChange}
//                           className="w-full pl-8 pr-8 py-2.5 rounded-lg border border-[#E2E8F0] bg-white text-[13.5px] text-[#0F172A] outline-none appearance-none transition-all hover:border-[#94A3B8] focus:ring-2 focus:ring-[#1A7FE8]/25 focus:border-[#1A7FE8] cursor-pointer"
//                         >
//                           <option value="" disabled>Select industry</option>
//                           {INDUSTRIES.map((ind) => <option key={ind} value={ind}>{ind}</option>)}
//                         </select>
//                         <svg viewBox="0 0 16 16" className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#94A3B8] pointer-events-none" fill="none" stroke="currentColor" strokeWidth="2">
//                           <path d="M4 6l4 4 4-4" />
//                         </svg>
//                       </div>
//                     </div>

//                     {/* Message — full width */}
//                     <div className="sm:col-span-2 flex flex-col gap-1">
//                       <label htmlFor="demo-message" className="text-[12.5px] font-semibold text-[#334155]">
//                         How can we help?{' '}
//                         <span className="text-[#94A3B8] font-normal">(Optional)</span>
//                       </label>
//                       <div className="relative">
//                         <MessageSquare size={14} className="absolute left-3 top-3.5 text-[#94A3B8]" />
//                         <textarea
//                           id="demo-message"
//                           name="message"
//                           value={form.message}
//                           onChange={handleChange}
//                           rows={3}
//                           placeholder="Tell us a bit about your current WhatsApp setup or what you are hoping to achieve…"
//                           className="w-full pl-8 pr-3 py-2.5 rounded-lg border border-[#E2E8F0] bg-white text-[13.5px] text-[#0F172A] placeholder-[#CBD5E1] outline-none resize-none transition-all hover:border-[#94A3B8] focus:ring-2 focus:ring-[#1A7FE8]/25 focus:border-[#1A7FE8]"
//                         />
//                       </div>
//                     </div>
//                   </div>

//                   {/* Submit */}
//                   <button
//                     id="book-demo-submit"
//                     type="submit"
//                     className="mt-5 w-full flex items-center justify-center gap-2 bg-[#1A7FE8] hover:bg-[#1569CA] active:scale-[0.98] text-white font-bold text-[15px] py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-blue-500/25 cursor-pointer"
//                   >
//                     Book My Demo
//                     <ArrowRight size={18} />
//                   </button>

//                   {/* Privacy note */}
//                   <p className="mt-3 text-center text-[11.5px] text-[#94A3B8] flex items-center justify-center gap-1">
//                     <Lock size={11} />
//                     By submitting this form, you agree to our{' '}
//                     <a href="/privacy-policy" className="text-[#1A7FE8] hover:underline font-medium">
//                       Privacy Policy
//                     </a>
//                     .
//                   </p>
//                 </form>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import React, { useState } from 'react';
import {
  User,
  Mail,
  Building2,
  Phone,
  Users,
  Briefcase,
  MessageSquare,
  ArrowRight,
  Lock,
  CheckCircle2,
  Presentation,
  Cpu,
  Puzzle,
  BotMessageSquare,
} from 'lucide-react';

const DEMO_FEATURES = [
  {
    icon: Presentation,
    title: 'Personalized Demo',
    desc: 'Tailored walkthrough focused on your use cases and business goals.',
  },
  {
    icon: BotMessageSquare,
    title: 'Automation Strategy',
    desc: 'Expert consultation for effective communication flows.',
  },
  {
    icon: Cpu,
    title: 'AI Walkthrough',
    desc: 'Explore intelligent routing and automated responses.',
  },
  {
    icon: Puzzle,
    title: 'Integration Discussion',
    desc: 'See how WABA Flow connects with your existing tech stack.',
  },
];

const COMPANY_SIZES = [
  '1–10 employees',
  '11–50 employees',
  '51–200 employees',
  '201–1,000 employees',
  '1,000+ employees',
];

const INDUSTRIES = [
  'E-Commerce & Retail',
  'Healthcare',
  'Finance & Banking',
  'Education',
  'Real Estate',
  'Travel & Hospitality',
  'Logistics & Supply Chain',
  'Other',
];

const INITIAL_FORM = {
  fullName: '',
  workEmail: '',
  company: '',
  phone: '',
  companySize: '',
  industry: '',
  message: '',
};

export default function BookDemoSection() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!form.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!form.workEmail.trim()) {
      newErrors.workEmail = 'Work email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.workEmail)) {
      newErrors.workEmail = 'Enter a valid email';
    }

    if (!form.company.trim()) {
      newErrors.company = 'Company name is required';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errs = validate();

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    setForm(INITIAL_FORM);
    setErrors({});
  };

  return (
    <section
      id="book-demo"
      aria-labelledby="book-demo-heading"
      className="
        relative w-full
        min-h-screen lg:h-screen
        overflow-hidden
        bg-gradient-to-br from-[#F5FAFF] via-white to-[#F1F9FF]
        px-4 sm:px-6
        py-8 sm:py-10 lg:py-6
      "
    >
      {/* Animated Background */}
      <div
        aria-hidden="true"
        className="
          absolute -top-40 -left-40
          w-[500px] h-[500px]
          rounded-full
          bg-[#3B82F6]/10
          blur-3xl
          animate-[floatGlow_8s_ease-in-out_infinite]
          pointer-events-none
        "
      />

      <div
        aria-hidden="true"
        className="
          absolute -bottom-40 -right-40
          w-[500px] h-[500px]
          rounded-full
          bg-[#25D366]/8
          blur-3xl
          animate-[floatGlow_10s_ease-in-out_infinite_reverse]
          pointer-events-none
        "
      />

      {/* Small decorative dots */}
      <div
        aria-hidden="true"
        className="
          absolute top-20 right-[42%]
          w-2 h-2 rounded-full
          bg-[#1A7FE8]/30
          animate-pulse
        "
      />

      <div
        aria-hidden="true"
        className="
          absolute bottom-16 left-[45%]
          w-1.5 h-1.5 rounded-full
          bg-[#25D366]/40
          animate-pulse
        "
      />

      <div
        className="
          relative z-10
          max-w-7xl mx-auto
          h-full
          flex items-center
        "
      >
        <div
          className="
            w-full
            grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr]
            gap-8 xl:gap-12
            items-center
          "
        >

          {/* ================= LEFT ================= */}
          <div className="flex flex-col justify-center">

            {/* Small label */}
            

            {/* Heading */}
            <h2
              id="book-demo-heading"
              className="
                text-4xl
                sm:text-5xl
                lg:text-[46px]
                xl:text-[52px]
                font-extrabold
                leading-[1.04]
                tracking-[-0.03em]
                text-[#0F172A]
                mb-4
                animate-[fadeUp_0.8s_ease-out]
              "
            >
              See What{' '}
              <span className="text-[#25D366]">
                WhatsApp
              </span>{' '}
              <span className="text-[#1A7FE8]">
                Automation
              </span>{' '}
              Can Do For Your Business
            </h2>

            {/* Description */}
            <p
              className="
                max-w-lg
                text-[14px]
                sm:text-[15px]
                text-[#64748B]
                leading-relaxed
                mb-6
                animate-[fadeUp_0.9s_ease-out]
              "
            >
              Discover how WABA Flow can streamline customer
              interactions, reduce operational overhead, and
              drive growth with intelligent automation.
            </p>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {DEMO_FEATURES.map(({ icon: Icon, title, desc }, index) => (
                <div
                  key={title}
                  style={{
                    animationDelay: `${0.15 + index * 0.1}s`,
                  }}
                  className="
                    group
                    flex items-start gap-3
                    rounded-xl
                    border border-[#E4EDF7]
                    bg-white/90
                    backdrop-blur-sm
                    p-3.5
                    shadow-[0_6px_20px_rgba(15,23,42,0.05)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-[0_12px_30px_rgba(26,127,232,0.12)]
                    hover:border-[#C9DFF5]
                    animate-[fadeUp_0.7s_ease-out_both]
                  "
                >
                  <div
                    className="
                      flex-shrink-0
                      w-9 h-9
                      rounded-lg
                      flex items-center justify-center
                      bg-[#EBF4FF]
                      transition-all
                      duration-300
                      group-hover:bg-[#1A7FE8]
                      group-hover:scale-110
                    "
                  >
                    <Icon
                      size={17}
                      className="
                        text-[#1A7FE8]
                        transition-colors
                        duration-300
                        group-hover:text-white
                      "
                    />
                  </div>

                  <div>
                    <p className="text-[13px] font-bold text-[#0F172A] mb-0.5">
                      {title}
                    </p>

                    <p className="text-[11.5px] text-[#64748B] leading-snug">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ================= RIGHT ================= */}
          <div
            className="
              w-full
              animate-[formEnter_0.9s_cubic-bezier(0.22,1,0.36,1)]
            "
          >
            <div
              className="
                relative
                bg-white
                rounded-2xl
                border border-[#E1ECF7]
                shadow-[0_20px_60px_rgba(15,23,42,0.10)]
                p-5
                sm:p-6
                lg:p-7
                transition-all
                duration-500
                hover:shadow-[0_25px_70px_rgba(26,127,232,0.13)]
              "
            >

              {/* Top subtle line */}
              <div
                className="
                  absolute top-0 left-8 right-8
                  h-[2px]
                  rounded-full
                  bg-gradient-to-r
                  from-transparent
                  via-[#1A7FE8]
                  to-transparent
                  opacity-60
                "
              />

              {submitted ? (
                /* SUCCESS */
                <div
                  className="
                    flex flex-col
                    items-center
                    justify-center
                    text-center
                    min-h-[420px]
                    animate-[fadeUp_0.5s_ease-out]
                  "
                >
                  <div
                    className="
                      w-16 h-16
                      rounded-full
                      bg-[#DCFCE7]
                      flex items-center justify-center
                      mb-4
                      animate-[successPop_0.5s_ease-out]
                    "
                  >
                    <CheckCircle2
                      size={36}
                      className="text-[#16A34A]"
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-[#0F172A]">
                    You're all set!
                  </h3>

                  <p className="text-[14px] text-[#64748B] max-w-sm mt-2">
                    Our team will reach out within 24 hours
                    to confirm your personalized demo.
                  </p>

                  <button
                    onClick={resetForm}
                    className="
                      mt-5
                      text-[13px]
                      font-semibold
                      text-[#1A7FE8]
                      hover:underline
                      cursor-pointer
                    "
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <>
                  {/* Header */}
                  <div
                    className="
                      mb-5
                      animate-[fadeUp_0.6s_ease-out]
                    "
                  >
                    <h3
                      className="
                        text-xl
                        sm:text-2xl
                        font-bold
                        text-[#0F172A]
                        tracking-tight
                      "
                    >
                      Let's Build Your Automation
                    </h3>

                    <p className="text-[12.5px] text-[#64748B] mt-1">
                      Tell us about your business and we'll tailor
                      the demo for you.
                    </p>
                  </div>

                  <form
                    onSubmit={handleSubmit}
                    noValidate
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3.5 gap-y-3.5">

                      {/* Full Name */}
                      <FormField
                        label="Full Name"
                        required
                        error={errors.fullName}
                      >
                        <Input
                          id="demo-fullName"
                          name="fullName"
                          value={form.fullName}
                          onChange={handleChange}
                          placeholder="Jane Doe"
                          icon={User}
                          error={errors.fullName}
                        />
                      </FormField>

                      {/* Email */}
                      <FormField
                        label="Work Email"
                        required
                        error={errors.workEmail}
                      >
                        <Input
                          id="demo-workEmail"
                          name="workEmail"
                          type="email"
                          value={form.workEmail}
                          onChange={handleChange}
                          placeholder="jane@company.com"
                          icon={Mail}
                          error={errors.workEmail}
                        />
                      </FormField>

                      {/* Company */}
                      <FormField
                        label="Company"
                        required
                        error={errors.company}
                      >
                        <Input
                          id="demo-company"
                          name="company"
                          value={form.company}
                          onChange={handleChange}
                          placeholder="Acme Corp"
                          icon={Building2}
                          error={errors.company}
                        />
                      </FormField>

                      {/* Phone */}
                      <FormField label="Phone Number">
                        <Input
                          id="demo-phone"
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 000-0000"
                          icon={Phone}
                        />
                      </FormField>

                      {/* Company Size */}
                      <FormField label="Company Size">
                        <SelectInput
                          id="demo-companySize"
                          name="companySize"
                          value={form.companySize}
                          onChange={handleChange}
                          icon={Users}
                          placeholder="Select size"
                          options={COMPANY_SIZES}
                        />
                      </FormField>

                      {/* Industry */}
                      <FormField label="Industry">
                        <SelectInput
                          id="demo-industry"
                          name="industry"
                          value={form.industry}
                          onChange={handleChange}
                          icon={Briefcase}
                          placeholder="Select industry"
                          options={INDUSTRIES}
                        />
                      </FormField>

                      {/* Message */}
                      <div className="sm:col-span-2">
                        <FormField label="How can we help?">
                          <div className="relative">
                            <MessageSquare
                              size={14}
                              className="
                                absolute
                                left-3
                                top-3.5
                                text-[#94A3B8]
                              "
                            />

                            <textarea
                              id="demo-message"
                              name="message"
                              value={form.message}
                              onChange={handleChange}
                              rows={2}
                              placeholder="Tell us a bit about your current setup or what you are hoping to achieve..."
                              className="
                                w-full
                                pl-8 pr-3
                                py-2.5
                                rounded-lg
                                border border-[#E2E8F0]
                                bg-white
                                text-[13px]
                                text-[#0F172A]
                                placeholder-[#CBD5E1]
                                outline-none
                                resize-none
                                transition-all
                                duration-200
                                hover:border-[#94A3B8]
                                focus:ring-2
                                focus:ring-[#1A7FE8]/20
                                focus:border-[#1A7FE8]
                              "
                            />
                          </div>
                        </FormField>
                      </div>
                    </div>

                    {/* Submit */}
                    <button
                      id="book-demo-submit"
                      type="submit"
                      className="
                        group
                        mt-4
                        w-full
                        flex
                        items-center
                        justify-center
                        gap-2
                        bg-[#1A7FE8]
                        hover:bg-[#1569CA]
                        text-white
                        font-bold
                        text-[14px]
                        py-3
                        rounded-xl
                        transition-all
                        duration-300
                        shadow-lg
                        shadow-blue-500/20
                        hover:shadow-blue-500/35
                        hover:-translate-y-0.5
                        active:scale-[0.98]
                        cursor-pointer
                      "
                    >
                      Book My Demo

                      <ArrowRight
                        size={17}
                        className="
                          transition-transform
                          duration-300
                          group-hover:translate-x-1
                        "
                      />
                    </button>

                    {/* Privacy */}
                    <p
                      className="
                        mt-2.5
                        text-center
                        text-[10.5px]
                        text-[#94A3B8]
                        flex
                        items-center
                        justify-center
                        gap-1
                      "
                    >
                      <Lock size={10} />

                      By submitting this form, you agree to our{' '}

                      <a
                        href="/privacy-policy"
                        className="
                          text-[#1A7FE8]
                          hover:underline
                          font-medium
                        "
                      >
                        Privacy Policy
                      </a>
                      .
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Component animations */}
      <style>{`
        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(18px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes formEnter {
          0% {
            opacity: 0;
            transform: translateX(30px) scale(0.98);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes floatGlow {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(25px, -20px) scale(1.08);
          }
        }

        @keyframes successPop {
          0% {
            opacity: 0;
            transform: scale(0.6);
          }
          70% {
            transform: scale(1.08);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}


/* ============================= */
/* Reusable Form Components       */
/* ============================= */

function FormField({
  label,
  required = false,
  error,
  children,
}) {
  return (
    <div className="flex flex-col gap-1">
      <label
        className="
          text-[11.5px]
          font-semibold
          text-[#334155]
        "
      >
        {label}

        {required && (
          <span className="text-red-500 ml-0.5">
            *
          </span>
        )}
      </label>

      {children}

      {error && (
        <p className="text-[10px] text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}


function Input({
  id,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  icon: Icon,
  error,
}) {
  return (
    <div className="relative">
      <Icon
        size={14}
        className="
          absolute
          left-3
          top-1/2
          -translate-y-1/2
          text-[#94A3B8]
          pointer-events-none
        "
      />

      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`
          w-full
          pl-8 pr-3
          py-2.5
          rounded-lg
          border
          text-[13px]
          text-[#0F172A]
          placeholder-[#CBD5E1]
          bg-white
          outline-none
          transition-all
          duration-200
          ${
            error
              ? 'border-red-400 bg-red-50'
              : 'border-[#E2E8F0] hover:border-[#94A3B8]'
          }
          focus:ring-2
          focus:ring-[#1A7FE8]/20
          focus:border-[#1A7FE8]
        `}
      />
    </div>
  );
}


function SelectInput({
  id,
  name,
  value,
  onChange,
  icon: Icon,
  placeholder,
  options,
}) {
  return (
    <div className="relative">
      <Icon
        size={14}
        className="
          absolute
          left-3
          top-1/2
          -translate-y-1/2
          text-[#94A3B8]
          pointer-events-none
        "
      />

      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className="
          w-full
          pl-8 pr-8
          py-2.5
          rounded-lg
          border border-[#E2E8F0]
          bg-white
          text-[13px]
          text-[#0F172A]
          outline-none
          appearance-none
          transition-all
          duration-200
          hover:border-[#94A3B8]
          focus:ring-2
          focus:ring-[#1A7FE8]/20
          focus:border-[#1A7FE8]
          cursor-pointer
        "
      >
        <option value="" disabled>
          {placeholder}
        </option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <svg
        viewBox="0 0 16 16"
        className="
          absolute
          right-3
          top-1/2
          -translate-y-1/2
          w-3.5 h-3.5
          text-[#94A3B8]
          pointer-events-none
        "
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M4 6l4 4 4-4" />
      </svg>
    </div>
  );
}