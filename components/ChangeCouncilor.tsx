import React from "react";
import { Text, Tag, TagLeftIcon, TagLabel } from "@chakra-ui/react";
import { IoMdArrowRoundDown, IoMdArrowRoundUp } from "react-icons/io";

type Props = {
  date: string;
  councilorOut: string;
  councilorIn: string;
};

const ChangeCouncilor: React.FC<Props> = (props) => {
  return (
    <Text fontSize="sm">
      {props.date}:&nbsp;&nbsp;&nbsp;
      <Tag size={"sm"} variant="subtle" colorScheme="red" mb={1}>
        <TagLeftIcon boxSize="12px" as={IoMdArrowRoundDown} />
        <TagLabel>Esce</TagLabel>
      </Tag>
      &nbsp;{props.councilorOut}&nbsp;&nbsp;&nbsp;
      <Tag size={"sm"} variant="subtle" colorScheme="green">
        <TagLeftIcon boxSize="12px" as={IoMdArrowRoundUp} />
        <TagLabel>Entra</TagLabel>
      </Tag>
      &nbsp;{props.councilorIn}
    </Text>
  );
};

export default ChangeCouncilor;
