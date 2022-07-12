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
import { faker } from "@faker-js/faker";
import { Bar } from "react-chartjs-2";
import { Stack, Flex, Center, HStack, VStack } from "@chakra-ui/react";
import { Card } from "../components/Card";
import { StatsChart } from "../components/StatsChart";
import { ParliamentChart } from "../components/ParliamentChart";
import { optionsSindacoFake } from "../data/parliament-chart/dataSindacoFake";

const Bella1: NextPage = () => {
  return (
    <VStack spacing={8}>
      <Stack
        direction={["column", "column", "column", "row"]}
        spacing={[12, 12, 12, 8]}
        align="center"
      >
        <ParliamentChart {...optionsSindacoFake} />
        <Card
          title="Statistiche Consiliatura 2017-2022"
          consiglieri={24}
          consigliTot={32}
          delibereTot={67}
        />
      </Stack>
      <StatsChart />
    </VStack>
  );
};

export default Bella1;
