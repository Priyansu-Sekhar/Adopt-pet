import { useState } from "react";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { FaRegAddressCard } from "react-icons/fa";
import Footer from "../layout/Footer";

// Constants
const FONT = { fontFamily: "'Aladin', cursive" };
const INPUT_CLASS = "w-full border border-zinc-300 rounded-full px-4 py-1.75 text-sm text-zinc-600 placeholder:text-zinc-400 outline-none focus:border-zinc-500";
const TEXTAREA_CLASS = "w-full border border-zinc-300 rounded-xl px-4 py-3 text-sm text-zinc-600 placeholder:text-zinc-400 outline-none focus:border-zinc-500 resize-none";
const CONTACT_INFO = [
  { icon: <FaRegAddressCard className="text-lg" aria-hidden="true" />, text: "Plot no. - Sai Nivas, Balikuda, Cuttack, India" },
  { icon: <MdOutlinePhoneInTalk className="text-lg" aria-hidden="true" />, text: "6370404522" },
];

const INITIAL_FORM = { name: "", email: "", message: "" };

// Main Component
export default function ContactFooter() {
  const [form, setForm] = useState(INITIAL_FORM);

  const handleChange = (key) => (e) => setForm({ ...form, [key]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    resetForm();
  };
  const resetForm = () => setForm(INITIAL_FORM);

  return (
    <div style={FONT}>
      <section className="relative w-full overflow-hidden" style={{ backgroundColor: "#2f2e27" }}>
        <div className="mx-auto w-full max-w-7xl">
          <h2 className="text-white text-center font-light pt-6 sm:pt-10 md:pt-14 pb-6 sm:pb-8 md:pb-10 text-2xl sm:text-4xl md:text-5xl">
            Contact Us
          </h2>
          
          <div className="flex flex-col justify-center md:flex-row gap-6 sm:gap-8 md:gap-12 px-4 sm:px-6 md:px-8 pb-12 sm:pb-16 md:pb-20">
            {/* Contact Info - Hidden on small screens, shown as row on medium and up */}
            <div className="hidden md:flex flex-col gap-6 tracking-widest py-5 shrink-0">
              {CONTACT_INFO.map(({ icon, text }) => (
                <ContactInfo key={text} icon={icon} text={text} />
              ))}
            </div>

            {/* Form */}
            <ContactForm form={form} handleChange={handleChange} handleSubmit={handleSubmit} />

            {/* Contact Info - Shown on small screens only (below form) */}
            <div className="md:hidden flex flex-col gap-4 tracking-widest py-4 w-full">
              {CONTACT_INFO.map(({ icon, text }) => (
                <ContactInfo key={text} icon={icon} text={text} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Sub-components
function ContactInfo({ icon, text }) {
  return (
    <div className="flex items-start gap-3 text-white/85">
      <span className="text-lg shrink-0">{icon}</span>
      <p className="text-xs sm:text-sm md:text-base">{text}</p>
    </div>
  );
}

function ContactForm({ form, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} noValidate className="w-full sm:max-w-md md:w-80 bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5">
      <div className="flex flex-col gap-2.5">
        <label htmlFor="contact-name" className="sr-only">Name</label>
        <input id="contact-name" name="name" autoComplete="name" type="text" placeholder="Name" value={form.name} onChange={handleChange("name")} className={INPUT_CLASS} style={FONT} />
        <label htmlFor="contact-email" className="sr-only">Email</label>
        <input id="contact-email" name="email" autoComplete="email" type="email" placeholder="Email" value={form.email} onChange={handleChange("email")} className={INPUT_CLASS} style={FONT} />
        <label htmlFor="contact-message" className="sr-only">Message</label>
        <textarea id="contact-message" name="message" placeholder="Message" value={form.message} onChange={handleChange("message")} rows={5} className={TEXTAREA_CLASS} style={FONT} />
        <button type="submit" className="bg-[#3b3a30] hover:bg-[#4a4940] text-white text-xs sm:text-sm px-6 py-1.75 rounded-full transition-colors" style={FONT}>
          Submit
        </button>
      </div>
    </form>
  );
}
