import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { workoutCategories } from '../data/workouts'; // Data import kiya

const GymWorkout = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white pt-[100px] px-6 pb-20">
      
      {/* Header Section */}
      <div className="text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black mb-4 uppercase italic"
        >
          Select Your <span className="text-cyan-400">Target</span>
        </motion.h1>
        <p className="text-gray-400 text-xl">Choose a muscle group to start training.</p>
        <div className="w-32 h-1 bg-cyan-500 mx-auto mt-6 rounded-full"></div>
      </div>

      {/* Grid Cards for Body Parts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {workoutCategories.map((category) => (
          <Link to={`/gym-workout/${category.id}`} key={category.id}>
            <motion.div 
              whileHover={{ scale: 1.03 }}
              className="relative h-[300px] rounded-3xl overflow-hidden cursor-pointer group shadow-2xl border border-gray-700 hover:border-cyan-500/50 transition-all"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-80 transition-opacity"></div>
              </div>

              {/* Text Content */}
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <h3 className="text-3xl font-bold text-white mb-2 uppercase italic group-hover:text-cyan-400 transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  {category.desc}
                </p>
                <div className="w-12 h-1 bg-cyan-500 mt-3 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GymWorkout;