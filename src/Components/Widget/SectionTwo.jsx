import React from "react";
import "./SectionTwo.scss";
function SectionTwo() {
  return (
    <div className="section-two">
      {/* total workign time doughnut chart */}
      <div className="comp working">Working Time</div>
      {/*   Productivity, Absent, Arrived, Late */}
      <div className="comp main4Components">4 Components</div>
      {/* Productive, Slacking */}
      <div className="comp 2Components">2 Components</div>
    </div>
  );
}

export default SectionTwo;
