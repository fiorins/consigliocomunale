export const optionsBarDesktop = {
  plugins: {
    legend: {
      position: "bottom" as const,
    },
    title: {
      display: false,
    },
    datalabels: {
      color: "white",
      display: function (context: any) {
        if (Math.max(...context.dataset.data) > 35) {
          return context.dataset.data[context.dataIndex] > 13;
        } else {
          return context.dataset.data[context.dataIndex] > 2;
        }
      },
      font: {
        weight: "bold",
      },
      formatter: Math.round,
    },
  },
  indexAxis: "x",
  aspectRatio: 2,
  layout: {
    padding: {
      top: 10,
      bottom: 20,
      right: 30,
      left: 30,
    },
  },

  responsive: true,
  maintainAspectRatio: true,

  /* comment here to delete stacked bars */
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

export const optionsBarMobile = {
  plugins: {
    legend: {
      position: "bottom" as const,
    },
    title: {
      display: false,
    },
    datalabels: {
      color: "white",
      display: function (context: any) {
        if (Math.max(...context.dataset.data) > 35) {
          return context.dataset.data[context.dataIndex] > 26;
        } else {
          return context.dataset.data[context.dataIndex] > 2;
        }
      },
      font: {
        weight: "bold",
      },
      formatter: Math.round,
    },
  },

  indexAxis: "y",
  aspectRatio: 0.5,
  layout: {
    padding: {
      top: 20,
      bottom: 20,
      right: 20,
      left: 10,
    },
  },

  responsive: true,
  maintainAspectRatio: true,

  /* comment here to delete stacked bars */
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};
