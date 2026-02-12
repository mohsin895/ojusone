"use client";

export default function TeamBody() {
  const team = [
    { name: "Rahul Patel", title: "Marketing Lead" },
    { name: "Rahul Patel", title: "Tech Lead" },
    { name: "Rahul Patel", title: "Operations Lead" },
    { name: "Rahul Patel", title: "HR Lead" },
    { name: "Rahul Patel", title: "Finance Lead" },
  ];

  return (
    <section className="relative w-full bg-black text-white py-20 px-6 mb-[100px] md:mb-[140px] font-sans overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-10">
        {/* --- Heading --- */}
        <div className="max-w-3xl">
          <p className="text-gray-400 text-sm sm:text-base mb-3">
            We’ve been in the business for years and have built an excellent
            professional network.
          </p>
          <p className="text-gray-400 text-sm sm:text-base mb-6">
            Our team is composed of experts from various fields — marketing,
            technology, operations, and finance. Together, we’re reinventing how
            people think about financial planning.
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center leading-snug">
            Faces of people truly passionate <br />
            <span className="text-blue-400">
              about reinventing financial planning.
            </span>
          </h2>
        </div>

        {/* --- Team Grid --- */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-10">
          {team.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-end bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-xl shadow-[0_0_30px_rgba(147,51,234,0.4)] h-[220px] sm:h-[250px] md:h-[280px] w-[140px] sm:w-[180px] md:w-[200px] text-center p-4 transition-transform hover:scale-105"
            >
              <div className="mt-auto">
                <h3 className="font-semibold text-white text-sm sm:text-base">
                  {member.name}
                </h3>
                <p className="text-xs text-gray-200">{member.title}</p>
              </div>
            </div>
          ))}

          {/* --- Last Card (Join Us) --- */}
          <div className="flex flex-col items-center justify-center bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-xl shadow-[0_0_30px_rgba(147,51,234,0.4)] h-[220px] sm:h-[250px] md:h-[280px] w-[140px] sm:w-[180px] md:w-[200px] text-center p-4">
            <h3 className="font-semibold text-white text-sm sm:text-base mb-3">
              Be part of <br /> something new.
            </h3>
            <button className="bg-[#00E676] text-black font-semibold text-xs px-4 py-2 rounded-md hover:bg-[#00c968] transition">
              View Roles
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
