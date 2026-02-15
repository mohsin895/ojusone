import AboutBody from "@/components/about/body"
import AboutFooter from "@/components/about/footer"

import AboutHero from "@/components/about/hero";

export default function Copyright() {
    return (
        <main className="min-h-screen bg-black text-white font-opensans">


            <AboutBody />

            <section className="relative font-opensans w-[90%] max-w-6xl mx-auto py-20">
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
                            All content on this website www.ojusone.com, including but not limited to text, graphics,
                            logos, images, audio clips, software, mutual fund information, financial calculators, and
                            platform tools, is protected under the Copyright Act, 1957 and related intellectual property
                            laws of India. All rights are reserved by Royal Monarch Fintech Private Limited, the owner
                            and operator of Ojus One.
                        </p>
                        <p className="mt-3 text-[16px] text-[#ffffff]">
                            No part of this website may be reproduced, stored in a retrieval system, or transmitted in
                            any form or by any means—electronic, mechanical, photocopying, recording, or
                            otherwise—without prior written permission from Royal Monarch Fintech Private Limited.
                            This includes translations into any language, adaptations, or derivative works.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-[18px] font-semibold text-[#957AE4] mb-3">
                            Third-Party Trademarks
                        </h2>
                        <p>
                            Certain names, logos, and marks appearing on this website may be trademarks of their
                            respective owners. Java and all Java-based trademarks and logos are trademarks or
                            registered trademarks of Oracle and/or its affiliates. Other product and company names
                            mentioned herein may be the trademarks of their respective owners.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-[18px] font-semibold text-[#957AE4] mb-3">
                            Disclaimer: Use of Information
                        </h2>
                        <p className="mb-4">
                        The information provided on www.ojusone.com and any associated or interlinked
                        websites, platforms, or mobile applications is for general informational and educational
                        purposes only, and relates to mutual fund distribution services offered through Ojus One.
                        </p>
                        <p className="mb-4">
                        Any action taken by users to purchase, redeem, switch, or hold mutual fund units based on
                        information available on this platform is done entirely at their own risk, discretion, and
                        after independent evaluation.
                        </p>
                        <p className="mb-4">
                        Royal Monarch Fintech Private Limited and Ojus One shall not be held liable for any
                        financial loss, legal consequences, or other damages resulting from such actions,
                        including but not limited to market risks, transaction failures, or regulatory changes.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-[18px] font-semibold text-[#957AE4] mb-3">
                            No Investment Advice
                        </h2>
                        <p className="mb-4">
                        The content provided on www.ojusone.com, including mutual fund scheme details,
                        performance data, calculators, and financial planning tools, is not to be construed as
                        investment advice, financial recommendation, tax advice, or solicitation to engage in any
                        specific financial transaction.
                        </p>
                        <p className="mb-4">
                        Ojus One facilitates execution-only mutual fund transactions and does not provide
                        personalized investment advice unless specifically offered through SEBI-registered
                        investment advisors associated with Royal Monarch Fintech Private Limited.
                        </p>
                        <p className="mb-4">
                        Users are advised to read all scheme-related documents carefully, assess their own risk
                        profile, investment objectives, and financial situation, and consult qualified financial
                        advisors, tax consultants, or other professionals before making any investment decisions.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-[18px] font-semibold text-[#957AE4] mb-3">
                            Accuracy and Reliability
                        </h2>
                        <p className="mb-4">
                        While the information displayed on the Ojus One platform is obtained from asset
                        management companies (AMCs), registrars and transfer agents (RTAs), KYC registration
                        agencies (KRAs), and other regulated sources believed to be reliable, Royal Monarch
                        Fintech Private Limited makes no representation or warranty of any kind, express or
                        implied, as to its accuracy, completeness, timeliness, or suitability for any particular
                        purpose.
                        </p>
                        <p className="mb-4">
                        Users should independently verify all information, including NAVs, returns, scheme
                        details, and transaction status, directly from the respective AMCs or official sources
                        before acting upon it.
                        </p>
                        <p className="mb-4">
                        Royal Monarch Fintech Private Limited and Ojus One disclaim any responsibility for errors,
                        omissions, delays, or interruptions in data transmission, whether due to technical issues,
                        third-party failures, or any other cause.
                        </p>

                    </div>

                    <div>
                        <h2 className="text-[18px] font-semibold text-[#957AE4] mb-3">
                            Limitation of Liability
                        </h2>
                        <p className="mb-4">
                        Royal Monarch Fintech Private Limited, its directors, officers, employees, affiliates, and
                        service providers shall not be liable for any direct, indirect, incidental, special,
                        consequential, or punitive damages arising out of or in connection with the use of or
                        inability to use the Ojus One platform, even if advised of the possibility of such damages.
                        </p>
                        <p className="mb-4">
                        This includes, without limitation, damages for loss of profits, data, business interruption,
                        or any other commercial damages or losses resulting from mutual fund investments
                        facilitated through the platform.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-[18px] font-semibold text-[#957AE4] mb-3">
                            Mutual Fund Risk Disclosure
                        </h2>


                        <p className="mb-4">
                        Mutual fund investments are subject to market risks. Read all scheme related documents
                        carefully. Past performance is not indicative of future returns. Units may go up or down in
                        value. Different types of mutual funds are subject to varying degrees of risk, and there is no
                        guarantee against loss.
                            </p>
                        <p className="mb-4">
                        Investors should understand the risks associated with equity funds, debt funds, hybrid
                        funds, and other categories before investing through Ojus One.
                        </p>

                        <p>Last Updated: November 2025 </p>
                    </div>

                </div>

            </section>


        </main>
    )
}
