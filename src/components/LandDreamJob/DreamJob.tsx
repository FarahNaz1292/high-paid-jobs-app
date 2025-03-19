'use client'

import React, { useState } from 'react'
import { Card } from "@/components/ui/card"
import { Button } from '../ui/button'
import Link from 'next/link'


const DreamJob = () => {
  const [activeCard, setActiveCard] = useState<'assessment' | 'placement' | 'prep'>('assessment')

  const cards = [
    {
      key: 'assessment',
      title: 'Job Assessment',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-briefcase-business text-primary"><path d="M12 12h.01"></path><path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"></path><path d="M22 13a18.15 18.15 0 0 1-20 0"></path><rect width="20" height="14" x="2" y="6" rx="2"></rect></svg>,
    },
    {
      key: 'placement',
      title: 'Job Placement',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-building text-primary"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg>,
    },
    {
      key: 'prep',
      title: 'Job Prep',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-graduation-cap text-primary"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>,
    },
  ]

  const renderRightCard = () => {
    switch (activeCard) {
      case 'assessment':
        return (
          <Card className='p-6 border-black shadow-xl w-full'>
            <div className='grid grid-cols-3 gap-4 text-wrap'>
              {[
                "30 to 120 min interview",
                "40 to 70 local recruiter access",
                "Provided recording with details report",
                "Salary negotiation blueprint",
                "Probation period hacks",
                "Help revamp the resume and tailoring for each job needs.",
              ].map((item, idx) => (
                <div className='flex items-center gap-2' key={idx}>
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-check h-4 w-4 text-primary"><path d="M20 6 9 17l-5-5"></path></svg>
                  <h2 className='tracking-wide text-gray-600 text-wrap'>{item}</h2>
                </div>
              ))}
            </div>
            <div className='flex justify-center items-center'>
              <Link href="/">
                <Button className='bg-primary rounded-full text-white m-4 p-4 text-lg'>
                  Book Free Consultation
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"></path></svg>
                </Button>
              </Link>
            </div>
          </Card>
        )
      case 'placement':
        return (
          <Card className='p-6 border-black shadow-xl w-full'>
            <div className='grid grid-cols-3 gap-4 text-wrap'>
              {[
                "Everything in Job Assessment + Placement",
                "One-on-one instruction",
                "Hands-on real-world projects",
                "Optional 400-hour internship",
                "Industry mentor matching",
                "Portfolio development",
                "Lifetime access to materials",
              ].map((item, idx) => (
                <div className='flex items-center gap-2' key={idx}>
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-check h-4 w-4 text-primary"><path d="M20 6 9 17l-5-5"></path></svg>
                  <h2 className='tracking-wide text-gray-600'>{item}</h2>
                </div>
              ))}
            </div>
            <div className='flex justify-center items-center'>
              <Link href="/">
                <Button className='bg-primary rounded-full text-white m-4 p-4 text-lg'>
                  Book Free Consultation
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"></path></svg>
                </Button>
              </Link>
            </div>
          </Card>
        )
      case 'prep':
        return (
          <Card className='p-6 border-black shadow-xl w-full'>
            <div className='grid grid-cols-3 gap-4 text-wrap'>
              {[
                "Everything in Job Assessment",
                "Access to 500+ active recruiters",
                "Complete support during interviews",
                "Sure job offer within 10 interviews",
                "Help renegotiate salary by $10k",
                "Complete support during probation period",
                "Lifetime access to materials",
              ].map((item, idx) => (
                <div className='flex items-center gap-2' key={idx}>
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-check h-4 w-4 text-primary"><path d="M20 6 9 17l-5-5"></path></svg>
                  <h2 className='tracking-wide text-gray-600 '>{item}</h2>
                </div>
              ))}
            </div>
            <div className='flex justify-center items-center'>
              <Link href="/">
                <Button className='bg-primary rounded-full text-white m-4 p-4 text-lg'>
                  Book Free Consultation
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"></path></svg>
                </Button>
              </Link>
            </div>
          </Card>
        )
      default:
        return null
    }
  }

  return (
    <div className='w-full bg-[#F5F5F5] py-8'>
      <div className='max-w-7xl mx-auto '>
        <div className='text-center mb-10 px-4'>
          <h1 className='md:text-5xl text-4xl font-extrabold mb-4 tracking-tight'>Choose Your Path to Land Your Dream Job</h1>
          <h3 className='text-muted-foreground text-lg max-w-2xl mx-auto'>
            Select the career path that aligns with your goals and unlock your professional potential.
          </h3>
        </div>

        <div className='flex flex-col md:flex-row gap-6 md:gap-10 px-4'>
         
          <div className='flex flex-col gap-4 md:gap-6 '>
            {cards.map((card) => (
              <Card
                key={card.key}
                onClick={() => setActiveCard(card.key as typeof activeCard)}
                className={`cursor-pointer w-xl p-4 flex  m-4 hover:border-primary transition ${
                  activeCard === card.key ? 'border-primary border-2' : ''
                }`}
              >
              <div className='flex gap-6 '>
              {card.icon}
              <h2 className='text-black text-lg  text-nowrap font-bold tracking-wider'>{card.title}</h2>
              </div>
              </Card>
            ))}
          </div>

         
          <div className='flex-1'>
            {renderRightCard()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DreamJob
