import Header from "@/components/header"
import Hero from "@/components/hero"
import ValuesGrid from "@/components/values-grid"

import Showcase from "@/components/showcase"
import Footer from "@/components/footer"
import Secure from "@/components/secure"
import FinancialFreedom from "@/components/financialFreedom"
import WhyNeedUs from "@/components/whyNeedUs"
import HelpingYouRealise from "@/components/HelpingYouRealise"
import FloatingCards from "@/components/FloatingCards"
import InvestmentCalculator from "@/components/investment"
import Slider from "@/components/slider"
import Benifits from "@/components/benifits"
import AboutFooter from "@/components/about/footer"



export default function Home() {
  return (
    <main className=" bg-black ">
     
      <Hero />
      <ValuesGrid />
      <Slider/>
      <HelpingYouRealise />
    
      <WhyNeedUs/>
      <FinancialFreedom />
      {/* <FloatingCards /> */}
      <InvestmentCalculator/>
      <Benifits />
      <Secure/>
      <Showcase />
      <AboutFooter />
     
    
    </main>
  )
}
