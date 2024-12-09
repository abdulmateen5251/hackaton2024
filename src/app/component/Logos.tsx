// components/ImageGallery.js

import Image from 'next/image'

const images = [
  { src: '/logo1.png', alt: 'Image 1' },
  { src: '/logo2.png', alt: 'Image 2' },
  { src: '/logo3.png', alt: 'Image 3' },
  { src: '/logo4.png', alt: 'Image 4' },
  { src: '/logo5.png', alt: 'Image 5' },
]

const Logos = () => {
  return (
    <div className="w-[1440px] h-[271px] flex items-center justify-center  gap-[30px] space-x-5">
      {images.map((image, index) => (
        <div key={index} className="flex-shrink-0">
          <Image
            src={image.src}
            alt={image.alt}
            width={153}
            height={34}
            className="object-cover rounded-lg"
          />
        </div>
      ))}
    </div>
  )
}

export default Logos
