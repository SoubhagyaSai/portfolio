import { useState } from "react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
       <nav className="sticky top-0 bg-black shadow z-50 text-white after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
      <div className="mx-auto max-w-7xl p-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">

          {/* LEFT: Logo */}
          <h2 className="text-3xl font-bold text-indigo-500">Soubhagya Sai</h2>

          {/* MOBILE MENU BUTTON */}
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:bg-white/10 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500 transition"
            >
              <span className="sr-only">Open main menu</span>

              {/* Hamburger Icon */}
              {!menuOpen ? (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="size-6 transition-transform duration-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              ) : (
                /* X Icon */
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="size-6 transition-transform duration-300 rotate-90"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* RIGHT: Nav links (desktop) */}
          <div className="hidden sm:flex flex-1 items-center justify-end">
            <div className="flex space-x-4">
              {["Home", "About", "Skills", "Projects", "Contact"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="rounded-md px-3 py-2 text-md font-medium text-gray-300 hover:bg-white/10 hover:text-white transition"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE MENU (Animated) */}
      <div
        className={`sm:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="space-y-1 px-2 pt-2 pb-3 bg-gray-900">
          {["Home", "About", "Skills", "Projects", "Contact"].map((link) => (
            <a
              key={link}
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/10 hover:text-white transition"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
