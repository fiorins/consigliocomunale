import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import {
  Center,
  VStack,
  HStack,
  Text,
  Box,
  Flex,
  Square,
  Badge,
  Grid,
  GridItem,
  Icon,
  SimpleGrid,
} from "@chakra-ui/react";
import { MdStar } from "react-icons/md";

const Paliotta1: NextPage = () => {
  return (
    // togliere questo primo box e lasciare tag vuoto alla fine
    <Box bg="brown">
      <VStack bg="orange" px={{ base: 8 }} py={{ base: 8 }}>
        <Text textAlign="center">Statistiche Consiliatura 2017-2022</Text>
        <Box bg="white" px={{ base: 16 }} py={{ base: 8 }}>
          <Flex mt={2} align="center">
            <Box as={MdStar} color="orange.400" />
            <Text ml={1} fontSize="sm">
              <b>4.84</b>
            </Text>
          </Flex>
        </Box>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          <Center bg="violet" px={{ base: 16 }} py={{ base: 8 }} />
          <Center bg="violet" px={{ base: 16 }} py={{ base: 8 }}>
            <Flex flexDirection="column">
              <Flex flexDirection="row">
                <Icon
                  as={MdStar}
                  w="20px"
                  h="20px"
                  me="6px"
                  color="green.400"
                />
                <Text
                  color="red"
                  fontSize="sm"
                  fontWeight="700"
                  textAlign="center"
                >
                  85 mins
                </Text>
              </Flex>
              <Text color="red" fontWeight="500" textAlign="center">
                Followers
              </Text>
            </Flex>
          </Center>
          <Center bg="violet" px={{ base: 16 }} py={{ base: 8 }}>
            <Flex flexDirection="column">
              <Flex flexDirection="row">
                <Icon
                  as={MdStar}
                  w="20px"
                  h="20px"
                  me="6px"
                  color="green.400"
                />
                <Text
                  color="red"
                  fontSize="sm"
                  fontWeight="700"
                  textAlign="center"
                >
                  85 mins
                </Text>
              </Flex>
              <Text color="red" fontWeight="500" textAlign="center">
                Followers
              </Text>
            </Flex>
          </Center>
        </Grid>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          <Center bg="yellow" px={{ base: 16 }} py={{ base: 8 }}>
            <Badge borderRadius="full" px="2" colorScheme="teal">
              2017
            </Badge>
          </Center>
          <Center bg="yellow" px={{ base: 16 }} py={{ base: 8 }}>
            <Text>2017-2022</Text>
          </Center>
          <Center bg="yellow" px={{ base: 16 }} py={{ base: 8 }}>
            <Text>2017-2022</Text>
          </Center>
        </Grid>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          <Center bg="green" px={{ base: 16 }} py={{ base: 8 }}>
            <Badge borderRadius="full" px="2" colorScheme="teal">
              2018
            </Badge>
          </Center>
          <Center bg="green" px={{ base: 16 }} py={{ base: 8 }}>
            <Text>2017-2022</Text>
          </Center>
          <Center bg="green" px={{ base: 16 }} py={{ base: 8 }}>
            <Text>2017-2022</Text>
          </Center>
        </Grid>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          <Center bg="red" px={{ base: 16 }} py={{ base: 8 }}>
            <Badge borderRadius="full" px="2" colorScheme="teal">
              2019
            </Badge>
          </Center>
          <Center bg="red" px={{ base: 16 }} py={{ base: 8 }}>
            <Text>2017-2022</Text>
          </Center>
          <Center bg="red" px={{ base: 16 }} py={{ base: 8 }}>
            <Text>2017-2022</Text>
          </Center>
        </Grid>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          <Center bg="blue" px={{ base: 16 }} py={{ base: 8 }}>
            <Badge borderRadius="full" px="2" colorScheme="teal">
              2020
            </Badge>
          </Center>
          <Center bg="blue" px={{ base: 16 }} py={{ base: 8 }}>
            <Text>2017-2022</Text>
          </Center>
          <Center bg="blue" px={{ base: 16 }} py={{ base: 8 }}>
            <Text>2017-2022</Text>
          </Center>
        </Grid>
      </VStack>
    </Box>
  );
};

export default Paliotta1;
