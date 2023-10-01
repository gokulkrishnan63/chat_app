import React, { useState ,useEffect} from "react";
// material icon react ==========================================
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import NightlightIcon from "@mui/icons-material/Nightlight";
import LightModeIcon from "@mui/icons-material/LightMode";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
// =========================================================

import Conversations from "./conversations";
// useNavigate hooks it invoked from react-router-dom;
import { useNavigate } from "react-router-dom";
// useSelectorhook invoked from the react-redux;
import { useSelector,useDispatch } from "react-redux";

// import from theme slice

import { toggleTheme } from "../features/themeSlice";
function Sidebar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const lightTheme = useSelector((state) => state.themeKey);
 useEffect(()=>{},[])
  const [conversations] = useState([
    { name: "Best#1", lastMessage: "Last Message #1", timeStamp: "today" },
    { name: "Test#2", lastMessage: "Last Message #2", timeStamp: "today" },
    { name: "Test#3", lastMessage: "Last Message #3", timeStamp: "today" },
  ]);
  return (
    <>
      <div className="sidebar-container">
        {/* (lightTheme?"":" dark ") 
         1. () ==> why we set the bracket cause it should not append before click
         2. " dark " ==> it's important to leave space front and back
        
        */}
        <div className={"sb-header " + (lightTheme ? "" : " dark ")}>
          <div>
            <IconButton>
              <AccountCircleIcon
                className={"icon" + (lightTheme ? "" : " dark ")}
              />
            </IconButton>
          </div>
          <div>
            <IconButton
              onClick={() => {
                navigate("users");
              }}
            >
              <PersonAddIcon
                className={"icon" + (lightTheme ? "" : " dark ")}
              />
            </IconButton>
            <IconButton
              onClick={() => {
                navigate("groups");
              }}
            >
              <GroupAddIcon className={"icon" + (lightTheme ? "" : " dark ")} />
            </IconButton>
            <IconButton
              onClick={() => {
                navigate("create-groups");
              }}
            >
              <AddCircleIcon
                className={"icon" + (lightTheme ? "" : " dark ")}
              />
            </IconButton>
            <IconButton
              onClick={() => {
              (dispatch(toggleTheme()))
              }}
            >
              {lightTheme && (
                <NightlightIcon
                  className={"icon" + (lightTheme ? "" : " dark ")}
                />
              )}

              {!lightTheme && (
                <LightModeIcon
                  className={"icon" + (lightTheme ? "" : " dark ")}
                />
              )}
            </IconButton>
          </div>
        </div>
        <div className={"sb-search" + (lightTheme ? "" : " dark ")}>
          <IconButton>
            <SearchIcon className={"icon" + (lightTheme ? "" : " dark ")} />
          </IconButton>
          <input
            type="text"
            placeholder="search"
            className={"search_box" + (lightTheme ? "" : " dark ")}
          />
        </div>
        <div className={"sb-conversations" + (lightTheme ? "" : " dark ")}>
          {conversations.map((conversation, index) => (
            <div key={index}>
              <Conversations props={conversation} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
