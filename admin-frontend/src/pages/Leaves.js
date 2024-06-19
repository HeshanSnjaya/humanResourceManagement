import React from "react";
import Welcome from "../components/Welcome";

const Leaves = () => {
  return (
    <div className="flex flex-col bg-[#d0e0e5] min-h-[100vh] ml-[220px]">
      <div className="flex flex-col pl-10 pt-5">
        <Welcome name="Welcome Lakmini" tab="Leaves" />
        <h1>This is leaves</h1>
      </div>
    </div>
  );
};

export default Leaves;
