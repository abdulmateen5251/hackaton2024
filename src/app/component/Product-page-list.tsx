// components/ImageGallery.js

import Image from 'next/image'

const images = [
  { src: '/shop1.png', alt: 'Image 1' },
  { src: '/shop2.png', alt: 'Image 2' },
  { src: '/shop3.png', alt: 'Image 3' },
  { src: '/shop4.png', alt: 'Image 4' },
  { src: '/shop5.png', alt: 'Image 5' }, // Add more images if needed
]

const ImageGallery = () => {
  return (
    <div className="w-[1440px] h-[271px] flex items-center justify-start ml-48 space-x-5">
      {images.map((image, index) => (
        <div key={index} className="flex-shrink-0">
          <Image
            src={image.src}
            alt={image.alt}
            width={205}  // Fixed width as per your request
            height={206} // Fixed height as per your request
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
      ))}
    </div>
  )
}

export default ImageGallery
