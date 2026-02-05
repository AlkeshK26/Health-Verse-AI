import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem('user'));

  if (!user || !user.token) {
    // Agar login nahi hai toh login page par bhej do
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;