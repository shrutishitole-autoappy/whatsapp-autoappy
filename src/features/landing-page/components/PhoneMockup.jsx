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
  Bot,
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
    <div className="relative mx-auto w-full max-w-[310px] xs:max-w-[340px] sm:max-w-[370px] select-none py-2">
      
      {/* ── REALISTIC IPHONE 17 PRO HARDWARE CHASSIS ── */}
      <div className="relative rounded-[50px] p-[3px] bg-gradient-to-b from-[#e3e8ec] via-[#b8c2cc] to-[#8a96a3] shadow-[0_25px_60px_-15px_rgba(15,23,42,0.35),0_0_0_1px_rgba(255,255,255,0.8)_inset,0_12px_24px_-8px_rgba(0,0,0,0.2)] transition-transform duration-300 hover:scale-[1.01]">
        
        {/* Antenna Bands & Outer Titanium Edge Chamfer */}
        <div className="relative rounded-[47px] p-[3.5px] bg-gradient-to-tr from-[#1e293b] via-[#0f172a] to-[#334155] shadow-[inset_0_1px_2px_rgba(255,255,255,0.4),inset_0_-1px_2px_rgba(0,0,0,0.8)]">
          
          {/* HARDWARE BUTTONS ON SIDES (iPhone 17 Pro Signature Features) */}
          
          {/* Left Side: Action Button */}
          <div
            onClick={() => setDynamicIslandState((prev) => (prev === 'call' ? 'normal' : 'call'))}
            title="Action Button"
            className="absolute -left-[5.5px] top-[95px] w-[3.5px] h-[26px] bg-gradient-to-r from-[#94a3b8] to-[#475569] rounded-l-sm cursor-pointer shadow-sm active:translate-x-[1px] transition-transform"
          />
          {/* Left Side: Volume Up */}
          <div
            title="Volume Up"
            className="absolute -left-[5.5px] top-[135px] w-[3.5px] h-[48px] bg-gradient-to-r from-[#94a3b8] to-[#475569] rounded-l-sm shadow-sm"
          />
          {/* Left Side: Volume Down */}
          <div
            title="Volume Down"
            className="absolute -left-[5.5px] top-[192px] w-[3.5px] h-[48px] bg-gradient-to-r from-[#94a3b8] to-[#475569] rounded-l-sm shadow-sm"
          />

          {/* Right Side: Power / Siri Button */}
          <div
            title="Power / Siri Button"
            className="absolute -right-[5.5px] top-[125px] w-[3.5px] h-[72px] bg-gradient-to-l from-[#94a3b8] to-[#475569] rounded-r-sm shadow-sm"
          />
          {/* Right Side: iPhone 17 Pro Camera Control Button (Haptic Indent) */}
          <div
            title="Camera Control / Capture Button"
            className="absolute -right-[5px] top-[260px] w-[3px] h-[44px] bg-gradient-to-l from-[#cbd5e1] via-[#64748b] to-[#334155] rounded-r-sm shadow-inner cursor-pointer hover:opacity-90"
          />

          {/* OLED DISPLAY CONTAINER (Ultra-slim 1.2mm border) */}
          <div className="relative bg-[#efeae2] rounded-[44px] overflow-hidden flex flex-col h-[520px] xs:h-[570px] sm:h-[620px] shadow-[inset_0_0_4px_rgba(0,0,0,0.6)]">
            
            {/* Ceramic Shield Glass Reflection Highlight */}
            <div className="absolute top-0 right-0 w-full h-[180px] bg-gradient-to-bl from-white/20 via-white/5 to-transparent pointer-events-none z-30 transform -skew-y-12" />

            {/* Micro Speaker Ear-piece */}
            <div className="absolute top-[6px] left-1/2 -translate-x-1/2 w-12 h-[3.5px] bg-[#1a1a1a] rounded-full z-40" />

            {/* ── STATUS BAR & DYNAMIC ISLAND 2.0 ── */}
            <div className="relative pt-2.5 px-6 pb-1 flex items-center justify-between bg-[#f0f2f5] text-slate-900 z-40 shrink-0 select-none">
              
              {/* Left: Clock */}
              <span className="text-[12px] sm:text-[13px] font-semibold tracking-tight text-slate-900 w-12 pl-0.5">
                {currentTime}
              </span>

              {/* Center: Interactive Dynamic Island Pill */}
              <div
                onClick={toggleDynamicIsland}
                className={`group relative bg-black text-white rounded-full flex items-center justify-between cursor-pointer transition-all duration-300 shadow-md ${
                  dynamicIslandState === 'call'
                    ? 'w-44 sm:w-48 h-7 px-2.5'
                    : dynamicIslandState === 'music'
                    ? 'w-40 sm:w-44 h-7 px-2.5'
                    : 'w-24 sm:w-28 h-6 px-2'
                }`}
                title="Tap Dynamic Island to toggle activity"
              >
                {/* Dynamic Island: Default Pill */}
                {dynamicIslandState === 'normal' && (
                  <>
                    <div className="flex items-center gap-1.5">
                      {/* TrueDepth IR sensor */}
                      <div className="w-2.5 h-2.5 rounded-full bg-[#0a0a0a] flex items-center justify-center">
                        <div className="w-1 h-1 rounded-full bg-[#1e293b]/70" />
                      </div>
                    </div>
                    {/* Front Camera Lens with blue AR coating reflection */}
                    <div className="w-2.5 h-2.5 rounded-full bg-[#070b14] ring-[0.8px] ring-[#1e293b] flex items-center justify-center">
                      <div className="w-1 h-1 rounded-full bg-blue-900/90 shadow-[0_0_2px_#38bdf8]" />
                    </div>
                  </>
                )}

                {/* Dynamic Island: Active Live Call */}
                {dynamicIslandState === 'call' && (
                  <div className="flex items-center justify-between w-full text-[10px] font-medium text-white animate-in fade-in zoom-in-95 duration-200">
                    <div className="flex items-center gap-1.5 text-emerald-400">
                      <PhoneCall className="w-3 h-3 animate-pulse" />
                      <span className="text-white text-[10px] font-semibold">Shruti</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-[9px] text-emerald-400 font-mono">03:42</span>
                      <div className="flex gap-[2px] items-end h-2.5 ml-1">
                        <span className="w-[2px] h-2 bg-emerald-400 rounded-full animate-sound-bar-1" />
                        <span className="w-[2px] h-3 bg-emerald-400 rounded-full animate-sound-bar-2" />
                        <span className="w-[2px] h-1.5 bg-emerald-400 rounded-full animate-sound-bar-3" />
                      </div>
                    </div>
                  </div>
                )}

                {/* Dynamic Island: Active Music */}
                {dynamicIslandState === 'music' && (
                  <div className="flex items-center justify-between w-full text-[10px] text-white animate-in fade-in zoom-in-95 duration-200">
                    <div className="flex items-center gap-1.5 text-sky-400">
                      <Music className="w-3 h-3" />
                      <span className="text-white text-[9px] truncate max-w-[65px]">Voice Note</span>
                    </div>
                    <div className="flex gap-[2px] items-end h-2.5">
                      <span className="w-[2px] h-3 bg-sky-400 rounded-full animate-sound-bar-1" />
                      <span className="w-[2px] h-2 bg-sky-400 rounded-full animate-sound-bar-2" />
                      <span className="w-[2px] h-3.5 bg-sky-400 rounded-full animate-sound-bar-3" />
                    </div>
                  </div>
                )}
              </div>

              {/* Right: Signal, 5G, Battery Pill */}
              <div className="flex items-center gap-1.5 text-slate-900 w-14 justify-end">
                {/* 5G Label */}
                <span className="text-[9px] font-extrabold text-slate-800 tracking-tighter">5G</span>
                <Wifi className="w-3.5 h-3.5 text-slate-900 stroke-[2.2]" />
                
                {/* Real iOS Battery Capsule */}
                <div className="w-[20px] h-[10px] border-[1.2px] border-slate-900 rounded-[3.5px] p-[1px] flex items-center relative">
                  <div className="w-[85%] h-full bg-slate-900 rounded-[1.5px]" />
                  <div className="absolute -right-[2.5px] top-[2px] w-[1.5px] h-[4px] bg-slate-900 rounded-r-[1px]" />
                </div>
              </div>
            </div>

            {/* ── WHATSAPP HEADER (iOS Native Style) ── */}
            <div className="px-3 py-2 bg-white/90 backdrop-blur-md border-b border-slate-200/90 flex items-center justify-between z-30 shrink-0 shadow-xs">
              <div className="flex items-center gap-1">
                {/* Back Button */}
                <button className="flex items-center text-slate-600 hover:opacity-80 transition-opacity -ml-1 pr-1">
                  <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
                </button>

                {/* Contact Profile & Info */}
                <div className="flex items-center gap-2 cursor-pointer hover:opacity-90">
                  <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#007aff] text-white flex items-center justify-center shrink-0 shadow-2xs">
                    <Bot className="w-5 h-5" />
                    <div className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white" />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-xs sm:text-[13px] font-bold text-slate-900 leading-tight truncate">
                      Autoappy Support
                    </h3>
                    <span className="text-[10px] text-slate-500 font-medium block leading-none mt-0.5">
                      {isShrutiTyping ? (
                        <span className="text-[#007aff] font-semibold animate-pulse">typing...</span>
                      ) : (
                        'Typically replies instantly'
                      )}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Icons */}
              <div className="flex items-center gap-3 text-slate-600">
                <button
                  className="p-1 hover:bg-slate-100 rounded-full transition-colors"
                >
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* ── CHAT WALLPAPER & MESSAGES BODY ── */}
            <div
              ref={chatContainerRef}
              className="flex-1 p-3 sm:p-3.5 space-y-3 overflow-y-auto scrollbar-none [&::-webkit-scrollbar]:hidden font-sans text-xs bg-[#f4f5f7] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] relative scroll-smooth"
            >
              
              {/* AI Agent Active Badge */}
              <div className="flex justify-end my-1">
                <div className="flex items-center gap-1.5 px-2.5 py-1 bg-white rounded-full shadow-sm border border-slate-100">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span className="text-[9.5px] font-bold text-slate-700">AI Agent Active</span>
                </div>
              </div>

              {/* Date Badge */}
              <div className="text-center my-1.5">
                <span className="inline-block px-3 py-1 bg-white border border-slate-100 rounded-full text-[10px] font-semibold text-slate-500 shadow-sm">
                  Today
                </span>
              </div>

              {/* Chat Messages */}
              {messages.map((item) => {
                if (item.type === 'badge') {
                  return (
                    <div key={item.id} className={`flex ${item.position === 'center' ? 'justify-center' : item.position === 'right' ? 'justify-end' : 'justify-start'} my-2`}>
                      <div className={`flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-full shadow-sm border border-slate-100 ${item.color === 'blue' ? 'bg-[#f0f7ff] border-[#cce3fd]' : ''}`}>
                        {item.icon === 'Settings' && <Settings className="w-3.5 h-3.5 text-[#007aff]" />}
                        {item.icon === 'CheckCircle' && <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />}
                        {item.icon === 'UserPlus' && <UserPlus className="w-3.5 h-3.5 text-orange-600" />}
                        <span className={`text-[9.5px] font-bold tracking-wide ${item.color === 'blue' ? 'text-[#007aff]' : 'text-slate-700'}`}>
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
                      isSent ? 'items-end ml-auto max-w-[85%]' : 'items-start max-w-[85%]'
                    } animate-in fade-in slide-in-from-bottom-2 duration-300`}
                  >
                    <div
                      className={`relative px-3.5 py-2.5 rounded-2xl text-[11.5px] sm:text-[12.5px] leading-relaxed shadow-sm ${
                        isSent
                          ? 'bg-[#e2f7cb] text-slate-900 rounded-br-sm'
                          : 'bg-white text-slate-900 rounded-bl-sm'
                      }`}
                    >
                      <p className="break-words whitespace-pre-wrap">{item.text}</p>
                      
                      {item.buttons && (
                        <div className="mt-3 flex flex-col gap-2 w-full">
                          {item.buttons.map((btn, idx) => (
                            <button key={idx} className="w-full py-2 px-3 bg-[#f0f2f5] hover:bg-[#e4e6e9] text-[#007aff] font-semibold text-[11px] rounded-lg transition-colors border border-slate-200">
                              {btn}
                            </button>
                          ))}
                        </div>
                      )}

                      {/* Timestamp & Read Receipts */}
                      <div className={`flex items-center justify-end gap-1 mt-1 text-[9px] ${isSent ? 'text-emerald-700' : 'text-slate-400'}`}>
                        <span>{item.time}</span>
                        {isSent && (
                          <CheckCheck className={`w-3.5 h-3.5 ${item.status === 'read' ? 'text-[#53bdeb]' : 'text-slate-400'} stroke-[2.2]`} />
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Typing Bubble */}
              {isShrutiTyping && (
                <div className="flex items-center gap-1.5 bg-white border border-slate-200/70 text-slate-500 px-3 py-2 rounded-2xl rounded-bl-sm w-fit shadow-2xs animate-in fade-in duration-200">
                  <span className="w-1.5 h-1.5 bg-[#007aff] rounded-full animate-bounce" />
                  <span className="w-1.5 h-1.5 bg-[#007aff] rounded-full animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 bg-[#007aff] rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              )}
            </div>

            {/* ── ATTACHMENT POPUP ── */}
            {showAttachMenu && (
              <div className="absolute bottom-16 left-3 right-3 bg-white/95 backdrop-blur-md rounded-2xl p-3 border border-slate-200/80 shadow-xl z-50 animate-in fade-in slide-in-from-bottom-3 duration-200 grid grid-cols-4 gap-2 text-center text-[10px] text-slate-700">
                <button onClick={() => { setInputVal('Sent a photo 📷'); setShowAttachMenu(false); }} className="flex flex-col items-center gap-1 hover:opacity-80">
                  <div className="w-9 h-9 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-sm"><Camera className="w-4 h-4" /></div>
                  <span>Photos</span>
                </button>
                <button onClick={() => { setInputVal('Sent a document 📄'); setShowAttachMenu(false); }} className="flex flex-col items-center gap-1 hover:opacity-80">
                  <div className="w-9 h-9 rounded-full bg-violet-500 text-white flex items-center justify-center shadow-sm"><Paperclip className="w-4 h-4" /></div>
                  <span>Document</span>
                </button>
                <button onClick={() => { setInputVal('Shared Location 📍'); setShowAttachMenu(false); }} className="flex flex-col items-center gap-1 hover:opacity-80">
                  <div className="w-9 h-9 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-sm"><Radio className="w-4 h-4" /></div>
                  <span>Location</span>
                </button>
                <button onClick={() => { setInputVal('Voice Note 🎙️'); setShowAttachMenu(false); }} className="flex flex-col items-center gap-1 hover:opacity-80">
                  <div className="w-9 h-9 rounded-full bg-amber-500 text-white flex items-center justify-center shadow-sm"><Mic className="w-4 h-4" /></div>
                  <span>Audio</span>
                </button>
              </div>
            )}

            {/* ── WHATSAPP INPUT BAR ── */}
            <form
              onSubmit={handleSendMessage}
              className="p-2 sm:p-2.5 bg-[#f5f6f6] border-t border-slate-200/90 flex items-center gap-2 shrink-0 z-30"
            >
              {/* '+' Attach button */}
              <button
                type="button"
                onClick={() => setShowAttachMenu(!showAttachMenu)}
                className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center text-slate-500 hover:bg-slate-200/70 shrink-0 bg-white shadow-sm"
              >
                <Plus className="w-4 h-4" />
              </button>

              {/* Text Input Pill */}
              <div className="flex-1 flex items-center bg-white rounded-full px-4 py-1.5 border border-slate-200 shadow-sm">
                <input
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 min-w-0 bg-transparent text-slate-900 placeholder:text-slate-400 text-[12px] focus:outline-none"
                />
                <button
                  type="button"
                  className="text-slate-400 hover:text-slate-600 ml-1"
                >
                  <Mic className="w-4 h-4" />
                </button>
              </div>

              {/* Send Action */}
              <button
                type="submit"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#007aff] text-white flex items-center justify-center shadow-md hover:bg-[#0066d6] transition-transform active:scale-90 shrink-0"
              >
                <Send className="w-4 h-4 ml-0.5" />
              </button>
            </form>

            {/* ── iOS 18/19 HOME INDICATOR BAR ── */}
            <div className="w-full bg-[#f0f2f5] pb-1.5 pt-0.5 flex justify-center shrink-0">
              <div className="w-28 sm:w-32 h-[4px] bg-slate-400/80 rounded-full cursor-pointer hover:bg-slate-600 transition-colors" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

