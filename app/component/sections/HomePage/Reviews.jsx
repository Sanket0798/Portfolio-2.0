"use client";
import { motion, useMotionValue, useDragControls } from "framer-motion";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { reviews } from "@/app/data/sharedData";

export default function Reviews() {
  const containerRef = useRef(null);
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });
  const dragControls = useDragControls();
  const x = useMotionValue(0);

  useEffect(() => {
    const updateConstraints = () => {
      if (containerRef.current) {
        const container = containerRef.current;
        setConstraints({
          left: -(container.scrollWidth - container.offsetWidth),
          right: 0,
        });
      }
    };

    updateConstraints();
    window.addEventListener("resize", updateConstraints);
    return () => window.removeEventListener("resize", updateConstraints);
  }, []);

  return (
    <section className="pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            What People Say
          </h2>
          <p className="mt-4 text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto">
            Hear from clients and collaborators about their experiences.
          </p>
        </div>

        {/* Draggable Cards Section */}
        <div className="relative w-full overflow-hidden touch-pan-x">
          {/* Gradient edges */}
          <div className="absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-[#111] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-[#111] to-transparent z-10 pointer-events-none" />

          <motion.div
            ref={containerRef}
            className="flex gap-4 sm:gap-6 md:gap-8 py-6 sm:py-8 px-2"
            style={{ x }}
            drag="x"
            dragControls={dragControls}
            dragConstraints={constraints}
            dragElastic={0.1}
            dragMomentum
            dragTransition={{
              bounceStiffness: 300,
              bounceDamping: 30,
              power: 0.3,
            }}
            onPointerDown={(e) => dragControls.start(e)}
            whileTap={{ cursor: "grabbing" }}
          >
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-[85%] sm:w-[380px] md:w-[400px] lg:w-[420px] h-[460px] bg-black rounded-2xl overflow-hidden flex flex-col justify-between shadow-lg select-none cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.3, delay: index * 0.1 },
                }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                {/* Review Content */}
                <div className="px-5 pt-8 sm:px-6 sm:pt-10">
                  <h2 className="text-xl sm:text-2xl font-medium text-white mb-3">
                    {review.text}
                  </h2>
                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                    Sandra Benard is an outstanding professional for any product
                    design role. With remarkable learning ability, unwavering
                    work ethic, and creative problem-solving skills, she’s an
                    invaluable asset to any team.
                  </p>
                </div>

                {/* Reviewer Info */}
                <div className="flex items-center gap-4 bg-[#272727] p-4 border-t border-zinc-700">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-800">
                    <Image
                      src={review.image}
                      alt={review.author}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm sm:text-base">
                      {review.author}
                    </p>
                    <p className="text-zinc-400 text-xs sm:text-sm">
                      {review.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
