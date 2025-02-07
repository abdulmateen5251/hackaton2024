import Header from "@/app/component/Header"
import { Product } from "@/app/types/product"
import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image"
import { groq } from "next-sanity"
import Image from 'next/image'

function truncateDescription(description: string, length: number = 800): string {
  if (description.length <= length) return description;
  return description.substring(0, length) + '...';
}

interface ProductPageprops {
  params: Promise<{slug:string}>
}


async function getProduct(slug: string): Promise<Product > {
  return client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{ 
        _id,
        title,
        price,
        description,
        discountPercentage,
        productImage,
        tags 
    }`,{slug}
    
  )
}

export default async function ProductPage({ params }: ProductPageprops) {
  const {slug } = await params // Correctly accessed without await
  
  const product = await getProduct(slug)



 

    

  return (
    <>
    <Header/>
    <div className="max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="aspect-square">
          {product.productImage && ( // Fixed from product.productImage to product.image
            <Image
              src={urlFor(product.productImage).url()}
              alt={product.title}
              width={500}
              height={400}
              className="rounded-lg shadow-md"
            />
          )}
          
        </div>
        
        <div className="flex flex-col gap-8">
            <h1 className="text-4xl font-bold">
                {product.title}
            </h1>
            <p className="text-2xl font-semibold text-red-700  ">
                ${product.price}
            </p>
            <p className="text-[15px] font-semibold text-slate-600">
          {truncateDescription(product.description)}
          
            </p>
            <p className="text-2xl  bg-[#f1f1f1] gap-7 font-semibold">
                {product.discountPercentage}
            </p>


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
            
            
        </div>
      </div>
    </div>

    </>
  )
}
