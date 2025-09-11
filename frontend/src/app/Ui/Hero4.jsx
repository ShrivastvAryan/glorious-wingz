// pages/testimonials.js
import { Heart } from "lucide-react";

const testimonials = [
  {
    name: "Ankit Oberoi",
    image:
      "https://your-image-url-1.jpg", // replace with your actual image
    text: "I and my family are incredibly happy with how the things turned out at the occasion of my marriage. Our trust in V3 Events & Weddings turned not only worthy but incredible! The ambiance of the night that was created by all of the little touches, like the music, the champagne, the hosts and the waiters were just so special.",
  },
  {
    name: "Roshan Goyal",
    image:
      "https://your-image-url-2.jpg", // replace with your actual image
    text: "Having availed services from V3 Events & Weddings recently, I admire the way they executed the event putting their expertise of Event Management skills. I would not hesitate to recommend them to work with any corporate company, organization or charity in the delivery of their event.",
  },
];

const Testimonials=()=> {
  return (
    <section className=" py-16">
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
              className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col md:flex-row text-left"
            >
              {/* Image */}
              <img
                src={t.image}
                alt={t.name}
                className="w-full md:w-1/2 h-64 object-cover"
              />
              {/* Content */}
              <div className="p-6 flex flex-col justify-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {t.name}
                </h3>
                <p className="text-sm text-gray-600">{t.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


export default Testimonials