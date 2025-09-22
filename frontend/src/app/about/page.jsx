import React from "react";
import Banner from "../Ui/Banner";
import { Mail,Phone,MapPin } from "lucide-react";

const Contact= () => {
  return (

    <>
    <Banner/>
    <div className=" px-6 pt-5 md:pt-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: About Us */}
        <div>
          <h1 className="text-3xl font-bold mb-4 text-[#962528]">About Us</h1>
          <p className="text-gray-700 mb-4 leading-relaxed">
            We are a Delhi & Mumbai based event management & wedding planning
            company dedicated to providing customers with a wide range of event
            services for both corporate and personal occasions. From live shows,
            celebrity events, product launches, theme parties, weddings,
            birthdays, fashion shows, and much more, we handle it all.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            With over <span className="font-semibold">20 years</span> of
            experience, our trained planners ensure the best services at the
            best prices. We specialize in unique, out-of-the-box event concepts
            that guarantee 100% client satisfaction.
          </p>
          <p className="text-gray-700 leading-relaxed">
            From venue selection, hospitality, decor, catering, and entertainment
            to celebrity management—we take care of everything to make your event
            truly memorable.
          </p>

        </div>

        {/* Right: Contact / Gallery */}
        <div className="flex flex-col gap-6 text-white">
          
          <div className="bg-[#962528] w-full rounded-2xl flex text-2xl gap-6 p-2 pl-3">
            <Mail size={30}/>
            <p>abcd@gmail.com</p>
          </div>
           <div className="bg-[#962528] w-full  rounded-2xl flex text-2xl gap-6 p-2 pl-3">
            <Phone size={30} />
             <p>+91 9953XXXX</p>
           </div>
          <div className="bg-[#962528] w-full  rounded-2xl flex text-2xl gap-6 p-2 pl-3">
            <MapPin size={30} />
            <p>XYZ</p>
          </div>
          
        </div>

      </div>
    </div>

    </>
  );
};

export default Contact;
