import { ModeToggle } from '@/components/ModeToggle/ModeToggle'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Arrow from "../../../../public/arrow.svg"



import React from 'react'
import { Link } from 'lucide-react'

const Navbar = () => {
  return (
    <div className='container mx-auto flex justify-between bg-primary'>
      <div>
        <h1 className='m-4 text-lg md:text-xl font-bold text-white'>High Paid Jobs</h1>
      </div>
      <div className='gap-10'>
        <ModeToggle />
        <Button className='btn bg-white text-gray-600 m-4'>Get Started
          <Image src={Arrow} alt='arrow' />
          <Link href="/"/>
        </Button>
      </div>
    

    </div>
  )
}

export default Navbar