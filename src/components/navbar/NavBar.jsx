import React from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { FaRegMoon } from "react-icons/fa";
import { IoAppsSharp } from "react-icons/io5";
import { IoSearchCircleOutline } from "react-icons/io5";

import { FaUserCircle } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/login" style={{ textDecoration: "none" }}>
          <span>SocialMedia</span>
        </Link>
        <IoHome />
        <FaRegMoon />
        <IoAppsSharp />

        <div className="search">
          <IoSearchCircleOutline />
          <input type="text" placeholder="Search.." />
        </div>
      </div>
      <div className="right">
        <FaUserCircle />
        <IoMdMail />
        <IoIosNotifications />
        <div className="user">
          <img src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg" alt="" />
          <span>kiranKdas</span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
