"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    quote:
      "This developer transformed our website completely. The performance improvements were outstanding!",
    author: "Sarah Johnson",
    role: "CEO, TechSolutions Inc.",
  },
  {
    id: 2,
    quote:
      "Working with them was a pleasure. They delivered ahead of schedule and exceeded our expectations.",
    author: "Michael Chen",
    role: "Product Manager, InnovateCo",
  },
  {
    id: 3,
    quote:
      "The code quality and attention to detail are exceptional. Highly recommended for any complex project.",
    author: "Emily Rodriguez",
    role: "CTO, DigitalFuture",
  },
  {
    id: 4,
    quote:
      "They brought creative solutions to our challenges and implemented them flawlessly.",
    author: "David Kim",
    role: "Director, WebWorks",
  },
  {
    id: 5,
    quote:
      "Our user engagement increased by 40% after their redesign. Truly impressive work!",
    author: "Lisa Wong",
    role: "Marketing Director, BrandUp",
  },
];

const testimonialsRight = [
  {
    id: 6,
    quote:
      "The attention to accessibility and user experience was phenomenal. Our site is now inclusive for all users.",
    author: "James Patterson",
    role: "UX Director, AccessFirst",
  },
  {
    id: 7,
    quote:
      "They optimized our e-commerce platform and sales increased by 60% within the first month!",
    author: "Amanda Foster",
    role: "E-commerce Manager, ShopSmart",
  },
  {
    id: 8,
    quote:
      "Professional, reliable, and incredibly talented. They're our go-to developer for all major projects.",
    author: "Robert Martinez",
    role: "Lead Developer, CodeCraft",
  },
  {
    id: 9,
    quote:
      "The mobile responsiveness they achieved was flawless across all devices. Impressive technical skills!",
    author: "Jennifer Liu",
    role: "Mobile Strategist, AppVision",
  },
  {
    id: 10,
    quote:
      "From concept to deployment, they handled everything seamlessly. A true full-stack professional.",
    author: "Thomas Anderson",
    role: "Project Lead, DevSolutions",
  },
];

const TestimonialSlider = () => {
  const [isPaused, setIsPaused] = useState(false);

  // Create enough duplicates for seamless loop
  const duplicatedTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];

  const duplicatedTestimonialsRight = [
    ...testimonialsRight,
    ...testimonialsRight,
    ...testimonialsRight,
  ];

  return (
    <div className="relative w-full h-120 overflow-hidden  bg-[#101010]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative h-[600px]">
          {/* First row - moving left */}
          <motion.div
            className="absolute top-0 left-0 flex"
            animate={{
              x: isPaused ? 0 : `-${100 * (testimonials.length / duplicatedTestimonials.length)}%`
            }}
            transition={{
              duration: 25,
              ease: "linear",
              repeat: isPaused ? 0 : Infinity,
              repeatType: "loop",
            }}
            initial={{ x: 0 }}
            style={{ willChange: 'transform' }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={`left-${testimonial.id}-${Math.floor(
                  index / testimonials.length
                )}-${index % testimonials.length}`}
                className="flex-shrink-0 w-96 px-4"
              >
                <div className="border border-zinc-700 p-8 rounded-lg shadow-lg h-full flex flex-col hover:shadow-xl hover:border-zinc-600 transition-all duration-300 cursor-pointer backdrop-blur-sm">
                  <p className="text-white italic mb-6 flex-grow text-sm leading-relaxed">
                    {testimonial.quote}
                  </p>
                  <div className="border-t border-zinc-700 pt-4">
                    <p className="font-bold text-white text-sm">
                      {testimonial.author}
                    </p>
                    <p className="text-gray-400 text-xs mt-1">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Second row - moving right */}
          <motion.div
            className="absolute top-60 left-0 flex"
            animate={{
              x: isPaused ? `-${100 * (testimonialsRight.length / duplicatedTestimonialsRight.length)}%` : 0
            }}
            transition={{
              duration: 25,
              ease: "linear",
              repeat: isPaused ? 0 : Infinity,
              repeatType: "loop",
            }}
            initial={{ x: `-${100 * (testimonialsRight.length / duplicatedTestimonialsRight.length)}%` }}
            style={{ willChange: 'transform' }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {duplicatedTestimonialsRight.map((testimonial, index) => (
              <div
                key={`right-${testimonial.id}-${Math.floor(
                  index / testimonialsRight.length
                )}-${index % testimonialsRight.length}`}
                className="flex-shrink-0 w-96 px-4"
              >
                <div className="border border-zinc-700 p-8 rounded-lg shadow-lg h-full flex flex-col hover:shadow-xl hover:border-zinc-600 transition-all duration-300 cursor-pointer backdrop-blur-sm">
                  <p className="text-white italic mb-6 flex-grow text-sm leading-relaxed">
                    {testimonial.quote}
                  </p>
                  <div className="border-t border-zinc-700 pt-4">
                    <p className="font-bold text-white text-sm">
                      {testimonial.author}
                    </p>
                    <p className="text-gray-400 text-xs mt-1">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute -left-[25%] -top-10 h-[200%] blur-3xl w-100 bg-[#101010] z-10" />
          <div className="absolute -right-[25%] -top-10 h-[200%] blur-3xl w-100 bg-[#101010] z-10" />
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;