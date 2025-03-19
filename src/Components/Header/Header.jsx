import React from "react";
import "./Header.scss";
function Header() {
  return (
    <div>
      <div
        className="header"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: "20px",
        }}
      >
        Logo Global-Search Admin Info messages notifications
      </div>
      <div className="line-seperator"></div>
      <div
        className="sub-header"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <span>Dashboard Text and Calendar</span>
      </div>
    </div>
  );
}

export default Header;
