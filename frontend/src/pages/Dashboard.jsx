import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEdit } from 'react-icons/fa';
import axios from 'axios'; // Import add kiya

// Role-wise Components Import
import UserView from '../components/dashboard/UserView';
import TrainerView from '../components/dashboard/TrainerView';
import AdminView from '../components/dashboard/AdminView';
import EditProfileModal from '../components/dashboard/EditProfileModal'; 

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchLatestUser = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) return;

        // Backend se latest data mangna
        const res = await axios.get('http://localhost:5000/api/auth/me', {
          headers: { Authorization: `Bearer ${token}` }
        });
        
        setUserData(res.data); 
        localStorage.setItem('user', JSON.stringify(res.data)); 
      } catch (err) {
        console.error("Error fetching latest user data", err);
        const savedUser = localStorage.getItem('user');
        if (savedUser) setUserData(JSON.parse(savedUser));
      }
    };

    fetchLatestUser();
  }, []);

  if (!userData) {
    return (
      <div className="bg-[#0b0e14] min-h-screen flex items-center justify-center text-white font-bold italic uppercase tracking-widest">
        Syncing Health Data...
      </div>
    );
  }

  return (
    <div className="bg-[#0b0e14] min-h-screen pt-[100px] px-4 md:px-8 pb-20 text-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-black uppercase italic">
              Welcome Back, <span className="text-cyan-400">{userData.name}</span>
            </h1>
            <p className="text-gray-500 uppercase tracking-widest text-xs font-bold mt-1">
              Role: {userData.role} Control Panel
            </p>
          </motion.div>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 bg-white/5 border border-white/10 px-6 py-3 rounded-2xl font-bold hover:bg-white hover:text-black transition-all shadow-xl"
          >
            <FaEdit className="text-cyan-400" /> Edit Profile
          </motion.button>
        </div>

        <div className="bg-gray-800/20 backdrop-blur-xl border border-white/5 p-8 rounded-[40px] shadow-2xl">
          {userData.role === 'user' && <UserView data={userData} />}
          {userData.role === 'trainer' && <TrainerView data={userData} />}
          {userData.role === 'admin' && <AdminView data={userData} />}
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <EditProfileModal 
            isOpen={isModalOpen} 
            onClose={() => setIsModalOpen(false)} 
            userData={userData}
            setUserData={setUserData}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dashboard;