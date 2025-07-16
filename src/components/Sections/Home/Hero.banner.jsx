import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroBanner() {
  const textRef = useRef(null);
  const imgRef = useRef(null);

  // Parallax effect for core team image
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 60]);

  // Handler to move the text down on image hover
  const handleImageHover = () => {
    if (textRef.current) {
      textRef.current.classList.add("translate-y-4");
    }
  };
  const handleImageUnhover = () => {
    if (textRef.current) {
      textRef.current.classList.remove("translate-y-4");
    }
  };

  return (
    <section
      className="relative w-full py-6 md:py-10 lg:py-12 flex flex-col items-center justify-start overflow-visible font-sans bg-black min-h-[80vh]"
      style={{ fontFamily: "Inter, Segoe UI, Arial, sans-serif" }}
    >
      {/* Animated, glassmorphic glowing pill badge */}
      <motion.span
        initial={{ opacity: 0, y: -30, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1, ease: "circOut" }}
        className="inline-block px-6 py-2 rounded-full text-sm md:text-base font-semibold mb-8 shadow-xl bg-white/10 border border-white/30 backdrop-blur-lg text-white relative z-20"
        style={{ boxShadow: "0 0 32px 8px #42a5f5, 0 0 0 2px #fff2" }}
      >
        <span className="relative z-10">
          Institute of Electrical and Electronics Engineers
        </span>
        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#1565c0]/40 to-[#42a5f5]/40 blur-lg opacity-60 animate-pulse z-0" />
      </motion.span>

      {/* Animated, immersive background */}
      <div className="absolute inset-0 w-full h-full -z-10 overflow-hidden">
        {/* Animated gradient */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-gradient-to-br from-[#0a2540] via-[#1565c0] to-black animate-gradient-x"
        />
        {/* Floating techy shapes */}
        <motion.div
          className="absolute left-1/4 top-1/3 w-40 h-40 bg-[#42a5f5]/20 rounded-full blur-2xl animate-float-slow"
          animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-1/4 bottom-1/4 w-32 h-32 bg-[#1565c0]/30 rounded-full blur-2xl animate-float-slow"
          animate={{ y: [0, -20, 0], x: [0, -15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-2 sm:px-4 py-6 md:py-10 w-full max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto text-center gap-2 md:gap-4 lg:gap-6 bg-black/80 rounded-xl shadow-xl">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "circOut" }}
          className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight mb-2 md:mb-4 text-white drop-shadow-lg leading-tight whitespace-normal"
        >
          Welcome to IEEE NSUT
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.3, ease: "circOut" }}
          className="text-sm sm:text-base md:text-xl font-medium mb-4 text-blue-100 leading-relaxed whitespace-normal"
        >
          At IEEE NSUT, we unite to learn, teach, and innovate together.
        </motion.p>
      </div>

      {/* Animated Core Members Image Section with Parallax */}
      <div className="mt-4 md:mt-6 flex flex-col items-center justify-center w-full max-w-5xl mx-auto px-4">
        <motion.div
          ref={imgRef}
          style={{ y }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "circOut" }}
          className="flex flex-wrap gap-4 md:gap-6 justify-center items-center px-2 w-full relative z-10"
          onMouseEnter={handleImageHover}
          onMouseLeave={handleImageUnhover}
        >
          <motion.img
            src="https://ieeensut.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fteam.27a51d4b.jpg&w=1920&q=75"
            alt="Core Members"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "circOut" }}
            className="w-full h-auto max-h-[50vh] rounded-2xl object-cover shadow-lg hover:scale-102 transition-transform duration-300 border border-white/10"
          />
          <p
            ref={textRef}
            className="absolute left-1/2 -translate-x-1/2 bottom-4 md:bottom-6 bg-black/70 px-4 py-2 rounded-full text-blue-100 text-xs sm:text-sm transition-transform duration-300 z-20 pointer-events-none"
            style={{ whiteSpace: "nowrap" }}
          >
            Meet our core team members
          </p>
        </motion.div>
      </div>
    </section>
  );
}
