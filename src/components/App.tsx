import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Register from "./Register"; // Asegúrate de que esté importado
import ProtectedRoute from "./ProtectedRoute";
import { useAuth } from "../hooks/useAuth";
import { auth } from "../firebase/firebaseconfig";

console.log("🔥 Estado de autenticación actual:", auth.currentUser);


function App() {
  const { loading } = useAuth();

  if (loading) {
    return <p>Cargando...</p>;
  }

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> 
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="*" element={<Navigate to="/login" />} />  
      </Routes>
    </Router>
  );
}

export default App;
