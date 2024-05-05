import React from "react";
import Employee from "./Employee";
import Dash from "./Dash";

const Content = ({ activeTab }) => {
  let categoryComponent;

  switch (activeTab) {
    case "Dashboard":
      categoryComponent = <Dash />;
      break;
    case "Employee":
      categoryComponent = <Employee />;
      break;

    default:
      categoryComponent = null;
  }
  return (
    <div className="pl-[50px] bg-red-400 h-12 w-[100px]">
      {categoryComponent}
    </div>
  );
};

export default Content;
