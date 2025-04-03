'use client'
import { Card, CardContent, CardHeader } from "@/components/ui/card";



import React from 'react'
import { Button } from "../ui/button";
import Link from "next/link";





const HighPayingCareer = () => {
    return (
        <>
            <div className="bg-secondary-foreground">
                <div className='container mx-auto'>
                    <h1 className='max-w-[320px] md:max-w-[739px] mx-auto text-2xl md:text-5xl font-bold text-black leading-tight  text-nowrap md:mb-4 pt-6'>Your path to a High-Paying career</h1>
                    <p className='text-[#5C5958] max-w-[270px] md:max-w-full dark:text-gray text-base md:text-lg mb-5 md:mb-10 text-center'>Follow our proven step-by-step process to land your dream job</p>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="relative w-full">
                            <div className="relative">
                                <div className="flex gap-4 m-4">
                                    <div>
                                        <div className="rounded-full bg-[#E7EDFD] text-primary w-6 text-center font-bold">
                                            <span>1</span>
                                        </div>
                                        <div className="absolute left-7 top-7 bottom-0 w-0 border-l-2 border-dashed border-[#E7EDFD] h-16"></div>
                                    </div>
                                    <div>
                                        <h3 className="text-black text-xl font-semibold">Pick Your Plan</h3>
                                        <p className="text-gray-500">Find out options among them: Placement, assessment, guidance,<br /> technical coaching, quick refine and placement.</p>
                                    </div>
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
                                        <p className="text-gray">Our 500+ active recruiters will help you land multiple job offers within<br />the first 10 interviews.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="flex gap-4 m-4">
                                    <div>
                                        <div className="rounded-full bg-[#E7EDFD] text-[#5F81E1] w-6 text-center font-bold">
                                            <span>4</span>
                                        </div>
                                        <div className="absolute left-7 top-7 bottom-0 w-0 border-l-2 border-dashed border-[#E7EDFD] h-16"></div>
                                    </div>
                                    <div>
                                        <h3 className="text-black text-xl font-semibold">Ready Job Offer within 10 Interviews</h3>
                                        <p className="text-gray-500">Our 500+ active recruiters will help you land multiple job offers within <br /> the first 10 interviews.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="flex gap-4 m-4">
                                    <div>
                                        <div className="rounded-full bg-[#E7EDFD] text-[#5F81E1] w-6 text-center font-bold">
                                            <span>5</span>
                                        </div>
                                        <div className="absolute left-7 top-7 bottom-0 w-0 border-l-2 border-dashed border-[#E7EDFD] h-16"></div>
                                    </div>
                                    <div>
                                        <h3 className="text-black text-xl font-semibold">
                                            Renegotiation for Extra $10k</h3>
                                        <p className="text-gray-500">When your final salary is decided, we will step in to renegotiate get<br />you extra $10k</p>
                                    </div>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="flex gap-4 m-4">
                                    <div>
                                        <div className="rounded-full bg-[#E7EDFD] text-primary w-6 text-center font-bold">
                                            <span>6</span>
                                        </div>
                                        {/* <div className="absolute left-7 top-7 bottom-0 w-0 border-l-2 border-dashed border-[#E7EDFD] h-16"></div> */}
                                    </div>
                                    <div>
                                        <h3 className="text-black text-xl font-semibold">

                                            Support During Probation Period</h3>
                                        <p className="text-gray-500">Receive full support during your probation period to ensure your<br />success</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="w-full h-full lg:w-auto">
                            <div className="bg-card text-card-foreground shadow w-full h-full lg:w-[482px] overflow-hidden border rounded-md border-primary">
                                <Card className="bg-card text-card-foreground shadow w-full h-full lg:w-[482px] overflow-hidden border rounded-md border-primary relative">

                                    <CardHeader className="bg-primary absolute top-0 w-full text-white rounded-t-md text-lg shadow overflow-hidden border-blue-500 h-15">
                                        Job Prep Tracks
                                    </CardHeader>

                                    <CardContent className="pt-12">
                                        <ul className="space-y-4">
                                            <li className="flex items-center space-x-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-6 h-6 rounded-full bg-[#DCFCE7] p-1 text-blue-600 border-blue-600">
                                                    <path d="M20 6 9 17l-5-5"></path>
                                                </svg>
                                                <span className="text-gray text-lg">CloudOps/DevOps (AWS)</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-6 h-6 rounded-full bg-[#DCFCE7] p-1 text-blue-600">
                                                    <path d="M20 6 9 17l-5-5"></path>
                                                </svg>
                                                <span className="text-gray text-lg">Full-Stack Web/Mobile (MERN)</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-6 h-6 rounded-full bg-[#DCFCE7] p-1 text-blue-600">
                                                    <path d="M20 6 9 17l-5-5"></path>
                                                </svg>
                                                <span className="text-gray text-lg">Project/Product Management</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-6 h-6 rounded-full bg-[#DCFCE7] p-1 text-blue-600">
                                                    <path d="M20 6 9 17l-5-5"></path>
                                                </svg>
                                                <span className="text-gray text-lg">SQA Engineering</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-6 h-6 rounded-full bg-[#DCFCE7] p-1 text-blue-600">
                                                    <path d="M20 6 9 17l-5-5"></path>
                                                </svg>
                                                <span className="text-gray text-lg">Front-End Developer</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-6 h-6 rounded-full bg-[#DCFCE7] p-1 text-blue-600">
                                                    <path d="M20 6 9 17l-5-5"></path>
                                                </svg>
                                                <span className="text-gray text-lg">Back-End Developer</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-6 h-6 rounded-full bg-[#DCFCE7] p-1 text-blue-600">
                                                    <path d="M20 6 9 17l-5-5"></path>
                                                </svg>
                                                <span className="text-gray text-lg">Software Engineer</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-6 h-6 rounded-full bg-[#DCFCE7] p-1 text-blue-600">
                                                    <path d="M20 6 9 17l-5-5"></path>
                                                </svg>
                                                <span className="text-gray text-lg">AI Engineer</span>
                                            </li>
                                            <li className="flex items-center space-x-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-6 h-6 rounded-full bg-[#DCFCE7] p-1 text-blue-600">
                                                    <path d="M20 6 9 17l-5-5"></path>
                                                </svg>
                                                <span className="text-gray  text-lg">More</span>
                                            </li>
                                        </ul>
                                        <p className="text-xs text-gray mt-4 ml-4">
                                            All tracks include job placement 99.99% guarantee to follow our
                                        </p>
                                        <p className="text-xs  text-gray text-center">techniques.</p>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>



                </div>
                <div className='flex justify-center items-center m-4'>
                    <Button className='btn bg-primary rounded-full text-white m-4 p-4 text-lg'>Book Free Consulatation
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"></path></svg>
                        <Link href="/" />
                    </Button>
                </div>
            </div>





        </>
    )
}

export default HighPayingCareer