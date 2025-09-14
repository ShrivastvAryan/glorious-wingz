// pages/index.js
import { Heart, Music, MapPin, PartyPopper } from "lucide-react";

const services = [
  {
    icon: <Music className="w-10 h-10 text-red-500" />,
    title: "Entertainment",
    desc: "An event is one of the strongest and most impactful methods of communication. Including entertainment elevates the experience remarkably.",
  },
  {
    icon: <PartyPopper className="w-10 h-10 text-yellow-500" />,
    title: "Events",
    desc: "We understand how every event matters to you—whether it's a personal occasion or a professional gathering.",
  },
  {
    icon: (
      <img
        src="https://cdn-icons-png.flaticon.com/512/2972/2972172.png"
        alt="Wedding Venue"
        className="w-10 h-10"
      />
    ),
    title: "Wedding Venues",
    desc: "A wedding is a cherished, once-in-a-lifetime celebration, and everyone dreams of a magnificent venue for such a special day.",
  },
  {
    icon: <MapPin className="w-10 h-10 text-red-500" />,
    title: "Hospitality",
    desc: "Coordinating travel and hotel bookings can be stressful during events. We handle it all so you can stay relaxed and focused.",
  },
];

const Hero3=()=>{
  return (
    <section className=" py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          GLORIOUS WINGZ SERVICES
        </h2>
        <div className="flex justify-center mt-2 mb-10">
          <Heart className="w-6 h-6 text-red-500" />
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-gray-100 rounded-2xl shadow-md p-6 hover:shadow-xl transition"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600">{service.desc}</p>
             
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero3
