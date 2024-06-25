import React from 'react'
import Vision from './Vision'
import Contactus from './Contactus'
import Paragraph from './Paragraph'
import Aboutus from './Aboutus'
import Startup from './Startup'
import Doctors_Img from './Hero1'
import Vision1 from './Vision1'
import Testhero from './Herosection'
import Apointment from './Apointment'
import Booking from './Booking'
import Footer from './footer'
import GA from './GA'
import NB from './NB'
import Services from './Book'
import BookEvent from './BookEvent'
import SuccessStories from './About_Svtol_Read_More/SussessStories'
import FeaturdArticles from './About_Svtol_Read_More/FeaturdArticles'
import Key_services from './key_services'

export default function Home() {

  return (
    <div className='bg-[#FFF6E7] lg:max-w-7xl'>
      

      <GA/>
      
      
      <Doctors_Img/>
      <Key_services/>
     
      
      {/* <Services/> */}
      
      <Aboutus/>
      <Contactus/>
      

      
      
      
      
    
      
    </div>
  )

}
