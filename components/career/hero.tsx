"use client";
import Link from "next/link";

export default function CareerHero() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-2 w-full">
      <div className="flex flex-col items-center text-center space-y-6">
        <div className="max-w-7xl">
          <h1
            className="
              max-w-7xl
              font-bold 
              bg-clip-text 
              bg-gradient-to-r 
              from-purple-400 
              to-blue-400 
              text-balance 
              leading-tight
              text-3xl 
              sm:text-4xl 
              md:text-5xl 
              lg:text-6xl 
              xl:text-7xl
            "
          >
            Clarity.
            <span className="pl-0 md:pl-1 lg:pl-0 xl:pl-[50px] text-[#727272]">
              Confidence.
            </span>
            <span className="pl-0 md:pl-1 lg:pl-0 xl:pl-[50px] text-transparent">
              Control
            </span>
          </h1>
        </div>

        <span className="text-sm md:text-base text-foreground/70 max-w-xl block">
          with the help of best Mutual Fund experts
        </span>

        {/* Button wrapped in Link */}
        <Link href="/open-positions">
          <button className="inline-flex items-center gap-2 bg-[#917EE0] text-white text-xs md:text-sm font-semibold px-4 py-3 rounded-lg rounded-br-3xl hover:bg-gray-200 transition">
            See Open position
          </button>
        </Link>
      </div>
    </section>
  );
}
