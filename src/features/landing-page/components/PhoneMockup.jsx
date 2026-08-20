import React, { useState, useEffect, useRef } from 'react';
import {
  Wifi,
  Battery,
  MoreVertical,
  Plus,
  Mic,
  Send,
  CheckCheck,
  Phone,
  Video,
  ChevronLeft,
  Camera,
  Smile,
  Paperclip,
  Check,
  Music,
  Radio,
  PhoneCall,
  Volume2,
  Settings,
  CheckCircle2,
  UserPlus
} from 'lucide-react';

export default function PhoneMockup() {
  const [messages, setMessages] = useState([
    { type: 'message', id: 1, sender: 'me', text: "Hi, I'd like to track my recent order #12345.", time: '10:42', msgType: 'sent', status: 'read' },
    { type: 'badge', id: 2, position: 'center', icon: 'Settings', text: 'AI INTENT RECOGNITION', color: 'blue' },
    { type: 'message', id: 3, sender: 'Autoappy Support', text: "Hello! 👋 I found your order. It's currently out for delivery and should arrive by 5 PM today.\n\nIs there anything else I can help you with regarding this order?", time: '10:42', msgType: 'received', buttons: ['Change Delivery Address', 'Contact Driver'] },
    { type: 'message', id: 5, sender: 'me', text: 'Thanks!', time: '10:45', msgType: 'sent', status: 'read' }
  ]);

  const [inputVal, setInputVal] = useState('');
  const [isShrutiTyping, setIsShrutiTyping] = useState(false);
  const [dynamicIslandState, setDynamicIslandState] = useState('normal'); // 'normal', 'call', 'music'
  const [showAttachMenu, setShowAttachMenu] = useState(false);
  const [activeReaction, setActiveReaction] = useState(null);
  const [currentTime, setCurrentTime] = useState('9:41');
  const chatContainerRef = useRef(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: false })
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 30000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, isShrutiTyping]);

  const handleSendMessage = (e) => {
    e?.preventDefault();
    if (!inputVal.trim()) return;

    const timeStr = new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true });
    const newMsg = {
      type: 'message',
      id: Date.now(),
      sender: 'me',
      text: inputVal,
      time: timeStr,
      msgType: 'sent',
      status: 'read'
    };

    setMessages((prev) => [...prev, newMsg]);
    setInputVal('');
    setShowAttachMenu(false);

    // Dynamic Island notification effect
    setDynamicIslandState('normal');

    // Simulate automatic live response
    setTimeout(() => {
      setIsShrutiTyping(true);
    }, 600);

    setTimeout(() => {
      setIsShrutiTyping(false);
      const replyMsg = {
        type: 'message',
        id: Date.now() + 1,
        sender: 'Autoappy Support',
        text: "I'm here to help! Let me know if you need anything else.",
        time: new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true }),
        msgType: 'received'
      };
      setMessages((prev) => [...prev, replyMsg]);
    }, 2000);
  };

  const toggleDynamicIsland = () => {
    if (dynamicIslandState === 'normal') {
      setDynamicIslandState('call');
    } else if (dynamicIslandState === 'call') {
      setDynamicIslandState('music');
    } else {
      setDynamicIslandState('normal');
    }
  };

  return (
    <div className="relative mx-auto w-full select-none py-1">
      
      {/* ── AMBIENT ELEVATION SHADOW (Natural Soft Blur) ── */}
      <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-[88%] h-8 bg-slate-950/25 blur-xl rounded-full pointer-events-none -z-10" />
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[70%] h-4 bg-slate-900/35 blur-md rounded-full pointer-events-none -z-10" />

      {/* ── SLIM MODERN SMARTPHONE HARDWARE CHASSIS (Matches Reference) ── */}
      {/* Ultra-thin dark graphite/metallic frame with subtle specular edge */}
      <div className="relative rounded-[36px] sm:rounded-[40px] p-[2.5px] bg-[linear-gradient(90deg,#0a0c10_0%,#1a1d24_3%,#3a404c_6%,#7a8494_10%,#d5dbe4_13%,#1a1d24_17%,#0f1217_83%,#d5dbe4_87%,#7a8494_90%,#3a404c_94%,#1a1d24_97%,#0a0c10_100%)] shadow-[0_25px_50px_-12px_rgba(15,23,42,0.35),0_10px_20px_-8px_rgba(0,0,0,0.2),0_0_0_1px_rgba(15,23,42,0.7)] transition-transform duration-300 hover:scale-[1.01]">
        
        {/* Inner Midnight Black Bezel with Tactile Metallic Inset */}
        <div className="relative rounded-[33.5px] sm:rounded-[37.5px] p-[2.5px] bg-[#0c0e12] shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.35),inset_0_-1px_1.5px_rgba(0,0,0,0.9),inset_1px_0_1.5px_rgba(255,255,255,0.1),inset_-1px_0_1.5px_rgba(0,0,0,0.6)]">
          
          {/* HARDWARE BUTTONS (Right Side: Power & Volume Rocker) */}
          {/* Volume Rocker (Right Side) */}
          <div
            title="Volume Rocker"
            className="absolute -right-[4.5px] top-[105px] w-[2.5px] h-[54px] bg-gradient-to-l from-[#71717a] via-[#3f3f46] to-[#18181b] rounded-r-xs shadow-[0_1px_2px_rgba(0,0,0,0.5)]"
          />
          {/* Power Button (Right Side) */}
          <div
            title="Power Key"
            className="absolute -right-[4.5px] top-[175px] w-[2.5px] h-[34px] bg-gradient-to-l from-[#71717a] via-[#3f3f46] to-[#18181b] rounded-r-xs shadow-[0_1px_2px_rgba(0,0,0,0.5)] cursor-pointer"
          />

          {/* Left Side: Mute / Action Key */}
          <div
            onClick={() => setDynamicIslandState((prev) => (prev === 'call' ? 'normal' : 'call'))}
            title="Action Key"
            className="absolute -left-[4.5px] top-[115px] w-[2.5px] h-[26px] bg-gradient-to-r from-[#71717a] via-[#3f3f46] to-[#18181b] rounded-l-xs shadow-[0_1px_2px_rgba(0,0,0,0.5)] cursor-pointer active:translate-x-[0.5px]"
          />

          {/* OLED DISPLAY CONTAINER (Slim rectangular with restrained corner radius) */}
          <div className="phone-screen relative bg-[#efeae2] rounded-[31px] sm:rounded-[35px] overflow-hidden flex flex-col shadow-[inset_0_0_0_1px_#05080e,inset_0_0_6px_rgba(0,0,0,0.5)]">
            
            {/* Subtle Glass Specular Light Sheen */}
            <div className="absolute top-0 right-0 w-full h-[180px] bg-gradient-to-bl from-white/[0.14] via-white/[0.03] to-transparent pointer-events-none z-30 transform -skew-y-12" />

            {/* Micro Speaker Ear-piece Grille (Top Center) */}
            <div className="absolute top-[5px] left-1/2 -translate-x-1/2 w-11 h-[3px] bg-[#12151b] rounded-full z-40 border-b border-white/[0.08]" />

            {/* ── STATUS BAR & TOP CAMERA AREA ── */}
            <div className="relative pt-2 px-5 pb-1 flex items-center justify-between bg-[#f0f2f5]/95 backdrop-blur-md text-slate-900 z-40 shrink-0 select-none border-b border-slate-200/40">
              
              {/* Left: Clock */}
              <span className="text-[11.5px] sm:text-[12px] font-semibold tracking-tight text-slate-900 w-10 pl-0.5">
                {currentTime}
              </span>

              {/* Center: Sleek Camera / Activity Pill */}
              <div
                onClick={toggleDynamicIsland}
                className={`group relative bg-black text-white rounded-full flex items-center justify-between cursor-pointer transition-all duration-300 shadow-[0_1px_6px_rgba(0,0,0,0.3)] ring-1 ring-white/10 ${
                  dynamicIslandState === 'call'
                    ? 'w-36 sm:w-40 h-6 px-2'
                    : dynamicIslandState === 'music'
                    ? 'w-32 sm:w-36 h-6 px-2'
                    : 'w-20 sm:w-22 h-5 px-1.5'
                }`}
                title="Tap to toggle live status"
              >
                {/* Default State: Camera punch-hole */}
                {dynamicIslandState === 'normal' && (
                  <>
                    <div className="w-2 h-2 rounded-full bg-[#0a0a0a] flex items-center justify-center">
                      <div className="w-0.5 h-0.5 rounded-full bg-[#1e293b]/70" />
                    </div>
                    <div className="w-2 h-2 rounded-full bg-[#070b14] ring-[0.6px] ring-[#1e293b] flex items-center justify-center">
                      <div className="w-0.5 h-0.5 rounded-full bg-blue-900/90 shadow-[0_0_2px_#38bdf8]" />
                    </div>
                  </>
                )}

                {/* Active Call Pill */}
                {dynamicIslandState === 'call' && (
                  <div className="flex items-center justify-between w-full text-[9px] font-medium text-white">
                    <div className="flex items-center gap-1 text-emerald-400">
                      <PhoneCall className="w-2.5 h-2.5 animate-pulse" />
                      <span className="text-white text-[9px] font-semibold">Shruti</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-[8.5px] text-emerald-400 font-mono">03:42</span>
                      <div className="flex gap-[1.5px] items-end h-2 ml-0.5">
                        <span className="w-[1.5px] h-1.5 bg-emerald-400 rounded-full animate-sound-bar-1" />
                        <span className="w-[1.5px] h-2 bg-emerald-400 rounded-full animate-sound-bar-2" />
                      </div>
                    </div>
                  </div>
                )}

                {/* Active Music Pill */}
                {dynamicIslandState === 'music' && (
                  <div className="flex items-center justify-between w-full text-[9px] text-white">
                    <div className="flex items-center gap-1 text-sky-400">
                      <Music className="w-2.5 h-2.5" />
                      <span className="text-white text-[8.5px] truncate max-w-[55px]">Voice Note</span>
                    </div>
                    <div className="flex gap-[1.5px] items-end h-2">
                      <span className="w-[1.5px] h-2 bg-sky-400 rounded-full animate-sound-bar-1" />
                      <span className="w-[1.5px] h-2.5 bg-sky-400 rounded-full animate-sound-bar-3" />
                    </div>
                  </div>
                )}
              </div>

              {/* Right: Signal, 5G, Battery Pill */}
              <div className="flex items-center gap-1 text-slate-900 w-12 justify-end">
                <span className="text-[8.5px] font-extrabold text-slate-800 tracking-tighter">5G</span>
                <Wifi className="w-3 h-3 text-slate-900 stroke-[2.2]" />
                
                {/* Battery Icon */}
                <div className="w-[18px] h-[9px] border-[1px] border-slate-900 rounded-[2.5px] p-[1px] flex items-center relative">
                  <div className="w-[85%] h-full bg-slate-900 rounded-[1px]" />
                  <div className="absolute -right-[2px] top-[2px] w-[1px] h-[3px] bg-slate-900 rounded-r-[0.5px]" />
                </div>
              </div>
            </div>

            {/* ── WHATSAPP HEADER (iOS/Android Native Style) ── */}
            <div className="px-3 py-2 bg-white/95 backdrop-blur-md border-b border-slate-200/80 flex items-center justify-between z-30 shrink-0 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
              <div className="flex items-center gap-1 min-w-0">
                {/* Back Button */}
                <button className="flex items-center text-primary hover:opacity-80 transition-opacity -ml-1 pr-0.5 shrink-0">
                  <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
                </button>

                {/* Contact Profile & Info */}
                <div className="flex items-center gap-1.5 cursor-pointer hover:opacity-90 min-w-0">
                  <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden shrink-0 shadow-2xs bg-white ring-1 ring-slate-200">
                    <img
                      src="/logo/autoappy_robot.jpg"
                      alt="Autoappy Support"
                      className="w-full h-full object-contain"
                    />
                    <div className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-500 ring-1.5 ring-white" />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-xs sm:text-[12.5px] font-bold text-slate-900 leading-tight truncate">
                      Autoappy Support
                    </h3>
                    <span className="text-[9.5px] text-slate-500 font-medium block leading-none mt-0.5 truncate">
                      {isShrutiTyping ? (
                        <span className="text-primary font-semibold animate-pulse">typing...</span>
                      ) : (
                        'Typically replies instantly'
                      )}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Icons */}
              <div className="flex items-center gap-2 text-slate-600 shrink-0">
                <button className="p-1 hover:bg-slate-100 rounded-full transition-colors">
                  <MoreVertical className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* ── CHAT WALLPAPER & MESSAGES BODY ── */}
            <div
              ref={chatContainerRef}
              className="flex-1 p-2.5 sm:p-3 space-y-2.5 overflow-y-auto scrollbar-none [&::-webkit-scrollbar]:hidden font-sans text-xs relative scroll-smooth bg-[#efeae2]"
              style={{
                backgroundImage: "url('/chat-wallpaper.jpg')",
                backgroundSize: '320px auto',
                backgroundRepeat: 'repeat',
                backgroundPosition: 'center top',
              }}
            >
              
              {/* AI Agent Active Badge */}
              <div className="flex justify-end my-0.5">
                <div className="flex items-center gap-1.5 px-2 py-0.5 bg-white/95 backdrop-blur-sm rounded-full shadow-2xs border border-slate-200/60">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_3px_rgba(16,185,129,0.5)]" />
                  <span className="text-[9px] font-bold text-slate-700">AI Agent Active</span>
                </div>
              </div>

              {/* Date Badge */}
              <div className="text-center my-1">
                <span className="inline-block px-2.5 py-0.5 bg-white/90 backdrop-blur-sm border border-slate-200/60 rounded-full text-[9.5px] font-semibold text-slate-600 shadow-2xs">
                  Today
                </span>
              </div>

              {/* Chat Messages */}
              {messages.map((item) => {
                if (item.type === 'badge') {
                  return (
                    <div key={item.id} className={`flex ${item.position === 'center' ? 'justify-center' : item.position === 'right' ? 'justify-end' : 'justify-start'} my-1.5`}>
                      <div className={`flex items-center gap-1 px-2.5 py-1 bg-white/95 backdrop-blur-sm rounded-full shadow-2xs border border-slate-200/80 ${item.color === 'blue' ? 'bg-theme-50/95 border-theme-200' : ''}`}>
                        {item.icon === 'Settings' && <Settings className="w-3 h-3 text-primary" />}
                        {item.icon === 'CheckCircle' && <CheckCircle2 className="w-3 h-3 text-primary" />}
                        {item.icon === 'UserPlus' && <UserPlus className="w-3 h-3 text-orange-600" />}
                        <span className={`text-[9px] font-bold tracking-wide ${item.color === 'blue' ? 'text-primary' : 'text-slate-700'}`}>
                          {item.text}
                        </span>
                      </div>
                    </div>
                  );
                }

                const isSent = item.msgType === 'sent';
                return (
                  <div
                    key={item.id}
                    className={`flex flex-col ${
                      isSent ? 'items-end ml-auto max-w-[88%]' : 'items-start max-w-[88%]'
                    } animate-in fade-in slide-in-from-bottom-2 duration-300`}
                  >
                    <div
                      className={`relative px-3 py-2 rounded-2xl text-[11px] sm:text-[11.5px] leading-relaxed shadow-[0_1px_2px_rgba(0,0,0,0.06)] ${
                        isSent
                          ? 'bg-[#e2f7cb] text-slate-900 rounded-br-xs border border-[#d2edb8]/70'
                          : 'bg-white text-slate-900 rounded-bl-xs border border-slate-200/70'
                      }`}
                    >
                      <p className="break-words whitespace-pre-wrap">{item.text}</p>
                      
                      {item.buttons && (
                        <div className="mt-2.5 flex flex-col gap-1.5 w-full">
                          {item.buttons.map((btn, idx) => (
                            <button key={idx} className="w-full py-1.5 px-2.5 bg-[#f0f2f5] hover:bg-[#e4e6e9] text-primary font-semibold text-[10.5px] rounded-lg transition-colors border border-slate-200/80 shadow-2xs">
                              {btn}
                            </button>
                          ))}
                        </div>
                      )}

                      {/* Timestamp & Read Receipts */}
                      <div className={`flex items-center justify-end gap-1 mt-0.5 text-[8.5px] ${isSent ? 'text-emerald-700' : 'text-slate-400'}`}>
                        <span>{item.time}</span>
                        {isSent && (
                          <CheckCheck className={`w-3 h-3 ${item.status === 'read' ? 'text-secondary' : 'text-slate-400'} stroke-[2.2]`} />
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Typing Bubble */}
              {isShrutiTyping && (
                <div className="flex items-center gap-1 bg-white border border-slate-200/80 text-slate-500 px-2.5 py-1.5 rounded-2xl rounded-bl-xs w-fit shadow-2xs animate-in fade-in duration-200">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" />
                  <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              )}
            </div>

            {/* ── ATTACHMENT POPUP ── */}
            {showAttachMenu && (
              <div className="absolute bottom-14 left-2.5 right-2.5 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 border border-slate-200/80 shadow-xl z-50 animate-in fade-in slide-in-from-bottom-3 duration-200 grid grid-cols-4 gap-1.5 text-center text-[9.5px] text-slate-700">
                <button onClick={() => { setInputVal('Sent a photo 📷'); setShowAttachMenu(false); }} className="flex flex-col items-center gap-1 hover:opacity-80">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shadow-sm"><Camera className="w-3.5 h-3.5" /></div>
                  <span>Photos</span>
                </button>
                <button onClick={() => { setInputVal('Sent a document 📄'); setShowAttachMenu(false); }} className="flex flex-col items-center gap-1 hover:opacity-80">
                  <div className="w-8 h-8 rounded-full bg-theme-700 text-white flex items-center justify-center shadow-sm"><Paperclip className="w-3.5 h-3.5" /></div>
                  <span>Document</span>
                </button>
                <button onClick={() => { setInputVal('Shared Location 📍'); setShowAttachMenu(false); }} className="flex flex-col items-center gap-1 hover:opacity-80">
                  <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-sm"><Radio className="w-3.5 h-3.5" /></div>
                  <span>Location</span>
                </button>
                <button onClick={() => { setInputVal('Voice Note 🎙️'); setShowAttachMenu(false); }} className="flex flex-col items-center gap-1 hover:opacity-80">
                  <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center shadow-sm"><Mic className="w-3.5 h-3.5" /></div>
                  <span>Audio</span>
                </button>
              </div>
            )}

            {/* ── WHATSAPP INPUT BAR ── */}
            <form
              onSubmit={handleSendMessage}
              className="p-2 bg-[#f5f6f6] border-t border-slate-200/90 flex items-center gap-1.5 shrink-0 z-30"
            >
              {/* '+' Attach button */}
              <button
                type="button"
                onClick={() => setShowAttachMenu(!showAttachMenu)}
                className="w-7 h-7 rounded-full border border-slate-300 flex items-center justify-center text-slate-500 hover:bg-slate-200/70 shrink-0 bg-white shadow-2xs"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>

              {/* Text Input Pill */}
              <div className="flex-1 flex items-center bg-white rounded-full px-3 py-1 border border-slate-200 shadow-2xs">
                <input
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 min-w-0 bg-transparent text-slate-900 placeholder:text-slate-400 text-[11px] focus:outline-none"
                />
                <button
                  type="button"
                  className="text-slate-400 hover:text-slate-600 ml-0.5"
                >
                  <Mic className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Send Action */}
              <button
                type="submit"
                className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shadow-sm hover:bg-primary-dark transition-transform active:scale-90 shrink-0"
              >
                <Send className="w-3.5 h-3.5 ml-0.5" />
              </button>
            </form>

            {/* ── BOTTOM GESTURE / HOME INDICATOR ── */}
            <div className="w-full bg-[#f0f2f5] pb-1 pt-0.5 flex justify-center shrink-0 border-t border-slate-200/30">
              <div className="w-24 sm:w-28 h-[3.5px] bg-slate-400/80 rounded-full cursor-pointer hover:bg-slate-600 transition-colors" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


