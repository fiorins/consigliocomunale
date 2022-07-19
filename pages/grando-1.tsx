import { NextPage } from "next";
import base from "./api/base";
import { Grando1Type } from "../model/groupsType";
import { Card } from "../components/Card";
import { councilorsList } from "../functions/councilorsList";
import { councilorsData } from "../functions/councilorsData";
import { councilData } from "../functions/councilData";
import { Stack, useMediaQuery, VStack } from "@chakra-ui/react";
import { ChartBar } from "../components/ChartBar";
import { ChartParliament } from "../components/ChartParliament";
import { optionsParlFake } from "../data/parliament-chart/parlFake";
import { optionsBarFake } from "../data/bar-chart/barFake";

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
  data: Grando1Type[];
}

const Grando1: NextPage<MyProps> = (props) => {
  const councilors_list = councilorsList(props.data);
  const councilors_data = councilorsData(props.data, councilors_list);
  const council_data = councilData(props.data);

  const [isMobile] = useMediaQuery("(max-width: 500px)");
  const defaultTitle = {
    title: "Statistiche Consiliatura 2017-2022",
    subtitle: "",
  };
  const mobileTitle = {
    title: "Statistiche Consiliatura",
    subtitle: "2017-2022",
  };

  return (
    <VStack spacing={8}>
      <Stack
        direction={["column", "column", "column", "row"]}
        spacing={[12, 12, 12, 8]}
        align="center"
      >
        <ChartParliament my_options={optionsParlFake} />
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
        my_options={optionsBarFake}
        my_list={councilors_list}
        my_data={councilors_data}
      />
    </VStack>
  );
};

export default Grando1;
