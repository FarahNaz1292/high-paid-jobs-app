"use client"

import { Check, ArrowRight } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function PricingPlans() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2 text-black">Unlock Your Career Freedom!</h1>
        <p className="text-gray">
          Choose the assessment plan that works best for you with our flexible payment options
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 container md:mx-auto">
        {/* Starter Plan */}
        <Card className="bg-[#F3F5F7] dark:bg-[#434345] rounded-lg shadow border border-gray-200 dark:border-gray-600 p-6 flex flex-col mx-4 md:mx-0">
          <CardHeader className="pb-0">
            <h2 className="text-lg font-bold text-black">Plan: Starter</h2>
            <p className="text-gray text-sm">Quick 30 min interview</p>
          </CardHeader>
          <CardContent className="pt-4 flex-grow">
            <div className="mb-4">
              <p className="text-sm text-gray">Starting from</p>
              <p className="text-4xl font-bold text-black">$49.99</p>
              <p className="text-sm text-gray">One time payment</p>
            </div>

            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray">30 Min Interview.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray">Provide Recording.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray">Interview Assessment.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray">Delivery: 1 to 3 days.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray">Receive: details report and next action plan.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray">Provide 30 Local recruiter (small to large companies for open position)</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full rounded-full p-6 bg-blue-600 hover:bg-blue-700 text-white font-medium">
              Pay Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>

        {/* Essential Plan */}
        <Card className="bg-primary rounded-lg border border-blue-600 p-6 flex flex-col relative mx-4 md:mx-0">
        <div className="absolute -right-6 top-8 bg-gradient-to-br from-[#FFB84D] to-[#F6A934] text-xs md:text-sm font-medium text-black px-3 py-1 rounded-t rounded-bl shadow-lg transform rotate-1 border-b-2 border-r-2 border-[#D88A20]">
  Most Popular
</div>
          <CardHeader className="pb-0 mt-1">
            <h2 className="text-lg font-bold">Plan: Essential</h2>
            <p className="text-blue-100 text-sm">60 min technical interview and resume assessment</p>
          </CardHeader>
          <CardContent className="pt-4 flex-grow">
            <div className="mb-4">
              <p className="text-sm text-blue-200">Starting From</p>
              <p className="text-4xl font-bold">$99.99</p>
              <p className="text-sm text-blue-200">Upfront deposit, $99.99 installment for 24 months: Interest FREE</p>
            </div>

            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-white mt-0.5 flex-shrink-0" />
                <span className="text-white">60 min interview.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-white mt-0.5 flex-shrink-0" />
                <span className="text-white">Deliver: Recording Interview, Resume Assessment and guidance!</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-white mt-0.5 flex-shrink-0" />
                <span className="text-white">Receive: details report and next action plan</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-white mt-0.5 flex-shrink-0" />
                <span className="text-white">50 Local recruiter (small to large companies for open position)</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-white dark:bg-[#313131] rounded-full p-6 text-blue-600 hover:bg-blue-600 dark:hover:bg-primary  hover:text-white dark:text-white font-medium">
              Pay Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>

        {/* Premium Plan */}
        <Card className="bg-[#F3F5F7] dark:bg-[#434345] rounded-lg shadow border border-gray-200 dark:border-gray-600 p-6 flex flex-col mx-4 md:mx-0">
          <CardHeader className="pb-0">
            <h2 className="text-lg font-bold text-black">Plan: Premium</h2>
            <p className="text-gray text-sm">Interview, resume and current job application assessment</p>
          </CardHeader>
          <CardContent className="pt-2 flex-grow">
            <div className="mb-4">
              <p className="text-sm text-gray">Starting From</p>
              <p className="text-4xl font-bold text-black">$149.99</p>
              <p className="text-sm text-gray-600">Upfront deposit, $149.99 installment for 24 months: Interest FREE</p>
            </div>

            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray">Duration: 2 Hours</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray">Recruiter Interview</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray">Tech Interview</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray">Behavior interview</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray">Resume Assessment</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray">Current job application assessment</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray">Receive: details report and next action plan</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray">70 Local recruiter (small to large companies for open position)</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full rounded-full p-6 bg-blue-600 hover:bg-blue-700 text-white font-medium">
              Pay Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

