import React from 'react'
import { Link } from 'react-router-dom'


export default function YogaMeditation() {
  return (
    <>
    <div className="bg-[#FFF6E7] flex justify-center  lg:h-[90vh]">
    <div className="w-[95%] flex flex-col md:flex-row">
      <div className="md:w-1/2 h-64 md:h-auto">
          <img src={require('./YogaMeditation/Florencia.jpeg')} className="object-cover w-full h-full" alt="Doctor" />
      </div>
      {/* <div className="w-full md:w-1/2 flex flex-col lg:mt-14 md:pl-16">
        <div>
          <h1 className="font-serif text-3xl mt-4">Dr. Teertha</h1>
          <p className="ml-2">B.A.M.S, Ayurveda Dietician,<br/> 
          <span className='font-bold'>Sports and Performance Nutritionist (IIT Madras)</span></p>          
        </div>
        <div className="mt-4 md:mt-10">
           <p className="text-md text-balance">I am <span className='font-bold'>Dr. Teertha, BAMS,</span> a <span className='font-bold'>certified Ayurvedic Dietician</span> and <span className='font-bold'>Sports Nutritionist</span> specializing in using <span className='font-bold'>food as medicine</span> to optimize health. I create <span className='font-bold'>personalized nutrition plans</span> based on <span className='font-bold'>age, gender, health conditions,</span> and <span className='font-bold'>dietary goals</span> to enhance overall well-being.</p><br/>
           <p className="text-md text-balance">As a <span className='font-bold'>Sports Nutritionist,</span> I design <span className='font-bold'>customized diet plans</span> to meet the unique needs of <span className='font-bold'>athletes,</span> focusing on <span className='font-bold'>performance</span> and <span className='font-bold'>sustainable results</span> through balanced nutrition.</p>
        </div>
      <div> */}
       <div className="order-2 md:order-1 w-full md:w-1/2 flex flex-col lg:mt-14 md:pl-16">
          <div>
            <h1 className="font-serif text-3xl mt-4">Florencia Magali Martin</h1>
            <h1 className="">500-hour Certified Yoga Instructor<br/>
            (MIMAMSA Yogshala & Rishikul Yogshala, Rishikesh)</h1>
          </div>
          <div className="mt-4 md:mt-10">
            <p className="text-md text-balance">I am <span className='font-bold'>Florencia Magali Martin,</span> a <span className='font-bold'>certified Yoga Instructor</span> with <span className='font-bold'>500-hour training</span> from <span className='font-bold'>MIMAMSA Yogshala</span> and <span className='font-bold'>Rishikul Yogshala in Rishikesh.</span> I create <span className='font-bold'>personalized, holistic yoga programs</span> that enhance <span className='font-bold'>physical</span> and<span className='font-bold'> mental well-being</span> through traditional practices.</p>
            <p className="text-md mt-4 md:mt-10">Originally from Argentina, I blend the <span className='font-bold'>rich Indian yoga traditions</span> with my <span className='font-bold'>global experience,</span> offering a unique approach to my students.</p>
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
         <div className="w-full md:w-1/2 flex flex-col lg:mt-14 md:pl-16">
        <div>
          <h1 className="font-serif text-3xl mt-4">Dr. Teertha</h1>
          <p className="ml-2">B.A.M.S, <span className='font-bold'>Yoga Expert</span> & <span className='font-bold'>Ayurveda Dietician,</span><br/> 
          Sports and Performance Nutritionist <span className='font-bold'>(IIT Madras)</span></p>          
        </div>
        <div className="mt-4 md:mt-10">
        <p className="text-md text-balance">
        I specialize in integrating <span className='font-bold'>Ayurvedic principles, yoga practices, and modern nutrition</span> to promote holistic health and well-being.</p>
        <br/>
        <p className="text-md text-balance">With a strong foundation in <span className='font-bold'>Ayurveda</span> and <span className='font-bold'>Sports Nutrition,</span> I create <span className='font-bold'>personalized diet plans</span> considering <span className='font-bold'>age, gender, health conditions,</span> and <span className='font-bold'>specific goals</span>. My approach emphasizes the importance of a <span className='font-bold'>balanced diet</span>, <span className='font-bold'>mindful eating</span>, and <span className='font-bold'>yoga-based lifestyle modifications</span> to achieve <span className='font-bold'>sustainable health outcomes</span>.</p>
      <br/>
      <p className="text-md text-balance">I guide individuals in achieving <span className='font-bold'>optimal health</span> through <span className='font-bold'>Ayurvedic nutrition, tailored yoga routines,</span> and <span className='font-bold'>performance-based diet plans</span> for athletes, focusing on improving <span className='font-bold'>strength, stamina,</span> and <span className='font-bold'>overall wellness.</span></p>

        </div>
      <div>
        {/* <div className="order-2 md:order-1 w-full md:w-1/2 flex flex-col lg:mt-14 md:pl-16">
          <div>
            <h1 className="font-serif text-3xl mt-4">Florencia Magali Martin</h1>
            <h1 className="">500-hour Certified Yoga Instructor<br/>
            (MIMAMSA Yogshala & Rishikul Yogshala, Rishikesh)</h1>
          </div>
          <div className="mt-4 md:mt-10">
            <p className="text-md text-balance">I am <span className='font-bold'>Florencia Magali Martin,</span> a <span className='font-bold'>certified Yoga Instructor</span> with <span className='font-bold'>500-hour training</span> from <span className='font-bold'>MIMAMSA Yogshala</span> and <span className='font-bold'>Rishikul Yogshala in Rishikesh.</span> I create <span className='font-bold'>personalized, holistic yoga programs</span> that enhance <span className='font-bold'>physical</span> and<span className='font-bold'> mental well-being</span> through traditional practices.</p>
            <p className="text-md mt-4 md:mt-10">Originally from Argentina, I blend the <span className='font-bold'>rich Indian yoga traditions</span> with my <span className='font-bold'>global experience,</span> offering a unique approach to my students.</p>
          </div>
        <div> */}
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
    className='content-center font-serif font-bold text-xs p-2 uppercase text-white hover:text-[#7B553C] hover:bg-[#90EE90] bg-[#003430] border-[#2f902f] border-solid border-0 drop-shadow-mds mb-4 rounded-md'
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
            >
              International / Online Appointment
            </button>
          </Link>
        </div>
        </div>
        <div className="order-1 md:order-2 md:w-1/2 h-64 md:h-auto">
        <img src={require('./YogaMeditation/Teertha.png')} className="object-cover w-full h-full" alt="Doctor" />
        </div>
      </div>
    </div>
  </>
  )
}

