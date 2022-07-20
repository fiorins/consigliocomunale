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
import { optionsPaliotta2 } from "../data/parliament-chart/parlPaliotta2";
import { optionsBar } from "../data/bar-chart/barOpt";

// Version in use
export async function getStaticProps() {
  const result = await base("Paliotta_2").select({}).all();
  return {
    props: {
      data: result.map((record) => {
        return { id: record.id, ...record.fields };
      }),
    },
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

  const [isMobile] = useMediaQuery("(max-width: 500px)");

  const defaultTitle = {
    title: "Statistiche Consiliatura 2012-2017",
    subtitle: "",
  };
  const mobileTitle = {
    title: "Statistiche Consiliatura",
    subtitle: "2012-2017",
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
        direction={["column", "column", "column", "row"]}
        spacing={[12, 12, 12, 8]}
        align="center"
      >
        <ChartParliament my_options={optionsPaliotta2} />
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
