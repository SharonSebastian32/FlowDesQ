import React from "react";
import "./Section.scss";
import Clock from "../FirstWidgets/Clock/Clock";
import Effeciency from "../FirstWidgets/Effeciency/Effeciency";
import ProductivityBar from "../Graphs/BarChart/ProductivityBar";
function SectionOne() {
  return (
    <div className="section-one-container">
      <div className="item item-1">
        <Clock />
      </div>
      <div className="item item-2">
        <ProductivityBar />
      </div>
      <div
        className="item item-3"
        style={{
          backgroundColor: "#EFEFF5",
        }}
      >
        <Effeciency />
      </div>
    </div>
  );
}

export default SectionOne;
