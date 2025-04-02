'use client'
import React from 'react'
import CardsSection from './CardsSection'
import { Button } from '../ui/button'
import Link from 'next/link'

const TicketToSucess = () => {
  return (
    <>
      <div className='bg-foreground'>
        <div className=' text-center '>
          <h1 className='max-w-[320px] md:max-w-[739px] mx-auto text-2xl md:text-5xl font-bold text-black leading-tight mb-2 p-5 text-nowrap md:mb-4'>Why High Paid Jobs is your ticket <br />to success</h1>
          <p className='text-gray max-w-[270px] mx-auto md:max-w-full text-base md:text-lg mb-5 md:mb-10'>We share our special tools and techniques, and coach you one-on-one <br />
            from the beginning to the placement with higher raise.</p>
        </div>
        <div className='bg-foreground' >
          <CardsSection />
        </div>
        <div className='flex justify-center items-center '>
          <Button className='btn bg-primary rounded-full text-white mb-10 p-4 text-lg'>Book Free Consulatation
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"></path></svg>
            <Link href={"/"} />
          </Button>

        </div>
      </div>







    </>
  )
}

export default TicketToSucess