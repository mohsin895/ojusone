import AboutFooter from "@/components/about/footer";
import CTASection from "@/components/become-partner/CTASection";
import FeaturesSection from "@/components/become-partner/features-section";
import BecomePartnerHeroSection from "@/components/become-partner/hero";
import PersonasSection from "@/components/become-partner/personas-section";



export default function BecomePartner() {
  return (
    <main className=" bg-black">

    <BecomePartnerHeroSection/>
    <FeaturesSection/>
    <PersonasSection/>
    <AboutFooter/>
    {/* <CTASection/> */}
 
    
    </main>
  )
}
