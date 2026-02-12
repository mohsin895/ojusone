"use client";
import { useState } from "react";

export default function AboutBody() {
  const [activeTab, setActiveTab] = useState("Our Firm");

  const tabs = ["Our Firm", "Our Culture", "Our Approach", "Our Team"];

  const tabContent: Record<string, JSX.Element> = {
    "Our Firm": (
      <p className="text-gray-400 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
        The current situation inspired our entrepreneurial vision of developing innovative
        solutions to address the demand and supply imbalance of quality financial planning.
      </p>
    ),
    "Our Culture": (
      <p className="text-gray-400 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
        At Royal Monarch, we foster creativity, collaboration, and integrity — building
        a culture that values growth and forward-thinking innovation.
      </p>
    ),
    "Our Approach": (
      <p className="text-gray-400 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
        Our approach combines strategic logic with unique value-driven innovation to ensure
        long-term financial sustainability and client success.
      </p>
    ),
    "Our Team": (
      <p className="text-gray-400 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
        Our team consists of passionate professionals dedicated to achieving excellence
        through expertise and collaboration.
      </p>
    ),
  };

  return (
    <section className="relative bg-black text-white py-1 px-2 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-8">
      

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-6 mt-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-sm sm:text-base transition-all duration-300 ${
                activeTab === tab
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 font-semibold"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="mt-6">{tabContent[activeTab]}</div>

        {/* Venn Diagram */}
        <div className="relative mt-12 w-[350px] h-[350px] sm:w-[420px] sm:h-[420px]">
          {/* Circles */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[220px] h-[220px] border border-purple-400 rounded-full opacity-80"></div>
          <div className="absolute bottom-0 left-0 w-[220px] h-[220px] border border-blue-400 rounded-full opacity-80"></div>
          <div className="absolute bottom-0 right-0 w-[220px] h-[220px] border border-pink-400 rounded-full opacity-80"></div>

          {/* Labels */}
          <div className="absolute top-[30px] left-1/2 -translate-x-1/2 text-sm font-medium text-purple-300">
            Vision
          </div>
          <div className="absolute bottom-[50px] left-[40px] text-sm font-medium text-blue-300">
            Mission
          </div>
          <div className="absolute bottom-[50px] right-[40px] text-sm font-medium text-pink-300">
            Promise
          </div>

          {/* Center Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[100px] h-[100px] rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-sm font-bold">
              Success
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
