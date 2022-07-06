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
  useBreakpointValue,
  useMediaQuery,
  Show,
  Hide,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { Squash as Hamburger } from "hamburger-react";
import { useState } from "react";
import MayorsButtons from "./MayorsButtons";

const HeaderM = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const variantValue = useBreakpointValue({ base: "outline", md: "solid" });
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <>
      <Center bg="#D3A673" p={{ base: 8 }} color="white">
        <VStack spacing={8}>
          <HStack>
            <Text
              fontSize="3xl"
              fontWeight="bold"
              textAlign={["left", "left", "center"]}
            >
              Ladispoli Consiglio Comunale
            </Text>
            {isMobile ? (
              <Hamburger
                toggled={mobileMenu}
                toggle={toggleMenu}
                direction="left"
                rounded
                color="#fff"
              />
            ) : (
              ""
            )}
          </HStack>
          {isMobile ? "" : <MayorsButtons />}
          {mobileMenu ? <MayorsButtons /> : ""}
        </VStack>
      </Center>
    </>
  );
};

export default HeaderM;
