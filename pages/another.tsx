import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Center, Text } from "@chakra-ui/react";

const Another: NextPage = () => {
  return (
    <Center bg="#4D7EA8" h="100px" color="white">
      <Text fontSize="4xl" fontWeight="bold">
        Open Data Ladispoli Consigli Comunali
      </Text>
    </Center>
  );
};

export default Another;
