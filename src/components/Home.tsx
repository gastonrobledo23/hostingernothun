// import { useEffect, useState } from "react";
// import { db } from "../firebase/firebaseconfig";
// import { collection, getDocs } from "firebase/firestore";
// import Card from "../components/Card";

// // Definir un tipo para la carta
// interface CardType {
//   id: string;
//   title: string;
//   description: string;
// }

// const Home = () => {
//     const { user } = useAuth(); // Obtener el usuario autenticado
  
//     const addNewCard = () => {
//       if (!user) {
//         alert("Inicia sesión para agregar nuevas cartas");
//         return;
//       }
//       // Código para agregar una carta nueva
//     };
  
//     return (
//       <div>
//         <h2>Todas las Cartas</h2>
//         {user && <button onClick={addNewCard}>Agregar Carta Nueva</button>} {/* Mostrar solo si hay usuario */}
//         <div>
//           {cards.map((card) => (
//             <Card key={card.id} card={card} />
//           ))}
//         </div>
//       </div>
//     );
//   };
  
// export default Home;
