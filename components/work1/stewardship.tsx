"use client";

export default function WorkIntegrity() {
  return (
    <section className="w-full bg-black text-white py-16 px-6">
      <div className="max-w-3xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* ---- Left Text Section ---- */}
        <div className="space-y-6 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
            Integrity
          </h2>

          <p className="text-gray-400 text-[10px] sm:text-[10px] leading-relaxed max-w-lg mx-auto lg:mx-0">
            We define integrity as the consistency of our actions, values,
            methods, expectations, outcomes, and measurements.
            <br />
            Leadership demands responsibility.
          </p>

          <p className="text-gray-400 text-[10px] sm:text-[10px] italic leading-relaxed max-w-lg mx-auto lg:mx-0">
            “Whoever is careless with the truth in small matters cannot be trusted with
            important matters.”
          </p>

          <p className="text-gray-500 text-xs sm:text-sm font-semibold">
            – Albert Einstein <br />
            <span className="text-gray-600 font-normal">[1879 – 1955]</span>
          </p>
        </div>

        {/* ---- Right Image ---- */}
        <div className="flex justify-center lg:justify-end">
          <img
            src="/integrity.png" // Replace with your actual image path
            alt="Business meeting handshake"
            className="w-[300px] sm:w-[380px] md:w-[420px] lg:w-[460px] h-auto rounded-2xl object-cover shadow-[0_0_25px_rgba(100,100,255,0.15)]"
          />
        </div>
      </div>
    </section>
  );
}
