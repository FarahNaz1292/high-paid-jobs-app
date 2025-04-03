"use client"

import { useEffect, useState } from "react"

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 2,
    minutes: 57,
    seconds: 36,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        // Calculate new time
        let newSeconds = prevTime.seconds - 1
        let newMinutes = prevTime.minutes
        let newHours = prevTime.hours
        let newDays = prevTime.days

        if (newSeconds < 0) {
          newSeconds = 59
          newMinutes -= 1
        }

        if (newMinutes < 0) {
          newMinutes = 59
          newHours -= 1
        }

        if (newHours < 0) {
          newHours = 23
          newDays -= 1
        }

        // Stop the timer if we reach zero
        if (newDays === 0 && newHours === 0 && newMinutes === 0 && newSeconds === 0) {
          clearInterval(timer)
        }

        return {
          days: newDays,
          hours: newHours,
          minutes: newMinutes,
          seconds: newSeconds,
        }
      })
    }, 1000)

    // Cleanup on unmount
    return () => clearInterval(timer)
  }, [])

  // Format numbers to always have two digits
  const formatNumber = (num: number) => {
    return num.toString().padStart(2, "0")
  }

  return (
    <div className="flex flex-col items-center justify-center mx-auto m-8 bg-background">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">Door Closes for FREE Career Auditing</h1>

      <div className="flex gap-4">
        <div className="bg-red-600 text-white w-24 h-24 flex flex-col items-center justify-center rounded-md">
          <span className="text-5xl font-bold">{formatNumber(timeLeft.days)}</span>
          <span className="text-sm">Days</span>
        </div>

        <div className="bg-red-600 text-white w-24 h-24 flex flex-col items-center justify-center rounded-md">
          <span className="text-5xl font-bold">{formatNumber(timeLeft.hours)}</span>
          <span className="text-sm">Hours</span>
        </div>

        <div className="bg-red-600 text-white w-24 h-24 flex flex-col items-center justify-center rounded-md">
          <span className="text-5xl font-bold">{formatNumber(timeLeft.minutes)}</span>
          <span className="text-sm">Minutes</span>
        </div>

        <div className="bg-red-600 text-white w-24 h-24 flex flex-col items-center justify-center rounded-md">
          <span className="text-5xl font-bold">{formatNumber(timeLeft.seconds)}</span>
          <span className="text-sm">Seconds</span>
        </div>
      </div>
    </div>
  )
}

