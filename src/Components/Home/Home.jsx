import React from "react";
import "../../Styles/Home.css";
import SideBar from "../SideBar/SideBar";
import Header from "../Header/Header";
import SectionOne from "../Widgets/SectionOne/SectionOne";

function Home() {
  return (
    <div id="home">
      <SideBar />
      <div id="DataInformation">
        {/* Header info */}
        <Header />
        {/* DashBoard Section One */}
        <SectionOne />
      </div>
    </div>
  );
}

export default Home;
