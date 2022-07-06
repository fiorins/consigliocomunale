import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import {
  Center,
  VStack,
  HStack,
  Text,
  Box,
  Flex,
  Square,
  Badge,
  Grid,
  GridItem,
  Icon,
  SimpleGrid,
} from "@chakra-ui/react";
import { HiLibrary, HiUserGroup } from "react-icons/hi";
import { IoIosPaper } from "react-icons/io";
import TableBadgeCell from "../components/TableBadgeCell";
import TableTextCell from "../components/TableTextCell";
import TableIconTextCell from "../components/TableIconTextCell";

const Paliotta3: NextPage = () => {
  return (
    // togliere questo primo box e lasciare tag vuoto alla fine oppure bg white
    <Box boxShadow="xs" rounded="md" bg="brown">
      <VStack px={{ base: 8 }} py={{ base: 8 }}>
        <Text textAlign="center">Statistiche Consiliatura 2017-2022</Text>
        <TableIconTextCell numberCell={25} textCell="Consiglieri">
          <Icon as={HiUserGroup} color="teal" />
        </TableIconTextCell>
      </VStack>
      <SimpleGrid columns={3} spacing={0}>
        <TableIconTextCell />

        <TableIconTextCell numberCell={24} textCell="Consigli comunali">
          <Icon as={HiLibrary} color="teal" />
        </TableIconTextCell>

        <TableIconTextCell numberCell={15} textCell="Delibere comunali">
          <Icon as={IoIosPaper} color="teal" />
        </TableIconTextCell>

        <TableBadgeCell textCell="2023" />
        <TableTextCell textCell="17" />
        <TableTextCell textCell="43" />

        <TableBadgeCell textCell="2024" />
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

export default Paliotta3;
