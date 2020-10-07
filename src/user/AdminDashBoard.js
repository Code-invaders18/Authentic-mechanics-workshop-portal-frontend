import React from "react";
import Base from "../core/Base";
import { isAuthenticated } from "../auth/helper/index";
import { Link } from "react-router-dom";
import DashboardHeader from "../core/DashboardHeader";
import Footer from "./Footer";

const AdminDashboard = () => {
  const {
    user: { name, email, role },
  } = isAuthenticated(); //here we have done nested destructuring

  const adminLeftSide = () => {
    return (
      <div className="card">
        <h4 className="card-header bg-dark text-white">Admin Navigation</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <Link to="/admin/manage/service" className="nav-link text-success">
              Manage Services
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/admin/service/record" className="nav-link text-success">
              Admin Database Record
            </Link>
          </li>
        </ul>
      </div>
    );
  };
  const adminRightSide = () => {
    return (
      //mb-4 means bottom margin =4
      <div className="card mb-4">
        <h4 className="card-header">Admin Information</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <span className="badge badge-success mr-2">Name:</span>
            {name}
          </li>
          <li className="list-group-item">
            <span className="badge badge-success mr-2">Email:</span>
            {email}
          </li>
          <li className="list-group-item">
            <span className="badge badge-danger">Admin Area</span>
          </li>
        </ul>
      </div>
    );
  };
  return (
    <div>
      <Base className="container bg-success p-4 mt-4">
        <DashboardHeader title="Welcome to Admin Dashboard Pannel!!" />;
        <div className="row">
          <div className="col-3">{adminLeftSide()}</div>
          <div className="col-9">{adminRightSide()}</div>
        </div>
      </Base>
      <Footer />
    </div>
  );
};
export default AdminDashboard;
//<DashboardHeader title="Welcome to Admin Dashboard Pannel!!" />;
