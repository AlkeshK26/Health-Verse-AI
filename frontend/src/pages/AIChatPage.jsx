import React, { useState } from 'react';
import AIChatBot from '../components/AIChatBot';
import { motion } from 'framer-motion'; // Motion integration for Zen flow

const AIChatPage = () => {
  // Consistent user profile for your 'Visible Abs' journey
  const [userProfile] = useState({
    age: 23, weight: 67, goal: 'Visible Abs', dietaryPreference: 'Vegetarian'
  });

  // Animation variants for a cohesive entry
  const pageVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.6, -0.05, 0.01, 0.9],
        staggerChildren: 0.2 
      } 
    }
  };

  const headerVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.div 
      initial="initial"
      animate="animate"
      variants={pageVariants}
      className="min-h-screen pt-24 pb-8 px-6 bg-[#0b0e14]"
    >
      <div className="max-w-5xl mx-auto h-[82vh] flex flex-col">
        
        {/* --- HEADER BRANDING --- */}
        <motion.div 
          variants={headerVariants}
          className="mb-8 px-2 flex items-center justify-between"
        >
          <div>
            <motion.h1 
              whileHover={{ scale: 1.02, color: "#22d3ee" }}
              className="text-5xl font-black text-white tracking-tighter uppercase italic cursor-default transition-colors"
            >
              AI <span className="text-cyan-400">Assistant</span>
            </motion.h1>
            <p className="text-gray-500 text-sm tracking-widest font-bold">24/7 ELITE PERFORMANCE COACHING</p>
          </div>

          <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/5">
             <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]"></div>
             <span className="text-[10px] text-green-500 font-black uppercase tracking-widest italic">System Live</span>
          </div>
        </motion.div>
        
        {/* --- MAIN CHAT WRAPPER --- */}
        <motion.div 
          variants={pageVariants}
          whileHover={{ boxShadow: "0px 0px 40px rgba(6, 182, 212, 0.1)" }}
          className="flex-1 bg-gray-900/40 rounded-[3rem] border border-white/5 shadow-2xl overflow-hidden backdrop-blur-3xl flex flex-col transition-shadow duration-500"
        >
          {/* AIChatBot component will inherit the smooth flow */}
          <AIChatBot userProfile={userProfile} />
        </motion.div>

        {/* --- FOOTER CONTEXT --- */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 1 }}
          className="text-center mt-4 text-[10px] text-gray-500 uppercase tracking-[0.5em]"
        >
          Optimizing for {userProfile.age}yo Vegetarian Protocol • {userProfile.goal}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default AIChatPage;