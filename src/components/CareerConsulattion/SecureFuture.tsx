import { ArrowRight, Rocket } from "lucide-react"
import MaskGroup from "../../../public/Maskgroup (1).webp"
import Image from "next/image"

export default function SecureFuture() {
  return (
    <div className="flex flex-col items-center container mx-auto justify-center bg-blue-600 text-white max-w-6xl p-4 md:p-8 relative rounded-lg">
       <Image src={MaskGroup} alt='Image' className='absolute top-0 right-0 animate-pulse z-10 w-sm' />
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">Secure Your $100K+ Future Today!</h1>

        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Spots are filling FAST! Join our next hiring wave and start your journey to a high-paying tech career.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <a
            href="#"
            className="flex items-center justify-center gap-2 bg-[#eaaa07] hover:bg-[#EAC807] text-black  p-3 rounded-full transition-colors"
          >
            Book a Free 15-Min Call <ArrowRight className="h-4 w-4" />
          </a>

          <a
            href="#"
            className="flex items-center justify-center gap-2 bg-[#587BDE] text-white  p-3 rounded-full border border-blue-400 transition-colors"
          >
            Join Next Webinar <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="pt-8 flex items-center justify-center gap-2 text-sm md:text-base">
          <span> 🚀 HighPaidJobs.us – The Fastest Path to a $100K+ Career!</span>
        </div>
      </div>
      <Image src={MaskGroup} alt='Image' className='absolute bottom-0 left-0 rotate-180 animate-pulse z-10 w-sm' />
    </div>
  )
}


