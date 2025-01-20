"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      className="bg-black p-8 rounded-xl"
    >
      <div className="grid grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
          <p className="text-gray-400 mb-6">{project.description}</p>
          <div className="flex items-center justify-between">
            <p className="text-lg">STARTS FROM ${project.price}</p>
            <button className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors">
              GET A QUOTE <ArrowUpRight size={20} />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {project.gallery.map((image, i) => (
            <div key={i} className="relative group overflow-hidden rounded-lg">
              <img
                src={image}
                alt={`${project.title} preview ${i + 1}`}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button className="text-white">VIEW FULL CASE STUDY</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
