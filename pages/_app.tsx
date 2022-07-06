import "../styles/globals.css";
import type { AppProps } from "next/app";

import Head from "next/head";
import React from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Head>
        <title>Prova - Davide Fiorini</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon.png" />
        <meta name="theme-color" content="#2BB0EC" />
      </Head>
      <Header />
      <Box as="main" bg="#ECE2D0" px={{ base: 4, md: 16 }} py={{ base: 8 }}>
        <Component {...pageProps} />
      </Box>
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
