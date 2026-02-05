import { FaShieldAlt, FaUsersCog, FaStore, FaChartPie, FaTools } from 'react-icons/fa';

const AdminView = ({ data }) => {
  return (
    <div className="space-y-8">
      
      {/* Top Stats: Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: 'Total Users', value: '1,240', icon: <FaUsersCog />, color: 'blue' },
          { title: 'Store Sales', value: '₹42,500', icon: <FaStore />, color: 'cyan' },
          { title: 'Active Trainers', value: '18', icon: <FaShieldAlt />, color: 'purple' },
          { title: 'System Health', value: '99.9%', icon: <FaTools />, color: 'emerald' },
        ].map((stat, i) => (
          <div key={i} className={`bg-${stat.color}-500/5 border border-${stat.color}-500/20 p-6 rounded-3xl`}>
            <div className={`text-${stat.color}-400 text-2xl mb-4`}>{stat.icon}</div>
            <h3 className="text-gray-500 text-xs font-bold uppercase tracking-widest">{stat.title}</h3>
            <p className="text-3xl font-black text-white italic">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Main Control Panel Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* User Management Section */}
        <div className="bg-gray-800/40 p-8 rounded-[40px] border border-white/5">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
            <FaChartPie className="text-purple-400" /> Recent User Activity
          </h3>
          <div className="space-y-4">
            {[1, 2, 3].map((u) => (
              <div key={u} className="flex justify-between items-center p-4 bg-gray-900/50 rounded-2xl border border-white/5">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">👤</div>
                  <div>
                    <p className="font-bold text-sm">New User Registered</p>
                    <p className="text-gray-500 text-xs">2 minutes ago</p>
                  </div>
                </div>
                <button className="text-cyan-400 text-xs font-bold underline">Manage</button>
              </div>
            ))}
          </div>
        </div>

        {/* System Settings & Store Control */}
        <div className="bg-gradient-to-br from-indigo-900/20 to-transparent p-8 rounded-[40px] border border-white/5">
          <h3 className="text-xl font-bold mb-6">Store Management</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button className="p-6 bg-gray-900/80 border border-gray-700 rounded-3xl hover:border-indigo-500 transition-all text-left group">
               <h4 className="font-bold mb-1 group-hover:text-indigo-400 transition">Update Stock</h4>
               <p className="text-gray-500 text-xs">Manage 75+ store items</p>
            </button>
            <button className="p-6 bg-gray-900/80 border border-gray-700 rounded-3xl hover:border-emerald-500 transition-all text-left group">
               <h4 className="font-bold mb-1 group-hover:text-emerald-400 transition">Sales Reports</h4>
               <p className="text-gray-500 text-xs">Download weekly analytics</p>
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};

export default AdminView;