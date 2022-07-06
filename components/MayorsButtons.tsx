import React from "react";
import { Button, Wrap, WrapItem } from "@chakra-ui/react";
import { useRouter } from "next/router";
import NextLink from "next/link";

export default function MayorsButtons() {
  const router = useRouter();
  const isActive = router.pathname; //to do condizione confronto con href e renderlo booleano questo

  const button_active = {
    bg: "red.700",
    color: "orange.50", //"white"
    _hover: {
      background: "red.700",
      color: "orange.50",
    },
    _active: {
      background: "red.700",
      transform: "scale(0.98)",
    },
  };
  const button_inactive = {
    variant: "ghost",
    bg: "",
    color: "red.700", //"white"
    _hover: {
      background: "red.50",
      color: "red.700",
    },
    _active: {
      background: "red.50",
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

  const href1 = "/paliotta-2";
  const href2 = "/grando-1";
  const href3 = "/grando-2";

  return (
    <Wrap spacing={8}>
      <WrapItem>
        <NextLink href={href1} passHref>
          <Button
            {...(isActive == href1
              ? { ...button_active }
              : { ...button_inactive })}
          >
            Paliotta II
          </Button>
        </NextLink>
      </WrapItem>
      <WrapItem>
        <NextLink href={href2} passHref>
          <Button
            {...(isActive == href2
              ? { ...button_active }
              : { ...button_inactive })}
          >
            Grando I
          </Button>
        </NextLink>
      </WrapItem>
      <WrapItem>
        <NextLink href={href3} passHref>
          <Button
            {...(isActive == href3
              ? { ...button_active }
              : { ...button_inactive })}
          >
            Grando II
          </Button>
        </NextLink>
      </WrapItem>
    </Wrap>
  );
}
