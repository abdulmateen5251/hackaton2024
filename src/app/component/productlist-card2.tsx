import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Product {
  src: string;
  alt: string;
  width: number;
  height: number;
  design: string;
  dept: string;
  price: string;
  oldPrice: string;
}

const Cart2: React.FC = () => {
  // Define your product data here:
  const products: Product[] = [
    {
      src: "/list1.png",
      alt: "ecommerce",
      width: 239,
      height: 260,
      design: "Graphic Design",
      dept: "English Department",
      price: "$16.48",
      oldPrice: "$16.48",
    },
    {
      src: "/list2.png",
      alt: "ecommerce",
      width: 239,
      height: 261,
      design: "Graphic Design",
      dept: "English Department",
      price: "$16.48",
      oldPrice: "$16.48",
    },
    {
      src: "/list3.png",
      alt: "ecommerce",
      width: 239,
      height: 427,
      design: "Graphic Design",
      dept: "English Department",
      price: "$16.48",
      oldPrice: "$16.48",
    },
    {
      src: "/list4.png",
      alt: "ecommerce",
      width: 239,
      height: 427,
      design: "Graphic Design",
      dept: "English Department",
      price: "$16.48",
      oldPrice: "$16.48",
    },
    {
      src: "/list5.png",
      alt: "ecommerce",
      width: 239,
      height: 427,
      design: "Graphic Design",
      dept: "English Department",
      price: "$16.48",
      oldPrice: "$16.48",
    },
    {
      src: "/list6.png",
      alt: "ecommerce",
      width: 239,
      height: 427,
      design: "Graphic Design",
      dept: "English Department",
      price: "$16.48",
      oldPrice: "$16.48",
    },
    {
      src: "/list7.png",
      alt: "ecommerce",
      width: 239,
      height: 427,
      design: "Graphic Design",
      dept: "English Department",
      price: "$16.48",
      oldPrice: "$16.48",
    },
    {
      src: "/list8.png",
      alt: "ecommerce",
      width: 239,
      height: 427,
      design: "Graphic Design",
      dept: "English Department",
      price: "$16.48",
      oldPrice: "$16.48",
    },
    {
      src: "/list9.png",
      alt: "ecommerce",
      width: 239,
      height: 427,
      design: "Graphic Design",
      dept: "English Department",
      price: "$16.48",
      oldPrice: "$16.48",
    },
    {
      src: "/list10.png",
      alt: "ecommerce",
      width: 239,
      height: 427,
      design: "Graphic Design",
      dept: "English Department",
      price: "$16.48",
      oldPrice: "$16.48",
    },
    {
      src: "/list11.png",
      alt: "ecommerce",
      width: 239,
      height: 427,
      design: "Graphic Design",
      dept: "English Department",
      price: "$16.48",
      oldPrice: "$16.48",
    },
    {
      src: "/list12.png",
      alt: "ecommerce",
      width: 239,
      height: 427,
      design: "Graphic Design",
      dept: "English Department",
      price: "$16.48",
      oldPrice: "$16.48",
    },
  ];

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {products.map((product, index) => (
              <div
                key={index}
                className="lg:w-1/4 md:w-1/2 p-4 w-full"
              >
                <Link href="#" passHref>
                  <div className="block relative  overflow-hidden">
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
                  <Image
                    src="/colors.png"
                    alt="description"
                    width={90}
                    height={50}
                    className="ml-[102px] mt-2 w-90 h-90"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart2;
