import React from "react";
import logo from "../New folder/OIP.jpg";
import {  Button, TextField } from "@mui/material";

const Login = function () {
  return (
    <>
    <div className="login-container">
      <div className="image-container">
        <img src={logo} alt="logo" className="welcome-logo" />
      </div>
      <div className="login-box">
        <p className="login-text">login to your Accout</p>
        <TextField
          id="standard-basic"
          label="Enter User Name"
          variant="outlined"
        />
        <TextField
        id="outlined-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        />
        <Button variant="outline">Login</Button>
      </div>
    </div>
    </>
  );
};

export default Login;
