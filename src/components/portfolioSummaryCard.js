import React from 'react';
import { Flex, Text, Select } from '@chakra-ui/react';

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
        <Flex flexDir={'column'}>
          <Text fontWeight={'bold'}>PORTFOLIO RETURN</Text>
          <Flex justifyContent={"flex-end"}>
            <Select size={'xs'}>
              <option>A day</option>
              <option>1 Week</option>
              <option>1 Month</option>
              <option>1 Year</option>
            </Select>
          </Flex>
        </Flex>
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
