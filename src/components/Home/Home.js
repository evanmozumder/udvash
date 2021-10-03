import React from "react";
import img from "../../utilities/images/cover.webp";
import MainServices from "../MainServices/MainServices";

const Home = () => {
  return (
    <div>
      {/* showing ad  */}
      <img src={img} alt="" />
      {/* main services  */}
      <h2 className="text-3xl mt-3 font-semibold">Our Main Services</h2>
      <div
        className="grid grid-cols-4 gap-6 w-4/5"
        style={{ margin: "40px auto" }}
      ></div>
      <MainServices></MainServices>
    </div>
  );
};

export default Home;
