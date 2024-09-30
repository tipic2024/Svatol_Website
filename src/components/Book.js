import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { Link } from 'react-router-dom';

function Services() {
  return (
    <>
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
        <Link to="/sr_yoga_diet_Meditation">
          <motion.div 
            className='h-40 w-40 rounded-full bg-[#2E8B57] flex flex-col'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src={require('./Service_Logo/Panchkarma.png')} className='object-scale-down h-10 w-10 ml-14 mt-7 ' />
            <h1 className='text-black text-xl font-serif text-center '>Meditaion</h1>
            <h1 className='text-black text-xl font-serif text-center '>Yoga</h1>
            <h1 className='text-black text-xl font-serif text-center'>Diet</h1>
          </motion.div></Link>

          <Link to="/sr_Dermatology">
          <motion.div 
            className='h-40 w-40 rounded-full bg-[#90EE90] flex flex-col'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src={require('./Service_Logo/Dermatology.png')} className='object-scale-down h-10 w-10 ml-14 mt-7 ' />
            <h1 className='text-black text-xl font-serif text-center mt-5'>Dermatology</h1>
          </motion.div>
          </Link>
         
          <Link to="/sr_general_wellness">
          <motion.div 
            className='h-40 w-40 rounded-full bg-[#2E8B57] flex flex-col'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src={require('./Service_Logo/General_Physician.png')} className='object-scale-down h-10 w-10 ml-14 mt-7 ' />
            {/* <h1 className='text-black text-lg font-serif text-center mt-5'>General_Wellness</h1> */}
            <h1 className='text-black text-xl font-serif text-center mt-5'>General</h1>
            <h1 className='text-black text-xl font-serif text-center'>Wellness</h1>
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
            src={require('./servicesImg.jpeg')}
            alt="image 1"
            className="object-scale-down max-h-96 max-w-full rounded-lg"
            whileHover={{ scale: 1.05 }}
          />
          <div>
  <h1 className='mt-5 text-[#003425] text-center  font-serif text-lg sm:text-xl font-bold  md:text-xl'>
  One click away  healthy lifestyle..
  </h1>
</div>

<div className='flex flex-col sm:flex-row items-center font-serif justify-center mt-5 '>
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
            <h1 className='text-black text-xl font-serif text-center mt-5'>Health</h1>
            <h1 className='text-black text-xl font-serif text-center'>Checkup</h1>
          </motion.div>
          </Link>

          <Link to="/sr_Panchakarma">
          <motion.div 
            className='h-40 w-40 rounded-full bg-[#90EE90] flex flex-col'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src={require('./Service_Logo/Panchkarma.png')} className='object-scale-down h-10 w-10 ml-14 mt-7 ' />
            <h1 className='text-black text-xl font-serif text-center mt-5'>Panchkarma</h1>
          </motion.div>
          </Link>

          <Link to="/sr_mental_health">
          <motion.div 
            className='h-40 w-40 rounded-full bg-[#2E8B57] flex flex-col'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src={require('./Service_Logo/Annual_Routin_Check.png')} className='object-scale-down h-10 w-10 ml-14 mt-7 ' />
            <h1 className='text-black text-xl  font-serif text-center mt-5'>Mental</h1>
            <h1 className='text-black text-xl font-serif text-center'>Health</h1>
          </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </AnimatePresence>
    {/* <div class="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
        <h2 class="text-3xl font-bold text-center mb-8">Frequently asked questions</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-white shadow-md rounded-md p-6">
                <h3 class="text-xl font-bold mb-4">Anim pariatur cliche reprehenderit?</h3>
                <p class="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt autem numquam dolore molestias aperiam culpa alias veritatis architecto eos, molestiae vitae ex eligendi libero eveniet dolorem, doloremque rem aliquid perferendis.
                </p>
            </div>
            <div class="bg-white shadow-md rounded-md p-6">
                <h3 class="text-xl font-bold mb-4">Non cupidatat skateboard dolor brunch?</h3>
                <p class="text-gray-700 text-base">
                    Distinctio corporis, iure facere ducimus quos consectetur ipsa ut magnam autem doloremque ex! Id, sequi. Voluptatum magnam sed fugit iusto minus et suscipit? Minima sunt at nulla tenetur, numquam unde quod modi magnam ab deserunt ipsam sint aliquid dolores libero repellendus cupiditate mollitia quidem dolorem odit
                </p>
            </div>
            <div class="bg-white shadow-md rounded-md p-6">
                <h3 class="text-xl font-bold mb-4">Praesentium voluptatibus temporibus consequatur non aspernatur?</h3>
                <p class="text-gray-700 text-base">
                    Minima sunt at nulla tenetur, numquam unde quod modi magnam ab deserunt ipsam sint aliquid dolores libero repellendus cupiditate mollitia quidem dolorem. Voluptatum magnam sed fugit iusto minus et suscipit? Minima sunt at nulla tenetur?
                </p>
            </div>
            <div class="bg-white shadow-md rounded-md p-6">
                <h3 class="text-xl font-bold mb-4">Laudantium perferendis, est alias iure ut veniam suscipit dolorem fugit?</h3>
                <p class="text-gray-700 text-base">
                    Et ipsam corporis earum ea ut quae cum non iusto blanditiis ipsum dolor eius reiciendis, velit adipisci quas. Numquam unde quod modi magnam ab deserunt ipsam sint aliquid dolores libero repellendus cupiditate mollitia quidem dolorem odit
                </p>
            </div>
            <div class="bg-white shadow-md rounded-md p-6">
                <h3 class="text-xl font-bold mb-4">Numquam unde quod modi magnam ab deserunt ipsam sint aliquid dolores libero repellendus cupiditate mollitia quidem dolorem odit?</h3>
                <p class="text-gray-700 text-base">
                    Distinctio corporis, iure facere ducimus quos consectetur ipsa ut magnam autem doloremque ex! Id, sequi. Voluptatum magnam sed fugit iusto minus et suscipit? Minima sunt at nulla tenetur, numquam unde quod modi magnam ab deserunt ipsam sint aliquid dolores libero repellendus cupiditate mollitia quidem dolorem odit
                </p>
            </div>
            <div class="bg-white shadow-md rounded-md p-6">
                <h3 class="text-xl font-bold mb-4">Distinctio corporis, iure facere ducimus?</h3>
                <p class="text-gray-700 text-base">
                    Eaque eos corrupti debitis tenetur repellat, beatae quibusdam incidunt, fuga non iste dignissimos officiis nam officia obcaecati commodi ratione qui nesciunt.
                </p>
            </div>
        </div>
    </div> */}
    
    <div class="flex justify-center mb-4 bg-[#FFF6E7]">
  <Link to="/contactus"  class=" bg-[#FFF6E7]">
    <button
      type="submit"
      className="w-96 rounded-full bg-sky-500 text-black px-6 pt-2.5 pb-2 text-lg font-serif font-bold uppercase leading-normal lg:mb-4"
    >
      Contact us
    </button>
  </Link>
</div>  
    </>
  );
}

export default Services;
