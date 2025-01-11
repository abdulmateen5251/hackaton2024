// components/Logos.js

import Image from 'next/image'

const images = [
  { src: '/logo1.png', alt: 'Image 1' },
  { src: '/logo2.png', alt: 'Image 2' },
  { src: '/logo3.png', alt: 'Image 3' },
  { src: '/logo4.png', alt: 'Image 4' },
  { src: '/logo5.png', alt: 'Image 5' },
  { src: '/logo6.png', alt: 'Image 6' },
]

const Logos = () => {
  return (
    <div className="max-w-[1054px] mx-auto  px-4 py-8">
      {/*
        1) The grid utility classes define how many columns you have at each breakpoint.
        2) `place-items-center` ensures each grid cell is centered both horizontally and vertically.
        3) Adjust grid-cols for each breakpoint (e.g., 2 columns on small, 3 on medium, 6 on large).
      */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 place-items-center">
        {images.map((image, index) => (
          <div key={index}>
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
    </div>
  )
}

export default Logos
