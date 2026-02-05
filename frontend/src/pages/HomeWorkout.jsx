import { Link } from 'react-router-dom';
import { FaArrowLeft, FaHome } from 'react-icons/fa';
import { motion } from 'framer-motion';

// 1. Data aur Component Import
import { homeExercisesList } from '../data/homeExercises';
import ExerciseCard from '../components/ExerciseCard';

const HomeWorkout = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white pt-[100px] px-4 md:px-8 pb-20 overflow-x-hidden">
      
      {/* --- HEADER --- */}
      <div className="max-w-7xl mx-auto">
        {/* Back to Main Home Page */}
        <Link to="/" className="flex items-center gap-2 text-cyan-400 mb-8 hover:text-white transition w-fit group">
          <FaArrowLeft className="group-hover:-translate-x-1 transition" /> Back to Home
        </Link>

        <div className="relative mb-16 py-10">
           <motion.h1 
             initial={{ x: -50, opacity: 0 }}
             animate={{ x: 0, opacity: 1 }}
             className="text-5xl md:text-7xl font-black uppercase italic text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-200 to-teal-500"
           >
             HOME <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-green-500">WORKOUT</span>
           </motion.h1>
           <p className="text-gray-400 text-xl mt-4 max-w-2xl border-l-4 border-green-500 pl-4">
             No Gym? No Problem. Get fit with these effective bodyweight exercises from the comfort of your home.
           </p>
           {/* Background Aesthetic Element (Green Tint) */}
           <div className="absolute top-0 right-0 -z-10 w-64 h-64 bg-green-600/20 rounded-full blur-3xl opacity-50"></div>
        </div>
      </div>

      {/* --- EXERCISE CARDS LIST (Directly showing list) --- */}
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {homeExercisesList.map((exercise, index) => (
          <ExerciseCard key={exercise.id} exercise={exercise} index={index} />
        ))}
      </div>
      
    </div>
  );
};

export default HomeWorkout;