import React from "react";
import "./SectionTwo.scss";
function SectionTwo() {
  return (
    <div className="section-two">
      {/* total workign time doughnut chart */}
      <div className="comp working">Working Time</div>
      {/*   Productivity, Absent, Arrived, Late */}
      <div
        className="comp main4Components"
        style={{
          color: "white",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "1fr 1fr",
          gap: "10px",
          marginLeft: "3px",
          marginRight: "3px",
        }}
      >
        <div
          style={{
            backgroundColor: "green",
            color: "white",
            borderRadius: "10px",
          }}
        >
          1
        </div>
        <div
          style={{
            backgroundColor: "orange",
            color: "white",
            borderRadius: "10px",
          }}
        >
          1
        </div>
        <div
          style={{
            backgroundColor: "blue",
            color: "white",
            borderRadius: "10px",
          }}
        >
          1
        </div>
        <div
          style={{
            backgroundColor: "pink",
            color: "white",
            borderRadius: "10px",
          }}
        >
          1
        </div>
      </div>
      {/* Productive, Slacking */}
      <div className="comp twoComponents">2 Components</div>
    </div>
  );
}

export default SectionTwo;
