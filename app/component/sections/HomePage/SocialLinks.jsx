"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const socialLinks = [
  {
    name: "BEHANCE",
    description: "See my detailed case studies for my projects.",
    url: "https://behance.net",
  },
  {
    name: "LINKEDIN",
    description: "See my full professional timeline and connections.",
    url: "https://linkedin.com",
  },
  {
    name: "TWITTER X",
    description: "Follow my tweets and stay updated with my journey.",
    url: "https://twitter.com",
  },
  {
    name: "INSTAGRAM",
    description: "See the creative aspects of my life and creative design.",
    url: "https://instagram.com",
  },
];

export default function SocialLinks() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group p-6 bg-[#111] rounded-lg hover:bg-[#222] transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">{link.name}</h3>
                <ExternalLink className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-sm text-gray-400">{link.description}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
