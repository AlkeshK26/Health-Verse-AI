import { useState, useRef } from 'react';
import { FaPlay, FaPause, FaVolumeUp } from 'react-icons/fa';

const SoundPlayerCard = ({ title, audioSrc, icon, color }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={`relative overflow-hidden bg-gray-800/50 backdrop-blur-md border border-${color}-500/30 p-6 rounded-2xl group hover:bg-gray-800/70 transition-all duration-300`}>
      {/* Hidden Audio Element */}
      <audio ref={audioRef} src={audioSrc} loop />

      {/* Background Glow */}
      <div className={`absolute -top-10 -right-10 w-32 h-32 bg-${color}-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
      
      <div className="flex items-center justify-between relative z-10">
        <div className="flex items-center gap-4">
          <div className={`text-3xl text-${color}-400 bg-${color}-900/50 p-3 rounded-full`}>
            {icon}
          </div>
          <div>
            <h4 className="text-lg font-bold text-white">{title}</h4>
            <p className="text-gray-400 text-xs flex items-center gap-1">
              <FaVolumeUp className="text-[10px]" /> Focus & Relax
            </p>
          </div>
        </div>
        
        <button 
          onClick={togglePlay}
          className={`w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-${color}-500 to-${color}-700 text-white shadow-lg hover:scale-110 transition-transform`}
        >
          {isPlaying ? <FaPause /> : <FaPlay className="ml-1" />}
        </button>
      </div>
    </div>
  );
};

export default SoundPlayerCard;