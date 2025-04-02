"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQSection() {
  const faqItems = [
    {
      question: "How fast can I get a job?",
      answer: "Job placement only: 8 weeks. Boot camp + placement: 10-12 weeks of training + 4-6 weeks to an offer.",
    },
    {
      question: "What if I don't get hired?",
      answer: "We provide ongoing support and resources until you secure employment.",
    },
    {
      question: "Can I work remotely?",
      answer: "Yes, many of our graduates find remote opportunities depending on their field and employer preferences.",
    },
    {
      question: "Who is this program for?",
      answer:
        "Our program is designed for individuals looking to start or transition into a new career path with practical skills training.",
    },
    {
      question: "Do I need prior experience?",
      answer:
        "No prior experience is necessary. Our curriculum is designed for beginners and those looking to build new skills.",
    },
    {
      question: "What companies hire your graduates?",
      answer:
        "Our graduates have been hired by companies across various industries including tech startups, established corporations, and agencies.",
    },
  ]

  return (
    <div className="container mx-auto py-16 px-4">
      <div className="text-center mb-8">
        <h2 className="text-4xl text-black font-bold mb-2">Got Questions? We've Got Answers</h2>
        <p className="text-gray-600">Find answers to our most frequently asked questions</p>
      </div>

      <Accordion type="single" collapsible defaultValue="item-0" className="space-y-4">
        {faqItems.map((item, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border border-gray-200 rounded-md overflow-hidden px-0"
          >
            <AccordionTrigger className="px-4 py-4 hover:no-underline text-black ">{item.question}</AccordionTrigger>
            <AccordionContent className="px-4 pb-4 text-black pt-0">{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="text-center mt-10">
        <p className="mb-4 text-black">Have more questions? Ask us during your FREE consultation!</p>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 rounded-full">
          Book Free Consultation
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

