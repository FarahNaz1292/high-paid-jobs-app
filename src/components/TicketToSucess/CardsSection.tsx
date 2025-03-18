'use client'
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import JobIcon from "../../../public/gurarantedJob.svg"
import recessionProof from "../../../public/recessionProof.svg"
import Mentoring from "../../../public/mentoring.svg"
import Salary from "../../../public/salaryNego.svg"
import Probation from "../../../public/probationPeriod.svg"
import LiveInterview from "../../../public/liveInterview.svg"





import React from 'react'



const CardsSection = () => {
    return (
        <>
            <div className="grid grid-cols-3 gap-5 container mx-auto">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex justify-center items-center">
                            <Image src={JobIcon} alt="Icon" />
                        </CardTitle>
                        <CardDescription className="text-nowrap font-bold text-2xl text-black">99.99% Guaranteed Job<br />Placement</CardDescription>
                        <p className="text-nowrap  text-[#5C5958] dark:text-gray">Land a $100k+ job in 8-16 weeks—or we <br /> keep working until you do</p>
                    </CardHeader>

                </Card>
                <Card >
                    <CardHeader>
                        <CardTitle className="flex justify-center items-center">
                            <Image src={recessionProof} alt="Icon" />
                        </CardTitle>
                        <CardDescription className="text-nowrap font-bold text-2xl text-black">AI & Recession-Proof<br />Careers</CardDescription>
                        <p className="text-nowrap  text-[#5C5958] dark:text-gray">Future-ready roles that thrive no matter <br />the economy.</p>
                    </CardHeader>

                </Card>
                <Card >
                    <CardHeader>
                        <CardTitle className="flex justify-center items-center">
                            <Image src={LiveInterview} alt="Icon" />
                        </CardTitle>
                        <CardDescription className="text-nowrap font-bold text-2xl text-black">Live Interview<br />Assistance</CardDescription>
                        <p className="text-nowrap  text-[#5C5958] dark:text-gray">Our experts join your interviews to help<br /> you shine</p>
                    </CardHeader>

                </Card>
                <Card >
                    <CardHeader>
                        <CardTitle className="flex justify-center items-center">
                            <Image src={Mentoring} alt="Icon" />
                        </CardTitle>
                        <CardDescription className="text-nowrap font-bold text-2xl text-black">One-on-One Mentoring</CardDescription>
                        <p className="text-nowrap  text-[#5C5958] dark:text-gray">Personalized guidance tailored to your <br />goals</p>
                    </CardHeader>

                </Card>
                <Card >
                    <CardHeader>
                        <CardTitle className="flex justify-center items-center">
                            <Image src={Salary} alt="Icon" />
                        </CardTitle>
                        <CardDescription className="text-nowrap font-bold text-2xl text-black">Salary Negotiation Boost</CardDescription>
                        <p className="text-nowrap  text-[#5C5958] dark:text-gray">Secure an extra $5k-$10k on your offer<br /> —guaranteed.

                        </p>
                    </CardHeader>

                </Card>
                <Card >
                    <CardHeader>
                        <CardTitle className="flex justify-center items-center">
                            <Image src={Probation} alt="Icon" />
                        </CardTitle>
                        <CardDescription className="text-nowrap font-bold text-2xl text-black">Probation Period <br />Support</CardDescription>
                        <p className="text-nowrap  text-[#5C5958] dark:text-gray">
                            We're with you for your first 3-6 months<br />on the job.</p>
                    </CardHeader>

                </Card>
            </div>
           

        </>

    )
}

export default CardsSection