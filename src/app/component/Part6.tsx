import Image from 'next/image';

function Part6() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center text-[#23A6F0] mb-20">
            <p>Practice Advice</p>
            <h1 className="sm:text-3xl text-2xl font-bold title-font text-[#252B42] mb-4">
            Featured Posts
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
            Problems trying to resolve the conflict between <br/>
            the two major realms of Classical physics: Newtonian mechanics<br/> 
            </p>
            
          </div>

          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            {/* Item 1 */}
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-348 h-300  inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                
              <Image
                  src="/road.png"  // Ensure the image is in the public folder
                  alt="description"
                  width={348}  // Adjust the width
                  height={300}  // Adjust the height
                  className="object-cover rounded-md"
                />

              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                Loudest à la Madison #1 <br/> 
                (L;integral)
                </h2>
                <p className="leading-relaxed text-base">
                We focus on ergonomics and meeting <br/> 
you where you work. It&apos;s only a <br/> 
keystroke away.
                </p>
                <a className="mt-3 text-indigo-500 inline-flex items-center">
                  Learn More
                 
                </a>
              </div>
            </div>

            {/* Item 2 with Image */}
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-348 h-300 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                {/* Next.js Image Component */}
                <Image
                  src="/road2.png"  // Ensure the image is in the public folder
                  alt="description"
                  width={348}  // Adjust the width
                  height={300}  // Adjust the height
                  className="object-cover rounded-md"
                />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                Loudest à la Madison #1 <br/> 
                (L integral)
                </h2>
                <p className="leading-relaxed text-base">
                We focus on ergonomics and meeting <br/> 
you where you work. It&apos;s only a <br/> 
keystroke away.
                </p>
                <a className="mt-3 text-indigo-500 inline-flex items-center">
                  Learn More
                  
                </a>
              </div>
            </div>

            {/* Item 3 with Image */}
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-600 h-600 inline-flex items-center justify-center  mb-5 flex-shrink-0">
                {/* Another Next.js Image Component */}
                <Image
                  src="/road3.png"  // Ensure the image is in the public folder
                  alt="description"
                  width={348}  // Adjust the width
                  height={300}  // Adjust the height
                  className=""
                />
              </div>
              <div className="text-left flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                Loudest à la Madison #1 <br/> 
                (L integral)
                </h2>
                <p className="leading-relaxed text-base">
                We focus on ergonomics and meeting <br/> 
you where you work. It&apos;s only a <br/> 
keystroke away.
                </p>
                <a className="mt-3 text-indigo-500 inline-flex items-center">
                  Learn More
                  
                </a>
              </div>
            </div>
          </div>

         
        </div>
      </section>
    </div>
  );
}

export default Part6;
