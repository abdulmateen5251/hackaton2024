import Image from 'next/image';

function Loudest () {
  // Feature items data
  const features = [
    {
      id: 1,
      src: '/road.png',
      alt: 'Road image 1',
      title: 'Loudest à la Madison #1',
      subTitle: '(L; integral)',
      description: `We focus on ergonomics and meeting
      you where you work. It's only a
      keystroke away.`,
    },
    {
      id: 2,
      src: '/road2.png',
      alt: 'Road image 2',
      title: 'Loudest à la Madison #1',
      subTitle: '(L integral)',
      description: `We focus on ergonomics and meeting
      you where you work. It's only a
      keystroke away.`,
    },
    {
      id: 3,
      src: '/road3.png',
      alt: 'Road image 3',
      title: 'Loudest à la Madison #1',
      subTitle: '(L integral)',
      description: `We focus on ergonomics and meeting
      you where you work. It's only a
      keystroke away.`,
    },
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        {/* Header / Title */}
        <div className="text-center text-[#23A6F0] mb-20">
          <p>Practice Advice</p>
          <h1 className="sm:text-3xl text-2xl font-bold title-font text-[#252B42] mb-4">
            Featured Posts
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
            Problems trying to resolve the conflict between <br />
            the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>

        {/* Features */}
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          {features.map(({ id, src, alt, title, subTitle, description }) => (
            <div
              key={id}
              className="p-4 md:w-1/3 w-full flex flex-col text-center items-center"
            >
              {/* Responsive Image Container */}
              <div className="relative w-full h-60 mb-5">
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw,
                         (max-width: 1024px) 50vw,
                         33vw"
                />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  {title} <br />
                  {subTitle}
                </h2>
                <p className="leading-relaxed text-base whitespace-pre-line">
                  {description}
                </p>
                <a className="mt-3 text-indigo-500 inline-flex items-center cursor-pointer">
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Loudest ;
