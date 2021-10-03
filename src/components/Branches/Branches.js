import React, { useEffect, useState } from "react";
import Branch from "../Branch/Branch";

const Branches = () => {
  // our all branches
  const [branches, setBranches] = useState([]);
  useEffect(() => {
    fetch("./branches.json")
      .then((res) => res.json())
      .then((data) => setBranches(data));
  }, []);
  return (
    <div
      className="grid grid-cols-3 gap-6 w-9/12"
      style={{ margin: "40px auto" }}
    >
      {branches.map((branch) => (
        <Branch branch={branch} key={branch.id}></Branch>
      ))}
    </div>
  );
};

export default Branches;
