"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export const AnimatedTestimonials = ({ testimonials, autoplay = false }) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const testimonial = testimonials[active];

  return (
    <div className="flex justify-center items-center min-h-screen px-4 py-20 font-sans antialiased">
      <div className="flex md:flex-row items-center gap-10 w-full max-w-6xl mx-auto ml-auto">
        {/* Image on Left */}
        <AnimatePresence mode="wait">
          <motion.img
            key={testimonial.src}
            src={testimonial.src}
            alt={testimonial.name}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
            className="w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-3xl object-cover border-4 border-white shadow-lg"
            draggable={false}
          />
        </AnimatePresence>

        {/* Text on Right */}
        <div className="max-w-xl text-left flex flex-col justify-between h-[400px]">
          <div>
            <h3 className="text-2xl font-bold">{testimonial.name}</h3>
            <p className="text-sm text-neutral-400">
              {testimonial.designation}
            </p>
            <p className="mt-4 text-lg text-neutral-300 dark:text-neutral-300">
              {testimonial.quote}
            </p>
          </div>

          {/* Navigation pinned to bottom */}
          <div className="flex gap-4 mt-6">
            <button
              onClick={handlePrev}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
            >
              <IconArrowLeft className="h-4 w-4 text-black" />
            </button>
            <button
              onClick={handleNext}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
            >
              <IconArrowRight className="h-4 w-4 text-black" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
