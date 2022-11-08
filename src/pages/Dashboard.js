import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

import Sidebar from '../components/sidebar';
import Navbar from '../components/navbar';
import PortfolioSummaryCard from '../components/portfolioSummaryCard';

function Dashboard() {
  const user = {
    name: 'Parth Sharma',
    currentBalance: '1350340.56',
    currencySymbol: '$',
    returnPercentage: '24.5%',
    profilePic:
      'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9',
  };

  return (
    <Flex minHeight={'100vh'} height={'fit-content'} width={'98vw'}>
      <Sidebar />

      <Flex flexDir="column" height={'fit-content'} width="95%">
        <Flex m="4">
          <Navbar
            title="Dashboard"
            subtitle="Welcome to your Ant Farm Dashboard. View the portfolio's analytics at a single glance."
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
              All Proposals
            </Text>
            <Flex>
              <Flex></Flex>
              <Flex></Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Dashboard;
