import React, { useState } from "react";
import logo from "../New folder/OIP.jpg";
import { Backdrop, Button, CircularProgress, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = function () {
  const [showLogin, setShowLogin] = useState(false);
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [logInStatus, setLoginStatus] = React.useState("");
  const [signInStatus, setSignStatus] = React.useState("");

  const navigate = useNavigate();

  const changeHandler = async (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // login

  const loginHandler = async (e) => {
    setLoading(true);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const response = await axios.post(
        "http://localhost:3990/user/login",
        data,
        config
      );
      setLoginStatus({ msg: "success", key: Math.random() });
      setLoading(false);
      localStorage.setItem("userData", JSON.stringify(response.data.token));
      navigate("/app/welcome");
    } catch (err) {
      setLoginStatus({
        msg: "Invalid User name or password",
        key: Math.random(),
      });
      setLoading(false);
    }
  };
  const signUpHandler = async () => {
    setLoading(true);
    try {
      const config = {
        headers: { "Content-type": "application/json" },
      };

      const response = await axios.post(
        "http://localhost:3990/user/register",
        data,
        config
      );
      setSignStatus({ msg: "success", key: Math.random() });
      navigate("/app/welcome");
      localStorage.setItem("userdata", JSON.stringify(response.data));
      // console.log(response.data.token)

      setLoading(false);
    } catch (err) {
      if (err.response) {
        if (err.response.status === 405) {
          setSignStatus({
            msg: "User with this email ID already exists",
            key: Math.random(),
          });
        } else if (err.response.status === 406) {
          setSignStatus({
            msg: "User name already taken, please choose another one",
            key: Math.random(),
          });
        } else {
          setSignStatus({
            msg: "An error occurred during signup",
            key: Math.random(),
          });
        }
      } else {
        // Handle the case where there is no response object
        console.error("Error:", err);
        // You can set a default error message or take other appropriate actions.
      }
      
      setLoading(false);
    }
  };
  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="secondary" />
      </Backdrop>

      <div className="login-container">
        <div className="image-container">
          <img src={logo} alt="logo" className="welcome-logo" />
        </div>

        {showLogin ? (
          <div className="login-box">
            <p className="login-text">Login to your Account</p>
            <TextField
              onChange={changeHandler}
              id="login-user-name-input"
              label="Enter user name"
              variant="outlined"
              color="secondary"
              name="name"
            />

            <TextField
              onChange={changeHandler}
              id="login-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              color="secondary"
              name="password"
            />
            <Button variant="outlined" color="secondary" onClick={loginHandler}>
              Login
            </Button>
            <p>
              Don't have an Acconut?{" "}
              <Button
                className="hyper"
                onClick={() => {
                  setShowLogin(false);
                }}
              >
                {" "}
                Sign up
              </Button>
            </p>
          </div>
        ) : (
          <div className="login-box">
            <p className="login-text"> Create your Account</p>
            <TextField
              onChange={changeHandler}
              id="sign-up-user-name-input"
              label="Enter user name"
              variant="outlined"
              color="secondary"
              name="name"
            ></TextField>

            <TextField
              onChange={changeHandler}
              id="sign-up-email-input"
              label="Enter Email"
              variant="outlined"
              color="secondary"
              name="email"
            />
            <TextField
              onChange={changeHandler}
              id="sign-up-password-input"
              label="password"
              type="password"
              autoComplete="password"
              color="secondary"
              name="password"
            />
            <Button
              variant="outlined"
              color="secondary"
              onClick={signUpHandler}
            >
              Sign up
            </Button>

            <p>
              Already have an Account?{" "}
              <Button
                className="hyper"
                onClick={() => {
                  setShowLogin(true);
                }}
              > Login</Button>
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Login