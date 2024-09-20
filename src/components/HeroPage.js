import React from 'react'
import H1 from './H1'
import HerosectionForm from './HerosectionForm'

function HeroPage() {
  return (
    <div className='md:flex '>
      <div className=' w-[100%] lg:w-[50%] '>
      <H1/>
      </div>
      <div className='w-[100%] lg:[50%]'>
        <HerosectionForm/>
      </div>
    </div>

  )
}

export default HeroPage
