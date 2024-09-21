import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Pagination, Autoplay } from 'swiper/modules'; // Import Autoplay module
import I1 from '../components/Services/dermatology2.jpg';
import I2 from '../components/Services/dermatology2.jpg';
import I3 from '../components/Services/dermatology2.jpg';

export default function H1() {
  const slides = [
    {
      imgSrc: I1,
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
    // pagination={{ clickable: true }}
    pagination={{
      clickable: true,
      renderPagination: () => '', // Hide pagination dots
    }}
    autoplay={{ delay: 3000, disableOnInteraction: false }} // Set autoplay with a 3-second delay
    modules={[Pagination, Autoplay]} // Include Autoplay module
    className="mySwiper"
  >
    {slides.map((slide, index) => (
      <SwiperSlide key={index}>
        <div className="flex flex-col lg:flex-row items-center lg:items-start p-8 bg-[#FFF6E7]">
          <div className="flex justify-center lg:justify-end border border-gray-300 md:border-r-0  lg:border-r-0">
            <img
              className="w-full h-full md:w-full md:h-96 lg:h-full md:object-fill lg:object-fill"
              src={slide.imgSrc}
              alt={`Slide ${index + 1}`}
            />
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
  );
}
