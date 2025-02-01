// import React, { useState } from "react";
// import Layout from "../components/Layout";

// const actionUrl = "https://formspree.io/f/xzzdggwb"; // Reemplázalo con tu URL

// const About = () => {
//   const [formData, setFormData] = useState({ email: "", mensaje: "" });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <Layout
//       title="About Me"
//       description="Lorem ipsum dolor sit amet"
//       pubDate="2021-08-08"
//       heroImage="/img1.jpg"
//     >
//       <h2 className="text-2xl font-semibold mt-6">Contacto</h2>
//       <form action={actionUrl} method="POST" className="space-y-4">
//         <div>
//           <label htmlFor="email" className="block font-medium">
//             Correo electrónico:
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             required
//             className="border rounded p-2 w-full"
//             value={formData.email}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="mensaje" className="block font-medium">
//             Mensaje:
//           </label>
//           <textarea
//             id="mensaje"
//             name="mensaje"
//             required
//             className="border rounded p-2 w-full"
//             rows="4"
//             value={formData.mensaje}
//             onChange={handleChange}
//           ></textarea>
//         </div>
//         <button
//           type="submit"
//           className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
//         >
//           Enviar
//         </button>
//       </form>
//     </Layout>
//   );
// };

// export default About;
