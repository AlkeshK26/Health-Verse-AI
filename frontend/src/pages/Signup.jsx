import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  
  // Form Data State - Added 'role' field
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    age: '',
    gender: 'Male',
    height: '',
    weight: '',
    goal: 'Muscle Gain',
    role: 'user' // Default role as user
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Backend API Call
      const res = await axios.post('http://localhost:5000/api/auth/register', formData);
      alert('Account Created Successfully! 🚀');
      navigate('/login'); 
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 backdrop-blur-sm bg-black/60">
      
      <div className="w-full max-w-4xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row backdrop-blur-lg">
        
        {/* Left Side - Image/Motivation */}
        <div className="hidden md:flex flex-col justify-center p-8 w-1/2 bg-gradient-to-br from-blue-600/20 to-purple-600/20">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-4">
            Health Verse AI
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            "Your body can stand almost anything. It’s your mind that you have to convince."
          </p>
          <div className="mt-8 space-y-2">
            <div className="flex items-center text-sm text-gray-400">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span> AI Diet Plans
            </div>
            <div className="flex items-center text-sm text-gray-400">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span> Smart Workout Splits
            </div>
            <div className="flex items-center text-sm text-gray-400">
              <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span> Progress Tracking
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 p-8 md:p-10">
          <h3 className="text-2xl font-bold text-white mb-6">Create Account</h3>

          {/* === NEW ROLE SWITCHER === */}
          <div className="flex bg-black/40 p-1 rounded-2xl mb-6 border border-gray-700">
            <button 
              type="button"
              onClick={() => setFormData({...formData, role: 'user'})}
              className={`flex-1 py-2 rounded-xl text-sm font-bold transition-all duration-300 ${formData.role === 'user' ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
            >
              As Client
            </button>
            <button 
              type="button"
              onClick={() => setFormData({...formData, role: 'trainer'})}
              className={`flex-1 py-2 rounded-xl text-sm font-bold transition-all duration-300 ${formData.role === 'trainer' ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
            >
              As Trainer
            </button>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div className="grid grid-cols-1 gap-4">
              <input name="name" onChange={handleChange} required placeholder="Full Name"
                className="w-full px-4 py-3 rounded-xl bg-black/30 border border-gray-600 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white placeholder-gray-400 outline-none transition" />
              
              <input name="email" type="email" onChange={handleChange} required placeholder="Email Address"
                className="w-full px-4 py-3 rounded-xl bg-black/30 border border-gray-600 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white placeholder-gray-400 outline-none transition" />
            </div>

            <div className="flex gap-4">
              <input name="password" type="password" onChange={handleChange} required placeholder="Password"
                className="w-full px-4 py-3 rounded-xl bg-black/30 border border-gray-600 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white placeholder-gray-400 outline-none transition" />
              
              <select name="gender" onChange={handleChange}
                className="w-1/3 px-4 py-3 rounded-xl bg-black/30 border border-gray-600 focus:border-cyan-400 text-white outline-none">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            {/* Conditional Rendering: Only show Fitness Stats for Client Role */}
            {formData.role === 'user' && (
              <>
                <div className="grid grid-cols-3 gap-3">
                  <input name="age" type="number" onChange={handleChange} placeholder="Age"
                    className="w-full px-3 py-3 rounded-xl bg-black/30 border border-gray-600 focus:border-cyan-400 text-white placeholder-gray-400 outline-none transition text-center" />
                  
                  <input name="height" type="number" onChange={handleChange} placeholder="H (cm)"
                    className="w-full px-3 py-3 rounded-xl bg-black/30 border border-gray-600 focus:border-cyan-400 text-white placeholder-gray-400 outline-none transition text-center" />
                  
                  <input name="weight" type="number" onChange={handleChange} placeholder="W (kg)"
                    className="w-full px-3 py-3 rounded-xl bg-black/30 border border-gray-600 focus:border-cyan-400 text-white placeholder-gray-400 outline-none transition text-center" />
                </div>

                <div>
                  <label className="text-xs text-gray-400 ml-1">Your Primary Goal</label>
                  <select name="goal" onChange={handleChange}
                    className="w-full mt-1 px-4 py-3 rounded-xl bg-black/30 border border-gray-600 focus:border-cyan-400 text-white outline-none">
                    <option value="Muscle Gain">Muscle Gain (Bulking)</option>
                    <option value="Weight Loss">Weight Loss (Cutting)</option>
                    <option value="Endurance">Endurance / Cardio</option>
                    <option value="Flexibility">Yoga & Flexibility</option>
                  </select>
                </div>
              </>
            )}

            {/* Note for Trainer Role */}
            {formData.role === 'trainer' && (
              <div className="p-4 bg-purple-500/10 border border-purple-500/20 rounded-xl text-xs text-purple-300 italic">
                Note: Trainer profiles are subject to verification of experience and certifications.
              </div>
            )}

            <button disabled={loading}
              className="w-full mt-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold py-3 rounded-xl shadow-lg transform transition hover:scale-[1.02] active:scale-95 disabled:opacity-50 uppercase tracking-wider">
              {loading ? 'Setting up profile...' : `Join as ${formData.role}`}
            </button>

          </form>

          <p className="text-center text-gray-400 text-sm mt-6">
            Already a member?{' '}
            <Link to="/login" className="text-cyan-400 hover:text-cyan-300 font-semibold hover:underline">Log In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;