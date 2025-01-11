// components/ImageGallery.js

import Image from 'next/image'

const images = [
  { src: '/shop1.png', alt: 'Image 1' },
  { src: '/shop2.png', alt: 'Image 2' },
  { src: '/shop3.png', alt: 'Image 3' },
  { src: '/shop4.png', alt: 'Image 4' },
  { src: '/shop5.png', alt: 'Image 5' },
  // Add more images if needed
]

const ImageGallery = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8">
      {/* 
        Use a responsive grid with Tailwind.
        - grid-cols-2 on mobile
        - md:grid-cols-3 on medium devices
        - lg:grid-cols-5 on large devices
      */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
        {images.map((image, index) => (
          <div key={index} className="relative w-full h-0 pb-[100%]">
            {/*
              1) For a square “container”, we give the div a padding-bottom (100% => square).
              2) We make the parent `relative` and the child Image `fill` to occupy all available space.
              3) With object-cover, the image will crop nicely in the container.
            */}
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              // Optional: help the browser pick an appropriate size
              sizes="(max-width: 640px) 50vw,
                     (max-width: 1024px) 33vw,
                     20vw"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageGallery
