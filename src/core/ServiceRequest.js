import React, { useState } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { createService } from "./helper/serviceRequestApiCalls";
import { isAuthenticated } from "../auth/helper";
import DashboardHeader from "./DashboardHeader";
import { createRecord } from "./helper/createRecordApiCalls";
import Footer from "../user/Footer";

const ServiceRequest = () => {
  const [values, setValues] = useState({
    name: "",
    phone: "",
    address: "",
    brand: "",
    car: "",
    model: "",
    fuelType: "",
    serviceDescription: "",
    serviceVisit: "",
    error: "",
    didRedirect: false,
    success: false,
  });
  //will do destructure
  const {
    name,
    phone,
    address,
    brand,
    car,
    model,
    fuelType,
    serviceDescription,
    serviceVisit,
    error,
    success,
    didRedirect,
  } = values;
  const { user, token } = isAuthenticated();
  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };
  const onSubmit = (event) => {
    event.preventDefault();

    setValues({ ...values, error: false }); //all values will be brought here when we use'...values'
    createService(
      user._id,
      {
        name,
        phone,
        address,
        brand,
        car,
        model,
        fuelType,
        serviceDescription,
        serviceVisit,
      },
      token
    )
      .then((data) => {
        if (data.error) {
          setValues({
            ...values,
            error: data.error,
            success: false,
            didRedirect: false,
          });
        } else {
          setValues({
            ...values,
            name: "",
            phone: "",
            address: "",
            brand: "",
            car: "",
            model: "",
            fuelType: "",
            serviceDescription: "",
            serviceVisit: "",
            error: "",
            success: true,
            didRedirect: true,
          });
        }
      })
      .catch(console.log("Error in making a service request"));
    //saving record in the database
    createRecord(
      user._id,
      {
        name,
        phone,
        address,
        brand,
        car,
        model,
        fuelType,
        serviceDescription,
        serviceVisit,
      },
      token
    )
      .then((data) => {
        if (data.error) {
          setValues({
            ...values,
            error: data.error,
            success: false,
          });
        } else {
          setValues({
            ...values,
            name: "",
            phone: "",
            address: "",
            brand: "",
            car: "",
            model: "",
            fuelType: "",
            serviceDescription: "",
            serviceVisit: "",
            error: "",
            success: true,
          });
        }
      })
      .catch(console.log("Error in saving a service request in DB"));
  };

  const performRedirect = () => {
    if (didRedirect) {
      return <Redirect to="/user/servicerequest/success" />;
    }
  };

  const serviceRequestForm = () => {
    return (
      <div className="row">
        <div className="col-12  text-left">
          <form>
            <div className="form-group">
              <label className="text-light">Name</label>
              <input
                className="form-control"
                onChange={handleChange("name")}
                type="text"
                value={name}
                placeholder="eg:-xyz"
              />
            </div>
            <div className="form-group">
              <label className="text-light">Phone No.</label>
              <input
                className="form-control"
                onChange={handleChange("phone")}
                type="Number"
                value={phone}
                placeholder="ex-9XXXXXXX9"
              />
            </div>
            <div className="form-group">
              <label className="text-light">Address</label>
              <input
                className="form-control"
                onChange={handleChange("address")}
                type="text"
                value={address}
                placeholder="Ex-FlatNo,locality,area,landmark"
              />
            </div>

            <div className="form-group">
              <label className="text-light">Car Brand</label>
              <input
                className="form-control mr-2"
                onChange={handleChange("brand")}
                type="text"
                value={brand}
                placeholder="Ex-Hyundai"
              />
            </div>
            <div className="form-group">
              <label className="text-light">Car with variant</label>
              <input
                className="form-control"
                onChange={handleChange("car")}
                type="text"
                value={car}
                placeholder="Ex-Santafe"
              />
            </div>

            <div className="form-group">
              <label className="text-light">Car Model</label>
              <input
                className="form-control"
                onChange={handleChange("model")}
                type="number"
                value={model}
                placeholder="Ex-2018"
              />
            </div>
            <div className="form-group">
              <label className="text-light">Fuel-Type</label>
              <input
                className="form-control"
                onChange={handleChange("fuelType")}
                type="text"
                value={fuelType}
                placeholder="Ex-Diesel"
              />
            </div>

            <div className="form-group">
              <label className="text-light">Service Description</label>
              <input
                className="form-control"
                onChange={handleChange("serviceDescription")}
                type="text"
                value={serviceDescription}
                placeholder="Ex-Regular car service,suspension"
              />
            </div>
            <div className="form-group">
              <label className="text-light">Service Visit</label>
              <input
                className="form-control"
                onChange={handleChange("serviceVisit")}
                type="number"
                value={serviceVisit}
                placeholder="Ex-1"
              />
            </div>
            <button onClick={onSubmit} className="btn btn-secondary btn-block">
              <h4>Submit</h4>
            </button>
          </form>
        </div>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            {error}
          </div>
        </div>
      </div>
    );
  };
  const successMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-success"
            style={{ display: success ? "" : "none" }}
          >
            {performRedirect()}
            Your service request has been created
          </div>
        </div>
      </div>
    );
  };
  return (
    <Base>
      <DashboardHeader title="Welcome to Service Request Panel - " />
      <div className=" ex4 mb-5 text-center">
        <h4>
          For placing the Home Door-Step Car Service please fill the fields
          given below and make a CallBack Request.
        </h4>
      </div>
      <div
        className="serv col-md-4 offset-md-4"
        style={{ marginBottom: "730px" }}
      >
        <div>
          {successMessage()}
          {errorMessage()}
          {serviceRequestForm()}
        </div>
      </div>
      <Footer />
    </Base>
  );
};
export default ServiceRequest;
//<p className="text-white text-center">{JSON.stringify(values)}</p>
//{performRedirect()}
