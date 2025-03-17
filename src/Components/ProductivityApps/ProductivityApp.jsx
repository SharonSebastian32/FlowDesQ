import React from "react";
import "./Productivity.scss";
import { FaArrowTrendDown } from "react-icons/fa6";
function ProductivityApp() {
  return (
    <div className="productivity">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div>
          <span>Productivity Apps</span>
          <span
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              gap: "10px",
            }}
          >
            <span>
              <FaArrowTrendDown
                style={{
                  backgroundColor: "#CE7171",
                  borderRadius: "50%",
                  color: "#900C0C",
                  padding: "4px",
                  height: "20px",
                  width: "20px",
                  rotate: "120deg",
                }}
              />
            </span>
            <span>+3% Increase than Yesterday</span>
          </span>
        </div>
        <div>Naivgator</div>
      </div>
    </div>
  );
}

export default ProductivityApp;
