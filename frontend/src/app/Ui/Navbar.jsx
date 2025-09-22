"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const nav = [
    { element: "Home", link: "/" },
    { element: "Events", link: "/events" },
    { element: "About", link: "/about" },
  ];

  return (
    <nav className="w-full bg-[#fdf8f5] shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        {/* <Link href="/" className="flex items-center">
          <Image
            src="/logo.jpg"
            alt="logo"
            width={120} // adjust to your logo dimensions
            height={40}
            className="object-contain"
            priority
          />
        </Link> */}

        {/* Navigation Links */}
        <div className="flex items-center space-x-4 md:space-x-8 px-2 text-gray-700 font-medium">
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

        {/* Button */}
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
