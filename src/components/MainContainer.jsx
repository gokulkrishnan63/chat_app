import React, { useState } from "react";
import "./myStyles.css";
import Sidebar from "./Sidebar";
import ChatArea from "./ChatArea";
import Welcome from "./Welcome";
import CreateGroups from "./CreateGroups";

function MainComponents() {
  const [conversation] = useState([
    { name: "Test#1", lastMessage: "Last Message #1", timeStamp: "today" },
    { name: "Test#2", lastMessage: "Last Message #2", timeStamp: "today" },
    { name: "Test#3", lastMessage: "last Message #3", timeStamp: "today" },
  ]);
  return (
    <>
      <div className="main-container">
        <Sidebar />
        {/* <Welcome/> */}
        <CreateGroups/>
        {/* <ChatArea props={conversation[0]} /> */}
      </div>
    </>
  );
}

export default MainComponents;
