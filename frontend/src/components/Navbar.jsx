import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'; // useNavigate add kiya
import { FaBars, FaTimes, FaDumbbell, FaSignOutAlt } from 'react-icons/fa';



const Navbar = () => {
  const [nav, setNav] = useState(false);
  const location = useLocation();
  const navigate = useNavigate(); // Navigation ke liye

  // Check if user is logged in
  const user = JSON.parse(localStorage.getItem('user'));

  // Toggle Mobile Menu
  const handleClick = () => setNav(!nav);

  // Close menu when a link is clicked
  const closeMenu = () => setNav(false);

  // --- LOGOUT LOGIC ---
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    alert('Logged out successfully! See you soon. 💪');
    navigate('/login');
    closeMenu();
  };

  return (
    <nav className="fixed w-full h-[80px] flex justify-between items-center px-4 md:px-10 bg-black/30 backdrop-blur-md border-b border-white/10 z-50 text-white">
      
      {/* --- LOGO --- */}
      <div className="z-10 cursor-pointer flex items-center gap-2">
        <FaDumbbell className="text-cyan-400 text-2xl" />
        <Link to="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
          HEALTH VERSE AI
        </Link>
      </div>

      {/* --- DESKTOP MENU --- */}
      <ul className="hidden md:flex items-center gap-8 font-medium">
        <li>
          <Link to="/" className={`hover:text-cyan-400 transition duration-300 ${location.pathname === '/' ? 'text-cyan-400' : ''}`}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className={`hover:text-cyan-400 transition duration-300 ${location.pathname === '/about' ? 'text-cyan-400' : ''}`}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className={`hover:text-cyan-400 transition duration-300 ${location.pathname === '/contact' ? 'text-cyan-400' : ''}`}>
            Contact
          </Link>
        </li>
        
        {/* Dashboard Button - Only shown if logged in */}
        {user && (
          <li>
            <Link to="/dashboard">
              <button className="px-4 py-2 border border-cyan-500/50 rounded-lg text-cyan-400 hover:bg-cyan-500/10 transition duration-300">
                Dashboard
              </button>
            </Link>
          </li>
        )}
      </ul>

      {/* --- AUTH BUTTONS (Conditional) --- */}
      <div className="hidden md:flex items-center gap-4">
        {user ? (
          /* Show Logout if user exists */
          <button 
            onClick={handleLogout}
            className="px-5 py-2 bg-red-500/10 border border-red-500/50 text-red-500 rounded-full font-bold hover:bg-red-500 hover:text-white transition duration-300 flex items-center gap-2"
          >
            <FaSignOutAlt /> Logout
          </button>
        ) : (
          /* Show Login/Signup if no user */
          <>
            <Link to="/login">
              <button className="text-gray-300 hover:text-white font-medium transition">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button className="px-5 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full font-bold shadow-lg hover:shadow-cyan-500/30 transform hover:scale-105 transition duration-300">
                Sign Up
              </button>
            </Link>
          </>
        )}
      </div>

      {/* --- HAMBURGER MENU (Mobile) --- */}
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer text-2xl text-cyan-400">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* --- MOBILE DROPDOWN --- */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-gray-900/95 backdrop-blur-xl flex flex-col justify-center items-center gap-8 text-2xl transition-all duration-300'}>
        <li><Link onClick={closeMenu} to="/" className="hover:text-cyan-400">Home</Link></li>
        <li><Link onClick={closeMenu} to="/about" className="hover:text-cyan-400">About</Link></li>
        <li><Link onClick={closeMenu} to="/contact" className="hover:text-cyan-400">Contact</Link></li>
        {user && <li><Link onClick={closeMenu} to="/dashboard" className="text-cyan-400 border-b border-cyan-400 pb-1">Dashboard</Link></li>}
        
        <div className="flex flex-col gap-4 mt-4 w-[80%]">
          {user ? (
            <button onClick={handleLogout} className="px-8 py-3 bg-red-500 text-white rounded-full font-bold w-full">Logout</button>
          ) : (
            <>
              <Link onClick={closeMenu} to="/login" className="w-full">
                <button className="px-8 py-3 border border-white/20 rounded-full w-full">Login</button>
              </Link>
              <Link onClick={closeMenu} to="/signup" className="w-full">
                <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full font-bold w-full">Sign Up</button>
              </Link>
            </>
          )}
        </div>
      </ul>

    </nav>
  );
};

export default Navbar;