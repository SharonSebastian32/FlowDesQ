import React from "react";
import "./SectionFour.scss";
import MostLogged from "../MostLogged/MostLogged";

function SectionFour() {
  return (
    <div className="section-four">
      <div className="most logged">
        <MostLogged />
      </div>
      {/* Productivity Apps */}
      <div className="most productive"></div>
      {/* Unproductivity Apps */}
      <div className="most undproductive">Unproductivity Apps</div>
      {/* Neutral Apps */}
      <div className="most neutral">Neutral Apps</div>
    </div>
  );
}

export default SectionFour;
