import AboutBody from "@/components/about/body"
import AboutFooter from "@/components/about/footer"

import AboutHero from "@/components/about/hero";

export default function Copyright() {
    return (
        <main className="min-h-screen bg-black text-white font-poppins">


            <AboutBody />

            <section className="relative font-poppins w-[90%] max-w-6xl mx-auto py-20">
                <h1 className="text-3xl md:text-[60px] font-bold text-[#FFFFFF] mb-10">
                    Copyright & Disclaimer Notice
                </h1>

                {/* COPYRIGHT SECTION */}
                <div className="space-y-10 text-gray-300 leading-7">

                    <div>
                        <h2 className="text-[18px] font-semibold text-[#957AE4] mb-3">
                            Copyright Statement
                        </h2>
                        <p className="text-[16px] text-[#ffffff]">
                            All content on this website www.ojusone.com, including but not limited to
                            text, graphics, logos, images, audio clips, software, mutual fund
                            information, financial calculators, and platform tools, is protected under
                            the Copyright Act, 1957 and related intellectual property laws of India.
                            All rights are reserved by Royal Monarch Fintech Private Limited.
                        </p>
                        <p className="mt-3 text-[16px] text-[#ffffff]">
                            No part of this website may be reproduced, stored in a retrieval system,
                            or transmitted in any form or by any means without prior written
                            permission from Royal Monarch Fintech Private Limited.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-[18px] font-semibold text-[#957AE4] mb-3">
                            Third-Party Trademarks
                        </h2>
                        <p>
                            Certain names, logos, and marks appearing on this website may be
                            trademarks of their respective owners. Java and all Java-based
                            trademarks and logos are trademarks or registered trademarks of Oracle
                            and/or its affiliates.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-[18px] font-semibold text-[#957AE4] mb-3">
                            Disclaimer: Use of Information
                        </h2>
                        <p>
                            The information provided on www.ojusone.com is for general informational
                            and educational purposes only. Any action taken by users to purchase,
                            redeem, switch, or hold mutual fund units is done entirely at their own
                            risk.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-[18px] font-semibold text-[#957AE4] mb-3">
                            No Investment Advice
                        </h2>
                        <p>
                            The content provided on this platform is not investment advice, tax
                            advice, or financial recommendations. Users should consult qualified
                            professionals before making investment decisions.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-[18px] font-semibold text-[#957AE4] mb-3">
                            Accuracy and Reliability
                        </h2>
                        <p>
                            While information is obtained from reliable sources, Royal Monarch Fintech
                            Private Limited makes no guarantee regarding its accuracy, completeness,
                            or timeliness.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-[18px] font-semibold text-[#957AE4] mb-3">
                            Limitation of Liability
                        </h2>
                        <p>
                            Royal Monarch Fintech Private Limited shall not be liable for any direct,
                            indirect, incidental, special, or consequential damages resulting from the
                            use of the Ojus One platform.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-[18px] font-semibold text-[#957AE4] mb-3">
                            Mutual Fund Risk Disclosure
                        </h2>
                        <p>
                            Mutual fund investments are subject to market risks. Read all scheme-related
                            documents carefully. Past performance is not indicative of future results.
                        </p>
                    </div>

                </div>

            </section>


        </main>
    )
}
