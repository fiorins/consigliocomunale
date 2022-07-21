import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import ItemSeries from "highcharts/modules/item-series";
import { Box } from "@chakra-ui/react";

if (typeof Highcharts === "object") {
  ItemSeries(Highcharts);
}

type ParlProps = {
  my_options: {};
};

export const ChartParliament: React.FC<ParlProps> = (props) => {
  return (
    <Box
      rounded="3xl"
      bg="#ECE2D0"
      w={{ base: 300, md: 650, lg: 750, xl: 900 }}
      p={0}
    >
      <HighchartsReact highcharts={Highcharts} options={props.my_options} />
    </Box>
  );
};
