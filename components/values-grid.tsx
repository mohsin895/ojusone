"use client";

import { useState } from "react";
import MobilePortfolioAnimation from "./mobileAnimation/MobilePortfolioAnimation";
import { MultiStepFormModal } from "./multiStepForm/multi-step-form";
import { Dot } from "lucide-react";
import TalkToExpert from "./talk-to-an-expert";

export default function ReviewSection() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <section className="relative font-poppins bg-black text-white mb-[100px] md:mb-[140px] overflow-hidden font-sans">
    <div className="w-[90%] max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-1 items-center">


          {/* --- Text Content --- */}
          <div className="flex flex-col  items-center lg:items-start text-center lg:text-left space-y-6 px-4 lg:px-0">
          <p className=" text:sm md:text-[24px] font-normal bg-gradient-to-r from-[#01BCE6] via-[#2669FD] to-[#BD0EFA] bg-clip-text text-transparent">
              Already have Mutual Funds?
            </p>



          <h2 className="text-2xl  md:text-[50px] font-semibold text-[#FFFFFF] leading-tight ">
            Get it reviewed by <br />

            experts<span className="text-[30px] md:text-[50px] text-[#6CC727] rounded-2xl">.</span>

          </h2>

          <p className="text-[#D9D9D9] text-xs sm:text-sm md:text-[18px] font-medium max-w-md">
            We’ll help you discover smarter ways to earn higher returns
            with the same funds.
          </p>

          <TalkToExpert/>
        </div>

        {/* --- Image --- */}
        <div className="">
          {/* <img
            src="/image-5.png"
            alt="Portfolio Performance Preview"
            className="w-[180px] sm:w-[220px] md:w-[260px] lg:w-[300px] h-auto rounded-2xl shadow-lg transition-all duration-300"
          /> */}
          <MobilePortfolioAnimation />
        </div>
        <MultiStepFormModal open={isOpen} onOpenChange={setIsOpen} />
      </div>
    </section>
  );
}
