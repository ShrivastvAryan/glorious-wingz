import React from "react";
import Marquee from "../Ui/Marquee";
import Hero3 from "../Ui/Hero3";

const pastEvents = [
  {
    title: "Tech Hackathon 2024",
    date: "March 15, 2024",
    description:
      "A 36-hour coding hackathon where students built AI-powered solutions for real-world problems.",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Sports Analytics Summit",
    date: "July 10, 2024",
    description:
      "Experts and students explored how AI and data analytics are revolutionizing sports.",
    image:
      "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Community Meetup",
    date: "January 28, 2024",
    description:
      "A networking event to bring together developers, designers, and tech enthusiasts.",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
  },
];

const Events = () => {
  return (

    <>

    <Marquee/>
    <Hero3/>
    <div className="py-20 px-6">

      <h1 className="text-3xl font-bold text-center mb-10" > Our Past Events</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pastEvents.map((event, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
              <p className="text-gray-500 text-sm mb-2">{event.date}</p>
              <p className="text-gray-700">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    </>
  );
};

export default Events;
