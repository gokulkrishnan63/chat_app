import React, { useState } from "react";
// material icon react ==========================================
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import NightlightIcon from "@mui/icons-material/Nightlight";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
// =========================================================

import Conversations from "./conversations";


function Sidebar() {
  const [conversations] = useState([
    { name: "Best#1", lastMessage: "Last Message #1", timeStamp: "today" },
    { name: "Test#2", lastMessage: "Last Message #2", timeStamp: "today" },
    { name: "Test#3", lastMessage: "Last Message #3", timeStamp: "today" },
  ]);
  return (
    <div className="sidebar-container">
      <div className="sb-header">
        <div>
          <IconButton>
            <AccountCircleIcon />
          </IconButton>
        </div>
        <div>
          <IconButton>
            <PersonAddIcon />
          </IconButton>
          <IconButton>
            <GroupAddIcon />
          </IconButton>
          <IconButton>
            <AddCircleIcon />
          </IconButton>
          <IconButton>
            <NightlightIcon />
          </IconButton>
        </div>
      </div>
      <div className="sb-search">
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input type="text" placeholder="search" className="search_box" />
      </div>
      <div className="sb-conversations">
        {conversations.map((conversation, index) => (
          <div key={index}>
            <Conversations props={conversation} />
            {/* <ChatArea/> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
