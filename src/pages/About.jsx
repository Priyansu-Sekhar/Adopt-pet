import React from 'react'
import NavBar from '../components/layout/NavBar'
import AboutHero from '../components/sections/AboutHero'
import SupportOurWork from '../components/sections/SupportOurWork'
import LearnMoreSection from '../components/sections/LearnMoreSection'
import ContactUs from '../components/sections/ContactUs'
import Footer from '../components/layout/Footer'

const About = () => {
  return (
    <>
      <NavBar />
      <AboutHero />
      <SupportOurWork />
      <LearnMoreSection />
      <ContactUs />
      <Footer />
    </>
  )
}

export default About