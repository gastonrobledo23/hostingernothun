import { useState } from "react";
import { auth, createUserWithEmailAndPassword } from "../firebase/firebaseconfig";
import { useNavigate, Link} from "react-router-dom"; // Usamos `useNavigate`

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Estado para errores
  const navigate = useNavigate(); // Inicializamos el hook `navigate`

  const handleRegister = async (event: React.FormEvent) => {
    event.preventDefault();

    // Validación de contraseña: mínimo 8 caracteres, una mayúscula y un carácter especial
    const passwordRegex = /^(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/;
    if (!passwordRegex.test(password)) {
      alert("La contraseña debe tener al menos 8 caracteres, una mayúscula y un carácter especial.");
      return;
    }

    try {
      // Registro del usuario con Firebase
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Registro exitoso, redirigiendo...");
      navigate("/dashboard"); // Redirige a la página del dashboard después del registro
    } catch (error: any) {
      setError("Error: " + error.message); // Muestra el error si falla el registro
    }
  };

  return (
    <div>
      <h2>Registro</h2>
      {error && <p>{error}</p>} {/* Muestra errores */}
      <form onSubmit={handleRegister}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Contraseña:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Registrarse</button>
      </form>

      {/* Enlace para ir al login si tiene cuenta */}
      <p>
        ¿Ya tienes cuenta?{" "}
        <Link to="/login">Inicia sesión aquí</Link>
      </p>
    </div>
  );
};

export default Register;
