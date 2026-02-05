import { motion } from 'framer-motion';
import { FaUsers, FaHeartbeat, FaCode, FaRocket } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white pt-[80px]"> {/* pt-[80px] for Navbar space */}
      
      {/* --- HERO SECTION --- */}
      <div className="relative h-[60vh] flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=1469&auto=format&fit=crop')] bg-cover bg-center bg-fixed">
        <div className="absolute inset-0 bg-black/70"></div> {/* Dark Overlay */}
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-4 tracking-tight"
          >
            ABOUT <span className="text-cyan-400">US</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            We are revolutionizing fitness by combining human expertise with Artificial Intelligence.
          </motion.p>
        </div>
      </div>

      {/* --- MISSION & VISION GRID --- */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="h-1 w-12 bg-cyan-500 rounded-full"></span>
              <span className="text-cyan-400 font-bold uppercase tracking-wider">Our Mission</span>
            </div>
            <h2 className="text-4xl font-bold mb-6 leading-tight">
              Making Elite Fitness <br /> Accessible to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Everyone</span>
            </h2>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              HealthVerse wasn't built just to be another gym app. It was born from a frustration: **Why is personalized fitness so expensive?** </p>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              We use advanced AI algorithms to create diet and workout plans that usually cost thousands of rupees from personal trainers. Whether you are a beginner or a pro, HealthVerse adapts to YOU.
            </p>
            <Link to="/contact">
              <button className="px-8 py-3 border border-cyan-500 text-cyan-400 font-bold rounded-lg hover:bg-cyan-500 hover:text-white transition duration-300">
                Get in Touch
              </button>
            </Link>
          </motion.div>

          {/* Image/Visual */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl opacity-30 blur-lg"></div>
            <img 
              src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1470&auto=format&fit=crop" 
              alt="Gym Mission" 
              className="relative rounded-2xl shadow-2xl border border-white/10"
            />
          </motion.div>
        </div>
      </div>

      {/* --- STATS SECTION (Glassmorphism) --- */}
      <div className="bg-gray-800/50 py-16 backdrop-blur-sm border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <StatItem icon={<FaUsers />} number="10k+" label="Active Users" />
          <StatItem icon={<FaHeartbeat />} number="500+" label="Workout Plans" />
          <StatItem icon={<FaCode />} number="AI" label="Powered Technology" />
          <StatItem icon={<FaRocket />} number="24/7" label="Support Available" />
        </div>
      </div>

      {/* --- DEVELOPER / STORY SECTION --- */}
      <div className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-12">Built with Passion & Code</h2>
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl border border-gray-700 shadow-xl inline-block max-w-3xl hover:border-cyan-500/50 transition duration-500">
          <p className="text-xl text-gray-300 italic mb-6">
            "I built HealthVerse with a single goal: To leverage the MERN stack and AI to solve real-world health problems. This project represents the perfect blend of modern web development and fitness science."
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center text-xl font-bold text-white">
              HV
            </div>
            <div className="text-left">
              <h4 className="text-white font-bold">The Developer</h4>
              <p className="text-cyan-400 text-sm">Full Stack Engineer</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

// Reusable Stat Component
const StatItem = ({ icon, number, label }) => (
  <div className="flex flex-col items-center">
    <div className="text-4xl text-cyan-400 mb-2">{icon}</div>
    <h3 className="text-3xl font-bold text-white">{number}</h3>
    <p className="text-gray-400 text-sm uppercase tracking-wide mt-1">{label}</p>
  </div>
);

export default About;