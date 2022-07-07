import type { NextPage } from "next";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

import { Stack, Flex, Center } from "@chakra-ui/react";
import { Card } from "../components/Card";
import { ParliamentChart } from "../components/ParliamentChart";
import { StatsChart } from "../components/StatsChart";
import { grando1, grando2 } from "../data/parliamentChart";

const Grando2: NextPage = () => {
  return (
    //Stack could be replaced by Flex and spacing by gap
    <Stack
      direction={["column", "column", "column", "row"]}
      spacing={[12, 12, 12, 2]}
      align="center"
    >
      <ParliamentChart {...grando2} />
      <Card />
    </Stack>
  );
};

export default Grando2;
