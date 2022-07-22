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
  Tag,
  TagLeftIcon,
  TagLabel,
} from "@chakra-ui/react";
import { ChartBar } from "../components/ChartBar";
import { ChartParliament } from "../components/ChartParliament";
import { optionsParl } from "../data/parliament-chart/parlOptGrando1";
import { optionsBarDesktop, optionsBarMobile } from "../data/bar-chart/barOpt";
import { IoMdArrowRoundDown, IoMdArrowRoundUp } from "react-icons/io";

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
            <Text fontSize="sm">
              21/05/2018:&nbsp;&nbsp;&nbsp;
              <Tag size={"sm"} variant="subtle" colorScheme="red">
                <TagLeftIcon boxSize="12px" as={IoMdArrowRoundDown} />
                <TagLabel>Esce</TagLabel>
              </Tag>
              &nbsp;Falasca&nbsp;&nbsp;ed&nbsp;&nbsp;&nbsp;
              <Tag size={"sm"} variant="subtle" colorScheme="green">
                <TagLeftIcon boxSize="12px" as={IoMdArrowRoundUp} />
                <TagLabel>Entra</TagLabel>
              </Tag>
              &nbsp;Marongiu D
            </Text>
          </ListItem>
          <ListItem>
            <Text fontSize="sm">
              14/05/2019:&nbsp;&nbsp;&nbsp;
              <Tag size={"sm"} variant="subtle" colorScheme="red">
                <TagLeftIcon boxSize="12px" as={IoMdArrowRoundDown} />
                <TagLabel>Esce</TagLabel>
              </Tag>
              &nbsp;Forchetta&nbsp;&nbsp;ed&nbsp;&nbsp;&nbsp;
              <Tag size={"sm"} variant="subtle" colorScheme="green">
                <TagLeftIcon boxSize="12px" as={IoMdArrowRoundUp} />
                <TagLabel>Entra</TagLabel>
              </Tag>
              &nbsp;Ciampa
            </Text>
          </ListItem>
          <ListItem>
            <Text fontSize="sm">
              16/03/2021:&nbsp;&nbsp;&nbsp;
              <Tag size={"sm"} variant="subtle" colorScheme="red">
                <TagLeftIcon boxSize="12px" as={IoMdArrowRoundDown} />
                <TagLabel>Esce</TagLabel>
              </Tag>
              &nbsp;Pizzuti Piccoli&nbsp;&nbsp;ed&nbsp;&nbsp;&nbsp;
              <Tag size={"sm"} variant="subtle" colorScheme="green">
                <TagLeftIcon boxSize="12px" as={IoMdArrowRoundUp} />
                <TagLabel>Entra</TagLabel>
              </Tag>
              &nbsp;Martello
            </Text>
          </ListItem>
        </UnorderedList>
      </Text>
    </VStack>
  );
};

export default Grando1;
