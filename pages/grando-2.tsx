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
import { optionsGrando2 } from "../data/dataGrando2";

const Grando2: NextPage = () => {
  return (
    //Stack could be replaced by Flex and spacing by gap
    <Stack
      direction={["column", "column", "column", "row"]}
      spacing={[12, 12, 12, 2]}
      align="center"
    >
      <ParliamentChart {...optionsGrando2} />
      <Card
        title="Statistiche Consiliatura 2022-..."
        consiglieri={25}
        consigli={18}
        delibere={45}
      />
    </Stack>
  );
};

export default Grando2;
