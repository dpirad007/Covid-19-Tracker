import React from "react";
import WorldChart from "../../components/WorldChart/WorldChart";
import BumpChart from "../../components/BumpChart/BumpChart";
import ChoroChart from "../../components/ChoroChart/ChoroChart";
import "./World.css";

const World = () => {
  return (
    <div className="main">
      <h1 style={{ color: "white" }}>Corona Virus Tracker</h1>
      <WorldChart />
      <BumpChart style={{ height: "500px" }} />
      <ChoroChart style={{ height: "500px" }} />
    </div>
  );
};

export default World;
