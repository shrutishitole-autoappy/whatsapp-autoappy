import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  SquarePen,
  MoreHorizontal,
  Archive,
  CheckCheck,
  Mic,
  Camera,
  CircleDot,
  Phone,
  Settings,
  MessageSquare,
  FileText,
  Wifi,
  Battery,
  Signal,
  Image as ImageIcon,
  Mic2,
  SmilePlus,
} from 'lucide-react';

// Floating emojis from the reference image placed in a rounded layout around the right text
const orbitalEmojis = [
  { id: 'grad', emoji: '🎓', label: 'Education', pos: '-top-5 left-12 lg:left-16', delay: '0s', color: 'text-purple-600' },
  { id: 'mail', emoji: '✉️', label: 'Mail', pos: '-top-5 right-12 lg:right-16', delay: '0.4s', color: 'text-indigo-600' },
  { id: 'chat', emoji: '💬', label: 'Chat', pos: 'top-1/4 -right-4 sm:-right-6', delay: '0.8s', color: 'text-emerald-600' },
  { id: 'basket', emoji: '🧺', label: 'Shopping', pos: 'top-2/3 -right-4 sm:-right-6', delay: '1.2s', color: 'text-amber-600' },
  { id: 'sports', emoji: '⚽', label: 'Sports', pos: '-bottom-5 right-12 lg:right-16', delay: '1.6s', color: 'text-blue-600' },
  { id: 'dining', emoji: '🍽️', label: 'Dining', pos: '-bottom-5 left-12 lg:left-16', delay: '2.0s', color: 'text-rose-600' },
  { id: 'checklist', emoji: '📋', label: 'Tasks', pos: 'top-2/3 -left-3 sm:-left-5', delay: '2.4s', color: 'text-violet-600' },
  { id: 'calendar', emoji: '📅', label: 'Calendar', pos: 'top-1/4 -left-3 sm:-left-5', delay: '2.8s', color: 'text-sky-600' },
];

const chatList = [
  {
    id: '1',
    name: 'Andrew Parker',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150',
    date: '11/16/19',
    type: 'read-text',
    message: 'What kind of strategy is better?',
  },
  {
    id: '2',
    name: 'Karen Castillo',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150',
    date: '11/15/19',
    type: 'audio',
    message: '0:14',
  },
  {
    id: '3',
    name: 'Maximillian Jacobson',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
    date: '10/30/19',
    type: 'read-text',
    message: 'Bro, I have a good idea!',
  },
  {
    id: '4',
    name: 'Martha Craig',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150',
    date: '10/28/19',
    type: 'photo',
    message: 'Photo',
  },
  {
    id: '5',
    name: 'Tabitha Potter',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150',
    date: '8/25/19',
    type: 'text',
    message: 'Actually I wanted to check with you about your online business plan on our...',
  },
  {
    id: '6',
    name: 'Maisy Humphrey',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=150',
    date: '8/20/19',
    type: 'read-text',
    message: 'Welcome, to make design process faster, look at Pixsellz',
  },
  {
    id: '7',
    name: 'Kieron Dotson',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150',
    date: '7/29/19',
    type: 'read-text',
    message: 'Ok, have a good trip!',
  },
];

