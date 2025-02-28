import { useState, useEffect } from "react"; 
import { signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebaseconfig";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Si el usuario ya está autenticado, redirigirlo al dashboard
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/dashboard");
      }
    });
    return () => unsubscribe();
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

  // Función para iniciar sesión con Google
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate("/dashboard");
    } catch (error: any) {
      setError("Error al iniciar sesión con Google");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Iniciar Sesión</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Contraseña"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white p-3 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Iniciar Sesión
          </button>
        </form>
        
        {/* Separador visual */}
        <div className="my-4 flex items-center">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-500">O</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Botón para iniciar sesión con Google */}
        <button
          onClick={handleGoogleLogin}
          className="w-full bg-red-600 text-white p-3 rounded-md hover:bg-red-700 transition-colors flex items-center justify-center"
        >
          <svg
            className="w-5 h-5 mr-2"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#FFC107"
              d="M43.611 20.083H42V20H24v8h11.303C34.914 33.124 30.597 36 24 36c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.093 0 5.9 1.157 8.1 3.044l5.657-5.657C33.348 6.79 28.93 5 24 5 13.506 5 5 13.506 5 24s8.506 19 19 19 19-8.506 19-19c0-1.278-.138-2.524-.389-3.917z"
            />
            <path
              fill="#FF3D00"
              d="M6.306 14.691l6.571 4.82C14.254 16.007 18.752 13 24 13c3.093 0 5.9 1.157 8.1 3.044l5.657-5.657C33.348 6.79 28.93 5 24 5c-7.62 0-14.271 3.39-18.694 8.691z"
            />
            <path
              fill="#4CAF50"
              d="M24 43c6.48 0 11.92-2.7 15.89-7.03l-7.34-6.03C29.74 35.26 27.01 36 24 36c-6.597 0-10.914-3.876-12.7-9.19l-7.34 6.03C8.08 40.3 13.52 43 24 43z"
            />
            <path
              fill="#1976D2"
              d="M43.611 20.083H42V20H24v8h11.303c-1.123 3.096-3.723 5.824-7.303 7.19l7.34 6.03C39.76 35.34 43 30.42 43 24c0-1.278-.138-2.524-.389-3.917z"
            />
          </svg>
          Iniciar sesión con Google
        </button>

        <p className="mt-4 text-center text-gray-600">
          ¿No tienes cuenta?{" "}
          <Link to="/register" className="text-indigo-600 hover:underline">
            Regístrate aquí
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
