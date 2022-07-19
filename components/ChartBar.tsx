import React from "react";
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
import { Box, VStack, Text, useMediaQuery } from "@chakra-ui/react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type BarProps = {
  my_options: object;
  my_list: string[];
  my_data: any;
};

export const ChartBar: React.FC<BarProps> = (props) => {
  return (
    <Box rounded="3xl" bg="orange.50" py={6} px={8} w={["100%"]}>
      <VStack>
        <Text textAlign="center" color="black" fontSize="lg" fontWeight="700">
          Presenze e Assenze dei consiglieri alle delibere comunali
        </Text>
        <Bar
          options={props.my_options}
          data={{
            labels: props.my_list,
            datasets: [
              {
                label: "Presenze",
                data: props.my_data[0],
                backgroundColor: "rgb(75, 192, 192)",
              },
              {
                label: "Assenze",
                data: props.my_data[1],
                backgroundColor: "rgb(255, 99, 132)",
              },
            ],
          }}
        />
      </VStack>
    </Box>
  );
};
