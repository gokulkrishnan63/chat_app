import React from "react";
import "./myStyles.css";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import logo from "../New folder/OIP.jpg";
import { useSelector } from "react-redux";
const Groups = () => {
  const lightTheme = useSelector((state) => {
    return state.themeKey;
  });
  return (
    <>
      <div className="list-container">
        <div className={"ug-header" + (lightTheme ? "" : " dark ")}>
          <img
            src={logo}
            alt="img"
            style={{ height: "2rem", width: "2rem", marginLeft: "10px" }}
          />
          <p className={"ug-title" + (lightTheme ? "" : " dark ")}>
            Available Groups
          </p>
        </div>
        <div className="sb-search">
          <IconButton>
            <SearchIcon />
          </IconButton>

          <input type="text" placeholder="Search" className="search-box" />
        </div>

        <div className="ug-list">
          <div className="list-tem">
            <p className="con-icon">T</p>
            <p className="con-title">Test User</p>
          </div>

          <div className="list-tem">
            <p className="con-icon">T</p>
            <p className="con-title">Test User</p>
          </div>
          <div className="list-tem">
            <p className="con-icon">T</p>
            <p className="con-title">Test User</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Groups;
