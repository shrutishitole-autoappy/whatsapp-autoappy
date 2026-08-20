import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
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
  GraduationCap,
  Mail,
  Calendar,
  MessageCircle,
  ClipboardCheck,
  ShoppingBasket,
  Utensils,
  Volleyball,
} from 'lucide-react';

// Floating orbital line icons positioned in an elevated rounded ring around the card perimeter
const orbitalElements = [
  { id: 'grad', icon: GraduationCap, label: 'Education', pos: '-top-4 sm:-top-5 left-[15%] sm:left-[18%]', delay: '0s' },
  { id: 'mail', icon: Mail, label: 'Mail', pos: '-top-4 sm:-top-5 right-[15%] sm:right-[18%]', delay: '0.4s' },
  { id: 'calendar', icon: Calendar, label: 'Calendar', pos: 'top-[24%] -left-3 sm:-left-4 lg:-left-5', delay: '0.8s' },
  { id: 'chat', icon: MessageCircle, label: 'Chat', pos: 'top-[24%] -right-3 sm:-right-4 lg:-right-5', delay: '1.2s' },
  { id: 'checklist', icon: ClipboardCheck, label: 'Tasks', pos: 'top-[64%] -left-3 sm:-left-4 lg:-left-5', delay: '1.6s' },
  { id: 'basket', icon: ShoppingBasket, label: 'Shopping', pos: 'top-[64%] -right-3 sm:-right-4 lg:-right-5', delay: '2.0s' },
  { id: 'dining', icon: Utensils, label: 'Dining', pos: '-bottom-4 sm:-bottom-5 left-[15%] sm:left-[18%]', delay: '2.4s' },
  { id: 'sports', icon: Volleyball, label: 'Sports', pos: '-bottom-4 sm:-bottom-5 right-[15%] sm:right-[18%]', delay: '2.8s' },
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
  const [isSwapped, setIsSwapped] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const handleStartChatting = (e) => {
    e.preventDefault();
    if (isAuthenticated) {
      navigate('/chat');
    } else {
      navigate('/login');
    }
  };

  const featureItems = [
    {
      icon: MessageSquare,
      title: 'Instant messaging',
      description: 'Real-time chat with no delays.',
      isDarkIcon: false,
    },
    {
      icon: ImageIcon,
      title: 'Media sharing',
      description: 'Send photos and videos securely.',
      isDarkIcon: false,
    },
    {
      icon: Mic2,
      title: 'Voice messages',
      description: 'Express more with your voice.',
      isDarkIcon: true,
    },
    {
      icon: SmilePlus,
      title: 'Emoji reactions',
      description: 'Quick responses to any message.',
      isDarkIcon: false,
    },
  ];

  return (
    <section id="messaging" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-[#f5f9fd] via-[#f8fbfe] to-[#edf5fc] relative overflow-hidden w-full max-w-full">
      {/* Background Soft Glow Orbs with Subtle Diffused Depth */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[min(900px,95vw)] h-[400px] bg-gradient-to-tr from-sky-200/25 via-blue-100/20 to-sky-100/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[min(600px,80vw)] h-[350px] bg-gradient-to-br from-blue-100/30 to-sky-200/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="section-container">
        {/* Top Centered Section Headline */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 lg:mb-12">
          <h2 className="section-heading text-theme-950">
            Simple messaging.
            <br />
            Powerful connections.
          </h2>
        </div>

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-center">
          
          {/* Left Column: Overlapping Dual iOS WhatsApp Phone Screens with Green Circular Backdrop */}
          <div className="lg:col-span-6 xl:col-span-5 flex justify-center items-center relative min-h-[440px] xs:min-h-[480px] sm:min-h-[520px] lg:min-h-[540px] w-full">
            
            {/* Green Atmospheric Circular Glow matching the reference */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(360px,85vw)] h-[min(360px,85vw)] sm:w-[420px] sm:h-[420px] bg-gradient-to-tr from-emerald-400/40 via-green-300/30 to-emerald-500/20 rounded-full blur-2xl pointer-events-none -z-0" />
            <div className="absolute top-8 -left-4 sm:-left-8 w-44 sm:w-56 h-44 sm:h-56 bg-emerald-500/30 rounded-full filter blur-xl pointer-events-none -z-0" />

            {/* Container for Overlapping Phones with 3D Perspective */}
            <div className="relative w-full max-w-[320px] xs:max-w-[380px] sm:max-w-[440px] md:max-w-[460px] h-[460px] xs:h-[490px] sm:h-[530px] flex items-center justify-center mx-auto [perspective:1200px] select-none">

              {/* ── PHONE A: Martha Craig Chat Conversation ── */}
              <div
                onClick={() => setIsSwapped((prev) => !prev)}
                className={`absolute w-[205px] xs:w-[245px] sm:w-[268px] md:w-[280px] lg:w-[270px] xl:w-[285px] h-[410px] xs:h-[450px] sm:h-[485px] md:h-[510px] lg:h-[495px] xl:h-[520px] rounded-[38px] sm:rounded-[44px] p-[2.5px] bg-gradient-to-b from-[#f1f5f9] via-[#94a3b8] to-[#64748b] cursor-pointer transition-all duration-800 ${
                  isSwapped
                    ? 'z-30 opacity-100 shadow-[0_30px_70px_rgba(15,23,42,0.32),0_0_0_1px_rgba(255,255,255,0.8)_inset]'
                    : 'z-10 opacity-92 hover:opacity-100 shadow-[0_15px_40px_rgba(0,0,0,0.18)]'
                }`}
                style={{
                  transform: isSwapped
                    ? 'translate3d(32px, 0px, 24px) rotateY(-3deg) rotateZ(0deg) scale(1)'
                    : 'translate3d(-38px, 14px, -24px) rotateY(6deg) rotateZ(-3deg) scale(0.94)',
                  transition: 'transform 800ms cubic-bezier(0.34, 1.2, 0.64, 1), opacity 700ms ease, box-shadow 800ms ease',
                  transformStyle: 'preserve-3d',
                }}
                title="Click to bring Martha's chat forward"
              >
                {/* Hardware buttons */}
                <div className="absolute -left-[4.5px] top-[80px] w-[3px] h-[20px] bg-slate-500 rounded-l-xs" />
                <div className="absolute -left-[4.5px] top-[110px] w-[3px] h-[36px] bg-slate-500 rounded-l-xs" />
                <div className="absolute -left-[4.5px] top-[155px] w-[3px] h-[36px] bg-slate-500 rounded-l-xs" />
                <div className="absolute -right-[4.5px] top-[100px] w-[3px] h-[55px] bg-slate-500 rounded-r-xs" />
                <div className="absolute -right-[4px] top-[210px] w-[2.5px] h-[32px] bg-slate-400 rounded-r-xs" />

                {/* Inner Frame */}
                <div className="relative w-full h-full rounded-[41px] sm:rounded-[47px] p-[2px] bg-slate-900 overflow-hidden flex flex-col shadow-inner">
                  
                  {/* Glass Sheen */}
                  <div className="absolute top-0 right-0 w-full h-36 bg-gradient-to-bl from-white/15 to-transparent pointer-events-none z-20 transform -skew-y-12" />

                  {/* Status Bar with Dynamic Island */}
                  <div className="bg-[#f0f2f5] px-3 sm:px-5 pt-2 sm:pt-2.5 pb-1 flex items-center justify-between text-[10px] sm:text-[11px] font-semibold text-slate-800 border-b border-slate-200/60 shrink-0 z-10">
                    <span>9:41</span>
                    {/* Dynamic Island */}
                    <div className="w-18 sm:w-22 h-4 sm:h-5 bg-black rounded-full flex items-center justify-between px-1.5 shadow-xs">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-800" />
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-900 shadow-[0_0_2px_#38bdf8]" />
                    </div>
                    <div className="flex items-center gap-1">
                      <Signal className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-slate-700" />
                      <Wifi className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-slate-700" />
                      <Battery className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-slate-700" />
                    </div>
                  </div>

                  {/* Back Phone Chat Header */}
                  <div className="bg-[#f0f2f5]/95 px-2.5 sm:px-3 py-1.5 sm:py-2 flex items-center justify-between border-b border-slate-200 shrink-0 z-10">
                    <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                      <ChevronLeft className="w-4 sm:w-5 h-4 sm:h-5 text-[#007aff] -ml-1 shrink-0" />
                      <img
                        src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=80"
                        alt="Martha Craig"
                        className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-cover shrink-0"
                      />
                      <div className="min-w-0">
                        <h5 className="text-xs sm:text-[13px] font-bold text-slate-900 leading-tight truncate">Martha Craig</h5>
                        <span className="text-[9px] sm:text-[10px] text-slate-500 block truncate">online</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-[#007aff] pr-1">
                      <Phone className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Chat Background with No Scrollbar */}
                  <div className="p-2 sm:p-3 space-y-2 sm:space-y-2.5 text-[10px] sm:text-[11px] flex-1 overflow-y-auto scrollbar-none [&::-webkit-scrollbar]:hidden bg-[#efeae2] bg-[radial-gradient(#d1c7b7_1px,transparent_1px)] [background-size:14px_14px]">
                    {/* Date Pill */}
                    <div className="flex justify-center my-0.5 sm:my-1">
                      <span className="bg-white/80 text-slate-600 text-[8px] sm:text-[9px] font-semibold px-2 py-0.5 rounded-md shadow-2xs">
                        Fri, Jul 26
                      </span>
                    </div>

                    {/* Outgoing Green Bubble */}
                    <div className="flex justify-end ml-auto max-w-[85%]">
                      <div className="bg-[#d9fdd3] text-slate-900 px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-lg rounded-tr-xs shadow-2xs break-words">
                        Good morning! ☀️
                      </div>
                    </div>

                    <div className="flex justify-end ml-auto max-w-[85%]">
                      <div className="bg-[#d9fdd3] text-slate-900 px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-lg rounded-tr-xs shadow-2xs break-words">
                        Japan looks amazing! 🎌
                      </div>
                    </div>

                    {/* Document Attachment */}
                    <div className="flex justify-end ml-auto max-w-[88%]">
                      <div className="bg-[#d9fdd3] text-slate-900 p-1.5 sm:p-2 rounded-lg rounded-tr-xs shadow-2xs flex items-center gap-1.5 sm:gap-2">
                        <FileText className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-sky-600 shrink-0" />
                        <div className="min-w-0">
                          <div className="font-semibold text-[9px] sm:text-[10px] truncate">Tokyo_Itinerary.pdf</div>
                          <div className="text-[7px] sm:text-[8px] text-slate-500">2.4 MB • PDF</div>
                        </div>
                      </div>
                    </div>

                    {/* Incoming White Bubble */}
                    <div className="flex justify-start max-w-[85%]">
                      <div className="bg-white text-slate-900 px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-lg rounded-tl-xs shadow-2xs break-words">
                        Do you know what time is it?
                        <div className="text-[7px] sm:text-[8px] text-slate-400 text-right mt-0.5">11:40</div>
                      </div>
                    </div>

                    {/* Outgoing Green Bubble */}
                    <div className="flex justify-end ml-auto max-w-[85%]">
                      <div className="bg-[#d9fdd3] text-slate-900 px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-lg rounded-tr-xs shadow-2xs break-words">
                        It's morning in Tokyo!
                      </div>
                    </div>

                    {/* Incoming White Bubble */}
                    <div className="flex justify-start max-w-[85%]">
                      <div className="bg-white text-slate-900 px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-lg rounded-tl-xs shadow-2xs break-words">
                        What is the most popular meal in Japan?
                        <div className="text-[7px] sm:text-[8px] text-slate-400 text-right mt-0.5">11:42</div>
                      </div>
                    </div>

                    {/* Outgoing Green Bubble */}
                    <div className="flex justify-end ml-auto max-w-[85%]">
                      <div className="bg-[#d9fdd3] text-slate-900 px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-lg rounded-tr-xs shadow-2xs break-words">
                        I think top two are Ramen & Sushi 🍣
                      </div>
                    </div>
                  </div>

                  {/* Home Indicator */}
                  <div className="bg-[#efeae2] pb-1.5 flex justify-center shrink-0">
                    <div className="w-20 h-1 bg-slate-400/70 rounded-full" />
                  </div>
                </div>
              </div>

              {/* ── PHONE B: WhatsApp Chats List Screen ── */}
              <div
                onClick={() => setIsSwapped((prev) => !prev)}
                className={`absolute w-[205px] xs:w-[245px] sm:w-[268px] md:w-[280px] lg:w-[270px] xl:w-[285px] h-[410px] xs:h-[450px] sm:h-[485px] md:h-[510px] lg:h-[495px] xl:h-[520px] rounded-[38px] sm:rounded-[44px] p-[2.5px] bg-gradient-to-b from-[#f1f5f9] via-[#94a3b8] to-[#64748b] cursor-pointer transition-all duration-800 ${
                  !isSwapped
                    ? 'z-30 opacity-100 shadow-[0_30px_70px_rgba(15,23,42,0.32),0_0_0_1px_rgba(255,255,255,0.8)_inset]'
                    : 'z-10 opacity-92 hover:opacity-100 shadow-[0_15px_40px_rgba(0,0,0,0.18)]'
                }`}
                style={{
                  transform: !isSwapped
                    ? 'translate3d(32px, 0px, 24px) rotateY(-3deg) rotateZ(0deg) scale(1)'
                    : 'translate3d(-38px, 14px, -24px) rotateY(6deg) rotateZ(-3deg) scale(0.94)',
                  transition: 'transform 800ms cubic-bezier(0.34, 1.2, 0.64, 1), opacity 700ms ease, box-shadow 800ms ease',
                  transformStyle: 'preserve-3d',
                }}
                title="Click to bring Chats screen forward"
              >
                {/* Hardware buttons */}
                <div className="absolute -left-[4.5px] top-[80px] w-[3px] h-[20px] bg-slate-500 rounded-l-xs" />
                <div className="absolute -left-[4.5px] top-[110px] w-[3px] h-[36px] bg-slate-500 rounded-l-xs" />
                <div className="absolute -left-[4.5px] top-[155px] w-[3px] h-[36px] bg-slate-500 rounded-l-xs" />
                <div className="absolute -right-[4.5px] top-[100px] w-[3px] h-[55px] bg-slate-500 rounded-r-xs" />
                <div className="absolute -right-[4px] top-[210px] w-[2.5px] h-[32px] bg-slate-400 rounded-r-xs" />

                {/* Inner Black OLED Bezel */}
                <div className="relative w-full h-full rounded-[41px] sm:rounded-[47px] p-[2px] bg-black overflow-hidden flex flex-col shadow-inner">
                  
                  {/* Glass Reflection */}
                  <div className="absolute top-0 right-0 w-full h-40 bg-gradient-to-bl from-white/20 to-transparent pointer-events-none z-30 transform -skew-y-12" />

                  {/* iOS Dynamic Island & Status Bar */}
                  <div className="bg-white px-3 sm:px-6 pt-2 sm:pt-2.5 pb-1 flex items-center justify-between text-[11px] sm:text-[12px] font-semibold text-slate-900 select-none shrink-0 z-20">
                    <span>9:41</span>
                    
                    {/* iPhone 17 Pro Dynamic Island */}
                    <div className="w-20 sm:w-24 h-5 sm:h-5.5 bg-black rounded-full flex items-center justify-between px-2 shadow-sm">
                      <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#111]" />
                      <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#0d1b2a] ring-[0.5px] ring-slate-800 flex items-center justify-center">
                        <div className="w-0.5 h-0.5 rounded-full bg-blue-500" />
                      </div>
                    </div>

                    <div className="flex items-center gap-1 sm:gap-1.5">
                      <span className="text-[9px] font-bold text-slate-900">5G</span>
                      <Signal className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-slate-900 stroke-[2.5]" />
                      <Wifi className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-slate-900 stroke-[2.5]" />
                      <div className="w-4 sm:w-5 h-2 sm:h-2.5 border border-slate-900 rounded-[3px] p-0.5 flex items-center">
                        <div className="w-full h-full bg-slate-900 rounded-[1px]" />
                      </div>
                    </div>
                  </div>

                  {/* Chats Nav Header */}
                  <div className="px-3 sm:px-4 py-1.5 bg-white flex items-center justify-between border-b border-slate-100 shrink-0 z-10">
                    <button className="text-[#007aff] text-xs sm:text-[15px] font-normal hover:opacity-75">
                      Edit
                    </button>
                    <h3 className="text-sm sm:text-[17px] font-bold text-slate-900">
                      Chats
                    </h3>
                    <button className="text-[#007aff] p-0.5 sm:p-1 hover:opacity-75">
                      <SquarePen className="w-3.5 sm:w-4.5 h-3.5 sm:h-4.5 stroke-[2.2]" />
                    </button>
                  </div>

                  {/* Broadcast Lists & New Group Subheader */}
                  <div className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white flex items-center justify-between text-xs sm:text-[14px] text-[#007aff] font-normal border-b border-slate-100/80 shrink-0 z-10">
                    <button className="hover:underline">Broadcast Lists</button>
                    <button className="hover:underline">New Group</button>
                  </div>

                  {/* Chat List Scrollable Body - SCROLLBAR REMOVED */}
                  <div className="flex-1 bg-white overflow-y-auto scrollbar-none [&::-webkit-scrollbar]:hidden divide-y divide-slate-100 text-xs select-none">
                    
                    {/* Row 0: Swiped Item Example */}
                    <div className="relative flex items-stretch bg-slate-50 overflow-hidden">
                      <div className="flex-1 p-2 sm:p-2.5 pl-3 sm:pl-4 flex items-center gap-2 sm:gap-3 bg-white min-w-0">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-600 text-xs shrink-0">
                          R
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h4 className="text-xs sm:text-[13px] font-bold text-slate-800 truncate">Randolph</h4>
                            <span className="text-[9px] sm:text-[10px] text-slate-400 shrink-0">11/19/19</span>
                          </div>
                          <p className="text-[10px] sm:text-[11px] text-slate-400 truncate">Team is awesome</p>
                        </div>
                      </div>

                      {/* Swipe Buttons */}
                      <div className="flex items-stretch shrink-0">
                        <button className="w-10 sm:w-12 bg-[#c7c7cc] text-white flex flex-col items-center justify-center gap-0.5 text-[9px] sm:text-[10px] font-medium">
                          <MoreHorizontal className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                          <span>More</span>
                        </button>
                        <button className="w-12 sm:w-14 bg-[#007aff] text-white flex flex-col items-center justify-center gap-0.5 text-[9px] sm:text-[10px] font-medium">
                          <Archive className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                          <span>Archive</span>
                        </button>
                      </div>
                    </div>

                    {/* Regular Chat Rows */}
                    {chatList.map((chat) => (
                      <div
                        key={chat.id}
                        className="px-3 sm:px-4 py-2 sm:py-2.5 flex items-center gap-2.5 sm:gap-3 hover:bg-slate-50/80 cursor-pointer transition-colors"
                      >
                        <div className="relative shrink-0">
                          <img
                            src={chat.avatar}
                            alt={chat.name}
                            className="w-8 h-8 sm:w-11 sm:h-11 rounded-full object-cover"
                          />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-0.5">
                            <h4 className="text-xs sm:text-[13px] font-bold text-slate-900 truncate">
                              {chat.name}
                            </h4>
                            <span className="text-[9px] sm:text-[10px] text-slate-400 shrink-0">
                              {chat.date}
                            </span>
                          </div>

                          <div className="flex items-center gap-1 text-[10px] sm:text-[11px] text-slate-500">
                            {chat.type === 'read-text' && (
                              <CheckCheck className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#34b7f1] shrink-0" />
                            )}
                            {chat.type === 'audio' && (
                              <Mic className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-emerald-600 shrink-0" />
                            )}
                            {chat.type === 'photo' && (
                              <Camera className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-slate-400 shrink-0" />
                            )}
                            <span className="truncate">{chat.message}</span>
                          </div>
                        </div>

                        <ChevronRight className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-slate-300 shrink-0" />
                      </div>
                    ))}
                  </div>

                  {/* Bottom iOS 5-Tab Navigation Bar */}
                  <div className="bg-[#f8f8f8] border-t border-slate-200 px-2 sm:px-4 py-1 sm:py-1.5 flex items-center justify-around text-[9px] sm:text-[10px] text-slate-400 shrink-0">
                    <button className="flex flex-col items-center gap-0.5 hover:text-slate-600">
                      <CircleDot className="w-4 sm:w-5 h-4 sm:h-5 stroke-[1.8]" />
                      <span>Status</span>
                    </button>

                    <button className="flex flex-col items-center gap-0.5 hover:text-slate-600">
                      <Phone className="w-4 sm:w-5 h-4 sm:h-5 stroke-[1.8]" />
                      <span>Calls</span>
                    </button>

                    <button className="flex flex-col items-center gap-0.5 hover:text-slate-600">
                      <Camera className="w-4 sm:w-5 h-4 sm:h-5 stroke-[1.8]" />
                      <span>Camera</span>
                    </button>

                    <button className="flex flex-col items-center gap-0.5 text-[#007aff] font-semibold">
                      <div className="relative">
                        <MessageSquare className="w-4 sm:w-5 h-4 sm:h-5 fill-[#007aff] stroke-[#007aff]" />
                        <span className="absolute -top-1 -right-1.5 w-3 sm:w-3.5 h-3 sm:h-3.5 bg-rose-500 text-white text-[7px] sm:text-[8px] font-bold rounded-full flex items-center justify-center">
                          3
                        </span>
                      </div>
                      <span>Chats</span>
                    </button>

                    <button className="flex flex-col items-center gap-0.5 hover:text-slate-600">
                      <Settings className="w-4 sm:w-5 h-4 sm:h-5 stroke-[1.8]" />
                      <span>Settings</span>
                    </button>
                  </div>

                  {/* Home Indicator Bar */}
                  <div className="bg-[#f8f8f8] pb-1.5 flex justify-center shrink-0">
                    <div className="w-24 sm:w-28 h-1 bg-slate-400 rounded-full" />
                  </div>

                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Dedicated Card surrounded by Rounded Moving Emojis */}
          <div className="lg:col-span-6 xl:col-span-7 relative flex flex-col justify-center w-full px-2 sm:px-4 lg:px-0">
            
            {/* Ambient Lighting Glow Behind Card */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-sky-200/30 via-blue-100/20 to-sky-100/30 rounded-[38px] sm:rounded-[46px] blur-2xl -z-10 pointer-events-none opacity-80" />

            {/* ── Surrounding Rounded Card with Orbiting Emoji Badges around its perimeter ── */}
            <div className="relative p-5 sm:p-7 lg:p-8 xl:p-10 rounded-[28px] sm:rounded-[36px] bg-white/95 backdrop-blur-xl border border-sky-100/80 shadow-[0_20px_50px_-12px_rgba(11,59,96,0.08),0_6px_18px_-4px_rgba(2,132,199,0.05),inset_0_1px_2px_rgba(255,255,255,0.95)] ring-1 ring-slate-900/[0.02] w-full">
              
              {/* 8 Floating line-style icon badges arranged in a rounded ring around the card perimeter */}
              {orbitalElements.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.id}
                    className={`absolute ${item.pos} z-20 pointer-events-auto transition-transform hover:scale-110 duration-300 hidden md:block`}
                    style={{ animationDelay: item.delay }}
                    title={item.label}
                  >
                    <div 
                      className="animate-float-gentle flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 lg:w-11 lg:h-11 xl:w-12 xl:h-12 rounded-xl sm:rounded-2xl bg-white border border-[#50B8E7]/30 shadow-[0_8px_20px_-4px_rgba(80,184,231,0.18),0_3px_8px_rgba(15,23,42,0.04),inset_0_1px_1px_rgba(255,255,255,1)] hover:shadow-[0_14px_28px_-4px_rgba(80,184,231,0.30),0_5px_12px_rgba(15,23,42,0.06)] hover:border-[#50B8E7]/60 transition-all duration-300 cursor-pointer"
                      style={{ animationDelay: item.delay }}
                    >
                      <Icon className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-[#50B8E7] stroke-[1.8]" />
                    </div>
                  </div>
                );
              })}

              {/* Title & Description */}
              <div className="space-y-3 sm:space-y-4">
                <h3 className="sub-heading text-theme-950">
                  Everything you need for better conversations.
                </h3>
                <p className="body-text">
                  Experience lightning-fast messaging that keeps you connected across any distance. Reliable, secure, and built for the modern pace of life.
                </p>
              </div>

              {/* 2x2 Feature Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-5 sm:gap-y-6 pt-5 sm:pt-6">
                {featureItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex items-start gap-3.5 group min-w-0">
                      <div
                        className={`w-11 h-11 sm:w-12 sm:h-12 rounded-[14px] flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-105 ${
                          item.isDarkIcon
                            ? 'bg-[#1e3a58] text-white shadow-[0_4px_14px_rgba(11,59,96,0.22)] group-hover:bg-[#162d45]'
                            : 'bg-sky-50/90 border border-sky-200/60 text-[#0284c7] shadow-[0_2px_8px_rgba(2,132,199,0.06)] group-hover:border-sky-300'
                        }`}
                      >
                        <Icon className="w-5 h-5 sm:w-5.5 sm:h-5.5 stroke-[2]" />
                      </div>

                      <div className="space-y-0.5 sm:space-y-1 min-w-0">
                        <h4 className="text-sm sm:text-[15px] font-bold text-slate-900 leading-snug break-words">
                          {item.title}
                        </h4>
                        <p className="text-xs sm:text-[13px] text-slate-500 leading-normal break-words">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* CTA Button */}
              <div className="pt-6 sm:pt-8 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={handleStartChatting}
                  className="px-5 lg:px-6 py-2 sm:py-2.5 rounded-full bg-primary hover:bg-primary-dark text-white text-[15px] font-semibold transition-all duration-200 shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap cursor-pointer"
                >
                  Start Chatting
                </button>
              </div>

              {/* Mobile-friendly Icon Strip */}
              <div className="md:hidden pt-5 border-t border-slate-100 mt-5">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Connected Activities
                </p>
                <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                  {orbitalElements.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.id}
                        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-white border border-[#50B8E7]/30 shadow-xs shrink-0"
                      >
                        <Icon className="w-4 h-4 text-[#50B8E7] stroke-[1.8]" />
                        <span className="text-xs font-medium text-slate-700">{item.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
