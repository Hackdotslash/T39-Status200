import { Button } from "@material-ui/core";
import React from "react";
import logo from "../../assets/logo.png";
import { useLocalContext } from "../../context/context";

import GlobalStyle from "../../globalStyles";
import Home from "../../pages/HomePage/Home";
import Services from "../../pages/Services/Services";
import Products from "../../pages/Products/Products";
import SignUp from "../../pages/SignUp/SignUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "../../components/ScrollToTop";
import { Navbar, Footer } from "../../components";

import "./style.css";
const Login = () => {
  const { login, loggedInUser } = useLocalContext();

  console.log(loggedInUser);
  return (
    <>
      <Router>
        <GlobalStyle />
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/products" component={Products} />
          <Route path="/signin" component={
            SignUp
          } onClick={() => login()} />
        </Switch>
        <Footer />
      </Router>
      <Button variant="contained" color="default" onClick={() => login()}>
        Login Now!
      </Button>
    </>

  );
};

export default Login;
