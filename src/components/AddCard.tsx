// import { useState } from "react";
// import { db } from "../firebase/firebaseconfig";
// import { collection, addDoc } from "firebase/firestore";

// const AddCard = ({ userEmail }: { userEmail: string }) => {
//   const adminEmail = "gastonrobledo44@gmail.com";
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [imageUrl, setImageUrl] = useState("");
//   const [tag, setTag] = useState("");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (userEmail !== adminEmail) return;

//     await addDoc(collection(db, "cards"), {
//       title,
//       description,
//       imageUrl,
//       tag,
//     });

//     setTitle("");
//     setDescription("");
//     setImageUrl("");
//     setTag("");
//   };

//   if (userEmail !== adminEmail) return null;

//   return (
//     <div>
//       <h2>Agregar Nueva Carta</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="text" placeholder="Título" value={title} onChange={(e) => setTitle(e.target.value)} required />
//         <input type="text" placeholder="Descripción" value={description} onChange={(e) => setDescription(e.target.value)} required />
//         <input type="text" placeholder="URL de la imagen" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} required />
//         <input type="text" placeholder="Tag" value={tag} onChange={(e) => setTag(e.target.value)} required />
//         <button type="submit">Agregar Carta</button>
//       </form>
//     </div>
//   );
// };

// export default AddCard;
