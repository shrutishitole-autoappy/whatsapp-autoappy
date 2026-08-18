import React, { useState, useEffect, useRef } from 'react';
import { Wifi, Battery, MoreVertical, Plus, Mic, Send, CheckCheck, Check } from 'lucide-react';

export default function PhoneMockup() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'Shruti',
      text: 'Hey! The new designs look incredible. Did you share them with the team yet?',
      time: '9:32 AM',
      type: 'received'
    },
    {
      id: 2,
      sender: 'me',
      text: "Thanks! Just sent them over. Let's jump on a quick call to discuss the feedback.",
      time: '9:35 AM',
      type: 'sent',
      status: 'read'
    }
  ]);

  const [inputVal, setInputVal] = useState('');
  const [isShrutiTyping, setIsShrutiTyping] = useState(false);
  const chatBottomRef = useRef(null);

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isShrutiTyping]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputVal.trim()) return;

    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const newMsg = {
      id: Date.now(),
      sender: 'me',
      text: inputVal,
      time: currentTime,
      type: 'sent',
      status: 'read'
    };

    setMessages((prev) => [...prev, newMsg]);
    setInputVal('');

    // Simulate automatic live response from Shruti
    setTimeout(() => {
      setIsShrutiTyping(true);
    }, 600);

    setTimeout(() => {
      setIsShrutiTyping(false);
      const responses = [
        "Sounds great! Joining the call now 🚀",
        "Awesome! The interface feels so responsive and fluid.",
        "Got it! Let's schedule our feature review meeting.",
        "Perfect! Really loving this live experience."
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];

      const replyMsg = {
        id: Date.now() + 1,
        sender: 'Shruti',
        text: randomResponse,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        type: 'received'
      };
      setMessages((prev) => [...prev, replyMsg]);
    }, 2200);
  };

  return (
    <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[360px] bg-white rounded-[42px] p-3 shadow-2xl ring-1 ring-slate-900/10 border border-slate-100 transform hover:scale-[1.01] transition-transform duration-300">
      {/* Outer Phone Shell */}
      <div className="relative bg-white rounded-[32px] overflow-hidden border border-slate-100 flex flex-col h-[580px] sm:h-[620px]">
        
        {/* Status Bar */}
        <div className="pt-3 px-6 pb-2 flex items-center justify-between bg-white text-slate-800 text-xs font-semibold select-none z-10">
          <span>9:41</span>
          
          <div className="w-16 h-4 bg-slate-900 rounded-full mx-auto flex items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-slate-950 border border-slate-800"></div>
          </div>

          <div className="flex items-center gap-1.5 text-slate-700">
            <Wifi className="w-3.5 h-3.5" />
            <Battery className="w-4 h-4 fill-slate-700" />
          </div>
        </div>

        {/* Chat Screen Header */}
        <div className="px-4 py-3 bg-white/95 backdrop-blur-xs border-b border-slate-100 flex items-center justify-between z-10 shadow-2xs">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-sky-100 shadow-xs">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
                alt="Shruti"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white"></div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-slate-900 leading-none">Shruti</h3>
              <span className={`text-xs font-medium ${isShrutiTyping ? 'text-sky-600 animate-pulse' : 'text-emerald-600'} mt-0.5 inline-block`}>
                {isShrutiTyping ? 'Typing...' : 'Online'}
              </span>
            </div>
          </div>

          <button className="text-slate-400 hover:text-slate-600 p-1">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>

        {/* Chat Messages Body */}
        <div className="flex-1 bg-slate-50/70 p-4 space-y-3.5 overflow-y-auto font-sans text-xs">
          <div className="text-center my-2">
            <span className="inline-block px-3 py-1 bg-white/90 border border-slate-200/60 rounded-full text-[10px] font-semibold text-slate-400 shadow-2xs">
              Today, 9:30 AM
            </span>
          </div>

          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col ${msg.type === 'sent' ? 'items-end ml-auto max-w-[88%]' : 'items-start max-w-[85%]'} animate-in fade-in slide-in-from-bottom-2 duration-300`}
            >
              <div
                className={`p-3.5 rounded-2xl leading-relaxed font-normal shadow-xs ${
                  msg.type === 'sent'
                    ? 'bg-[#006699] text-white rounded-tr-xs'
                    : 'bg-white text-slate-800 border border-slate-100 rounded-tl-xs'
                }`}
              >
                {msg.text}
              </div>
              
              <div className={`flex items-center gap-1 mt-1 ${msg.type === 'sent' ? 'mr-1' : 'ml-1'}`}>
                <span className="text-[10px] text-slate-400 font-medium">{msg.time}</span>
                {msg.type === 'sent' && (
                  <CheckCheck className="w-3.5 h-3.5 text-sky-400" />
                )}
              </div>
            </div>
          ))}

          {/* Typing Indicator */}
          {isShrutiTyping && (
            <div className="flex items-center gap-1 bg-white border border-slate-100 text-slate-500 px-3.5 py-2.5 rounded-2xl rounded-tl-xs w-fit shadow-xs animate-in fade-in duration-200">
              <div className="w-1.5 h-1.5 bg-sky-500 rounded-full animate-bounce"></div>
              <div className="w-1.5 h-1.5 bg-sky-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
              <div className="w-1.5 h-1.5 bg-sky-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
            </div>
          )}

          <div ref={chatBottomRef} />
        </div>

        {/* Live Input Form */}
        <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-slate-100 flex items-center gap-2">
          <button type="button" className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors">
            <Plus className="w-4 h-4" />
          </button>
          
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type a live message..."
            className="flex-1 bg-slate-100/80 rounded-full px-4 py-2 text-slate-800 placeholder:text-slate-400 text-xs font-normal border border-slate-200/50 focus:outline-none focus:ring-1 focus:ring-sky-500"
          />

          {inputVal.trim() ? (
            <button type="submit" className="w-8 h-8 rounded-full bg-[#006699] text-white flex items-center justify-center shadow-sm hover:bg-[#005580] transition-transform active:scale-95">
              <Send className="w-3.5 h-3.5" />
            </button>
          ) : (
            <button type="button" className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center shadow-2xs hover:bg-slate-200 transition-colors">
              <Mic className="w-4 h-4" />
            </button>
          )}
        </form>
      </div>
    </div>
  );
}