export default function MessagingSection() {
  const featureItems = [
    {
      icon: MessageSquare,
      title: 'Instant messaging',
      description: 'Real-time chat with no delays.',
    },
    {
      icon: ImageIcon,
      title: 'Media sharing',
      description: 'Send photos and videos securely.',
    },
    {
      icon: Mic2,
      title: 'Voice messages',
      description: 'Express more with your voice.',
    },
    {
      icon: SmilePlus,
      title: 'Emoji reactions',
      description: 'Quick responses to any message.',
    },
  ];

  return (
    <section id="messaging" className="py-20 lg:py-28 bg-[#f8fbfe] relative overflow-hidden">
      {/* Background Soft Glow Orbs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-sky-200/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[300px] bg-blue-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Centered Section Headline */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0B3B60] tracking-tight leading-[1.12]">
            Simple messaging.
            <br />
            Powerful connections.
          </h2>
        </div>

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Overlapping Dual iOS WhatsApp Phone Screens with Green Circular Backdrop */}
          <div className="lg:col-span-6 flex justify-center items-center relative min-h-[580px] sm:min-h-[640px]">
            
            {/* Green Atmospheric Circular Glow matching the reference */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] sm:w-[500px] sm:h-[500px] bg-gradient-to-tr from-emerald-400/40 via-green-300/30 to-emerald-500/20 rounded-full blur-2xl pointer-events-none -z-0" />
            <div className="absolute top-8 -left-8 w-64 h-64 bg-emerald-500/30 rounded-full filter blur-xl pointer-events-none -z-0" />

            {/* Container for Overlapping Phones */}
            <div className="relative w-full max-w-[460px] h-[580px] sm:h-[620px] flex items-center justify-center">

              {/* ── BACK PHONE: Chat Conversation with Martha Craig ── */}
              <div className="absolute left-0 sm:-left-4 top-4 w-[280px] sm:w-[310px] h-[520px] sm:h-[560px] bg-[#efeae2] rounded-[36px] border-[5px] border-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.18)] overflow-hidden z-10 opacity-90 sm:opacity-95 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                
                {/* Back Phone Status Bar */}
                <div className="bg-[#f0f2f5]/90 backdrop-blur-xs px-5 pt-3 pb-1 flex items-center justify-between text-[11px] font-semibold text-slate-800 border-b border-slate-200/60">
                  <span>9:41</span>
                  <div className="flex items-center gap-1">
                    <Signal className="w-3 h-3 text-slate-700" />
                    <Wifi className="w-3 h-3 text-slate-700" />
                    <Battery className="w-3.5 h-3.5 text-slate-700" />
                  </div>
                </div>

                {/* Back Phone Chat Header */}
                <div className="bg-[#f0f2f5]/95 px-3 py-2 flex items-center gap-2 border-b border-slate-200">
                  <ChevronLeft className="w-5 h-5 text-[#007aff] -ml-1" />
                  <img
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=80"
                    alt="Martha Craig"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div>
                    <h5 className="text-[13px] font-bold text-slate-900 leading-tight">Martha Craig</h5>
                    <span className="text-[10px] text-slate-500 block">tap here for contact info</span>
                  </div>
                </div>

                {/* Chat Background with subtle WhatsApp wallpaper doodle pattern */}
                <div className="p-3 space-y-2.5 text-[11px] h-[calc(100%-88px)] overflow-hidden bg-[#efeae2] bg-[radial-gradient(#d1c7b7_1px,transparent_1px)] [background-size:14px_14px]">
                  {/* Date Pill */}
                  <div className="flex justify-center my-1">
                    <span className="bg-white/80 text-slate-600 text-[9px] font-semibold px-2.5 py-0.5 rounded-md shadow-2xs">
                      Fri, Jul 26
                    </span>
                  </div>

                  {/* Outgoing Green Bubble */}
                  <div className="flex justify-end ml-auto max-w-[85%]">
                    <div className="bg-[#d9fdd3] text-slate-900 px-2.5 py-1.5 rounded-lg rounded-tr-xs shadow-2xs">
                      Good morning!
                    </div>
                  </div>

                  <div className="flex justify-end ml-auto max-w-[85%]">
                    <div className="bg-[#d9fdd3] text-slate-900 px-2.5 py-1.5 rounded-lg rounded-tr-xs shadow-2xs">
                      Japan looks amazing! 🎌
                    </div>
                  </div>

                  {/* Document Attachment 1 */}
                  <div className="flex justify-end ml-auto max-w-[85%]">
                    <div className="bg-[#d9fdd3] text-slate-900 p-2 rounded-lg rounded-tr-xs shadow-2xs flex items-center gap-2">
                      <FileText className="w-4 h-4 text-sky-600" />
                      <div>
                        <div className="font-semibold text-[10px]">Tokyo_Itinerary.pdf</div>
                        <div className="text-[8px] text-slate-500">2.4 MB • PDF</div>
                      </div>
                    </div>
                  </div>

                  {/* Incoming White Bubble */}
                  <div className="flex justify-start max-w-[85%]">
                    <div className="bg-white text-slate-900 px-2.5 py-1.5 rounded-lg rounded-tl-xs shadow-2xs">
                      Do you know what time is it?
                      <div className="text-[8px] text-slate-400 text-right mt-0.5">11:40</div>
                    </div>
                  </div>

                  {/* Outgoing Green Bubble */}
                  <div className="flex justify-end ml-auto max-w-[85%]">
                    <div className="bg-[#d9fdd3] text-slate-900 px-2.5 py-1.5 rounded-lg rounded-tr-xs shadow-2xs">
                      It's morning in Tokyo!
                    </div>
                  </div>

                  {/* Incoming White Bubble */}
                  <div className="flex justify-start max-w-[85%]">
                    <div className="bg-white text-slate-900 px-2.5 py-1.5 rounded-lg rounded-tl-xs shadow-2xs">
                      What is the most popular meal in Japan?
                      <div className="text-[8px] text-slate-400 text-right mt-0.5">11:42</div>
                    </div>
                  </div>

                  <div className="flex justify-start max-w-[85%]">
                    <div className="bg-white text-slate-900 px-2.5 py-1.5 rounded-lg rounded-tl-xs shadow-2xs">
                      Do you like it?
                      <div className="text-[8px] text-slate-400 text-right mt-0.5">11:45</div>
                    </div>
                  </div>

                  {/* Outgoing Green Bubble */}
                  <div className="flex justify-end ml-auto max-w-[85%]">
                    <div className="bg-[#d9fdd3] text-slate-900 px-2.5 py-1.5 rounded-lg rounded-tr-xs shadow-2xs">
                      I think top two are Ramen & Sushi 🍣
                    </div>
                  </div>
                </div>
              </div>

              {/* ── FRONT PHONE: Main iOS WhatsApp Chats Screen ── */}
              <div className="absolute right-0 sm:-right-2 top-0 w-[290px] sm:w-[325px] h-[550px] sm:h-[590px] bg-white rounded-[38px] border-[6px] border-slate-900 shadow-[0_25px_60px_rgba(0,0,0,0.25)] overflow-hidden z-20 flex flex-col transform hover:scale-[1.02] transition-all duration-300">
                
                {/* iOS Dynamic Island / Top Notch Area & Status Bar */}
                <div className="bg-white px-6 pt-3 pb-1 flex items-center justify-between text-[12px] font-semibold text-slate-900 select-none">
                  <span>9:41</span>
                  <div className="flex items-center gap-1.5">
                    <Signal className="w-3.5 h-3.5 text-slate-900 stroke-[2.5]" />
                    <Wifi className="w-3.5 h-3.5 text-slate-900 stroke-[2.5]" />
                    <div className="w-5 h-2.5 border border-slate-900 rounded-[3px] p-0.5 flex items-center">
                      <div className="w-full h-full bg-slate-900 rounded-[1px]" />
                    </div>
                  </div>
                </div>

                {/* Chats Nav Header */}
                <div className="px-4 py-1.5 bg-white flex items-center justify-between border-b border-slate-100">
                  <button className="text-[#007aff] text-[15px] font-normal hover:opacity-75">
                    Edit
                  </button>
                  <h3 className="text-[17px] font-bold text-slate-900">
                    Chats
                  </h3>
                  <button className="text-[#007aff] p-1 hover:opacity-75">
                    <SquarePen className="w-4.5 h-4.5 stroke-[2.2]" />
                  </button>
                </div>

                {/* Broadcast Lists & New Group Subheader */}
                <div className="px-4 py-2 bg-white flex items-center justify-between text-[14px] text-[#007aff] font-normal border-b border-slate-100/80">
                  <button className="hover:underline">Broadcast Lists</button>
                  <button className="hover:underline">New Group</button>
                </div>

                {/* Chat List Scrollable Body */}
                <div className="flex-1 bg-white overflow-y-auto divide-y divide-slate-100 text-xs select-none">
                  
                  {/* Row 0: Swiped Item Example (Randolph with More & Archive action buttons) */}
                  <div className="relative flex items-stretch bg-slate-50 overflow-hidden">
                    <div className="flex-1 p-2.5 pl-4 flex items-center gap-3 bg-white">
                      <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-600 text-xs">
                        R
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h4 className="text-[13px] font-bold text-slate-800 truncate">Randolph</h4>
                          <span className="text-[10px] text-slate-400">11/19/19</span>
                        </div>
                        <p className="text-[11px] text-slate-400 truncate">Team is awesome</p>
                      </div>
                    </div>

                    {/* Swipe Buttons (More & Archive) matching the reference screenshot */}
                    <div className="flex items-stretch shrink-0">
                      <button className="w-12 bg-[#c7c7cc] text-white flex flex-col items-center justify-center gap-0.5 text-[10px] font-medium">
                        <MoreHorizontal className="w-4 h-4" />
                        <span>More</span>
                      </button>
                      <button className="w-14 bg-[#007aff] text-white flex flex-col items-center justify-center gap-0.5 text-[10px] font-medium">
                        <Archive className="w-4 h-4" />
                        <span>Archive</span>
                      </button>
                    </div>
                  </div>

                  {/* Regular Chat Rows */}
                  {chatList.map((chat) => (
                    <div
                      key={chat.id}
                      className="px-4 py-2.5 flex items-center gap-3 hover:bg-slate-50/80 cursor-pointer transition-colors"
                    >
                      <div className="relative shrink-0">
                        <img
                          src={chat.avatar}
                          alt={chat.name}
                          className="w-11 h-11 rounded-full object-cover"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-0.5">
                          <h4 className="text-[13px] font-bold text-slate-900 truncate">
                            {chat.name}
                          </h4>
                          <span className="text-[10px] text-slate-400">
                            {chat.date}
                          </span>
                        </div>

                        <div className="flex items-center gap-1 text-[11px] text-slate-500">
                          {chat.type === 'read-text' && (
                            <CheckCheck className="w-3.5 h-3.5 text-[#34b7f1] shrink-0" />
                          )}
                          {chat.type === 'audio' && (
                            <Mic className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          )}
                          {chat.type === 'photo' && (
                            <Camera className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          )}
                          <span className="truncate">{chat.message}</span>
                        </div>
                      </div>

                      <ChevronRight className="w-4 h-4 text-slate-300 shrink-0" />
                    </div>
                  ))}
                </div>

                {/* Bottom iOS 5-Tab Navigation Bar */}
                <div className="bg-[#f8f8f8] border-t border-slate-200 px-4 py-1.5 flex items-center justify-around text-[10px] text-slate-400">
                  <button className="flex flex-col items-center gap-0.5 hover:text-slate-600">
                    <CircleDot className="w-5 h-5 stroke-[1.8]" />
                    <span>Status</span>
                  </button>

                  <button className="flex flex-col items-center gap-0.5 hover:text-slate-600">
                    <Phone className="w-5 h-5 stroke-[1.8]" />
                    <span>Calls</span>
                  </button>

                  <button className="flex flex-col items-center gap-0.5 hover:text-slate-600">
                    <Camera className="w-5 h-5 stroke-[1.8]" />
                    <span>Camera</span>
                  </button>

                  <button className="flex flex-col items-center gap-0.5 text-[#007aff] font-semibold">
                    <div className="relative">
                      <MessageSquare className="w-5 h-5 fill-[#007aff] stroke-[#007aff]" />
                      <span className="absolute -top-1 -right-1.5 w-3.5 h-3.5 bg-rose-500 text-white text-[8px] font-bold rounded-full flex items-center justify-center">
                        3
                      </span>
                    </div>
                    <span>Chats</span>
                  </button>

                  <button className="flex flex-col items-center gap-0.5 hover:text-slate-600">
                    <Settings className="w-5 h-5 stroke-[1.8]" />
                    <span>Settings</span>
                  </button>
                </div>

              </div>

            </div>

          </div>

          {/* Right Column: Dedicated Card surrounded by Rounded Moving Emojis */}
          <div className="lg:col-span-6 relative flex flex-col justify-center">
            
            {/* ── Surrounding Rounded Card with Orbiting Emoji Badges around its perimeter ── */}
            <div className="relative p-6 sm:p-9 lg:p-10 rounded-[36px] bg-white/80 border border-sky-100/90 shadow-[0_15px_45px_-10px_rgba(11,59,96,0.08)] backdrop-blur-sm">
              
              {/* 8 Moving / Floating Emojis arranged in a rounded ring around the card perimeter */}
              {orbitalEmojis.map((item) => (
                <div
                  key={item.id}
                  className={`absolute ${item.pos} z-20 pointer-events-auto transition-transform hover:scale-125 duration-200 hidden sm:block`}
                  style={{ animationDelay: item.delay }}
                  title={item.label}
                >
                  <div 
                    className="animate-float-gentle flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-white shadow-[0_6px_20px_rgba(11,59,96,0.12)] border border-slate-100 hover:border-sky-300 hover:shadow-[0_10px_25px_rgba(2,132,199,0.25)] transition-all cursor-pointer"
                    style={{ animationDelay: item.delay }}
                  >
                    <span className="text-xl sm:text-2xl select-none filter drop-shadow-xs">
                      {item.emoji}
                    </span>
                  </div>
                </div>
              ))}

              {/* Title & Description */}
              <div className="space-y-4">
                <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Everything you need for better conversations.
                </h3>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                  Experience lightning-fast messaging that keeps you connected across any distance. Reliable, secure, and built for the modern pace of life.
                </p>
              </div>

              {/* 2x2 Feature Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-7 pt-6">
                {featureItems.map(({ icon: Icon, title, description }) => (
                  <div key={title} className="flex items-start gap-3.5 group">
                    <div className="w-11 h-11 rounded-xl bg-sky-50 border border-sky-100/80 flex items-center justify-center shrink-0 text-[#0284c7] group-hover:bg-[#0B3B60] group-hover:border-[#0B3B60] group-hover:text-white transition-all duration-300 shadow-2xs">
                      <Icon className="w-5 h-5 transition-colors duration-300" />
                    </div>

                    <div className="space-y-1">
                      <h4 className="text-[15px] font-bold text-slate-900 leading-snug">
                        {title}
                      </h4>
                      <p className="text-[13px] text-slate-500 leading-normal">
                        {description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="pt-8 flex items-center gap-4">
                <a
                  href="#start-chatting"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#0284c7] to-[#38bdf8] text-white font-semibold text-sm shadow-md shadow-sky-500/25 hover:shadow-lg hover:shadow-sky-500/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                >
                  Start Chatting
                </a>
              </div>

              {/* Mobile-friendly Emoji Strip */}
              <div className="sm:hidden pt-6 border-t border-slate-100 mt-6">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Connected Activities
                </p>
                <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                  {orbitalEmojis.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs shrink-0"
                    >
                      <span className="text-base">{item.emoji}</span>
                      <span className="text-xs font-medium text-slate-700">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
