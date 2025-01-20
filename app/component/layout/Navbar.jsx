// import React from "react";

// const Navbar = () => {
//   return <div>Navbar</div>;
// };

// export default Navbar;

"use client";
import React from "react";

const Navbar = () => {
  return (
    <nav className="">
      <div className="container mx-auto flex justify-between items-center h-[111px] bg-dark-bg rounded-default p-4">
        <h1 className="uppercase text-[30px] font-semibold  bg-clip-text">
          Sanket Rathod
        </h1>
        <div className="w-[753px] flex items-center justify-between">
          <div>
            <a href="/Home">Home</a>
            <a href="/Home">Home</a>
            <a href="/Home">Home</a>
            <a href="/Home">Home</a>
          </div>
          <button>Contact</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
