"use client"

import { Check, ArrowRight } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function PricingPlans() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">Unlock Your Career Freedom!</h1>
        <p className="text-gray-600">
          Choose the assessment plan that works best for you with our flexible payment options
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Starter Plan */}
        <Card className="bg-gray-50 flex flex-col h-full">
          <CardHeader className="pb-0">
            <h2 className="text-lg font-bold">Plan: Starter</h2>
            <p className="text-gray-600 text-sm">Quick 30 min interview</p>
          </CardHeader>
          <CardContent className="pt-4 flex-grow">
            <div className="mb-4">
              <p className="text-sm text-gray-600">Starting from</p>
              <p className="text-4xl font-bold">$49.99</p>
              <p className="text-sm text-gray-600">One time payment</p>
            </div>

            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span>30 Min Interview.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span>Provide Recording.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span>Interview Assessment.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span>Delivery: 1 to 3 days.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span>Receive: details report and next action plan.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span>Provide 30 Local recruiter (small to large companies for open position)</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              Pay Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>

        {/* Essential Plan */}
        <Card className="bg-blue-600 text-white relative flex flex-col h-full">
          <div className="absolute right-4 top-0 bg-orange-400 text-xs font-medium px-2 py-1 rounded-b-md">
            Most Popular
          </div>
          <CardHeader className="pb-0">
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
                <span>60 min interview.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-white mt-0.5 flex-shrink-0" />
                <span>Deliver: Recording Interview, Resume Assessment and guidance!</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-white mt-0.5 flex-shrink-0" />
                <span>Receive: details report and next action plan</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-white mt-0.5 flex-shrink-0" />
                <span>50 Local recruiter (small to large companies for open position)</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-white text-blue-600 hover:bg-blue-50">
              Pay Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>

        {/* Premium Plan */}
        <Card className="bg-gray-50 flex flex-col h-full">
          <CardHeader className="pb-0">
            <h2 className="text-lg font-bold">Plan: Premium</h2>
            <p className="text-gray-600 text-sm">Interview, resume and current job application assessment</p>
          </CardHeader>
          <CardContent className="pt-4 flex-grow">
            <div className="mb-4">
              <p className="text-sm text-gray-600">Starting From</p>
              <p className="text-4xl font-bold">$149.99</p>
              <p className="text-sm text-gray-600">Upfront deposit, $149.99 installment for 24 months: Interest FREE</p>
            </div>

            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span>Duration: 2 Hours</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span>Recruiter Interview</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span>Tech Interview</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span>Behavior interview</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span>Resume Assessment</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span>Current job application assessment</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span>Receive: details report and next action plan</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span>70 Local recruiter (small to large companies for open position)</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              Pay Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

