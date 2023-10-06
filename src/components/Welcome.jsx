import React from "react";
import logo from "../New folder/OIP.jpg";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const lightTheme = useSelector((state) => state.themeKey);
  const userData = JSON.parse(localStorage.getItem("token"));
  console.log(userData);
  const nav = useNavigate();

  if (!userData) {
    nav("/");
  }

  return (
    <>
      <div className={"welcome-container" + (lightTheme ? "" : "dark")}>
        <motion.img
          drag
          whileTap={{ scale: 1.05, rotate: 360 }}
          src={logo}
          alt="Logo"
          className="welcome-logo"
        />
        {userData.name}
        <p>View and text directly to people present in the chat Rooms.</p>
      </div>
    </>
  );
};

export default Welcome;
