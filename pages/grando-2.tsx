import type { NextPage } from "next";
import Head from "next/head";
import { Center, Text } from "@chakra-ui/react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import HighchartsExporting from "highcharts/modules/exporting";
import { useRef } from "react";
import MyStockChart from "../components/MyStockChart";

if (typeof Highcharts === "object") {
  HighchartsExporting(Highcharts);
}

const options: Highcharts.Options = {
  title: {
    text: "My chart",
  },
  series: [
    {
      type: "line",
      data: [1, 2, 3],
    },
  ],
};

const Grando2: NextPage = () => {
  const configPrice = {
    yAxis: [
      {
        offset: 20,

        labels: {
          x: -15,
          style: {
            color: "#000",
            position: "absolute",
          },
          align: "left",
        },
      },
    ],
    tooltip: {
      shared: true,
    },
    plotOptions: {
      series: {
        showInNavigator: true,
        gapSize: 6,
      },
    },
    title: {
      text: `Bitcoin stock price`,
    },
    chart: {
      height: 600,
    },

    credits: {
      enabled: false,
    },

    legend: {
      enabled: true,
    },
    xAxis: {
      type: "date",
    },
    rangeSelector: {
      buttons: [
        {
          type: "day",
          count: 1,
          text: "1d",
        },
        {
          type: "day",
          count: 7,
          text: "7d",
        },
        {
          type: "month",
          count: 1,
          text: "1m",
        },
        {
          type: "month",
          count: 3,
          text: "3m",
        },
        {
          type: "all",
          text: "All",
        },
      ],
      selected: 4,
    },
    series: [
      {
        name: "Price",
        type: "spline",

        tooltip: {
          valueDecimals: 2,
        },
      },
    ],
  };
  return (
    <div>
      <HighchartsReact config={configPrice}></HighchartsReact>
    </div>
  );
};

export default Grando2;
