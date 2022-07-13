import React from "react";
import { Text, Box, SimpleGrid, Icon, Divider } from "@chakra-ui/react";
import { HiLibrary, HiUserGroup } from "react-icons/hi";
import { IoIosPaper } from "react-icons/io";
import TableBadgeCell from "./card-components/TableBadgeCell";
import TableTextCell from "./card-components/TableTextCell";
import TableIconTextCell from "./card-components/TableIconTextCell";

interface CardProps {
  title: string;
  consiglieri: number;
  consigliTot: number;
  delibereTot: number;
  anno: string[];
  consigliAnno: number[];
  delibereAnno: number[];
}

export const Card: React.FC<CardProps> = (props) => {
  return (
    <Box rounded="3xl" bg="orange.50" py={6} px={4}>
      <Text textAlign="center" color="black" fontSize="lg" fontWeight="700">
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

        {props.anno.map((el: any, i: any) => (
          <React.Fragment key={el}>
            <TableBadgeCell textCell={props.anno[i]} />
            <TableTextCell textCell={props.consigliAnno[i]} />
            <TableTextCell textCell={props.delibereAnno[i]} />
          </React.Fragment>
        ))}
      </SimpleGrid>
    </Box>
  );
};

Card.defaultProps = {
  title: "Consiliatura",
  consiglieri: NaN,
  consigliTot: NaN,
  delibereTot: NaN,
  anno: ["-"],
  consigliAnno: [NaN],
  delibereAnno: [NaN],
};
