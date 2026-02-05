import { FaEye, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

const TrainerView = ({ data }) => {
  // Yeh sample data hai, baad mein API se aayega
  const clients = [
    { id: 1, name: "Aman", goal: "Visible Abs", calories: 1200, target: 1700, status: "On Track" },
    { id: 2, name: "Rahul", goal: "Muscle Gain", calories: 1800, target: 2500, status: "Low Intake" },
    // Aise hi 12+ clients ki list hogi
  ];

  return (
    <div className="space-y-8">
      {/* Stats Cards (Wahi purana code) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         <div className="bg-cyan-500/10 border border-cyan-500/20 p-6 rounded-3xl">
            <h3 className="text-gray-400 text-xs font-bold uppercase">Experience</h3>
            <p className="text-3xl font-black">{data.experience || "5 Years"}</p>
         </div>
         <div className="bg-purple-500/10 border border-purple-500/20 p-6 rounded-3xl">
            <h3 className="text-gray-400 text-xs font-bold uppercase">Active Clients</h3>
            <p className="text-3xl font-black">{data.presentClients || 12}</p>
         </div>
      </div>

      {/* --- CLIENT MANAGEMENT TABLE --- */}
      <div className="bg-gray-900/50 border border-white/5 rounded-[40px] overflow-hidden">
        <div className="p-8 border-b border-white/5">
          <h3 className="text-xl font-bold italic uppercase tracking-tighter">Client Progress Tracker</h3>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/5 text-gray-400 text-xs uppercase tracking-widest">
                <th className="p-6">Client Name</th>
                <th className="p-6">Goal</th>
                <th className="p-6">Calorie Progress (1700 kcal)</th>
                <th className="p-6">Status</th>
                <th className="p-6 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {clients.map((client) => (
                <tr key={client.id} className="hover:bg-white/5 transition-colors group">
                  <td className="p-6 font-bold">{client.name}</td>
                  <td className="p-6 text-gray-400 text-sm">{client.goal}</td>
                  <td className="p-6">
                    <div className="flex items-center gap-3">
                      <div className="w-24 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                        <div 
                          className="bg-cyan-500 h-full" 
                          style={{ width: `${(client.calories / client.target) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-300">{client.calories}/{client.target}</span>
                    </div>
                  </td>
                  <td className="p-6">
                    <span className={`flex items-center gap-1 text-[10px] font-black uppercase px-3 py-1 rounded-full w-fit ${
                      client.status === "On Track" ? "bg-emerald-500/10 text-emerald-500" : "bg-orange-500/10 text-orange-500"
                    }`}>
                      {client.status === "On Track" ? <FaCheckCircle /> : <FaExclamationCircle />}
                      {client.status}
                    </span>
                  </td>
                  <td className="p-6 text-center">
                    <button className="p-3 bg-white/5 rounded-xl hover:bg-cyan-500 hover:text-black transition">
                      <FaEye />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TrainerView;