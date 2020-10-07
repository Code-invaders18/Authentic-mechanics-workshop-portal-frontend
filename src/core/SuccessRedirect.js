import React from "react";
import Base from "./Base";
import Footer from "../user/Footer";

const SuccessRedirect = () => {
  return (
    <div>
      <Base>
        <div className="container text-center mb-5 mt-3">
          <h2 className="display-4">Request Success Redirect !!</h2>
          <br />
          <br />
          <div
            className="container ml-3 mr-3 px-5 py-5"
            style={{ outline: "1px dashed white", marginTop: "10px" }}
          >
            <h3>
              Thankyou for making a service request, our workshop operator will
              make a callback in a short-while or you can contact us at -
            </h3>
            <br />
            <h3>Contact us :- 9311443403 , 9582908086 , 9811408044</h3>
          </div>
        </div>
      </Base>
      <div style={{ marginTop: "100px" }}>
        <Footer />
      </div>
    </div>
  );
};
export default SuccessRedirect;
