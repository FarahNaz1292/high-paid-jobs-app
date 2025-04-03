import { ModeToggle } from '@/components/ModeToggle/ModeToggle'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

import CompanyLogo from "../../../../public/logo2.webp"

const Navbar = () => {
  return (
    <div className='container mx-auto flex justify-between bg-primary'>
      <div>
      <Image src={CompanyLogo} alt='logo' width={150} height={100} className='ml-6'/>
      </div>
      <div className=' flex gap-4 mt-15 '>
        <ModeToggle />
        <Button className='flex items-center justify-between rounded-full bg-[white] hover:bg-gray-100 text-slate-900 px-3 md:px-5 py-1.5 cursor-pointer text-sm md:text-base whitespace-normal lg:text-nowrap md:break-words w-[80px] lg:w-[150]'>Get Started
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right ml-1 h-4 w-4"><path d="m9 18 6-6-6-6"></path></svg>
          <Link href="/"/>
        </Button>
      </div>
    

    </div>
  )
}

export default Navbar