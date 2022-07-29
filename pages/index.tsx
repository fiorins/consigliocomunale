import type { NextPage } from "next";
import React, { useEffect } from "react";
import Router from "next/router";
import { SpinnerCircular } from "spinners-react";
import { Center } from "@chakra-ui/react";

const Home: NextPage = () => {
  //redirect to my home page
  useEffect(() => {
    const { pathname } = Router;
    if (pathname === "/") {
      Router.push("/grando1");
    }
  });

  return (
    <Center p={16 * 2}>
      <SpinnerCircular color="#9B2C2C" />
    </Center>
  );
};

export default Home;
