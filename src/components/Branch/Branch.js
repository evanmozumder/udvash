import React from "react";

const Branch = (props) => {
  // branch details
  const { name, phone, location } = props.branch;
  return (
    <div className="bg-blue-300 border rounded px-10 py-20 cursor-pointer">
      <h2 className="font-bold text-3xl">{name}</h2>
      <h2 className="font-semibold text-2xl my-3">Phone: {phone}</h2>
      <h2 className="font-semibold text-2xl">{location}</h2>
    </div>
  );
};

export default Branch;
