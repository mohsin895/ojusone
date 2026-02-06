"use client"

import type React from "react"
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react"
import SignUpCard from "./sign-up"
import { GoDotFill } from "react-icons/go"


export default function BecomePartnerHeroSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
  })
    const [successMsg, setSuccessMsg] = useState("");
  const { toast } = useToast();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL
      const response = await fetch(`${API_BASE_URL}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        // toast({
        //   title: "✅ Success!",
        //   description: "thank you from submitted successfully.",
        //   duration: 3000,
        // });

          setSuccessMsg(
              " Thank you for your interest in partnering with us! \n" +
              " Your details have been received, and our team will contact you soon to share the next steps. \n" +
              "We look forward to building a successful collaboration together."

          );
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          city: "",
        })
      } else {
        // Handle Laravel validation errors
        if (data.errors) {
          toast({
            title: "❌ Error",
            description:  "Something went wrong.",
            variant: "destructive",
            duration: 3000,
          });
        } else {
          toast({
            title: "❌ Error",
            description:  "Something went wrong.",
            variant: "destructive",
            duration: 3000,
          });
        }
      
      }
    } catch (error) {
      toast({
        title: "❌ Error",
        description:  "Something went wrong.",
        variant: "destructive",
        duration: 3000,
      });
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <section className="px-1 md:px-12 w-[90%] md:max-w-7xl mx-auto mb-[100px] md:mb-[140px]">
      {/* Header */}
      <div className="pt-2 text-center -mt-2 lg:-mt-2 ">

          <h1 className="
  flex flex-col sm:flex-row flex-wrap items-center justify-center
  max-w-8xl
  font-bold
  mt-6 lg:mt-2
  bg-clip-text
  bg-gradient-to-r
  from-purple-400
  to-blue-400
  text-balance
leading-tight
  text-[30px] md:text-6xl xl:text-7xl lg:text-[72px]
  text-[#CDCDCD]
  font-euclid
  gap-0
  md:gap-4 sm:gap-6
  text-center sm:text-left
">
            <span className="inline-flex items-center gap-1 ml-3">
    <span className="text-[#CDCDCD]">Unite<span className="font-opensans  md:text-[96px]">.</span></span>

  </span>

              <span className="inline-flex items-center gap-1 ml-3">
    <span className="text-[#999999]">Grow<span className="font-opensans  md:text-[96px]">.</span></span>

  </span>

              <span className="inline-flex items-center gap-1 ml-3">
    <span className="bg-gradient-to-r from-[#01BCE6] via-[#2669FD] to-[#BD0EFA] bg-clip-text text-transparent font-bold">
      Succeed<span className="font-opensans green-dot  md:text-[96px]">.</span>
    </span>
                  {/*<GoDotFill className="text-[10px] md:lg:text-[30px] text-[#6CC727] ml-[-6px] md:ml-[-10px] mt-4 lg:mt-14"/>*/}
  </span>
          </h1>

      </div>

      {/* Main Content */}
      <div className="flex font-poppins flex-col mt-[30px] md:mt-0  lg:flex-row items-center justify-between gap-12   py-4 md:py-16 max-w-7xl mx-auto">
        {/* Left Section */}
       {/* Left Section */}
<div className="flex-1 text-center md:text-left ">
  <h2 
    className="font-semibold ojus-white-color mb-4 md:mb-[10px] text-[20px] md:text-[48px]"
    
  >
    Partner with India&apos;s growing wealth-tech platform
  </h2>

  <div className="space-y-2 mb-4 md:mb-0 ">
    <p

      className=" font-opensans ojus-pater-color mb-4 md:mb-[10px] text-[12px] md:text-[24px]"
    >
      Earn over ₹ 1 Lac/month
    </p>

    <p

  className="text-[13px] md:text-[14px]  font-normal font-opensans ojus-white-color"
>
  Register as a partner and gain limitless opportunities for referring customers
</p>

  </div>
</div>


        {/* Right Section - Sign Up Form */}
        <div className="flex-1 w-full font-opensans">
          <SignUpCard formData={formData} onChange={handleChange} onSubmit={handleSubmit} />
            {successMsg && (
                <p className="text-[#957AE4] text-sm mt-4 text-center" style={{ whiteSpace: 'pre-line' }}>
                    {successMsg}
                </p>
            )}
        </div>

      </div>
    </section>
  )
}
