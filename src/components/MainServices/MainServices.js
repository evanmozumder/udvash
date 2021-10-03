import React, { useEffect, useState } from "react";
import MainService from "../MainService/MainService";

const MainServices = (props) => {
  // declaring state
  const [mainServices, setMainServices] = useState([]);
  // fetching data
  useEffect(() => {
    fetch("./mainServices.json")
      .then((res) => res.json())
      .then((data) => setMainServices(data));
  }, []);

  return (
    <div
      className="grid grid-cols-4 gap-6 w-9/12"
      style={{ margin: "40px auto" }}
    >
      {/* showing single main service  */}
      {mainServices.map((demoService) => (
        <MainService service={demoService} key={demoService.id}></MainService>
      ))}
    </div>
  );
};

export default MainServices;
