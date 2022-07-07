import React from "react";
import { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

import ItemSeries from "highcharts/modules/item-series";

if (typeof Highcharts === "object") {
  ItemSeries(Highcharts);
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  title: {
    text: "My stock chart",
  },
  series: [
    {
      data: [1, 2, 3],
    },
  ],
};

export const ParliamentChart = (data: any) => {
  const [chartOptions, setChartOptions] = useState({
    chart: {
      type: "item",
      backgroundColor: "#ECE2D0",
      style: {
        fontFamily:
          "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
      },
    },

    plotOptions: {
      series: {
        point: {
          events: {
            legendItemClick: function () {
              return false;
            },
          },
        },
      },
    },

    credits: {
      enabled: true,
      position: {
        align: "center",
      },
    },

    exporting: { enabled: false },

    title: {
      text: "",
    },

    legend: {
      useHTML: true,
      labelFormat: '{name} <span style="opacity: 0.4">{y}</span>',
      layout: "horizontal",
      itemMarginTop: 3,
      // itemStyle: {
      //   fontSize: "11px",
      // },
      // align: "center",
      // symbolRadius: 0, //for changing to square
      // padding: 3,
      // itemMarginBottom: 5,
      // x: -10,
      // y: -50,
      // borderWidth: 0,
    },

    series: [
      {
        name: "Rappresentanti",
        keys: ["name", "y", "color", "label"],
        data: [
          ["Grando Sindaco", 4, "#073D74"],
          ["Noi di Ladispoli", 4, "#09529A"],
          ["Fratelli d'Italia", 2, "#0B66C1"],
          ["Cuori Ladispolani", 2, "#0D7AE7"],
          ["Lega", 2, "#2B8FF3"],
          ["Forza Italia", 1, "#51A3F5"],
          ["Alessandro Grando", 1, "#0087DC"],

          ["Ladispoli Attiva", 2, "#8F001A"],
          ["Per Pascucci Sindaco", 2, "#B80022"],
          ["Ladispoli Città", 1, "#E00029"],
          ["Alessio Pascucci", 1, "#FF0A37"],

          ["Silvia per Ladispoli", 1, "#548C2F"],
          ["Silvia Marongiu", 1, "#6EB83D"],

          ["Amelia Mollica Graziano", 1, "#FFD449"],
        ],
        dataLabels: {
          enabled: false,
          format: "{point.label}",
        },

        // Circular options
        center: ["50%", "85%"],
        size: "180%",
        startAngle: -100,
        endAngle: 100,
      },
    ],

    // NB: maxWidth and minWidth refer to chart sizes not screen size
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 2048,
            minWidth: 779,
          },
          chartOptions: {
            chart: {
              margin: 40,
            },
            legend: {
              // floating: true,
              // alignColumns: false,
              // enabled: false,
              // align: "center",
              // width: 450,
              // x: 40,
              // y: -10,
              // itemWidth: 100,
              // itemDistance: 10,
              // symbolWidth: 7,
              // symbolHeight: 28,
            },
            series: [
              {
                // Circular options
                center: ["50%", "50%"],
                size: "135%",
                startAngle: -100,
                endAngle: 100,
              },
            ],
          },
        },
        {
          condition: {
            maxWidth: 778,
            minWidth: 540,
          },
          chartOptions: {
            legend: {
              x: 10,
              y: 0,
            },
            series: [
              {
                // Circular options
                center: ["50%", "80%"],
                size: "180%",
                startAngle: -100,
                endAngle: 100,
              },
            ],
          },
        },
        {
          condition: {
            maxWidth: 539,
            minWidth: 310,
          },
          chartOptions: {
            legend: {
              itemStyle: {
                fontSize: "9px",
              },
              width: 400,
              x: 45,
              y: -30,
            },
            series: [
              {
                // Circular options
                center: ["50%", "70%"],
                size: "160%",
                startAngle: -100,
                endAngle: 100,
              },
            ],
          },
        },
      ],
    },
  });

  // useEffect(() => {
  //   setChartOptions(data.chartOptions);
  // }, [data.chartOptions]);

  // useEffect(() => {
  //   setChartOptions(data);
  // }, [data]);

  return (
    <div style={{ width: "100%" }}>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </div>
  );
};
