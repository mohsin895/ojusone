"use client";

export default function CareerBody() {
  return (
    <section className="relative w-full bg-black text-white font-sans py-20 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto space-y-20">
        {/* ------------------ THE PERKS ------------------ */}
        <div>
          <h2 className="text-3xl font-bold mb-12 text-purple-400">The Perks</h2>

          {/* Perks Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Everyone has a positive voice.",
                desc: "Innovation doesn’t limit ideas. We have a transparent, open, and connected culture.",
              },
              {
                title: "We’re Positive. You’ll love it!",
                desc: "Our working spirit is lively. We care about your creativity, comfort, and collaboration.",
              },
              {
                title: "We’re Flexible!",
                desc: "We allow flexible work time and spaces so you can balance life and work seamlessly.",
              },
              {
                title: "Make your move.",
                desc: "Our team is inspired by big ideas — where your next move helps shape the future of culture.",
              },
              {
                title: "All Inclusive.",
                desc: "We support fairness and inclusion. Our culture celebrates diversity and individuality.",
              },
              {
                title: "We’ve Got You Covered.",
                desc: "Our benefits include healthcare, great perks, and financial support for your goals.",
              },
            ].map((perk, index) => (
              <div
                key={index}
                className="bg-[#141432] border border-purple-500/20 rounded-xl p-6 shadow-[0_0_25px_rgba(138,43,226,0.2)] hover:shadow-[0_0_25px_rgba(138,43,226,0.4)] transition-all"
              >
                <h3 className="text-lg font-semibold mb-3 text-white">{perk.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ------------------ OPEN POSITIONS ------------------ */}
        <div className="space-y-8">
          <div className="border-b border-purple-500/40 w-12 mb-2"></div>
          <h2 className="text-3xl font-bold text-white">Open Positions</h2>
          <p className="text-gray-400 text-sm">
            Focus on doing your best work, we’ll take care of the rest.
          </p>

          {/* Job Select Row */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-8">
            <div className="text-gray-300 text-base font-medium w-32">Marketing</div>
            <div className="flex items-center w-full sm:w-[400px] bg-[#141432] border border-purple-500/20 rounded-md overflow-hidden">
              <input
                type="text"
                value="Marketing Executive"
                readOnly
                className="flex-1 bg-transparent text-gray-200 text-sm px-4 py-3 outline-none"
              />
              <button className="bg-gradient-to-r from-purple-500 to-blue-500 px-5 py-3 text-sm font-semibold hover:opacity-90 transition">
                More
              </button>
            </div>
          </div>

          {/* Placeholder for another position */}
          <div className="pt-10 text-gray-500 text-sm">Dealing</div>
        </div>

        {/* ------------------ FOOTER TEXT ------------------ */}
        <footer className="text-[11px] text-gray-500 leading-relaxed pt-12 border-t border-purple-500/10">
          Royal Monarch is proud to be an equal opportunity workplace. We actively support an inclusive culture and strive to eliminate
          barriers that prevent full participation of our employees. We encourage people of all backgrounds to apply and be part of our
          mission-driven team.
        </footer>
      </div>

   
    </section>
  );
}
