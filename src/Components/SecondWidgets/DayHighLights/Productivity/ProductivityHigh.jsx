import React from "react";
import "./ProductivityHigh.scss";
import { LuAlarmClock } from "react-icons/lu";
import { IoMdTrendingUp } from "react-icons/io";
import Navi from "../../../../assets/Navigator.png";
function ProductivityHigh() {
  return (
    <div className="productivity-high">
      <div className="productivity-high-left">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            margin: "5px",
            alignItems: "center",
            paddingTop: "0px",
          }}
        >
          <div>
            <span
              class="material-symbols-outlined"
              style={{
                color: "green",
                backgroundColor: "#F1F1F1",
                height: "40px",
                width: "40px",
                // padding: "2px 10px",
                borderRadius: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              avg_time
            </span>
          </div>
          <div className="productivity-text">Productivity</div>
        </div>

        <div
          style={{
            alignItems: "center",
            display: "flex",
            paddingTop: "7px",
          }}
          className="productivity-percentage"
        >
          76%
        </div>
        <div
          style={{
            display: "flex",
            paddingTop: "30px",
            flexDirection: "column",
            margin: "5px",
            color: "black",
          }}
        >
          <div
            style={{
              fontFamily: "Lexend",
              fontWeight: 300,
              fontSize: 16,
              lineHeight: "100%",
              letterSpacing: 0,
              padding: "3px",
            }}
          >
            Lorem Ipsum
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: "3px",
              gap: "5px",
            }}
          >
            <div>
              <IoMdTrendingUp
                style={{
                  color: "#43900C",
                  backgroundColor: "#e5ffd8",
                  height: "20px",
                  width: "20px",
                  padding: "5px",
                  borderRadius: "50px",
                }}
              />
            </div>
            <div
              style={{
                fontFamily: "Lexend",
                fontWeight: 300,
                fontSize: "12px",
                lineHeight: "100%",
                letterSpacing: "0px",
                color: "#252C58",
              }}
            >
              -10% Less than yesterday
            </div>
          </div>
        </div>
      </div>
      <div className="productivity-high-right">
        <div
          style={{
            height: "70%",
            backgroundColor: "#9cff6a",
          }}
        >
          Graph
        </div>
        <div
          style={{
            height: "30%",
            display: "flex",
            flexDirection: "row",
            // backgroundColor: "yellow",
            justifyContent: "flex-end",

            alignItems: "center",
          }}
        >
          <img
            src={Navi}
            alt=""
            style={{
              height: "68px",
              width: "68px",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductivityHigh;
