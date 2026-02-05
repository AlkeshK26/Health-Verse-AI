import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', formData);
      
      // Token aur User details save karo
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data)); 
      
      alert(`Login Successful! Welcome Back ${res.data.name} 💪`);

      // ✅ UPDATE: Role-based Redirection
      // Direct dashboard par bhejo jahan role automatic detect ho jayega
      navigate('/dashboard'); 

    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || 'Invalid Email or Password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 backdrop-blur-sm bg-black/60">
      
      {/* Glass Card */}
      <div className="w-full max-w-4xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row backdrop-blur-lg">
        
        {/* Left Side - Image/Motivation (No Change) */}
        <div className="hidden md:flex flex-col justify-center p-8 w-1/2 bg-gradient-to-br from-blue-600/20 to-purple-600/20">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-4">
            Welcome Back
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            "Consistency is what transforms average into excellence."
          </p>
          <div className="bg-black/20 p-4 rounded-xl border border-white/10">
            <p className="text-sm text-gray-400">Did you know?</p>
            <p className="text-white font-medium mt-1">Tracking your workouts increases success rate by 60%.</p>
          </div>
        </div>

        {/* Right Side - Login Form (No Change in Layout) */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-white mb-2">Member Login</h3>
            <p className="text-gray-400">Enter your details to access your dashboard</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
              <input 
                name="email" 
                type="email" 
                onChange={handleChange} 
                required 
                placeholder="john@example.com"
                className="w-full px-4 py-3 rounded-xl bg-black/30 border border-gray-600 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white placeholder-gray-500 outline-none transition" 
              />
            </div>

            {/* Password */}
            <div>
              <div className="flex justify-between mb-2">
                <label className="block text-sm font-medium text-gray-300">Password</label>
                <a href="#" className="text-sm text-cyan-400 hover:text-cyan-300 hover:underline">Forgot password?</a>
              </div>
              <input 
                name="password" 
                type="password" 
                onChange={handleChange} 
                required 
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl bg-black/30 border border-gray-600 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white placeholder-gray-500 outline-none transition" 
              />
            </div>

            {/* Submit Button */}
            <button 
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold py-3.5 rounded-xl shadow-lg transform transition hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed text-lg uppercase tracking-wider"
            >
              {loading ? 'Logging In...' : 'Sign In'}
            </button>

          </form>

          <p className="text-center text-gray-400 text-sm mt-8">
            Don't have an account?{' '}
            <Link to="/signup" className="text-cyan-400 hover:text-cyan-300 font-semibold hover:underline">
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;