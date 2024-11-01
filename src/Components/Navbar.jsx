import React from "react";
import SignoutBtn from "./SignutBtn";

const Navbar = () => {
  return (
    <div className="sticky top-0 w-full p-3 flex justify-center items-center bg-purple-300">
      <h1>Chat App</h1>
      <SignoutBtn />
      {/* <nav>
        <ul className="flex">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav> */}
    </div>
  );
};

export default Navbar;
