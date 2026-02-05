import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaArrowLeft, FaCloudRain, FaTree, FaWater, FaBrain, FaMoon, FaVolumeUp, 
  FaFire, FaCoffee, FaOm, FaSun, FaRunning, FaBookOpen, FaUserFriends, 
  FaMobileAlt, FaSmile, FaFistRaised, FaHourglassHalf, FaSnowflake, FaPenFancy
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

// Components Import
import BreathingExercise from '../components/BreathingExercise';
import SoundPlayerCard from '../components/SoundPlayerCard';
import MoodSelector from '../components/MoodSelector';

// Audio Imports
import rainAudio from '../assets/audio/rain.mp3';
import oceanAudio from '../assets/audio/ocean.mp3';
import forestAudio from '../assets/audio/forest.mp3';
import fireAudio from '../assets/audio/fire.mp3'; 
import nightAudio from '../assets/audio/night.mp3'; 
import cafeAudio from '../assets/audio/caffe.mp3'; 
import meditationAudio from '../assets/audio/om.mp3'; 

// --- DATA: 16 Mind Reading Topics ---
const mindTopics = [
  {
    id: 1,
    title: "The Power of Sleep",
    short: "Recovery happens when you sleep.",
    full: "Sleep is the foundation of mental health. During REM sleep, your brain processes emotions and memories. Lack of sleep increases cortisol (stress hormone) and decreases focus. Aim for 7-9 hours to reset your dopamine baselines.",
    icon: <FaMoon />,
    color: "purple"
  },
  {
    id: 2,
    title: "Workout Stress",
    short: "Listen to your body, avoid burnout.",
    full: "Exercise is good stress (eustress), but too much without recovery becomes distress. Overtraining leads to irritability, insomnia, and injury. If your resting heart rate is high, take a rest day or do active recovery like yoga.",
    icon: <FaRunning />,
    color: "red"
  },
  {
    id: 3,
    title: "Dopamine Detox",
    short: "Reset your brain's reward system.",
    full: "Constant scrolling and cheap entertainment fry your dopamine receptors, making hard work feel impossible. Take 24 hours off screens to lower your baseline stimulation. Boredom is necessary for creativity.",
    icon: <FaMobileAlt />,
    color: "blue"
  },
  {
    id: 4,
    title: "Morning Sunlight",
    short: "Set your circadian rhythm.",
    full: "Viewing sunlight within 30 minutes of waking up triggers cortisol release (for energy) and sets a timer for melatonin release (for sleep) 12-14 hours later. It is the single best thing for sleep quality.",
    icon: <FaSun />,
    color: "yellow"
  },
  {
    id: 5,
    title: "Growth Mindset",
    short: "Talent is not fixed.",
    full: "Coined by Carol Dweck, this is the belief that abilities can be developed through dedication. 'I can't do this' becomes 'I can't do this YET'. Embrace failure as data, not a character flaw.",
    icon: <FaBrain />,
    color: "green"
  },
  {
    id: 6,
    title: "The Flow State",
    short: "Deep immersion in tasks.",
    full: "Flow is a state where you are so involved in an activity that nothing else seems to matter. To achieve it: eliminate distractions, choose a task slightly above your skill level, and define clear goals.",
    icon: <FaWater />,
    color: "cyan"
  },
  {
    id: 7,
    title: "Gratitude Journaling",
    short: "Rewire for positivity.",
    full: "Writing down 3 things you are grateful for every morning physically changes your brain structure. It strengthens neural pathways associated with optimism and reduces anxiety by shifting focus from 'lack' to 'abundance'.",
    icon: <FaBookOpen />,
    color: "pink"
  },
  {
    id: 8,
    title: "Social Connection",
    short: "Humans are tribe animals.",
    full: "Loneliness is as damaging to health as smoking 15 cigarettes a day. Meaningful conversation releases oxytocin (the love hormone), which lowers stress levels. Call a friend or join a community.",
    icon: <FaUserFriends />,
    color: "orange"
  },
  {
    id: 9,
    title: "Stoic Resilience",
    short: "Control what you can.",
    full: "Stoicism teaches us to differentiate between what we can control (our actions, thoughts) and what we cannot (others' opinions, events). Focusing only on what you control eliminates 90% of anxiety.",
    icon: <FaFistRaised />,
    color: "gray"
  },
  {
    id: 10,
    title: "The 2-Minute Rule",
    short: "Beat procrastination instantly.",
    full: "If a task takes less than 2 minutes, do it immediately. If it's a big habit (like gym), just do the first 2 minutes (put on shoes). Momentum is the key to productivity.",
    icon: <FaHourglassHalf />,
    color: "teal"
  },
  {
    id: 11,
    title: "Deep Breathing",
    short: "Instant nervous system hack.",
    full: "Long exhales stimulate the Vagus nerve, which tells your body to relax. Try the 4-7-8 technique: Inhale for 4s, hold for 7s, exhale for 8s. It acts like a tranquilizer for the nervous system.",
    icon: <FaOm />,
    color: "indigo"
  },
  {
    id: 12,
    title: "Visualisation",
    short: "Mental rehearsal works.",
    full: "The brain struggles to distinguish between vivid imagination and reality. Visualizing your workout or presentation activates the same neural pathways as actually doing it, priming you for success.",
    icon: <FaSmile />,
    color: "lime"
  },
  {
    id: 13,
    title: "Cold Exposure",
    short: "Boost mental toughness.",
    full: "Cold showers or ice baths increase dopamine by 250% and sustain it for hours. It forces you to control your panic response (fight or flight), building immense mental resilience.",
    icon: <FaSnowflake />,
    color: "cyan"
  },
  {
    id: 14,
    title: "Write It Down",
    short: "Clear mental clutter.",
    full: "Your brain is for having ideas, not holding them. When you are stressed, write everything down on paper. This 'brain dump' signals to your brain that the information is safe, allowing you to relax.",
    icon: <FaPenFancy />,
    color: "purple"
  },
  {
    id: 15,
    title: "Nature Therapy",
    short: "Forest bathing (Shinrin-yoku).",
    full: "Spending time in nature reduces cortisol and blood pressure. The fractals in leaves and trees are naturally soothing to the human eye, reducing mental fatigue instantly.",
    icon: <FaTree />,
    color: "green"
  }
];

