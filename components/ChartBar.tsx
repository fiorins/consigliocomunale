import React from "react";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Bar } from "react-chartjs-2";
import { Box, VStack, Text } from "@chakra-ui/react";

Chart.register(ChartDataLabels);

type BarProps = {
  my_options: object;
  my_list: string[];
  my_data: any;
};

export const ChartBar: React.FC<BarProps> = (props) => {
  return (
    <Box rounded="3xl" bg="orange.50" w={["100%"]}>
      <VStack>
        <Text
          pt={6}
          px={8}
          textAlign="center"
          color="black"
          fontSize="lg"
          fontWeight="700"
        >
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
                datalabels: {
                  anchor: "end",
                  align: "start",
                },
              },
              {
                label: "Assenze",
                data: props.my_data[1],
                backgroundColor: "rgb(255, 99, 132)",
                datalabels: {
                  anchor: "end",
                  align: "start",
                },
              },
            ],
          }}
        />
      </VStack>
    </Box>
  );
};
