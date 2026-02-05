import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // 1. Navigation Hook Import

import { 
  FaFire, FaWeight, FaProjectDiagram, FaCalendarCheck, 
  FaAppleAlt, FaUtensils, FaClock, FaEdit, FaChevronRight, FaDumbbell, FaTrash
} from 'react-icons/fa';

import EditDietModal from './EditDietModal'; 

const UserView = ({ data }) => {
  const [isDietModalOpen, setIsDietModalOpen] = useState(false);
  const navigate = useNavigate(); // 2. Navigate initialize
  
  // Local state for workouts (Data sync + Delete handling)
  const [myWorkouts, setMyWorkouts] = useState(data.savedWorkouts || []);

  useEffect(() => {
    if(data.savedWorkouts) {
        setMyWorkouts(data.savedWorkouts);
    }
  }, [data.savedWorkouts]);

  // --- REDIRECT FUNCTION (Click Logic) ---
  const handleCardClick = (path, exerciseName) => {
    if (path) {
      // ID generate karo jo ExerciseCard mein banayi thi
      const elementId = exerciseName.toLowerCase().replace(/\s+/g, '-');
      
      // Page par navigate karo aur ID hash add karo
      navigate(`${path}#${elementId}`);
      
      // Thoda wait karke scroll karo taaki page load ho jaye
      setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            // Highlight effect (Optional)
            element.style.border = "2px solid #06b6d4"; 
            setTimeout(() => element.style.border = "none", 2000);
        }
      }, 500);
    }
  };

  // --- DELETE FUNCTION ---
  const handleDelete = async (id) => {
    if(!window.confirm("Remove this exercise?")) return;
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:5000/api/auth/remove-workout/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setMyWorkouts(myWorkouts.filter(w => w._id !== id));
    } catch (err) {
      alert("Error removing workout");
    }
  };

  // Diet Data State
  const [dietData, setDietData] = useState(data.dietPlan || [
    { time: "Breakfast", meal: "Oats with protein scoop & berries", cal: "400 kcal" },
    { time: "Lunch", meal: "Grilled chicken/Paneer with brown rice & salad", cal: "500 kcal" },
    { time: "Snack", meal: "Handful of almonds & green tea", cal: "200 kcal" },
    { time: "Dinner", meal: "Scrambled eggs/Soya chunks & sauteed veggies", cal: "600 kcal" },
  ]);

  const consumed = 1200; 
  const targetCals = data.calories || 1700; 
  const percentage = (consumed / targetCals) * 100;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      
      {/* ================= LEFT COLUMN ================= */}
      <div className="lg:col-span-2 space-y-8">
        
        {/* STATS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-orange-500/10 border border-orange-500/20 p-8 rounded-[30px] relative overflow-hidden group">
            <div className="flex justify-between items-start mb-6">
              <div>
                <FaFire className="text-orange-500 text-4xl mb-2" />
                <h3 className="text-gray-400 text-sm font-bold uppercase tracking-widest">Energy Balance</h3>
              </div>
              <div className="text-right">
                <span className="text-2xl font-black text-white italic">{consumed}</span>
                <span className="text-gray-500 text-xs block uppercase">Consumed</span>
              </div>
            </div>
            <div className="relative h-4 bg-gray-800 rounded-full overflow-hidden mb-4 border border-white/5">
              <motion.div initial={{ width: 0 }} animate={{ width: `${percentage}%` }} transition={{ duration: 1 }} className="absolute top-0 left-0 h-full bg-gradient-to-r from-orange-600 to-yellow-400" />
            </div>
            <div className="flex justify-between text-[10px] font-black uppercase italic tracking-wider">
              <span className="text-orange-400">{Math.round(percentage)}% Completed</span>
              <span className="text-gray-500">{targetCals - consumed} kcal Remaining</span>
            </div>
          </div>

          <div className="bg-emerald-500/10 border border-emerald-500/20 p-8 rounded-[30px] relative overflow-hidden">
            <FaCalendarCheck className="text-emerald-500 text-4xl mb-4" />
            <h3 className="text-gray-400 text-sm font-bold uppercase tracking-widest">Target Objective</h3>
            <p className="text-4xl font-black text-white uppercase italic tracking-tighter">{data.goal || "Visible Abs"}</p>
            <div className="mt-4 flex items-center gap-2">
               <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
               <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">Active Cutting Phase</p>
            </div>
          </div>
        </div>

        {/* --- SAVED ROUTINE SECTION (Clickable Cards) --- */}
        <div className="bg-gray-800/40 border border-white/5 rounded-[40px] p-8 mt-8">
          <h3 className="text-xl font-bold italic mb-6 flex items-center gap-3 text-white uppercase">
            <FaDumbbell className="text-cyan-400" /> My Saved Routine
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {myWorkouts && myWorkouts.length > 0 ? (
              myWorkouts.map((workout, index) => (
                <motion.div 
                  key={workout._id || index}
                  whileHover={{ y: -5 }}
                  // 3. Click Event Add kiya (Path check ke saath)
                  onClick={() => handleCardClick(workout.path, workout.exerciseName)}
                  className="bg-black/40 p-4 rounded-3xl border border-white/5 group hover:border-cyan-500/50 transition-all flex flex-col gap-3 relative cursor-pointer"
                >
                  <div className="relative h-32 rounded-2xl overflow-hidden bg-gray-900">
                     <video 
                        src={workout.video} 
                        muted 
                        loop 
                        autoPlay 
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" 
                     />
                     <div className="absolute top-2 right-2 bg-cyan-500 text-black text-[10px] font-black px-2 py-0.5 rounded-full uppercase">
                       {workout.category || "General"}
                     </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <h4 className="font-bold text-white text-sm truncate pr-2">{workout.exerciseName}</h4>
                    {/* Delete Button (Stop Propagation zaroori hai taaki delete karne par redirect na ho) */}
                    <button 
                      onClick={(e) => { e.stopPropagation(); handleDelete(workout._id); }} 
                      className="text-gray-500 hover:text-red-500 transition-colors p-1"
                    >
                      <FaTrash className="text-sm" />
                    </button>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full py-10 text-center border-2 border-dashed border-white/5 rounded-[30px]">
                <p className="text-gray-500 italic text-sm">No exercises added yet. Go to Workouts to start building your plan! 💪</p>
              </div>
            )}
          </div>
        </div>

        {/* --- DIET PLAN SECTION --- */}
        <div className="bg-gray-800/40 border border-white/5 rounded-[40px] p-8 shadow-inner">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="text-xl font-bold flex items-center gap-3 italic text-white uppercase">
                <FaUtensils className="text-yellow-500" /> Daily Fuel Intake
              </h3>
              <p className="text-xs text-gray-500 font-bold mt-1 tracking-widest uppercase">Target: {targetCals} kcal</p>
            </div>
            <button onClick={() => setIsDietModalOpen(true)} className="px-6 py-2 bg-yellow-500/10 border border-yellow-500/30 text-yellow-500 rounded-xl text-xs font-black uppercase hover:bg-yellow-500 hover:text-black transition-all flex items-center gap-2">
              <FaEdit /> Customize
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {dietData.map((m, i) => (
              <motion.div key={i} whileHover={{ scale: 1.02 }} className="bg-gray-900/60 p-5 rounded-3xl border border-white/5 flex items-center gap-5 group transition-all hover:border-yellow-500/50">
                <div className="w-14 h-14 bg-gray-800 rounded-2xl flex items-center justify-center text-2xl text-yellow-500 group-hover:bg-yellow-500 group-hover:text-black transition-colors duration-500 shadow-xl">
                  <FaClock />
                </div>
                <div>
                  <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{m.time}</h4>
                  <p className="text-sm font-bold text-white leading-tight">{m.meal}</p>
                  <p className="text-[10px] text-yellow-500 font-black mt-1 italic tracking-widest">{m.cal}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= RIGHT COLUMN ================= */}
      <div className="lg:col-span-1">
        <div className="bg-gradient-to-b from-gray-800/80 to-transparent p-10 rounded-[50px] border border-white/10 text-center flex flex-col items-center sticky top-[100px]">
          <div className="relative mb-8 group">
            <div className="absolute inset-0 bg-cyan-500 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <div className="w-44 h-44 rounded-full bg-gray-900 border-2 border-cyan-500/50 flex items-center justify-center text-7xl relative z-10 p-2">
               <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center shadow-inner">👤</div>
            </div>
            <div className="absolute bottom-2 right-2 w-8 h-8 bg-cyan-500 rounded-xl border-2 border-gray-900 z-20 flex items-center justify-center text-black font-black text-xs">A+</div>
          </div>
          <h2 className="text-3xl font-black italic mb-1 uppercase tracking-tighter text-white">{data.name}</h2>
          <p className="text-cyan-400 font-bold text-xs uppercase tracking-[0.4em] mb-10 decoration-cyan-500/30 underline underline-offset-8">Premium Member</p>
          <div className="w-full space-y-4">
            <div className="bg-white/5 p-5 rounded-[25px] border border-white/5 flex items-center gap-5 hover:bg-white/10 transition-all cursor-pointer">
               <div className="w-10 h-10 bg-cyan-500/10 rounded-xl flex items-center justify-center text-cyan-400">
                  <FaWeight />
               </div>
               <div className="text-left">
                  <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest">Weight</p>
                  <p className="text-xl font-black italic text-white">{data.weight || "72.5"} <span className="text-sm font-normal text-gray-500">kg</span></p>
               </div>
            </div>
            <div className="bg-white/5 p-5 rounded-[25px] border border-white/5 flex items-center gap-5 hover:bg-white/10 transition-all cursor-pointer">
               <div className="w-10 h-10 bg-yellow-500/10 rounded-xl flex items-center justify-center text-yellow-500">
                  <FaAppleAlt />
               </div>
               <div className="text-left">
                  <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest">Daily Goal</p>
                  <p className="text-xl font-black italic text-white">{targetCals} <span className="text-sm font-normal text-gray-500">kcal/day</span></p>
               </div>
            </div>
          </div>
          <button className="w-full mt-10 py-5 bg-white text-black font-black uppercase italic rounded-3xl hover:bg-cyan-500 hover:text-white transition-all transform hover:scale-[1.03] shadow-2xl shadow-cyan-500/10">
            Export My Progress
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isDietModalOpen && (
          <EditDietModal isOpen={isDietModalOpen} onClose={() => setIsDietModalOpen(false)} dietData={dietData} setDietData={setDietData} />
        )}
      </AnimatePresence>

    </div>
  );
};

export default UserView;