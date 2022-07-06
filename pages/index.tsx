import type { NextPage } from "next";
import React, { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Router from "next/router";

const Home: NextPage = () => {
  //redirect to my last page
  useEffect(() => {
    const { pathname } = Router;
    if (pathname === "/") {
      Router.push("/grando-2");
    }
  });
  return <></>;
};

export default Home;
