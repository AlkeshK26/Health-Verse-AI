import { useState } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import { motion, AnimatePresence } from 'framer-motion'; // Added for animations
import { FaRobot, FaDumbbell, FaLeaf, FaBullseye, FaUserFriends } from 'react-icons/fa';

const DietPlan = () => {
  const [formData, setFormData] = useState({
    age: '', weight: '', height: '', gender: 'Male', 
    activityLevel: 'Moderately Active', goal: 'Visible Abs', 
    dietaryPreference: 'Vegetarian', workoutLocation: 'Gym', healthCondition: 'None'
  });
  const [plan, setPlan] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const generatePlan = async (e) => {
    e.preventDefault();
    setLoading(true);
    setPlan("");

    try {
      const token = localStorage.getItem('token');
      const res = await axios.post('http://localhost:5000/api/ai/generate-plan', formData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setPlan(res.data.plan); 
    } catch (err) {
      console.error(err);
      alert("AI Server Timeout! Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Animation Variants for staggered entry
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, staggerChildren: 0.1 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.div 
      initial="hidden" 
      animate="visible" 
      variants={containerVariants}
      className="min-h-screen bg-[#0b0e14] text-white pt-24 px-4 pb-10"
    >
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <motion.div variants={itemVariants} className="text-center mb-10">
          <h1 className="text-5xl font-black text-cyan-400 mb-2 tracking-tighter">
            HEALTHVERSE AI <FaRobot className="inline ml-2" />
          </h1>
          <p className="text-gray-400 uppercase tracking-[0.2em] text-sm">Professional 8-Week Transformation Architect</p>
        </motion.div>

        {/* TOP SECTION: 9-FIELD INPUT FORM */}
        <motion.form 
          variants={itemVariants}
          onSubmit={generatePlan} 
          className="bg-gray-800/30 p-8 rounded-3xl border border-white/5 shadow-2xl mb-12 backdrop-blur-md overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* COLUMN 1: Physical Stats */}
            <motion.div variants={itemVariants} className="space-y-4">
              <label className="text-xs font-bold text-cyan-500 uppercase flex items-center"><FaUserFriends className="mr-2" /> Personal Bio</label>
              <input name="age" type="number" placeholder="Age" onChange={handleChange} className="p-3 bg-black/40 rounded-xl w-full border border-white/10 focus:border-cyan-500 outline-none transition-all hover:bg-black/60" required />
              <div className="grid grid-cols-2 gap-2">
                <input name="weight" type="number" placeholder="Wt (kg)" onChange={handleChange} className="p-3 bg-black/40 rounded-xl w-full border border-white/10 focus:border-cyan-500 outline-none hover:bg-black/60" required />
                <input name="height" type="number" placeholder="Ht (cm)" onChange={handleChange} className="p-3 bg-black/40 rounded-xl w-full border border-white/10 focus:border-cyan-500 outline-none hover:bg-black/60" required />
              </div>
              <select name="gender" onChange={handleChange} className="p-3 bg-black/40 rounded-xl w-full border border-white/10 text-gray-400 outline-none focus:border-cyan-500 cursor-pointer [&>option]:bg-[#0b0e14] [&>option]:text-white">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </motion.div>

            {/* COLUMN 2: Lifestyle & Goals */}
            <motion.div variants={itemVariants} className="space-y-4">
              <label className="text-xs font-bold text-cyan-500 uppercase flex items-center"><FaBullseye className="mr-2" /> Strategy</label>
              <select name="goal" onChange={handleChange} className="p-3 bg-black/40 rounded-xl w-full border border-white/10 text-gray-400 outline-none focus:border-cyan-500 cursor-pointer [&>option]:bg-[#0b0e14] [&>option]:text-white">
                <option value="Visible Abs">Visible Abs / Cutting</option>
                <option value="Muscle Gain">Muscle Gain / Bulking</option>
                <option value="Weight Loss">Weight Loss</option>
                <option value="Athletic Performance">Athletic Performance</option>
                <option value="Body Recomposition">Body Recomposition</option>
                <option value="Flexibility">Flexibility & Yoga Focus</option>
              </select>
              <select name="activityLevel" onChange={handleChange} className="p-3 bg-black/40 rounded-xl w-full border border-white/10 text-gray-400 outline-none focus:border-cyan-500 cursor-pointer [&>option]:bg-[#0b0e14] [&>option]:text-white">
                <option value="Sedentary">Sedentary (Office Job)</option>
                <option value="Lightly Active">Lightly Active (1-2 days/week)</option>
                <option value="Moderately Active">Moderately Active (3-5 days/week)</option>
                <option value="Very Active">Very Active (6-7 days/week)</option>
                <option value="Extra Active">Extra Active (Athlete Level)</option>
              </select>
              <select name="workoutLocation" onChange={handleChange} className="p-3 bg-black/40 rounded-xl w-full border border-white/10 text-gray-400 outline-none focus:border-cyan-500 cursor-pointer [&>option]:bg-[#0b0e14] [&>option]:text-white">
                <option value="Gym">Gym (Heavy Weights)</option>
                <option value="Home">Home (Bodyweight/Dumbbells)</option>
                <option value="Both">Hybrid (Gym & Home)</option>
              </select>
            </motion.div>

            {/* COLUMN 3: Nutrition & Medical */}
            <motion.div variants={itemVariants} className="space-y-4">
              <label className="text-xs font-bold text-cyan-500 uppercase flex items-center"><FaLeaf className="mr-2" /> Constraints</label>
              <select name="dietaryPreference" onChange={handleChange} className="p-3 bg-black/40 rounded-xl w-full border border-white/10 text-gray-400 outline-none focus:border-cyan-500 cursor-pointer [&>option]:bg-[#0b0e14] [&>option]:text-white">
                <option value="Vegetarian">Vegetarian</option>
                <option value="Non-Vegetarian">Non-Vegetarian</option>
                <option value="Vegan">Vegan</option>
                <option value="Keto">Keto Diet</option>
                <option value="Eggitarian">Eggitarian</option>
                <option value="Paleo">Paleo Diet</option>
              </select>
              <input name="healthCondition" placeholder="Medical Issues / Injuries (e.g. Back pain)" onChange={handleChange} className="p-3 bg-black/40 rounded-xl w-full border border-white/10 focus:border-cyan-500 outline-none hover:bg-black/60" />
              <div className="p-4 bg-cyan-500/5 rounded-xl border border-cyan-500/20 text-[10px] text-gray-400 leading-tight">
                * Our AI uses these parameters to generate a medical-grade fitness architecture.
              </div>
            </motion.div>
          </div>

          <motion.button 
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            type="submit" 
            disabled={loading} 
            className="w-full mt-10 py-4 bg-gradient-to-r from-cyan-600 to-blue-700 text-white font-black text-xl rounded-2xl hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all duration-300 uppercase relative z-10"
          >
            {loading ? "Engineering your plan..." : "Generate Professional Roadmap 🚀"}
          </motion.button>
        </motion.form>

        {/* BOTTOM SECTION: AI RECOMMENDATION */}
        <motion.div 
          layout
          className="bg-gray-900/40 p-10 rounded-[2.5rem] border border-cyan-500/10 min-h-[600px] relative overflow-hidden"
        >
          <AnimatePresence mode="wait">
            {plan ? (
              <motion.div 
                key="plan"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="prose prose-invert prose-cyan max-w-none leading-relaxed"
              >
                <ReactMarkdown>{plan}</ReactMarkdown>
              </motion.div>
            ) : (
              <motion.div 
                key="placeholder"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center h-full min-h-[500px] text-gray-600"
              >
                {loading ? (
                   <div className="flex flex-col items-center">
                      <motion.div 
                        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="w-24 h-24 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mb-6"
                      ></motion.div>
                      <p className="text-cyan-400 font-mono tracking-widest animate-pulse">SYNCING WITH HEALTHVERSE CORE...</p>
                   </div>
                ) : (
                  <div className="text-center">
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    >
                      <FaDumbbell className="text-[120px] mx-auto mb-8 opacity-5" />
                    </motion.div>
                    <p className="text-2xl font-light opacity-30 italic">Detailed weekly progression will manifest here.</p>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default DietPlan;