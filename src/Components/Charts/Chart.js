import React from "react";
import { useLoaderData } from "react-router-dom";
import Statistics from "./Statistics";

const Chart = () => {
  const chartDataLoader = useLoaderData();
  const chartData = chartDataLoader.data;
  // const { name, total } = chartData;

  // const { id, name, total } = chartData;
  return (
    <div>
      {chartData.map((data) => {
        return <Statistics key={data.id} data={data}></Statistics>;
      })}
    </div>
  );
};

export default Chart;
