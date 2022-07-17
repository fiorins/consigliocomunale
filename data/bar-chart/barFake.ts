export const optionsBarFake = {
  plugins: {
    legend: {
      position: "bottom" as const,
    },
    title: {
      display: false,
      text: "Chart.js Bar Chart - Stacked",
    },
  },
  responsive: true,

  /* decomment here to put stacked bars */
  // scales: {
  //   x: {
  //     stacked: true,
  //   },
  //   y: {
  //     stacked: true,
  //   },
  // },
};
