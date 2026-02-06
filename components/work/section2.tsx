"use client";

import { ArrowDown } from "lucide-react";

export default function WorkSectionSecond() {
  return (
    <section className="relative w-full bg-black text-gray-200 font-sans py-20 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        {/* ----- TOP TEXT ----- */}
        <h2 className="text-2xl sm:text-3xl font-semibold leading-snug">
          Royal Monarch answers your questions and helps you{" "}
          <span className="text-purple-400">take action</span> to reach your goals.
        </h2>

        {/* ----- ARROW ICON ----- */}
        <div className="flex justify-center py-2">
          <ArrowDown className="text-purple-400 w-8 h-8 animate-bounce" />
        </div>

        {/* ----- SUBTEXT ----- */}
        <p className="text-gray-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
          You have questions.{" "}
          <span className="text-purple-400 font-medium">Our financial planners have answers.</span>{" "}
          With the right guidance and knowledge, you’ll be empowered to take charge of your financial
          future with confidence.
        </p>
      </div>

      {/* ----- CARDS SECTION ----- */}
      <div className="max-w-5xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* CARD 1 */}
        <div className="bg-neutral-900 border border-purple-900/40 hover:border-purple-500/60 rounded-2xl p-6 transition relative overflow-hidden">
          <h3 className="text-lg font-semibold text-white mb-4">
            How much can I afford to spend on a car while paying down my student loans?
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Balancing multiple financial goals can be challenging. Our planners help you evaluate your
            priorities, assess your debt, and determine how much you can spend responsibly on major
            purchases—without compromising your long-term security.
          </p>

          {/* Subtle background glow effect */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_40%,rgba(130,87,230,0.15),transparent_60%)] pointer-events-none" />
        </div>

        {/* CARD 2 */}
        <div className="bg-neutral-900 border border-purple-900/40 hover:border-purple-500/60 rounded-2xl p-6 transition relative overflow-hidden">
          <h3 className="text-lg font-semibold text-white mb-4">
            How much can I spend on a house if I also want to have kids?
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Planning for big life milestones takes insight and precision. Our experts help you weigh
            mortgage options, childcare costs, and future savings goals so you can make informed,
            confident decisions that fit your lifestyle and vision for the future.
          </p>

          {/* Subtle background glow effect */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_60%,rgba(100,120,255,0.15),transparent_60%)] pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
