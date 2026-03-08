import React from "react";

const ServiceHeader = () => {
  return (
    <section className="bg-linear-to-b from-[#ffffff] px-4 pt-16 pb-8 text-center sm:px-6 lg:px-8">
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
  );
};

export default ServiceHeader;
