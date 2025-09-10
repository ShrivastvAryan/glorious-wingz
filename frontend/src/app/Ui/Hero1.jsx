import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="w-full bg-[#fdf8f5] py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div>
          <h1 className="text-6xl font-serif font-bold leading-tight text-gray-900">
            Hi There <br />
            This is <br />
            — Glourious <br />
            Wingz
          </h1>
          <p className="mt-6 text-gray-600 text-lg max-w-md">
            Floral Designer, Wedding Planner, and Event Enthusiast who creates
            memorable moments for special occasions.
          </p>
          <button className="mt-8 px-6 py-3 bg-[#962528] text-white rounded-md shadow hover:bg-red-700 transition">
            Get in touch
          </button>
        </div>

        {/* Right Images */}

<div className="relative flex justify-center">
  {/* Main Portrait */}
  <Image
    src={null}
    alt="Main"
    width={320}
    height={420}
    className="rounded-lg shadow-lg w-[320px] h-[420px] object-cover"
  />

  {/* Small Circle Image */}
  <Image
    src={null}
    alt="Circle"
    width={144}
    height={144}
    className="absolute bottom-[-40px] left-[-60px] w-36 h-36 rounded-full border-4 border-[#fdf8f5] object-cover shadow-md"
  />

  {/* Small Rect Image */}
  <Image
    src={null}
    alt="Small"
    width={128}
    height={160}
    className="absolute top-12 right-[-60px] w-32 h-40 rounded-lg shadow-md object-cover"
  />
</div>
      </div>
    </section>
  );
};

export default Hero;
