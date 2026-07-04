import Navbar from '../components/landing/Navbar'
import Hero from '../components/landing/Hero'
import LogoCloud from '../components/landing/LogoCloud'
import Problem from '../components/landing/Problem'
import Solution from '../components/landing/Solution'
import Features from '../components/landing/Features'
import ClimateZone from '../components/landing/ClimateZone'
import CarbonCredits from '../components/landing/CarbonCredits'
import Pricing from '../components/landing/Pricing'
import CallToAction from '../components/landing/CallToAction'
import Footer from '../components/landing/Footer'

export default function Landing() {
  return (
    <div className="landing-page">
      <Navbar />
      <Hero />
      <LogoCloud />
      <Problem />
      <Solution />
      <Features />
      <ClimateZone />
      <CarbonCredits />
      <Pricing />
      <CallToAction />
      <Footer />
    </div>
  )
}
