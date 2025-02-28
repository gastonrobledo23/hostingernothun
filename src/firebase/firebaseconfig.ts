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
  apiKey: import.meta.env.PUBLIC_API_KEY,
  authDomain: import.meta.env.PUBLIC_AUTH_DOMAIN,
  projectId: import.meta.env.PUBLIC_PROJECT_ID,
  storageBucket: import.meta.env.PUBLIC_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.PUBLIC_MESSAGING_SENDER_ID,
  appId: import.meta.env.PUBLIC_APP_ID,
  measurementId: import.meta.env.PUBLIC_MEASUREMENT_ID,
};


export default firebaseConfig;



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