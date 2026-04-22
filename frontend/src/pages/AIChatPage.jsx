import React, { useState } from 'react';
import AIChatBot from '../components/AIChatBot';
import { motion } from 'framer-motion';

const AIChatPage = () => {
  const [userProfile] = useState({
    age: 23, weight: 67, goal: 'Visible Abs', dietaryPreference: 'Vegetarian'
  });

  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }}
      className="min-h-screen pt-24 pb-4 px-4 bg-[#0b0e14] overflow-hidden"
    >
      <div className="max-w-5xl mx-auto h-[88vh] flex flex-col">
        
        {/* Simple Branding Header */}
        <div className="mb-8 flex items-center justify-between border-b border-white/5 pb-6">
          <div>
            <h1 className="text-3xl font-black text-white tracking-tighter uppercase italic">
              AI <span className="text-cyan-400">Assistant</span>
            </h1>
            <p className="text-gray-500 text-[9px] tracking-[0.4em] font-bold">24/7 ELITE PERFORMANCE COACHING</p>
          </div>

          <div className="flex items-center gap-2 bg-green-500/5 px-4 py-1.5 rounded-full border border-green-500/10">
             <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22c55e]"></div>
             <span className="text-[9px] text-green-500 font-black uppercase tracking-widest">System Live</span>
          </div>
        </div>
        
        {/* Direct Component Integration - No Container Borders */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <AIChatBot userProfile={userProfile} />
        </div>

      </div>
    </motion.div>
  );
};

export default AIChatPage;