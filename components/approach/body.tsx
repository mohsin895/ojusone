"use client";

export default function ApproachBody() {
  return (
    <section className="relative w-full bg-black text-white font-sans py-20 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center space-y-12">
        <p className="text-gray-300 leading-relaxed text-lg">
          When we talk about the ways wealth and financial stability define an individual, this has little to do
          with a balance sheet and everything to do with a balanced life. Real wealth is the kind that money can’t
          measure and death can’t take away. It comes from more than financial planning; it requires a comprehensive
          approach with a multi‑integrated team structure and creativity paired with careful dedication.
        </p>

        <p className="text-gray-300 leading-relaxed text-lg">
          As your trusted advisors, we are fully dedicated to helping you pursue the right purpose for your wealth
          and designing a legacy for your family. We help average people identify strategies to overcome uncertainty,
          experience freedom, prevent investment strategies, and an unwavering passion for serving you.
        </p>

        <h2 className="text-3xl md:text-4xl font-semibold text-blue-400 mt-10">
          “Live your life by design, not by default.”
        </h2>

        <div className="space-y-6 max-w-3xl mx-auto mt-16">
          <h3 className="text-2xl font-semibold">The values that inspires us!</h3>
          <p className="text-gray-300 leading-relaxed">
            Part of what makes our firm unique is our dedication to delivering trust, transparency, and accountability.
            These three words serve as sources of inspiration for everyone on our staff — and they drive what we seek
            to accomplish for our clients daily.
          </p>
        </div>

        {/* Venn Diagram */}
        <div className="relative w-full flex justify-center mt-20">
          <div className="relative w-[500px] h-[500px]">
            {/* Circles (Accurate Overlaps) */}
            <div className="absolute w-80 h-80 rounded-full border border-[#3399FF] opacity-60 top-4 left-1/2 -translate-x-1/2" />
            <div className="absolute w-80 h-80 rounded-full border border-[#B84DFF] opacity-60 top-32 left-6" />
            <div className="absolute w-80 h-80 rounded-full border border-[#4DFF9F] opacity-60 top-32 right-6" />

            {/* Icons + Labels */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 text-blue-300 font-semibold text-lg flex flex-col items-center gap-1">
              <span>Trust</span>
            </div>

            <div className="absolute bottom-10 left-8 text-purple-300 font-semibold text-lg flex flex-col items-center gap-1">
              <span>Accountability</span>
            </div>

            <div className="absolute bottom-10 right-8 text-green-300 font-semibold text-lg flex flex-col items-center gap-1">
              <span>Transparency</span>
            </div>

            {/* Center Success Section (Exact style from image) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-gradient-to-b from-[#3E00FF] to-[#7500B8] flex items-center justify-center shadow-[0_0_40px_rgba(141,80,255,0.45)] border border-white/20">
              <div className="text-white font-bold text-xl">Success</div>
            </div>
          </div>
        </div>
      </div>
    </section>
); }