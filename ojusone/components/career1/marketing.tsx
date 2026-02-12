"use client";

export default function CareerMarketing() {
  return (
    <section className="relative w-full min-h-screen bg-black text-gray-200 font-sans py-16 px-6 overflow-hidden">
      <div className="max-w-3xl mx-auto grid grid-cols-1 lg:grid-cols-[20%_80%] gap-8">
        {/* ---------------- LEFT SIDEBAR ---------------- */}
        <aside className="flex flex-col items-start space-y-6">
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="cursor-pointer hover:text-purple-400 transition">
              Royal Choices
            </li>
            <li className="cursor-pointer hover:text-purple-400 transition">
              Careers
            </li>
          </ul>

          <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-5 py-2 text-sm rounded-md hover:opacity-90 transition shadow-lg">
            Apply this position
          </button>
        </aside>

        {/* ---------------- MAIN CONTENT ---------------- */}
        <div className="relative w-full space-y-10">
          {/* Job Details */}
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
              Marketing Executive
            </h1>

            <h2 className="text-lg font-semibold text-purple-400 mb-3">
              Job description
            </h2>

            <p className="text-sm text-gray-300 leading-relaxed mb-8">
              At Royal Monarch, creativity brings brands to life. Our company is
              growing fast, and we’re looking for passionate marketing
              professionals to join our mission-driven team.
              <br />
              <br />
              You’ll be working closely with our brand team to develop
              data-driven strategies and lead marketing campaigns across digital
              and social channels. You’ll collaborate with design, content, and
              analytics teams to deliver measurable growth.
              <br />
              <br />
              This is your chance to work with a dynamic group of experts, where
              your ideas will shape the next era of our marketing efforts.
            </p>

            <h2 className="text-lg font-semibold text-purple-400 mb-3">
              Required Qualification / Experience
            </h2>

            <ul className="list-disc list-inside text-sm text-gray-300 leading-relaxed">
              <li>Bachelor’s degree in Marketing, Business, or related field.</li>
              <li>1–3 years of experience in marketing, branding, or advertising.</li>
              <li>Strong understanding of digital marketing tools & analytics.</li>
              <li>Excellent communication skills.</li>
              <li>Creative, self-motivated, and detail-oriented professional.</li>
            </ul>
          </div>

          {/* Floating Avatar */}
         

          {/* Form Section */}
          <div className="bg-[#141432] rounded-2xl shadow-xl p-6 sm:p-8 mt-20 max-w-lg">
            <h3 className="text-base font-semibold text-white mb-5">
              Apply for this position
            </h3>

            <form className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="bg-transparent border border-gray-700 rounded-md px-4 py-2 text-sm text-gray-300 focus:outline-none focus:border-purple-400 placeholder-gray-400"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="bg-transparent border border-gray-700 rounded-md px-4 py-2 text-sm text-gray-300 focus:outline-none focus:border-purple-400 placeholder-gray-400"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="bg-transparent border border-gray-700 rounded-md px-4 py-2 text-sm text-gray-300 focus:outline-none focus:border-purple-400 placeholder-gray-400"
              />
              <textarea
                placeholder="Message"
                rows="3"
                className="bg-transparent border border-gray-700 rounded-md px-4 py-2 text-sm text-gray-300 focus:outline-none focus:border-purple-400 placeholder-gray-400"
              ></textarea>

              <button
                type="submit"
                className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold py-2 rounded-md hover:opacity-90 transition"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
