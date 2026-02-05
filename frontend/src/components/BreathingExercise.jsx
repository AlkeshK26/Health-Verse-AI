import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const BreathingExercise = () => {
  const [instruction, setInstruction] = useState("Inhale");

  // 4-4-4 Box Breathing Rhythm
  useEffect(() => {
    const interval = setInterval(() => {
      setInstruction((prev) => {
        if (prev === "Inhale (4s)") return "Hold (4s)";
        if (prev === "Hold (4s)") return "Exhale (4s)";
        return "Inhale (4s)";
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const variants = {
    "Inhale (4s)": { scale: 1.5, opacity: 1, transition: { duration: 4, ease: "easeInOut" } },
    "Hold (4s)": { scale: 1.5, opacity: 0.7, transition: { duration: 0.5 } },
    "Exhale (4s)": { scale: 1, opacity: 0.5, transition: { duration: 4, ease: "easeInOut" } },
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-blue-900/30 rounded-3xl border border-blue-700/50 backdrop-blur-md shadow-xl">
      <h3 className="text-2xl font-bold text-teal-200 mb-6 uppercase tracking-wider">
        Box Breathing
      </h3>
      <div className="relative flex items-center justify-center w-48 h-48">
        <motion.div
          animate={instruction.includes("Hold") ? "Hold (4s)" : instruction}
          variants={variants}
          className="absolute w-32 h-32 bg-teal-500/40 rounded-full blur-xl"
        ></motion.div>
        <motion.div
          animate={instruction}
          variants={variants}
          className="w-32 h-32 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full shadow-[0_0_30px_rgba(45,212,191,0.6)] flex items-center justify-center z-10 border-2 border-white/20"
        >
          <span className="text-white font-bold text-sm md:text-base uppercase tracking-wider drop-shadow-md text-center px-2">
            {instruction}
          </span>
        </motion.div>
      </div>
      <p className="text-blue-200 text-sm mt-6">Sync your breath with the circle.</p>
    </div>
  );
};

export default BreathingExercise;