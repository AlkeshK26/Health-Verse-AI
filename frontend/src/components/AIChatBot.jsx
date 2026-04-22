import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'; 
import { Send, User, Bot, Sparkles } from 'lucide-react';

const AIChatBot = ({ userProfile }) => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const handleSend = async (customInput = null) => {
    const textToSend = customInput || input;
    if (!textToSend) return;

    setMessages(prev => [...prev, { type: 'user', text: textToSend }]);
    setLoading(true);
    setInput("");

    try {
      const token = localStorage.getItem('token');
      const res = await axios.post('http://localhost:5000/api/ai/chat', 
        { 
          message: textToSend, 
          history: messages.map(m => ({ role: m.type === 'user' ? 'user' : 'model', parts: [{ text: m.text }] })), 
          userProfile 
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setMessages(prev => [...prev, { type: 'model', text: res.data.response }]);
    } catch (err) {
      const msg = err.response?.status === 429 ? "Daily limit reached. Let's resume tomorrow!" : "Connection lost. Checking sync...";
      setMessages(prev => [...prev, { type: 'model', text: msg }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full w-full bg-transparent">
      {/* Messages Area */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-10 scrollbar-hide">
        <AnimatePresence mode="popLayout">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-4 opacity-40">
              <Sparkles size={40} className="text-cyan-500" />
              <p className="text-xl font-light">How can I assist your {userProfile.goal} protocol today?</p>
            </div>
          ) : (
            messages.map((m, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} 
                className={`flex gap-4 md:gap-6 ${m.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                
                <div className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 ${m.type === 'user' ? 'bg-cyan-600' : 'bg-slate-800 border border-white/10'}`}>
                  {m.type === 'user' ? <User size={18} /> : <Bot size={18} className="text-cyan-400" />}
                </div>
                
                <div className="max-w-[85%]">
                   {m.type === 'user' ? (
                     <div className="bg-[#1e232d] px-5 py-3 rounded-2xl rounded-tr-none text-white shadow-md text-sm">
                       {m.text}
                     </div>
                   ) : (
                     <div className="prose prose-invert prose-sm max-w-none text-gray-300">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                          {m.text}
                        </ReactMarkdown>
                     </div>
                   )}
                </div>
              </motion.div>
            ))
          )}
        </AnimatePresence>

        {loading && (
          <div className="flex gap-4 items-center animate-pulse">
             <div className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center border border-white/10">
                <Bot size={18} className="text-cyan-400/50" />
             </div>
             <div className="h-3 w-32 bg-white/5 rounded-full" />
          </div>
        )}
      </div>

      {/* Floating Input Area */}
      <div className="pt-6 pb-2">
        <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="relative max-w-3xl mx-auto">
          <input 
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
            placeholder="Type your message here..." 
            className="w-full bg-[#1e232d]/80 backdrop-blur-xl p-4 pr-14 rounded-2xl border border-white/10 focus:border-cyan-500/50 outline-none transition-all shadow-2xl text-sm"
          />
          <button disabled={!input || loading} type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-cyan-400 hover:text-cyan-300 disabled:opacity-20 transition-all">
            <Send size={20} />
          </button>
        </form>
        <p className="text-[10px] text-center mt-4 text-gray-600 tracking-widest uppercase font-medium">
          HealthVerse AI • Personalized Performance Streams
        </p>
      </div>
    </div>
  );
};

export default AIChatBot;