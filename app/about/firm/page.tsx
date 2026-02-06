

import AboutBody from "@/components/about/body"
import AboutFooter from "@/components/about/footer"

import WorkHero from "@/components/work/hero"


export default function Team() {
  return (
    <main className="min-h-screen bg-black">
     
      <WorkHero />
      <AboutBody/>
  
      <AboutFooter />
    
    </main>
  )
}
