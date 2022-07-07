import type { NextPage } from "next";
import React, { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Router from "next/router";
import { SpinnerCircular } from "spinners-react";
import { Center, Box, HStack } from "@chakra-ui/react";

const Home: NextPage = () => {
  //redirect to my last page
  useEffect(() => {
    const { pathname } = Router;
    if (pathname === "/") {
      Router.push("/grando-2");
    }
  });
  return (
    <Center p={16 * 2}>
      <SpinnerCircular color="#9B2C2C" />
    </Center>
  );
};

export default Home;
