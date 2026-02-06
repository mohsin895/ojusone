"use client";

export default function WhyNeedUs() {
  return (
    <section className="relative font-poppins bg-black text-white mb-[100px] md:mb-[140px] overflow-hidden font-sans">
      <div className="w-[90%] max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

        {/* ---- Left Side Text ---- */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left  lg:pl-0">
        <p className="text-sm md:text-[24px] font-normal text-transparent mb-6 bg-clip-text bg-gradient-to-r from-[#01BCE6] via-[#2669FD] to-[#BD0EFA]">
        Why do you need us?
      </p>


          <h2 className="text-2xl font-poppins md:text-[50px] font-semibold mb-6 ">
            The{" "}
        
              life
           {" "}
            you want <span className="text-[#6CC727] ml-0 md:ml-[-10px]">.</span>
          </h2>

          <p className="text-[#D9D9D9] font-poppins text-[11px] md:text-[18px] font-medium max-w-md mb-6 leading-relaxed">
            We’re dedicated to helping you live the life you want. We foster
            our relationship by asking candid and sometimes difficult questions.
          </p>
        </div>

        {/* ---- Right Side Image ---- */}
          <div className="flex justify-center lg:justify-end ">
          <img
            src="/total.png"
            alt="Portfolio Performance Preview"
            className="w-[100%] h-auto shadow-lg transition-all duration-300"
          />
          </div>


      </div>
    </section>
  );
}
