"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import Header from "../component/Header";

interface Product {
  _id: string;
  title: string;
  price: number;
  description: string;
  discountPercentage: number;
  productImage: {
    asset: {
      _ref: string;
    };
  };
  tags: string[];
  slug: {
    _type: "slug"; // Fixed typo
    current: string;
  };
}

// Fetch products from Sanity (Moved inside useEffect)
async function fetchProducts(): Promise<Product[]> {
  const query = `
   *[_type == "product"] {
        _id,
        title,
        price,
        description,
        discountPercentage,
        productImage,
        tags,
        slug // Ensures slug is fetched
    }`;
  const products = await client.fetch(query);
  return products;
}

const Shop: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);

  // Fetch products on component mount (Client-side only)
  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    getProducts();
  }, []);

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.title} has been added to your cart!`);
  };

  const truncateDescription = (description: string) =>
    description.length > 100 ? `${description.substring(0, 100)}...` : description;

  return (
    <>
    <Header/>
    <div className="p-4">
      <h2 className="text-center text-slate-800 mt-4 mb-4">
        Products From API Data
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white shadow-lg rounded-lg gap-4 transition-shadow duration-300 p-4"
          >
            {/* Link dynamic page */}
            <Link href={`/product/${product.slug.current}`} passHref>
              
                <Image
                  src={urlFor(product.productImage).url()}
                  alt={product.title}
                  width={300}
                  height={300}
                  className="w-full h-48 object-cover rounded-md"
                />
              
              </Link>

            <div className="mt-4">
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <p className="text-slate-800 mt-2 text-sm">
                {truncateDescription(product.description)}
              </p>

              <div className="flex justify-between items-center mt-4">
                <div>
                  <p className="text-slate-600 font-bold">
                    ${product.price.toFixed(2)}
                  </p>
                  {product.discountPercentage > 0 && (
                    <p className="text-sm text-green-600">
                      {product.discountPercentage}% OFF
                    </p>
                  )} 
                </div>
              </div>

              <div className="mt-2 flex flex-wrap gap-2">
                {product.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs bg-slate-400 text-black rounded-full px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <button
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
            
          </div>
        ))}
      </div>

      {/* Cart Summary */}
      <div className="mt-8 bg-slate-100 p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-black text-red-800">Cart Summary</h2>
        {cart.length > 0 ? (
          <ul className="space-y-4">
            {cart.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-white shadow-md p-4 rounded-md"
              >
                <div>
                  <p className="font-medium text-slate-900">{item.title}</p>
                  <p className="text-sm text-blue-600">${item.price.toFixed(2)}</p>
                </div>
                <Image
                  src={urlFor(item.productImage).url()}
                  alt={item.title}
                  width={50}
                  height={50}
                  className="rounded-md"
                />
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-black text-center">
            Your cart is empty. Please add products.
          </p>
        )}
      </div>
    </div>
    </>
  );
};

export default Shop;
