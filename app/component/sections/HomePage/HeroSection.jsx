import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Eye } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4 grid grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-5xl font-bold mb-4">I AM A PRODUCT DESIGNER</h2>
          <h3 className="text-3xl mb-2">A PROJECT MANAGER</h3>
          <h4 className="text-2xl text-gray-400 mb-6">& A WRITER</h4>
          <p className="text-gray-400 mb-8">
            Leveraging 2 years of user-centered design experience across B2B,
            B2C, SaaS, and Web3, alongside 6+ years in project management and
            implementation, I deliver comprehensive digital solutions that
            propel businesses toward growth.
          </p>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition-colors">
              GET A QUOTE <ArrowUpRight size={20} />
            </button>
            <button className="flex items-center gap-2 border border-white px-6 py-3 rounded-full hover:bg-white/10 transition-colors">
              SEE MORE <Eye size={20} />
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
            alt="Portrait"
            className="rounded-2xl w-full h-[600px] object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
