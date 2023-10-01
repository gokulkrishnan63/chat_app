import React, { useState, useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import MessageOthers from "./MessageOthers";
import MessageSelf from "./MessageSelf";
import "./myStyles.css";

const ChatArea = () => {
  const [conversation] = useState([
    { name: "Test#1", lastMessage: "Last Message #1", timeStamp: "today" },
    { name: "Test#2", lastMessage: "Last Message #2", timeStamp: "today" },
    { name: "Test#3", lastMessage: "last Message #3", timeStamp: "today" },
  ]);
  useEffect(() => {}, []);

  let props = conversation[0];
  return (
    <>
      <div className="chatArea-container">
        <div className="chatArea-header">
          <p className="con-icon">{props.name[0]}</p>
          <div className="header-text">
            <p className="con-title">{props.name}</p>
            <p className="con-timeStamp">{props.timeStamp}</p>
          </div>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </div>

        <div className="messages-container">
          <MessageOthers />
          <MessageSelf />
        </div>
        <div className="text-input-area">
          <input
            type="text"
            placeholder="Type a Message"
            className="search-box"
          />
          <IconButton>
            <SendIcon />
          </IconButton>
        </div>
      </div>
    </>
  );
};

export default ChatArea;
