import { NextPage } from "next";
import { useState, useEffect } from "react";
import { Card } from "../components/Card";
import base from "./api/base";
import { councilorsList } from "../functions/councilorsList";
import { councilorsData } from "../functions/councilorsData";
import { councilData } from "../functions/councilData";
import { Stack, VStack } from "@chakra-ui/react";
import { ChartBar } from "../components/ChartBar";
import { ChartParliament } from "../components/ChartParliament";
import { optionsParlFake } from "../data/parliament-chart/parlFake";
import { optionsBarFake } from "../data/bar-chart/barFake";

const Prova: NextPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    base("Grando_1_Test")
      .select({ view: "Grid view" })
      .eachPage((records: any, fetchNextPage) => {
        setData(
          records.map((record: any) => {
            return { id: record.id, ...record.fields };
          })
        );

        // setData({
        // ...data,
        // records.map((record: any) => {
        //     return { id: record.id, ...record.fields };
        //   })
        // setData({
        //   ...data,
        //   records.map((record: any) => {
        //     return { id: record.id, ...record.fields };
        //   })
        // });
        fetchNextPage();
      });
  }, []);

  const councilors_list = councilorsList(data);
  const councilors_data = councilorsData(data, councilors_list);
  const council_data = councilData(data);
  console.log("councilors_list", councilors_list);
  console.log("councilors_data", councilors_data);
  console.log("council_data", council_data);

  return (
    <VStack spacing={8}>
      <Stack
        direction={["column", "column", "column", "row"]}
        spacing={[12, 12, 12, 8]}
        align="center"
      >
        {/* <ChartParliament my_options={optionsParlFake} /> */}
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

export default Prova;
