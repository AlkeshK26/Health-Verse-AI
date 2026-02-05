import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Data & Component Import
import { yogaExercises } from '../data/yogaData';
import ExerciseCard from '../components/ExerciseCard'; // Wahi same card reuse kar rahe hain

const Yoga = () => {
  return (
    // Theme: Stone/Dark Warm Background
    <div className="bg-[#1c1917] min-h-screen text-white pt-[100px] px-4 md:px-8 pb-20 overflow-x-hidden">
      
      {/* --- HEADER --- */}
      <div className="max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2 text-amber-400 mb-8 hover:text-white transition w-fit group">
          <FaArrowLeft className="group-hover:-translate-x-1 transition" /> Back to Home
        </Link>

        <div className="relative mb-16 py-10">
           <motion.h1 
             initial={{ x: -50, opacity: 0 }}
             animate={{ x: 0, opacity: 1 }}
             className="text-5xl md:text-7xl font-black uppercase italic text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-orange-400 to-red-500"
           >
             YOGA & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">FLOW</span>
           </motion.h1>
           <p className="text-stone-400 text-xl mt-4 max-w-2xl border-l-4 border-amber-500 pl-4">
             Align your body, breath, and mind. Find strength in stillness.
           </p>
           
           {/* Background Aesthetic (Warm Glow) */}
           <div className="absolute top-0 right-0 -z-10 w-64 h-64 bg-amber-600/20 rounded-full blur-3xl opacity-50 animate-pulse"></div>
        </div>
      </div>

      {/* --- EXERCISE CARDS GRID --- */}
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {yogaExercises.map((exercise, index) => (
          // Yahan hum wahi Card use kar rahe hain jo Gym workout mein kiya tha
          <ExerciseCard key={exercise.id} exercise={exercise} index={index} />
        ))}
      </div>
      
    </div>
  );
};

export default Yoga;