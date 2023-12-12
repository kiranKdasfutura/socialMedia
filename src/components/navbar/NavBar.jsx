import React, { useEffect, useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { FaRegMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoAppsSharp } from "react-icons/io5";
import { IoSearchCircleOutline } from "react-icons/io5";

import { FaUserCircle } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";

import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../../store/darkModeSlice";

const NavBar = () => {
  //importing theme from persist after implementation of redux persist
  const theme = useSelector((state) => state.theme.theme);
  
  console.log("theme in navbar", theme);
  const dispatch = useDispatch();

//22 commented codes

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/login" style={{ textDecoration: "none" }}>
          <span>SocialMedia</span>
        </Link>
        <IoHome />
        {theme ? (
          <MdOutlineWbSunny onClick={() => dispatch(toggleTheme(theme))} />
          ) : (
          <FaRegMoon onClick={() => dispatch(toggleTheme(theme))} />
        )}
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
          <img
            src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
            alt=""
          />
          <span>kiranKdas</span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
//22
  // const [darkMode, setDarkMode] = useState(
  //   JSON.parse(localStorage.getItem("darkMode")) || false
  // );
  // useEffect(() => {
  //   localStorage.setItem("darkMode", darkMode);
  // }, [darkMode]);