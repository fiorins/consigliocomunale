import { Text, HStack, VStack, useMediaQuery } from "@chakra-ui/react";
import { Squash as Hamburger } from "hamburger-react";
import { useState } from "react";
import Menu from "./header-components/Menu";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const [isMobile] = useMediaQuery("(max-width: 500px)");

  return (
    <VStack
      spacing={8}
      bg="#ECE2D0"
      color="white"
      px={{ base: 8, md: 16 }}
      py={{ base: 8 }}
    >
      <HStack>
        <Text
          color="black"
          fontSize="3xl"
          fontWeight="bold"
          //textAlign={["left", "left", "left", "left", "center"]}
        >
          Ladispoli Consiglio Comunale
        </Text>
        {isMobile ? (
          <Hamburger
            toggled={mobileMenu}
            toggle={toggleMenu}
            direction="left"
            color="black"
            rounded
          />
        ) : (
          ""
        )}
      </HStack>
      {isMobile ? "" : <Menu />}
      {mobileMenu ? <Menu /> : ""}
    </VStack>
  );
};

export default Header;
