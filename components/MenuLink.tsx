import React from "react";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import NextLink from "next/link";

type Props = {
  href: string;
  textButton?: string;
};

const MenuLink = ({ href, textButton }: Props) => {
  const router = useRouter();
  const isActive = router.pathname === href; //to do condizione confronto con href e renderlo booleano questo

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

  return (
    <NextLink href={href} passHref>
      <Button {...(isActive ? { ...button_active } : { ...button_inactive })}>
        {textButton}
      </Button>
    </NextLink>
  );
};

export default MenuLink;
