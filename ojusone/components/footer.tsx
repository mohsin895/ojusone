"use client";

import { useEffect, useState } from "react";
import { fetchApi } from "@/lib/api";

export default function Footer() {
  const [setting, setSetting] = useState<any>(null);

  useEffect(() => {
    async function getSettings() {
      const res = await fetchApi("setting");
      if (res?.data) setSetting(res.data);
    }
    getSettings();
  }, []);

  const currentYear = new Date().getFullYear(); // automatic year

  return (
    <footer className="bg-gradient-to-b font-opensans from-[#0b0b2a] to-[#1b0939] text-white font-sans text-[11px]">
      <div className="w-full max-w-[1575px] mx-auto px-4 md:px-10 py-12">

        {/* --- Ticker --- */}
        
        <div className=" hidden md:block overflow-hidden whitespace-nowrap py-2 mb-6">
          <div className="relative flex items-center">
            <span className="font-normal uppercase text-[#FFFFFF] mr-4">
              Beware of fake groups impersonating Royal Monarch OR OJUS ONE:
            </span>
            <div className="relative flex-1 overflow-hidden">
              <div className="flex animate-marquee hover:animation-play-state-paused">
                <span className="mr-8 text-[#FFFFFF]">
                  Please be vigilant against fake apps, messages, or any communication claiming to be from us. Always verify through our official channels. If you encounter anything suspicious, please report it immediately via email to care@royalmonarch.in. Stay safe and protect your information.
                </span>
                <span className="mr-8 text-[#FFFFFF]">
                  Please be vigilant against fake apps, messages, or any communication claiming to be from us. Always verify through our official channels. If you encounter anything suspicious, please report it immediately via email to care@royalmonarch.in. Stay safe and protect your information.
                </span>
              </div>
            </div>
          </div>
        </div>


          <div className="block md:hidden py-2 mb-6">
              <div className="flex flex-col space-y-2 text-white">

    <span className="font-normal text-[11px] uppercase">
      Beware of fake groups impersonating Royal Monarch OR OJUS ONE:
    </span>

                  <span className="text-white">
      Please be vigilant against fake apps, messages, or any communication claiming to be from us.
      Always verify through our official channels. If you encounter anything suspicious, please report
      it immediately via email to care@royalmonarch.in. Stay safe and protect your information.
    </span>

              </div>
          </div>


          {/* --- Footer content from admin panel --- */}
        <div
          className="space-y-4 text-[#ffff] font-opensans leading-relaxed"
         
          dangerouslySetInnerHTML={{ __html: setting?.footer_content || "" }}
        />

        {/* --- Copyright --- */}

       
      </div>

        <hr className=" p-2 pt-2"></hr>
        <div className="text-center pb-10 ">
            Built with ❤️ in India | Copyright © {currentYear}, Ojus One By Royal Monarch Fintech Private Limited
        </div>
      <style jsx>{`
  /* Marquee animation */
  .animate-marquee {
    display: inline-flex;
    animation: marquee 90s linear infinite; /* <-- slower */
  }

  @keyframes marquee {
    0% { transform: translateX(0%); }
    100% { transform: translateX(-100%); }
  }

  .hover\\:animation-play-state-paused:hover {
    animation-play-state: paused;
  }
`}</style>

    </footer>
  );
}
