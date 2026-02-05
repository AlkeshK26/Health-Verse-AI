import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';

// 1. Data aur Component Import
import { backExercisesList } from '../../data/backExercises';
import ExerciseCard from '../../components/ExerciseCard';

const Back = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white pt-[100px] px-4 md:px-8 pb-20 overflow-x-hidden">
      
      {/* --- HEADER --- */}
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
             BACK <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">ATTACK</span>
           </motion.h1>
           <p className="text-gray-400 text-xl mt-4 max-w-2xl border-l-4 border-cyan-500 pl-4">
             Build a wide, thick, and powerful back. Focus on the stretch and the squeeze.
           </p>
           {/* Background Aesthetic Element */}
           <div className="absolute top-0 right-0 -z-10 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl opacity-50"></div>
        </div>
      </div>

      {/* --- EXERCISE CARDS --- */}
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {backExercisesList.map((exercise, index) => (
          <ExerciseCard key={exercise.id} exercise={exercise} index={index} />
        ))}
      </div>
      
    </div>
  );
};

export default Back;