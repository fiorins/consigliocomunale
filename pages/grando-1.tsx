import type { NextPage } from "next";
import Head from "next/head";
import { Center, Text } from "@chakra-ui/react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import HighchartsExporting from "highcharts/modules/exporting";
import { useRef } from "react";

if (typeof Highcharts === "object") {
  HighchartsExporting(Highcharts);
}

const options: Highcharts.Options = {
  title: {
    text: "My chart",
  },
  series: [
    {
      type: "line",
      data: [1, 2, 3],
    },
  ],
};

const Grando1: NextPage = () => {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);
  return (
    <>
      <Center bg="#4D7EA8" h="100px" color="white">
        <Text fontSize="4xl" fontWeight="bold">
          Open Data CERVETTER
        </Text>
      </Center>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        ref={chartComponentRef}
      />
      {/* <Bar options={options} data={data} /> */}
    </>
  );
};

export default Grando1;
