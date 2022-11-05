import React from 'react';
import { Button, Flex, Image, Text } from '@chakra-ui/react';

export default function CompanyCard({ company }) {
  return (
      <Flex
        border={'1px'}
        borderColor={'gray.400'}
        borderRadius="20"
        p="4"
        columnGap={5}
      >
        <Flex flexDir={'column'} rowGap={10}>
          <Flex>
            <Text
              fontSize={'xs'}
              borderRadius="20"
              p="10%"
              bg="brand.400"
              color="white"
            >
              {company.ticker}
            </Text>
          </Flex>
          <Flex
            flexDir={'column'}
            fontSize="xs"
            justifyContent={'space-between'}
          >
            <Text fontWeight="bold">{company.name}</Text>
            <Text
              color={company.changePercentage.startsWith('-') ? 'red' : 'green'}
            >
              {company.currencySymbol}
              {company.stockPrice} ({company.changePercentage}%)
            </Text>
          </Flex>
        </Flex>
        <Flex>
          <Image src={company.logoUrl} objectFit="cover" />
        </Flex>
      </Flex>
  );
}
