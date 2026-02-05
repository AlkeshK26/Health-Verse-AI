import { motion } from 'framer-motion';
import { FaTimes, FaUser, FaBullseye, FaUtensils, FaSave } from 'react-icons/fa';

const EditProfileModal = ({ isOpen, onClose, userData, setUserData }) => {
  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center px-4">
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
      />

      {/* Modal Content */}
      <motion.div 
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="bg-[#0f1218] border border-white/10 w-full max-w-lg rounded-[40px] p-8 md:p-10 relative z-10 shadow-2xl"
      >
        <button onClick={onClose} className="absolute top-6 right-6 text-gray-500 hover:text-white transition">
          <FaTimes size={24} />
        </button>

        <h2 className="text-3xl font-black italic mb-8 uppercase tracking-tighter text-white">
          Update <span className="text-cyan-400">Profile</span>
        </h2>

        <form className="space-y-6">
          {/* Name Field */}
          <div>
            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 block">Display Name</label>
            <div className="relative">
              <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-500" />
              <input 
                type="text" 
                name="name"
                value={userData.name}
                onChange={handleChange}
                className="w-full bg-gray-900 border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-white focus:border-cyan-500 outline-none transition"
              />
            </div>
          </div>

          {/* Fitness Goal Field */}
          <div>
            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 block">Fitness Goal</label>
            <div className="relative">
              <FaBullseye className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-500" />
              <input 
                type="text" 
                name="goal"
                placeholder="e.g., Visible Abs"
                className="w-full bg-gray-900 border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-white focus:border-emerald-500 outline-none transition"
              />
            </div>
          </div>

          {/* Calorie Goal Field */}
          <div>
            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 block">Daily Calories (kcal)</label>
            <div className="relative">
              <FaUtensils className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-500" />
              <input 
                type="number" 
                name="calories"
                placeholder="1700"
                className="w-full bg-gray-900 border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-white focus:border-orange-500 outline-none transition"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 flex gap-4">
            <button 
              type="button"
              onClick={onClose}
              className="flex-1 py-4 bg-gray-800 text-white font-bold rounded-2xl hover:bg-gray-700 transition"
            >
              Cancel
            </button>
            <button 
              type="submit"
              className="flex-1 py-4 bg-cyan-500 text-black font-black uppercase italic rounded-2xl hover:bg-white transition shadow-xl shadow-cyan-500/20 flex items-center justify-center gap-2"
            >
              <FaSave /> Save Changes
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default EditProfileModal;