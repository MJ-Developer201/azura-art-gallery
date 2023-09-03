import React from 'react'
import HeroSection from '../components/HeroSection'
import SecondSection from '../components/SecondSection'
import ThirdSection from '../components/ThirdSection'
import FirstBreak from '../components/FirstBreak'
import SecondBreak from '../components/SecondBreak'
import FourthSection from '../components/FourthSection'
import Footer from '../components/Footer'
import BreakPadding from '../components/breakPadding'

export default function LandingPage() {
  return (
    <>
      <div>
        <HeroSection />
        <FirstBreak />
        <SecondSection />
        <ThirdSection />
        <SecondBreak />
        <FourthSection />
        <Footer />
      </div>
    </>
  )
}
