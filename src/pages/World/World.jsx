import React, { useEffect, useState } from "react";
import WorldChart from "../../components/WorldChart/WorldChart";
import BumpChart from "../../components/BumpChart/BumpChart";
import ChoroChart from "../../components/ChoroChart/ChoroChart";

import { choropelthData, choropelthFinal } from "../../api/index";

import "./World.css";

const World = () => {
  const [data, SetData] = useState([]);
  useEffect(() => {
    async function run() {
      const arr = await choropelthData();
      const data = await choropelthFinal(arr);
      SetData(data);
    }
    run();
  }, []);

  return (
    <div className="main">
      <div className="wr-title">
        <h1>Total Confirmed Cases Distribution</h1>
      </div>
      <WorldChart />
      <ChoroChart style={{ height: "500px" }} data={data} />
    </div>
  );
};

export default World;
