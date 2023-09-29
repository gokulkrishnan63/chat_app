import React from "react";
import DeleteIcon from "@mui/icons-material/Delete"
import { IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send"
import "./myStyles.css";

const ChatArea = ({props}) => {
  return( <div className="chatArea-container">
    
    <div className="chatArea-header">
      <p className="con-icon">{props.name[0]}</p>
    <div className="header-text">
      <p className="con-title">{props.name}</p>
      <p className="con-timeStamp">{props.timeStamp}</p>

    </div>
<IconButton>
  <DeleteIcon/>
</IconButton>

    </div>


    <div className="messages-container">Messages container</div>
    <div className="text-input-area"> 
    <input type="text" placeholder="Type a Message" className="search-box" />
    <IconButton>
      <SendIcon />
    </IconButton>
    </div>
  </div>)
};

export default ChatArea;
