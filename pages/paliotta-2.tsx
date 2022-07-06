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
} from "@chakra-ui/react";
import { MdStar } from "react-icons/md";

const Paliotta2: NextPage = () => {
  return (
    <Box>
      <VStack bg="green.500" px={{ base: 16 }} py={{ base: 8 }}>
        <Text>Statistiche Consiliatura 2017-2022</Text>
        <Box bg="white" px={{ base: 16 }} py={{ base: 8 }}>
          <Flex mt={2} align="center">
            <Box as={MdStar} color="orange.400" />
            <Text ml={1} fontSize="sm">
              <b>4.84</b>
            </Text>
          </Flex>
        </Box>
      </VStack>
      <HStack bg="tomato" px={{ base: 16 }} py={{ base: 8 }}>
        <VStack>
          <Box bg="red" px={{ base: 16 }} py={{ base: 8 }}>
            <Text>Statistiche Consiliatura 2017-2022</Text>
          </Box>
          <Box bg="yellow" px={{ base: 16 }} py={{ base: 8 }}>
            <VStack>
              <Text borderRadius="full" px="2" colorScheme="teal">
                <Badge borderRadius="full" px="2" colorScheme="teal">
                  2033
                </Badge>
              </Text>

              <Badge borderRadius="full" px="2" colorScheme="teal">
                <Text borderRadius="full" px="2" colorScheme="teal">
                  2034
                </Text>
              </Badge>
              <Box>
                <Text borderRadius="full" px="2" colorScheme="teal">
                  2035
                </Text>
              </Box>
              <Box>
                <Badge borderRadius="full" px="2" colorScheme="teal">
                  <Text borderRadius="full" px="2" colorScheme="teal">
                    2036
                  </Text>
                </Badge>
              </Box>
              <Badge borderRadius="full" px="2" colorScheme="teal">
                2021
              </Badge>
              <Badge borderRadius="full" px="2" colorScheme="teal">
                2022
              </Badge>
            </VStack>
          </Box>
        </VStack>
        <VStack>
          <Box bg="green" px={{ base: 16 }} py={{ base: 8 }}>
            <Text>Statistiche Consiliatura 2017-2022</Text>
          </Box>
          <Box bg="violet" px={{ base: 16 }} py={{ base: 8 }}>
            <VStack>
              <Text borderRadius="full" colorScheme="teal">
                2017
              </Text>
              <Text borderRadius="full" colorScheme="teal">
                2018
              </Text>
              <Text borderRadius="full" colorScheme="teal">
                2019
              </Text>
              <Text borderRadius="full" colorScheme="teal">
                2020
              </Text>
              <Text borderRadius="full" colorScheme="teal">
                2021
              </Text>
              <Text borderRadius="full" colorScheme="teal">
                2022
              </Text>
            </VStack>
          </Box>
        </VStack>
        <VStack>
          <Box bg="blue" px={{ base: 16 }} py={{ base: 8 }}>
            <Text>Statistiche Consiliatura 2017-2022</Text>
          </Box>
          <Box bg="violet" px={{ base: 16 }} py={{ base: 8 }}>
            <VStack>
              <Text borderRadius="full" px="2" colorScheme="teal">
                2017
              </Text>
              <Text borderRadius="full" px="2" colorScheme="teal">
                2018
              </Text>
              <Text borderRadius="full" px="2" colorScheme="teal">
                2019
              </Text>
              <Text borderRadius="full" px="2" colorScheme="teal">
                2020
              </Text>
              <Text borderRadius="full" px="2" colorScheme="teal">
                2021
              </Text>
              <Text borderRadius="full" px="2" colorScheme="teal">
                2022
              </Text>
            </VStack>
          </Box>
        </VStack>
      </HStack>
    </Box>
  );
};

export default Paliotta2;
