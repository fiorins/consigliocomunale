import { NextPage } from "next";
import base from "../functions/base";
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
import ChangeCouncilor from "../components/ChangeCouncilor";
import { ChartParliament } from "../components/ChartParliament";
import { optionsParl } from "../chart-options/parliament-chart/parlOptGrando1";
import {
  optionsBarDesktop,
  optionsBarMobile,
} from "../chart-options/bar-chart/barOpt";

export async function getStaticProps() {
  const result = await base("Grando_1").select({}).all();

  return {
    props: {
      data: result.map((record) => {
        return { id: record.id, ...record.fields };
      }),
    },
    revalidate: 86400,
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

  return (
    <VStack spacing={{ base: 8, lg: 12 }}>
      <Stack
        direction={{ base: "column", lg: "row" }}
        spacing={{ base: 4, lg: 0 }}
        align="center"
      >
        <ChartParliament my_options={optionsParl} />
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
        Consiglieri dimissionari e subentri:
        <UnorderedList textAlign="left" spacing={1} p={2}>
          <ListItem>
            <ChangeCouncilor
              date="21/05/2018"
              councilorOut="Falasca"
              councilorIn="Marongiu D"
            />
          </ListItem>
          <ListItem>
            <ChangeCouncilor
              date="14/05/2019"
              councilorOut="Forchetta"
              councilorIn="Ciampa"
            />
          </ListItem>
          <ListItem>
            <ChangeCouncilor
              date="16/03/2021"
              councilorOut="Pizzuti Piccoli"
              councilorIn="Martello"
            />
          </ListItem>
        </UnorderedList>
      </Text>
    </VStack>
  );
};

export default Grando1;
