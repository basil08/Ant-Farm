import React from 'react';
import {
  Badge,
  Flex,
  Text,
  TableContainer,
  Table,
  Thead,
  Th,
  Td,
  Tr,
  Tbody,
  TableCaption,
} from '@chakra-ui/react';

import Sidebar from '../components/sidebar';
import Navbar from '../components/navbar';
import PortfolioSummaryCard from '../components/portfolioSummaryCard';

import moment from 'moment/moment';

function Dashboard() {
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
            title="Dashboard"
            subtitle="Welcome to your Ant Farm Dashboard."
            user={user}
          />
        </Flex>

        <Flex m="4">
          <PortfolioSummaryCard user={user} />
        </Flex>

        <Flex m="4">
          <Flex flexDir={'column'}>
            <Text color="brand.400" fontWeight={'bold'} fontSize={'lg'}>
              Portfolio Overview
            </Text>
            <Flex>
              <Flex></Flex>
              <Flex></Flex>
            </Flex>
          </Flex>
        </Flex>

        <Flex m="4">
          <Flex flexDir={'column'}>
            <Text color="brand.400" fontWeight={'bold'} fontSize={'lg'}>
              Active Proposals
            </Text>
            <Flex>
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
                    <Thead>
                      <Tr>
                        <Th fontSize="md">ACTION</Th>
                        <Th fontSize="md">STOCK</Th>
                        <Th fontSize="md">DATE</Th>
                        <Th fontSize="md">PROPOSALS (LAST MONTH)</Th>
                        <Th fontSize="md">CATEGORY</Th>
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
                            <Text as="span">{proposal.companyName}</Text>
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
                            <Text fontWeight={'bold'}>
                              <Badge
                                fontSize={'md'}
                                bg={'brown'}
                                color="white"
                                pl="2"
                                pr="2"
                              >
                                {proposal.category
                                  ? proposal.category
                                  : 'SOCIAL'}
                              </Badge>
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
    </Flex>
  );
}

export default Dashboard;
