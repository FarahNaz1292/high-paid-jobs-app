'use client'
import React from 'react'
import CardsSection from './CardsSection'
import { Button } from '../ui/button'
import { Link } from 'lucide-react'
import Arrow from "../../../public/arrow.svg"
import Image from 'next/image'

const TicketToSucess = () => {
  return (
    <>
      <div className='bg-[#F5F5F5]'>
        <div className=' text-center '>
          <h1 className='max-w-[320px] md:max-w-[739px] mx-auto text-2xl md:text-5xl font-bold text-black leading-tight mb-2 p-5 text-nowrap md:mb-4'>Why High Paid Jobs is your ticket <br />to success</h1>
          <p className='text-[#5C5958] max-w-[270px] mx-auto md:max-w-full dark:text-gray text-base md:text-lg mb-5 md:mb-10'>We share our special tools and techniques, and coach you one-on-one <br />
            from the beginning to the placement with higher raise.</p>
        </div>
        <div  >
          <CardsSection />
        </div>
        <div className='flex justify-center items-center m-4'>
          <Button className='btn bg-primary rounded-full text-white m-4 p-4 text-lg'>Book Free Consulatation
            <Image src={Arrow} alt='arrow'/>
            <Link href="/" />
          </Button>

        </div>
      </div>







    </>
  )
}

export default TicketToSucess