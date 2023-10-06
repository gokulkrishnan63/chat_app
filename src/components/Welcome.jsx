import React from "react";
import logo from "../New folder/OIP.jpg";
const Welcome = () => {
  return (
    <div className="welcome-container">
      <img src={logo} alt="logo" className="welcome-log" />
      <p>View and text directly to people present in the chat Rooms.</p>
    </div>
  );
};

export default Welcome;
