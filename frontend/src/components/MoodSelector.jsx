import { useState } from 'react';

const moods = [
  { emoji: '😖', label: 'Stressed', color: 'red' },
  { emoji: '😟', label: 'Anxious', color: 'orange' },
  { emoji: '😐', label: 'Okay', color: 'yellow' },
  { emoji: '😌', label: 'Calm', color: 'teal' },
  { emoji: '🤩', label: 'Energized', color: 'green' },
];

const MoodSelector = () => {
  const [selectedMood, setSelectedMood] = useState(null);

  return (
    <div className="bg-gray-800/50 backdrop-blur-md border border-purple-500/30 p-6 rounded-2xl text-center">
      <h3 className="text-xl font-bold text-purple-200 mb-4">How are you feeling right now?</h3>
      <div className="flex flex-wrap justify-center gap-4">
        {moods.map((mood, index) => (
          <button
            key={index}
            onClick={() => setSelectedMood(mood.label)}
            className={`flex flex-col items-center p-3 rounded-xl transition-all duration-300 transform hover:scale-110 ${selectedMood === mood.label ? `bg-${mood.color}-500/20 border border-${mood.color}-500 scale-110` : 'bg-gray-900/50 border border-transparent hover:border-gray-700'}`}
          >
            <span className="text-3xl mb-1">{mood.emoji}</span>
            <span className={`text-xs ${selectedMood === mood.label ? `text-${mood.color}-300` : 'text-gray-400'}`}>{mood.label}</span>
          </button>
        ))}
      </div>
      {selectedMood && (
        <p className="text-purple-300 text-sm mt-4 animate-pulse">
          Acknowledged. It's okay to feel {selectedMood.toLowerCase()}. Let's shift that energy.
        </p>
      )}
    </div>
  );
};

export default MoodSelector;