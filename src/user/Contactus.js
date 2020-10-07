import React from "react";
import Base from "../core/Base";
import Footer from "./Footer";

const Contactus = () => {
  return (
    <Base>
      <div className="container text-center mb-5">
        <h2 className="display-4">Authentic Mechanics</h2>
        <br />
        <br />
        <div
          className="container ml-3 mr-3 px-5 py-5"
          style={{ outline: "1px dashed white" }}
        >
          <h3>
            Store/Workshop address :- Shop no.9, Sumit Complex,
            Mamura-car-market, Noida sec-66, U.P - 201309
          </h3>
          <br />
          <h3>Contact us :- 9311443403 , 9582908086 , 9811408044</h3>
        </div>
      </div>
      <div style={{ marginTop: "100px" }}>
        <Footer />
      </div>
    </Base>
  );
};
export default Contactus;
