import React from "react";
import Link from "next/link";

const Navbar = () => {

    const nav=[
    {
        element:"Home",
        link:"/"
    },
    {
       element:"Events",
        link:"/"
    },
    {
      element:"Contact",
        link:"/"
    },
    {
      element:"About",
        link:"/"
    }
] 
 return (
    <nav className="w-full bg-[#fdf8f5] shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Left Menu */}
        <div className="flex space-x-8 text-gray-700 font-medium">
            {nav.map((name,index)=>(
                <Link key={index} href={name.link} className="hover:text-[#962528]">
                 <p>{name.element}</p>
                </Link>
            ))}
        </div>

        {/* Center Logo */}
        <div className="flex items-center space-x-2 font-semibold text-gray-800">
          <div className="w-3 h-3 bg-red-600 rotate-45"></div>
          <span>Descon</span>
        </div>

        {/* Right Button */}
        <div>
          <button className="px-5 py-2 border border-[#962528] text-[#962528] rounded-md font-medium hover:bg-[#962528] hover:text-white transition">
            Let&apos;s talk
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
