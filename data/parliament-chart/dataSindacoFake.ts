const groupSindacoFake = [
  ["Cuori Ladispolani", 7, "#073D74"],
  ["Noi con Salvini", 5, "#09529A"],
  ["Fratelli d'Italia", 3, "#0B66C1"],
  ["Alessandro Grando", 1, "#0D7AE7"],

  ["Partito Democratico", 2, "#8F001A"],
  ["Ladispoli Città", 2, "#B80022"],
  ["Marco Pierini", 1, "#E00029"],

  ["Giuseppe Loddo", 1, "#548C2F"],

  ["Antonio Pizzuti Piccoli", 1, "#FFC919"],
  ["Movimento 5 Stelle", 2, "#FFD449"],
];

export const optionsSindacoFake = {
  chart: {
    type: "item",
    borderRadius: 20,
    backgroundColor: "#ECE2D0", //ECE2D0
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
    enabled: false,
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
  },

  series: [
    {
      name: "Rappresentanti",
      keys: ["name", "y", "color", "label"],
      data: groupSindacoFake,
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
            width: 600,
            x: 30,
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
};
