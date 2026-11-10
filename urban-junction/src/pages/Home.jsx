import useSeo from '../lib/useSeo'
import Hero from '../components/home/Hero'
import FeaturedCars from '../components/home/FeaturedCars'
import ImportSteps from '../components/home/ImportSteps'
import WhyChoose from '../components/home/WhyChoose'
import AboutTeaser from '../components/home/AboutTeaser'
import Testimonials from '../components/home/Testimonials'
import FAQSection from '../components/home/FAQSection'
import CTABanner from '../components/home/CTABanner'

export default function Home() {
  useSeo({
    title: 'Car Importation & Vehicle Sales in Ghana',
    description:
      'Urban Junction helps customers in Ghana import, buy and drive quality vehicles from international markets with trust, transparency and top-notch service.',
  })

  return (
    <>
      <Hero />
      <FeaturedCars />
      <ImportSteps />
      <WhyChoose />
      <AboutTeaser />
      <Testimonials />
      <FAQSection />
      <CTABanner />
    </>
  )
}
