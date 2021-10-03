import React from "react";
import useServices from "../../hooks/useServices";
import Service from "../Service/Service";

const Services = () => {
  // getting data from hooks
  const services = useServices();
  return (
    // services
    <div>
      <div
        className="grid grid-cols-3 gap-6 w-9/12"
        style={{ margin: "40px auto" }}
      >
        {services.map((service) => (
          <Service service={service} key={service.id}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
