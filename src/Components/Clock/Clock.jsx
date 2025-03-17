import React from "react";
import { GoSun } from "react-icons/go";

import "./Clock.scss";
function Clock() {
  return (
    <>
      <div className="clock-container">
        <div id="sub-container">
          <GoSun id="sun" />
          <span id="time">
            <span id="timer">9:02:09 AM</span>
            <span id="insight">Realtime Insight</span>
          </span>
        </div>

        <div className="day-date">
          <span id="today">Today: </span>
          <span id="date">4th December 2024</span>
        </div>

        <div id="view">
          <button>View Attendance</button>
        </div>
      </div>
    </>
  );
}

export default Clock;
