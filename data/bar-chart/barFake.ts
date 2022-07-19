export const optionsBarFake = {
  plugins: {
    legend: {
      position: "bottom" as const,
    },
    title: {
      display: false,
      text: "My Title",
    },
  },

  responsive: true,
  maintainAspectRatio: true,

  // elements: {
  //   bar: {
  //     borderWidth: 2,
  //   },
  // },

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
