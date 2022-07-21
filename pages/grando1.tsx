import { NextPage } from "next";
import base from "./api/base";
import { grando1Type } from "../model/groupsType";
import { Card } from "../components/Card";
import { councilorsList } from "../functions/councilorsList";
import { councilorsData } from "../functions/councilorsData";
import { councilData } from "../functions/councilData";
import {
  Stack,
  useMediaQuery,
  VStack,
  Text,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { ChartBar } from "../components/ChartBar";
import { ChartParliament } from "../components/ChartParliament";
import { optionsGrando1 } from "../data/parliament-chart/parlGrando1";
import { optionsBar } from "../data/bar-chart/barOpt";

export async function getStaticProps() {
  const result = await base("Grando_1").select({}).all();

  return {
    props: {
      data: result.map((record) => {
        return { id: record.id, ...record.fields };
      }),
    },
  };
}

interface MyProps {
  data: grando1Type[];
}

const Grando1: NextPage<MyProps> = (props) => {
  const councilors_list = councilorsList(props.data);
  const councilors_data = councilorsData(props.data, councilors_list);
  const council_data = councilData(props.data);

  const [isMobile] = useMediaQuery("(max-width: 999px)");

  const defaultTitle = {
    title: "Statistiche Consiliatura 2017-2022",
    subtitle: "",
  };
  const mobileTitle = {
    title: "Statistiche Consiliatura",
    subtitle: "2017-2022",
  };

  const optionsBarDesktop = {
    indexAxis: "x",
    aspectRatio: 2,
    ...optionsBar,
  };
  const optionsBarMobile = {
    indexAxis: "y",
    aspectRatio: 0.5,
    ...optionsBar,
  };

  return (
    <VStack spacing={8}>
      <Stack
        direction={{ base: "column", lg: "row" }}
        spacing={0}
        align="center"
      >
        <ChartParliament my_options={optionsGrando1} />
        <Card
          {...(isMobile ? { ...mobileTitle } : { ...defaultTitle })}
          councilors={24}
          councilsTot={council_data[0]}
          resolutionsTot={council_data[1]}
          yearsList={council_data[2]}
          councilsPerYear={council_data[3][0]}
          resolutionsPerYear={council_data[3][1]}
        />
      </Stack>
      <ChartBar
        my_options={isMobile ? optionsBarMobile : optionsBarDesktop}
        my_list={councilors_list}
        my_data={councilors_data}
      />
      <Text
        textAlign="center"
        color="black"
        fontSize="sm"
        fontWeight="500"
        as="span"
      >
        Consiglieri dimissionari:
        <UnorderedList textAlign="left">
          <ListItem>Falasca lascia il 21/05/2018 ed entra Marongiu D</ListItem>
          <ListItem>Forchetta lascia il 14/05/2019 ed entra Ciampa</ListItem>
          <ListItem>
            Pizzuti Piccoli lascia il 16/03/2021 ed entra Martello
          </ListItem>
        </UnorderedList>
      </Text>
    </VStack>
  );
};

export default Grando1;
