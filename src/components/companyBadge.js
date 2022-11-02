import React from "react";
import {
  Flex,
  Center,
  Square,
  Text,
  Image
} from "@chakra-ui/react";

export default function CompanyBadge() {
  return (
    <Flex w="100%">
    <Center w="75px">
      <Image boxSize="40px" objectFit="cover" src="./logo.svg" />
    </Center>
    <Square size="90px">
      <Text fontSize={'1.2em'} fontWeight={'bold'}>
        Ant Farm
      </Text>
    </Square>
  </Flex>
  );
}