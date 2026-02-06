

import AboutBody from "@/components/about/body"
import AboutFooter from "@/components/about/footer"
import ApproachBody from "@/components/approach/body"


import WorkHero from "@/components/work/hero"
import WorkBody from "@/components/work1/body"
import WorkIntegrity from "@/components/work1/integrity"





export default function Team() {
  return (
    <main className="min-h-screen bg-black">
     
      <WorkHero />
      <AboutBody/>
  
      <WorkIntegrity/>
      
      <AboutFooter />
    
    </main>
  )
}
