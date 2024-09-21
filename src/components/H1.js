import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Pagination, Autoplay } from 'swiper/modules'; // Import Autoplay module
import I1 from '../components/Services/2.png';
import I2 from '../components/Services/3.png';
import I3 from '../components/Services/4.png';

export default function H1() {
  const slides = [
    {
      imgSrc: I1,
      // title : "Vision",
      // text: "SVATOL Ayurveda Healthcare and Research Pvt. Ltd. is captivated by the profound wisdom of the Ayurvedic System of Medicine, fueling our impassioned quest to revolutionize the healthcare sector. Our unwavering commitment is directed towards the delivery of healthcare services that are not only efficient, effective, and affordable...",
    },
    {
      imgSrc: I2,
    //   title: "Mission",
    //   text: "SVATOL Ayurveda Healthcare and Research Pvt. Ltd. is captivated by the profound wisdom of the Ayurvedic System of Medicine, fueling our impassioned quest to revolutionize the healthcare sector. Our unwavering commitment is directed towards the delivery of healthcare services that are not only efficient, effective, and affordable...",
    },
    {
      imgSrc: I3,
      // title : "Purpose",
      // text :"SVATOL: “Synergistic Voyage of Ayurveda Transcending into the Oasis of Life” At the heart of our mission lies SVATOL an embodiment of the Synergistic Voyage of Ayurveda Transcending into the Oasis of Life. For beyond mere ailment alleviation, SVATOL represents a transformative journey where we meticulously redefine lifestyles to a standard where enduring habits of health & self-motivation become a legacy for generations. Envisioning more than just healthcare, SVATOL aspires to create a sustained oasis of vitality and wellness.",
    },
  ];

  return (
    <Swiper
    spaceBetween={30}
    // pagination={{ clickable: true }}
    autoplay={{ delay: 3000, disableOnInteraction: false }} // Set autoplay with a 3-second delay
    modules={[Pagination, Autoplay]} // Include Autoplay module
    className="mySwiper"
  >
    {slides.map((slide, index) => (
      <SwiperSlide key={index}>
        <div className="flex flex-col lg:flex-row items-center lg:items-start p-8 bg-[#FFF6E7]">
          <div className="flex justify-center lg:justify-end border border-gray-300 md:border-r-0  lg:border-r-0">
            <img
              className="w-full h-full md:w-full md:h-[65vh] lg:h-[73.2vh] lg:w-full  md:object-fill lg:object-fill"

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

// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.css';
// import { Pagination, Autoplay } from 'swiper/modules'; // Import Autoplay module
// import I1 from '../components/Services/2.png';
// import I2 from '../components/Services/3.png';
// import I3 from '../components/Services/4.png';

// export default function H1() {
//   const slides = [
//     {
//       imgSrc: I1,
//       // title : "Vision",
//       // text: "SVATOL Ayurveda Healthcare and Research Pvt. Ltd. is captivated by the profound wisdom of the Ayurvedic System of Medicine, fueling our impassioned quest to revolutionize the healthcare sector. Our unwavering commitment is directed towards the delivery of healthcare services that are not only efficient, effective, and affordable...",
//     },
//     {
//       imgSrc: I2,
//     //   title: "Mission",
//     //   text: "SVATOL Ayurveda Healthcare and Research Pvt. Ltd. is captivated by the profound wisdom of the Ayurvedic System of Medicine, fueling our impassioned quest to revolutionize the healthcare sector. Our unwavering commitment is directed towards the delivery of healthcare services that are not only efficient, effective, and affordable...",
//     },
//     {
//       imgSrc: I3,
//       // title : "Purpose",
//       // text :"SVATOL: “Synergistic Voyage of Ayurveda Transcending into the Oasis of Life” At the heart of our mission lies SVATOL an embodiment of the Synergistic Voyage of Ayurveda Transcending into the Oasis of Life. For beyond mere ailment alleviation, SVATOL represents a transformative journey where we meticulously redefine lifestyles to a standard where enduring habits of health & self-motivation become a legacy for generations. Envisioning more than just healthcare, SVATOL aspires to create a sustained oasis of vitality and wellness.",
//     },
//   ];

//   return (
//     <Swiper
//     spaceBetween={30}
//     // pagination={{ clickable: true }}
//     autoplay={{ delay: 3000, disableOnInteraction: false }} // Set autoplay with a 3-second delay
//     modules={[Pagination, Autoplay]} // Include Autoplay module
//     className="mySwiper"
//   >
//     {slides.map((slide, index) => (
//       <SwiperSlide key={index}>
//         <div className="flex flex-col lg:flex-row items-center lg:items-start p-8 bg-white">
//           <div className="flex justify-center lg:justify-end border border-gray-300 md:border-r-0  lg:border-r-0">
//             <img
//               className="w-full h-full md:w-full md:h-[67.1vh] lg:h-[75.4vh] lg:w-full lg:p-6 md:object-fill lg:object-fill"
//               src={slide.imgSrc}
//               alt={`Slide ${index + 1}`}
//             />
//           </div>
//         </div>
//       </SwiperSlide>
//     ))}
//   </Swiper>
//   );
// }
