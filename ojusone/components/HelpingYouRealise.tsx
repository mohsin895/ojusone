"use client";

import { Check } from "lucide-react";
import TalkToExpert from "./talk-to-an-expert";

export default function HelpingYouRealise() {
  return (
    <section className="relative font-poppins bg-black text-white mb-[100px] md:mb-[140px] overflow-hidden ">
      <div className="w-[90%] max-w-7xl mx-auto flex items-center gap-10 lg:gap-10">

        {/* IMAGE */}

        <div className="relative w-full flex justify-center lg:justify-start pl-0  hidden lg:flex">
          <img
            src="/share_all.png"
            alt="Portfolio Performance Preview"
            className="w-[100%] h-auto shadow-lg transition-all duration-300"
          />
        </div>

        {/* TEXT CONTENT */}
          <div className="flex flex-col item-center md:items-start text-center md:text-left max-w-lg mx-auto">

          <p className=" text-[18px] md:text-[24px] text-transparent bg-clip-text bg-gradient-to-r from-[#01BCE6] via-[#2669FD] to-[#BD0EFA] mb-2 tracking-wide font-normal">
          Start investing with us
        </p>


          <h2 className=" text-[25px] sm:text-3xl md:text-[50px] text-[#FFFFFF] font-semibold leading-tight mb-6">
            Make your money
         <br></br>
              work for you<span className="text-[25px] sm:text-3xl md:text-[50px] text-[#6CC727] font-semibold">.</span>
           
          </h2>
              <p className="lg:hidden text-[#D9D9D9] mb-4 leading-relaxed text-[10px] sm:text-xs md:text-[18px] font-medium">
            Answer a few questions, and our experts will create a personalised mutual fund
            portfolio tailored to your goals.
          </p>

          <div className="relative flex justify-center lg:justify-start pl-0 lg:pl-30 block lg:hidden mt-10 mb-10">
          <img
            src="/share_all.png"
            alt="Portfolio Performance Preview"
            className="w-[100%] h-auto shadow-lg transition-all duration-300 "
          />
        </div>

         <p className="hidden sm:block text-[#D9D9D9] mb-4 font-normal leading-relaxed text-[10px] sm:text-xs md:text-[18px]">
          Answer a few questions, and our experts will create a personalised mutual fund
          portfolio tailored to your goals.
        </p>

              <ul className="space-y-2 text-gray-300 text-[10px] sm:text-xs md:text-[16px] mb-10 text-left">
                  {[
                      "Everything at one place",
                      "Goal-based investment",
                      "3500+ schemes available to choose from",
                      "Multiple asset classes: Equity, Debt, Gold ETFs, ELSS and more",
                      "Go global: Invest in funds that invest in foreign companies",
                  ].map((item, i) => (
                      <li key={i} className="flex items-start">
                          <Check className="w-4 h-4 md:w-5 md:h-5 mt-0.5 flex-shrink-0 text-blue-400" />
                          <span className="ml-2">{item}</span>
                      </li>
                  ))}
              </ul>


          <TalkToExpert />
        </div>

        
      </div>
    </section>
  );
}
