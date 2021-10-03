import React from "react";

const MainService = (props) => {
  const { img, name, price } = props.service;
  return (
    // main service details
    <div>
      <div className="bg-yellow-100 border rounded px-5 py-10 cursor-pointer">
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
        <h2 className="font-bold text-3xl my-2">{name}</h2>
        <h2 className="font-semibold text-2xl">Price: {price}</h2>
      </div>
    </div>
  );
};

export default MainService;
