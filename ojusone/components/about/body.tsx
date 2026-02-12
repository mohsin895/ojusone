"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AboutBody() {
    const pathname = usePathname();

    const tabs = [
        { name: "Terms and Conditions ", href: "/policy/term-of-service" },
        { name: "Copyright", href: "/policy/copyright" },

        { name: "Privacy Policy", href: "/policy/policy-security" },
        { name: "NDNCR Terms & Conditions", href: "/policy/term-condition" },
    ];

    return (
        <section className="relative font-opensans bg-dark text-white  px-6 overflow-hidden border-b border-white/10">
            <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-10">
                <div className="flex items-center gap-2 self-start text-sm md:text-base">
                    {/* Home Icon */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 12l2-2m0 0l7-7 7 7M13 5v6h6m-6 0L5 12v7h5v-5h4v5h5v-7l-7-7z"
                        />
                    </svg>

                    <span>Our Policies</span>
                    <span className="mx-1">&gt;</span>
                    <span className="text-white font-medium">
    {tabs.find((tab) => pathname.startsWith(tab.href))?.name || "Policies"}
  </span>
                </div>


                <hr></hr>
                <h1 className="text-3xl md:text-[42px] font-bold tracking-wide">
          <span className="text-[#957AE4]">
            Our
          </span>{" "}
                    Policies
                </h1>

                {/* Subtitle */}
                <p className="text-gray-400 text-sm md:text-base max-w-2xl">
                    We suggest you go through our policies carefully, and keep visiting for updates.
                </p>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-8 mt-2 relative">
                    {tabs.map((tab) => {
                        const isActive = pathname === tab.href || pathname.startsWith(tab.href);

                        return (
                            <Link
                                key={tab.name}
                                href={tab.href}
                                className={`relative text-sm sm:text-base pb-2 transition-all duration-300
                  ${isActive
                                    ? "text-[#957AE4]"
                                    : "text-gray-400 hover:text-white"
                                }`}
                            >
                                {tab.name}

                                {/* Gradient underline for active tab */}
                                {isActive && (
                                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></span>
                                )}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
