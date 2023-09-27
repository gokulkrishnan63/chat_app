import React from "react";
import "./myStyles.css";
import Sidebar from "./Sidebar";
import WorkArea from "./workArea";

function MainComponents() {
  return (
    <>
      <div className="main-container">
        <Sidebar />
        <WorkArea />
      </div>
    </>
  );
}

export default MainComponents;
