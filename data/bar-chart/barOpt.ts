export const optionsBar = {
  plugins: {
    legend: {
      position: "bottom" as const,
    },
    title: {
      display: false,
      text: "My Title",
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
