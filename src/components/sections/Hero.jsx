import dog from "../../assets/dog.png";
import cat from "../../assets/cat.png";

const Hero = () => {
  return (
    <section className="w-full bg-linear-to-b from-[#fffffd] to-[#e0e0ea]">

      {/* ── DESKTOP (lg and above) ── */}
      <div className="hidden lg:block relative w-full h-[60vh]">

        {/* Dog — left side, big, peeking up from bottom, slightly cut at bottom */}
        <img
          src={dog}
          alt="Dog"
          className="absolute bottom-[-55.8%] left-[10%] h-[150%] w-auto object-contain object-bottom z-30"
        />

        {/* Cat — bottom-right corner, only head peeking */}
        <img
          src={cat}
          alt="Cat"
          className="absolute bottom-[0%] right-[12%] h-[40%] md:h-[35%] lg:h-[50%] w-auto object-contain object-bottom z-20"
        />

        {/* Text — center, slightly right of middle */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <h1 className="font-['Aladin'] tracking-wide text-center pl-20 text-7xl leading-tight">
            Adopt. <br />
            <span className="text-[#866d57]">Don't Shop</span>
          </h1>
        </div>
      </div>

      {/* ── TABLET (md) ── */}
      <div className="hidden md:block lg:hidden relative w-full h-[70vh]">

        <img
          src={dog}
          alt="Dog"
          className="absolute bottom-[-44.5%] left-[3%] h-[120%] w-auto object-contain object-bottom z-30"
        />

        <img
          src={cat}
          alt="Cat"
          className="absolute bottom-[0%] right-[10%] h-[35%] md:h-[40%] w-auto object-contain object-bottom z-20"
        />

        <div className="absolute inset-0 flex items-center justify-center z-20">
          <h1 className="font-['Aladin'] tracking-widest text-center pl-16 text-5xl font-bold leading-tight">
            Adopt. <br />
            <span className="text-[#866d57]">Don't Shop</span>
          </h1>
        </div>
      </div>

      {/* ── MOBILE (below md) ── */}
      <div className="flex flex-col md:hidden w-full min-h-[50vh] relative">

        {/* Heading at top */}
        <h1 className="font-['Aladin'] tracking-widest text-center text-6xl font-bold pt-20 pb-2 leading-snug z-20 relative">
          Adopt. <br />
          <span className="text-[#866d57]">Don't Shop</span>
        </h1>

        {/* Animals row — dog left big, cat right smaller, both peeking from bottom */}
        <div className="relative flex-1 w-full mt-4">
          <img
            src={dog}
            alt="Dog"
            className="absolute bottom-[-48.5%] left-[3%] h-[130%] w-auto object-contain object-bottom z-30"
          />
          <img
            src={cat}
            alt="Cat"
            className="absolute bottom-[0%] right-[6%] h-[35%] md:h-[40%] w-auto object-contain object-bottom z-20"
          />
        </div>
      </div>

    </section>
  );
};

export default Hero;