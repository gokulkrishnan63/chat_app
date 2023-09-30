import React from "react";
import "./myStyles.css";
import Sidebar from "./Sidebar";
// import ChatArea from "./ChatArea";
// import Welcome from "./Welcome";
// import CreateGroups from "./CreateGroups";
// import UserGroups from "./User_Groups";
// invoked from react router dom
import { Outlet } from "react-router-dom";

function MainComponents() {

  return (
    <>
      <div className="main-container">
        <Sidebar />

        <Outlet />
      </div>
    </>
  );
}

export default MainComponents;
