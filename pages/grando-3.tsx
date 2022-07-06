import type { NextPage } from "next";
import Head from "next/head";
import { Center, Text } from "@chakra-ui/react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import HighchartsExporting from "highcharts/modules/exporting";
import { SetStateAction, useRef, useState } from "react";

const Grando3: NextPage = () => {
  const [chartOptions, setChartOptions] = useState({
    xAxis: {
      categories: ["A", "B", "C"],
    },
    series: [{ data: [1, 2, 3] }],
  });

  const updateSeries = () => {};
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </div>
  );
};

export default Grando3;
