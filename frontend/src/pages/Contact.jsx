import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Yahan baad mein Backend API laga sakte ho
    alert("Message Sent! We will contact you shortly.");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white pt-[80px] pb-10 px-4">
      
      {/* Header Section */}
      <div className="text-center py-10">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-black mb-4"
        >
          GET IN <span className="text-cyan-400">TOUCH</span>
        </motion.h1>
        <p className="text-gray-400">Have questions about our AI plans? We are here to help.</p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Left Side - Contact Info Cards */}
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          <ContactCard 
            icon={<FaPhoneAlt />} 
            title="Phone" 
            text="+91 98765 43210" 
            color="text-green-400"
          />
          <ContactCard 
            icon={<FaEnvelope />} 
            title="Email" 
            text="support@healthverse.com" 
            color="text-blue-400"
          />
          <ContactCard 
            icon={<FaMapMarkerAlt />} 
            title="Headquarters" 
            text="Cyber City, Gurugram, India" 
            color="text-red-400"
          />
          
          {/* Map Image (Visual Only) */}
          <div className="rounded-2xl overflow-hidden border border-gray-700 opacity-80 hover:opacity-100 transition mt-6">
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1474&auto=format&fit=crop" 
              alt="Map" 
              className="w-full h-48 object-cover"
            />
          </div>
        </motion.div>

        {/* Right Side - Message Form */}
        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-gray-800/50 backdrop-blur-md p-8 rounded-3xl border border-gray-700 shadow-2xl"
        >
          <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm text-gray-400 pl-1">Your Name</label>
              <input 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                className="w-full mt-1 p-3 rounded-xl bg-gray-900/80 border border-gray-600 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none text-white" 
                placeholder="John Doe" 
                required
              />
            </div>
            <div>
              <label className="text-sm text-gray-400 pl-1">Your Email</label>
              <input 
                name="email" 
                type="email" 
                value={formData.email} 
                onChange={handleChange} 
                className="w-full mt-1 p-3 rounded-xl bg-gray-900/80 border border-gray-600 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none text-white" 
                placeholder="john@example.com" 
                required
              />
            </div>
            <div>
              <label className="text-sm text-gray-400 pl-1">Message</label>
              <textarea 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                rows="4" 
                className="w-full mt-1 p-3 rounded-xl bg-gray-900/80 border border-gray-600 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none text-white" 
                placeholder="How can we help you?" 
                required
              ></textarea>
            </div>
            <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-cyan-500/20 transform transition active:scale-95 flex items-center justify-center gap-2">
              <FaPaperPlane /> Send Message
            </button>
          </form>
        </motion.div>

      </div>
    </div>
  );
};

// Helper Component for Cards
const ContactCard = ({ icon, title, text, color }) => (
  <div className="flex items-center gap-4 bg-gray-800/30 p-4 rounded-2xl border border-gray-700 hover:bg-gray-800 transition duration-300">
    <div className={`text-2xl ${color} bg-gray-900 p-3 rounded-full`}>{icon}</div>
    <div>
      <h4 className="text-gray-400 text-sm font-medium">{title}</h4>
      <p className="text-lg font-semibold">{text}</p>
    </div>
  </div>
);

export default Contact;