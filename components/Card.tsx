import React from "react";
import { Text, Box, SimpleGrid, Icon, Divider } from "@chakra-ui/react";
import { HiLibrary, HiUserGroup } from "react-icons/hi";
import { IoIosPaper } from "react-icons/io";
import TableBadgeCell from "./card-components/TableBadgeCell";
import TableTextCell from "./card-components/TableTextCell";
import TableIconTextCell from "./card-components/TableIconTextCell";

interface CardProps {
  title?: string;
  consiglieri?: number;
  consigliTot?: number;
  delibereTot?: number;
  consigliAnno1?: number;
  consigliAnno2?: number;
  consigliAnno3?: number;
  consigliAnno4?: number;
  consigliAnno5?: number;
  delibereAnno1?: number;
  delibereAnno2?: number;
  delibereAnno3?: number;
  delibereAnno4?: number;
  delibereAnno5?: number;
}

export const Card: React.FC<CardProps> = (props) => {
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
        {props.title}
      </Text>
      <SimpleGrid columns={3} spacing={0}>
        <TableIconTextCell
          numberCell={props.consiglieri}
          textCell="Consiglieri eletti"
        >
          <Icon as={HiUserGroup} color="teal" />
        </TableIconTextCell>

        <TableIconTextCell
          numberCell={props.consigliTot}
          textCell="Consigli comunali"
        >
          <Icon as={HiLibrary} color="teal" />
        </TableIconTextCell>

        <TableIconTextCell
          numberCell={props.delibereTot}
          textCell="Delibere comunali"
        >
          <Icon as={IoIosPaper} color="teal" />
        </TableIconTextCell>

        <Divider orientation="horizontal" />
        <Divider orientation="horizontal" />
        <Divider orientation="horizontal" />

        <TableBadgeCell textCell="2022" />
        <TableTextCell textCell={props.consigliAnno1} />
        <TableTextCell textCell="43" />

        <TableBadgeCell textCell="2023" />
        <TableTextCell textCell={props.consigliAnno2} />
        <TableTextCell textCell="/" />

        <TableBadgeCell textCell="2025" />
        <TableTextCell textCell={props.consigliAnno3} />
        <TableTextCell textCell="/" />

        <TableBadgeCell textCell="2026" />
        <TableTextCell textCell={props.consigliAnno4} />
        <TableTextCell textCell="/" />

        <TableBadgeCell textCell="2027" />
        <TableTextCell textCell="/" />
        <TableTextCell textCell="/" />
      </SimpleGrid>
    </Box>
  );
};

Card.defaultProps = {
  consiglieri: NaN,
  consigliTot: NaN,
  delibereTot: 0,
};
