import { ArrowRight, Rocket } from "lucide-react"

export default function SecureFuture() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-600 text-white p-4 md:p-8">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">Secure Your $100K+ Future Today!</h1>

        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Spots are filling FAST! Join our next hiring wave and start your journey to a high-paying tech career.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <a
            href="#"
            className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-black font-medium py-3 px-6 rounded-full transition-colors"
          >
            Book a Free 15-Min Call <ArrowRight className="h-4 w-4" />
          </a>

          <a
            href="#"
            className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-medium py-3 px-6 rounded-full border border-blue-400 transition-colors"
          >
            Join Next Webinar <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="pt-8 flex items-center justify-center gap-2 text-sm md:text-base">
          <Rocket className="h-5 w-5" />
          <span>HighPaidJobs.us – The Fastest Path to a $100K+ Career!</span>
        </div>
      </div>
    </div>
  )
}


