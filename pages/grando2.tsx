import { NextPage } from "next";
import base from "./api/base";
import { grando2Type } from "../model/groupsType";
import { Card } from "../components/Card";
import { councilorsList } from "../functions/councilorsList";
import { councilorsData } from "../functions/councilorsData";
import { councilData } from "../functions/councilData";
import { Stack, useMediaQuery, VStack } from "@chakra-ui/react";
import { ChartBar } from "../components/ChartBar";
import { ChartParliament } from "../components/ChartParliament";
import { optionsParl } from "../data/parliament-chart/parlOptGrando2";
import { optionsBarDesktop, optionsBarMobile } from "../data/bar-chart/barOpt";

export async function getStaticProps() {
  const result = await base("Grando_2").select({}).all();

  return {
    props: {
      data: result.map((record) => {
        return { id: record.id, ...record.fields };
      }),
    },
  };
}

interface MyProps {
  data: grando2Type[];
}

const Grando2: NextPage<MyProps> = (props) => {
  const councilors_list = councilorsList(props.data);
  const councilors_data = councilorsData(props.data, councilors_list);
  const council_data = councilData(props.data);

  const [isMobile] = useMediaQuery("(max-width: 999px)");

  const defaultTitle = {
    title: "Statistiche Consiliatura 2022-....",
    subtitle: "",
  };
  const mobileTitle = {
    title: "Statistiche Consiliatura",
    subtitle: "2022-....",
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
    </VStack>
  );
};

export default Grando2;
