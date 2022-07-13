import { NextPage } from "next";
import { useState, useEffect } from "react";
import Airtable from "airtable";
import { ConsiglioComunale } from "../model/consiglioType";
import { Card } from "../components/Card";
import base from "./api/base";
import { councilorsList } from "../functions/councilorsList";
import { councilorsData } from "../functions/councilorsData";
import { councilData } from "../functions/councilData";
import { Stack, Flex, Center, HStack, VStack } from "@chakra-ui/react";
import { StatsChart } from "../components/StatsChart";
import { ParliamentChart } from "../components/ParliamentChart";
import { optionsSindacoFake } from "../data/parliament-chart/dataSindacoFake";

const Prova: NextPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    base("Grando_Test")
      .select({ view: "Grid view" })
      .eachPage((records: any, fetchNextPage) => {
        setData(
          records.map((record: any) => {
            return { id: record.id, ...record.fields };
          })
        );
        fetchNextPage();
      });
  }, []);

  const councilors_list = councilorsList(data);
  const councilors_data = councilorsData(data, councilors_list);
  const council_data = councilData(data);

  return (
    <VStack spacing={8}>
      <Stack
        direction={["column", "column", "column", "row"]}
        spacing={[12, 12, 12, 8]}
        align="center"
      >
        <ParliamentChart {...optionsSindacoFake} />
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
      <StatsChart asseX={councilors_list} />
    </VStack>
  );
};

export default Prova;
