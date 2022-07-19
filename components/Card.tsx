import React from "react";
import { Text, Box, SimpleGrid, Icon, Divider } from "@chakra-ui/react";
import { HiLibrary, HiUserGroup } from "react-icons/hi";
import { IoIosPaper } from "react-icons/io";
import TableBadgeCell from "./card-components/TableBadgeCell";
import TableTextCell from "./card-components/TableTextCell";
import TableIconTextCell from "./card-components/TableIconTextCell";

type CardProps = {
  title: string;
  subtitle?: string;
  councilors: number;
  councilsTot: number;
  resolutionsTot: number;
  yearsList: string[];
  councilsPerYear: number[];
  resolutionsPerYear: number[];
};

export const Card: React.FC<CardProps> = (props) => {
  return (
    <Box rounded="3xl" bg="orange.50" py={6} px={4}>
      <Text textAlign="center" color="black" fontSize="lg" fontWeight="700">
        {props.title}
      </Text>
      <Text textAlign="center" color="black" fontSize="lg" fontWeight="700">
        {props.subtitle}
      </Text>
      <SimpleGrid columns={3} spacing={0}>
        <TableIconTextCell
          numberCell={props.councilors}
          textCell="Consiglieri eletti"
        >
          <Icon as={HiUserGroup} color="teal" />
        </TableIconTextCell>
        <TableIconTextCell
          numberCell={props.councilsTot}
          textCell="Consigli comunali"
        >
          <Icon as={HiLibrary} color="teal" />
        </TableIconTextCell>
        <TableIconTextCell
          numberCell={props.resolutionsTot}
          textCell="Delibere comunali"
        >
          <Icon as={IoIosPaper} color="teal" />
        </TableIconTextCell>

        <Divider orientation="horizontal" />
        <Divider orientation="horizontal" />
        <Divider orientation="horizontal" />

        {props.yearsList.map((index: any, elem: any) => (
          <React.Fragment key={index}>
            <TableBadgeCell textCell={props.yearsList[elem]} />
            <TableTextCell textCell={props.councilsPerYear[elem]} />
            <TableTextCell textCell={props.resolutionsPerYear[elem]} />
          </React.Fragment>
        ))}
      </SimpleGrid>
    </Box>
  );
};

Card.defaultProps = {
  title: "-",
  councilors: NaN,
  councilsTot: NaN,
  resolutionsTot: NaN,
  yearsList: ["-"],
  councilsPerYear: [NaN],
  resolutionsPerYear: [NaN],
};
