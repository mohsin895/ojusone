

import AboutFooter from "@/components/about/footer"

import WorkHero from "@/components/work/hero"
import WorkSectionFirst from "@/components/work/section1"
import WorkSectionSecond from "@/components/work/section2"
import WorkSectionThird from "@/components/work/section3"





export default function About() {
  return (
    <main className="min-h-screen bg-black">
     
      <WorkHero />
      
     
      <WorkSectionFirst />
      <WorkSectionSecond />
      <WorkSectionThird/>
     
    
    </main>
  )
}
