import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/Clogo.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/donate", label: "Donate Us" },
  { to: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      {/* Top accent strip — logo colors: blue → orange → green */}
      <div className="h-1.5 w-full bg-gradient-to-r from-logoBlue-500 via-logoOrange-500 to-logoGreen-500" />

      {/* Main bar — white background */}
      <div
        className={`w-full bg-white transition-all duration-300 ${
          scrolled ? "shadow-md" : "border-b border-ink-300/40"
        }`}
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between container-px transition-all duration-300 ${
            scrolled ? "py-2" : "py-2 md:py-3"
          }`}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <span
              className={`grid place-items-center rounded-full overflow-hidden transition-all duration-300 group-hover:scale-105 ${
                scrolled ? "h-16 w-16 md:h-20 md:w-20" : "h-20 w-20 md:h-24 md:w-24"
              }`}
            >
              <img
                src={logo}
                alt="Nadaprabhu Kempegowda Educational & Charitable Trust logo"
                className="h-full w-full object-contain"
              />
            </span>
          </Link>

          {/* Desktop nav — pushed to the far right corner */}
          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map((l) => {
              const isContact = l.to === "/contact";
              return (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === "/"}
                  className={({ isActive }) =>
                    isContact
                      ? // Contact Us — always full solid orange, sky blue on hover
                        `px-6 py-2.5 rounded-full text-base font-semibold transition-all duration-200 bg-accent-500 text-white shadow-md hover:bg-logoBlue-500`
                      : // Other links — blue text with orange underline on hover
                        `group relative px-5 py-3 text-base font-semibold transition-colors duration-200 ${
                          isActive ? "text-logoBlue-600" : "text-logoBlue-600 hover:text-logoBlue-700"
                        }`
                  }
                >
                  {({ isActive }) =>
                    isContact ? (
                      l.label
                    ) : (
                      <>
                        {l.label}
                        <span
                          className={`absolute left-5 right-5 -bottom-0.5 h-0.5 rounded-full bg-accent-500 transition-transform duration-200 origin-left ${
                            isActive
                              ? "scale-x-100"
                              : "scale-x-0 group-hover:scale-x-100"
                          }`}
                        />
                      </>
                    )
                  }
                </NavLink>
              );
            })}
          </nav>

          {/* Mobile toggle */}
          <button
            aria-label="Toggle navigation"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex h-12 w-12 items-center justify-center rounded-full bg-logoBlue-50 text-logoBlue-600 ring-1 ring-logoBlue-100 hover:bg-logoBlue-100 transition-colors"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-white ${
          open ? "max-h-96 border-t border-ink-300/40" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col container-px py-4 gap-1.5">
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `px-5 py-3 rounded-xl text-base font-semibold transition-colors ${
                  isActive
                    ? "bg-accent-500 text-white shadow-md"
                    : "text-ink-700 hover:text-accent-500 hover:bg-accent-50"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
