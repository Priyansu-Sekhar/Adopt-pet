import {
  Award,
  ShoppingBag,
  Heart,
  Scissors,
  Shield,
  Users,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Doggy from "../../assets/Doggy.png";

const WhatWeOffer = () => {
  const navigate = useNavigate();
  const services = [
    { name: "Animal Training", icon: Award,       position: "left-top"     },
    { name: "Pet Supplies",    icon: ShoppingBag, position: "right-top"    },
    { name: "Animal Adoption", icon: Heart,       position: "left-middle"  },
    { name: "Pet Grooming",    icon: Scissors,    position: "right-middle" },
    { name: "Animal Rescue",   icon: Shield,      position: "left-bottom"  },
    { name: "Pet Sitter",      icon: Users,       position: "right-bottom" },
  ];

  const stats = [
    { value: "20", label: "ADOPTION", bgColor: "bg-zinc-900" },
    { value: "25",  label: "RESCUED",  bgColor: "bg-amber-800" },
    { value: "7", label: "CLIENTS",  bgColor: "bg-stone-200" },
    { value: "10+", label: "SERVICES", bgColor: "bg-neutral-700" },
  ];

  const getCircularStyle = (position) => {
    const posMap = {
      "left-top":     { top: "15%", left:  "15%" },
      "left-middle":  { top: "43%", left:  "12%" },
      "left-bottom":  { top: "70%", left:  "15%" },
      "right-top":    { top: "15%", right: "15%" },
      "right-middle": { top: "43%", right: "12%" },
      "right-bottom": { top: "70%", right: "15%" }, 
    };
    return posMap[position];
  };

  return (
    <section className="w-full bg-linear-to-b from-white to-stone-400 overflow-hidden">
      <div className="relative w-full pt-0 sm:pt-0 md:pt-0 lg:pt-0 sm:pb-0 md:pb-0 lg:pb-0">

        {/* ── Heading ── */}
        <div className="text-center mb-0 sm:mb-0 md:mb-0 md:px-4">
          <h2 className=" text-zinc-900 tracking-wider mb-2 sm:mb-3 font-['Aladin'] md:text-5xl sm: text-4xl lg:text-6xl">
            What We Offer
          </h2>
          <p className="text-[9px] sm:text-xs md:text-sm text-zinc-800 tracking-[0.25em] sm:tracking-[0.3em] font-medium">
            WHERE LOVE AND CARE UNITE !
          </p>
          <span className="">
            
          </span>
        </div>

        {/* ── Watermark ── */}
          <div className="font-['Macondo'] tracking-wide absolute top-[35%] sm:top-[35%] md:top-[38%] left-1/2 -translate-x-1/2 text-[44px] sm:text-[100px] md:text-[160px] lg:text-[180px] font-bold text-white/50 whitespace-nowrap pointer-events-none select-none leading-none">
            Adoptpet.io
          </div>

          {/* ── Dog + Services ring ── */}
          <div className="relative w-full h-80 sm:h-105 md:h-125 lg:h-140 flex items-center justify-center">

            {/* Dog image */}
            <img
              src={Doggy}
              alt="Happy dog"
              className="relative z-10 object-contain pointer-events-none bottom-8
                w-48 h-48
                sm:w-72 sm:h-72 sm: pl-2
                md:w-100 md:h-100
                lg:w-120 lg:h-120"
            />

            {/* Service items */}
            {services.map((service, index) => {
            const Icon = service.icon;
            const isLeft = service.position.includes("left");
            const pos = getCircularStyle(service.position);

            return (
              <button
                type="button"
                onClick={() => navigate("/services")}
                key={index}
                style={pos}
                className="absolute flex items-center group cursor-pointer transition-transform hover:scale-105 gap-1.5 sm:gap-2 md:gap-2.5"
              >
                <div className="flex items-center gap-1.5 sm:gap-2 md:gap-2.5 text-white hover:text-[#6b5e52]">
                  {isLeft ? (
                    <>
                      <span className="text-right font-['montserrat'] font-semibold text-zinc-900 tracking-tight leading-tight md:text-[18px] sm:text-[12px] lg:text-[25px] max-w-13 sm:max-w-18 md:max-w-22.5 lg:max-w-none">
                        {service.name}
                      </span>
                      <div className="shrink-0 flex items-center justify-center bg-[#6b5e52] rounded-full group-hover:bg-white transition-colors shadow-md w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-11 lg:h-11">
                        <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5" strokeWidth={1.5} />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="shrink-0 flex items-center justify-center bg-[#6b5e52] rounded-full group-hover:bg-white transition-colors shadow-md w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-11 lg:h-11">
                        <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5" strokeWidth={1.5} />
                      </div>
                      <span className="text-left font-['montserrat'] font-semibold text-zinc-900 tracking-tight leading-tight md:text-[18px] sm:text-[12px] lg:text-[25px] max-w-13 sm:max-w-18 md:max-w-22.5 lg:max-w-none">
                        {service.name}
                      </span>
                    </>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* ── Stats bar ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 w-full">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`${stat.bgColor} py-5 sm:py-7 md:py-10 flex flex-col items-center justify-center`}
            >
              <p className={`font-bold mb-1 sm:mb-2
                text-xl sm:text-3xl md:text-4xl lg:text-5xl
                ${stat.bgColor === "bg-stone-200" ? "text-zinc-900" : "text-white"}`} style={{ fontFamily: "Georgia, serif" }}>
                {stat.value}
              </p>
              <p className={`tracking-[0.2em] font-medium
                text-[8px] sm:text-[10px] md:text-xs
                ${stat.bgColor === "bg-stone-200" ? "text-zinc-700" : "text-stone-300"}`}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhatWeOffer;