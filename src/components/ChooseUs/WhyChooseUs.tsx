"use client"

import { Check, X } from "lucide-react"

export default function WhyChooseUs() {
  return (
    <div className="bg-white min-h-screen p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Why Choose Us Over Others?</h1>
          <p className="text-lg text-gray-600">See how our program delivers results where others fall short</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Feature 1: Guaranteed Job Placement */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 flex items-center justify-center">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
                    stroke="#30D5F2"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 24L22 30L34 18"
                    stroke="#30D5F2"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <h2 className="text-xl font-bold text-center mb-2">Guaranteed Job Placement</h2>
            <p className="text-gray-600 text-center mb-4">
              We guarantee you'll get hired or we keep working with you for free
            </p>

            <div className="grid grid-cols-2 gap-2 mb-4">
              <div className="bg-gray-100 p-3 rounded flex justify-center items-center font-medium">HighPaidJobs</div>
              <div className="bg-gray-100 p-3 rounded flex justify-center items-center font-medium">Others</div>
              <div className="bg-gray-100 p-3 rounded flex justify-center items-center">
                <div className="bg-blue-600 rounded-full p-1">
                  <Check className="h-4 w-4 text-white" />
                </div>
              </div>
              <div className="bg-gray-100 p-3 rounded flex justify-center items-center">
                <div className="bg-red-500 rounded-full p-1">
                  <X className="h-4 w-4 text-white" />
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-3 rounded-md text-center text-blue-800 text-sm">
              99.99% success rate within 8-16 weeks
            </div>
          </div>

          {/* Feature 2: Hyper Personalized Coaching */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 flex items-center justify-center">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M40 8H8C5.79086 8 4 9.79086 4 12V32C4 34.2091 5.79086 36 8 36H40C42.2091 36 44 34.2091 44 32V12C44 9.79086 42.2091 8 40 8Z"
                    stroke="#30D5F2"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M24 30C27.3137 30 30 27.3137 30 24C30 20.6863 27.3137 18 24 18C20.6863 18 18 20.6863 18 24C18 27.3137 20.6863 30 24 30Z"
                    stroke="#30D5F2"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 44L32 44"
                    stroke="#30D5F2"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M24 36V44" stroke="#30D5F2" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <h2 className="text-xl font-bold text-center mb-2">Hyper Personalized Coaching</h2>
            <p className="text-gray-600 text-center mb-4">One-on-one instruction tailored to your learning style</p>

            <div className="grid grid-cols-2 gap-2 mb-4">
              <div className="bg-gray-100 p-3 rounded flex justify-center items-center font-medium">HighPaidJobs</div>
              <div className="bg-gray-100 p-3 rounded flex justify-center items-center font-medium">Others</div>
              <div className="bg-gray-100 p-3 rounded flex justify-center items-center">
                <div className="bg-blue-600 rounded-full p-1">
                  <Check className="h-4 w-4 text-white" />
                </div>
              </div>
              <div className="bg-gray-100 p-3 rounded flex justify-center items-center">
                <div className="bg-red-500 rounded-full p-1">
                  <X className="h-4 w-4 text-white" />
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-3 rounded-md text-center text-blue-800 text-sm">
              Dedicated mentor throughout your journey
            </div>
          </div>

          {/* Feature 3: Interview Support */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 flex items-center justify-center">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M32 36L40 44"
                    stroke="#30D5F2"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M16 36L8 44" stroke="#30D5F2" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M36 16H44" stroke="#30D5F2" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M4 16H12" stroke="#30D5F2" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M24 4V12" stroke="#30D5F2" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <path
                    d="M24 36C30.6274 36 36 30.6274 36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36Z"
                    stroke="#30D5F2"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <h2 className="text-xl font-bold text-center mb-2">Interview Support</h2>
            <p className="text-gray-600 text-center mb-4">Expert guidance during the entire interview process</p>

            <div className="grid grid-cols-2 gap-2 mb-4">
              <div className="bg-gray-100 p-3 rounded flex justify-center items-center font-medium">HighPaidJobs</div>
              <div className="bg-gray-100 p-3 rounded flex justify-center items-center font-medium">Others</div>
              <div className="bg-gray-100 p-3 rounded flex justify-center items-center">
                <div className="bg-blue-600 rounded-full p-1">
                  <Check className="h-4 w-4 text-white" />
                </div>
              </div>
              <div className="bg-gray-100 p-3 rounded flex justify-center items-center">
                <div className="bg-red-500 rounded-full p-1">
                  <X className="h-4 w-4 text-white" />
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-3 rounded-md text-center text-blue-800 text-sm">
              We join your interviews to help you succeed
            </div>
          </div>

          {/* Feature 4: Post-Hire Support */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 flex items-center justify-center">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M24 28C28.4183 28 32 24.4183 32 20C32 15.5817 28.4183 12 24 12C19.5817 12 16 15.5817 16 20C16 24.4183 19.5817 28 24 28Z"
                    stroke="#30D5F2"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 44V40C12 37.7909 13.7909 36 16 36H32C34.2091 36 36 37.7909 36 40V44"
                    stroke="#30D5F2"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 16C8 10.4772 12.4772 6 18 6H30C35.5228 6 40 10.4772 40 16V32C40 37.5228 35.5228 42 30 42H18C12.4772 42 8 37.5228 8 32V16Z"
                    stroke="#30D5F2"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <h2 className="text-xl font-bold text-center mb-2">Post-Hire Support</h2>
            <p className="text-gray-600 text-center mb-4">Continued assistance after you land your job</p>

            <div className="grid grid-cols-2 gap-2 mb-4">
              <div className="bg-gray-100 p-3 rounded flex justify-center items-center font-medium">HighPaidJobs</div>
              <div className="bg-gray-100 p-3 rounded flex justify-center items-center font-medium">Others</div>
              <div className="bg-gray-100 p-3 rounded flex justify-center items-center">
                <div className="bg-blue-600 rounded-full p-1">
                  <Check className="h-4 w-4 text-white" />
                </div>
              </div>
              <div className="bg-gray-100 p-3 rounded flex justify-center items-center">
                <div className="bg-red-500 rounded-full p-1">
                  <X className="h-4 w-4 text-white" />
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-3 rounded-md text-center text-blue-800 text-sm">
              Full support during probation period to help your job sustain
            </div>
          </div>

          {/* Feature 5: Decided Salary Renegotiation */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 flex items-center justify-center">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
                    stroke="#30D5F2"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M24 16V24" stroke="#30D5F2" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <path
                    d="M24 32H24.01"
                    stroke="#30D5F2"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <h2 className="text-xl font-bold text-center mb-2">Decided Salary Renegotiation</h2>
            <p className="text-gray-600 text-center mb-4">Expert techniques to maximize your compensation</p>

            <div className="grid grid-cols-2 gap-2 mb-4">
              <div className="bg-gray-100 p-3 rounded flex justify-center items-center font-medium">HighPaidJobs</div>
              <div className="bg-gray-100 p-3 rounded flex justify-center items-center font-medium">Others</div>
              <div className="bg-gray-100 p-3 rounded flex justify-center items-center">
                <div className="bg-blue-600 rounded-full p-1">
                  <Check className="h-4 w-4 text-white" />
                </div>
              </div>
              <div className="bg-gray-100 p-3 rounded flex justify-center items-center">
                <div className="bg-red-500 rounded-full p-1">
                  <X className="h-4 w-4 text-white" />
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-3 rounded-md text-center text-blue-800 text-sm">
              Average $5-10k increase in offers
            </div>
          </div>

          {/* Feature 6: 100% Money-Back Guarantee */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 flex items-center justify-center">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
                    stroke="#30D5F2"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M24 16V32" stroke="#30D5F2" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16 24H32" stroke="#30D5F2" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <h2 className="text-xl font-bold text-center mb-2">100% Money-Back Guarantee</h2>
            <p className="text-gray-600 text-center mb-4">15 day money back guarantee, a risk-free investment!</p>

            <div className="grid grid-cols-2 gap-2 mb-4">
              <div className="bg-gray-100 p-3 rounded flex justify-center items-center font-medium">HighPaidJobs</div>
              <div className="bg-gray-100 p-3 rounded flex justify-center items-center font-medium">Others</div>
              <div className="bg-gray-100 p-3 rounded flex justify-center items-center">
                <div className="bg-blue-600 rounded-full p-1">
                  <Check className="h-4 w-4 text-white" />
                </div>
              </div>
              <div className="bg-gray-100 p-3 rounded flex justify-center items-center">
                <div className="bg-red-500 rounded-full p-1">
                  <X className="h-4 w-4 text-white" />
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-3 rounded-md text-center text-blue-800 text-sm">
              15-day unconditional guarantee
            </div>
          </div>
        </div>

        <div className="text-center mt-12 mb-6">
          <h2 className="text-2xl font-bold mb-6">Ready to experience the HighPaidJobs difference?</h2>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-full inline-flex items-center transition-all">
            Book Free Consultation
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

