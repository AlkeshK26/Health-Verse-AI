import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';

// 1. Data aur Component Import
import { absExercisesList } from '../../data/absExercises';
import ExerciseCard from '../../components/ExerciseCard';

const Abs = () => {
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
             className="text-5xl md:text-7xl font-black uppercase italic text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-gray-400 to-slate-500"
           >
             CORE OF <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">STEEL</span>
           </motion.h1>
           <p className="text-gray-400 text-xl mt-4 max-w-2xl border-l-4 border-cyan-500 pl-4">
             Abs are made in the kitchen, but built in the gym. Sculpt a rock-solid core.
           </p>
           {/* Background Aesthetic Element (Steel/Cyan Tint) */}
           <div className="absolute top-0 right-0 -z-10 w-64 h-64 bg-cyan-600/20 rounded-full blur-3xl opacity-50"></div>
        </div>
      </div>

      {/* --- EXERCISE CARDS --- */}
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {absExercisesList.map((exercise, index) => (
          <ExerciseCard key={exercise.id} exercise={exercise} index={index} />
        ))}
      </div>
      
    </div>
  );
};

export default Abs;