import React from "react";
import Menu from "./Menu";
import Footer from "../user/Footer";

const Base = ({
  //title = "My Title",
  // description = "My description",
  className = "bg-dark text-white",
  children,
}) => (
  <div>
    <Menu />
    <div className="container-fluid">
      <div className={className}>{children}</div>
    </div>
  </div>
);
export default Base;
