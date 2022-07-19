let responsiveAxis: string = "x"; //default value

if (typeof window !== "undefined") {
  const mobile = window.matchMedia("(max-width: 500px)");

  mobile.addEventListener("change", () => {
    responsiveAxis = "y";
  });
}

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

  indexAxis: responsiveAxis,

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
