import { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useAnimation,
} from "framer-motion";

export default function HeroBanner() {
  const textRef = useRef(null);
  const imgRef = useRef(null);
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const text = "Welcome to IEEE NSUT";

  // Refs and controls for scroll animation
  const imageRef = useRef(null);
  const imageContainerRef = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(imageRef, { once: true, amount: 0.3 });

  // Scroll progress for exit animation
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });

  // Adjust these values to control when the fade out starts
  const fadeStart = 0.2;
  const fadeEnd = 0.8;

  // Exit animation values
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const opacity = useTransform(
    scrollYProgress,
    [0, fadeStart, fadeEnd],
    [1, 1, 0]
  );
  const y = useTransform(scrollYProgress, [0, 1], [0, 30]);

  // Enhanced entrance animation
  const imageVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.95,
      filter: "blur(2px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // Custom easing for smooth motion
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 100); // Adjust typing speed here (lower = faster)

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  // Parallax effect for core team image
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 300], [0, 60]);

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
        className="inline-block px-6 py-2 rounded-full text-sm md:text-base font-semibold mb-2 md:mb-6 shadow-xl bg-white/10 border border-white/30 backdrop-blur-lg text-white relative z-20"
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
      <div className="relative z-10 flex flex-col items-center justify-center px-2 sm:px-4 py-4 md:py-6 w-full max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto text-center gap-1 md:gap-2 lg:gap-3 bg-black/80 rounded-xl shadow-xl">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "circOut" }}
          className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight mb-2 md:mb-4 text-white drop-shadow-lg leading-tight whitespace-normal text-center"
          style={{
            minHeight: "1.5em",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 auto",
            maxWidth: "100%",
            fontSize: "clamp(1.5rem, 5vw, 3rem)",
          }}
        >
          {displayText}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.3, ease: "circOut" }}
          className="text-sm sm:text-base md:text-xl font-medium mb-4 text-blue-100 leading-relaxed whitespace-normal"
        >
          At IEEE NSUT, we unite to learn, teach, and innovate together. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, autem
          dolor! Ab
        </motion.p>
      </div>

      {/* Animated Core Members Image Section with Scroll Effects */}
      <div
        ref={imageRef}
        className="mt-4 md:mt-6 flex flex-col items-center justify-center w-full max-w-5xl mx-auto px-4"
      >
        <motion.div
          className="flex flex-col items-center w-full relative z-10"
          style={{
            scale,
            opacity,
            y,
          }}
        >
          <motion.div
            ref={imgRef}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={imageVariants}
            className="w-full relative overflow-hidden rounded-2xl shadow-2xl will-change-transform"
            onMouseEnter={handleImageHover}
            onMouseLeave={handleImageUnhover}
            style={{
              transformStyle: "preserve-3d",
              transform: "translateZ(0)",
            }}
          >
            <motion.img
              src="https://ieeensut.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fteam.27a51d4b.jpg&w=1920&q=75"
              alt="Core Members"
              className="w-full h-auto max-h-[50vh] object-cover hover:scale-105 transition-transform duration-500 ease-out"
              style={{ transformOrigin: "center bottom" }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
            <motion.p
              ref={textRef}
              className="absolute left-1/2 -translate-x-1/2 bottom-4 md:bottom-6 bg-black/70 px-4 py-2 rounded-full text-blue-100 text-xs sm:text-sm transition-all duration-300 z-20 pointer-events-none backdrop-blur-sm"
              style={{ whiteSpace: "nowrap" }}
              variants={itemVariants}
            >
              Meet our core team members
            </motion.p>
          </motion.div>
        </motion.div>
      </div>

      {/* Space for testing scroll animation */}
      <div className="h-[200vh] w-full"></div>
    </section>
  );
}
