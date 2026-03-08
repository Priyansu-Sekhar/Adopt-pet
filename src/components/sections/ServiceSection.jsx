import React, { useState } from "react";
import petfriends from "../../assets/petfriends.png";
import petWash from "../../assets/petwash.png";
import petSitting from "../../assets/petsitting.png";
import petFood from "../../assets/petfood.png";
import petHealth from "../../assets/pethealth.png";
import petcare from "../../assets/petcare.png";

const ServiceSection = () => {
  return (
    <div id="services" className="pb-30">
      {/* Section Header */}
      <section className="bg-[#ffffff] w-full px-4 pt-16 pb-6 text-center sm:px-6 lg:px-18">
        <p className="mb-3 font-['Montserrat'] text-[10px] font-semibold tracking-[0.4em] uppercase text-[#8a7562] sm:text-xs">
          What We Offer
        </p>
        <h2 className="font-['Aladin'] text-4xl tracking-wide text-zinc-900 sm:text-5xl lg:text-6xl">
          Our Services
        </h2>
        <p className="mx-auto mt-4 max-w-2xl font-['Montserrat'] text-sm leading-relaxed text-[#6b5e52] sm:text-base">
          Everything your pet needs — from adoption to nutrition — under one
          roof. Explore our complete range of pet care services.
        </p>
      </section>
      {/* Service Section: flex layout */}
      <section className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-10 md:px-26 pt-10 pb-10">
        {/* Left: Text */}
        <div className="flex-1 order-2 md:order-1 text-center md:text-left">
          <h1 className="font-['Aladin'] text-2xl leading-tight text-[#1c1c1c] sm:text-5xl lg:text-5xl">
            Pet Adoption Help
          </h1>
          <p className="mt-5 max-w-xl font-['Montserrat'] text-base text-[#3c3c3c] sm:text-lg">
            We belive every pet deserves a loving home. Our adoption services connect you with rescued animals looking for families. From matching you with the perfect pet to handelling all paperwork we make the journey smooth and joyful.
          </p>
          <button className="mt-8 px-4 py-2 rounded-full border border-[#6b5e52] bg-[#6b5e52] text-[#ffffff] font-semibold text-xs sm:text-base transition-all duration-300 hover:bg-[#ffffff] hover:text-[#6b5e52] hover:shadow-lg">
            Adopt Now
          </button>
        </div>
        {/* Right: Image */}
        <div className="flex-1 order-1 md:order-2 flex items-center justify-center relative max-w-xs sm:max-w-md md:max-w-lg mx-auto">
          <div className="absolute rounded-full " style={{ height: window.innerWidth < 640 ? "220px" : "500px", width: window.innerWidth < 640 ? "220px" : "500px" }} />
          <img src={petcare} alt="Rescued dog" className="relative z-10 object-contain" style={{ width: window.innerWidth < 640 ? "300px" : "450px", height: window.innerWidth < 640 ? "200px" : "450px" }} />
        </div>
      </section>
      <section className="max-w-screen-xl mx-auto gap-10 flex flex-col md:flex-row items-center justify-between px-4 sm:px-10 md:px-26 pb-10">
        {/* Left: Image */}
        <div className="flex-1 order-1 md:order-1 flex items-center justify-center relative max-w-xs sm:max-w-md md:max-w-lg mx-auto sm: -mb-4">
          <div className="absolute rounded-full " style={{ height: window.innerWidth < 640 ? "180px" : "400px", width: window.innerWidth < 640 ? "180px" : "400px" }} />
          <img src={petHealth} alt="Rescued dog" className="relative z-10 object-contain" style={{ width: window.innerWidth < 640 ? "160px" : "400px", height: window.innerWidth < 640 ? "160px" : "400px" }} />
        </div>
        {/* Right: Text */}
        <div className="flex-1 order-2 md:order-2 text-center md:text-left">
          <h1 className="font-['Aladin'] text-2xl leading-tight text-[#1c1c1c] sm:text-5xl lg:text-5xl">
            Veterinary Support
          </h1>
          <p className="mt-5 max-w-xl font-['Montserrat'] text-base text-[#3c3c3c] sm:text-lg">
            Your pet's health is our priority. We offer regular health checkups, vaccinations, emergency care, and expert medical guidance. Our experienced vets ensure your furry friend stays happy and healthy at every stage of life.
          </p>
          <button className="mt-8 px-4 py-2 rounded-full border border-[#6b5e52] bg-[#6b5e52] text-[#ffffff] font-semibold text-xs sm:text-base transition-all duration-300 hover:bg-[#ffffff] hover:text-[#6b5e52] hover:shadow-lg">
            Book Vet Visit
          </button>
        </div>
      </section>
      <section className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-10 md:px-26 pb-10">
        {/* Left: Text */}
        <div className="flex-1 order-2 md:order-1 text-center md:text-left">
          <h1 className="font-['Aladin'] text-2xl leading-tight text-[#1c1c1c] sm:text-5xl lg:text-5xl">
            Pet Grooming
          </h1>
          <p className="mt-5 max-w-xl font-['Montserrat'] text-base text-[#3c3c3c] sm:text-lg">
            A well-groomed pet is a happy pet. Our professional groomers provide bathing, trimming, nail care, ear cleaning, and styling services. We use gentle, pet-safe products to keep your companion looking their absolute best.
          </p>
          <button className="mt-8 px-4 py-2 rounded-full border border-[#6b5e52] bg-[#6b5e52] text-[#ffffff] font-semibold text-xs sm:text-base transition-all duration-300 hover:bg-[#ffffff] hover:text-[#6b5e52] hover:shadow-lg">
            Book Grooming
          </button>
        </div>
        {/* Right: Image */}
        <div className="flex-1 order-1 md:order-2 flex items-center justify-center relative max-w-xs sm:max-w-md md:max-w-lg mx-auto sm: mb-8">
          <div className="absolute rounded-full " style={{ height: window.innerWidth < 640 ? "250px" : "400px", width: window.innerWidth < 640 ? "250px" : "400px" }} />
          <img src={petWash} alt="Rescued dog" className="relative z-10 object-contain" style={{ width: window.innerWidth < 640 ? "200px" : "400px", height: window.innerWidth < 640 ? "200px" : "400px" }} />
        </div>
      </section>
      <section className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-10 md:px-26 pb-10">
        {/* Left: Image */}
        <div className="flex-1 order-1 md:order-1 flex items-center justify-center relative max-w-xs sm:max-w-md md:max-w-lg mx-auto sm: mb-8">
          <div className="absolute rounded-full" style={{ height: window.innerWidth < 640 ? "250px" : "400px", width: window.innerWidth < 640 ? "250px" : "400px" }} />
          <img src={petSitting} alt="Rescued dog" className="relative z-10 object-contain" style={{ width: window.innerWidth < 640 ? "200px" : "400px", height: window.innerWidth < 640 ? "200px" : "400px" }} />
        </div>
        {/* Right: Text */}
        <div className="gap-10 flex-1 order-2 md:order-2 text-center md:text-left">
          <h1 className="font-['Aladin'] text-2xl leading-tight text-[#1c1c1c] sm:text-5xl lg:text-5xl">
            Training Programs
          </h1>
          <p className="mt-5 max-w-xl font-['Montserrat'] text-base text-[#3c3c3c] sm:text-lg">
            From basic obedience to advanced behavior correction, our certified trainers help your pet become a well-mannered family member. We use positive reinforcement techniques that strengthen the bond between you and your pet.
          </p>
          <button className="mt-8 px-4 py-2 rounded-full border border-[#6b5e52] bg-[#6b5e52] text-[#ffffff] font-semibold text-xs sm:text-base transition-all duration-300 hover:bg-[#ffffff] hover:text-[#6b5e52] hover:shadow-lg">
            Enroll Training
          </button>
        </div>
      </section>
      <section className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-10 md:px-26 pb-10">
        {/* Left: Text */}
        <div className="flex-1 order-2 md:order-1 text-center md:text-left">
          <h1 className="font-['Aladin'] text-2xl leading-tight text-[#1c1c1c] sm:text-5xl lg:text-5xl">
            Pet Boarding
          </h1>
          <p className="mt-5 max-w-xl font-['Montserrat'] text-base text-[#3c3c3c] sm:text-lg">
            Going on a trip? Leave your pet with us. Our boarding facility offers spacious rooms, daily walks, playtime, nutritious meals, and 24/7 supervision. Your pet will feel right at home while you are away.
          </p>
          <button className="mt-8 px-4 py-2 rounded-full border border-[#6b5e52] bg-[#6b5e52] text-[#ffffff] font-semibold text-xs sm:text-base transition-all duration-300 hover:bg-[#ffffff] hover:text-[#6b5e52] hover:shadow-lg">
            Book Boarding
          </button>
        </div>
        {/* Right: Image */}
        <div className="flex-1 order-1 md:order-2 flex items-center justify-center relative max-w-xs sm: max-w-md md:max-w-lg mx-auto">
          <div className="absolute rounded-full" style={{ height: window.innerWidth < 640 ? "220px" : "500px", width: window.innerWidth < 640 ? "220px" : "500px" }} />
          <img src={petfriends} alt="Rescued dog" className="relative z-10 object-contain" style={{ width: window.innerWidth < 640 ? "300px" : "500px", height: window.innerWidth < 640 ? "200px" : "500px" }} />
        </div>
      </section>
      <section className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-10 md:px-26 pb-10">
        {/* Left: Image */}
        <div className="flex-1 order-1 md:order-1 flex items-center justify-center relative max-w-xs sm:max-w-md md:max-w-lg mx-auto sm: mb-8">
          <div className="absolute rounded-full" style={{ height: window.innerWidth < 640 ? "250px" : "400px", width: window.innerWidth < 640 ? "250px" : "400px" }} />
          <img src={petFood} alt="Rescued dog" className="relative z-10 object-contain" style={{ width: window.innerWidth < 640 ? "200px" : "300px", height: window.innerWidth < 640 ? "200px" : "300px" }} />
        </div>
        {/* Right: Text */}
        <div className="gap-10 flex-1 order-2 md:order-2 text-center md:text-left">
          <h1 className="font-['Aladin'] text-2xl leading-tight text-[#1c1c1c] sm:text-5xl lg:text-5xl">
            Nutrition Guidance
          </h1>
          <p className="mt-5 max-w-xl font-['Montserrat'] text-base text-[#3c3c3c] sm:text-lg">
            Every pet has unique dietary needs. Our nutrition experts create personalized meal plans based on breed, age, weight, and health conditions. We help you choose the right food so your pet stays energetic and strong.
          </p>
            <button className="mt-8 px-4 py-2 rounded-full border border-[#6b5e52] bg-[#6b5e52] text-[#ffffff] font-semibold text-xs sm:text-base transition-all duration-300 hover:bg-[#ffffff] hover:text-[#6b5e52] hover:shadow-lg">
            Get Nutrition Plan
          </button>
        </div>
      </section>
    </div>
  );
};

export default ServiceSection;
