import React from "react";
import "./GridInfo.css";
import Prodictivity from "../Productivity/Productive";
import DeskTime from "../DeskTime/DeskTime";
import AppUsage from "../AppUsage/AppUsage";
function GridInfo() {
  return (
    <>
      <div id="dataInfo">
        <div className="weather">Weather Forcast</div>
        <div className="productivity-bar">Productivity Info</div>
        <div className="work-info">
          <div>Effeciency</div>
          <div>Activity</div>
          <div>totalWorking</div>
        </div>
      </div>
      <Prodictivity />
      <DeskTime />
      <AppUsage />
    </>
  );
}

export default GridInfo;
