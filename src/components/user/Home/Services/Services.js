import React, { useContext, useEffect } from "react";
import ServiceCard from "./ServiceCard";
import { myContext } from "../../../../App";
import Loader from "react-loader-spinner";

const Services = () => {
  const { loadingState, serviceState } = useContext(myContext);
  const [service, setService] = serviceState;
  const [loading, setLoading] = loadingState;
  const { serviceSpinner } = loading;
  useEffect(() => {
    setLoading({ serviceSpinner: true });
    fetch("https://redlight-server.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => {
        setService(data);
        setLoading({ serviceSpinner: false });
      })
      .catch((err) => {
        setLoading({ serviceSpinner: false });
        console.log(err);
      });
  }, [service.length]);

  return (
    <div className="services-container bg-danger">
      <div className="container py-5">
        <div className="project-title">
          <h2 className="font-weight-bold text-center text-white">
            Our <span className="text-warning">Services</span>
          </h2>
        </div>
        {serviceSpinner ? (
          <Loader
            className="text-center py-5 my-5"
            type="Oval"
            color="#ffff"
            height={100}
            width={100}
          />
        ) : (
          <div className="row py-5">
            {service.map((sd) => (
              <ServiceCard key={sd._id} service={sd}></ServiceCard>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
