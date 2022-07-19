import React from "react";
import { Center, Flex, Text } from "@chakra-ui/react";

type Props = {
  numberCell?: number;
  textCell?: string;
  children?: React.ReactNode;
};

const TableIconTextCell = ({ numberCell, textCell, children }: Props) => {
  return (
    <Center rounded="lg" color="gray.400" py={{ base: 4, md: 8 }} px={2}>
      <Flex flexDirection="column" alignItems="center">
        <Flex flexDirection="row" alignItems="center">
          {children}
          <Text color="black" fontWeight="700" textAlign="center">
            &nbsp;{numberCell}
          </Text>
        </Flex>
        <Text color="black" fontWeight="700" textAlign="center">
          {textCell}
        </Text>
      </Flex>
    </Center>
  );
};

export default TableIconTextCell;
