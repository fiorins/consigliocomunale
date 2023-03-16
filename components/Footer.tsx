import { Center, HStack, Text, Icon, Link, Flex } from "@chakra-ui/react";
import { HiCode, HiDatabase } from "react-icons/hi";

const Footer = () => {
  return (
    <Flex
      justify="space-evenly"
      bg="#ECE2D0"
      color="black"
      px={{ base: 8, md: 16 }}
      py={{ base: 8 }}
      fontSize={{ base: "sm", md: "md" }}
      fontWeight="bold"
      align="center"
    >
      <Text>
        Dati acquisiti dall&apos;
        <Link href="http://89.97.181.229" isExternal>
          <Text as="u">albo pretorio</Text>
        </Link>
        &nbsp;comunale&nbsp;
        <Icon as={HiDatabase} verticalAlign="sub" />
      </Text>

      <Text>
        Trovi&nbsp;
        <Link href="https://github.com/fiorins/consigliocomunale" isExternal>
          <Text as="u">qui</Text>
        </Link>
        &nbsp;il codice sorgente&nbsp;
        <Icon as={HiCode} verticalAlign="sub" />
      </Text>
    </Flex>
  );
};

export default Footer;
