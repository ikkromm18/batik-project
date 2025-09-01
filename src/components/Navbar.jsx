import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function MyNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const navItems = [
    { label: "Home", url: "/" },
    { label: "About", url: "/about" },
    { label: "Discover Batik", url: "/discover-batik" },
    { label: "Fun & Feedback", url: "/feedback" },
    { label: "Grattitude", url: "/gratitude" },
  ];

  const openMenu = () => {
    setIsVisible(true);
    setTimeout(() => setIsOpen(true), 10);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setTimeout(() => setIsVisible(false), 1000);
  };

  // (opsional) kunci scroll saat menu terbuka
  useEffect(() => {
    if (isVisible) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => (document.body.style.overflow = "");
  }, [isVisible]);

  return (
    <nav
      className="fixed inset-x-0 top-0 z-[9999] w-full bg-transparent"
      style={{ fontFamily: "Irish Grover, cursive" }}
    >
      <div className="px-4 mx-auto max-w-8xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 text-xl font-extrabold text-yellow-300">
            BATIK
          </div>

          <button
            onClick={openMenu}
            className="inline-flex items-center justify-center p-2 text-yellow-300 rounded-md hover:bg-yellow-300/20 focus:outline-none"
            aria-expanded={isVisible}
            aria-controls="fullmenu"
          >
            <svg
              className="w-6 h-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {isVisible && (
        <div
          id="fullmenu"
          className={`fixed inset-0 z-[10000] bg-black/90 backdrop-blur-md flex flex-col items-center justify-center space-y-6 transform transition-transform duration-1000 ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <button
            onClick={closeMenu}
            className="absolute text-yellow-300 transition-colors top-6 right-6 hover:text-yellow-400"
            aria-label="Close menu"
          >
            <svg
              className="w-8 h-8"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.url} // ✅ pakai "to" bukan "href"
              className="relative text-3xl font-semibold text-yellow-300 group"
              onClick={closeMenu}
            >
              {item.label}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-300 transition-all duration-1000 group-hover:w-full"></span>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
