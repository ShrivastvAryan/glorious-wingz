"use client"

import React from "react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/autoplay"

const Banner = () => {
  const banners = [
    { img: "/banner1.png", alt: "banner1" },
    { img: "/banner2.png", alt: "banner2" },
    { img: "/banner3.png", alt: "banner3" },
  ]

  return (
    <div className="w-full h-[80vh]">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        className="w-full h-full"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[80vh]">
              <Image
                src={banner.img}
                alt={banner.alt}
                fill
                className="object-cover"
                priority
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Banner
