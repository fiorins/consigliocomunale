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

  aspectRatio: 2,
  indexAxis: "x",

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

export const optionsBarFakeMobile = {
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

  aspectRatio: 0.5,
  indexAxis: "y",
};
