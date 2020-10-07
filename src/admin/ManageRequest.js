import React, { useEffect, useState } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/helper";
import { getAllServices, deleteService } from "./helper/adminRequestApiCalls";
import Tables from "./Tables";
import Footer from "../user/Footer";
const ManageRequest = () => {
  const [services, setServices] = useState([]);
  const { user, token } = isAuthenticated();

  const preload = () =>
    getAllServices().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setServices(data);
      }
    });
  useEffect(() => {
    preload();
  }, []);

  const deleteThisService = (serviceId) => {
    deleteService(serviceId, user._id, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        preload();
      }
    });
  };
  return (
    <Base title="Welcome admin" description="Manage Services here">
      <Link className="btn btn-info" to={`/admin/dashboard`}>
        <span className="">Admin Home</span>
      </Link>
      <div className="row">
        <div className="col-12">
          <h2 className="display-4 text-center text-white mb-5">Services</h2>
          {services.map((service, index) => (
            <div key={index} className="row text-center mb-2 ">
              <div className="col-12">
                <Tables
                  index={index}
                  name={service.name}
                  phoneno={service.phone}
                  address={service.address}
                  brand={service.brand}
                  car={service.car}
                  fueltype={service.fuelType}
                  description={service.serviceDescription}
                />

                <div className="float-right mb-2">
                  <button
                    onClick={() => {
                      deleteThisService(service._id); //if we would have not pass any value
                      //we could have use {delteThisProduct} method..here we r accessing
                      //it by callback function method
                    }}
                    className="btn btn-danger"
                  >
                    Delete above Service
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </Base>
  );
};
export default ManageRequest;
