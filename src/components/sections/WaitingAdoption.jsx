import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Henry from "../../assets/henry.png";
import Tommy from "../../assets/Tommy.png";
import Raj from "../../assets/raj.png";
import Coffe from "../../assets/coffe.png";
import Buddy from "../../assets/buddy.png";
import kohl from "../../assets/kohl.png";
import Knight from "../../assets/knight.png";
import Kitty from "../../assets/kitty.png";
import Blacky from "../../assets/blacky.png";
import Matty from "../../assets/matty.png";
import Harry from "../../assets/harry.png";
import Bird from "../../assets/bird.png";
import Bird2 from "../../assets/bird2.png";
import Bird3 from "../../assets/bird3.png";
import Bird4 from "../../assets/bird4.png";
import Rabbit from "../../assets/rabbit.png";
import Rabbit2 from "../../assets/rabbit2.png";
import Rabbit3 from "../../assets/rabbit3.png";
import Rabbit4 from "../../assets/rabbit4.png";

const categories = ["Cats", "Dogs", "Birds", "Rabbits"];

const dogs = [
  { id: 1, name: "Henry",  breed: "Golden Retriever", age: "1 Year",    imgRatio: 1.70, labelRatio: 1.70, img: Henry },
  { id: 2, name: "Tommy",  breed: "Beagle",            age: "13 months", imgRatio: 1.85, labelRatio: 1.95, img: Tommy },
  { id: 3, name: "Raj",    breed: "Labrador Mix",      age: "10 months", imgRatio: 1.87, labelRatio: 1.90, img: Raj },
  { id: 4, name: "Coffee", breed: "Cocker Spaniel",    age: "2 Years",   imgRatio: 1.85, labelRatio: 1.95, img: Coffe },
  { id: 5, name: "Buddy",  breed: "Pug",               age: "6 months",  imgRatio: 1.18, labelRatio: 1.22, img: Buddy },
  { id: 6, name: "Kohl",   breed: "German Shepherd",   age: "10 months", imgRatio: 1.60, labelRatio: 1.65, img: kohl },
];

const cats = [
  { id: 1, name: "Knight", breed: "Maine Coon",        age: "8 months", imgRatio: 1.75, labelRatio: 1.72, img: Knight },
  { id: 2, name: "Kitty",  breed: "Persian",           age: "3 Years",  imgRatio: 1.10, labelRatio: 1.04, img: Kitty },
  { id: 3, name: "Blacky", breed: "Bombay",            age: "3 Years",  imgRatio: 1.40, labelRatio: 1.42, img: Blacky },
  { id: 4, name: "Matty",  breed: "British Shorthair", age: "2 Years",  imgRatio: 1.64, labelRatio: 1.72, img: Matty },
  { id: 5, name: "Harry",  breed: "Siamese",           age: "2 Years",  imgRatio: 1.64, labelRatio: 1.65, img: Harry },
];

const birds = [
  { id: 1, name: "Tweety", breed: "Canary",     age: "2 Years",  imgRatio: 0.83, labelRatio: 0.80, img: Bird },
  { id: 2, name: "Sky",    breed: "Budgerigar", age: "8 months", imgRatio: 0.82, labelRatio: 0.54, img: Bird2 },
  { id: 3, name: "Rio",    breed: "Lovebird",   age: "1 Year",   imgRatio: 0.94, labelRatio: 1.00, img: Bird3 },
  { id: 4, name: "Pip",    breed: "Cockatiel",  age: "6 months", imgRatio: 0.84, labelRatio: 0.90, img: Bird4 },
];

const rabbits = [
  { id: 1, name: "Bunny", breed: "Netherland Dwarf", age: "4 months", imgRatio: 0.85, labelRatio: 0.90, img: Rabbit },
  { id: 2, name: "Coco",  breed: "Lionhead",         age: "1 Year",   imgRatio: 1.35, labelRatio: 1.30, img: Rabbit2 },
  { id: 3, name: "Daisy", breed: "Rex",              age: "7 months", imgRatio: 0.91, labelRatio: 0.95, img: Rabbit3 },
  { id: 4, name: "Oreo",  breed: "Holland Lop",      age: "2 Years",  imgRatio: 1.35, labelRatio: 1.30, img: Rabbit4 },
];

const allData = { Dogs: dogs, Cats: cats, Birds: birds, Rabbits: rabbits };

