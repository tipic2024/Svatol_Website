import React from 'react'
import H1 from './H1'
import HerosectionForm from './HerosectionForm'

function HeroPage() {  return (
  <div className='md:flex md:relative'>
  <div className='w-[100%] md:w-[50%] lg:w-[50%]  md:absolute top-0 lg:ml-3'>
    <H1/>
  </div>
  <div className='w-[93%] md:w-[50%] lg:w-[50%] lg:mr-10 md:mr-8 mt-1 ml-auto mr-3  md:relative md:z-10 '>
    <HerosectionForm/>
  </div>
</div>

  )
}

export default HeroPage
