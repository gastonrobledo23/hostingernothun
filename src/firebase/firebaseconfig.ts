import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged 
} from "firebase/auth";

import type { User } from "firebase/auth"; // ✅ Importar User como type
import { getFirestore } from "firebase/firestore";//enlazado con dahsboard,app,
// Configuración de Firebasee
const firebaseConfig = {
  apiKey: "AIzaSyDpdNLr9o2AL5w0EvncXFHcmfWhp_IS2Wo",
  authDomain: "basenothun.firebaseapp.com",
  projectId: "basenothun",
  storageBucket: "basenothun.firebasestorage.app",
  messagingSenderId: "486885299929",
  appId: "1:486885299929:web:63eb58dc8ff5de00e950c8",
  measurementId: "G-NN5PKXJ3DC"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
// 🔍 Verificar si las variables están cargando
console.log("Firebase Config:", firebaseConfig);
console.log("PROJECT_ID:", import.meta.env.VITE_FIREBASE_PROJECT_ID);


// Exportar módulos
export { auth,db, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged };
export type { User }; // ✅ Exportar User con 'export type'
export{analytics};