import React, { useState } from "react";
import "./post.scss";
import { IoIosOptions } from "react-icons/io";
import { Link } from "react-router-dom";

import { CiHeart } from "react-icons/ci";
import { FcLike } from "react-icons/fc";
import { IoIosShareAlt } from "react-icons/io";
import { AiOutlineComment } from "react-icons/ai";
import Comments from "../comments/Comments";

const Post = ({ post }) => {
    const [commentOpen, setCommentOpen] = useState(false)
  const liked = false;
  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={post.profilePic} alt="" />
            <div className="details">
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{post.name}</span>
              </Link>
              <span className="date">1 min ago</span>
            </div>
          </div>
          <IoIosOptions />
        </div>
        <div className="content">
          <p>{post.desc}</p>
          <img src={post.img} alt="" />
        </div>
        <div className="info">
          {/* like */}
          <div className="item">
            {liked ? <FcLike /> : <CiHeart />}
            10 Likes
          </div>
          {/* comments */}
          <div className="item" onClick={()=>setCommentOpen(!commentOpen)}>
            <AiOutlineComment />
            10 Comments
          </div>
          {/* share */}
          <div className="item">
            <IoIosShareAlt />
            Share
          </div>
        </div>
        {commentOpen && <Comments/>}
      </div>
    </div>
  );
};

export default Post;
