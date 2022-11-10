import React from "react";
import {
  Flex,
  Text,
  TableContainer,
  Th,
  Tr,
  Td,
  Table,
  TableCaption,
  Thead,
  Tbody,
  Badge,
} from "@chakra-ui/react";

import moment from "moment/moment";

import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";

function PortfolioTransactionHistory() {
  const user = {
    name: 'Parth Sharma',
    currentBalance: '1350340.56',
    currencySymbol: '$',
    returnPercentage: '24.5%',
    profilePic:
      'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9',
  };

  const proposals = [
    {
      action: 'BUY',
      stockPrice: '$8.09',
      cashFlow: '+$2050.00',
      companyName: 'Alphabet Inc.',
      timestamp: '2022-11-07T05:01:30+0000',
    },
    {
      action: 'BUY',
      stockPrice: '$8.09',
      cashFlow: '+$2050.00',
      companyName: 'Alphabet Inc.',
      timestamp: '2022-11-07T05:01:30+0000',
    },
    {
      action: 'SELL',
      stockPrice: '$12.09',
      cashFlow: '-$1240.00',
      companyName: 'Apple Inc.',
      timestamp: '2022-11-07T05:01:30+0000',
    },
    {
      action: 'BUY',
      stockPrice: '$8.09',
      cashFlow: '+$2050.00',
      companyName: 'Alphabet Inc.',
      timestamp: '2022-11-07T05:01:30+0000',
    },
    {
      action: 'SELL',
      stockPrice: '$8.09',
      cashFlow: '+$2050.00',
      companyName: 'Alphabet Inc.',
      timestamp: '2022-11-07T05:01:30+0000',
    },
    {
      action: 'BUY',
      stockPrice: '$8.09',
      cashFlow: '+$2050.00',
      companyName: 'Alphabet Inc.',
      timestamp: '2022-11-07T05:01:30+0000',
    },
    {
      action: 'BUY',
      stockPrice: '$8.09',
      cashFlow: '+$2050.00',
      companyName: 'Alphabet Inc.',
      timestamp: '2022-11-07T05:01:30+0000',
    },
    {
      action: 'BUY',
      stockPrice: '$8.09',
      cashFlow: '+$2050.00',
      companyName: 'Alphabet Inc.',
      timestamp: '2022-11-07T05:01:30+0000',
    },
    {
      action: 'SELL',
      stockPrice: '$8.09',
      cashFlow: '+$2050.00',
      companyName: 'Alphabet Inc.',
      timestamp: '2022-11-07T05:01:30+0000',
    },
    {
      action: 'BUY',
      stockPrice: '$8.09',
      cashFlow: '+$2050.00',
      companyName: 'Alphabet Inc.',
      timestamp: '2022-11-07T05:01:30+0000',
    },
    {
      action: 'SELL',
      stockPrice: '$8.09',
      cashFlow: '+$2050.00',
      companyName: 'Alphabet Inc.',
      timestamp: '2022-11-07T05:01:30+0000',
    },
    {
      action: 'BUY',
      stockPrice: '$8.09',
      cashFlow: '+$2050.00',
      companyName: 'Alphabet Inc.',
      timestamp: '2022-11-07T05:01:30+0000',
    },
    {
      action: 'BUY',
      stockPrice: '$8.09',
      cashFlow: '+$2050.00',
      companyName: 'Alphabet Inc.',
      timestamp: '2022-11-07T05:01:30+0000',
    },
    {
      action: 'SELL',
      stockPrice: '$8.09',
      cashFlow: '+$2050.00',
      companyName: 'Alphabet Inc.',
      timestamp: '2022-11-07T05:01:30+0000',
    },
    {
      action: 'BUY',
      stockPrice: '$8.09',
      cashFlow: '+$2050.00',
      companyName: 'Alphabet Inc.',
      timestamp: '2022-11-07T05:01:30+0000',
    },
  ];

  return (
    <Flex minHeight={'100vh'} height={'fit-content'} width={'98vw'}>
      <Sidebar />

      <Flex flexDir="column" height={'fit-content'} width="95%">
        <Flex m="4">
          <Navbar
            title="Portfolio Transaction History"
            subtitle="Make money the right way, and see how your favourite ESG indicators are performing."
            user={user}
          />
        </Flex>

        <Flex m="4">
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

        </Flex>


        <Flex m="4">
          <Flex flexDir={'column'}>
            <Flex>
              <TableContainer
                border="1px"
                borderColor={'gray.400'}
                borderRadius="15"
                p="4"
                m="4"
              >
                <Table variant="simple" size="md" colorScheme="gray">
                  <TableCaption color="white">All Proposals</TableCaption>
                  <Thead bg="#F0F0F0">
                    <Tr>
                      <Th fontSize="md">ACTION</Th>
                      <Th fontSize="md">STOCK / PRICE</Th>
                      <Th fontSize="md">DATE</Th>
                      <Th fontSize="md">PROPOSALS (LAST MONTH)</Th>
                      <Th fontSize="md">CASH FLOW</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {proposals.map(proposal => (
                      <Tr>
                        <Td>
                          <Badge
                            fontSize={'md'}
                            bg={
                              proposal.action === 'BUY'
                                ? 'green'
                                : 'brand.400'
                            }
                            color="white"
                            pl="2"
                            pr="2"
                          >
                            {proposal.action}
                          </Badge>
                        </Td>
                        <Td>
                          <Text as="span">
                            {proposal.companyName} &mdash;
                            <Text as="span" color="gray.500">
                              {proposal.stockPrice} per share
                            </Text>
                          </Text>
                        </Td>
                        <Td>{moment(proposal.timestamp).fromNow()}</Td>
                        <Td fontWeight={'bold'}>
                          <Text as="span" color="green">
                            +1765
                          </Text>{' '}
                          /{' '}
                          <Text as="span" color="brand.400">
                            -24
                          </Text>
                        </Td>
                        <Td>
                          <Text
                            fontWeight={'bold'}
                            color={
                              proposal.cashFlow.startsWith('-')
                                ? 'brand.400'
                                : 'green'
                            }
                          >
                            {proposal.cashFlow}
                          </Text>
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );

}

export default PortfolioTransactionHistory;