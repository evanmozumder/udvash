import React from "react";

const Footer = () => {
  // footer section
  return (
    <div className="bg-green-700 mt-5 ">
      <div className="py-10">
        <input
          className="border-2 border-green-700 rounded w-60 py-1"
          type="text"
          placeholder="your email..."
        />
        <button className="px-2 py-1 text-black border-1 rounded bg-yellow-200">
          SUBSCRIBE
        </button>
      </div>
    </div>
  );
};

export default Footer;
