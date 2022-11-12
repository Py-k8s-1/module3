import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "../pages/Login";
import DashBoard from "../pages/Dashboard";
import Profie from "../pages/Profile";
import NotFound from "../pages/NonFound";
import PrivateRoute from "./PrivateRoute";
const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Login} exact/>
          <PrivateRoute path="/dashboard" component={DashBoard} />
          <PrivateRoute path="/profile" component={Profie} />
          <Route  component={NotFound} />

        </Switch>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
