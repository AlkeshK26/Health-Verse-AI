import { motion } from 'framer-motion';
import { FaTimes, FaSave, FaClock, FaUtensils, FaFire } from 'react-icons/fa';

import axios from 'axios';

// ... modal code ke andar
const handleSave = async () => {
  try {
    const token = localStorage.getItem('token');
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };

    const res = await axios.put(
      'http://localhost:5000/api/auth/update-diet', 
      { dietData }, 
      config
    );

    alert(res.data.message);
    onClose(); // Modal band karein
  } catch (err) {
    console.error(err);
    alert("Failed to update diet");
  }
};

const EditDietModal = ({ isOpen, onClose, dietData, setDietData }) => {
  if (!isOpen) return null;

  // Handle Input Changes
  const handleMealChange = (index, newValue) => {
    const updatedDiet = [...dietData];
    updatedDiet[index].meal = newValue;
    setDietData(updatedDiet);
  };

  const handleCalChange = (index, newValue) => {
    const updatedDiet = [...dietData];
    updatedDiet[index].cal = newValue;
    setDietData(updatedDiet);
  };

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center px-4">
      {/* --- BACKDROP --- */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/90 backdrop-blur-xl"
      />

      {/* --- MODAL CONTENT --- */}
      <motion.div 
        initial={{ scale: 0.9, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 30 }}
        className="bg-[#0f1218] border border-white/10 w-full max-w-2xl rounded-[45px] p-8 md:p-12 relative z-10 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden"
      >
        {/* Decorative Background Glow */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl -z-10"></div>
        
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute top-8 right-8 text-gray-500 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"
        >
          <FaTimes size={20} />
        </button>

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-yellow-500/20 rounded-2xl text-yellow-500">
              <FaUtensils size={24} />
            </div>
            <h2 className="text-3xl font-black italic uppercase text-white tracking-tighter">
              Refine Your <span className="text-yellow-500">Fuel</span>
            </h2>
          </div>
          <p className="text-gray-500 text-xs font-bold uppercase tracking-[0.2em] ml-1">
            Targeting 1700 kcal / Day Cutting Phase
          </p>
        </div>

        {/* --- MEAL EDITORS --- */}
        <div className="space-y-4 max-h-[450px] overflow-y-auto no-scrollbar pr-2">
          {dietData.map((m, index) => (
            <motion.div 
              key={index}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 p-6 rounded-[30px] border border-white/5 hover:border-yellow-500/30 transition-all group"
            >
              <div className="flex flex-col md:flex-row gap-4">
                {/* Time Label */}
                <div className="flex items-center gap-3 min-w-[120px]">
                  <FaClock className="text-yellow-500/50 group-hover:text-yellow-500 transition-colors" />
                  <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{m.time}</span>
                </div>

                {/* Meal Input */}
                <div className="flex-1">
                  <input 
                    type="text" 
                    value={m.meal}
                    onChange={(e) => handleMealChange(index, e.target.value)}
                    placeholder="Enter meal items..."
                    className="w-full bg-transparent border-none text-white font-bold placeholder-gray-700 focus:ring-0 outline-none text-base"
                  />
                </div>

                {/* Calorie Input */}
                <div className="flex items-center gap-2 bg-black/40 px-4 py-2 rounded-2xl border border-white/5">
                  <FaFire className="text-orange-500 text-xs" />
                  <input 
                    type="text" 
                    value={m.cal}
                    onChange={(e) => handleCalChange(index, e.target.value)}
                    className="w-16 bg-transparent border-none text-gray-300 font-bold focus:ring-0 outline-none text-xs text-center"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- ACTION BUTTONS --- */}
        <div className="pt-10 flex flex-col sm:flex-row gap-4">
          <button 
            type="button"
            onClick={onClose}
            className="flex-1 py-5 bg-gray-800/50 text-gray-400 font-bold rounded-3xl hover:bg-gray-800 hover:text-white transition-all uppercase tracking-widest text-xs"
          >
            Cancel
          </button>
          <button 
            type="button"
            onClick={onClose}
            className="flex-[2] py-5 bg-yellow-500 text-black font-black uppercase italic rounded-3xl hover:bg-white transition-all shadow-[0_10px_30px_rgba(234,179,8,0.2)] flex items-center justify-center gap-3 active:scale-95"
          >
            <FaSave /> Update Daily Plan
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default EditDietModal;