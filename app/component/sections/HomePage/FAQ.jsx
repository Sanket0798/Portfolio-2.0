"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How do I get started with you?",
    answer:
      "Getting started is pretty simple. Simply reach out using any of my contact methods and let's discuss your project. After clicking the 'Get in touch' button, fill out a quick questionnaire to discuss your project requirements, goals, and agree on a timeline.",
  },
  {
    question: "What is your design process?",
    answer:
      "My design process follows a user-centered approach: Research, Define, Design, Test, and Iterate. I start with understanding your business goals and user needs, then create solutions that address both effectively.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary depending on scope and complexity. A typical website design project takes 4-6 weeks, while more complex applications may take 8-12 weeks. I'll provide a detailed timeline during our initial consultation.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-12"
        >
          FREQUENTLY ASKED QUESTIONS
        </motion.h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-[#111] rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 flex items-center justify-between text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold">{faq.question}</span>
                <Plus
                  className={`transform transition-transform ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
