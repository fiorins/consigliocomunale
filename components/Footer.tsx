import type { NextPage } from "next";
import {
  Center,
  Text,
  Stack,
  HStack,
  VStack,
  Button,
  ButtonGroup,
  Circle,
  Square,
  Icon,
  Flex,
  Link,
} from "@chakra-ui/react";
import { HiCode } from "react-icons/hi";

const Footer = () => {
  return (
    <>
      <Center bg="tomato" p={{ base: 8 }} color="white">
        <Flex flexDirection="row" alignItems="center">
          <Text fontSize="md" fontWeight="bold">
            Trovi&nbsp;
            <Link href="https://github.com" isExternal>
              <Text as="u">qui</Text>
            </Link>
            &nbsp;il codice sorgente&nbsp;
          </Text>
          <Icon as={HiCode} color="white" />
        </Flex>
      </Center>
    </>
  );
};

export default Footer;
