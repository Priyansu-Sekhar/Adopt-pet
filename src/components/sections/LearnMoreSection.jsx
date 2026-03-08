import { HeartHandshake, Stethoscope, Home } from 'lucide-react'
import Hamster from '../../assets/hamster.png'

const cards = [
    {
        title: 'Owner Surrender Support',
        desc: 'If families can no longer care for a pet, we provide safe intake, emotional support, and responsible rehabilitation.',
        icon: HeartHandshake,
        tag: 'Compassion First',
    },
    {
        title: 'Quarterly Boarding & Health Validation',
        desc: 'Temporary care plans are available. Every pet gets a health screening and wellness monitoring by our team.',
        icon: Stethoscope,
        tag: 'Trusted Care',
    },
    {
        title: 'Adoption & Paid Pet Services',
        desc: 'Adopt healthy pets and access verified services through our platform with a transparent service/platform fee.',
        icon: Home,
        tag: 'Safe Adoption',
    },
]

const LearnMoreSection = () => {
    return (
        <section
            id='learn-more'
            className='font-["Montserrat"] relative w-full overflow-hidden bg-linear-to-b from-white to-stone-300 py-16 md:py-20'
        >
            {/* decor */}
            <img
                src={Hamster}
                alt='Hamster'
                className='pointer-events-none absolute top-8 md:top-1 md:left-[45%] sm: left-[40%] z-10 w-24 sm:w-28 md:w-35 lg:w-35 lg:top-1 lg:left-[45%]'
            />
            <div className='pointer-events-none absolute -bottom-16 right-0 h-52 w-52 rounded-full bg-[#cbb8a9]/25 blur-2xl' />

            <div className='relative mx-auto w-full max-w-7xl mt-15 px-6 md:px-10 lg:px-14'>
                <div className='text-center'>
                    <p className='inline-block rounded-full border border-[#795548]/20 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-[#795548]'>
                        Why Choose Us
                    </p>
                    <h2 className='mt-4 font-["Aladin"] text-4xl tracking-wide text-[#1c1c1c] md:text-5xl lg:text-6xl'>Learn More</h2>
                    <p className='mx-auto mt-3 max-w-2xl text-[#4a4a4a]'>
                        Rescue, treatment, temporary care, and responsible adoption — all in one trusted platform.
                    </p>
                </div>

                <div className='mt-10 grid gap-6 md:grid-cols-3'>
                    {cards.map((item, index) => {
                        const Icon = item.icon
                        return (
                            <article
                                key={index}
                                className='p-8'
                            >
                                <div className='mb-4 flex items-center justify-between'>
                                    <span className='rounded-full bg-[#795548]/10 px-3 py-1 text-xs font-semibold text-[#795548]'>
                                        {item.tag}
                                    </span>
                                    <div className='rounded-xl bg-[#795548]/10 p-2 text-[#795548]'>
                                        <Icon size={18} />
                                    </div>
                                </div>

                                <h3 className='text-lg font-semibold text-[#2a2a2a]'>{item.title}</h3>
                                <p className='mt-2 text-sm leading-6 text-[#795548]'>{item.desc}</p>
                            </article>
                        )
                    })}
                </div>

                {/* bottom CTA */}
                {/* <div className='mt-10 p-6 text-center md:p-8'>
                    <h3 className='text-xl font-semibold text-[#2a2a2a] md:text-2xl'>Want to adopt or board a pet?</h3>
                    <p className='mx-auto mt-2 max-w-2xl text-sm text-[#4a4a4a] md:text-base'>
                        Connect with our team to find the right service for your pet journey.
                    </p>
                    <a
                        href='#contact-us'
                        className='mt-5 inline-block rounded-xl bg-[#795548] px-6 py-3 text-sm font-semibold text-white hover:bg-white hover:text-[#795548]/90 hover:border'
                    >
                        Contact Us
                    </a>
                </div> */}
            </div>
        </section>
    )
}

export default LearnMoreSection
