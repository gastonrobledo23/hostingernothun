import { auth } from "../firebase/firebaseconfig";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Dashboard = () => {
  const navigate = useNavigate();
  // Cambia el tipo de error para que pueda ser una cadena o null
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null); // Aquí cambiamos el tipo

  const handleLogout = async () => {
    setLoading(true);
    setError(null);
    try {
      await signOut(auth);
      navigate("/login");
    } catch (err) {
      setError("Hubo un error al cerrar sesión. Intenta nuevamente.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen p-4">
      <h2 className="text-3xl font-semibold mb-4">Bienvenido al Dashboard</h2>
      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
      <button 
        onClick={handleLogout} 
        disabled={loading} 
        className={`px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md transition duration-300 
          ${loading ? 'bg-gray-300 cursor-not-allowed' : 'hover:bg-blue-600'}`}
      >
        {loading ? "Cerrando sesión..." : "Cerrar Sesión"}
      </button>
    </div>
  );
};

export default Dashboard;

