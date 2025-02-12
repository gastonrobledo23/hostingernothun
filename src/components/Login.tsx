import { useState,useEffect } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import { auth } from "../firebase/firebaseconfig";
import { useNavigate, Link} from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // ✅ Si el usuario ya está autenticado, redirigirlo al dashboard
 useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      navigate("/dashboard");
    }
  });

  return () => unsubscribe(); // Limpia el listener al desmontar
}, [navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (error) {
      setError("Error al iniciar sesión");
    }
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Iniciar Sesión</button>
      </form>

         
      {/* Enlace para ir al registro si no tiene cuenta */}
      <p>
        ¿No tienes cuenta?{" "}
        <Link to="/register">Regístrate aquí</Link>
      </p>

    </div>
  );
};

export default Login;
