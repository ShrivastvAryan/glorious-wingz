import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="w-full bg-[#fdf8f5] py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold leading-tight text-gray-900">
            Hi, <br />
            This is <br />
            — Glourious <br />
            Wingz
          </h1>
          <p className="mt-6 text-gray-600 text-base sm:text-lg max-w-md mx-auto md:mx-0">
            Floral Designer, Wedding Planner, and Event Enthusiast who creates
            memorable moments for special occasions.
          </p>
          <button className="mt-8 px-6 py-3 bg-[#962528] text-white rounded-md shadow hover:bg-red-700 transition">
            Get in touch
          </button>
        </div>

        {/* Right Images */}
        <div className="relative flex justify-center md:justify-end">
          {/* Main Portrait */}
          <Image
            src="/img-2.jpg"
            alt="Main"
            width={320}
            height={420}
            className="rounded-lg shadow-lg w-[220px] sm:w-[280px] md:w-[320px] h-auto border-4 border-[#962528] object-cover"
          />

          {/* Small Circle Image */}
          <Image
            src="/logo.jpg"
            alt="Circle"
            width={144}
            height={144}
            className="absolute bottom-[-30px] left-[-30px] sm:bottom-[-40px] sm:left-[-60px] w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-full object-cover shadow-md"
          />

          {/* Small Rect Image */}
          <Image
            src="/img-3.jpg"
            alt="Small"
            width={128}
            height={160}
            className="absolute top-8 right-[-30px] sm:right-[-40px] md:right-[-60px] w-24 h-32 sm:w-28 sm:h-36 md:w-32 md:h-40 rounded-lg border-4 border-[#962528] shadow-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
