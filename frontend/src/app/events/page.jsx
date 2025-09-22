import React from "react";
import Banner from "../Ui/Banner";
import Hero3 from "../Ui/Hero3";
import Image from "next/image";

const pastEvents = [
  {
    title: "Event-1",
    date: "March 15, 2024",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem iure facilis inventore, totam enim hic explicabo deserunt porro esse eos fuga, aliquid quidem, recusandae maxime quod voluptates! Laudantium, eligendi itaque!",
    image:
      "/event.jpg",
  },
  {
    title: "Event-2",
    date: "July 10, 2024",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem iure facilis inventore, totam enim hic explicabo deserunt porro esse eos fuga, aliquid quidem, recusandae maxime quod voluptates! Laudantium, eligendi itaque!",
    image:
      "/img5.jpg",
  },
  {
    title: "Event-3",
    date: "January 28, 2024",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem iure facilis inventore, totam enim hic explicabo deserunt porro esse eos fuga, aliquid quidem, recusandae maxime quod voluptates! Laudantium, eligendi itaque!",
    image:
      "/img6.jpg",
  },
  {
    title: "Event-3",
    date: "January 28, 2024",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem iure facilis inventore, totam enim hic explicabo deserunt porro esse eos fuga, aliquid quidem, recusandae maxime quod voluptates! Laudantium, eligendi itaque!",
    image:
      "/img6.jpg",
  },
];

const Events = () => {
  return (

    <>

    <Banner/>
    <Hero3/>
    <div className="pt-5 px-6">

      <h1 className="text-3xl font-bold text-center mb-10" > Our Past Events</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 ">
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
