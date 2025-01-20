"use client";
import { motion, useMotionValue, useDragControls } from "framer-motion";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";

const reviews = [
  {
    text: "She brings fresh perspectives that drive Real results!",
    author: "Future Driven",
    role: "CEO at TechForward",
    image: "https://source.unsplash.com/random/48x48?person1",
  },
  {
    text: "She is A Valuable Asset to Any Team",
    author: "Maryam Anneley",
    role: "Product Manager",
    image: "https://source.unsplash.com/random/48x48?person2",
  },
  {
    text: "Working with Sandra Delivered Measurable Impact",
    author: "Caleb T. Sycamore",
    role: "Design Director",
    image: "https://source.unsplash.com/random/48x48?person3",
  },
  {
    text: "Exceptional attention to detail and creative solutions",
    author: "Emma Thompson",
    role: "Creative Lead",
    image: "https://source.unsplash.com/random/48x48?person4",
  },
  {
    text: "Outstanding ability to translate ideas into reality",
    author: "James Wilson",
    role: "Startup Founder",
    image: "https://source.unsplash.com/random/48x48?person5",
  },
  {
    text: "Innovative approach to problem-solving",
    author: "Sarah Chen",
    role: "UX Director",
    image: "https://source.unsplash.com/random/48x48?person6",
  },
  {
    text: "Transformed our product with exceptional design",
    author: "Michael Roberts",
    role: "Product Owner",
    image: "https://source.unsplash.com/random/48x48?person7",
  },
  {
    text: "Consistently delivers beyond expectations",
    author: "Lisa Anderson",
    role: "Marketing Director",
    image: "https://source.unsplash.com/random/48x48?person8",
  },
];

export default function Reviews() {
  const containerRef = useRef(null);
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });
  const dragControls = useDragControls();
  const x = useMotionValue(0);

  useEffect(() => {
    const updateConstraints = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.scrollWidth;
        const viewportWidth = containerRef.current.offsetWidth;
        setConstraints({
          left: -(containerWidth - viewportWidth),
          right: 0,
        });
      }
    };

    updateConstraints();
    window.addEventListener("resize", updateConstraints);
    return () => window.removeEventListener("resize", updateConstraints);
  }, []);

  const handleDragStart = (event) => {
    dragControls.start(event);
  };

  return (
    <div className="relative w-full overflow-hidden touch-pan-x">
      {/* Gradient Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#111] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#111] to-transparent z-10 pointer-events-none" />

      {/* Scrollable Container */}
      <motion.div
        ref={containerRef}
        className="flex gap-8 py-4 px-8 select-none touch-pan-x"
        style={{ x }}
        drag="x"
        dragControls={dragControls}
        dragConstraints={constraints}
        dragElastic={0.1}
        dragMomentum={true}
        dragTransition={{
          bounceStiffness: 300,
          bounceDamping: 30,
          power: 0.3,
        }}
        onPointerDown={handleDragStart}
        whileTap={{ cursor: "grabbing" }}
      >
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0 w-[350px] bg-black p-6 rounded-lg select-none touch-pan-x"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: {
                duration: 0.3,
                delay: index * 0.1,
              },
            }}
            whileHover={{
              y: -5,
              transition: { duration: 0.2 },
            }}
          >
            <div className="flex items-center gap-4 mb-6">
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
                <h4 className="font-semibold">{review.author}</h4>
                <p className="text-sm text-gray-400">{review.role}</p>
              </div>
            </div>
            <p className="text-lg leading-relaxed">{review.text}</p>
            <div className="mt-6 flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className="w-5 h-5 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Scroll Instructions */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-sm text-gray-400 bg-black/80 px-4 py-2 rounded-full backdrop-blur-sm"
      >
        Swipe to scroll
      </motion.div>
    </div>
  );
}
