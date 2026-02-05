import { motion } from 'framer-motion';
import { FaCheckCircle, FaListOl, FaPlus } from 'react-icons/fa';
import axios from 'axios';
import { useLocation } from 'react-router-dom'; // 1. Import Location Hook

const ExerciseCard = ({ exercise, index }) => {
  const location = useLocation(); // 2. Get Current URL (e.g., /gym-workout/chest)

  // Unique ID generate karna (Scroll target ke liye)
  // e.g., "Incline Push Up" -> "incline-push-up"
  const cardId = exercise.name.toLowerCase().replace(/\s+/g, '-');

  // --- SAVE WORKOUT LOGIC ---
  const handleSaveWorkout = async () => {
    try {
      const token = localStorage.getItem('token');
      
      if (!token) {
        alert("Session expired. Please login again to save workouts! 💪");
        return;
      }

      const res = await axios.post(
        'http://localhost:5000/api/auth/save-workout', 
        { 
          exerciseName: exercise.name,
          category: exercise.category || "General Training",
          video: exercise.video,
          path: location.pathname // 3. Current Page Path Save kar rahe hain
        }, 
        { 
          headers: { 
            Authorization: `Bearer ${token}` 
          } 
        }
      );

      alert(`${exercise.name} added to your routine! 🚀`);
    } catch (err) {
      console.error("Save Error:", err.response?.data);
      alert(err.response?.data?.message || "Error saving workout");
    }
  };

  return (
    <motion.div
      id={cardId} // 4. ID Attach kiya taaki dashboard se yahan scroll ho sake
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="max-w-6xl mx-auto bg-gray-800/40 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-xl flex flex-col lg:flex-row group hover:border-cyan-500/50 transition-all duration-500"
    >
      {/* --- LEFT SIDE: VIDEO SECTION --- */}
      <div className="lg:w-[25%] relative h-[250px] lg:h-auto bg-black shrink-0">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-50 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
        
        <video
          src={exercise.video}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover relative z-10 opacity-90 group-hover:opacity-100 transition-opacity"
        />
        
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent p-4 z-20">
           <span className="text-4xl font-black text-white/10 absolute -top-2 left-4 z-0">0{index + 1}</span>
           <h2 className="text-xl md:text-2xl font-bold text-white relative z-10">{exercise.name}</h2>
           <p className="text-cyan-300 text-xs mt-0.5 relative z-10 line-clamp-1">{exercise.desc}</p>
        </div>
      </div>

      {/* --- RIGHT SIDE: INFO SECTION --- */}
      <div className="lg:w-[75%] p-5 md:p-6 flex flex-col justify-between gap-5 bg-gradient-to-br from-gray-900/50 to-transparent">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Benefits List */}
          <div>
             <div className="flex items-center gap-2 mb-2">
               <FaCheckCircle className="text-cyan-400 text-lg" />
               <h3 className="text-sm font-bold uppercase tracking-wider text-white">Key Benefits</h3>
             </div>
             <ul className="space-y-1.5">
               {exercise.benefits.map((benefit, i) => (
                 <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                   <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 mt-1.5 shrink-0 shadow-[0_0_8px_cyan]"></span>
                   <span>{benefit}</span>
                 </li>
               ))}
             </ul>
          </div>

          {/* Steps List */}
          <div>
             <div className="flex items-center gap-2 mb-2">
               <FaListOl className="text-blue-400 text-lg" />
               <h3 className="text-sm font-bold uppercase tracking-wider text-white">How to Perform</h3>
             </div>
             <ol className="space-y-1.5">
               {exercise.steps.map((step, i) => (
                 <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                   <span className="flex items-center justify-center h-5 w-5 rounded-full bg-blue-900/50 border border-blue-500 text-blue-400 text-[10px] font-bold shrink-0">
                     {i + 1}
                   </span>
                   <span>{step}</span>
                 </li>
               ))}
             </ol>
          </div>
        </div>

        {/* --- ADD TO PLAN BUTTON --- */}
        <div className="flex justify-end pt-4 border-t border-white/5">
          <button 
            onClick={handleSaveWorkout}
            className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold px-8 py-3 rounded-xl hover:scale-105 transition-all shadow-lg shadow-cyan-500/20 active:scale-95"
          >
            <FaPlus /> Add to My Plan
          </button>
        </div>

      </div>
    </motion.div>
  );
};

export default ExerciseCard;