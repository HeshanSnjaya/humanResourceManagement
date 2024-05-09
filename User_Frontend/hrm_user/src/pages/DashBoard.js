import React, { useState } from "react";
import Sidebar from "../components/SideBar";
import Content from "../components/Content";

const DashBoard = () => {
  // const [activeScreen, setActiveScreen] = useState("Dashboard");

  // const handleTabChange = (tab) => {
  //   setActiveScreen(tab);
  // };
  return (
    <div className="bg-red-500 h-[100px] w-[400px] ml-[300px]">
      <p>hellow</p>
      {/* <Sidebar activetab={activeScreen} onTabChange={handleTabChange} /> */}
      {/* <Content activetab={activeScreen} /> */}
    </div>
  );
};

export default DashBoard;
