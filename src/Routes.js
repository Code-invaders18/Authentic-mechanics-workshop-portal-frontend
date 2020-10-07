import React from "react";
import Home from "./core/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import AdminRoute from "./auth/helper/AdminRoutes";
import PrivateRoute from "./auth/helper/PrivateRoutes";
import UserDashboard from "./user/UserDashBoard";
import AdminDashboard from "./user/AdminDashBoard";
import ServiceRequest from "./core/ServiceRequest";
import SuccessRedirect from "./core/SuccessRedirect";
import ManageRequest from "./admin/ManageRequest";
import AdminDatabaseRecord from "./admin/AdminDatabaseRecord";
import LegalNote from "./user/LegalNote";
import Contactus from "./user/Contactus";
const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/legal" exact component={LegalNote} />
        <Route path="/contactus" exact component={Contactus} />
        <PrivateRoute path="/user/dashboard" exact component={UserDashboard} />
        <PrivateRoute
          path="/user/servicerequest/success"
          exact
          component={SuccessRedirect}
        />
        <PrivateRoute
          path="/user/servicerequest"
          exact
          component={ServiceRequest}
        />
        <AdminRoute path="/admin/dashboard" exact component={AdminDashboard} />
        <AdminRoute
          path="/admin/manage/service"
          exact
          component={ManageRequest}
        />
        <AdminRoute
          path="/admin/service/record"
          exact
          component={AdminDatabaseRecord}
        />
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
