import React from "react";
import "./rightBar.scss";
const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="shadow">
          <div className="item">
            <span>Friends Request</span>
            <div className="user">
              <div className="userInfo">
                <img
                  src="https://img.freepik.com/premium-photo/indian-queen-goddess-devi-very-graceful-ai-generated-art_634423-1986.jpg?w=360"
                  alt=""
                />
                <span>Razia Sultana</span>
              </div>
              <div className="buttons">
                <button>friends</button>
                <button>remove</button>
              </div>
            </div>
            <hr />
            <div className="user">
              <div className="userInfo">
                <img
                  src="https://img.freepik.com/premium-photo/indian-queen-goddess-devi-very-graceful-ai-generated-art_634423-1986.jpg?w=360"
                  alt=""
                />
                <span>Razia Sultana</span>
              </div>
              <div className="buttons">
                <button>friends</button>
                <button>remove</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RightBar;
