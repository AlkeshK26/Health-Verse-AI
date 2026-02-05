import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';

// 1. Data aur Component Import karo
import { chestExercisesList } from '../../data/chestExercises';
import ExerciseCard from '../../components/ExerciseCard';

const Chest = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white pt-[100px] px-4 md:px-8 pb-20 overflow-x-hidden">
      
      {/* --- HEADER & BACK BUTTON --- */}
      <div className="max-w-7xl mx-auto">
        <Link to="/gym-workout" className="flex items-center gap-2 text-cyan-400 mb-8 hover:text-white transition w-fit group">
          <FaArrowLeft className="group-hover:-translate-x-1 transition" /> Back to Body Parts
        </Link>

        <div className="relative mb-16 py-10">
           <motion.h1 
             initial={{ x: -50, opacity: 0 }}
             animate={{ x: 0, opacity: 1 }}
             className="text-5xl md:text-7xl font-black uppercase italic text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500"
           >
             CHEST <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">DOMINATION</span>
           </motion.h1>
           <p className="text-gray-400 text-xl mt-4 max-w-2xl border-l-4 border-cyan-500 pl-4">
             Sculpt a powerful, defined chest with this targeted routine. Focus on form and controlled reps.
           </p>
           {/* Background Aesthetic Element */}
           <div className="absolute top-0 right-0 -z-10 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl opacity-50"></div>
        </div>
      </div>

      {/* --- EXERCISE CARDS LIST --- */}
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {chestExercisesList.map((exercise, index) => (
          // 2. Reusable Component use karo
          <ExerciseCard key={exercise.id} exercise={exercise} index={index} />
        ))}
      </div>
      
    </div>
  );
};

export default Chest;