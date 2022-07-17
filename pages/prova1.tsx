import { NextPage } from "next";
import base from "./api/base";
import { Group1Type } from "../model/group1Type";
import { Card } from "../components/Card";
import { councilorsList } from "../functions/councilorsList";
import { councilorsData } from "../functions/councilorsData";
import { councilData } from "../functions/councilData";
import { Stack, VStack } from "@chakra-ui/react";
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
  data: Group1Type[];
}

const Prova1: NextPage<MyProps> = (props) => {
  const councilors_list = councilorsList(props.data);
  const councilors_data = councilorsData(props.data, councilors_list);
  const council_data = councilData(props.data);

  return (
    <VStack spacing={8}>
      <Stack
        direction={["column", "column", "column", "row"]}
        spacing={[12, 12, 12, 8]}
        align="center"
      >
        <ChartParliament my_options={optionsParlFake} />
        <Card
          title="Statistiche Consiliatura 2017-2022"
          consiglieri={25}
          consigliTot={council_data[0]}
          delibereTot={council_data[1]}
          anno={council_data[2]}
          consigliAnno={council_data[3][0]}
          delibereAnno={council_data[3][1]}
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

export default Prova1;
