import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';

export default function Doctors_Img3() {
  const controls = useAnimation();
  const [ref, inView] = useInView({                                            
    triggerOnce: false, // Changed to false to trigger animation every time          
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden'); // Reset to hidden when out of view
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className='bg-[#FFF6E7]'>
      
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className='lg:columns-3 lg:gap-5 lg:justify-evenly lg:mt-14 lg:mb-20 w-full flex flex-col lg:flex-row items-center lg:max-w-7xl'
      >
        <motion.div
          className='flex flex-col items-center mt-10 lg:mt-0'
          variants={containerVariants}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img
              src={require('./OurDoctors/Florencia.jpeg')}
              alt=""
              className="lg:w-40 w-72 rounded-full"
            />
          </motion.div>
          <h1 className='lg:mt-10 mt-5 text-lg font-bold font-serif'>Florencia Magali Martin
          </h1>
          <h2 className='text-sm font-serif text-wrap'>MIMAMSA Yogshala & Rishikul Yogshala    
</h2>
<Link className='mb-3  ml-4 mt-3 sm:mb-0 sm:mr-3 ' to="/book_appointment">
    <button
      className='
        content-center 
        font-serif 
        font-bold 
        text-xs 
        p-2 
        uppercase 
        text-white 
        hover:text-[#7B553C] 
        hover:bg-[#90EE90] 
        bg-[#003430] 
        border-[#2f902f] 
        border-solid 
        border-0 
        drop-shadow-mds
        mb-4
        rounded-md
      '
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      Book OPD Appointment
    </button>
  </Link>
  <Link className='sm:ml-1' to="/International">
    <button
      className='
        content-center 
        font-serif 
        font-bold 
        text-xs 
        p-2 
        uppercase 
        text-white 
        hover:text-[#7B553C] 
        hover:bg-[#90EE90] 
        bg-[#003430] 
        border-[#2f902f] 
        border-solid 
        border-0 
        drop-shadow-mds
        mb-4
        rounded-md

      '
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      International / Online Appointment
    </button>
  </Link>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link className="">
              <FaInstagram color='#E1306C' className="mt-2" size={30} />
            </Link>
          </motion.div>
        </motion.div>

      </motion.div>
    </div>
    
  );
}
