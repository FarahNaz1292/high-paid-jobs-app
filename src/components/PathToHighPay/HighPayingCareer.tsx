'use client'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CheckCircle } from "lucide-react";


import React from 'react'

const HighPayingCareer = () => {
    return (
        <>
            <div>
                <div className='container mx-auto'>
                    <h1 className='max-w-[320px] md:max-w-[739px] mx-auto text-2xl md:text-5xl font-bold text-black leading-tight  text-nowrap md:mb-4'>Your path to a High-Paying career</h1>
                    <p className='text-[#5C5958] max-w-[270px] md:max-w-full dark:text-gray text-base md:text-lg mb-5 md:mb-10 text-center'>Follow our proven step-by-step process to land your dream job</p>
                    <div>
                        <div className="relative">
                            <div className="flex gap-4 m-4">
                                <div>
                                    <div className="rounded-full bg-[#E7EDFD] text-[#5F81E1] w-6 text-center font-bold">
                                        <span>1</span>
                                    </div>
                                    <div className="absolute left-7 top-7 bottom-0 w-0 border-l-2 border-dashed border-[#E7EDFD] h-16"></div>
                                </div>
                                <div>
                                    <h3 className="text-black text-xl font-semibold">Pick Your Plan</h3>
                                    <p className="text-gray-500">Find out options among them: Placement, assessment, guidance,<br /> technical coaching, quick refine and placement.</p>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="flex gap-4 m-4">
                                    <div>
                                        <div className="rounded-full bg-[#E7EDFD] text-[#5F81E1] w-6 text-center font-bold">
                                            <span>2</span>
                                        </div>
                                        <div className="absolute left-7 top-7 bottom-0 w-0 border-l-2 border-dashed border-[#E7EDFD] h-16"></div>
                                    </div>
                                    <div>
                                        <h3 className="text-black text-xl font-semibold">Your Career Assessment</h3>
                                        <p className="text-gray-500">Get one-on-one coaching and assessment until your placement in confirmed <br />in 8 to 12 weeks..</p>
                                    </div>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="flex gap-4 m-4">
                                    <div>
                                        <div className="rounded-full bg-[#E7EDFD] text-[#5F81E1] w-6 text-center font-bold">
                                            <span>3</span>
                                        </div>
                                        <div className="absolute left-7 top-7 bottom-0 w-0 border-l-2 border-dashed border-[#E7EDFD] h-16"></div>
                                    </div>
                                    <div>
                                        <h3 className="text-black text-xl font-semibold">
                                        Access 500+ Active Recruiters</h3>
                                        <p className="text-gray-500">Our 500+ active recruiters will help you land multiple job offers within<br/>the first 10 interviews.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>




        </>
    )
}

export default HighPayingCareer