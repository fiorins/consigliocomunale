import { NextPage } from "next";
import base from "./api/base";
import { paliotta2Type } from "../model/groupsType";
import { Card } from "../components/Card";
import { councilorsList } from "../functions/councilorsList";
import { councilorsData } from "../functions/councilorsData";
import { councilData } from "../functions/councilData";
import { Stack, useMediaQuery, VStack } from "@chakra-ui/react";
import { ChartBar } from "../components/ChartBar";
import { ChartParliament } from "../components/ChartParliament";
import { optionsParl } from "../data/parliament-chart/parlOptPaliotta2";
import { optionsBarDesktop, optionsBarMobile } from "../data/bar-chart/barOpt";

// Version in use
export async function getStaticProps() {
  const result = await base("Paliotta_2").select({}).all();

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
  data: paliotta2Type[];
}

const Paliotta2: NextPage<MyProps> = (props) => {
  //const [data, setData] = useState<any>([]);

  // Alternate version 1
  // useEffect(() => {
  //   base("Paliotta_2")
  //     .select({ view: "Grid view" })
  //     .eachPage((records: any, fetchNextPage) => {
  //       setData((prev: any) => [
  //         ...prev,
  //         ...records.map((record: any) => {
  //           return { id: record.id, ...record.fields };
  //         }),
  //       ]);

  //       fetchNextPage();
  //     });
  // }, []);

  // Alternate version 2
  // useEffect(() => {
  //   let my_state: any = [];

  //   base("Paliotta_2")
  //     .select({ view: "Grid view" })
  //     .eachPage((records: any, fetchNextPage) => {
  //       my_state.push(
  //         ...records.map((record: any) => {
  //           return { id: record.id, ...record.fields };
  //         })
  //       );
  //       setData(my_state);
  //       fetchNextPage();
  //     });
  // }, []);

  const councilors_list = councilorsList(props.data);
  const councilors_data = councilorsData(props.data, councilors_list);
  const council_data = councilData(props.data);

  const [isMobile] = useMediaQuery("(max-width: 999px)");

  const defaultTitle = {
    title: "Statistiche Consiliatura 2012-2017",
    subtitle: "",
  };
  const mobileTitle = {
    title: "Statistiche Consiliatura",
    subtitle: "2012-2017",
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
          councilors={16}
          councilsTot={council_data[0]}
          resolutionsTot={council_data[1]}
          yearsList={council_data[2]}
          councilsPerYear={council_data[3][0]}
          resolutionsPerYear={council_data[3][1]}
          notes="* dati precedenti al 2017 non disponibili"
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

export default Paliotta2;
