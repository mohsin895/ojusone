
import AboutBody from "@/components/about/body"
import AboutFooter from "@/components/about/footer"
import TeamBody from "@/components/team/body"

import WorkHero from "@/components/work/hero"
import AboutHero from "@/components/about/hero";
import Link from "next/link";





export default function termOfCondition() {
    return (
        <main className="min-h-screen bg-black">


            <AboutBody/>
            <section className="relative w-[90%] font-opensans max-w-6xl mx-auto py-20">
                <div className="max-w-6xl mx-auto space-y-8"> {/* Heading */} <h1
                    className="text-3xl md:text-[60px] font-bold text-[#ffffff]"> NDNCR
                    Terms & Conditions </h1> {/* Body Content */}
                    <div className="space-y-6 text-gray-300 leading-relaxed text-[15px] md:text-base"> By accepting these Terms & Conditions on <Link href="/" className="underline text-[#957AE4]">www.ojusone.com</Link>, you hereby authorize Royal
                        Monarch Fintech Private Limited (operating as Ojus One), its authorized representatives,
                        agents, and service partners to contact you and provide information regarding Ojus One
                        mutual fund distribution services, products, financial planning tools, offers, transaction
                        updates, and regulatory communications through any mode of communication, including
                        but not limited to: </div>

                    <p className="mb-4">
                        <ul className="list-disc space-y-3 pl-6">
                            <li className="">Telephone calls (including automated calls and recorded messages) </li>
                            <li>
                                SMS (text messages)
                            </li>
                            <li>Emails</li>
                            <li>WhatsApp messages</li>
                            <li>Letters and physical mail</li>
                            <li>In-app notifications </li>
                            <li>Other electronic or physical communication channels </li>




                        </ul>
                    </p>

                    <p className="mb-4">
                        You further acknowledge and confirm that the provisions relating to unsolicited
                        commercial communications under the National Do Not Call Registry (NDNCR), as
                        prescribed by the Telecom Regulatory Authority of India (TRAI), and any other applicable
                        regulations shall not be applicable to such transactional, service-related, and consented
                        communications initiated by Royal Monarch Fintech Private Limited or Ojus One for the
                        purposes mentioned above.
                    </p>

                    <p className="mb-4">
                        This consent shall remain valid unless explicitly revoked by you through the designated
                        opt-out mechanisms provided on the Ojus One platform, unsubscribe links in
                        communications, or by writing to <a href="mailto:care@royalmonarch.in" className="text-[#957AE4]">
                        care@royalmonarch.in
                    </a>
                        .
                    </p>
                    <p className="text-gray-400 text-sm mt-20">Last Updated: November 2025</p>
                </div>
            </section>

        </main>
    )
}