import React from "react";
import { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Center } from "@chakra-ui/react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
//require("highcharts/modules/item-series")(Highcharts);

import ItemSeries from "highcharts/modules/item-series";
import { Tune } from "@mui/icons-material";

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
  plugins: {
    title: {
      display: true,
      text: "Presenze e Assenze dei consiglieri alle delibere comunali",
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const labels = [
  "Asciutto",
  "Augello",
  "Cervo",
  "Ciarlantini",
  "De Simone",
  "Fierli",
  "Fioravanti",
  "Garau",
  "Grando",
  "Marchetti",
  "Marcucci",
  "Marongiu D.",
  "Marongiu S.",
  "Mollica Graziano",
  "Monaco",
  "Moretti",
  "Paliotta",
  "Panzini",
  "Paparella",
  "Pascucci",
  "Penge",
  "Perretta",
  "Risso",
  "Rosolino",
  "Trani",
];

export const data = {
  labels, //labels from airtable
  datasets: [
    {
      label: "2022",
      data: [150, 34, 54],
      backgroundColor: "rgb(255, 99, 132)",
    },
  ],
};

export const ParliamentChart = () => {
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
      // item: {
      //   showInLegend: true,
      // },
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
    // subtitle: {
    //   text: "Numero totale di seggi: 25",
    // },

    legend: {
      useHTML: true,
      labelFormat: '{name} <span style="opacity: 0.4">{y}</span>',
      // navigation: {
      //   enabled: false,
      // },
      itemStyle: {
        fontSize: "11px",
      },
      layout: "horizontal",
      //align: "center",
      //verticalAlign: "middle",
      //symbolRadius: 0, //for changing to square
      padding: 3,
      itemMarginTop: 5,
      itemMarginBottom: 5,
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
        center: ["50%", "88%"],
        size: "200%",
        startAngle: -100,
        endAngle: 100,
      },
    ],

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              itemStyle: {
                fontSize: "10px",
              },
              useHTML: true,
              layout: "horizontal",
              labelFormat: '{name} <span style="opacity: 0.4">{y}</span>',
            },
          },
        },
        {
          condition: {
            maxWidth: 390,
            //maxHeight: 500, //inutile
          },
          chartOptions: {
            // chart: {
            //   margin: 2,
            // },
            legend: {
              itemStyle: {
                fontSize: "8px",
              },
              useHTML: true,
              layout: "horizontal",
              labelFormat: '{name} <span style="opacity: 0.4">{y}</span>',
              //floating: true,
              //align: true,
              //alignColumns: true,
              //enabled: false,
              //align: "center",
              //verticalAlign: "bottom",
              //width: 700,
              // x: 100,
              // itemMarginTop: 1,
              // itemDistance: 10,
              // itemWidth: 170,
            },
            // series: [
            //   {
            //     dataLabels: {
            //       distance: -30,
            //     },
            //   },
            // ],
          },
        },
      ],
    },
  });

  return <HighchartsReact highcharts={Highcharts} options={chartOptions} />;
};
