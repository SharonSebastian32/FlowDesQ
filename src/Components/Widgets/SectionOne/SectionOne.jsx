import "./SectionOne.css";
import React from "react";
import DateAndTime from "./DateAndTime";
import ProductivityBar from "./ProductivityBar";
import Performance from "./Performance";
const SectionOne = () => {
  return (
    <div className="section-one">
      <DateAndTime />
      <ProductivityBar />
      <Performance />
    </div>
  );
};

export default SectionOne;
