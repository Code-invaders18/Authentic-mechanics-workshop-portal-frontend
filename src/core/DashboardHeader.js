import React from "react";
import { isAuthenticated } from "../auth/helper";

const DashboardHeader = ({ title }) => {
  //console.log(name);
  const {
    user: { name },
  } = isAuthenticated();
  return (
    <div className="text-center" style={{ paddingTop: "0px" }}>
      <h2 className="display-4">
        {title}
        <span className="display-4">{name}</span>
      </h2>

      <hr className="dashboard" />
    </div>
  );
};
export default DashboardHeader;
// <h3 className="display-5">
//         <span className="badge badge-success bg-large mr-2">Name:</span>
//         {name}
//       </h3>
