"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Example: Simulate an API call
    fetch("https://example.com/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
        setSuccessMessage("Your message has been sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <section id="contact" className="py-16 bg-[#111]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold mb-6"
            >
              LET'S WORK
            </motion.h2>
            <p className="text-gray-400 mb-8">
              Ready to bring your vision to life? Let's create something amazing
              together.
            </p>
            <div className="flex flex-col gap-4">
              <button className="flex items-center gap-2 bg-[#3D5A4C] px-6 py-3 rounded hover:bg-[#2D4A3C] transition-colors">
                <Mail size={20} /> EMAIL ME
              </button>
              <button className="flex items-center gap-2 border border-white px-6 py-3 rounded hover:bg-white/10 transition-colors">
                <Phone size={20} /> CALL ME
              </button>
            </div>
          </div>
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
            onSubmit={handleSubmit}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg focus:outline-none focus:border-[#3D5A4C]"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg focus:outline-none focus:border-[#3D5A4C]"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg focus:outline-none focus:border-[#3D5A4C]"
                placeholder="Enter your message here..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#3D5A4C] py-3 rounded-lg hover:bg-[#2D4A3C] transition-colors"
            >
              SEND MESSAGE
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