const Stress = () => {
  // State for Modal (Popup)
  const [selectedTopic, setSelectedTopic] = useState(null);
  
  // NEW STATE: Track kaunsa audio play ho raha hai
  const [activeAudio, setActiveAudio] = useState(null);

  return (
    <div className="bg-gradient-to-b from-gray-900 via-[#1a1c2e] to-black min-h-screen text-white pt-[100px] px-4 md:px-8 pb-20 overflow-x-hidden">

      {/* --- HEADER --- */}
      <div className="max-w-7xl mx-auto mb-12">
        <Link to="/" className="flex items-center gap-2 text-teal-400 mb-8 hover:text-white transition w-fit group">
          <FaArrowLeft className="group-hover:-translate-x-1 transition" /> Back to Home
        </Link>

        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="relative py-6"
        >
          <h1 className="text-5xl md:text-7xl font-black uppercase italic text-transparent bg-clip-text bg-gradient-to-r from-teal-200 via-blue-300 to-purple-400">
            MENTAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">WELLNESS</span>
          </h1>
          <p className="text-blue-200 text-xl mt-4 max-w-2xl">
            Your sanctuary for stress relief, focus, and inner peace. Take a deep breath.
          </p>
          <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl opacity-60 animate-pulse-slow"></div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">

        {/* --- LEFT COLUMN (Breathing & Mood) --- */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
            <BreathingExercise />
          </motion.div>
          <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
            <MoodSelector />
          </motion.div>
        </div>


        {/* --- RIGHT COLUMN (Sounds & Tips) --- */}
        <div className="lg:col-span-7 flex flex-col gap-8">

          {/* Section 3: Sound Therapy Lab */}
          <div>
            <h2 className="text-2xl font-bold text-teal-200 mb-6 flex items-center gap-2">
              <FaVolumeUp /> Sound Therapy Lab
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Humne activeAudio aur setActiveAudio props add kiye hain */}
              <SoundPlayerCard
                title="Rainy Window"
                audioSrc={rainAudio}
                icon={<FaCloudRain />}
                color="blue"
                activeAudio={activeAudio}
                setActiveAudio={setActiveAudio}
              />
              <SoundPlayerCard
                title="Ocean Waves"
                audioSrc={oceanAudio}
                icon={<FaWater />}
                color="teal"
                activeAudio={activeAudio}
                setActiveAudio={setActiveAudio}
              />
              <SoundPlayerCard
                title="Forest Zen"
                audioSrc={forestAudio}
                icon={<FaTree />}
                color="green"
                activeAudio={activeAudio}
                setActiveAudio={setActiveAudio}
              />
              <SoundPlayerCard
                title="Cozy Fire"
                audioSrc={fireAudio}
                icon={<FaFire />}
                color="orange"
                activeAudio={activeAudio}
                setActiveAudio={setActiveAudio}
              />
              <SoundPlayerCard
                title="Night Zen"
                audioSrc={nightAudio}
                icon={<FaMoon />}
                color="indigo"
                activeAudio={activeAudio}
                setActiveAudio={setActiveAudio}
              />
              <SoundPlayerCard
                title="Cafe Focus"
                audioSrc={cafeAudio}
                icon={<FaCoffee />}
                color="yellow"
                activeAudio={activeAudio}
                setActiveAudio={setActiveAudio}
              />
              <SoundPlayerCard
                title="Deep Om"
                audioSrc={meditationAudio}
                icon={<FaOm />}
                color="purple"
                activeAudio={activeAudio}
                setActiveAudio={setActiveAudio}
              />
            </div>
          </div>

          {/* Section 4: Mind Library (Dynamic Grid) */}
          <div className="mt-4">
            <h2 className="text-2xl font-bold text-purple-200 mb-6 flex items-center gap-2">
              <FaBrain /> Mind Library (Click to Read)
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mindTopics.map((topic) => (
                <motion.div
                  key={topic.id}
                  layoutId={`card-${topic.id}`}
                  onClick={() => setSelectedTopic(topic)}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`cursor-pointer bg-gray-800/40 border border-${topic.color}-500/20 p-5 rounded-xl flex items-start gap-4 hover:bg-gray-800/80 transition shadow-lg hover:shadow-${topic.color}-500/20`}
                >
                  <div className={`bg-${topic.color}-900/30 p-3 rounded-lg text-${topic.color}-400 text-xl shrink-0`}>
                    {topic.icon}
                  </div>
                  <div>
                    <h4 className={`font-bold text-lg text-${topic.color}-100 mb-1`}>{topic.title}</h4>
                    <p className="text-gray-400 text-sm line-clamp-2">{topic.short}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* --- POPUP MODAL (Overlay) --- */}
      <AnimatePresence>
         {selectedTopic && (
           <>
             {/* Blur Background */}
             <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               onClick={() => setSelectedTopic(null)}
               className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
             />
             
             {/* Modal Box */}
             <div className="fixed inset-0 flex items-center justify-center z-50 px-4 pointer-events-none">
               <motion.div
                 layoutId={`card-${selectedTopic.id}`}
                 className="bg-gray-900 border border-gray-700 w-full max-w-lg p-8 rounded-3xl shadow-2xl pointer-events-auto relative overflow-hidden"
               >
                 <div className={`absolute top-0 right-0 w-64 h-64 bg-${selectedTopic.color}-500/20 rounded-full blur-3xl -z-10`}></div>

                 <div className="flex items-center gap-4 mb-6">
                   <div className={`bg-${selectedTopic.color}-900/50 p-4 rounded-2xl text-${selectedTopic.color}-400 text-3xl`}>
                     {selectedTopic.icon}
                   </div>
                   <h2 className="text-2xl md:text-3xl font-bold text-white">{selectedTopic.title}</h2>
                 </div>

                 <p className="text-gray-300 text-lg leading-relaxed mb-8">
                   {selectedTopic.full}
                 </p>

                 <button
                   onClick={() => setSelectedTopic(null)}
                   className={`w-full py-3 rounded-xl font-bold bg-${selectedTopic.color}-600 hover:bg-${selectedTopic.color}-500 text-white transition shadow-lg`}
                 >
                   Got it, thanks!
                 </button>

                 <button 
                    onClick={() => setSelectedTopic(null)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white p-2"
                 >
                   ✕
                 </button>
               </motion.div>
             </div>
           </>
         )}
       </AnimatePresence>

    </div>
  );
};

export default Stress;