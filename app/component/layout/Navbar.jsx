"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  return (
    // <nav className="">
    //   <div className="container mx-auto flex justify-between items-center h-[111px] bg-dark-bg rounded-default p-4">
    //     <h1 className="uppercase text-[30px] font-semibold  bg-clip-text">
    //       Sanket Rathod
    //     </h1>
    //     <div className="w-[753px] flex items-center justify-between">
    //       <div>
    //         <a href="/Home">Home</a>
    //         <a href="/Home">Home</a>
    //         <a href="/Home">Home</a>
    //         <a href="/Home">Home</a>
    //       </div>
    //       <button>Contact</button>
    //     </div>
    //   </div>
    // </nav>
    <header className="fixed w-full top-0 z-50 bg-black/90 backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold"
        >
          SANDRA BENARD
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex gap-8"
        >
          <Link href="/" className="hover:text-gray-300 transition-colors">
            HOME
          </Link>
          <Link href="/about" className="hover:text-gray-300 transition-colors">
            ABOUT
          </Link>
          <Link
            href="/projects"
            className="hover:text-gray-300 transition-colors"
          >
            PROJECTS
          </Link>
          <Link
            href="/services"
            className="hover:text-gray-300 transition-colors"
          >
            SERVICES
          </Link>
          <Link
            href="/contact"
            className="bg-[#3D5A4C] px-4 py-2 rounded hover:bg-[#2D4A3C] transition-colors"
          >
            CONTACT
          </Link>
        </motion.div>
      </nav>
    </header>
  );
};

export default Navbar;
