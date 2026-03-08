import SupportWork from '../../assets/support.png'




const SupportOurWork = () => {

  const supportSteps = [
  {
    title: 'Street Rescue',
    desc: 'Emergency pickup and safe transport for animals in need.',
  },
  {
    title: 'Shelter & Nutrition',
    desc: 'Clean shelter, nutrition, and daily care.',
  },
  {
    title: 'Medical Care',
    desc: 'Health checks, treatment, and recovery support.',
  },
  {
    title: 'Adoption Program',
    desc: 'Matching healthy pets with responsible families.',
  },
]

  return (
    <section
      id='support-our-work'
      className='relative w-full overflow-visible bg-linear-to-b from-[#ececf4] to-[#ffffff] px-6 pt-20 -mt-2 pb-20 md:px-10 lg:px-14'
      aria-labelledby='support-title'
      style={{
        // clipPath: 'polygon(0 0, 100% 0, 95% 50%, 100% 100%, 0 100%, 5% 50%)',
      }}
    >
      <div className='mx-auto max-w-7xl mt-15'>
        {/* Heading */}
        <img src={SupportWork} alt="Support Our Work" className='absolute w-40 sm: w-50 md:w-60 lg:w-70 top-5 left-6 sm: left-30 sm: top-14 md:left-40 md:top-5 lg:left-160' />
        <div className='mx-auto mb-10 max-w-3xl text-center px-4 '>
          <p className='inline-flex items-center rounded-full border border-[#795548]/20 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#795548]'>
            How your support works
          </p>
          <h2
            id='support-title'
            className='mt-4 font-["Aladin"] text-2xl sm: text-4xl md:text-4xl lg:text-5xl xl:text-6xl tracking-wide text-[#1c1c1c]'
          >
            Support Our Work
          </h2>
          <p className='mt-4 text-sm sm:text-base md:text-lg text-[#4a4a4a]'>
            Your support helps us rescue abandoned animals, provide treatment, and maintain safe shelters.
          </p>
        </div>

        {/* Timeline */}
        <div className='relative'>
          {/* Steps */}
          <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4'>
            {supportSteps.map((step, index) => (
              <div key={step.title} className='relative flex flex-col items-center text-center'>
                {/* Number (mobile/tablet) */}
                <div className='mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#b5a48a] text-sm font-bold text-white lg:hidden'>
                  {index + 1}
                </div>

                <p className='mb-2 font-["Montserrat"] text-xl font-semibold tracking-wide text-[#1c1c1c]'>
                  {step.title}
                </p>
                <p className='max-w-60 font-["Montserrat"] text-sm font-medium leading-6 text-[#795548] md:text-base'>
                  {step.desc}
                </p>

                {/* Arrow (hidden on last item and on mobile) */}
                {index < supportSteps.length - 1 && (
                  <div className='absolute -right-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-row items-center gap-0'>
                    <svg width='18' height='18' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path d='M9 6l6 6-6 6' stroke='#795548' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                    </svg>
                    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path d='M9 6l6 6-6 6' stroke='#795548' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SupportOurWork
