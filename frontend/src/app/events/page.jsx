import React from "react";
import Marquee from "../Ui/Marquee";
import Hero3 from "../Ui/Hero3";
import Image from "next/image";

const pastEvents = [
  {
    title: "Tech Hackathon 2024",
    date: "March 15, 2024",
    description:
      "A 36-hour coding hackathon where students built AI-powered solutions for real-world problems.",
    image:
      "",
  },
  {
    title: "Sports Analytics Summit",
    date: "July 10, 2024",
    description:
      "Experts and students explored how AI and data analytics are revolutionizing sports.",
    image:
      "",
  },
  {
    title: "Community Meetup",
    date: "January 28, 2024",
    description:
      "A networking event to bring together developers, designers, and tech enthusiasts.",
    image:
      "",
  },
];

const Events = () => {
  return (

    <>

    <Marquee/>
    <Hero3/>
    <div className="py-20 px-6">

      <h1 className="text-3xl font-bold text-center mb-10" > Our Past Events</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {pastEvents.map((event, index) => (
          <div
            key={index}
            className=" rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 "
          >
            <div className="w-full h-80 relative">
            <Image
              src={event.image}
              alt={event.title}
              className="object-cover"
              fill
              
            />
            </div>


            <div className="p-5">
              <h2 className="text-xl mb-2 text-[#962528] font-semibold">{event.title}</h2>
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
