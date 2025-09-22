import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="w-full bg-[#fdf8f5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content: Text & CTA */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal leading-tight text-gray-800">
            We Design, Plan & Create 
            <span className="block font-bold text-[#4a4a4a] mt-2">Your Perfect Day.</span>
          </h1>
          <p className="mt-6 text-gray-600 text-lg max-w-lg mx-auto lg:mx-0">
            From grand and high-profile corporate galas to intimate celebrations and bespoke décor,
            Glorious Wingz transforms every occasion into an unforgettable experience with seamless planning, flawless execution, and a touch of creative brilliance.
          </p>
          <button className="mt-10 px-8 py-3 bg-[#a13d3d] text-white font-medium rounded-md shadow-lg hover:bg-[#8e3636] transition-transform transform hover:scale-105">
            Get In Touch
          </button>
        </div>

        {/* Right Content: Image Collage */}
        <div className="relative h-[450px] sm:h-[550px] w-full max-w-lg mx-auto">
          {/* Background Image: Top Right */}
          <div className="absolute top-0 right-0 w-2/3 h-2/3 z-0">
            <Image
              src="/img-3.jpg" // **REPLACE THIS IMAGE**
              alt="Elegant event table setup"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-md"
            />
          </div>

          {/* Main Image: Center */}
          <div className="absolute top-1/2 left-1/2 w-[65%] h-[80%] -translate-x-1/2 -translate-y-1/2 z-10">
             <Image
              src="/img6.jpg" // **REPLACE THIS IMAGE**
              alt="Beautiful floral arrangement centerpiece"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-xl"
            />
          </div>

          {/* Foreground Image: Bottom Left */}
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 z-20">
            <Image
              src="/logo.jpg" // **REPLACE THIS IMAGE**
              alt="Detailed shot of wedding decor"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;