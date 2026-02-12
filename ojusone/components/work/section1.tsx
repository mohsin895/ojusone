"use client";

export default function WorkSectionFirst() {
  return (
    <section className="relative w-full bg-black text-gray-200 font-sans py-16 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* ---------- LEFT SIDE ---------- */}
        <div className="flex flex-col justify-center space-y-6 text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white leading-snug">
            Royal Monarch is with you at every stage of your life.
          </h2>

          <p className="text-gray-400 text-sm sm:text-base max-w-md">
            Royal Monarch’s intelligent personal financial engine is
            revolutionizing how people manage, save, and invest. Helping you
            take control of your finances and confidently plan for the future.
          </p>

          <button className="bg-white text-black text-sm font-semibold px-6 py-3 rounded-lg w-fit hover:bg-gray-100 transition">
            Set a goal
          </button>
        </div>

        {/* ---------- RIGHT SIDE (4 IMAGES GRID) ---------- */}
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-neutral-900 rounded-xl p-4 flex justify-center items-center border border-purple-900/40 hover:border-purple-500/60 transition">
            <img src="/group-1.png" alt="Family planning" className="rounded-lg w-full h-auto" />
          </div>
          <div className="bg-neutral-900 rounded-xl p-4 flex justify-center items-center border border-purple-900/40 hover:border-purple-500/60 transition">
            <img src="/group-2.png" alt="Car goal" className="rounded-lg w-full h-auto" />
          </div>
          <div className="bg-neutral-900 rounded-xl p-4 flex justify-center items-center border border-purple-900/40 hover:border-purple-500/60 transition">
            <img src="/group-3.png" alt="Investment" className="rounded-lg w-full h-auto" />
          </div>
          <div className="bg-neutral-900 rounded-xl p-4 flex justify-center items-center border border-purple-900/40 hover:border-purple-500/60 transition">
            <img src="/group-4.png" alt="Retirement" className="rounded-lg w-full h-auto" />
          </div>
        </div>
      </div>

      {/* ---------- SECOND SECTION BELOW ---------- */}
      <div className="max-w-5xl mx-auto mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Text Section */}
        <div className="space-y-4">
          <h3 className="text-2xl sm:text-3xl font-semibold">
            A plan so <span className="text-purple-400">good</span>, you’ll brag it to your friends and family.
          </h3>
        </div>

        {/* Right Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-neutral-900 border border-purple-900/40 hover:border-purple-500/60 rounded-xl p-4 text-sm text-gray-400 transition">
            It’s everything you need to manage your money and achieve your financial goals.
          </div>
          <div className="bg-neutral-900 border border-purple-900/40 hover:border-purple-500/60 rounded-xl p-4 text-sm text-gray-400 transition">
            Our automated insights and tools guide you to make smart financial decisions.
          </div>
          <div className="bg-neutral-900 border border-purple-900/40 hover:border-purple-500/60 rounded-xl p-4 text-sm text-gray-400 transition">
            You’ll always know where you stand and what steps to take next.
          </div>
          <div className="bg-neutral-900 border border-purple-900/40 hover:border-purple-500/60 rounded-xl p-4 text-sm text-gray-400 transition">
            Share your success and inspire others to take control of their future.
          </div>
        </div>
      </div>
    </section>
  );
}
