"use client";

import Image from "next/image";
import "./video.css";
import salesCallImg from "../../public/SalesCall-Video.gif";

export default function VideoSection() {
    return (
        <section className="px-6 md:px-12 max-w-7xl font-poppins mx-auto mb-24 lg:mb-[220px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left Content (Text) - Only large screens */}
                <div className="flex-1 space-y-6 text-center  font-poppins  lg:flex-col lg:text-left lg:items-start">
                    {/* Title */}
                    <h2 className="text-[24px] md:text-[36px] font-poppins font-normal text-white">
                        Don&apos;t worry, though!
                    </h2>

                    {/* Subtitle */}
                    <h3 className="text-[20px] md:text-[48px] font-poppins font-medium text-purple-400">
                        This won&apos;t be a <br /> sales call.
                    </h3>

                    {/* Content */}
                    <div className="space-y-4 ">
                        <p className="text-sm md:text-[18px] hidden lg:flex font-normal text-white leading-6 md:leading-7">
                            We won't pressure you to sign up for our services. We'll always be upfront with you if Ojus One isn't the best fit for your goals.
                        </p>
                        <p className="text-md md:text-[20px] hidden lg:flex font-medium text-purple-400">
                            And the best part about the call? It’s 100% free
                        </p>
                    </div>
                </div>

                {/* Right - Video with Tri-color Border */}
                <div className="flex justify-center lg:justify-start">
                    <div
                        className="relative p-[2px] rounded-xl"
                        style={{ background: "linear-gradient(90deg, #00C6FF, #7B2FF7, #FF5F6D)" }}
                    >
                        <div className="bg-black rounded-xl w-full h-full overflow-hidden flex justify-center">
                            <img
                                src="/SalesCall-Video.gif"
                                alt="sales"
                                className="w-full h-auto object-cover rounded-lg max-w-[400px] md:max-w-[400px] md:h-[445px]"
                            />
                        </div>
                    </div>
                </div>

                {/* Mobile & Tablet Text - Only show on smaller screens */}
                <div className="flex-1 space-y-6 text-center block lg:hidden mt-6">


                    {/* Content */}
                    <div className="space-y-4">
                        <p className="text-sm md:text-[18px] font-normal text-white leading-6 md:leading-7">
                            We won't pressure you to sign up for our services. We'll always be upfront with you if Ojus One isn't the best fit for your goals.
                        </p>
                        <p className="text-md md:text-[20px] font-medium text-purple-400">
                            And the best part about the call? It’s 100% free
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
