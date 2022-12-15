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
        <Flex flexDir={'column'} justifyContent={"space-between"}>
          <Flex>
            <Text
              fontSize={'xs'}
              borderRadius="20"
              pl="5%"
              pr="5%"
              fontWeight={"bold"}
              bg="brand.400"
              color="white"
            >
              {company.ticker}
            </Text>
          </Flex>
          <Flex
            flexDir={'column'}
            justifyContent={'space-between'}
          >
            <Text fontSize="xl" fontWeight="bold">{company.name}</Text>
            <Text
              fontSize="sm"
              fontWeight={"bold"}
              color={company.changePercentage.startsWith('-') ? 'red' : 'green'}
            >
              {company.currencySymbol}
              {company.stockPrice} ({company.changePercentage}%)
            </Text>
          </Flex>
        </Flex>
        <Flex>
          <Image src={company.logoUrl} w="109px" />
        </Flex>
      </Flex>
  );
}
