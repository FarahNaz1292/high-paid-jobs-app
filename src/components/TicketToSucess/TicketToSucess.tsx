'use client'





import React from 'react'
import CardsSection from './CardsSection'

const TicketToSucess = () => {
  return (
  <>
   <div className=''>
    <div className='mx-auto text-center '>
        <h1 className='max-w-[320px] md:max-w-[739px] mx-auto text-2xl md:text-5xl font-bold text-black leading-tight mb-2 md:mb-4'>Why High Paid Jobs is your ticket <br/>to success</h1>
        <p className='text-[#5C5958] max-w-[270px] mx-auto md:max-w-full dark:text-gray text-base md:text-lg mb-5 md:mb-10'>We share our special tools and techniques, and coach you one-on-one <br/>
        from the beginning to the placement with higher raise.</p>
    </div>
    <div className='mx-auto text-center' >
        <CardsSection/>
    </div>
   </div>







  </>
  )
}

export default TicketToSucess