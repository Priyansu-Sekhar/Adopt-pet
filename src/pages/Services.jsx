import React from 'react';
import ServiceSection from '../components/sections/ServiceSection';
import NavBar from '../components/layout/NavBar';
import Footer from '../components/layout/Footer';
import ContactUs from '../components/sections/ContactUs';

const Services = () => {
  return (
    <div>
      <NavBar />
      <ServiceSection />
      <ContactUs/>
      <Footer />
    </div>
  );
};

export default Services;
