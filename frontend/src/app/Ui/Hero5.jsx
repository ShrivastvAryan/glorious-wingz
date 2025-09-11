// components/CallToAction.js
const Hero5=() =>{
  return (
    <section className="bg-[#f5e9e0] py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
          Are you ready to plan <br /> a special day
        </h2>

        {/* Subtext */}
        <p className="mt-4 text-gray-600 text-sm md:text-base">
          We will take care of everything for you from event planning
          <br /> and curation to design and production.
        </p>

        {/* Button */}
        <button className="mt-6 bg-red-700 hover:bg-red-800 text-white font-medium px-6 py-3 rounded-md shadow-md transition">
          Let&apos;s talk
        </button>
      </div>
    </section>
  );
}

export default Hero5
