import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProtectedRoute({ allowedRole }) {
  const { firebaseUser, role, loading } = useAuth();

  // Wait for auth to finish loading
  if (loading) {
    return <div>Loading...</div>;
  }

  // Not logged in
  if (!firebaseUser) {
    return <Navigate to="/login" replace />;
  }

  // Role restriction
  if (allowedRole && role !== allowedRole) {
    return <Navigate to="/login" replace />;
  }

  // Allowed
  return <Outlet />;
}

export default ProtectedRoute;