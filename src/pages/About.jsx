import PageHeader from '../components/PageHeader.jsx'
import StorySection from '../components/StorySection.jsx'
import PhilosophySection from '../components/PhilosophySection.jsx'
import WhyChooseUs from '../components/WhyChooseUs.jsx'
import ExperienceSection from '../components/ExperienceSection.jsx'
import CTASection from '../components/CTASection.jsx'

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About Gentry"
        title="A grooming destination, not a quick stop."
        description="Gentry Salon is where technique, patience, and premium product meet — for men who see grooming as part of how they carry themselves."
      />

      <StorySection />
      <PhilosophySection />
      <WhyChooseUs />
      <ExperienceSection />

      <CTASection
        eyebrow="Come See For Yourself"
        title="Experience the Gentry standard."
        description="One visit is usually enough to explain why our clients rebook before they leave the chair."
      />
    </>
  )
}
