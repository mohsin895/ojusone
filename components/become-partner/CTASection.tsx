"use client"
import bgImg from "../../public/bgImg.png"
import Image from "next/image"

import * as React from "react"
import SignUpCardModal from "./modal-signUp"
import {useState} from "react";

export default function CTASection() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    city: "",
  })
    const [successMsg, setSuccessMsg] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
    setIsOpen(false) // Close modal after submit
    setFormData({ name: "", email: "", phone: "", city: "" }) // Reset form
  }

  return (
      <section className="relative lg:py-24 px-6 md:px-12 text-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src={bgImg} 
            alt="Background" 
            fill
            className="object-cover opacity-60"
            priority
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-2xl mx-auto space-y-6">
          {/* Main Headline */}
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-foreground text-balance">
            It&apos;s not Luck!! But, the right decision at the right time.
          </h2>

          {/* Subheading */}
          <p className="text-lg md:text-xl font-medium" style={{ color: "#5FE34D" }}>
            Get ready to make a guilt free decision.
          </p>

          {/* Button with Badge */}
          <div className="flex justify-center items-start pt-6">
            <div className="relative">
              {/* Your button with Dialog.Trigger */}
              <SignUpCardModal
                isOpen={isOpen}
                onOpenChange={setIsOpen}
                formData={formData}
                onChange={handleChange}
                onSubmit={handleSubmit}
              />

              {/* The actual trigger button */}
              <button
                onClick={() => setIsOpen(true)}
                className="px-8 py-4 rounded-l-xl rounded-r-md font-bold cursor-pointer text-lg text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #0066ff 0%, #A020FB 100%)",
                  clipPath: "polygon(0 0, 100% 0, calc(100% - 25px) 100%, 0 100%)",
                }}
              >
                Enroll as a Partner
              </button>
            </div>
          </div>
        </div>
      </section>
  )
}