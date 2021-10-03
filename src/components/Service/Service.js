import React from "react";

const Service = (props) => {
  // service details
  const { name, time, price, img } = props.service;
  return (
    <div className="bg-yellow-100 border rounded px-10 py-20 cursor-pointer">
      <img
        style={{
          width: "200px",
          height: "100px",
          display: "block",
          marginRight: "auto",
          marginLeft: "auto",
        }}
        src={img}
        alt=""
      />
      <h2 className="font-bold text-3xl my-3">{name}</h2>
      <h2 className="font-semibold text-2xl my-3">Date: {time}</h2>
      <h2 className="font-semibold text-2xl">Price: {price}</h2>
    </div>
  );
};

export default Service;
