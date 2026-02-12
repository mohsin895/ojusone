"use client";

import TalkToExpert from "../talk-to-an-expert";

export default function AboutFooter() {
  return (
    <section className="relative bg-black text-center flex flex-col items-center justify-center py-12 px-6">
      
      {/* Main Heading */}
      <h1 className="font-poppins font-semibold text-[20px] md:text-[72px] mb-4 text-white leading-tight ">
        It’s not Luck!!
      </h1>

      {/* Subheading with green dot */}
        <h2
            className="
    font-poppins font-semibold
    text-[22px] sm:text-[28px] md:text-[60px]
    text-white mb-2
    text-center md:text-left
  "
        >
            But, the right decision at the right time<span className="text-[#6CC727]">.</span>
        </h2>




        {/* Supporting text */}
      <p className="font-poppins font-normal text-[12px] md:text-[32px] text-[#957AE4] mb-6 max-w-3xl">
        Get ready to make a guilt free decision
      </p>

      {/* Call to action button */}
      <TalkToExpert />
    </section>
  );
}
