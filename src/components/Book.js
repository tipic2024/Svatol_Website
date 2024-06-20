import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { Link } from 'react-router-dom';

function Services() {
  return (
    <AnimatePresence>
      <motion.div
        className='flex flex-wrap justify-center items-center gap-4 p-4 mt-0 bg-[#FFF6E7]'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className='flex flex-col items-center space-y-4'
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        > 
        <Link to="/sr_Oncology">
          <motion.div 
            className='h-40 w-40 rounded-full bg-[#2E8B57] flex flex-col'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src={require('./Service_Logo/Oncology.png')} className='object-scale-down h-10 w-10 ml-14 mt-7 ' />
            <h1 className='text-black text-xl text-center mt-5'>Oncology</h1>
          </motion.div></Link>

          <Link to="/sr_Dermatology">
          <motion.div 
            className='h-40 w-40 rounded-full bg-[#90EE90] flex flex-col'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src={require('./Service_Logo/Dermatology.png')} className='object-scale-down h-10 w-10 ml-14 mt-7 ' />
            <h1 className='text-black text-xl text-center mt-5'>Dermatology</h1>
          </motion.div>
          </Link>
         
          <Link to="/sr_Genralphysician">
          <motion.div 
            className='h-40 w-40 rounded-full bg-[#2E8B57] flex flex-col'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src={require('./Service_Logo/General_Physician.png')} className='object-scale-down h-10 w-10 ml-14 mt-7 ' />
            <h1 className='text-black text-lg text-center mt-5'>General_Physician</h1>
          </motion.div>
          </Link>
        </motion.div>
        

        <motion.div
          className='flex flex-col justify-center ml-20 mr-20 drop-shadow-2xl'
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.img
            src={require('./a1.jpeg')}
            alt="image 1"
            className="object-scale-down max-h-96 max-w-full rounded-lg"
            whileHover={{ scale: 1.05 }}
          />
          <div>
  <h1 className='mt-5 text-[#003425] text-center text-lg sm:text-xl font-bold  md:text-xl'>
  One click away  healthy lifestyle..
  </h1>
</div>

<div className='flex flex-col sm:flex-row items-center justify-center mt-5 '>
  <Link className='mb-3 sm:mb-0 sm:mr-3' to="/book_appointment">
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
</div>
          
          
        </motion.div>

       
        <motion.div
          className='flex flex-col items-center space-y-4'
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <Link to="/sr_Preventivehealthcheckup">
          <motion.div 
            className='h-40 w-40 rounded-full bg-[#2E8B57] flex flex-col'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src={require('./Service_Logo/Preventive_Health_Checkup.png')} className='object-scale-down h-10 w-10 ml-14 mt-7 ' />
            <h1 className='text-black text-xl text-center mt-5'>Health</h1>
            <h1 className='text-black text-xl text-center'>Checkup</h1>
          </motion.div>
          </Link>

          <Link to="/sr_Panchakarma">
          <motion.div 
            className='h-40 w-40 rounded-full bg-[#90EE90] flex flex-col'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src={require('./Service_Logo/Panchkarma.png')} className='object-scale-down h-10 w-10 ml-14 mt-7 ' />
            <h1 className='text-black text-xl text-center mt-5'>Panchkarma</h1>
          </motion.div>
          </Link>

          <Link to="/sr_Annual">
          <motion.div 
            className='h-40 w-40 rounded-full bg-[#2E8B57] flex flex-col'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src={require('./Service_Logo/Annual_Routin_Check.png')} className='object-scale-down h-10 w-10 ml-14 mt-7 ' />
            <h1 className='text-black text-xl text-center mt-5'>Annual Routin</h1>
            <h1 className='text-black text-xl text-center'>Check</h1>
          </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Services;
