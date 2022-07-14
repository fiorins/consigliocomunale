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

  //commentando qui si toglie lo stacked
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};
