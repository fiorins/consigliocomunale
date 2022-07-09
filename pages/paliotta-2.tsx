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
import { optionsPaliotta2 } from "../data/dataPaliotta2";

const Paliotta2: NextPage = () => {
  return (
    //Stack could be replaced by Flex and spacing by gap
    <Stack
      direction={["column", "column", "column", "row"]}
      spacing={[12, 12, 12, 2]}
      align="center"
    >
      <ParliamentChart {...optionsPaliotta2} />
      <Card
        title="Statistiche Consiliatura 2012-2017"
        consiglieri={16}
        consigli={28}
        delibere={59}
      />
    </Stack>
  );
};

export default Paliotta2;
