import React from 'react'
import aboutdog from '../../assets/about.png'

const AboutHero = () => {
  return (
    <section className='relative w-full overflow-hidden bg-linear-to-b from-[#ffffff] to-[#ececf4]'>
      {/* background decor */}
      <div className='pointer-events-none absolute -left-16 top-10 h-44 w-44 rounded-full bg-[#d7d7e2]/70 blur-sm' />
      <div className='pointer-events-none absolute right-6 top-20 h-20 w-20 rounded-full bg-[#d7d7e2]/80 blur-sm' />
      <div className='pointer-events-none absolute bottom-10 left-10 h-24 w-24 rounded-full bg-[#d7d7e2]/75 blur-md' />
      <div className='pointer-events-none absolute bottom-2 -right-15 h-56 w-56 rounded-full bg-[#d7d7e2]/55 blur-md' />

      <div className='relative z-10 mx-auto grid min-h-[82vh] w-full max-w-7xl grid-cols-1 items-center gap-10 px-6 py-12 md:grid-cols-2 md:px-10 lg:px-14'>
        {/* left content */}
        <div className='order-2 text-center md:order-1 md:text-left'>
          <p className='mb-3 inline-block rounded-full bg-[#795548]/10 px-4 py-1 text-sm font-semibold tracking-wide text-[#795548]'>
            About Our Mission
          </p>

          <h1 className='font-["Aladin"] text-4xl leading-tight text-[#1c1c1c] sm:text-5xl lg:text-6xl'>
            Helping is easy.
            <br />
            <span className='text-[#795548]'>Will you help them survive?</span>
          </h1>

          <p className='mt-5 max-w-xl font-["Montserrat"] text-base text-[#3c3c3c] sm:text-lg'>
            Every rescue starts with one kind decision. We care for abandoned pets,
            provide treatment, and help them find loving homes. Your support gives
            them safety, food, and a second chance.
          </p>

          <div className='mt-7 flex flex-wrap items-center justify-center gap-3 md:justify-start'>
            <a
              href='#support-our-work'
              className='rounded-xl bg-[#795548] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#684539]'
            >
              Support Our Work
            </a>
            <a
              href='#learn-more'
              className='rounded-xl border border-[#795548]/40 bg-white px-6 py-3 text-sm font-semibold text-[#795548] transition hover:bg-[#795548]/5'
            >
              Learn More
            </a>
          </div>
        </div>

        {/* right image */}
        <div className='order-1 relative mx-auto flex w-full max-w-md items-center justify-center md:order-2 md:max-w-lg'>
          <div className='absolute h-75 w-75 rounded-full bg-[#cbcbd8]/65 blur-2xl sm:h-90 sm:w-90' />
          <img
            src={aboutdog}
            alt='Rescued dog'
            className='relative z-10 w-full object-contain drop-shadow-2xl'
          />
        </div>
      </div>
    </section>
  )
}

export default AboutHero