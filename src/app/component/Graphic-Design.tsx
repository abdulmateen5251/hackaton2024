import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// 1. Define the shape of a single product
interface Product {
  id: number;
  src: string;
  alt: string;
  height?: number;
  title: string;
  subTitle: string;
  price: string;
  discountPrice: string;
}

// 2. Define the shape of the ProductCard's props
interface ProductCardProps {
  product: Product;
}

// Reusable product card component
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="p-4 w-full">
      <Link href="/Add-to-card" passHref>
        <div className="relative rounded overflow-hidden cursor-pointer">
          <Image
            alt={product.alt}
            src={product.src}
            width={239}
            height={product.height || 427}
            className="object-cover object-center w-full h-full"
          />
        </div>
      </Link>

      <div className="mt-4">
        <h3 className="text-[#252B42] text-center font-bold text-lg tracking-widest title-font mb-1">
          {product.title}
        </h3>
        <h2 className="text-[#737373] text-center font-bold">
          {product.subTitle}
        </h2>
        <p className="mt-1 text-[#BDBDBD] font-bold text-center">
          {product.price}{' '}
          <span className="text-[#23856D]">{product.discountPrice}</span>
        </p>
        <div className="flex justify-center mt-2">
          <Image
            src="/colors.png"
            alt="description"
            width={90}
            height={50}
            className="w-90 h-90"
          />
        </div>
      </div>
    </div>
  );
};

// 3. Define the Cart1 component
const GraphicDesign: React.FC = () => {
  // 4. Mark products as Product[]
  const products: Product[] = [
    {
      id: 1,
      src: '/cart1.png',
      alt: 'ecommerce',
      height: 260,
      title: 'Graphic Design',
      subTitle: 'English Department',
      price: '$16.48',
      discountPrice: '$16.48',
    },
    {
      id: 2,
      src: '/cart2.png',
      alt: 'ecommerce',
      height: 261,
      title: 'Graphic Design',
      subTitle: 'English Department',
      price: '$16.48',
      discountPrice: '$16.48',
    },
    {
      id: 3,
      src: '/cart3.png',
      alt: 'ecommerce',
      height: 427,
      title: 'Graphic Design',
      subTitle: 'English Department',
      price: '$16.48',
      discountPrice: '$16.48',
    },
    {
      id: 4,
      src: '/cart4.png',
      alt: 'ecommerce',
      height: 427,
      title: 'Graphic Design',
      subTitle: 'English Department',
      price: '$16.48',
      discountPrice: '$16.48',
    },
    {
      id: 5,
      src: '/cart5.png',
      alt: 'ecommerce',
      height: 427,
      title: 'Graphic Design',
      subTitle: 'English Department',
      price: '$16.48',
      discountPrice: '$16.48',
    },
    {
      id: 6,
      src: '/cart6.png',
      alt: 'ecommerce',
      height: 427,
      title: 'Graphic Design',
      subTitle: 'English Department',
      price: '$16.48',
      discountPrice: '$16.48',
    },
    {
      id: 7,
      src: '/cart7.png',
      alt: 'ecommerce',
      height: 427,
      title: 'Graphic Design',
      subTitle: 'English Department',
      price: '$16.48',
      discountPrice: '$16.48',
    },
    {
      id: 8,
      src: '/cart8.png',
      alt: 'ecommerce',
      height: 427,
      title: 'Graphic Design',
      subTitle: 'English Department',
      price: '$16.48',
      discountPrice: '$16.48',
    },
  ];

  return (
    <div>
      {/* Header Section */}
      <div className="max-w-lg mx-auto text-center mb-10">
        <h2 className="text-[20px] text-[#737373]">Featured Products</h2>
        <h2 className="font-bold text-[#252B42] text-[24px] mt-1">
          BESTSELLER PRODUCTS
        </h2>
        <p className="font-medium text-[14px] text-[#737373] mt-1">
          Problems trying to resolve the conflict between
        </p>
      </div>

      {/* Products Section */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 pb-24 mx-auto">
          {/* Responsive grid for products */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 -m-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GraphicDesign;
