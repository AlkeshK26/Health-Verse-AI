import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaFilter, FaShoppingCart, FaMale, FaFemale, FaRunning, 
  FaDumbbell, FaCapsules, FaTimes, FaStar, FaInfoCircle 
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

// shopData se products import karein
import { shopProducts } from '../data/shopData'; 

const Shops = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const categories = [
    { id: 'All', name: 'All Store', icon: <FaFilter /> },
    { id: 'Men', name: 'Men', icon: <FaMale /> },
    { id: 'Women', name: 'Women', icon: <FaFemale /> },
    { id: 'Footwear', name: 'Footwear', icon: <FaRunning /> },
    { id: 'Accessories', name: 'Gears', icon: <FaDumbbell /> },
    { id: 'Supplements', name: 'Nutrition', icon: <FaCapsules /> },
  ];

  const filteredProducts = filter === 'All' 
    ? shopProducts 
    : shopProducts.filter(p => p.category === filter);

  return (
    <div className="bg-[#0b0e14] min-h-screen pt-[100px] px-4 md:px-8 pb-20 text-white overflow-x-hidden">
      
      {/* --- HEADER --- */}
      <div className="max-w-7xl mx-auto mb-12">
        <Link to="/" className="flex items-center gap-2 text-cyan-400 mb-8 hover:text-white transition w-fit group">
          <FaArrowLeft className="group-hover:-translate-x-1 transition" /> Back to Home
        </Link>

        <motion.div initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-center relative">
          <h1 className="text-6xl md:text-8xl font-black italic text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 uppercase tracking-tighter">
            HEALTH<span className="text-white">VERSE</span> STORE
          </h1>
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -z-10"></div>
        </motion.div>
      </div>

      {/* --- FILTER BAR --- */}
      <div className="max-w-7xl mx-auto mb-12 sticky top-[80px] z-40 bg-[#0b0e14]/80 backdrop-blur-md py-4 border-b border-white/5">
        <div className="flex gap-3 justify-start md:justify-center overflow-x-auto no-scrollbar pb-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold transition-all border whitespace-nowrap ${
                filter === cat.id 
                ? 'bg-gradient-to-r from-cyan-600 to-blue-600 border-cyan-400 text-white shadow-[0_0_20px_rgba(6,182,212,0.3)] scale-105' 
                : 'bg-gray-800/40 border-gray-700 text-gray-400 hover:border-gray-500'
              }`}
            >
              {cat.icon} {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* --- PRODUCT GRID --- */}
      <motion.div layout className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedProduct(product)}
              className="bg-gray-800/30 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden cursor-pointer group hover:border-cyan-500/50 transition-all shadow-2xl"
            >
              {/* ✅ UPDATE: Image Container with actual images */}
              <div className="h-64 bg-gradient-to-b from-gray-700/20 to-transparent relative flex items-center justify-center overflow-hidden">
                {product.image ? (
                   <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    loading="lazy"
                   />
                ) : (
                  <div className="text-7xl opacity-20">{product.category === 'Supplements' ? '💊' : '👕'}</div>
                )}
                
                <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md border border-white/10 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter">
                  {product.sub}
                </div>
              </div>

              {/* Info Container */}
              <div className="p-6 bg-gray-900/50">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[10px] text-cyan-400 font-bold uppercase tracking-widest">{product.brand}</span>
                  <div className="flex items-center text-yellow-500 text-[10px] gap-1">
                    <FaStar /> 4.8
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-4 line-clamp-1 group-hover:text-cyan-400 transition-colors">
                  {product.name}
                </h3>
                <div className="flex justify-between items-center">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-500 uppercase">Price</span>
                    <span className="text-2xl font-black text-white italic">₹{product.price}</span>
                  </div>
                  <motion.button whileTap={{ scale: 0.9 }} className="bg-cyan-500 text-black p-4 rounded-2xl hover:bg-white transition-colors shadow-lg shadow-cyan-500/20">
                    <FaShoppingCart />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* --- PRODUCT QUICK VIEW MODAL --- */}
      <AnimatePresence>
        {selectedProduct && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedProduct(null)} className="fixed inset-0 bg-black/90 backdrop-blur-md z-[100]" />
            <div className="fixed inset-0 flex items-center justify-center z-[101] px-4 pointer-events-none">
              <motion.div
                layoutId={`card-${selectedProduct.id}`}
                className="bg-[#0f1218] border border-gray-700 w-full max-w-4xl rounded-[40px] shadow-3xl pointer-events-auto relative overflow-hidden flex flex-col md:flex-row"
              >
                {/* ✅ UPDATE: Left Visual Side with Image */}
                <div className="md:w-1/2 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center p-10 relative overflow-hidden">
                  {selectedProduct.image ? (
                    <img 
                      src={selectedProduct.image} 
                      alt={selectedProduct.name} 
                      className="max-w-full max-h-full object-contain drop-shadow-2xl scale-110" 
                    />
                  ) : (
                    <div className="text-9xl opacity-20">🛒</div>
                  )}
                  <div className="absolute top-10 left-10 text-cyan-400 text-sm font-bold border-l-2 border-cyan-400 pl-4 uppercase tracking-widest">
                    HealthVerse Exclusive
                  </div>
                </div>

                {/* Right: Product Details */}
                <div className="md:w-1/2 p-10 flex flex-col justify-center">
                  <div className="flex justify-between items-center mb-6">
                    <span className="bg-cyan-500/10 text-cyan-400 text-xs font-bold px-4 py-1 rounded-full border border-cyan-500/20 uppercase">
                      {selectedProduct.category}
                    </span>
                    <button onClick={() => setSelectedProduct(null)} className="text-gray-500 hover:text-white transition text-2xl">
                      <FaTimes />
                    </button>
                  </div>

                  <h2 className="text-4xl font-black text-white mb-2 italic uppercase leading-tight">{selectedProduct.name}</h2>
                  <p className="text-cyan-400 font-bold mb-6 tracking-widest uppercase text-sm">Brand: {selectedProduct.brand}</p>
                  
                  <div className="bg-white/5 border border-white/5 rounded-3xl p-6 mb-8">
                    <div className="flex items-center gap-2 text-gray-400 mb-2 text-xs">
                      <FaInfoCircle /> PRODUCT SPECIFICATION
                    </div>
                    <p className="text-gray-300 leading-relaxed text-sm">
                      Engineered for high-performance training. This {selectedProduct.sub.toLowerCase()} features 
                      premium materials to ensure maximum durability and comfort during your fitness journey.
                    </p>
                  </div>

                  <div className="flex items-end justify-between">
                    <div>
                      <span className="text-gray-500 text-xs block mb-1 uppercase font-bold tracking-widest">Grand Total</span>
                      <span className="text-5xl font-black text-white italic">₹{selectedProduct.price}</span>
                    </div>
                    <button className="bg-cyan-500 text-black px-10 py-5 rounded-3xl font-black uppercase italic hover:bg-white transition-all transform hover:scale-105 shadow-2xl shadow-cyan-500/20">
                      Add to Bag
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

      {/* --- SUPPLEMENT DISCLAIMER --- */}
      {filter === 'Supplements' && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto mt-20 p-8 bg-yellow-500/10 border border-yellow-500/30 rounded-[30px] flex items-center gap-6">
          <div className="text-5xl">⚠️</div>
          <div>
            <h4 className="text-yellow-500 font-black uppercase italic text-xl">Supplement Education</h4>
            <p className="text-yellow-200/70 text-sm leading-relaxed mt-1">
              Supplements are designed to <strong>support</strong> your journey, not replace it. Real results come from a consistent base diet and progressive training.
            </p>
          </div>
        </motion.div>
      )}

    </div>
  );
};

export default Shops;