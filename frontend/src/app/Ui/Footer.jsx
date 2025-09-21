import React from "react"
import Link from "next/link"
import { Youtube, Mail, Instagram } from "lucide-react"
import Image from "next/image"

const Footer = () => {
  const footerElement = [
    { name: "Home", link: "/" },
    { name: "Events", link: "/events" },
    { name: "About", link: "/about" },
  ]

  return (
    <div className="bg-[#fdf8f5] mt-20">
      {/* Logo */}
      <div className="mt-5 mx-auto relative w-full flex items-center justify-center">
        <Image
          className="object-cover"
          src="/logo.jpg"
          width={100}
          height={100}
          alt="logo"
        />
      </div>

      {/* Nav Links */}
      <div className="w-full flex justify-center items-center my-12">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 text-center">
          {footerElement.map((element, index) => (
            <Link
              key={index}
              href={element.link}
              className="hover:text-[#962528] font-semibold"
            >
              {element.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Contact + Working Hours */}
      <div className="w-full flex flex-col md:flex-row justify-around items-center gap-10 md:gap-0 pt-10 font-semibold text-center md:text-left">
        {/* Contact */}
        <div className="flex flex-col gap-2">
          <div className="text-xl">Contact Us</div>
          <div className="pt-2">
            <p>+91 99535XXXX</p>
            <p>abcd@gmail.com</p>
          </div>
        </div>

        {/* Working Hours */}
        <div className="flex flex-col gap-2">
          <div className="text-xl">Working Hours</div>
          <div className="pt-2">
            <p>8:00AM - 8:00PM</p>
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="w-full flex justify-center items-center gap-6 pt-14 text-xl">
        <Youtube className="cursor-pointer hover:text-[#962528]" />
        <Instagram className="cursor-pointer hover:text-[#962528]" />
        <Mail className="cursor-pointer hover:text-[#962528]" />
      </div>

      {/* Copyright */}
      <p className="text-center py-10 text-sm">
        © 2025 Gloriouz Events. All rights reserved
      </p>
    </div>
  )
}

export default Footer
