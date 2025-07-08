import { useEffect, useRef } from "react";

export default function HeroBanner() {
  const headlineRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Animate headline
    if (headlineRef.current) {
      headlineRef.current.classList.add("animate-fade-in-down");
    }
    // Animate subtitle
    if (subtitleRef.current) {
      setTimeout(() => {
        subtitleRef.current.classList.add("animate-fade-in");
      }, 400);
    }
    // Animate button
    if (buttonRef.current) {
      setTimeout(() => {
        buttonRef.current.classList.add("animate-fade-in-up");
      }, 800);
    }
  }, []);

  return (
    <section className="relative w-full min-h-[calc(100vh-6rem)] flex items-center justify-center overflow-hidden bg-[#0a2540]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/logo.png"
          alt="IEEE NSUT Background"
          className="w-full h-full object-cover object-center scale-125 opacity-30 select-none pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a2540]/90 to-[#0a2540]/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 py-24 w-full max-w-3xl mx-auto text-center">
        <h1
          ref={headlineRef}
          className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-white drop-shadow-lg opacity-0 animate-duration-1000"
        >
          Welcome to IEEE NSUT
        </h1>
        <p
          ref={subtitleRef}
          className="text-lg md:text-2xl font-medium mb-8 text-blue-100 opacity-0 animate-duration-1000"
        >
          At IEEE NSUT, we unite to learn, teach, and innovate together.
        </p>
        <button
          ref={buttonRef}
          className="group relative inline-block px-8 py-4 rounded-full bg-[#1565c0] text-white text-lg font-semibold shadow-lg transition-all duration-300 ease-out hover:bg-white hover:text-[#1565c0] hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#1565c0]/40 opacity-0 animate-duration-1000 overflow-hidden"
        >
          <span className="relative z-10">Join Now</span>
          <span className="absolute inset-0 bg-gradient-to-r from-[#1565c0]/30 to-[#42a5f5]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>
      </div>

      {/* Futuristic Techy Glow */}
      <div
        className="pointer-events-none absolute -inset-16 blur-3xl opacity-40 z-0"
        aria-hidden="true"
      >
        <div className="w-full h-full bg-gradient-to-tr from-[#1565c0]/40 via-[#42a5f5]/30 to-transparent rounded-full" />
      </div>
    </section>
  );
}
