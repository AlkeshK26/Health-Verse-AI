import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion'; // Zen motion integration

const AIChatBot = ({ userProfile }) => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);

  // Auto-scroll to bottom for smooth flow
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

  // Animation Variants
  const bubbleVariants = {
    initial: { opacity: 0, scale: 0.8, y: 20 },
    animate: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 260, damping: 20 } },
    exit: { opacity: 0, scale: 0.5, transition: { duration: 0.2 } }
  };

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="flex flex-col h-full w-full bg-transparent overflow-hidden">
      {/* Scrollable Chat Area */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-8 space-y-6 custom-scrollbar scroll-smooth"
      >
        <AnimatePresence mode="popLayout">
          {messages.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center h-full text-center space-y-8"
            >
              <motion.p 
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="text-gray-400 italic text-xl font-light"
              >
                Focusing on your {userProfile.goal} protocol...
              </motion.p>
              
              <motion.div 
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                className="flex flex-wrap justify-center gap-3"
              >
                {["Protein swap?", "Home abs workout", "Rest day advice"].map(q => (
                  <motion.button 
                    key={q} 
                    variants={bubbleVariants}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(6, 182, 212, 0.15)" }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleSend(q)} 
                    className="px-5 py-2 bg-cyan-500/5 border border-cyan-500/20 rounded-full text-cyan-400 text-xs font-black uppercase tracking-widest"
                  >
                    {q}
                  </motion.button>
                ))}
              </motion.div>
            </motion.div>
          ) : (
            messages.map((m, i) => (
              <motion.div 
                layout
                key={i} 
                variants={bubbleVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className={`flex ${m.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[80%] p-5 rounded-[2rem] text-sm leading-relaxed shadow-xl backdrop-blur-sm ${
                  m.type === 'user' 
                    ? 'bg-cyan-600/20 border border-cyan-500/30 text-white rounded-tr-none' 
                    : 'bg-white/5 border border-white/10 text-gray-300 rounded-tl-none'
                }`}>
                  {m.text}
                </div>
              </motion.div>
            ))
          )}
        </AnimatePresence>

        {loading && (
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-cyan-500 text-[10px] font-black tracking-widest ml-4 uppercase"
          >
            <span className="flex gap-1">
              <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1 }}>.</motion.span>
              <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}>.</motion.span>
              <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }}>.</motion.span>
            </span>
            Analyzing Data Streams
          </motion.div>
        )}
      </div>

      {/* Input Field Area */}
      <motion.div 
        layout
        className="p-8 bg-black/20 border-t border-white/5 backdrop-blur-md"
      >
        <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="flex gap-4">
          <motion.input 
            whileFocus={{ scale: 1.01, borderColor: "rgba(6, 182, 212, 0.5)" }}
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
            className="flex-1 bg-black/40 p-4 rounded-2xl border border-white/10 outline-none transition-all text-sm placeholder:text-gray-600" 
            placeholder="Talk to your Coach..." 
          />
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(6, 182, 212, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            type="submit" 
            className="bg-cyan-500 px-10 rounded-2xl text-black font-black uppercase text-xs tracking-widest transition-all"
          >
            Send
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default AIChatBot;