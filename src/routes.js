import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Components/Header_footer/header";
import Footer from "./Components/Header_footer/footer";
import Home from "./Components/Home";
import SignIn from "./Components/Signin/index";
import Dashboard from "./Components/Admin/Dashboard";
import AuthGuard from "./Hoc/Auth";
const Routes = ({ user }) => {
  console.log(user);

  return (
    <BrowserRouter>s
      <Header user={user} />
      <Switch>
        <Route path="/dashboard" exact component={AuthGuard(Dashboard)} />
        <Route path="/sign_in" exact component={
          // passing the props from the routes and passing the user from when the application starts
          props=>(<SignIn {...props} user={user}/>)} />
        <Route path="/" exact component={Home} />
      </Switch>
      <ToastContainer theme="colored" />
      <Footer />
    </BrowserRouter>
  );
};

export default Routes;
