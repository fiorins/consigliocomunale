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
import { ChartParliament } from "../components/ChartParliament";
import { ChartBar } from "../components/ChartBar";
import { optionsGrando1 } from "../data/parliament-chart/dataGrando1";

const Grando1: NextPage = () => {
  return (
    //Stack could be replaced by Flex and spacing by gap
    <Stack
      direction={["column", "column", "column", "row"]}
      spacing={[12, 12, 12, 2]}
      align="center"
    >
      {/* <ParliamentChart {...optionsGrando1} />
      <Card
        title="Statistiche Consiliatura 2017-2022"
        consiglieri={24}
        consigliTot={32}
        delibereTot={67}
      /> */}
    </Stack>
  );
};

export default Grando1;
