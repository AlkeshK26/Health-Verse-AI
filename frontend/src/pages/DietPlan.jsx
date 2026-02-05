import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaLeaf, FaDrumstickBite, FaFire, FaClock, FaUtensils, FaListUl, FaTimes, FaAppleAlt, FaBookOpen } from 'react-icons/fa';
import { vegItems, nonVegItems, healthyRecipes } from '../data/dietData';

const DietPlan = () => {
  // State 1: Main View (Food Items vs Recipes)
  const [activeTab, setActiveTab] = useState('food'); // 'food' or 'recipes'
  
  // State 2: Diet Preference (Veg vs Non-Veg) - Only for Food Items
  const [dietType, setDietType] = useState('veg'); 
  
  // State 3: Recipe Modal
  const [selectedRecipe, setSelectedRecipe] = useState(null); 

  const currentItems = dietType === 'veg' ? vegItems : nonVegItems;
  const themeColor = dietType === 'veg' ? 'green' : 'red';

  return (
    <div className={`min-h-screen pt-[100px] px-4 md:px-8 pb-20 transition-colors duration-700 bg-gray-900 text-white`}>
      
      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADER --- */}
        <Link to="/" className="flex items-center gap-2 mb-8 transition w-fit group text-gray-400 hover:text-white">
          <FaArrowLeft className="group-hover:-translate-x-1 transition" /> Back to Home
        </Link>

        {/* --- MAIN TITLE & TAB SWITCHER --- */}
        <div className="flex flex-col items-center justify-center mb-12 text-center">
           <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
             <h1 className="text-5xl md:text-7xl font-black uppercase italic mb-6">
               SMART <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">DIET</span>
             </h1>
           </motion.div>

           {/* --- LEVEL 1: MASTER TABS (Food Items vs Recipes) --- */}
           <div className="bg-gray-800 p-2 rounded-2xl flex gap-2 border border-gray-700 shadow-xl">
              {['food', 'recipes'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-8 py-3 rounded-xl font-bold text-sm md:text-base uppercase transition-all z-10 flex items-center gap-2 ${activeTab === tab ? 'text-white' : 'text-gray-400 hover:text-gray-200'}`}
                >
                  {activeTab === tab && (
                    <motion.div
                      layoutId="mainTab"
                      className="absolute inset-0 rounded-xl bg-gray-700 border border-gray-600 shadow-sm"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    {tab === 'food' ? <FaAppleAlt /> : <FaBookOpen />} 
                    {tab === 'food' ? 'Food Guide ' : 'Recipe Book'}
                  </span>
                </button>
              ))}
           </div>
        </div>

        {/* --- CONTENT AREA (Conditionally Rendered) --- */}
        <AnimatePresence mode='wait'>
          
          {/* === VIEW 1: FOOD ITEMS DATABASE === */}
          {activeTab === 'food' && (
            <motion.div
              key="food-section"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Veg/Non-Veg Toggle (Only visible in Food View) */}
              <div className="flex justify-between items-center mb-8 border-b border-gray-800 pb-4">
                 <h2 className="text-2xl font-bold text-gray-200">Macro Breakdown</h2>
                 
                 <div className="bg-gray-800 p-1 rounded-full flex gap-1 border border-gray-700">
                   {['veg', 'non-veg'].map((type) => (
                     <button
                       key={type}
                       onClick={() => setDietType(type)}
                       className={`relative px-4 py-1.5 rounded-full font-bold text-xs uppercase transition-colors z-10 ${dietType === type ? 'text-white' : 'text-gray-400 hover:text-gray-200'}`}
                     >
                       {dietType === type && (
                         <motion.div
                           layoutId="dietToggle"
                           className={`absolute inset-0 rounded-full ${type === 'veg' ? 'bg-green-600' : 'bg-red-600'}`}
                         />
                       )}
                       <span className="relative z-10 flex items-center gap-1">
                         {type === 'veg' ? <FaLeaf /> : <FaDrumstickBite />} {type}
                       </span>
                     </button>
                   ))}
                 </div>
              </div>

              {/* Items Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {currentItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`bg-gray-800/50 border border-gray-700 hover:border-${themeColor}-500/50 p-5 rounded-2xl group hover:shadow-lg hover:shadow-${themeColor}-900/20 transition-all`}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="text-4xl">{item.image}</div>
                      <div className={`text-xs font-bold px-2 py-1 rounded bg-${themeColor}-900/50 text-${themeColor}-400 border border-${themeColor}-500/30`}>
                        {item.cal} CAL
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 line-clamp-1">{item.name}</h3>
                    <div className="grid grid-cols-2 gap-2 text-sm text-gray-300">
                      <div className="bg-gray-900/50 p-2 rounded-lg">
                        <span className="block text-gray-500 text-[10px] uppercase">Protein</span>
                        <span className="font-bold text-white">{item.protein}g</span>
                      </div>
                      <div className="bg-gray-900/50 p-2 rounded-lg">
                        <span className="block text-gray-500 text-[10px] uppercase">Carbs</span>
                        <span className="font-bold text-white">{item.carbs}g</span>
                      </div>
                      <div className="bg-gray-900/50 p-2 rounded-lg">
                        <span className="block text-gray-500 text-[10px] uppercase">Fat</span>
                        <span className="font-bold text-white">{item.fat}g</span>
                      </div>
                      <div className="bg-gray-900/50 p-2 rounded-lg">
                        <span className="block text-gray-500 text-[10px] uppercase">Fiber</span>
                        <span className="font-bold text-white">{item.fiber}g</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* === VIEW 2: RECIPE BOOK === */}
          {activeTab === 'recipes' && (
            <motion.div
              key="recipes-section"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
               <h2 className="text-2xl font-bold text-gray-200 mb-8 border-b border-gray-800 pb-4 flex items-center gap-2">
                 <FaFire className="text-orange-500"/> Chef's Selection
               </h2>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                 {healthyRecipes.map((recipe) => (
                   <motion.div 
                     key={recipe.id}
                     layoutId={`recipe-${recipe.id}`}
                     onClick={() => setSelectedRecipe(recipe)}
                     whileHover={{ y: -5 }}
                     className="bg-gray-800/30 border border-gray-700 p-6 rounded-2xl cursor-pointer hover:bg-gray-800/60 hover:border-yellow-500/30 transition shadow-lg group"
                   >
                     <div className="flex justify-between items-start">
                        <div className="h-16 w-16 bg-gray-700/50 rounded-full flex items-center justify-center text-3xl shadow-inner mb-4 group-hover:scale-110 transition">
                          {recipe.image}
                        </div>
                        <span className="text-xs font-bold text-gray-400 bg-gray-900 px-2 py-1 rounded-lg border border-gray-700">
                          {recipe.time}
                        </span>
                     </div>
                     <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition">{recipe.name}</h3>
                     <p className="text-gray-400 text-sm mb-4 line-clamp-2">{recipe.desc}</p>
                     <div className="flex items-center gap-2 text-xs font-bold text-yellow-500 uppercase tracking-wider">
                       Click to Cook <FaArrowLeft className="rotate-180" />
                     </div>
                   </motion.div>
                 ))}
               </div>
            </motion.div>
          )}

        </AnimatePresence>

      </div>

      {/* --- RECIPE MODAL (POPUP) --- */}
      <AnimatePresence>
        {selectedRecipe && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedRecipe(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            />
            <div className="fixed inset-0 flex items-center justify-center z-50 px-4 pointer-events-none">
              <motion.div
                layoutId={`recipe-${selectedRecipe.id}`}
                className="bg-gray-900 border border-gray-600 w-full max-w-2xl max-h-[80vh] overflow-y-auto p-8 rounded-3xl shadow-2xl pointer-events-auto relative custom-scrollbar"
              >
                <button 
                  onClick={() => setSelectedRecipe(null)}
                  className="absolute top-4 right-4 bg-gray-800 p-2 rounded-full text-gray-400 hover:text-white hover:bg-red-500/20 hover:text-red-400 transition"
                >
                  <FaTimes />
                </button>

                <div className="flex flex-col md:flex-row gap-6 mb-8 border-b border-gray-700 pb-6">
                  <div className="h-24 w-24 bg-gray-800 rounded-2xl flex items-center justify-center text-5xl shrink-0">
                    {selectedRecipe.image}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">{selectedRecipe.name}</h2>
                    <p className="text-gray-400 mb-4">{selectedRecipe.desc}</p>
                    <div className="flex gap-4">
                      <span className="flex items-center gap-1 bg-gray-800 px-3 py-1 rounded text-sm text-blue-400 border border-blue-500/20">
                        <FaClock /> {selectedRecipe.time}
                      </span>
                      <span className="flex items-center gap-1 bg-gray-800 px-3 py-1 rounded text-sm text-orange-400 border border-orange-500/20">
                        <FaFire /> {selectedRecipe.cal} Cal
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-bold text-yellow-400 mb-4 flex items-center gap-2">
                      <FaUtensils /> Ingredients
                    </h3>
                    <ul className="space-y-2">
                      {selectedRecipe.ingredients.map((ing, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                          <span className="h-1.5 w-1.5 rounded-full bg-yellow-500 mt-2 shrink-0"></span>
                          {ing}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-green-400 mb-4 flex items-center gap-2">
                      <FaListUl /> Instructions
                    </h3>
                    <ol className="space-y-4">
                      {selectedRecipe.steps.map((step, i) => (
                        <li key={i} className="flex gap-3 text-gray-300 text-sm">
                          <span className="flex items-center justify-center h-5 w-5 rounded-full bg-green-900/50 text-green-400 border border-green-500/30 text-xs font-bold shrink-0">
                            {i + 1}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>

                <button
                   onClick={() => setSelectedRecipe(null)}
                   className="w-full mt-8 py-3 rounded-xl font-bold bg-gray-800 hover:bg-gray-700 text-white transition"
                >
                   Close Recipe
                </button>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

    </div>
  );
};

export default DietPlan;