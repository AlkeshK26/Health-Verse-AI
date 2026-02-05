import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaDumbbell, FaRunning, FaYinYang, FaBrain, FaEdit, 
  FaRobot, FaAppleAlt, FaCalculator, FaShoppingCart, 
  FaBars, FaTimes, FaSignOutAlt 
} from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  // Updated List: Path changed to /ai-coach to match your requirement
  const menuItems = [
    { path: "/gym-workout", name: "Gym Workout", icon: <FaDumbbell /> },
    { path: "/home-workout", name: "Home Workout", icon: <FaRunning /> },
    { path: "/yoga", name: "Yoga & Zen", icon: <FaYinYang /> },
    { path: "/stress-psychology", name: "Stress Relief", icon: <FaBrain /> },
    { path: "/customize-plan", name: "Custom Plan", icon: <FaEdit /> },
    { path: "/ai-coach", name: "AI Coach", icon: <FaRobot /> }, // Fixed Path
    { path: "/smart-diet-plan", name: "Smart Diet", icon: <FaAppleAlt /> },
{ path: "/calorie-tracker", name: "Calorie Lens", icon: <FaCalculator /> }, // Yeh path important hai
    { path: "/shops", name: "Pro Shop", icon: <FaShoppingCart /> },
  ];

  const sidebarVariants = {
    open: { width: "260px", transition: { type: "spring", stiffness: 300, damping: 30 } },
    closed: { width: "80px", transition: { type: "spring", stiffness: 300, damping: 30 } },
  };

  return (
    <motion.div
      variants={sidebarVariants}
      animate={isOpen ? "open" : "closed"}
      className="h-screen bg-[#0b0e14] border-r border-white/10 sticky top-0 left-0 z-50 flex flex-col justify-between shadow-2xl shadow-cyan-900/20"
    >
      {/* --- HEADER --- */}
      <div className="p-5 flex items-center justify-between">
        <AnimatePresence>
          {isOpen && (
            <motion.h1 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              className="text-2xl font-black italic tracking-tighter text-white"
            >
              H<span className="text-cyan-400">VI</span>
            </motion.h1>
          )}
        </AnimatePresence>
        
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-lg bg-white/5 hover:bg-cyan-500/20 text-cyan-400 transition-all"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* --- MENU ITEMS --- */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden px-3 space-y-2 custom-scrollbar">
        {menuItems.map((item, index) => {
          const isActive = location.pathname === item.path;

          return (
            <NavLink to={item.path} key={index}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center gap-4 p-3 rounded-xl cursor-pointer transition-all duration-300 relative overflow-hidden group ${
                  isActive 
                    ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-500/30" 
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                {isActive && (
                  <div className="absolute inset-0 bg-white/20 blur-md"></div>
                )}

                <div className="text-xl relative z-10">{item.icon}</div>
                
                <AnimatePresence mode="wait">
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="font-semibold text-sm whitespace-nowrap relative z-10"
                    >
                      {item.name}
                    </motion.div>
                  )}
                </AnimatePresence>

                {!isActive && (
                  <div className="absolute right-0 h-full w-1 bg-cyan-500 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                )}
              </motion.div>
            </NavLink>
          );
        })}
      </div>

      {/* --- FOOTER / LOGOUT --- */}
      <div className="p-3 border-t border-white/10">
        <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-4 p-3 rounded-xl cursor-pointer text-red-400 hover:bg-red-500/10 transition-all"
        >
            <div className="text-xl"><FaSignOutAlt /></div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="font-bold text-sm"
                    >
                        Logout
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Sidebar;