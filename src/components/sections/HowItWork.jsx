export default function HowItWorks() {
  const steps = [
    {
      title: "Find Your Pet",
      description: "Select a pet from our adoption list.",
    },
    {
      title: "Know Your Pet",
      description: "Schedule a visit with the chosen one.",
    },
    {
      title: "Take Your Pet Home",
      description: "Follow the adoption process.",
    },
  ];

  return (
    <section className="w-full pt-20 pb-16 px-10 relative bg-[#ffffff]">
      <div className="max-w-7xl mx-auto ">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className=" tracking-wider text-[#1c1c1c] font-['Aladin'] md:text-5xl sm: text-4xl lg:text-6xl">
            How It Works
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Connecting Line — only on desktop */}
          <div className="hidden lg:block absolute top-[6px] left-[16%] right-[16%] h-[1.5px] bg-[#b5a48a]" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-1 lg:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center relative"
              >
                {/* Dot — only desktop */}
                <div className="hidden lg:block w-3 h-3 rounded-full bg-[#b5a48a] mb-5 z-10" />

                {/* Mobile Step Number */}
                <div className="lg:hidden w-8 h-8 rounded-full bg-[#b5a48a] text-white font-bold flex items-center justify-center mb-4 md:text-sm sm:text-xs lg:text-xl ">
                  {index + 1}
                </div>

                {/* Text */}
                <p className="tracking-wide text-[#1c1c1c] mb-3 font-semibold font-['Montserrat'] md:text-xl sm:text-lg lg:text-2xl">
                  {step.title}
                </p>
                <p className=" font-medium w-54 text-[#795548] font-['Montserrat'] md:text-sm sm:text-xs lg:text-base">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}