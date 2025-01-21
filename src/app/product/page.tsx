// import React, { useEffect, useState } from "react";
// import sanityClient from "@sanity/client";
// import Image from "next/image";
// import { truncate } from "fs";

// const sanity = sanityClient({
//     projectId: "4n5b6bu4",
//     dataset: "production",
//     apiVersion: "2023-01-01",
//     useCdn: true,
// });
// interface Product {
//     _id: string;
//     title: string;
//     price: number;
//     description: string;
//     discountPercentage: number;
//     imageUrl: string;
//     productImage: {
//         assest: {
//             _ref: string;
//         };
//     };
//     tags: string[];
// }
// const ProductCards: React.FC = () => {
//     const [products, setProducts] = useState<Product[]>([]);
//     const [cart, setCart] = useState<Product[]>([]);

//     const fetchProducts = async () => {
//         try {
//             const query = `
//     *[type == "product"] {
//         _id,
//         tittle,
//         price,
//         description,
//         discountPercentage,
//         "imageUrl": productImage.asset->url,
//         tags
//     }
//     `;
//             const data = await sanity.fetch(query);
//             setProducts(data);

//         } catch (error) {
//             console.error("Error fetching products", error);
//         }
//     };

//     const addToCart = (product: Product) => {
//         setCart((prevCart) => [...prevCart, product]);
//         alert(`${product.title} has been added to your cart!`);
//     };

//     useEffect(() => {
//         fetchProducts();
//     }, []);
//     return (
//         <div className="p-4">
//             <h2 className="text-center text-slate-800 mt-4 mb-4"> Products From API's Data</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//                 {products.map((product) => (
//                     <div
//                         key={product._id}
//                         className="bg-white shadow-mg rounded-lgp-4 transition-shadow duration-300">
//                         <Image
//                             src={product.imageUrl}
//                             alt={product.tittle}
//                             width={300}
//                             height={300}
//                             className="w-full h-48 object-cover rounded-md"
//                         />
//                         <div className="mt-4">
//                             <h2 className="text-lg font-semibold">{product.title}</h2>
//                             <p className="text-slate-800 mt-2 text-sm">{truncateDescription(product.description)}</p>
//                             <div className="flex justify-between items-center mt-4">
//                                 <div>
//                                     <p className="text-slate-600 font-bold">{product.price}</p>
//                                     {product.discountPercentage > 0 && (
//                                         <p className="text-sm text-green-600">
//                                             {product.discountPercentage}% OFF
//                                         </p>
//                                     )}
//                                 </div>
//                             </div>
                            
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };
