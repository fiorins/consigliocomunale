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
  Link,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const Footer = () => {
  return (
    <>
      <Center bg="tomato" p={{ base: 8 }} color="white">
        <Text fontSize="md" fontWeight="bold" textAlign={"center"}>
          Trovi&nbsp;
          <Link href="https://github.com" isExternal>
            <Text as="u">qui</Text>
          </Link>
          &nbsp;il codice sorgente icona
        </Text>
      </Center>
    </>
  );
};

export default Footer;
