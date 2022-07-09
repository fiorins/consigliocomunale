import React from "react";
import { useState, useEffect } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import ItemSeries from "highcharts/modules/item-series";

if (typeof Highcharts === "object") {
  ItemSeries(Highcharts);
}

export const ParliamentChart = (my_data: any) => {
  const [chartOptions, setChartOptions] = useState(my_data);

  return (
    <div style={{ width: "100%" }}>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </div>
  );
};
