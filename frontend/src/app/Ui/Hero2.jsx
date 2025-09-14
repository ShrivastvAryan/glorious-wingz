import Image from "next/image";

const Services = () => {
  return (
    <section className=" bg-[#fdf8f5] py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Title */}
        <p className="text-xs font-semibold text-red-600 tracking-widest uppercase">
          My Services
        </p>
        <h2 className="mt-2 text-4xl font-serif font-bold text-gray-900">
          All you need is on me
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          I will take care of everything for you from event planning and
          curation to design and production.
        </p>

        {/* Services Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Service 1 */}
          <div className="relative group overflow-hidden rounded-lg shadow-md">
            <Image
              src=""
              alt="Venue Dressing"
              width={400}
              height={500}
              className="object-cover w-full h-[420px] transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <div className="bg-white/90 px-6 py-4 rounded-md shadow-md text-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  Venue Dressing
                </h3>
                <p className="text-sm text-gray-600 mt-1">Learn more</p>
              </div>
            </div>
          </div>

          {/* Service 2 */}
          <div className="overflow-hidden rounded-lg shadow-md">
            <Image
              src=""
              alt="Wedding Setup"
              width={400}
              height={500}
              className="object-cover w-full h-[420px] transition-transform duration-500 hover:scale-110"
            />
          </div>

          {/* Service 3 */}
          <div className="overflow-hidden rounded-lg shadow-md">
            <Image
              src=""
              alt="Rings & Jewelry"
              width={400}
              height={500}
              className="object-cover w-full h-[420px] transition-transform duration-500 hover:scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
