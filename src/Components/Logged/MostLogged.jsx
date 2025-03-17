import React from "react";
import "./MostLogged.scss";

import { HiArrowUpRight } from "react-icons/hi2";
import { MdGroups } from "react-icons/md";
import { FaArrowTrendDown } from "react-icons/fa6";

function MostLogged() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",

          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="offline-time-logged">
          <span id="title" style={{}}>
            Most Offline Time Logged
          </span>
          <span id="content">
            <span id="icon">
              <FaArrowTrendDown id="icon-symbol" />
            </span>
            <span id="text-content">+3% Increase than Yesterday </span>
          </span>
        </div>
        <div>
          <HiArrowUpRight
            id="arrow-outward"
            style={{
              backgroundColor: "#d9dbde",
              borderRadius: "50%",
              padding: "4px",
              height: "35px",
              width: "35px",
            }}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div id="offline">
          <MdGroups
            style={{
              height: "50px",
              width: "50px",
            }}
          />
        </div>
        <span
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            fontFamily: "Montserrat",
            fontWeight: 400,
            fontSize: 12,
            lineHeight: "100%",
            letterSpacing: 0,
            color: "#A1A1A1",
          }}
        >
          No One is offline
        </span>
      </div>
    </>
  );
}

export default MostLogged;
