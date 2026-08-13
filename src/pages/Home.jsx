import Hero from '../components/Hero.jsx'
import IntroSection from '../components/IntroSection.jsx'
import FeaturedServices from '../components/FeaturedServices.jsx'
import WhyChooseUs from '../components/WhyChooseUs.jsx'
import ExperienceSection from '../components/ExperienceSection.jsx'
import CTASection from '../components/CTASection.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <IntroSection />
      <FeaturedServices />
      <WhyChooseUs />
      <ExperienceSection />
      <CTASection />
    </>
  )
}
