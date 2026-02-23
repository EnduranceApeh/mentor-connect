import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProtectedRoute({ allowedRole }) {
  const { user, role } = useAuth(); // ✅ must call the hook

  // Wait for auth state to load
  if (user === null && role === null) {
    return <div>Loading...</div>;
  }

  // Not logged in
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Role restriction
  if (allowedRole && role !== allowedRole) {
    return <Navigate to="/login" replace />;
  }

  // User is allowed → render nested routes
  return <Outlet />;
}

export default ProtectedRoute;
