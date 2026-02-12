"use client";

export default function WorkSectionThird() {
  return (
    <section className="relative w-full bg-black text-gray-200 font-sans py-20 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        {/* ----- HEADING ----- */}
        <h2 className="text-2xl sm:text-3xl font-semibold leading-snug">
          First time creating a{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
            Financial Plan?
          </span>
        </h2>

        {/* ----- FAQ CARDS ----- */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {/* Card 1 */}
          <div className="bg-neutral-900 border border-purple-900/40 hover:border-purple-500/60 rounded-xl p-6 transition text-left">
            <h3 className="text-lg font-semibold text-white mb-3">
              What does Royal Monarch do?
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Royal Monarch will help you build and maintain holistic financial plans designed
              around your goals and needs. Our planners create strategies that align with your
              lifestyle and long-term vision.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-neutral-900 border border-purple-900/40 hover:border-purple-500/60 rounded-xl p-6 transition text-left">
            <h3 className="text-lg font-semibold text-white mb-3">
              What can you help me with?
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Our planners cover all areas — from budgeting to tax planning to investments.
              Whether you’re saving for a house, paying off debt, or planning retirement,
              we’ll design a custom roadmap to reach your goals.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-neutral-900 border border-purple-900/40 hover:border-purple-500/60 rounded-xl p-6 transition text-left">
            <h3 className="text-lg font-semibold text-white mb-3">
              Are we on the same side?
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Yes. Every financial planner at Royal Monarch is a fiduciary,
              which means we are legally required to act in your best interest.
              Your success is our success — that’s our promise.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-neutral-900 border border-purple-900/40 hover:border-purple-500/60 rounded-xl p-6 transition text-left">
            <h3 className="text-lg font-semibold text-white mb-3">How does it work?</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              You’ll start with a free call to meet your Royal Monarch planner.
              Together, you’ll assess your financial situation, define goals,
              and create an action plan. You’ll always know exactly what’s next.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-neutral-900 border border-purple-900/40 hover:border-purple-500/60 rounded-xl p-6 transition text-left sm:col-span-2 lg:col-span-3 max-w-md mx-auto">
            <h3 className="text-lg font-semibold text-white mb-3">
              Is my information safe?
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Absolutely. We use bank-level data security, trusted 256-bit SSL
              encryption, and privacy-first policies. Your information is
              never shared or sold — ever.
            </p>
          </div>
        </div>

        {/* ----- CONTACT INFO ----- */}
        <div className="pt-12 text-sm text-gray-400 space-y-2">
          <p>Still have questions?</p>
          <p>
            Contact us at{" "}
            <a
              href="mailto:careers@royalmonarch.in"
              className="text-purple-400 hover:underline"
            >
              careers@royalmonarch.in
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
