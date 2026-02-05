import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Layout from './components/Layout';

import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import About from './pages/About';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import GymWorkout from './pages/GymWorkout';
import Chest from './pages/exercises/Chest';
import Back from './pages/exercises/Back';
import Shoulders from './pages/exercises/Shoulders';
import Triceps from './pages/exercises/Triceps';
import Biceps from './pages/exercises/Biceps';
import Legs from './pages/exercises/Legs';
import Abs from './pages/exercises/Abs';
import HomeWorkout from './pages/HomeWorkout';
import Stress from './pages/Stress';
import DietPlan from './pages/DietPlan';
import Yoga from './pages/Yoga';
import Shops from './pages/Shops';
import ProtectedRoute from './components/ProtectedRoute';
import AIChatPage from './pages/AIChatPage'; // Naya Page create karenge
// ✅ 1. Import CustomizePlan
import CustomizePlan from './pages/CustomizePlan'; 
import CalorieLens from './pages/CalorieLens'; // 1. Import the new page

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* App Pages with Sidebar */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          
          {/* ✅ 2. Route Add Karein */}
          <Route path="/customize-plan" element={<CustomizePlan />} />

          <Route path="/gym-workout" element={<GymWorkout />} />
          <Route path="/home-workout" element={<HomeWorkout />} />
          <Route path="/stress-psychology" element={<Stress />} />
          <Route path="/smart-diet-plan" element={<DietPlan />} />
          <Route path="/yoga" element={<Yoga />} />
          <Route path="/shops" element={<Shops />} />

          {/* Exercise Details */}
          <Route path="/gym-workout/chest" element={<Chest />} />
          <Route path="/gym-workout/back" element={<Back />} />
          <Route path="/gym-workout/shoulders" element={<Shoulders />} />
          <Route path="/gym-workout/triceps" element={<Triceps />} />
          <Route path="/gym-workout/biceps" element={<Biceps />} />
          <Route path="/gym-workout/legs" element={<Legs />} />
          <Route path="/gym-workout/abs" element={<Abs />} />
          <Route path="/ai-coach" element={<AIChatPage />} />
          <Route path="/calorie-tracker" element={<CalorieLens />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;