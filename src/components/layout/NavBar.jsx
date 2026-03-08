import { IoMdSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { HiMenuAlt3 } from "react-icons/hi";
import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const API_BASE_URL = "http://localhost:5000/api";
const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(() => {
    const rawUser = localStorage.getItem('adoptpet_user');
    if (!rawUser) {
      return null;
    }

    try {
      return JSON.parse(rawUser);
    } catch {
      return null;
    }
  });
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [editName, setEditName] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const fontHover = "hover:text-[#795548] hover:font-bold hover:cursor-pointer";
  const userName = currentUser?.name || "";

  const handleSearchToggle = () => {
    setSearchOpen((prev) => !prev);
    setProfileMenuOpen(false);
  };

  const handleProfileClick = () => {
    if (!currentUser) {
      navigate('/signin');
      return;
    }

    setProfileMenuOpen((prev) => !prev);
  };

  const handleEditClick = () => {
    setEditName(currentUser?.name || "");
    setEditEmail(currentUser?.email || "");
    setProfileMenuOpen(false);
    setEditOpen(true);
  };

  const handleSaveDetails = async () => {
    if (!editName.trim() || !editEmail.trim()) {
      toast.error('Name and email are required');
      return;
    }

    const nextUser = {
      ...currentUser,
      name: editName.trim(),
      email: editEmail.trim().toLowerCase()
    };

    try {
      if (currentUser?.id) {
        await axios.put(`${API_BASE_URL}/users/${currentUser.id}`, {
          name: nextUser.name,
          email: nextUser.email
        });
      }

      localStorage.setItem('adoptpet_user', JSON.stringify(nextUser));
      setCurrentUser(nextUser);
      setEditOpen(false);
      toast.success('Profile updated');
    } catch (error) {
      const msg = error.response?.data?.message || 'Could not update profile';
      toast.error(msg);
    }
  };

  const handleSignOut = () => {
    localStorage.removeItem('adoptpet_user');
    setCurrentUser(null);
    setProfileMenuOpen(false);
    toast.success('Signed out');
    navigate('/');
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchOpen(false);
      }

      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, []);

  const searchRef = useRef(null);
  const profileRef = useRef(null);

  const activeClass = "text-[#795548] font-bold";
  const navClass = (path) =>
    `tracking-wide ${location.pathname === path ? activeClass : fontHover}`;

  const scrollToSection = (sectionId, offset = 0) => {
    const section = document.getElementById(sectionId);
    if (!section) return false;

    const top = section.getBoundingClientRect().top + window.scrollY + offset;
    window.scrollTo({ top, behavior: "smooth" });
    return true;
  };

  const handleSectionNav = (sectionId, offset = 0) => {
    setMobileMenuOpen(false);
    setProfileMenuOpen(false);

    const tryScroll = (attempt = 0) => {
      const done = scrollToSection(sectionId, offset);
      if (!done && attempt < 20) {
        setTimeout(() => tryScroll(attempt + 1), 100);
      }
    };

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => tryScroll(), 80);
    } else {
      tryScroll();
    }
  };

  const isContactPage = location.pathname === "/contact";
  return (
    <>
      {/* Navigation Bar */}
      <nav className={`md:sticky top-0 z-50 py-3 backdrop-blur sm:w-full lg:py-5 ${isContactPage ? 'bg-[#8B5C2A]' : 'bg-[#ffffff]/80'}`}> 
        <div className="md:mx-auto flex w-full max-w-7xl items-center gap-3 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <a
            href="/"
            className="flex shrink-0 items-center justify-center py-1 font-['condiment'] text-3xl font-bold text-[#795548]"
          >
            AdoptPet.io
          </a>

          {/* Desktop Navigation Menu */}
          <ul className="hidden flex-1 items-center justify-center gap-6 font-['Montserrat'] text-[16px] font-bold text-gray-700 lg:flex">
            <li>
              <a href="/" className={navClass("/")}>Home</a>
            </li>
            <li>
              <a href="/about" className={navClass("/about")}>About</a>
            </li>
            <li>
              <a href="/services" className={navClass("/services")}>Services</a>
            </li>
            <li>
              <button
                type="button"
                onClick={() => handleSectionNav("contact-us", 0)}
                className={navClass("/contact")}
              >
                Contact
              </button>
            </li>
          </ul>

          {/* Right Section - Search, Profile, Mobile Menu */}
          <div className="ml-auto flex items-center gap-3 sm:gap-4">
            {/* Mobile Profile Icon (for non-logged-in users) */}
            {!currentUser && (
              <button
                type="button"
                onClick={handleProfileClick}
                aria-label="Go to sign in"
                className="sm:hidden"
              >
                <CgProfile className="cursor-pointer text-2xl text-primary hover:text-[#795548]" />
              </button>
            )}

            {/* Search Bar */}
            <div
              ref={searchRef}
              className="relative hidden sm:flex flex-row items-center gap-2 overflow-visible"
            >
              {searchOpen && (
                <>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search"
                    className="order-1 hidden w-44 rounded-lg border border-stone-300 px-2 py-1 text-sm font-['Montserrat'] outline-none focus:border-stone-500 sm:block md:hidden"
                  />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search"
                    className="order-1 hidden w-56 rounded-xl border border-stone-200 bg-white px-3 py-2 text-sm font-['Montserrat'] shadow-xl outline-none focus:border-stone-500 md:absolute md:right-0 md:top-full md:z-50 md:mt-2 md:block"
                  />
                </>
              )}
              <IoMdSearch
                className="order-2 block shrink-0 cursor-pointer text-2xl leading-none text-primary hover:text-[#795548]"
                onClick={handleSearchToggle}
              />
            </div>

            {/* Desktop Profile Menu */}
            <div
              ref={profileRef}
              className="relative hidden items-center gap-1 sm:flex sm:gap-2"
            >
              <CgProfile
                className="cursor-pointer text-2xl text-primary hover:text-[#795548]"
                onClick={handleProfileClick}
              />
              {userName && (
                <span className="hidden max-w-35 truncate font-['Montserrat'] text-sm font-semibold text-[#5d4037] md:inline">
                  {`Hi, ${userName}`}
                </span>
              )}

              {currentUser && profileMenuOpen && (
                <div className="absolute right-0 top-9 min-w-42.5 rounded-xl border border-stone-200 bg-white p-2 shadow-lg">
                  <button
                    type="button"
                    className="w-full rounded-lg px-3 py-2 text-left text-sm font-semibold text-stone-700 hover:bg-stone-100"
                    onClick={handleEditClick}
                  >
                    Edit Details
                  </button>
                  <button
                    type="button"
                    className="mt-1 w-full rounded-lg px-3 py-2 text-left text-sm font-semibold text-red-600 hover:bg-red-50"
                    onClick={handleSignOut}
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <HiMenuAlt3
              className="cursor-pointer text-2xl text-primary hover:text-[#795548] lg:hidden"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
            />
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-b border-gray-100 bg-[#ffffff]/80 py-4 backdrop-blur lg:hidden">
          {/* Mobile Search */}
          <div className="mb-4 flex items-center justify-center gap-4 sm:hidden">
            <div className="flex flex-row items-center gap-2 overflow-visible">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search"
                className="w-40 rounded-lg border border-stone-300 px-2 py-1 text-sm font-['Montserrat'] outline-none focus:border-stone-500"
              />
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <ul className="flex flex-col items-center gap-4 font-['Montserrat'] text-base font-bold text-gray-700">
            <li>
              <a href="/" className={`tracking-wide ${fontHover}`}>Home</a>
            </li>
            <li>
              <a href="/about" className={`tracking-wide ${fontHover}`}>About</a>
            </li>
            <li>
              <a href="/services" className={`tracking-wide ${fontHover}`}>Services</a>
            </li>
            <li>
              <button
                type="button"
                onClick={() => handleSectionNav("contact-us", -100)}
                className={`tracking-wide ${fontHover}`}
              >
                Contact
              </button>
            </li>
          </ul>

          {/* Mobile User Profile Section */}
          {currentUser && (
            <div className="mx-auto mt-5 w-full max-w-xs border-t border-stone-200 pt-4">
              <div className="flex flex-col gap-2">
                <p className="text-center text-sm font-semibold text-stone-700">{`Hi, ${currentUser.name}`}</p>
                <button
                  type="button"
                  className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm font-semibold text-stone-700 hover:bg-stone-100"
                  onClick={handleEditClick}
                >
                  Edit Details
                </button>
                <button
                  type="button"
                  className="w-full rounded-lg border border-red-200 px-3 py-2 text-sm font-semibold text-red-600 hover:bg-red-50"
                  onClick={handleSignOut}
                >
                  Sign Out
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Edit Profile Modal */}
      {editOpen && (
        <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/30 px-4">
          <div className="w-full max-w-sm rounded-2xl bg-white p-5 shadow-2xl">
            <h3 className="mb-4 font-['Montserrat'] text-lg font-bold text-stone-700">
              Edit Profile Details
            </h3>

            <label className="mb-2 block text-sm font-semibold text-stone-700">Name</label>
            <input
              type="text"
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
              className="mb-4 w-full rounded-lg border border-stone-300 px-3 py-2 outline-none focus:border-stone-500"
            />

            <label className="mb-2 block text-sm font-semibold text-stone-700">Email</label>
            <input
              type="email"
              value={editEmail}
              onChange={(e) => setEditEmail(e.target.value)}
              className="mb-5 w-full rounded-lg border border-stone-300 px-3 py-2 outline-none focus:border-stone-500"
            />

            <div className="flex items-center justify-end gap-2">
              <button
                type="button"
                className="rounded-lg border border-stone-300 px-3 py-2 text-sm font-semibold text-stone-600 hover:bg-stone-50"
                onClick={() => setEditOpen(false)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="rounded-lg bg-stone-500 px-3 py-2 text-sm font-semibold text-white hover:bg-stone-600"
                onClick={handleSaveDetails}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
