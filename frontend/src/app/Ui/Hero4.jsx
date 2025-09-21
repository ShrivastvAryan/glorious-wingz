// pages/testimonials.js
import { Heart } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Ankit Oberoi",
    image: "/testi-1.jpg",
    text: "I and my family are incredibly happy with how the things turned out at the occasion of my marriage. Our trust in V3 Events & Weddings turned not only worthy but incredible! The ambiance of the night that was created by all of the little touches, like the music, the champagne, the hosts and the waiters were just so special.",
  },
  {
    name: "Roshan Goyal",
    image: "/testi-2.jpg",
    text: "Having availed services from V3 Events & Weddings recently, I admire the way they executed the event putting their expertise of Event Management skills. I would not hesitate to recommend them to work with any corporate company, organization or charity in the delivery of their event.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-[#fdf8f5] py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Testimonials
        </h2>
        <div className="flex justify-center mt-2 mb-10">
          <Heart className="w-6 h-6 text-red-500" />
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="rounded-2xl shadow-md overflow-hidden flex flex-col md:flex-row text-left bg-white"
            >
              {/* Image */}
              <div className="relative w-full md:w-[40%] h-64 md:h-auto">
                <Image
                  src={t.image}
                  alt={t.name}
                  fill
                  className="object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col justify-center w-full md:w-[60%]">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                  {t.name}
                </h3>
                <p className="text-sm sm:text-base font-medium text-gray-600 leading-relaxed">
                  {t.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
