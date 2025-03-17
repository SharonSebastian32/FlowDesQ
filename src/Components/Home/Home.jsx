import React from "react";
import "../../Styles/Home.css";
import SideBar from "../SideBar/SideBar";
import Header from "../Header/Header";
import SectionOne from "../Widget/SectionOne";
import SectionTwo from "../Widget/SectionTwo";
import SectionThree from "../Widget/SectionThree";
import SectionFour from "../Widget/SectionFour";
function Home() {
  return (
    <div id="home">
      <SideBar />
      <div id="DataInformation">
        {/* Header info */}
        <Header />
        {/* DashBoard Section One */}
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
      </div>
    </div>
  );
}

export default Home;
