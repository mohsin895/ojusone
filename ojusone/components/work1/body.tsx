"use client";
import { useState } from "react";

export default function WorkBody() {
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

      </div>
    </section>
  );
}
