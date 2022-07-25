import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import React, { useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Box, VStack } from "@chakra-ui/react";
import splitbee from "@splitbee/web";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect((): void => {
    splitbee.init();
  }, []);

  return (
    <ChakraProvider>
      <Head>
        <title>Ladispoli - Consiglio Comunale</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon.ico" />
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
