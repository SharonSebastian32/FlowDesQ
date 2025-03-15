import React from "react";

function AppUsage() {
  return (
    <div
      style={{
        top: "1056px",
        left: "90px",
        gap: "3px",
        backgroundColor: "white",
        flexDirection: "row",
        display: "flex",
        color: "white",
      }}
    >
      <div
        style={{
          width: "300px",
          height: "216px",
          backgroundColor: "red",
          margin: "3px",
        }}
      >
        Most Offline Time Logged
      </div>
      <div
        style={{
          width: "435px",
          height: "216px",
          backgroundColor: "blue",
          margin: "3px",
        }}
      >
        Productive Apps
      </div>
      <div
        style={{
          width: "435px",
          height: "216px",
          backgroundColor: "purple",
          margin: "3px",
        }}
      >
        Unproductive Apps
      </div>
      <div
        style={{
          width: "300px",
          height: "216px",
          backgroundColor: "yellowgreen",
          margin: "3px",
        }}
      >
        Neutral Apps{" "}
      </div>
    </div>
  );
}

export default AppUsage;
