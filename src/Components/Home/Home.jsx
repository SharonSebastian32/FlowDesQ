import React from "react";
import "../../Styles/Home.css";
import SideBar from "../SideBar/SideBar";
import AdminInfo from "../Header/Header";
import Calendar from "../Calendar/Calendar";
import GridInfo from "../Grid/GridInfo";
function Home() {
  return (
    <div id="home">
      <SideBar />
      <div id="DataInformation">
        <AdminInfo />
        <Calendar />
        <GridInfo />
      </div>
    </div>
  );
}

export default Home;
