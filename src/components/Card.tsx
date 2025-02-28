// import { useAuth } from "../hooks/useAuth";
// import { db } from "../firebase/firebaseconfig";
// import { doc, setDoc, deleteDoc } from "firebase/firestore";

// // Definir el tipo para 'card'
// interface CardType {
//   id: string;
//   title: string;
//   description: string;
// }

// const Card = ({ card }: { card: CardType }) => { // Usamos el tipo definido
//   const { user } = useAuth();

//   const saveCard = async () => {
//     if (!user) return alert("Inicia sesión para guardar cartas");
//     await setDoc(doc(db, "users", user.uid, "savedCards", card.id), card);
//   };

//   const removeCard = async () => {
//     if (!user) return;
//     await deleteDoc(doc(db, "users", user.uid, "savedCards", card.id));
//   };

//   return (
//     <div>
//       <h3>{card.title}</h3>
//       <p>{card.description}</p>
//       {user && (
//         <>
//           <button onClick={saveCard}>Guardar</button>
//           <button onClick={removeCard}>Eliminar</button>
//         </>
//       )}
//     </div>
//   );
// };

// export default Card;
