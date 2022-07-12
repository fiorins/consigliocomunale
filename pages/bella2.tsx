import type { NextPage } from "next";
import Head from "next/head";
import { Center, Text, Stack } from "@chakra-ui/react";
import { Bar } from "react-chartjs-2";
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
import { Card } from "../components/Card";
import { ParliamentChart } from "../components/ParliamentChart";
import { StatsChart } from "../components/StatsChart";
import { optionsSindacoFake } from "../data/parliament-chart/dataSindacoFake";


const Bella2: NextPage = () => {
  return (
    <>
      <Stack
        direction={["column", "column", "column", "row"]}
        spacing={[12, 12, 12, 2]}
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
    </>
  );
};

export default Bella2;
