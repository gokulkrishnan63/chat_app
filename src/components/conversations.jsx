import React from "react";
import { useNavigate } from "react-router-dom";
// this props fetch from chatArea
const Conversations = ({ props }) => {
  const navigate = useNavigate();
  return (
    <div
      className="conversation-container"
      onClick={() => {
        navigate("chat");
      }}
    >
      <p className="con-icon">{props.name[0]}</p>
      <p className="con-title">{props.name}</p>
      <p className="con-lastMessage">{props.lastMessage}</p>
      <p className="con-timeStamp">{props.timeStamp}</p>
    </div>
  );
};

export default Conversations;
