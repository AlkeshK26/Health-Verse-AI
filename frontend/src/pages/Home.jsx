import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaRunning, FaArrowRight, FaDumbbell, FaBrain, FaNutritionix } from 'react-icons/fa';

// Images (Aapke imports same rahenge)
import gymImg from '../assets/gym.jpg';
import homeImg from '../assets/home.jpg';
import yogaImg from '../assets/yoga.jpg';
import stressImg from '../assets/stress.jpg';
import trackerImg from '../assets/calorie.jpg';
import shopsImg from '../assets/shops.jpg';

const Home = () => {
  return (
    <div className="bg-[#0b0e14] min-h-screen text-white overflow-x-hidden relative selection:bg-cyan-500 selection:text-black">
      
      {/* --- AMBIENT BACKGROUND GLOWS (New) --- */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[100px]" />
      </div>

      {/* --- HERO SECTION --- */}
      <div className="relative h-screen w-full flex items-center justify-center">
        
        {/* Video Background with Better Overlay */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-[#0b0e14] z-10"></div>
          <video
            autoPlay
            loop
            muted
            className="w-full h-full object-cover transform scale-105 opacity-80"
          >
            <source src="https://cdn.pixabay.com/video/2023/04/13/158739-817684627_large.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center px-4 max-w-6xl mx-auto mt-[-50px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Animated Badge */}
            <motion.div 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-900/20 backdrop-blur-md mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="text-cyan-300 text-xs md:text-sm font-bold tracking-widest uppercase">
                Next Gen AI Fitness
              </span>
            </motion.div>

            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-none tracking-tighter">
              HEALTH <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]">VERSE AI</span>
            </h1>

            <p className="text-lg md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
              Ascend to your peak potential. <span className="text-white font-medium">AI-driven</span> diet plans, 
              <span className="text-white font-medium"> customized</span> workouts, and mental clarity in one ecosystem.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/signup">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-8 py-4 bg-cyan-500 text-black rounded-xl font-black text-lg overflow-hidden shadow-[0_0_40px_rgba(6,182,212,0.4)]"
                >
                  <div className="absolute inset-0 w-full h-full bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  <span className="relative flex items-center gap-2">
                    Start Your Journey <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.button>
              </Link>
              
              <Link to="/login">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-transparent border border-gray-600 hover:border-white rounded-xl font-bold text-lg text-gray-300 hover:text-white transition-all duration-300"
                >
                  Member Login
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 z-20 text-gray-500 text-sm flex flex-col items-center gap-2"
        >
          <p className="uppercase tracking-[0.3em] text-[10px]">Scroll Down</p>
          <div className="w-[1px] h-12 bg-gradient-to-b from-cyan-500 to-transparent"></div>
        </motion.div>
      </div>

      {/* --- STATS STRIP (NEW ADDITION) --- */}
      <div className="relative z-30 border-y border-white/5 bg-black/40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto py-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <StatItem number="10k+" label="Active Users" />
          <StatItem number="500+" label="Workout Plans" />
          <StatItem number="98%" label="Success Rate" />
          <StatItem number="24/7" label="AI Support" />
        </div>
      </div>

      {/* --- FEATURES SECTION --- */}
      <div className="py-32 px-6 md:px-12 relative z-20">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Evolve Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Lifestyle</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our premium features designed to target every aspect of your physical and mental health.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <Link to="/gym-workout">
            <FeatureCard title="Gym Workout" desc="Heavy lifting & hypertrophy schedules." image={gymImg} icon={<FaDumbbell />} />
          </Link>
          
          <Link to="/home-workout">
            <FeatureCard title="Home Workout" desc="Bodyweight mastery from your living room." image={homeImg} icon={<FaRunning />} />
          </Link>
          
          <Link to="/yoga">
            <FeatureCard title="Yoga & Zen" desc="Flexibility flows & mindfulness sessions." image={yogaImg} icon={<FaBrain />} />
          </Link>
          
          <Link to="/stress-psychology">
            <FeatureCard title="Stress Control" desc="Psychological tools for mental resilience." image={stressImg} icon={<FaBrain />} />
          </Link>
          
          {/* Custom Plan Card (Highlighted) */}
          <Link to="/customize-plan">
          <FeatureCard 
            title="CUSTOMIZE PLAN " 
            desc="Algorithms that build your unique routine." 
            image="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1470&auto=format&fit=crop" 
            isSpecial={true}
          />
          </Link>
<Link to="/ai-coach">
          <FeatureCard 
            title="AI Coach" 
            desc="Real-time answers to your health queries." 
            image="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1632&auto=format&fit=crop" 
          />
          </Link>
          <Link to="/smart-diet-plan">
            <FeatureCard title="Smart Diet" desc="Macro-perfect meal planning by AI." image="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1453&auto=format&fit=crop" icon={<FaNutritionix />} />
          </Link>
          <Link to ="calorie-tracker">
          <FeatureCard title="Calorie Lens" desc="Computer vision food tracking." image={trackerImg} />
          </Link>
          
          <Link to="/shops">
            <FeatureCard title="Pro Shop" desc="Elite supplements & gear store." image={shopsImg} />
          </Link>
        </div>
      </div>

      {/* --- FOOTER --- */}
      <footer className="bg-black py-12 text-center border-t border-white/10 relative z-40">
        <h3 className="text-2xl font-bold text-white mb-2">HEALTH<span className="text-cyan-400">VERSE</span></h3>
        <p className="text-gray-600 text-sm">© 2026 HealthVerse. Engineered for greatness.</p>
      </footer>
    </div>
  );
};

// --- HELPER COMPONENTS ---

const StatItem = ({ number, label }) => (
  <div>
    <h4 className="text-3xl font-black text-white mb-1">{number}</h4>
    <p className="text-gray-500 text-xs uppercase tracking-widest font-bold">{label}</p>
  </div>
);

// Updated Feature Card with Glassmorphism and Hover Effects
const FeatureCard = ({ image, title, desc, icon, isSpecial }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -10 }}
      className={`relative h-[320px] rounded-[30px] overflow-hidden group cursor-pointer border ${isSpecial ? 'border-cyan-500/50 shadow-[0_0_30px_rgba(6,182,212,0.2)]' : 'border-white/10'}`}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e14] via-[#0b0e14]/60 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500"></div>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end h-full">
        {/* Decorative Icon Circle */}
        <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-4 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black group-hover:scale-110 transition-all duration-300">
          {icon || <FaArrowRight />}
        </div>

        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{title}</h3>
        <p className="text-gray-400 text-sm line-clamp-2 group-hover:text-gray-200 transition-colors">{desc}</p>
        
        {/* Border Glow on Hover */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-500/30 rounded-[30px] transition-all duration-500 pointer-events-none"></div>
      </div>
    </motion.div>
  );
};

export default Home;