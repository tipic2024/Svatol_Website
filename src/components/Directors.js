import React from 'react';
import { Link } from 'react-router-dom';

function Directors() {
  return (
    <>
    <div className="bg-[#FFF6E7] flex justify-center  lg:h-[90vh]">
      <div className="w-[95%] flex flex-col md:flex-row">
        <div className="md:w-1/2 h-64 md:h-auto">
          <img src={require('./Directors_img/Shubham2.png')} className="object-cover w-full h-full" alt="Doctor" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col lg:mt-14 md:pl-16">
          <div>
            <h1 className="font-serif text-3xl mt-4">Dr. Shubham S. Shete</h1>
            <p className="ml-2">B.A.M.S, C.A.D, F.C.C.A.P.</p>
          </div>
          <div className="mt-4 md:mt-10">
              <p className="text-md text-balance">I am the <span className='font-bold'>Founder and Director of SVATOL Ayurveda Healthcare and Research Foundation</span>, serving as the Chief Ayurvedic Consultant.</p>
            <p className="text-md mt-4 md:mt-10">I hold specialized training, including C.A.D. from Mumbai and F.C.C.A.P. from Kottakal, Kerala, with expertise in <span className='font-bold'>Panchkarma and Garbhsanskar</span> practices. Additionally, I am a certified <span className='font-bold'>Agni-Viddha Karma Expert</span> focused on holistic healing.</p>
          </div>
          <div>
  <h1 className='mt-5 text-[#003425] text-center text-lg sm:text-xl  md:text-xl italic font-bold'>
  One click away  healthy lifestyle..
  </h1>
</div>

<div className='flex flex-col sm:flex-row items-center justify-center mt-5 '>
  <Link className='mb-3 sm:mb-0 sm:mr-3' to="/book_appointment">
    <button
      className='content-center 
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
        </div>     
      </div>
    </div>


    <div className="bg-[#FFF6E7] flex justify-center  lg:h-[90vh]">
        <div className="w-[95%] flex flex-col md:flex-row">
          <div className="order-2 md:order-1 w-full md:w-1/2 flex flex-col lg:mt-14 md:pl-16">
            <div>
              <h1 className="font-serif text-3xl mt-4">Dr. Adesh B. Karkud</h1>
              <h1 className="">B.A.M.S. MD (Rasashatra)</h1>
              {/* <h1 className="lg:flex">MBA, Indian School of Business</h1> */}
            </div>
            <div className="mt-4 md:mt-10">
              <p className="text-md text-balance">Hi! I'm Dr Anam. I completed both my Bachelor's and my Master's at <span className="font-bold">Institute of Medical Sciences - Banaras Hindu University.</span> I also hold a Diploma in Yoga from the same university.</p>
              <p className="text-md mt-4 md:mt-10">Besides being a practising doctor, I am a researcher in the field of mental health and an author in the field of Diet and Dietetics.</p>
            </div>
            <div>
            <h1 className='mt-5 text-[#003425] text-center text-lg sm:text-xl md:text-xl font-bold do italic '>
    One click away  healthy lifestyle..
  </h1>
</div>

<div className='flex flex-col sm:flex-row items-center justify-center mt-5'>
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
          </div>
          <div className="order-1 md:order-2 md:w-1/2 h-64 md:h-auto">
            <img src={require('./Directors_img/Adesh2.jpeg')} className="object-cover w-full h-full" alt="Doctor" />
          </div>
        </div>
      </div>




<div className="bg-[#FFF6E7] flex justify-center  lg:h-[90vh]">
<div className="w-[95%] flex flex-col md:flex-row">
  <div className="md:w-1/2 h-64 md:h-auto">
    <img src={require('./a1.jpeg')} className="object-cover w-full h-full" alt="Doctor" />
  </div>
  <div className="w-full md:w-1/2 flex flex-col lg:mt-14 md:pl-16">
    <div>
      <h1 className="text-sm uppercase">About me</h1>
      <h1 className="font-serif text-3xl mt-4">Dr Aditi</h1>
      <h1 className="">BAMS, MD (Ayurveda), IMS-BHU, Gold Medalist</h1>
      <h1 className="lg:flex">MBA, Indian School of Business</h1>
    </div>
    <div className="mt-4 md:mt-10">
      <p className="text-md text-balance">Hi! I'm Dr Anam. I completed both my Bachelor's and my Master's at <span className="font-bold">Institute of Medical Sciences - Banaras Hindu University.</span> I also hold a Diploma in Yoga from the same university.</p>
      <p className="text-md mt-4 md:mt-10">Besides being a practising doctor, I am a researcher in the field of mental health and an author in the field of Diet and Dietetics.</p>
    </div>
    <div>
  <h1 className='mt-5 text-[#003425] text-center text-lg sm:text-xl md:text-xl italic font-bold'>
  One click away  healthy lifestyle..
  </h1>
</div>

<div className='flex flex-col sm:flex-row items-center justify-center mt-5'>
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
  </div>
</div>
</div>

</>
  );
}

export default Directors;

