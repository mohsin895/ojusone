"use client";

import { useState, useEffect } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

function FAQAccordion({ faqs }: { faqs: any[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [showAll, setShowAll] = useState(false);

  const displayedFaqs = showAll ? faqs : faqs.slice(0, 5);

  return (
    <div className="space-y-1 font-poppins mb-[80px] md:mb-[120px]">
      <div className="divide-y divide-gray-700 border border-gray-700 rounded-lg bg-gray-900/50 backdrop-blur-sm">
        {displayedFaqs.map((faq, index) => (
          <div key={faq.id || index}>
            <button
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-800/50 transition rounded-lg"
            >
              <span className="text-[16px] md:text-[20px] font-bold text-white pr-8 font-opensans">
                {index + 1}. {faq.title}
              </span>

              <ChevronDownIcon
                className={`w-6 h-6 transition-transform flex-shrink-0 ${
                  openIndex === index ? "rotate-180" : ""
                } text-[#957AE4]`}
              />
            </button>

            {openIndex === index && (
              <div className="px-5 pb-5">
                <p className="text-[12px] md:text-[16px] text-[#D9D9D9] font-normal font-opensans leading-relaxed">
                  {faq.designation}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* View All Button */}
      {!showAll && faqs.length > 5 && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setShowAll(true)}
            className="flex items-center gap-2 text-white font-semibold hover:opacity-90 transition"
          >
            View All
            <ChevronDownIcon className="w-5 h-5 text-[#957AE4]" />
          </button>
        </div>
      )}

      {/* View Less Button */}
      {showAll && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => {
              setShowAll(false);
              setOpenIndex(0);
            }}
            className="flex items-center gap-2 text-white font-semibold hover:opacity-90 transition"
          >
            View Less
            <ChevronUpIcon className="w-5 h-5 text-[#957AE4]" />
          </button>
        </div>
      )}
    </div>
  );
}

export default function Showcase() {
  const [faqs, setFaqs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/faq`);
        const json = await res.json();

        if (json.status && Array.isArray(json.data)) {
          setFaqs(json.data);
        } else {
          console.error("Invalid API response:", json);
        }
      } catch (error) {
        console.error("Failed to fetch FAQs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFaqs();
  }, []);

  return (
    <section className="relative bg-black font-poppins text-white py-1 px-1 md:px-6 flex flex-col items-center justify-center">
      <div className="relative w-[90%] max-w-7xl mb-8">
        <h2 className="text-xl md:text-[50px] md:text-[50px] font-semibold  text-white text-center mb-8">
          FAQS
        </h2>

        {loading ? (
          <p className="text-center text-gray-400">Loading FAQs...</p>
        ) : (
          <FAQAccordion faqs={faqs} />
        )}
      </div>
    </section>
  );
}
