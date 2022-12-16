import React, { useState } from 'react';
import { Flex, Grid, GridItem, LinkOverlay, LinkBox } from '@chakra-ui/react';

import Sidebar from '../components/sidebar';
import Navbar from '../components/navbar';
import FilterBand from '../components/filterBand';
import CompanyCard from '../components/companyCard';
import { Outlet } from 'react-router-dom';

function Research() {
  const categories = [
    { name: 'ALL' },
    { name: 'TECHNOLOGY' },
    { name: 'FMCG' },
    { name: 'OIL AND GAS' },
    { name: 'FINANCE' },
    { name: 'HEALTHCARE' },
    { name: 'AUTOMOTIVES' },
  ];

  const companies = [
    {
      logoUrl:
      '/googlelogo.png',
      name: 'Alphabet Inc.',
      ticker: 'GOOGL',
      stockPrice: '99.87',
      currencySymbol: '$',
      changePercentage: '-1.74',
    },
    {
      logoUrl:
      '/googlelogo.png',
      name: 'Alphabet Inc.',
      ticker: 'GOOGL',
      stockPrice: '99.87',
      currencySymbol: '$',
      changePercentage: '-1.74',
    },
    {
      logoUrl:
      '/googlelogo.png',
      name: 'Alphabet Inc.',
      ticker: 'GOOGL',
      stockPrice: '99.87',
      currencySymbol: '$',
      changePercentage: '-1.74',
    },
    {
      logoUrl:
      '/googlelogo.png',
      name: 'Alphabet Inc.',
      ticker: 'GOOGL',
      stockPrice: '99.87',
      currencySymbol: '$',
      changePercentage: '-1.74',
    },
    {
      logoUrl:
      '/googlelogo.png',
      name: 'Alphabet Inc.',
      ticker: 'GOOGL',
      stockPrice: '99.87',
      currencySymbol: '$',
      changePercentage: '-1.74',
    },
    {
      logoUrl:
      '/googlelogo.png',
      name: 'Alphabet Inc.',
      ticker: 'GOOGL',
      stockPrice: '99.87',
      currencySymbol: '$',
      changePercentage: '-1.74',
    },
    {
      logoUrl:
      '/googlelogo.png',
      name: 'Alphabet Inc.',
      ticker: 'GOOGL',
      stockPrice: '99.87',
      currencySymbol: '$',
      changePercentage: '-1.74',
    },
    {
      logoUrl:
      '/googlelogo.png',
      name: 'Alphabet Inc.',
      ticker: 'GOOGL',
      stockPrice: '99.87',
      currencySymbol: '$',
      changePercentage: '-1.74',
    },
    {
      logoUrl:
      '/googlelogo.png',
      name: 'Alphabet Inc.',
      ticker: 'GOOGL',
      stockPrice: '99.87',
      currencySymbol: '$',
      changePercentage: '-1.74',
    },
    {
      logoUrl:
      '/googlelogo.png',
      name: 'Alphabet Inc.',
      ticker: 'GOOGL',
      stockPrice: '99.87',
      currencySymbol: '$',
      changePercentage: '-1.74',
    },
  ];

  // state management variables
  const [searchText, setSearchText] = useState('');
  const [isActive, setIsActive] = useState(0);

  // navigation management routes setup
  // let navigate = useNavigate();

  // const navigateToCompanyDetailPage = ticker => {
    // let path = `/research/${ticker}`;
  //   navigate(path);
  // };

  // DOM interaction handlers
  const handleFilterChange = index => setIsActive(index);
  const handleSearchTextChange = value => setSearchText(value);

  return (
    <Flex minHeight={'100vh'} height={'fit-content'} width={'98vw'}>
      <Sidebar />
      <Flex flexDir="column" height={'fit-content'} width="95%">
        <Flex m="4">
          <Navbar
            title="Research"
            subtitle="View active discussions on and proposals for companies that we're currently watching."
            user={{
              name: 'Parth Sharma',
              profilePic:
                'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9',
            }}
          />
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
          <Grid templateColumns={'repeat(3, 1fr)'} gap={10}>
            {companies.map((company, index) => (
              <LinkBox as="article">
                <GridItem key={index} w="100%">
                  <LinkOverlay
                    href={`/research/${company.ticker}`}
                  ></LinkOverlay>
                  <CompanyCard company={company} />
                </GridItem>
              </LinkBox>
            ))}
          </Grid>
        </Flex>
      </Flex>
      <Outlet />
    </Flex>
  );
}

export default Research;
