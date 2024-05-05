import React, { useState } from "react";
import Sidebar from "../components/SideBar";
import Content from "../components/Content";

const DashBoard = () => {
  const [activeScreen, setActiveScreen] = useState("Dashboard");

  const handleTabChange = (tab) => {
    setActiveScreen(tab);
  };
  return (
    <div>
      <Sidebar activetab={activeScreen} onTabChange={handleTabChange} />
      <Content activetab={activeScreen} />
    </div>
  );
};

export default DashBoard;
