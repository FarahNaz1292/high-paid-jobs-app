'use client'

import React from 'react'
import Navbar from '../Shared/Navabar/Navbar'
import { Separator } from "@/components/ui/separator"
import Image from 'next/image'
import MaskGroup from "../../../public/Maskgroup (1).webp"
import { Button } from '../ui/button'
import Arrow from "../../../public/arrow.svg"
import Link from 'next/link'


const Banner = () => {
return (
  <div className="relative">
    <div className="relative h-[700px] bg-primary">
      <Image src={MaskGroup} alt='Image' className='absolute top-0 right-0 animate-pulse z-10 w-lg' />
      <Navbar />
      <div className='container mx-auto'>
        <Separator className="my-2 bg-gray-400" />
        <div className="hidden md:flex w-fit m-4 p-3 items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border text-white border-white/20 animate-pulse">
          <span className="text-warn animate-in">🔥</span>99.99% GUARANTEED to get back your job!
        </div>

        <div className='flex flex-col md:flex-row justify-between items-center md:items-start h-auto md:h-[300px] p-2'>
          <div>
            <h2 className="text-4xl md:text-5.5xl text-center md:text-left leading-relaxed font-extrabold font-serif tracking-wide text-[white] m-6">Get your Six-Figure <br /> job back in <br /><span className="relative text-yellow-500">8-16 Weeks<svg className="absolute left-0 w-full -bottom-3" height="20" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q50 0, 100 5" fill="none" stroke="currentColor" strokeWidth="2" className="text-warn"></path></svg></span> <br />with our proven <br /> techniques.</h2>
            <p className=' m-4 text-white font-sans'>Get access actively hiring 20+ premium recruiters today surrounding your location.</p>
          </div>
          <div className="w-full md:w-[600px] flex justify-center">
            <iframe 
              src="https://player.vimeo.com/video/1065695538?h=2a872c4ae3&amp;autoplay=1"
              title="High Paid Jobs"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              className="w-full md:w-[600px] h-[250px] md:h-[400px] rounded-lg"
            ></iframe>
          </div>
        </div>
        <div className='flex  justify-center gap-4 mt-6 md:mt-10'>
          <Link href="#consultation">
            <Button className='btn bg-[#EAC807] hover:bg-[#F5DE4D] rounded-full text-gray-600 tracking-wider flex items-center gap-2 px-6 py-3'>
              Book Free Consultation
              <Image src={Arrow} alt='arrow' />
            </Button>
          </Link>

          <Button className='btn bg-white/10 rounded-full text-white tracking-wider flex items-center gap-2 px-6 py-3'>
            Join Next Webinar
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right">
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </Button>
        </div>
      </div>
      <Image src={MaskGroup} alt='Image 2' className='absolute bottom-0 left-0 rotate-180 animate-pulse z-10' />
    </div>
  </div>
  )
}

export default Banner