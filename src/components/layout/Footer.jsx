import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SOCIAL_ITEMS = [
  { label: "Instagram", href: "https://www.instagram.com/", icon: FaInstagram },
  { label: "Facebook", href: "https://www.facebook.com/", icon: FaFacebookF },
  { label: "X", href: "https://x.com/", icon: FaXTwitter },
  { label: "LinkedIn", href: "https://www.linkedin.com/", icon: FaLinkedinIn },
  // { label: "YouTube", href: "https://www.youtube.com/", icon: FaYoutube }
];

const Footer = ({ width = 'max-w-7xl', height = 'py-4 sm:py-6' }) => {
  return (
    <footer className="bg-white">
      <div className={`mx-auto w-full ${width} flex flex-col sm:flex-row justify-between items-center gap-4 px-4 sm:px-6 md:px-8 ${height}`}>
        <div className="flex items-center gap-1">
          <a href="/" className="lg:text-2xl md:text-2xl sm:text-xl font-bold font-['condiment']" style={{ color: "#795548" }}>
            AdoptPet.io
          </a>
        </div>
        <nav className="flex gap-2 sm:gap-3 flex-wrap justify-center">
          {SOCIAL_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              title={item.label}
              className="flex h-7 w-7 items-center justify-center rounded-full border border-[#d4c6b8] text-[#6f6256] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#8b7355] hover:bg-[#f7f1e8] hover:text-[#795548] sm:h-8 sm:w-8"
            >
              <item.icon className="text-xs sm:text-base" />
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;