import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Text, Box, Icon, SimpleGrid, Divider } from "@chakra-ui/react";
import { HiLibrary, HiUserGroup } from "react-icons/hi";
import { IoIosPaper } from "react-icons/io";
import TableBadgeCell from "../components/TableBadgeCell";
import TableTextCell from "../components/TableTextCell";
import TableIconTextCell from "../components/TableIconTextCell";

const Card: NextPage = () => {
  return (
    <Box rounded="lg" bg="white" boxShadow="base" p={4}>
      <Text
        px={2}
        py={4}
        textAlign="center"
        color="black"
        fontSize="lg"
        fontWeight="700"
      >
        Statistiche Consiliatura 2022-...
      </Text>

      <SimpleGrid columns={3} spacing={0}>
        <TableIconTextCell numberCell={25} textCell="Consiglieri eletti">
          <Icon as={HiUserGroup} color="teal" />
        </TableIconTextCell>

        <TableIconTextCell numberCell={19} textCell="Consigli comunali">
          <Icon as={HiLibrary} color="teal" />
        </TableIconTextCell>

        <TableIconTextCell numberCell={34} textCell="Delibere comunali">
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

        {/* 
        <TableBadgeCell textCell="2025" />
        <TableTextCell textCell="/" />
        <TableTextCell textCell="/" />

        <TableBadgeCell textCell="2026" />
        <TableTextCell textCell="/" />
        <TableTextCell textCell="/" />

        <TableBadgeCell textCell="2027" />
        <TableTextCell textCell="/" />
        <TableTextCell textCell="/" /> 
        */}
      </SimpleGrid>
    </Box>
  );
};

export default Card;
