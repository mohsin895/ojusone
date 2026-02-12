"use client";
import { GoDotFill } from "react-icons/go";

import { Dot } from "lucide-react";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto mb-[100px] md:mb-[140px] w-full -mt-2">
      <div className="flex flex-col items-center text-center space-y-6 ">

        {/* Full-width heading container */}
        <div className="max-w-9xl flex ">
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
                {/* Clarity */}
                <span className="inline-flex items-center gap-0 md:gap-1">
    <span className="text-[#CDCDCD]">
      Clarity<span className="font-opensans  md:text-[96px]">.</span>
    </span>
  </span>

                {/* Confidence */}
                <span className="inline-flex items-center gap-0 md:gap-1">
    <span className="text-[#999999]">
      Confidence<span className="font-opensans  md:text-[96px]">.</span>
    </span>
  </span>

                {/* Control */}
                <span className="inline-flex items-center gap-0 md:gap-1">
    <span className="bg-gradient-to-r from-[#01BCE6] via-[#2669FD] to-[#BD0EFA] bg-clip-text text-transparent font-bold">
      Control<span className="font-opensans green-dot  md:text-[96px]">.</span>
    </span>
  </span>
            </h1>


        </div>

        {/* Subtext */}
        <span className="text-sm font-poppins md:text-[22px] text-[#CCCCCC] font-medium max-w-xl block">
          with the help of best Mutual Fund experts
        </span>
      </div>
    </section>
  );
}