/* ─── Responsive font size helper ───────────────────────── */
function getResponsiveFontSize(cardWidth, isSmall) {
  if (isSmall) return Math.max(8, Math.min(11, cardWidth * 0.14));
  return Math.max(11, Math.min(15, cardWidth * 0.10));
}

/* ─── Single Animal Card ─────────────────────────────────── */
function AnimalCard({ animal, cardWidth, isSmall, onSelect, isSelected, onAdoptNow }) {
  const [hovered, setHovered] = useState(false);
  const compactMessage = cardWidth < 82;
  const mediumMessage = cardWidth >= 82 && cardWidth < 120;

  const messageContainerClass = compactMessage
    ? "w-[min(92vw,170px)] min-h-[112px] rounded-2xl p-2"
    : mediumMessage
      ? "w-[220px] min-h-[132px] rounded-2xl p-3"
      : "w-[280px] min-h-[152px] rounded-2xl p-4";

  const messageTextClass = compactMessage
    ? "text-[9px]"
    : mediumMessage
      ? "text-[10px] sm:text-xs"
      : "text-xs sm:text-sm md:text-sm lg:text-base";

  const messageButtonClass = compactMessage
    ? "mt-auto px-2 py-1.5 text-[10px]"
    : mediumMessage
      ? "mt-auto px-3 py-1.5 text-xs"
      : "mt-auto px-4 py-2 text-sm";

  const imgH        = Math.round(cardWidth * animal.imgRatio);
  const labelBottom = Math.round(cardWidth * animal.labelRatio);
  const fontSize    = getResponsiveFontSize(cardWidth, isSmall);

  return (
    <div
      className={`
        relative flex flex-col items-center flex-none min-w-0 cursor-pointer
        transition-transform duration-300 ease-out
        ${hovered ? "-translate-y-2 sm:-translate-y-3" : "translate-y-0"}
        ${isSelected ? "z-30" : "z-0"}
      `}
      style={{ width: `${cardWidth}px` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={(e) => {
        e.stopPropagation();
        onSelect(animal);
      }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect(animal);
        }
      }}
    >
      {/* Floating label */}
      <div
        className="absolute left-1/2 -translate-x-1/2 text-center z-10 pointer-events-none whitespace-nowrap"
        style={{ bottom: `${labelBottom}px` }}
      >
        <p
          className="font-semibold text-[#2e2924] leading-snug "
          style={{ fontFamily: "Montserrat", fontSize: `${fontSize * 1.2}px` }}
        >
          {animal.name}
        </p>
        <p
          className="text-[#9c8a77] font-normal leading-snug"
          style={{ fontFamily: "Georgia, serif", fontSize: `${Math.max(7, fontSize - 2)}px` }}
        >
          {animal.age}
        </p>
      </div>

      {/* Photo */}
      <div
        className="relative w-full"
        style={{ height: `${imgH}px` }}
      >
        <div className="h-full w-full overflow-hidden rounded-t-lg">
          <img
            src={animal.img}
            alt={animal.name}
            className={`
              w-full h-full object-cover object-top block
              transition-transform duration-500
              ${hovered ? "scale-105" : "scale-100"}
            `}
            onError={(e) => {
              e.currentTarget.parentElement.classList.add("bg-[#d5cdc4]");
              e.currentTarget.style.display = "none";
            }}
          />
        </div>

        {isSelected && (
          <div
            className={`absolute left-1/2 bottom-1 z-50 -translate-x-1/2 rounded-2xl border border-[#d8ccbb] bg-[#fffdf9]/95 shadow-[0_18px_36px_rgba(62,46,31,0.3)] ring-1 ring-[#efe3d3] backdrop-blur-sm sm:bottom-2 md:bottom-3 ${messageContainerClass}`}
          >
            <div className="flex h-full flex-col gap-1">
            <p className={`${messageTextClass} font-semibold leading-tight text-[#3f352d] wrap-break-word`}>
              Name: {animal.name}
            </p>
            <p className={`${messageTextClass} mt-0.5 leading-tight text-[#5a4e43] wrap-break-word`}>
              Breed: {animal.breed}
            </p>
            <p className={`${messageTextClass} mt-0.5 leading-tight text-[#5a4e43]`}>
              Age: {animal.age}
            </p>
            <button
              className={`${messageButtonClass} w-full rounded-full bg-[#8b7355] font-semibold tracking-wide text-white transition-colors hover:bg-[#735f47]`}
              onClick={(e) => {
                e.stopPropagation();
                onAdoptNow();
              }}
            >
              Adopt Now
            </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── Main Section ───────────────────────────────────────── */
export default function WaitingAdoption() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab]   = useState("Dogs");
  const [selectedAnimalId, setSelectedAnimalId] = useState(null);
  const rowRef                       = useRef(null);
  const sectionRef                   = useRef(null);
  const [cardWidth, setCardWidth]   = useState(100);
  const [cardGap, setCardGap]       = useState(4);
  const [isSmall, setIsSmall]       = useState(false);

  const animals = allData[activeTab] || [];

  /* Measure card width + detect small screen */
  useEffect(() => {
    const measure = () => {
      if (!rowRef.current) return;
      const rowW = rowRef.current.offsetWidth;
      const small = rowW < 640;
      const medium = rowW >= 640 && rowW < 1024;
      setIsSmall(small);

      const gap = small ? 2 : medium ? 3 : 5;
      const count = animals.length;
      const baseCardWidth = (rowW - gap * (count - 1)) / count;
      const scale = small ? 0.82 : medium ? 0.90 : 0.96;
      const minWidth = small ? 54 : medium ? 72 : 92;
      const maxWidth = small ? 92 : medium ? 130 : 180;

      const nextCardWidth = Math.floor(
        Math.max(minWidth, Math.min(maxWidth, baseCardWidth * scale))
      );

      setCardGap(gap);
      setCardWidth(nextCardWidth);
    };

    measure();
    const ro = new ResizeObserver(measure);
    if (rowRef.current) ro.observe(rowRef.current);
    return () => ro.disconnect();
  }, [activeTab, animals.length]);

  /* Section height = tallest floating label top + breathing room */
  const maxLabelBottom = Math.max(...animals.map((a) => Math.round(cardWidth * a.labelRatio)));
  const sectionHeight  = maxLabelBottom + (isSmall ? 32 : 48);

  return (
    <div
      className="w-full flex justify-center items-center bg-[#fffffd] px-3 sm:px-6 lg:px-10 py-8 sm:py-16 -translate-y-6 sm:-translate-y-16"
      onClick={() => setSelectedAnimalId(null)}
    >
      <div className="w-full max-w-5xl" ref={sectionRef}>

        {/* ── Title ── */}
        <h1
          className="
            text-center tracking-wider
            font-['Aladin']
            md:text-5xl sm: text-4xl lg:text-6xl
            pt-6 sm:pt-10
            mb-5 sm:mb-8 md:mb-10
          "
        >
          Waiting Adoption
        </h1>

        {/* ── Tab Pills ── */}
        <div className="flex justify-center items-center flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-14 md:mb-16">
          {categories.map((cat) => {
            const isActive = cat === activeTab;
            return (
              <button
                key={cat}
                onClick={() => {
                  setActiveTab(cat);
                  setSelectedAnimalId(null);
                }}
                className={`
                  px-3 sm:px-5 md:px-6
                  py-1 sm:py-1.5 md:py-2
                  rounded-full
                  text-[10px] sm:text-[12px] md:text-[13px]
                  tracking-widest border-none outline-none cursor-pointer
                  transition-all duration-300
                  ${isActive
                    ? "bg-[#8b7355] text-white font-semibold shadow-[0_3px_14px_rgba(139,115,85,0.45)] scale-105"
                    : "bg-[#d5cdc4] text-[#6b5e52] font-normal hover:bg-[#c9bfb4] hover:scale-105"
                  }
                `}
                style={{ fontFamily: "Georgia, serif" }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* ── Animals Row ── */}
        <div
          className="relative w-full sm:px-3 md:px-4 lg:px-6"
          style={{ height: `${sectionHeight}px` }}
        >
          <div
            ref={rowRef}
            className="absolute bottom-0 left-0 right-0 flex items-end justify-center"
            style={{ gap: `${cardGap}px` }}
          >
            {animals.map((animal) => (
              <AnimalCard
                key={`${activeTab}-${animal.id}`}
                animal={animal}
                cardWidth={cardWidth}
                isSmall={isSmall}
                onSelect={(pickedAnimal) => {
                  const nextId = `${activeTab}-${pickedAnimal.id}`;
                  setSelectedAnimalId((prev) => (prev === nextId ? null : nextId));
                }}
                onAdoptNow={() => navigate("/adopt")}
                isSelected={selectedAnimalId === `${activeTab}-${animal.id}`}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
