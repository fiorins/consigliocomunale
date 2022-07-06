import React from "react";
import { Badge, Center, Text } from "@chakra-ui/react";

const TableBadgeCell = ({ textCell }: any) => {
  return (
    <Center py={{ base: 4, md: 8 }}>
      <Badge borderRadius="lg" px="2" py="1" colorScheme="teal">
        {textCell}
      </Badge>
    </Center>
  );
};

export default TableBadgeCell;
