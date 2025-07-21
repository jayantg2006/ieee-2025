import { useState, useEffect, useRef } from "react";
import "./Navbar.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [animateMenu, setAnimateMenu] = useState(false);
  const navbarRef = useRef(null);
  const tabs = ["Home", "Events", "About Us", "Chapters", "Team"];
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("mobile-menu-overlay")) {
      closeMenu();
    }
  };
  const closeMenu = () => {
    setAnimateMenu(false);
    setTimeout(() => setMenuOpen(false), 300);
  };
  const toggleMenu = () => {
    if (menuOpen) {
      closeMenu();
    } else {
      setMenuOpen(true);
      setTimeout(() => setAnimateMenu(true), 10);
    }
  };

  // ✅ cursor gradient effect
  useEffect(() => {
    const navbar = navbarRef.current;

    const handleMouseMove = (e) => {
      const rect = navbar.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      navbar.style.setProperty("--x", `${x}px`);
      navbar.style.setProperty("--y", `${y}px`);
      navbar.style.setProperty("--opacity", 1); // Show circle
    };

    const handleMouseLeave = () => {
      navbar.style.setProperty("--opacity", 0); // Hide circle
    };

    if (navbar) {
      navbar.addEventListener("mousemove", handleMouseMove);
      navbar.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (navbar) {
        navbar.removeEventListener("mousemove", handleMouseMove);
        navbar.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <>
      <nav className="navbar" ref={navbarRef}>
        {/* Logo */}
        <div className="nav-left">
          <img src="/logo.png" alt="IEEE Logo" className="logo-image" />
        </div>

        {/* Center links (desktop) */}
        <div className="nav-center">
          <ul className="nav-links">
            {tabs.map((tab, index) => (
              <li key={tab}>
                <a
                  href="#"
                  style={{
                    animationDelay: `${1.5 + index * 0.2}s`,
                    animationName: "fade-in",
                    animationDuration: "0.6s",
                    animationFillMode: "forwards",
                  }}
                >
                  {tab}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right side */}
        <div className="nav-right">
          <button className="custom-blue-button">Join Now</button>
          <div
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="mobile-menu-overlay" onClick={handleOverlayClick}>
          <div
            className={`mobile-menu ${
              animateMenu ? "menu-open" : "menu-close"
            }`}
          >
            <ul className="mobile-links">
              {tabs.map((tab) => (
                <li key={tab}>
                  <a href="#" onClick={() => setMenuOpen(false)}>
                    {tab}
                  </a>
                </li>
              ))}
              <li>
                <button
                  className="join-now-inside"
                  onClick={() => setMenuOpen(false)}
                >
                  Join Now
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;

// export default function Header() {
//   return (
//     <header className="bg-black text-white p-6 shadow-md">
//       <div className="flex items-center justify-between container mx-auto">
//         {/* Logo */}
//         <img src="/logo.png" alt="IEEE 2025 Logo" className="h-10" />
//         <h1 className="text-2xl font-bold">IEEE 2025</h1>
//       </div>
//     </header>
//   );
// }
