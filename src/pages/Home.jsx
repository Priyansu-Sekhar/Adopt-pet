import React from 'react'
import NavBar from '../components/layout/NavBar'
import Hero from '../components/sections/Hero'
import HowItWork from '../components/sections/HowItWork'
import WaitingAdoption from '../components/sections/WaitingAdoption'
import WhatWeOffer from '../components/sections/WhatWeOffer'
import Support from '../components/sections/Support'
import AboutHero from '../components/sections/AboutHero'
import SupportOurWork from '../components/sections/SupportOurWork'
import LearnMoreSection from '../components/sections/LearnMoreSection'
import ServiceSection from '../components/sections/ServiceSection'
import Contact from '../components/sections/ContactUs'
import Footer from '../components/layout/Footer'
const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <HowItWork />
      <WaitingAdoption />
      <WhatWeOffer />
      <Support />
      {/* <AboutHero />
      <SupportOurWork />
      <LearnMoreSection /> */}
      {/* <ServiceSection /> */}
      <Contact />
      <Footer />
      
    </div>
  )
}

export default Home