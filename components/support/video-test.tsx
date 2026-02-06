"use client"

import Image from "next/image"
import "./video.css"
import salesCallImg from "../../public/SalesCall-Video.gif"

export default function VideoSection() {
  return (
    <section className="px-6 md:px-12 max-w-7xl mx-auto mb-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start lg:items-center">
        {/* Left Content */}
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">Don&apos;t worry, though!</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-[#52467E]">This won&apos;t be a sales call.</h3>
          <div className="space-y-4 text-base md:text-lg text-muted-foreground">
            <p>
              We won&apos;t pressure you to sign up for our services. We&apos;ll always be upfront with you if Royal
              Monarch isn&apos;t the best fit for your goals.
            </p>
            <p>And the best part about the call? It&apos;s 100% free</p>
          </div>
        </div>

        {/* Right - Video with Neon Border */}
        <div className="flex justify-center lg:justify-start">
          <div className="border-effect !w-[80%] !h-[85%] frame-container">
            <Image
              className="p-2 mt-1"
              src={salesCallImg || ""}
              alt="sales"
              width={400}
              height={500}
            />
            <div className="border1"></div>
            <div className="border2"></div>
            <div className="border3"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
