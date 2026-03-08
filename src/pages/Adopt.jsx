import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import NavBar from "../components/layout/NavBar";
import Footer from "../components/layout/Footer";

const API_BASE_URL = "http://localhost:5000/api";

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  city: "",
  petType: "",
  petName: "",
  homeType: "",
  hasPetsBefore: "",
  message: "",
  agree: false,
};

const Adopt = () => {
  const [formData, setFormData] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitted(false);

    const payload = {
      ...formData,
      fullName: formData.fullName.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      city: formData.city.trim(),
      petName: formData.petName.trim(),
      message: formData.message.trim(),
    };

    try {
      await axios.post(`${API_BASE_URL}/adoptions`, payload);
      setSubmitted(true);
      setFormData(initialForm);
      toast.success("Adoption request submitted");
    } catch (error) {
      const msg = error.response?.data?.message || "Could not submit adoption form. Please check server connection and try again.";
      toast.error(msg);
      setSubmitted(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputBaseClass =
    "w-full rounded-lg border-2 border-gray-200 bg-white px-3 py-2 text-sm text-[#2e2924] outline-none transition focus:border-stone-500 focus:ring-2 focus:ring-stone-200";
  const selectBaseClass =
    "w-full cursor-pointer appearance-none rounded-lg border-2 border-gray-200 bg-white px-3 py-2 text-sm text-[#2e2924] outline-none transition focus:border-stone-500 focus:ring-2 focus:ring-stone-200";

  return (
    <>
      <NavBar />
      <div className="w-full min-h-[calc(100vh-84px)] bg-linear-to-b from-white to-stone-400 relative overflow-hidden flex items-center justify-center px-4 py-5 md:py-8">

        <div className="font-['Macondo'] tracking-wide absolute top-[36%] left-1/2 -translate-x-1/2 text-[44px] sm:text-[150px] md:text-[210px] lg:text-[240px] font-bold text-white/45 whitespace-nowrap pointer-events-none select-none leading-none">
          Adoptpet.io
        </div>

        <div className="z-10 w-full max-w-2xl rounded-b-3xl border-t-4 border-[#a28d80] bg-white p-4 shadow-2xl sm:p-5">
          <div className="flex flex-col items-center text-center">
            <h2 className="mb-1 text-lg font-bold text-[#795548] font-['condiment']">AdoptPet.io</h2>
            <h1 className="text-2xl text-black font-['Aladin'] sm:text-3xl">Pet Adoption Form</h1>
            <p className="mt-2 max-w-lg text-sm leading-5 text-[#5f5143]">
              Share your details below and our adoption team will reach out with the next steps.
            </p>
          </div>

          {submitted && (
            <p className="mt-5 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
              Your adoption request has been submitted successfully. Our team will contact you soon.
            </p>
          )}

          <form className="mt-4 grid grid-cols-1 items-start gap-3 sm:grid-cols-2" onSubmit={handleSubmit}>
            <label className="flex w-full flex-col gap-2 sm:col-span-1">
              <span className="text-sm font-semibold text-gray-700 font-['Montserrat']">Full Name</span>
              <input
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className={inputBaseClass}
                placeholder="Enter your name"
              />
            </label>

            <label className="flex w-full flex-col gap-2 sm:col-span-1">
              <span className="text-sm font-semibold text-gray-700 font-['Montserrat']">Email Address</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={inputBaseClass}
                placeholder="you@example.com"
              />
            </label>

            <label className="flex w-full flex-col gap-2 sm:col-span-1">
              <span className="text-sm font-semibold text-gray-700 font-['Montserrat']">Phone Number</span>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className={inputBaseClass}
                placeholder="Enter phone number"
              />
            </label>

            <label className="flex w-full flex-col gap-2 sm:col-span-1">
              <span className="text-sm font-semibold text-gray-700 font-['Montserrat']">City</span>
              <input
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className={inputBaseClass}
                placeholder="Your city"
              />
            </label>

            <label className="flex w-full flex-col gap-2 sm:col-span-1">
              <span className="text-sm font-semibold text-gray-700 font-['Montserrat']">Pet Type</span>
              <select
                name="petType"
                value={formData.petType}
                onChange={handleChange}
                required
                className={`${selectBaseClass} ${formData.petType ? "text-[#2e2924]" : "text-gray-500"}`}
              >
                <option value="" disabled>
                  Select pet type
                </option>
                <option value="Dog">Dog</option>
                <option value="Cat">Cat</option>
                <option value="Bird">Bird</option>
                <option value="Rabbit">Rabbit</option>
              </select>
            </label>

            <label className="flex w-full flex-col gap-2 sm:col-span-1">
              <span className="text-sm font-semibold text-gray-700 font-['Montserrat']">Preferred Pet Name</span>
              <input
                name="petName"
                value={formData.petName}
                onChange={handleChange}
                className={inputBaseClass}
                placeholder="Optional"
              />
            </label>

            <label className="flex w-full flex-col gap-2 sm:col-span-1">
              <span className="text-sm font-semibold text-gray-700 font-['Montserrat']">Home Type</span>
              <select
                name="homeType"
                value={formData.homeType}
                onChange={handleChange}
                required
                className={`${selectBaseClass} ${formData.homeType ? "text-[#2e2924]" : "text-gray-500"}`}
              >
                <option value="" disabled>
                  Select home type
                </option>
                <option value="Apartment">Apartment</option>
                <option value="Independent House">Independent House</option>
                <option value="Farmhouse">Farmhouse</option>
              </select>
            </label>

            <label className="flex w-full flex-col gap-2 sm:col-span-1">
              <span className="text-sm font-semibold text-gray-700 font-['Montserrat']">Have You Had Pets Before?</span>
              <select
                name="hasPetsBefore"
                value={formData.hasPetsBefore}
                onChange={handleChange}
                required
                className={`${selectBaseClass} ${formData.hasPetsBefore ? "text-[#2e2924]" : "text-gray-500"}`}
              >
                <option value="" disabled>
                  Select option
                </option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </label>

            <label className="flex w-full flex-col gap-2 sm:col-span-2">
              <span className="text-sm font-semibold text-gray-700 font-['Montserrat']">Why do you want to adopt?</span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                required
                className={inputBaseClass}
                placeholder="Tell us briefly..."
              />
            </label>

            <label className="flex items-start gap-3 text-sm leading-6 text-[#5f5143] sm:col-span-2">
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                required
                className="mt-1.5 h-4 w-4 shrink-0 accent-stone-500"
              />
              <span>
                I confirm the information above is correct and I am ready for the adoption screening process.
              </span>
            </label>

            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-lg bg-stone-400 py-2 text-sm font-semibold text-white shadow-md transition duration-200 hover:scale-[1.01] hover:bg-stone-500 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Submitting..." : "Submit Adoption Form"}
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Adopt;
