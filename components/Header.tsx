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
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { Cross as Hamburger } from "hamburger-react";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Center bg="gray.200" p={{ base: 8 }} color="white">
        <VStack>
          <Text fontSize="4xl" fontWeight="bold" textAlign={"center"}>
            Open Data Ladispoli Consigli Comunali
          </Text>
          <ButtonGroup gap="4" p={{ base: 8 }}>
            <Button bg="red.400" colorScheme="red">
              Paliotta II
            </Button>
            <Button bg="red.400" colorScheme="red">
              Grando I
            </Button>
            <Button bg="red.700" colorScheme="red">
              Grando II
            </Button>
          </ButtonGroup>
        </VStack>

        {/* 
        <VStack>
          <Text
            fontSize="4xl"
            fontWeight="bold"
            textAlign={["left", "left", "center"]}
          >
            Open Data Ladispoli Consigli Comunali
          </Text>
          <ButtonGroup gap="4" p={{ base: 8 }}>
            <Button bg="red.700" colorScheme="red">
              Paliotta 2012-17
            </Button>
            <Button bg="red.700" colorScheme="red">
              Grando 2017-22
            </Button>
            <Button variant='ghost' colorScheme="red">
              Grando 2022-..
            </Button>
          </ButtonGroup> 
        </VStack>*/}
      </Center>
    </>
  );
};

export default Header;
