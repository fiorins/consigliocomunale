import React from "react";
import { Badge, Center, Text } from "@chakra-ui/react";

const TableBadgeCell = ({ textCell }: any) => {
  return (
    <Center>
      <Badge borderRadius="lg" px="2" py="1" colorScheme="teal">
        {textCell}
      </Badge>
    </Center>
  );
};

export default TableBadgeCell;
