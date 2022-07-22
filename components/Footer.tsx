import { Center, Text, Icon, Link, Flex } from "@chakra-ui/react";
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
    >
      <Center>
        <Text>
          Dati acquisiti dall&apos;
          <Link href="http://89.97.181.229" isExternal>
            <Text as="u">albo pretorio</Text>
          </Link>
          &nbsp;di Ladispoli&nbsp;
        </Text>
        <Icon as={HiDatabase} />
      </Center>
      <Center>
        <Text>
          Trovi&nbsp;
          <Link href="https://github.com" isExternal>
            <Text as="u">qui</Text>
          </Link>
          &nbsp;il codice sorgente&nbsp;
        </Text>
        <Icon as={HiCode} />
      </Center>
    </Flex>
  );
};

export default Footer;
