import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black py-8">
      <div className="container mx-auto px-4 text-center text-gray-400">
        <p>© Sanket Rathod {new Date().getFullYear()} - All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
