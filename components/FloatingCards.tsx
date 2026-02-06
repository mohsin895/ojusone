"use client";

export default function FloatingCards() {
  return (
    <div className="relative bg-black py-2">
      <div className="max-w-7xl mx-auto relative h-[300px]">

        {/* --- Card 1: left to center --- */}
        <div className="absolute top-12 left-0 md:left-0 lg:left-1/4 bg-gray-300 w-full sm md:w-92 lg:w-110 h-24 shadow-2xl rounded-xl transform transition-all duration-500">
          {/* Avatar Marker */}
        </div>

        {/* --- Card 2: center to right --- */}
        <div className="absolute top-40 right-0 md:right-0 lg:right-1/4 bg-gray-300 w-full md:w-72 lg:w-110 h-24 shadow-2xl rounded-xl transform transition-all duration-500">
          {/* Avatar Marker */}
        </div>

      </div>
    </div>
  );
}
