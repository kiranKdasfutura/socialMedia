import React from "react";
import { FaUserFriends } from "react-icons/fa";
import { MdGroups2 } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { FaBusinessTime } from "react-icons/fa6";
import { MdSmartDisplay } from "react-icons/md";
import { MdEmojiEvents } from "react-icons/md";

import "./leftBar.scss";
const Leftbar = () => {
  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img
              src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
              alt=""
            />
            <span>kiranKdas</span>
          </div>

          <div className="item">
            <span className="icon">
              <FaUserFriends />
            </span>
            <span>Friends</span>
          </div>

          <div className="item">
            <span className="icon">
              <MdGroups2 />
            </span>
            <span>groups</span>
          </div>

          <div className="item">
            <span className="icon">
              <FaBusinessTime />
            </span>
            <span>market</span>
          </div>

          <div className="item">
            <span className="icon">
              <MdSmartDisplay />
            </span>
            <span>news</span>
          </div>

          <div className="item">
            <span className="icon">
              <MdEmojiEvents />
            </span>
            <span>events</span>
          </div>
        </div>
        <hr />
        {/* //second menu */}
        <div className="menu">
          <span>Your shortcuts</span>
          <div className="item">
            <span className="icon">
              <FaBusinessTime />
            </span>
            <span>message</span>
          </div>

          <div className="item">
            <span className="icon">
              <MdSmartDisplay />
            </span>
            <span>your Videos</span>
          </div>

          <div className="item">
            <span className="icon">
              <MdEmojiEvents />
            </span>
            <span>events</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>others</span>
          <div className="item">
            <span className="icon">
              <MdEmojiEvents />
            </span>
            <span>events</span>
          </div>
          <div className="item">
            <span className="icon">
              <MdEmojiEvents />
            </span>
            <span>events</span>
          </div>
          <div className="item">
            <span className="icon">
              <MdEmojiEvents />
            </span>
            <span>events</span>
          </div>
          <div className="item">
            <span className="icon">
              <MdEmojiEvents />
            </span>
            <span>events</span>
          </div>
          <div className="item">
            <span className="icon">
              <MdEmojiEvents />
            </span>
            <span>events</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leftbar;
