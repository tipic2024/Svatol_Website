import React, { useEffect, useRef, useState } from 'react';
import { motion } from "framer-motion";

const Carousel1 = () => {
  const containerRef = useRef(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  // Define the image paths directly in the component
  const images = [
    require('./gallery/Suvarna Prashan/s1.jpeg'),
    require('./gallery/Suvarna Prashan/s2.jpeg'),
    require('./gallery/Suvarna Prashan/s3.jpeg'),
    require('./gallery/Suvarna Prashan/s42.jpeg'),
    require('./gallery/Suvarna Prashan/s5.jpeg'),
    require('./gallery/Suvarna Prashan/s6.jpeg'),
    require('./gallery/Suvarna Prashan/s7.jpeg'),
    require('./gallery/Suvarna Prashan/s82.jpeg'),
    require('./gallery/Suvarna Prashan/s9.jpeg'),
    require('./gallery/Suvarna Prashan/s102.jpeg'),
    require('./gallery/Suvarna Prashan/s112.jpeg'),
    require('./gallery/Suvarna Prashan/s12.jpeg'),
    require('./gallery/Suvarna Prashan/s13.jpeg'),
    require('./gallery/Suvarna Prashan/s14.jpeg'),
    require('./gallery/Suvarna Prashan/s15.jpeg'),
  ];

  const yogaImg = [ 
    require('./gallery/Yoga/1(24).jpeg'),
    require('./gallery/Yoga/1(23).jpeg'),
    require('./gallery/Yoga/1 (1).jpg'),
    require('./gallery/Yoga/1 (2).jpg'),
    require('./gallery/Yoga/1 (3).jpg'),
    require('./gallery/Yoga/1 (4).jpg'),
    require('./gallery/Yoga/1 (5).jpg'),
    require('./gallery/Yoga/1 (6).jpg'),
    require('./gallery/Yoga/1 (7).jpg'),
    require('./gallery/Yoga/1 (8).jpg'),
    require('./gallery/Yoga/1 (9).jpg'),
    require('./gallery/Yoga/1 (10).jpg'),
    require('./gallery/Yoga/1 (11).jpg'),
    require('./gallery/Yoga/1 (12).jpg'),
    require('./gallery/Yoga/1 (13).jpg'),
    require('./gallery/Yoga/1 (14).jpg'),
    require('./gallery/Yoga/1 (15).jpg'),
    require('./gallery/Yoga/1 (16).jpg'),
    require('./gallery/Yoga/1 (17).jpg'),
    require('./gallery/Yoga/1 (18).jpg'),
    require('./gallery/Yoga/1 (19).jpg'),]

const saswadOpening = [
  require('./gallery/Opening/openin3.jpeg'),
  require('./gallery/Opening/openin4.jpeg'),
  require('./gallery/Opening/openin1.jpeg'),
  require('./gallery/Opening/openin5.jpeg'),
]

const schoolVisit = [
  require('./gallery/school visit/school2.jpeg'),
  require('./gallery/school visit/school4.jpeg'),
  require('./gallery/school visit/school5.jpeg'),
  require('./gallery/school visit/school1.jpeg'),
  require('./gallery/school visit/school3.jpeg'),
]

const globalVisit = [
  require('./gallery/Global visit/global1.jpeg'),
  require('./gallery/Global visit/global2.jpeg'),
  require('./gallery/Global visit/global3.jpeg'),
  require('./gallery/Global visit/global4.jpeg'),
  require('./gallery/Global visit/global5.jpeg'),
  require('./gallery/Global visit/global6.jpeg'),
  require('./gallery/Global visit/global7.jpeg'),
  require('./gallery/Global visit/global8.jpeg'),
  require('./gallery/Global visit/global9.jpeg'),

]

  useEffect(() => {
    const container = containerRef.current;
    const handleWheel = (event) => {
      event.preventDefault();
      container.scrollLeft += event.deltaY;
      setIsAutoScrolling(false);
    };

    container.addEventListener('wheel', handleWheel);
    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, []);

  useEffect(() => {
    let autoScrollInterval;
    if (isAutoScrolling) {
      autoScrollInterval = setInterval(() => {
        const container = containerRef.current;
        if (container) {
          container.scrollLeft += 1;
        }
      }, 20);
    }

    return () => {
      if (autoScrollInterval) {
        clearInterval(autoScrollInterval);
      }
    };
  }, [isAutoScrolling]);

  const scrollLeft = () => {
    const container = containerRef.current;
    container.scrollLeft -= 200;
    setIsAutoScrolling(false);
  };

  const scrollRight = () => {
    const container = containerRef.current;
    container.scrollLeft += 200;
    setIsAutoScrolling(false);
  };

  return (
    <div className="flex flex-col m-auto p-auto">
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <h1 className='text-4xl text-center font-bold sm:ml-12 py-5'>Free Suvarn-prashan Camp organised by SVATOL AYURVEDA</h1>
      </motion.div>

      <div className="relative flex items-center">
        <button onClick={scrollLeft} className="absolute left-0 ml-5 bg-gray-800 text-white p-2 rounded-full z-10 opacity-75 hover:opacity-100 transition-opacity">
          {"<"}
        </button>
        <div ref={containerRef} className="flex overflow-x-scroll pb-10 hide-scroll-bar">
          <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10">
            {images.map((src, index) => (
              <motion.div key={index} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <div className="inline-block px-3">
                  <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                    <img
                      src={src}
                      alt={`Event ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <button onClick={scrollRight} className="absolute right-0 mr-5 bg-gray-800 text-white p-2 rounded-full z-10 opacity-75 hover:opacity-100 transition-opacity">
          {">"}
        </button>
      </div>


      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <h1 className='text-4xl text-center font-bold sm:ml-12 py-5'>Free Yoga Sessions for children organised by SVATOL AYURVEDA</h1>
      </motion.div>

      <div className="relative flex items-center">
        <button onClick={scrollLeft} className="absolute left-0 ml-5 bg-gray-800 text-white p-2 rounded-full z-10 opacity-75 hover:opacity-100 transition-opacity">
          {"<"}
        </button>
        <div ref={containerRef} className="flex overflow-x-scroll pb-10 hide-scroll-bar">
          <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10">
            {yogaImg.map((src, index) => (
              <motion.div key={index} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <div className="inline-block px-3">
                  <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                    <img
                      src={src}
                      alt={`Event ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <button onClick={scrollRight} className="absolute right-0 mr-5 bg-gray-800 text-white p-2 rounded-full z-10 opacity-75 hover:opacity-100 transition-opacity">
          {">"}
        </button>
      </div>

      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <h1 className='text-4xl text-center font-bold sm:ml-12 py-5'>New Ayurveda Centre opening at Saswad, Pune</h1>
      </motion.div>

      <div className="relative flex items-center">
        <button onClick={scrollLeft} className="absolute left-0 ml-5 bg-gray-800 text-white p-2 rounded-full z-10 opacity-75 hover:opacity-100 transition-opacity">
          {"<"}
        </button>
        <div ref={containerRef} className="flex overflow-x-scroll pb-10 hide-scroll-bar">
          <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10">
            {saswadOpening.map((src, index) => (
              <motion.div key={index} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <div className="inline-block px-3">
                  <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                    <img
                      src={src}
                      alt={`Event ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <button onClick={scrollRight} className="absolute right-0 mr-5 bg-gray-800 text-white p-2 rounded-full z-10 opacity-75 hover:opacity-100 transition-opacity">
          {">"}
        </button>
      </div>
      
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <h1 className='text-4xl text-center font-bold sm:ml-12 py-5'>Frequent visit to Pre School for Paediatric Healthcare by<br/> SVATOL AYURVEDA</h1>
      </motion.div>

      <div className="relative flex items-center">
        <button onClick={scrollLeft} className="absolute left-0 ml-5 bg-gray-800 text-white p-2 rounded-full z-10 opacity-75 hover:opacity-100 transition-opacity">
          {"<"}
        </button>
        <div ref={containerRef} className="flex overflow-x-scroll pb-10 hide-scroll-bar">
          <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10">
            {schoolVisit.map((src, index) => (
              <motion.div key={index} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <div className="inline-block px-3">
                  <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                    <img
                      src={src}
                      alt={`Event ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <button onClick={scrollRight} className="absolute right-0 mr-5 bg-gray-800 text-white p-2 rounded-full z-10 opacity-75 hover:opacity-100 transition-opacity">
          {">"}
        </button>
      </div>
      
      
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <h1 className='text-4xl text-center font-bold sm:ml-12 py-5'>Active Participation in the Global Ayurveda Festival, Kerala by <br/>the Directors of SVATOL AYURVEDA
        <p className='text-2xl text-center font-bold sm:ml-12 py-2'>Attending Business Conferences to study the scope of Ayurvedic Medicines in <br/>International Market</p>
        </h1>
        
      </motion.div>

      <div className="relative flex items-center">
        <button onClick={scrollLeft} className="absolute left-0 ml-5 bg-gray-800 text-white p-2 rounded-full z-10 opacity-75 hover:opacity-100 transition-opacity">
          {"<"}
        </button>
        <div ref={containerRef} className="flex overflow-x-scroll pb-10 hide-scroll-bar">
          <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10">
            {globalVisit.map((src, index) => (
              <motion.div key={index} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <div className="inline-block px-3">
                  <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                    <img
                      src={src}
                      alt={`Event ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <button onClick={scrollRight} className="absolute right-0 mr-5 bg-gray-800 text-white p-2 rounded-full z-10 opacity-75 hover:opacity-100 transition-opacity">
          {">"}
        </button>
      </div>
      {/* Style to hide scrollbar */}
      <style jsx="true">{`
        .hide-scroll-bar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scroll-bar::-webkit-scrollbar {
          display: none;
        }
        .relative {
          position: relative;
        }
        .absolute {
          position: absolute;
        }
        .z-10 {
          z-index: 10;
        }
        .opacity-75 {
          opacity: 0.75;
        }
        .hover\:opacity-100:hover {
          opacity: 1;
        }
        .transition-opacity {
          transition: opacity 0.3s;
        }
      `}</style>
    </div>
  );
};

export default Carousel1;
