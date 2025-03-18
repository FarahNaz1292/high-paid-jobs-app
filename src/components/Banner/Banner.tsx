import React from 'react'
import Navbar from '../Shared/Navabar/Navbar'
import { Separator } from "@/components/ui/separator"
import Image from 'next/image'
import MaskGroup from "../../../public/Maskgroup (1).webp"


const Banner = () => {
  return (
    <div className="bg-primary">
      <Image src={MaskGroup} alt='Image' className='absolute top-0 right-0 animate-pulse z-10'/>
      <Navbar />
      <div className='container mx-auto'>
        <Separator className="my-4 " />
        <div className='m-10'>
          <div className="inline-flex m-4 p-3 items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border text-white border-white/20 animate-pulse"><span className="text-warn animate-in">🔥</span>99.99% GUARANTEED to get back your job!</div>
          <div className='flex justify-between h-[300px] p-2'>
            <div>
              <h2 className="text-3xl md:text-5.5xl text-center md:text-left leading-tight font-extrabold text-balance font-sans text-white ">Get your Six-Figure <br /> job back in <br /><span className="relative text-yellow-500">8-16 Weeks<svg className="absolute left-0 w-full -bottom-3" height="20" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q50 0, 100 5" fill="none" stroke="currentColor" stroke-width="2" className="text-warn"></path></svg></span> <br />with our proven <br/> techniques.</h2>
            </div>
            <div className='mb-4'>
              <iframe src="https://player.vimeo.com/video/1065695538?h=2a872c4ae3&amp;autoplay=1" title="High Paid Jobs" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" className="w-full h-full CnP-mutatedIframe-0"></iframe>

            </div>
          </div>
        </div>
      </div>
      <Image src={MaskGroup} alt='Image 2' className='absolute bottom-0 left-0  rotate-180 animate-pulse z-10'/>
    </div>
  )
}

export default Banner