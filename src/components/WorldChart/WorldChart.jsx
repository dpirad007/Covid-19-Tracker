import React, { Fragment, useEffect, useState } from "react";

import { ResponsiveLine } from "@nivo/line";
import { fetchDailyData } from "../../api/index";

const theme = {
  axis: {
    ticks: {
      text: {
        fill: "black",
      },
    },
  },
};

const WorldChart = () => {
  const [globalData, setglobalData] = useState([]);

  useEffect(() => {
    const responseAPI = async () => {
      const data = await fetchDailyData();
      setglobalData(data);
    };
    responseAPI();
  }, []);

  let finalGlobalData = null;

  let DataInjection = null;

  if (globalData) {
    finalGlobalData = globalData.map(({ confirmed, date }, i) => {
      return { x: date + i, y: confirmed };
    });

    DataInjection = [
      {
        id: "Global",
        color: "",
        data: finalGlobalData,
      },
    ];
  }

  const finalChart =
    globalData.length && DataInjection.length ? (
      <ResponsiveLine
        theme={theme}
        data={DataInjection}
        colors={{ scheme: "category10" }}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        enableArea={true}
        enableGridX={false}
        enableGridY={false}
        enablePoints={false}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={null}
        axisLeft={{
          orient: "left",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
        }}
        pointSize={10}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
      />
    ) : (
      <h1 style={{ color: "white" }}>loading</h1>
    );

  return <Fragment>{finalChart}</Fragment>;
};

export default WorldChart;
