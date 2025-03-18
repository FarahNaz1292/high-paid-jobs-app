'use client'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import JobIcon from "../../../public/gurarantedJob.svg"
import recessionProof from "../../../public/recessionProof.svg"





import React from 'react'

const CardsSection = () => {
    return (
        <>
            <div>

                <Card>
                    <CardHeader>
                        <CardTitle><Image src={JobIcon} alt="Guranted icon" ></Image></CardTitle>
                        <CardDescription>99.99% Guaranteed Job <br />Placement</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>
                            Land a $100k+ job in 8-16 weeks—or we <br />keep working until you do</p>
                    </CardContent>

                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle><Image src={recessionProof} alt="Guranted icon" ></Image></CardTitle>
                        <CardDescription>AI & Recession-Proof <br />Careers</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>
                            Future-ready roles that thrive no <br />matter the economy.

                        </p>
                    </CardContent>

                </Card>
            </div>
        </>

    )
}

export default CardsSection