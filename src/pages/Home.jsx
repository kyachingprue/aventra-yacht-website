import Seo from '../components/Seo'
import Hero from '../components/home/Hero'
import WhyChooseUs from '../components/home/WhyChooseUs'
import PopularDestinations from '../components/home/PopularDestinations'
import FeaturedYacht from '../components/home/FeaturedYacht'
import { CtaBanner, StatsBar } from '../components/home/CtaAndStats'
import TopExperiences from '../components/home/TopExperiences'
import OurFleet from '../components/home/OurFleet'
import Testimonials from '../components/home/Testimonials'
import { BlogPreview, FinalCta } from '../components/home/BlogPreviewAndFinalCta'

export default function Home() {
  return (
    <>
      <Seo title="Luxury Yacht Charters" description="Explore the world in absolute luxury. Premium yacht charters for unforgettable journeys across the world's most beautiful destinations." />
      <Hero />
      <WhyChooseUs />
      <PopularDestinations />
      <FeaturedYacht />
      <CtaBanner />
      <TopExperiences />
      <OurFleet />
      <Testimonials />
      <BlogPreview />
      <StatsBar />
      <FinalCta />
    </>
  )
}
