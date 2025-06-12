"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { workHistory } from "@/app/data/sharedData";

export default function WorkHistory() {
  return (
    <section id="work" className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-12"
        >
          WORK HISTORY
        </motion.h2>
        <div className="space-y-12">
          {workHistory.map((work, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6 rounded-lg bg-[#111]"
            >
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#3D5A4C] rounded-lg flex items-center justify-center">
                    <Image
                      src={`https://source.unsplash.com/random/48x48?${work.company}`}
                      alt={work.company}
                      width={24}
                      height={24}
                      className="rounded"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold">{work.role}</h3>
                    <p className="text-gray-400">{work.company}</p>
                  </div>
                </div>
                <div className="text-sm text-gray-400">
                  <p>{work.period}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {work.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-black/50 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="md:col-span-2">
                <div className="mb-4">
                  <h4 className="text-lg font-semibold mb-2">CONTEXT</h4>
                  <p className="text-gray-400">{work.context}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
