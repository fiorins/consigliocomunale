import React from "react";
import { Wrap, WrapItem } from "@chakra-ui/react";
import MenuLink from "./MenuLink";

export default function Menu() {
  return (
    <Wrap spacing={8}>
      <WrapItem>
        <MenuLink href="/paliotta-2" textButton="Paliotta II" />
      </WrapItem>
      <WrapItem>
        <MenuLink href="/grando-1" textButton="Grando I" />
      </WrapItem>
      <WrapItem>
        <MenuLink href="/grando-2" textButton="Grando II" />
      </WrapItem>
    </Wrap>
  );
}
