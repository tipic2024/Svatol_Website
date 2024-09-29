import React from 'react';
import { Link } from 'react-router-dom';

export default function OurDoctors() {


  return (
    <>
    
<div className="bg-[#FFF6E7] flex justify-center  lg:h-[90vh]">
<div className="w-[95%] flex flex-col md:flex-row">
  <div className="md:w-1/2 h-64 md:h-auto">
    <img src={require('./OurDoctors/Aishwarya.png')} className="object-cover w-full h-full" alt="Doctor" />
  </div>
  <div className="w-full md:w-1/2 flex flex-col lg:mt-14 md:pl-16">
    <div>
      {/* <h1 className="text-sm uppercase">About me</h1> */}
      <h1 className="font-serif text-3xl mt-4">Dr. Aishwarya Sansare</h1>
      <h1 className="">B.A.M.S, P.G.D.M.S, C.A.D, F.C.C.A.P</h1>
      {/* <h1 className="lg:flex">MBA, Indian School of Business</h1> */}
    </div>
    <div className="mt-4 md:mt-10">
      <p className="text-md text-balance">I am Dr. Aishwarya, a BAMS Ayurvedic physician <span className='font-bold'>certified in Panchakarma</span> with a focus on treating <span className='font-bold'> skin disorders like eczema, psoriasis, acne, and dermatitis.</span> My approach combines traditional healing with detoxification to address both symptoms and root causes, aiming for healthy skin through internal balance.</p>
      <p className="text-md mt-4 md:mt-10">I create personalized treatment plans with dietary recommendations, herbal remedies, and lifestyle adjustments to support optimal skin health. My goal is to help patients achieve vibrant, healthy skin while enhancing overall wellness through Ayurveda.</p>
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

    <div className="bg-[#FFF6E7] flex justify-center  lg:h-[90vh]">
        <div className="w-[95%] flex flex-col md:flex-row">
          <div className="order-2 md:order-1 w-full md:w-1/2 flex flex-col lg:mt-14 md:pl-16">
            <div>
              <h1 className="font-serif text-3xl mt-4">Dr.Rahul Kumbhar</h1>
              <h1 className="">B.A.M.S, M.D. (Goa)</h1>
              {/* <h1 className="lg:flex">MBA, Indian School of Business</h1> */}
            </div>
            <div className="mt-4 md:mt-10">
              <p className="text-md text-balance">I am Dr. Rahul Kumbhar, a BAMS Ayurveda <span className='font-bold'>Specialist with expertise in treating Autism Spectrum Disorders (ASD)</span> using holistic Ayurvedic principles. I have served as <span className='font-bold'>Chief Consultant for Autism & Neurodevelopmental Disorders</span> at Urban Ayurved for the past three years.</p>
              <p className="text-md mt-4 md:mt-10">My approach includes personalized treatment plans, dietary counseling, herbal medicines, and therapies like Viddhakarma and Panchakarma. I focus on addressing root causes to promote balance and well-being in mind, body, and spirit.</p>
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
            <img src={require('./OurDoctors/Rahul2.jpeg')} className="object-cover w-full h-full" alt="Doctor" />
          </div>
        </div>
      </div>

      <div className="bg-[#FFF6E7] flex justify-center  lg:h-[90vh]">
      <div className="w-[95%] flex flex-col md:flex-row">
        <div className="md:w-1/2 h-64 md:h-auto">
          <img src={require('./OurDoctors/Avina.png')} className="object-cover w-full h-full" alt="Doctor" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col lg:mt-14 md:pl-16">
          <div>
            <h1 className="font-serif text-3xl mt-4">Dr. Avina</h1>
            <p className="ml-2">B.A.M.S, C.R.A.V, <span className='font-bold'>Specialises in gynecological disorders.</span></p>
          </div>
          <div className="mt-4 md:mt-10">
            <p className="text-md text-balance">I am <span className='font-bold'>Dr. Avina, BAMS,</span> specializing in<span className='font-bold'> Panchbhautik Chikitsa </span>and<span className='font-bold'> Panchakarma </span>for <span className='font-bold'>gynecological disorders, infertility,</span> and <span className='font-bold'>prenatal </span>and <span className='font-bold'>postnatal</span> care. I focus on balancing the <span className='font-bold'>five universal elements—matter, water, fire, air</span>, and <span className='font-bold'>space</span> using diagnostic techniques like <span className='font-bold'>Rogi Pariksha</span> and <span className='font-bold'>Nadi Pariksha.</span></p><br/>
            <p className="text-md text-balance">I incorporate <span className='font-bold'>Panchakarma therapies</span> as a key treatment for <span className='font-bold'>gynecological issues</span>, promoting holistic care during pregnancy and postpartum stages. My goal is to restore equilibrium in the body and ensure overall well-being through <span className='font-bold'>Ayurvedic wisdom.</span></p>
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


</>


  )
}
