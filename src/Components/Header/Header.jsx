import React from "react";
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";
import { FaCalendarDays } from "react-icons/fa6";
import { MdOutlineCalendarMonth } from "react-icons/md";

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
      <div className="sub-header">
        <div className="text-dash">Dashboard</div>
        <div id="calendar-setup">
          <div id="date-info"> December 25 2024</div>
          <div>
            <FaCalendarDays className="calendar-icon" />
          </div>
          <div>
            <div>
              <GoChevronLeft id="left-nav" />
              <GoChevronRight id="right-nav" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
