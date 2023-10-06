import React, { useEffect, useState } from "react";
import "./myStyles.css";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import logo from "../New folder/OIP.jpg";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Users() {
  const token = JSON.parse(localStorage.getItem("token"));

  const lightTheme = useSelector((state) => state.themeKey);
  const [users, setUsers] = useState([]);
  const nav = useNavigate();


  useEffect(() => {
    if (!token) {
      nav("/");
      return;
    }
    const fetchUsers = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${token.token}`,
            "Content-Type": "application/json",
          },
        };
        const response = await axios.get("http://localhost:3990/user/fetchUsers", config);
  
        if (response.status === 200) {
          setUsers(response.data.users);
        } else {
        }
      } catch (error) {
        console.error("Error fetching users:", error.message);
      }
    };
    fetchUsers();
    
  }, [token, nav]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: "0.3" }}
        className={"list-container"}
      >
        <div className={"ug-header" + (lightTheme ? "" : " dark")}>
          <img
            src={logo}
            alt="Logo"
            style={{ height: "2rem", width: "2rem", marginLeft: "10px" }}
          />
          <p className={"ug-title" + (lightTheme ? "" : " dark")}>
            Available Users
          </p>
          <IconButton
            className={"icon" + (lightTheme ? "" : " dark")}
            onClick={() => {
              // Handle refresh button click
              // Add your refresh logic here
            }}
          >
            <RefreshIcon />
          </IconButton>
        </div>
        <div className={"sb-search" + (lightTheme ? "" : " dark")}>
          <IconButton className={"icon" + (lightTheme ? "" : " dark")}>
            <SearchIcon />
          </IconButton>
          <input
            type="text"
            placeholder="Search"
            className={"search-box" + (lightTheme ? "" : " dark")}
          />
        </div>
        <div className="ug-list">
          {users.map((user, index) => (
            <motion.div
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className={"list-tem" + (lightTheme ? "" : " dark")}
              key={index}
              onClick={() => {
                // You can add logic for handling user clicks here
              }}
            >
              <p className={"con-icon" + (lightTheme ? "" : " dark")}>
                {user.name[0]}
              </p>
              <p className={"con-title" + (lightTheme ? "" : " dark")}>
                {user.name}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Users;
