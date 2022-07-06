import type { NextPage } from "next";
import { useState } from "react";
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

import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
//require("highcharts/modules/item-series")(Highcharts);

import ItemSeries from "highcharts/modules/item-series";
import { Badge, Box, HStack, VStack } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

if (typeof Highcharts === "object") {
  ItemSeries(Highcharts);
}

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
    title: {
      display: true,
      text: "Presenze e Assenze dei consiglieri alle delibere comunali",
    },
  },
  responsive: true,
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
  "Asciutto",
  "Augello",
  "Cervo",
  "Ciarlantini",
  "De Simone",
  "Fierli",
  "Fioravanti",
  "Garau",
  "Grando",
  "Marchetti",
  "Marcucci",
  "Marongiu D.",
  "Marongiu S.",
  "Mollica Graziano",
  "Monaco",
  "Moretti",
  "Paliotta",
  "Panzini",
  "Paparella",
  "Pascucci",
  "Penge",
  "Perretta",
  "Risso",
  "Rosolino",
  "Trani",
];

export const data = {
  labels, //labels from airtable
  datasets: [
    {
      label: "2022",
      data: [150, 34, 54],
      backgroundColor: "rgb(255, 99, 132)",
    },
  ],
};

const Grando4: NextPage = () => {
  const [chartOptions, setChartOptions] = useState({
    chart: {
      type: "item",
      style: {
        fontFamily:
          "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
      },
    },

    title: {
      text: "Ladispoli Consiglio Comunale",
    },
    subtitle: {
      text: "Numero totale di seggi: 25",
    },

    legend: {
      labelFormat: '{name} <span style="opacity: 0.4">{y}</span>',
    },

    series: [
      {
        name: "Representatives",
        keys: ["name", "y", "color", "label"],
        data: [
          ["Grando Sindaco", 4, "#073D74"],
          ["Noi di Ladispoli", 4, "#09529A"],
          ["Fratelli d'Italia", 2, "#0B66C1"],
          ["Cuori Ladispolani", 2, "#0D7AE7"],
          ["Lega", 2, "#2B8FF3"],
          ["Forza Italia", 1, "#51A3F5"],
          ["Alessandro Grando", 1, "#0087DC"], //io apro rinascimento

          ["Ladispoli Attiva", 2, "#8F001A"],
          ["Per Pascucci Sindaco", 2, "#B80022"],
          ["Ladispoli Città", 1, "#E00029"],
          ["Alessio Pascucci", 1, "#FF0A37"], //onda civica

          ["Silvia per Ladispoli", 1, "#548C2F"],
          ["Silvia Marongiu", 1, "#6EB83D"], //partito democratico

          ["Amelia Mollica Graziano", 1, "#FFD449"], //ladispoli cambia
        ],
        dataLabels: {
          enabled: false,
          format: "{point.label}",
        },

        // Circular options
        center: ["50%", "88%"],
        size: "170%",
        startAngle: -100,
        endAngle: 100,
      },
    ],

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 600,
          },
          chartOptions: {
            series: [
              {
                dataLabels: {
                  distance: -30,
                },
              },
            ],
          },
        },
      ],
    },
  });

  return (
    <>
      <HStack>
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="6">
          <Box display="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              New
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              8beds &bull; 9 baths
            </Box>
          </Box>

          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            noOfLines={1}
          >
            Prova
          </Box>

          <Box>
            Prova2prezzo
            <Box as="span" color="gray.600" fontSize="sm">
              / wk
            </Box>
          </Box>

          <Box display="flex" mt="2" alignItems="center">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon key={i} color={i < 3 ? "teal.500" : "gray.300"} />
              ))}
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              44 reviews
            </Box>
          </Box>
        </Box>
      </HStack>
      {/* <Bar options={options} data={data} /> */}
    </>
  );
};

export default Grando4;
