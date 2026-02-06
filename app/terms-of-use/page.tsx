"use client"

import { useEffect, useState } from "react";

import { fetchApi } from "@/lib/api";

export default function TermsOfUse() {
  const [setting, setSetting] = useState<any>(null);

  useEffect(() => {
    async function getSettings() {
      const res = await fetchApi("setting");
      if (res?.data) setSetting(res.data);
    }
    getSettings();
  }, []);
  return (

    <main className="min-h-screen bg-black">
    <div className=" text-gray-200 py-6 px-4 sm:px-6 lg:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="overflow-hidden  ">
          {/* Header */}
          <div className=" text-white px-8 py-8 text-center rounded-t-2xl">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-3 tracking-wide">
              Terms of Use
            </h1>
           
          </div>

          {/* Content */}
          <div className="px-8 py-12 space-y-12" >
            {/* Section */}
            <div
  className="relative flex-1 overflow-hidden"
  dangerouslySetInnerHTML={{ __html: setting?.term_condition || "" }}
/>

            
          </div>

         
        </div>
      </div>
    </div>
    </main>
  );
}
