import React from "react";
import { Button, Wrap, WrapItem } from "@chakra-ui/react";
import { useRouter } from "next/router";
import NextLink from "next/link";

export default function MayorsButtons() {
  const router = useRouter();
  const isActive = router.pathname;
  console.log(isActive);

  const button_active = {
    bg: "red.700",
    _hover: {
      background: "red.700",
    },
  };
  const button_inactive = {
    variant: "ghost",
    color: "red.700", //"white"
    _hover: {
      background: "red.50",
      color: "red.700",
    },
    _active: {
      bg: "red.200",
      transform: "scale(0.98)",
    },
  };
  const button_inactive_alt = {
    variant: "outline",
    color: "red.700",
    borderColor: "red.700", //"white"
    _hover: {
      background: "red.50",
      color: "red.700",
    },
  };

  return (
    <Wrap spacing={8}>
      <WrapItem>
        <NextLink href="/paliotta-2" passHref>
          <Button {...button_inactive}>Paliotta II</Button>
        </NextLink>
      </WrapItem>
      <WrapItem>
        <NextLink href="/grando-1" passHref>
          <Button {...button_inactive}>Grando I</Button>
        </NextLink>
      </WrapItem>
      <WrapItem>
        <NextLink href="/grando-2" passHref>
          <Button {...button_active}>Grando II</Button>
        </NextLink>
      </WrapItem>
    </Wrap>
  );
}
