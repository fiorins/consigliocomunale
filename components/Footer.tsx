import { Center, Text, Icon, Link } from "@chakra-ui/react";
import { HiCode } from "react-icons/hi";

const Footer = () => {
  return (
    <Center
      bg="#ECE2D0"
      color="black"
      px={{ base: 8, md: 16 }}
      py={{ base: 8 }}
    >
      <Text fontSize="md" fontWeight="bold">
        Trovi&nbsp;
        <Link href="https://github.com" isExternal>
          <Text as="u">qui</Text>
        </Link>
        &nbsp;il codice sorgente&nbsp;
      </Text>
      <Icon as={HiCode} color="black" />
    </Center>
  );
};

export default Footer;
