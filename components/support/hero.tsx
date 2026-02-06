"use client";

import { GoDotFill } from "react-icons/go";

export default function SupportHero() {
  return (
    <section className="max-w-8xl font-opensans mx-auto px-4 py-2 w-full -mt-2">
      <div className="flex flex-col items-center text-center space-y-6">
        
        {/* Full-width heading container */}
        <div className="max-w-7xl">


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
  text-[30px] md:text-6xl  lg:text-6xl xl:text-[72px]
  text-[#CDCDCD]
  font-euclid
  gap-0
  md:gap-4 sm:gap-6
  text-center sm:text-left
">
            <span className="inline-flex items-center gap-1 ">
    <span className="text-[#CDCDCD]">Trust<span className="font-opensans text-[30px] md:text-[96px]">.</span></span>

  </span>

                <span className="inline-flex items-center gap-1 ">
    <span className="text-[#999999]">Transparency<span className="font-opensans text-[30px] md:text-[96px]">.</span></span>

  </span>

                <span className="inline-flex items-center gap-1 ">
    <span className="bg-gradient-to-r from-[#01BCE6] via-[#2669FD] to-[#BD0EFA] bg-clip-text text-transparent font-bold">
      Accountability<span className="font-opensans green-dot text-[30px] md:text-[96px]">.</span>
    </span>
                    {/*<GoDotFill className="text-[10px] md:lg:text-[30px] text-[#6CC727] ml-[-6px] md:ml-[-10px] mt-4 lg:mt-14"/>*/}
  </span>
            </h1>



        </div>

     
      </div>
    </section>
  );
}
