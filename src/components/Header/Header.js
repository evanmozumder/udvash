import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  // header section
  return (
    <div className=" text-2xl grid grid-cols-2 justify-items-center py-6 bg-red-100">
      <div>
        {/* site name  */}
        <h2 className="font-bold text-3xl">Udvash</h2>
      </div>
      {/* nav link  */}
      <div className="flex">
        <NavLink className="px-3" to="/home">
          Home
        </NavLink>
        <NavLink className="px-3" to="/about">
          About Us
        </NavLink>
        <NavLink className="px-3" to="/services">
          Services
        </NavLink>
        <NavLink className="px-3" to="/branches">
          Branches
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
