import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import { useEffect, useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Center, Box, VStack, HStack, Flex } from "@chakra-ui/react";
import Airtable from "airtable";

// const base = new Airtable({ apiKey: "keyZyBD1VLzle3dA9" }).base(
//   "appjMMg2Hxsyb6seI"
// );

function MyApp({ Component, pageProps }: AppProps) {
  // const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  //   "appjMMg2Hxsyb6seI"
  // );

  // const [testz, setTests] = useState([]);

  // useEffect(() => {
  //   base("goals")
  //     .select({ view: "Grid view" })
  //     .eachPage((records: any, fetchNextPage) => {
  //       setTests(records);
  //       fetchNextPage();
  //     });
  // }, []);

  return (
    <ChakraProvider>
      <Head>
        <title>Prova - Davide Fiorini</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon.png" />
        <meta name="theme-color" content="#2BB0EC" />
      </Head>
      <VStack minH="100vh" align="stretch" spacing={0}>
        <Header />
        <Box
          as="main"
          bg="#ECE2D0"
          px={{ base: 8, md: 16 }}
          py={{ base: 8 }}
          flexGrow="1"
        >
          <Component {...pageProps} />
        </Box>
        <Footer />
      </VStack>
    </ChakraProvider>
  );
}

export default MyApp;
