import React from "react";
import "./DeskTime.css";
function DeskTime() {
  return (
    <>
      <div
        id="deskTime"
        style={{
          top: "851px",
          left: "90px",
           backgroundColor: "gray",
          display: "flex",
          flexDirection: "row",
          color: "black",
        }}
      >
        <div
          style={{
            width: "310px",
            height: "196px",
            top: "1px",
            backgroundColor: "green",
            margin: "5px",
          }}
        >
          total time
        </div>
        <div
          style={{
            width: "492px",
            height: "197px",
            backgroundColor: "white",
            margin: "5px",
          }}
        >
          Productive
        </div>
        <div
          style={{
            width: "380px",
            height: "197px",
            borderWidth: "1px",
            backgroundColor: "blue",
            margin: "5px",
          }}
        >
          Unproductive
        </div>
        <div
          style={{
            width: "310px",
            height: "197px",
            borderWidth: "1px",
            margin: "5px",
            backgroundColor: "orange",
          }}
        >
          Effective
        </div>
      </div>
    </>
  );
}

export default DeskTime;
