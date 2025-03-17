import React from "react";
import "./SectionFour.scss";
import MostLogged from "../Logged/MostLogged";
import ProductivityApp from "../ProductivityApps/ProductivityApp";
function SectionFour() {
  return (
    <div className="section-four">
      {/* most offline time logged */}
      <div className="most logged">
        <MostLogged />
      </div>
      {/* Productivity Apps */}
      <div className="most productive">
        <ProductivityApp />
      </div>
      {/* Unproductivity Apps */}
      <div className="most undproductive">Unproductivity Apps</div>
      {/* Neutral Apps */}
      <div className="most neutral">Neutral Apps</div>
    </div>
  );
}

export default SectionFour;
