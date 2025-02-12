import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

type ProtectedRouteProps = {
  children: React.ReactNode;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user, loading } = useAuth();

  console.log("🚀 ProtectedRoute - Usuario:", user, " | Loading:", loading);

  if (loading) {
    return <p>Cargando...</p>;
  }

  return user ? <>{children}</> : <Navigate to="/login" />;
};

export default ProtectedRoute;
