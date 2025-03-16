import { ModeToggle } from '@/components/ModeToggle/ModeToggle'
import React from 'react'

const Navbar = () => {
  return (
    <div className='container mx-auto flex justify-between bg-primary'>
        <div><h1 >High Paid Jobs</h1></div>
        <div><ModeToggle/></div>
    </div>
  )
}

export default Navbar