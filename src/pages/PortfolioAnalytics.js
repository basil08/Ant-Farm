import React, { useState } from "react";
import {
  Flex,
  Button,
  Text,
  TableContainer,
  Th,
  Tr,
  Td,
  Table,
  TableCaption,
  Thead,
  Tbody,
} from "@chakra-ui/react";

import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import FilterBand from "../components/filterBand";

import moment from "moment/moment";

function PortfolioAnalytics() {
  const categories = [
    { name: 'ALL' },
    { name: 'TECHNOLOGY' },
    { name: 'FMCG' },
    { name: 'OIL AND GAS' },
    { name: 'FINANCE' },
    { name: 'HEALTHCARE' },
    { name: 'AUTOMOTIVES' },
  ];

  const proposals = [
    {
      companyName: "Apple Inc.",
      ticker: "AAPL",
      numShares: 2500,
      position: '2022-11-07T05:01:30+0000',
    },
    {
      companyName: "Apple Inc.",
      ticker: "AAPL",
      numShares: 2500,
      position: '2022-11-07T05:01:30+0000',
    },
    {
      companyName: "Apple Inc.",
      ticker: "AAPL",
      numShares: 2500,
      position: '2022-11-07T05:01:30+0000',
    },
    {
      companyName: "Apple Inc.",
      ticker: "AAPL",
      numShares: 2500,
      position: '2022-11-07T05:01:30+0000',
    },
    {
      companyName: "Apple Inc.",
      ticker: "AAPL",
      numShares: 2500,
      position: '2022-11-07T05:01:30+0000',
    },
    {
      companyName: "Apple Inc.",
      ticker: "AAPL",
      numShares: 2500,
      position: '2022-11-07T05:01:30+0000',
    },
    {
      companyName: "Apple Inc.",
      ticker: "AAPL",
      numShares: 2500,
      position: '2022-11-07T05:01:30+0000',
    },
    {
      companyName: "Apple Inc.",
      ticker: "AAPL",
      numShares: 2500,
      position: '2022-11-07T05:01:30+0000',
    },
    {
      companyName: "Apple Inc.",
      ticker: "AAPL",
      numShares: 2500,
      position: '2022-11-07T05:01:30+0000',
    },
    {
      companyName: "Apple Inc.",
      ticker: "AAPL",
      numShares: 2500,
      position: '2022-11-07T05:01:30+0000',
    },
    {
      companyName: "Apple Inc.",
      ticker: "AAPL",
      numShares: 2500,
      position: '2022-11-07T05:01:30+0000',
    },
    {
      companyName: "Apple Inc.",
      ticker: "AAPL",
      numShares: 2500,
      position: '2022-11-07T05:01:30+0000',
    },
    {
      companyName: "Apple Inc.",
      ticker: "AAPL",
      numShares: 2500,
      position: '2022-11-07T05:01:30+0000',
    },
    {
      companyName: "Apple Inc.",
      ticker: "AAPL",
      numShares: 2500,
      position: '2022-11-07T05:01:30+0000',
    },
  ]

  // state management variables
  const [searchText, setSearchText] = useState('');
  const [isActive, setIsActive] = useState(0);


  // DOM interaction handlers
  const handleFilterChange = index => setIsActive(index);
  const handleSearchTextChange = value => setSearchText(value);

  return (
    <Flex minHeight={'100vh'} height={'fit-content'} width={'98vw'}>
      <Sidebar />
      <Flex flexDir="column" height={'fit-content'} width="95%">
        <Flex m="4">
          <Navbar
            title="Portfolio Analytics"
            subtitle="Make money the right way, and see how your favourite ESG indicators are performing."
            user={{
              name: "Parth Sharma",
              profilePic: "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
            }}
          />
        </Flex>

        <Flex m="4">
          <Flex p="4">
            <Button size="lg" color="white" bg={"#5BB0FF"}>
              <Text size="xl">
                Portfolio Performance
              </Text>
            </Button>
          </Flex>
          <Flex p="4">
            <Button size="lg" color="white" bg={"#FFA05B"}>
              <Text size="xl">
                ESG Analytics
              </Text>
            </Button>
          </Flex>
        </Flex>

        <Flex ml="4">
          <FilterBand
            categories={categories}
            handleFilterChange={handleFilterChange}
            isActive={isActive}
            searchText={searchText}
            handleSearchTextChange={handleSearchTextChange}
          />
        </Flex>

        <Flex m="4">
          <Flex flexDir={'column'} w="100%">
            <TableContainer
              border="1px"
              borderColor={'gray.400'}
              borderRadius="15"
              p="4"
              m="4"
            >
              <Table variant="simple" size="md" colorScheme="gray">
                <TableCaption color="white">Positions</TableCaption>
                <Thead bg="#F0F0F0">
                  <Tr>
                    <Th fontSize="md">COMPANY</Th>
                    <Th fontSize="md">TICKER</Th>
                    <Th fontSize="md">NUMBER OF SHARES HELD</Th>
                    <Th fontSize="md">POSITION (LAST UPDATED)</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {proposals.map(proposal => (
                    <Tr>
                      <Td>
                        <Text as="span">
                          {proposal.companyName}
                        </Text>
                      </Td>
                      <Td>
                        <Text as="span">
                          {proposal.ticker}
                        </Text>
                      </Td>
                      <Td>
                        <Text as="span">
                          {proposal.numShares}
                        </Text>
                      </Td>
                      <Td>
                        <Text as="span">
                          {moment(proposal.position).format("DD MMMM, YYYY")}
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
  );
}

export default PortfolioAnalytics;