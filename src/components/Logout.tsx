import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebaseconfig";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate("/login"); // ✅ Redirige correctamente
    } catch (error: any) {
      alert(error.message);
    }
  };

  return <button onClick={handleLogout}>Cerrar Sesión</button>;
};

export default Logout;
