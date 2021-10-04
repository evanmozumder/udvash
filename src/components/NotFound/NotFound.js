import React from "react";

const NotFound = () => {
  // handling 404 status
  return (
    <div>
      <div
        style={{
          height: "70vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2 className="text-6xl ">404 not found!!</h2>
      </div>
    </div>
  );
};

export default NotFound;
