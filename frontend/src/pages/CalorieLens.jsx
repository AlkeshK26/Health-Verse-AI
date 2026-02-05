import { useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion'; // Zen motion integration
import { FaCamera, FaUpload, FaFireAlt, FaBiohazard } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';

const CalorieLens = () => {
  const [image, setImage] = useState(null);
  const [analysis, setAnalysis] = useState("");
  const [loading, setLoading] = useState(false);

  const handleImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => setImage(reader.result);
    reader.readAsDataURL(file);
  };

  const scanMeal = async () => {
    if (!image) return;
    setLoading(true);
    setAnalysis("");

    try {
      const token = localStorage.getItem('token');
      const base64Image = image.split(',')[1];
      
      const res = await axios.post('http://localhost:5000/api/vision/analyze-meal', 
        { image: base64Image },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setAnalysis(res.data.analysis);
    } catch (err) {
      alert("AI Vision is temporarily unavailable. Check API Quota.");
    } finally {
      setLoading(false);
    }
  };

  // Animation Variants
  const pageVariants = {
    initial: { opacity: 0, scale: 0.98 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const scannerVariants = {
    animate: {
      top: ["0%", "95%", "0%"],
      transition: { repeat: Infinity, duration: 2, ease: "linear" }
    }
  };

  return (
    <motion.div 
      initial="initial"
      animate="animate"
      variants={pageVariants}
      className="min-h-screen pt-24 pb-12 px-6 bg-[#0b0e14] text-white"
    >
      <div className="max-w-5xl mx-auto">
        {/* --- HEADER SECTION --- */}
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="mb-10"
        >
          <h1 className="text-6xl font-black text-cyan-400 mb-2 italic tracking-tighter flex items-center gap-4">
            CALORIE <span className="text-white">LENS</span> <FaCamera className="text-4xl animate-pulse" />
          </h1>
          <p className="text-gray-500 tracking-[0.4em] uppercase text-[10px] font-bold">
            Precision Nutrition Scanning • HealthVerse Core
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* --- LEFT: SMART UPLOADER --- */}
          <div className="space-y-6">
            <motion.div 
              whileHover={{ borderColor: "rgba(34, 211, 238, 0.4)" }}
              className="relative group h-96 rounded-[3rem] border-2 border-dashed border-white/5 overflow-hidden bg-gray-900/20 backdrop-blur-xl flex items-center justify-center shadow-2xl transition-all"
            >
              <AnimatePresence>
                {image ? (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative w-full h-full">
                    <img src={image} className="w-full h-full object-cover" alt="meal" />
                    
                    {/* --- NEON SCANNING LINE --- */}
                    {loading && (
                      <motion.div 
                        variants={scannerVariants}
                        animate="animate"
                        className="absolute left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_#22d3ee] z-10"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </motion.div>
                ) : (
                  <div className="text-center text-gray-600">
                    <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 3 }}>
                      <FaUpload className="text-5xl mx-auto mb-4 opacity-10" />
                    </motion.div>
                    <p className="text-xs font-black uppercase tracking-widest opacity-40">Initialize Meal Capture</p>
                  </div>
                )}
              </AnimatePresence>
              <input type="file" accept="image/*" onChange={handleImage} className="absolute inset-0 opacity-0 cursor-pointer z-20" />
            </motion.div>
            
            <motion.button 
              whileHover={{ scale: 1.02, boxShadow: "0px 0px 30px rgba(6, 182, 212, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              onClick={scanMeal} 
              disabled={!image || loading} 
              className="w-full py-5 bg-cyan-500 text-black font-black rounded-[2rem] transition-all uppercase tracking-[0.2em] text-xs disabled:opacity-30 disabled:grayscale"
            >
              {loading ? "Decrypting Nutrients..." : "Launch AI Analysis 🚀"}
            </motion.button>
          </div>

          {/* --- RIGHT: ANALYSIS ENGINE --- */}
          <motion.div 
            layout
            className="bg-gray-800/20 rounded-[3rem] border border-white/5 p-10 backdrop-blur-3xl min-h-[500px] shadow-inner relative"
          >
            <AnimatePresence mode="wait">
              {analysis ? (
                <motion.div 
                  key="analysis"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="prose prose-invert prose-cyan max-w-none"
                >
                  <ReactMarkdown>{analysis}</ReactMarkdown>
                </motion.div>
              ) : (
                <motion.div 
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center justify-center h-full min-h-[400px] text-gray-700"
                >
                  {loading ? (
                     <div className="text-center">
                        <motion.div 
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                          className="w-12 h-12 border-2 border-cyan-500 border-t-transparent rounded-full mx-auto mb-6"
                        />
                        <p className="text-[10px] font-black tracking-[0.5em] text-cyan-500 animate-pulse">EXTRACTING MICRONUTRIENTS</p>
                     </div>
                  ) : (
                    <div className="text-center space-y-4">
                      <FaFireAlt className="text-8xl mx-auto opacity-5 mb-4" />
                      <p className="text-lg font-light italic opacity-20">Awaiting visual data for macro-synthesis</p>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default CalorieLens;