import React from "react";
import "./SectionFour.scss";
import MostLogged from "../MostLogged/MostLogged";
import ProductiveApps from "../ProductivityApps/ProductiveApps";
import UnProductive from "../UnProductiveApps/UnProductive";
import NeutralApp from "../Neutral Apps/NeutralApp";

function SectionFour() {
  return (
    <div className="section-four">
      <div className="most logged">
        <MostLogged />
      </div>

      <div className="most productive">
        <ProductiveApps />
      </div>
      <div className="most undproductive">
        <UnProductive />
      </div>
      <div className="most neutral">
        <NeutralApp />
      </div>
    </div>
  );
}

export default SectionFour;
