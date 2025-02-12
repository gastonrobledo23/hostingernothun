import { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../firebase/firebaseconfig";

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("🔄 Iniciando escucha de autenticación...");

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("👤 Usuario detectado:", user);
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  console.log("🔍 Estado actual - Usuario:", user, " | Loading:", loading);

  return { user, loading };
};
