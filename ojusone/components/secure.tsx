"use client";
import Image from "next/image";

export default function Secure() {
    return (
        <section className="relative font-poppins secure w-full max-w-7xl mx-auto bg-black text-white mb-[80px] md:mb-[100px] overflow-hidden">

            {/* --- DESKTOP LAYOUT --- */}
            {/* --- DESKTOP LAYOUT --- */}
<div className="hidden md:block relative h-[905px] w-full">

{/* LEFT IMAGE (fixed width OR 50%) */}
<div
    className="absolute left-0 top-0 h-full w-[64%] bg-center bg-cover bg-no-repeat"
    style={{
        backgroundImage: "url('/secure.png')",
        opacity: 0.8,
    }}
></div>

{/* CENTERED TEXT */}
<div className="absolute inset-0 flex flex-col pt-[150px] items-center justify-center text-center px-10">

    <div className="text-[72px] font-bold  leading-tight font-euclid drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] pb-10">
        <span className="text-[#CDCDCD]">
            Safe<span className="font-opensans text-[96px]">.</span>
        </span>{" "}
        <span className="text-[#999999]">
            Secured<span className="font-opensans text-[96px]">.</span>
        </span>{" "}
        <span className=" bg-gradient-to-r from-[#01BCE6] via-[#2669FD] to-[#BD0EFA] 
            bg-clip-text text-transparent font-bold">
            Private<span className="font-opensans green-dot text-[96px]">.</span>
        </span>
    </div>


</div>

    
<div className="absolute top-1/2 right-0 transform -translate-y-1/2 pr-16 w-1/2">
    <p className="text-[#D9D9D9] text-[16px] pt-[500px] w-[484px] leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
      We ensure that all your personal data and transactions are encrypted and secured,
      so what’s yours remains only yours. We do not share your personal information with anyone,
      <span className="text-[#957AE4]"> and we mean it</span>
      <span className="font-opensans green-dot text-[22px]">.</span>
    </p>
  </div>


</div>


            {/* --- MOBILE LAYOUT (same as before) --- */}
           {/* --- MOBILE LAYOUT --- */}
<div className="md:hidden w-full mt-10">
<h2 className="text-2xl font-bold text-center leading-tight font-euclid drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] pb-4">
        <span className="text-[#CDCDCD]">Safe<span className="font-opensans text-[40px]">.</span></span>{" "}
        <span className="text-[#999999]">Secured<span className="font-opensans text-[40px]">.</span></span>{" "}
        <span className="ml-2 bg-gradient-to-r from-[#01BCE6] via-[#2669FD] to-[#BD0EFA] bg-clip-text text-transparent font-bold">
          Private<span className="font-opensans green-dot text-[40px]">.</span>
        </span>
      </h2>
  <div className="w-full h-[490px] relative rounded-lg overflow-hidden flex items-end">
    {/* Background Image */}
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: "url('/secure.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.8,
      }}
    ></div>

    {/* Text Overlay at Bottom */}
    
  </div>
  <div className="relative w-full text-center px-4 pb-6">
   

      <p className="text-[#D9D9D9] text-sm leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
        We ensure that all your personal data and transactions are encrypted and secured,
        so what’s yours remains only yours. We do not share your information with anyone,
        <span className="text-[#957AE4]"> and we mean it</span>
        <span className="font-opensans green-dot text-[22px]">.</span>
      </p>
    </div>
</div>


        </section>
    );
}
