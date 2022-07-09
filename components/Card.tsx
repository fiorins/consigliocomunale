import React from "react";
import { Text, Box, SimpleGrid, Icon, Divider } from "@chakra-ui/react";
import { HiLibrary, HiUserGroup } from "react-icons/hi";
import { IoIosPaper } from "react-icons/io";
import TableBadgeCell from "./card-components/TableBadgeCell";
import TableTextCell from "./card-components/TableTextCell";
import TableIconTextCell from "./card-components/TableIconTextCell";

type Props = {
  title?: string;
  consiglieri?: number;
  consigliTot?: number;
  delibereTot?: number;
};

export const Card = ({
  title,
  consiglieri,
  consigliTot,
  delibereTot,
}: Props) => {
  return (
    <Box rounded="lg" bg="orange.50" boxShadow="base" p={4}>
      <Text
        px={2}
        py={4}
        textAlign="center"
        color="black"
        fontSize="lg"
        fontWeight="700"
      >
        {title}
      </Text>
      <SimpleGrid columns={3} spacing={0}>
        <TableIconTextCell
          numberCell={consiglieri}
          textCell="Consiglieri eletti"
        >
          <Icon as={HiUserGroup} color="teal" />
        </TableIconTextCell>

        <TableIconTextCell
          numberCell={consigliTot}
          textCell="Consigli comunali"
        >
          <Icon as={HiLibrary} color="teal" />
        </TableIconTextCell>

        <TableIconTextCell
          numberCell={delibereTot}
          textCell="Delibere comunali"
        >
          <Icon as={IoIosPaper} color="teal" />
        </TableIconTextCell>

        <Divider orientation="horizontal" />
        <Divider orientation="horizontal" />
        <Divider orientation="horizontal" />

        <TableBadgeCell textCell="2022" />
        <TableTextCell textCell="17" />
        <TableTextCell textCell="43" />

        <TableBadgeCell textCell="2023" />
        <TableTextCell textCell="/" />
        <TableTextCell textCell="/" />

        <TableBadgeCell textCell="2025" />
        <TableTextCell textCell="/" />
        <TableTextCell textCell="/" />

        <TableBadgeCell textCell="2026" />
        <TableTextCell textCell="/" />
        <TableTextCell textCell="/" />

        <TableBadgeCell textCell="2027" />
        <TableTextCell textCell="/" />
        <TableTextCell textCell="/" />
      </SimpleGrid>
    </Box>
  );
};
