import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

export default function PortfolioSummaryCard({ user }) {
  return (
    <Flex>
      <Flex
        flexDir={'column'}
        border="1px"
        borderColor={'gray.400'}
        borderRadius="md"
        p="4"
        mr="4"
      >
        <Text fontWeight={'bold'}>CURRENT BALANCE</Text>
        <Text
          fontSize={'2xl'}
          fontWeight={'bold'}
          color={user.returnPercentage.startsWith('-') ? 'brand.400' : 'green'}
        >
          {user.currencySymbol}
          {Number(user.currentBalance).toLocaleString()}
        </Text>
      </Flex>
      <Flex
        flexDir={'column'}
        border="1px"
        borderColor={'gray.400'}
        borderRadius="md"
        p="4"
      >
        <Text fontWeight={'bold'}>PORTFOLIO RETURN</Text>
        <Text
          fontSize={'2xl'}
          fontWeight={'bold'}
          color={user.returnPercentage.startsWith('-') ? 'brand.400' : 'green'}
        >
          {user.returnPercentage.startsWith('-') ? '' : '+'}
          {user.returnPercentage}
        </Text>
      </Flex>
    </Flex>
  );
}
