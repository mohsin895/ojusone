"use client";

export default function FinancialFreedom() {
  return (
    <section className="relative bg-black font-poppins  text-white mb-[100px] md:mb-[140px] overflow-hidden font-sans">
      <div className="w-[90%] max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        
        {/* --- Left Side Image --- */}
        <div className="relative flex justify-center lg:justify-start hidden lg:flex">
          <img
            src="/financial.png"
            alt="Financial Growth Illustration"
            className="w-[100%] h-auto rounded-2xl shadow-lg transition-all duration-300"
          />
        </div>

        {/* --- Right Side Text --- */}
        <div className="text-center lg:text-left space-y-4 px-2 lg:pr-12">
          <h2 className="text-xl sm:text-2xl md:text-[50px] lg:text-[50px] font-extrabold leading-snug">
            Helping you realise <br />
         
              the possibilities <span className="text-[#6CC727] ml-0 md:ml-[-10px]">.</span>
           
          </h2>

          <p className="text-[#D9D9D9] max-w-md mx-auto lg:mx-0 text-xs sm:text-sm md:text-[18px] leading-relaxed">
            Though achieving financial freedom is not that difficult, you need someone to take you there.
          </p>
        </div>

         {/* --- Left Side Image --- */}
         <div className="relative flex justify-center lg:justify-start  block lg:hidden mt-2 mb-4">
          <img
            src="/financial.png"
            alt="Financial Growth Illustration"
            className="w-[100%] h-auto rounded-2xl shadow-lg transition-all duration-300"
          />
        </div>

      </div>
    </section>
  );
}