import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination } from 'swiper/modules';
import I1 from "../components/Services/dermatology2.jpg"
import I2 from "../components/Services/dermatology2.jpg"
import I3 from "../components/Services/dermatology2.jpg"


export default function H1() {
  const slides = [
    {
      
      image: I1,
    },
    {
     
      imgSrc: I2,
    },
    {
     
      
      imgSrc: I3,
    },
  ];

  return (
    <Swiper
      spaceBetween={30}
      pagination={{ clickable: true }}
      navigation
      modules={[Navigation, Pagination]}
      className="mySwiper"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col lg:flex-row items-center lg:items-start p-8 bg-[#FFF6E7]">
            
            <div className="lg:w-30 flex justify-center lg:justify-end">
              <img className='w-full h-full object-fill' src={slide.imgSrc} alt={slide.title} />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
