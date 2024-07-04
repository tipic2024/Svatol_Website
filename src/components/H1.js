import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination } from 'swiper/modules';

export default function H1() {
  const slides = [
    {
      title: "Vision",
      description:
      "SVATOL Ayurveda Healthcare and Research Pvt. Ltd. is captivated by the profound wisdom of the Ayurvedic System of Medicine, fueling our impassioned quest to revolutionize the healthcare sector. Our unwavering commitment is directed towards the delivery of healthcare services that are not only efficient, effective, and affordable...",
      imgSrc: require('./Doctor.png'),
    },
    {
      title: "Mission",
      description:
        " SVATOL Ayurveda Healthcare and Research Pvt. Ltd. is captivated by the profound wisdom of the Ayurvedic System of Medicine, fueling our impassioned quest to revolutionize the healthcare sector. Our unwavering commitment is directed towards the delivery of healthcare services that are not only efficient but also very much effective and useful for all our patient!",
      imgSrc: require('./Doctor.png'),
    },
    {
      title: "Purpose",
      description:
        "SVATOL: “Synergistic Voyage of Ayurveda Transcending into the Oasis of Life” At the heart of our mission lies SVATOL an embodiment of the Synergistic Voyage of Ayurveda Transcending into the Oasis of Life. For beyond mere ailment alleviation, SVATOL represents a transformative journey where we meticulously redefine lifestyles to a standard where enduring habits of health & self-motivation become a legacy for generations. Envisioning more than just healthcare, SVATOL aspires to create a sustained oasis of vitality and wellness.",
      imgSrc: require('./Doctor.png'),
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
            <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0 ">
              <h1 className="text-7xl mt-0 font-bold text-gray-800 mb-4">{slide.title}</h1>
              <p className="text-lg text-gray-600 mb-4 mt-16">
                {slide.description}
              </p>
            </div>
            <div className="lg:w-1/2 flex justify-center lg:justify-end">
              <img className='w-96 h-96 object-fill' src={slide.imgSrc} alt={slide.title} />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
