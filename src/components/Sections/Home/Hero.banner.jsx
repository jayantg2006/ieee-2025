import { useRef, useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
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
  const [typingComplete, setTypingComplete] = useState(false);
  const text = ["Welcome to IEEE NSUT"];
  const controls = useAnimation();

  // Refs for animations
  const imageContainerRef = useRef(null);
  const imageRef = useRef(null);

  // Check if image is in view
  const isInView = useInView(imageContainerRef, {
    once: true,
    amount: 0.2,
    margin: "0px 0px -100px 0px",
  });

  // Scroll progress for exit animation
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });

  // Exit animation values - adjusted to start later
  const fadeStart = 0.5; // Changed from 0.2 to 0.5 (starts fading at 50% scrolled past)
  const fadeEnd = 0.9; // Changed from 0.8 to 0.9 (fully faded at 90% scrolled past)
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const opacity = useTransform(
    scrollYProgress,
    [0, fadeStart, fadeEnd],
    [1, 1, 0]
  );
  // Adjust y movement to start later and be more subtle
  const y = useTransform(
    scrollYProgress,
    [0, 0.5, 1], // Starts moving up only after 50% scrolled
    [0, 0, 20] // Reduced max movement from 30px to 20px for subtlety
  );

  // Animation variants for entrance
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.98,
      rotateX: 5,
      rotateY: 2,
      filter: "brightness(0.8) contrast(1.2) blur(4px)",
      transformPerspective: 1000,
      transformOrigin: "center bottom",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      rotateY: 0,
      filter: "brightness(1) contrast(1) blur(0px)",
      transition: {
        duration: 1.2,
        ease: [0.165, 0.84, 0.44, 1],
        when: "beforeChildren",
        staggerChildren: 0.3,
        delayChildren: 0.1,
        transform: {
          duration: 1.5,
          ease: [0.165, 0.84, 0.44, 1],
        },
      },
    },
  };

  const captionVariants = {
    hidden: {
      opacity: 0,
      y: 15,
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
        ease: [0.19, 1, 0.22, 1],
        delay: 0.2,
      },
    },
  };

  const handleType = () => {
    // Called when typing starts
  };

  const handleDone = () => {
    setTypingComplete(true);
    controls.start({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: [0.19, 1, 0.22, 1],
      },
    });
  };

  const handleDelete = () => {
    // Called when text is being deleted
  };

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
      className="relative w-full py-6 md:py-10 lg:py-12 flex flex-col items-center justify-start overflow-visible font-sans bg-black min-h-[80vh] mt-[80px]"
      style={{ fontFamily: "'Poppins', sans-serif" }}
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
          className="absolute inset-0 animate-gradient-x"
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
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: 0.2 }}
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
          <Typewriter
            words={text}
            loop={1}
            cursor={false}
            typeSpeed={50}
            deleteSpeed={50}
            delaySpeed={1000}
            onType={handleType}
            onDelete={handleDelete}
            onLoopDone={handleDone}
          />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 1, // Slight delay for smoothness, but not tied to typingComplete
            ease: [0.19, 1, 0.22, 1],
          }}
          className="text-sm sm:text-base md:text-xl font-medium mb-4 text-blue-100 leading-relaxed whitespace-normal"
        >
          At IEEE NSUT, we unite to learn, teach, and innovate together. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, autem
          dolor! Ab
        </motion.p>
      </div>

      {/* Animated Core Members Image Section with Scroll Effects */}
      <div className="mt-4 md:mt-6 flex flex-col items-center justify-center w-full max-w-5xl mx-auto px-4">
        <motion.div
          className="flex flex-col items-center w-full relative z-10"
          style={{
            scale,
            opacity,
            y,
          }}
        >
          <motion.div
            ref={imageContainerRef}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="relative w-full"
          >
            <motion.div
              className="w-full min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] relative overflow-hidden rounded-2xl shadow-2xl will-change-transform bg-gradient-to-br from-[#0a2540] via-[#1565c0] to-black"
              onMouseEnter={handleImageHover}
              onMouseLeave={handleImageUnhover}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                transition: {
                  duration: 0.4,
                  ease: [0.4, 0, 0.2, 1],
                },
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 15,
              }}
            >
              <motion.div
                initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
                animate={
                  isInView
                    ? { clipPath: "inset(0% 0% 0% 0%)" }
                    : { clipPath: "inset(100% 0% 0% 0%)" }
                }
                transition={{
                  duration: 1.2,
                  ease: [0.19, 1, 0.22, 1],
                  delay: 0.3,
                }}
                style={{ overflow: "hidden", width: "100%", height: "100%" }}
              >
                <motion.img
                  ref={imageRef}
                  src="public\CoreMembers.jpg"
                  alt="Core Members"
                  initial={{ opacity: 0, scale: 1.05, filter: "blur(16px)" }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1, filter: "blur(0px)" }
                      : { opacity: 0, scale: 1.05, filter: "blur(16px)" }
                  }
                  transition={{
                    duration: 1.2,
                    ease: [0.19, 1, 0.22, 1],
                    delay: 0.3,
                  }}
                  className="w-full h-full min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] max-h-[100vh] max-w-[100vw] object-cover bg-gradient-to-b from-gray-900 to-gray-800 hover:scale-[1.02] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                />
              </motion.div>
              <motion.p
                className="absolute left-1/2 -translate-x-1/2 bottom-4 md:bottom-6 bg-black/70 px-4 py-2 rounded-full text-blue-100 text-xs sm:text-sm z-20 pointer-events-none backdrop-blur-sm"
                variants={captionVariants}
              >
                Meet our core team members
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Space for testing scroll animation */}
      <div className="h-[200vh] w-full"></div>
    </section>
  );
}
