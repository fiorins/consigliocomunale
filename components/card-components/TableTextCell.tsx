import React from "react";
import { Text, Center } from "@chakra-ui/react";

const TableTextCell = ({ textCell }: any) => {
  return (
    <Center p={2}>
      <Text color="black" fontWeight="700">
        {textCell}
      </Text>
    </Center>
  );
};

export default TableTextCell;
