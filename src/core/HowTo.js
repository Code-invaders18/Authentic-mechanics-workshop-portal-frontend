import React from "react";
import Store from "../store.png";

const HowTo = () => {
  return (
    <div className="bg-white ml-4 mr-4 mb-4 px-5 py-5 mt-5">
      <img
        className="stepsToFollow"
        src={Store}
        alt="Here we an img"
        style={{ width: "7%" }}
      />
      <h2 className="display-4 text-center mb-5">
        How to make service Request!!
      </h2>

      <div>
        <h4 className="monospace">
          Steps to make a Service-Request for your car:-
        </h4>
        <br />
        <h4 className="monospace textspace">
          1). For a new user, you have to sign up our page and make an account
          by entering name, email and password.
        </h4>
        <h4 className="monospace textspace">
          2). After SignUp, you will be redirected to a Signin page.
        </h4>
        <h4 className="monospace textspace">
          3). After Signin ,a User Dashboard will open and you will see a
          Service-Request button and our Workshop-Services.
        </h4>
        <h4 className="monospace textspace">
          4). To make a request ,click on the Service-Request tab and a
          Service-Request form will open.
        </h4>
        <h4 className="monospace textspace">
          5). In service form ,fill all the necessary details of your car. In a
          Description Field, enter the problems you are facing in your car.
        </h4>
        <h4 className="monospace textspace">
          6). After submitting Service-Request form. Our operator will make you
          a callback.
        </h4>
        <br />
        <h4 className="monospace">
          (Note :- If you want to book your car diagnose at our store-workshop,
          you can make a service request or you can contact us directly. Saving
          our customer's time and money is our first priority.)
        </h4>
      </div>
    </div>
  );
};
export default HowTo;
