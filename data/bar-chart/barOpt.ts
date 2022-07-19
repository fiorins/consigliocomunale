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
        return context.dataset.data[context.dataIndex] > 7;
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
