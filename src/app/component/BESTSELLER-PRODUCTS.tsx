import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logos from "./Logos";

const BESTSELLER: React.FC = () => {
  // Create an array of product data
  const products = [
    {
      src: "/k1.png",
      alt: "ecommerce",
      design: "Graphic Design",
      dept: "English Department",
      price: "$16.48",
      oldPrice: "$16.48",
      width: 239,
      height: 280,
    },
    {
      src: "/k2.png",
      alt: "ecommerce",
      design: "Graphic Design",
      dept: "English Department",
      price: "$16.48",
      oldPrice: "$16.48",
      width: 239,
      height: 280,
    },
    {
      src: "/k3.png",
      alt: "ecommerce",
      design: "Graphic Design",
      dept: "English Department",
      price: "$16.48",
      oldPrice: "$16.48",
      width: 239,
      height: 280,
    },
    {
      src: "/k4.png",
      alt: "ecommerce",
      design: "Graphic Design",
      dept: "English Department",
      price: "$16.48",
      oldPrice: "$16.48",
      width: 239,
      height: 280,
    },
    {
      src: "/k5.png",
      alt: "ecommerce",
      design: "Graphic Design",
      dept: "English Department",
      price: "$16.48",
      oldPrice: "$16.48",
      width: 239,
      height: 280,
    },
    {
      src: "/k6.png",
      alt: "ecommerce",
      design: "Graphic Design",
      dept: "English Department",
      price: "$16.48",
      oldPrice: "$16.48",
      width: 239,
      height: 280,
    },
    {
      src: "/k7.png",
      alt: "ecommerce",
      design: "Graphic Design",
      dept: "English Department",
      price: "$16.48",
      oldPrice: "$16.48",
      width: 239,
      height: 280,
    },
    {
      src: "/k8.png",
      alt: "ecommerce",
      design: "Graphic Design",
      dept: "English Department",
      price: "$16.48",
      oldPrice: "$16.48",
      width: 239,
      height: 280,
    },
  ];

  return (
    <div className="bg-[#FAFAFA]">
      
      <section className=" ">
      <div className=" w-[691px] h-[32px] text-start mt-[70px] mb-0 ml-4   text-[24px] text-[#252B42] font-bold tracking-[0.1px] leading-[32px]    ">BESTSELLER PRODUCTS
      <hr className="mt-9 mx-auto"/>
      </div>
      
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {products.map((product, index) => (
              <div key={index} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <Link href="#" passHref>
                  <div className="block relative overflow-hidden">
                    <Image
                      alt={product.alt}
                      className="object-cover object-center w-full h-full block"
                      src={product.src}
                      width={product.width}
                      height={product.height}
                    />
                  </div>
                </Link>
                <div className="mt-4">
                  <h3 className="text-[#252B42] text-center font-bold text-lg tracking-widest title-font mb-1">
                    {product.design}
                  </h3>
                  <h2 className="text-[#737373] text-center font-bold">
                    {product.dept}
                  </h2>
                  <p className="mt-1 text-[#BDBDBD] font-bold text-center">
                    {product.price}{" "}
                    <span className="text-[#23856D]">{product.oldPrice}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Logos />
    </div>
  );
};

export default BESTSELLER;
