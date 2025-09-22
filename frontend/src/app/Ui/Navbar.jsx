"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // hamburger + close icons
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const nav = [
    { element: "Home", link: "/" },
    { element: "Events", link: "/events" },
    { element: "About", link: "/about" },
  ];

  return (
    <nav className="w-full bg-[#fdf8f5] shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/*}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.jpg"
            alt="logo"
            width={120} // adjust to your logo dimensions
            height={40}
            className="object-contain"
            priority
          />
        </Link>*/}

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
          {nav.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="hover:text-[#962528] transition"
            >
              {item.element}
            </Link>
          ))}
        </div>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <button className="px-5 py-2 border border-[#962528] text-[#962528] rounded-md font-medium hover:bg-[#962528] hover:text-white transition">
            Let&apos;s talk
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#fdf8f5] px-6 pb-4 space-y-4 text-gray-700 font-medium">
          {nav.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="block hover:text-[#962528] transition"
              onClick={() => setIsOpen(false)} // close on click
            >
              {item.element}
            </Link>
          ))}

          <button className="w-full px-5 py-2 border border-[#962528] text-[#962528] rounded-md font-medium hover:bg-[#962528] hover:text-white transition">
            Let&apos;s talk
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
