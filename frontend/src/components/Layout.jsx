import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Layout = () => {
  return (
    <div className="flex h-screen bg-[#0b0e14] overflow-hidden">
      {/* Sidebar Hamesha Left Mein */}
      <Sidebar />

      {/* Right Side Content Area */}
      <div className="flex-1 overflow-y-auto relative scroll-smooth">
        {/* <Outlet /> wo jagah hai jahan Gym/Yoga/Shop wala page render hoga */}
        <div className="relative z-10">
            <Outlet />  {/* <--- YE LINE SABSE ZAROORI HAI */}
        </div>
      </div>
    </div>
  );
};

export default Layout;