import React, { useState } from "react";
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
import {
  Stack,
  Flex,
  Center,
  Box,
  VStack,
  Text,
  Container,
} from "@chakra-ui/react";
import { Card } from "../components/Card";
import { optionsSindacoFake } from "../data/parliament-chart/dataSindacoFake";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    legend: {
      position: "bottom" as const,
    },
    title: {
      display: false,
      text: "Chart.js Bar Chart - Stacked",
    },
  },
  responsive: true,

  //commentando qui si toglie lo stacked
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const labels = [
  "January1",
  "February1",
  "March1",
  "April1",
  "May1",
  "June1",
  "July1",
  "August1",
  "September1",
  "October1",
  "November1",
  "December1",
  "January2",
  "February2",
  "March2",
  "April2",
  "May2",
  "June2",
  "July2",
  "August2",
  "September2",
  "October2",
  "November2",
  "December2",
];

export const data = {
  labels,
  datasets: [
    {
      // fill: true,
      label: "Assenze",
      //data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })), //anche negativi volendo
      data: [20, 6, 39, 75, 59, 19, 2, 44, 29, 21, 12, 67, 15, 23],
      backgroundColor: "rgb(255, 99, 132)",
      //backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Presenze",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      backgroundColor: "rgb(75, 192, 192)",
      //backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export const StatsChart = (my_data: any, my_list: any) => {
  const [chartOptions, setChartOptions] = useState(my_data);

  return (
    <Box rounded="3xl" bg="orange.50" py={6} px={8} w={["100%"]}>
      <VStack>
        <Text textAlign="center" color="black" fontSize="lg" fontWeight="700">
          Presenze e Assenze dei consiglieri alle delibere comunali
        </Text>
        <Bar options={options} data={data} />
      </VStack>
    </Box>
  );
};
