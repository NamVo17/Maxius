"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { ContactSection } from "@/components/sections/contact-section"
import { useScroll } from "@/hooks/use-scroll"
import { useAnimations } from "@/hooks/use-animations"

export default function MaxiusLanding() {
  const { isScrolled, activeSection } = useScroll()
  const { heroAnimated } = useAnimations()

  return (
    <div className="min-h-screen bg-background">
      <Header isScrolled={isScrolled} activeSection={activeSection} />

      <main>
        <HeroSection heroAnimated={heroAnimated} />
        <AboutSection />
        <FeaturesSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}
