import { useState } from "react";
import { auth, createUserWithEmailAndPassword } from "../firebase/firebaseconfig";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Requisitos de validación para la contraseña
  const isLengthValid = password.length >= 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasSpecialChar = /[^a-zA-Z0-9]/.test(password);

  const handleRegister = async (event: React.FormEvent) => {
    event.preventDefault();

    // Validación de contraseña: mínimo 8 caracteres, una mayúscula y un carácter especial
    // if (!isLengthValid || !hasUppercase || !hasSpecialChar) {
    //   alert("La contraseña debe tener al menos 8 caracteres, una mayúscula y un carácter especial.");
    //   return;
    // }

    // try {
    //   // Registro del usuario con Firebase (email y contraseña)
    //   await createUserWithEmailAndPassword(auth, email, password);
    //   alert("Registro exitoso, redirigiendo...");
    //   navigate("/dashboard");
    // } catch (error: any) {
    //   setError("Error: " + error.message);
    // }
  };

  const handleGoogleRegister = async () => {
    const provider = new GoogleAuthProvider();
    try {
      // Registro/inicio de sesión con Google
      await signInWithPopup(auth, provider);
      navigate("/dashboard");
    } catch (error: any) {
      setError("Error: " + error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Registro</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Contraseña:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          {/* Requisitos de la contraseña */}
          <div className="mb-4 text-sm">
            <p className="mb-1 font-semibold">Requisitos de la contraseña:</p>
            <ul className="space-y-1">
              <li className={isLengthValid ? "text-green-600" : "text-red-600"}>
                {isLengthValid ? "✓" : "✗"} Al menos 8 caracteres
              </li>
              <li className={hasUppercase ? "text-green-600" : "text-red-600"}>
                {hasUppercase ? "✓" : "✗"} Al menos una letra mayúscula
              </li>
              <li className={hasSpecialChar ? "text-green-600" : "text-red-600"}>
                {hasSpecialChar ? "✓" : "✗"} Al menos un carácter especial
              </li>
            </ul>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white p-3 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Registrarse
          </button>
        </form>
        {/* Separador visual */}
        <div className="my-4 flex items-center">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-500">O</span>
          <hr className="flex-grow border-gray-300" />
        </div>
        {/* Botón de registro con Google */}
        <button
          onClick={handleGoogleRegister}
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
          Registrarse con Google
        </button>
        <p className="mt-4 text-center text-gray-600">
          ¿Ya tienes cuenta?{" "}
          <Link to="/login" className="text-indigo-600 hover:underline">
            Inicia sesión aquí
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
