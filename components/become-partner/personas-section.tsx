import type React from "react"
import FinanceEnthusisast from "../../public/finance.png"
import InternetInfluencer from "../../public/internet.png"
import PeoplePerson from "../../public/people.png"
import SelfStarter from "../../public/self4.png"
import Image from "next/image"

interface Persona {
  id: string
  title: string
  description: string
  icon: any
}

export default function PersonasSection() {
  const personas: Persona[] = [
    {
      id: "finance",
      title: "Finance Enthusiast",
      description:
        "Your interest lies in finance and the stock market. You take great pleasure in guiding others with investment options.",
      icon: FinanceEnthusisast,
    },
    {
      id: "influencer",
      title: "Internet Influencer",
      description:
        "Social media is your playground. You have a good number of followers who easily consume all the content you share.",
      icon:InternetInfluencer ,
    },
    {
      id: "people",
      title: "People Person",
      description:
        "People love you! And you love people! So, by default, marketing comes to you, naturally. You can sell, and do it rather well.",
      icon:PeoplePerson,
    },
    {
      id: "starter",
      title: "Self Starter",
      description:
        "\"I'm my own boss\", that's your mantra. You just want to earn and grow. The desire is powered by your dedication. And that takes you places!",
      icon: SelfStarter,
    },
  ]

  return (
    <section className=" font-poppins  md:px-12 w-[90%] max-w-7xl mx-auto mb-[220px]">
      
      {/* MAIN TITLE */}
      <h1  className="text-[30px] md:text-[50px] font-semibold ojus-white-color  text-center mb-6 md:mb-16">
        People who partner with us
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">

        {/* Left Column */}
        <div className="space-y-0 border-0 md:border-r border-gray-700">
          {personas.slice(0, 2).map((persona, index) => (
            <div key={persona.id} className={`p-4 space-y-4 ${index === 1 ? " border-t border-gray-700" : ""}`}>
              <div className="h-14 w-14">
                <Image src={persona.icon || ""} alt={persona.title} width={70} height={70} />
              </div>

              {/* TILE HEADING */}
              <h3  className="text-[18px] ojus-white-color font-medium ">
                {persona.title}
              </h3>

              {/* CONTENT */}
              <p  className="text-[16px] font-normal ojus-content-color leading-relaxed">
                {persona.description}
              </p>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="space-y-0">
          {personas.slice(2).map((persona, index) => (
            <div key={persona.id} className={`p-4 space-y-4 ${index === 1 ? "border-t border-gray-700" : ""}`}>
              <div className="h-14 w-14">
                <Image src={persona.icon || ""} alt={persona.title} width={70} height={70} />
              </div>

              {/* TILE HEADING */}
              <h3 className="text-[18px] font-medium ojus-white-color">
                      {persona.title}
                    </h3>

              {/* CONTENT */}
              <p  className="text-[16px] font-normal ojus-content-color leading-relaxed">
                {persona.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
