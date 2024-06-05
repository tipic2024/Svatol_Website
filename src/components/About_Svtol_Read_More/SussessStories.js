import React from 'react';
import S1Image from './S1.jpeg';
import S3Image from './S3.jpeg';
import S4Image from './S4.png';
import S5Image from './S5.jpg';
import S10Image from './S10.png';
import S7Image from  './S7.png'

export default function SuccessStories() {
  return (<>
  <div className='bg-[#FFF6E7] '>
    <div className='flex justify-center '>
      <div className="max-w-sm w-full lg:max-w-2xl lg:flex mt-7">
        <div
          className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
          style={{ backgroundImage: `url(${S1Image})` }}
          title="Dermatology Consultation"
        ></div>
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-[#C4E4FF] backdrop-blur-3xl lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <p className="text-xl font-bold text-[#7B553C]">
            Dermatology
            </p>
            <div className="text-[#7B553C] font-serif text-xl mb-2">  Sahara Shaikh</div>
            <p className="text-[#0a0a09] text-base">
              Sarah shares, "I had lost hope after so many failed attempts, but Dr.Samir's personalized approach made all the difference. Seeing my skin clear up and feeling confident again is truly life-changing. I can finally go out without layers of makeup, and I feel like my true self."
            </p>
          </div>
          <div className="flex items-center">
            <img className="w-16 h-16 rounded-full mr-4" src={S3Image} alt="Avatar of Sahara Shaikh" />
            <div className="text-sm">
              <p className="text-[#7B553C] text-xl leading-none">Dr.Samir</p>
              <p className="text-black">BAMS, MD (Ayurveda), IMS-BHU, Gold Medalist
MBA, Indian School of Business</p>
            </div>
          </div>
        </div>
      </div>
    </div>

<div className='flex justify-center mt-14'>
<div className="max-w-sm w-full lg:max-w-2xl lg:flex">
  <div
    className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
    style={{ backgroundImage: `url(${S4Image})` }}
    title="Dermatology Consultation"
  ></div>
  <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-[#C4E4FF] lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div className="mb-8">
      <p className="text-xl font-bold text-[#7B553C]">
      Oncology
      </p>
      <div className="text-[#7B553C] font-serif text-xl mb-2">Sneha Deshmukh</div>
      <p className="text-[#181818] text-base">
      Sneha shares, "The journey was incredibly tough, but Dr. Prajwal and her team were with me every step of the way. Their unwavering support and expertise gave me hope and strength. Being in remission feels like getting a second chance at life, and I am forever grateful."
      </p>
    </div>
    <div className="flex items-center">
      <img className="w-16 h-16 rounded-full mr-4" src={S5Image} alt="Avatar of Sahara Shaikh" />
      <div className="text-sm">
        <p className="text-[#7B553C] text-xl leading-none">Dr.Prajwal</p>
        <p className="text-blac">BAMS, MD (Ayurveda), IMS-BHU, Gold Medalist
MBA, Indian School of Business</p>
      </div>
    </div>
  </div>
</div>
</div>
<div className='flex justify-center mt-14 '>
<div className="max-w-sm w-full lg:max-w-2xl lg:flex mb-10">
  <div
    className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
    style={{ backgroundImage: `url(${S10Image})` }}
    title="Dermatology Consultation"
  ></div>
  <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-[#C4E4FF] lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div className="mb-8">
      <p className="text-xl font-bold text-[#7B553C]">
     Panchakarma
      </p>
      <div className="text-[#7B553C] font-serif text-xl mb-2">Rekha Pawar</div>
      <p className="text-[#101010] text-base">
      Seeking a holistic approach to address his health issues, Rekha opted for Panchkarma therapy under the guidance of Dr. Meera, an experienced Ayurvedic practitioner. Dr. Meera conducted a thorough assessment of Rajesh's medical history, lifestyle, and dosha imbalance. Based on this evaluation, she recommended a personalized Panchkarma treatment plan.
      </p>
    </div>
    <div className="flex items-center">
      <img className="w-16 h-16 rounded-full mr-4" src={S7Image} alt="Avatar of Sahara Shaikh" />
      <div className="text-sm">
        <p className="text-[#7B553C] leading-none text-xl">Dr.Aditi</p>
        <p className="text-black">BAMS, MD (Ayurveda), IMS-BHU, Gold Medalist
MBA, Indian School of Business</p>
      </div>
    </div>
  </div>
</div>
</div>
</div>

</>
  );
}
