import React, { useState } from 'react';
import {
  Flex,
  Grid,
  GridItem,
  Text,
  Avatar,
  HStack,
  Heading,
  Button,
  MenuButton,
  Menu,
  MenuList,
  MenuItem,
  InputGroup,
  Input,
  InputLeftElement,
  LinkOverlay,
  LinkBox,
} from '@chakra-ui/react';

import Sidebar from '../components/sidebar';
import Navbar from '../components/navbar';
import FilterBand from '../components/filterBand';
import CompanyCard from '../components/companyCard';
import { AddIcon } from '@chakra-ui/icons';
import { useNavigate, Outlet } from 'react-router-dom';

function Bulletin() {
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
        'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9',
      name: 'Alphabet Inc.',
      ticker: 'GOOGL',
      stockPrice: '99.87',
      currencySymbol: '$',
      changePercentage: '-1.74',
    },
    {
      logoUrl:
        'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9',
      name: 'Alphabet Inc.',
      ticker: 'GOOGL',
      stockPrice: '99.87',
      currencySymbol: '$',
      changePercentage: '-1.74',
    },
    {
      logoUrl:
        'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9',
      name: 'Alphabet Inc.',
      ticker: 'GOOGL',
      stockPrice: '99.87',
      currencySymbol: '$',
      changePercentage: '-1.74',
    },
    {
      logoUrl:
        'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9',
      name: 'Alphabet Inc.',
      ticker: 'GOOGL',
      stockPrice: '99.87',
      currencySymbol: '$',
      changePercentage: '-1.74',
    },
    {
      logoUrl:
        'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9',
      name: 'Alphabet Inc.',
      ticker: 'GOOGL',
      stockPrice: '99.87',
      currencySymbol: '$',
      changePercentage: '-1.74',
    },
    {
      logoUrl:
        'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9',
      name: 'Alphabet Inc.',
      ticker: 'GOOGL',
      stockPrice: '99.87',
      currencySymbol: '$',
      changePercentage: '-1.74',
    },
    {
      logoUrl:
        'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9',
      name: 'Alphabet Inc.',
      ticker: 'GOOGL',
      stockPrice: '99.87',
      currencySymbol: '$',
      changePercentage: '-1.74',
    },
    {
      logoUrl:
        'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9',
      name: 'Alphabet Inc.',
      ticker: 'GOOGL',
      stockPrice: '99.87',
      currencySymbol: '$',
      changePercentage: '-1.74',
    },
    {
      logoUrl:
        'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9',
      name: 'Alphabet Inc.',
      ticker: 'GOOGL',
      stockPrice: '99.87',
      currencySymbol: '$',
      changePercentage: '-1.74',
    },
    {
      logoUrl:
        'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9',
      name: 'Alphabet Inc.',
      ticker: 'GOOGL',
      stockPrice: '99.87',
      currencySymbol: '$',
      changePercentage: '-1.74',
    },
    {
      logoUrl:
        'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9',
      name: 'Alphabet Inc.',
      ticker: 'GOOGL',
      stockPrice: '99.87',
      currencySymbol: '$',
      changePercentage: '-1.74',
    },
    {
      logoUrl:
        'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9',
      name: 'Alphabet Inc.',
      ticker: 'GOOGL',
      stockPrice: '99.87',
      currencySymbol: '$',
      changePercentage: '-1.74',
    },
    {
      logoUrl:
        'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9',
      name: 'Apple Inc.',
      ticker: 'AAPL',
      stockPrice: '101.87',
      currencySymbol: '$',
      changePercentage: '2.74',
    },
  ];

  // state management variables
  const [searchText, setSearchText] = useState('');
  const [isActive, setIsActive] = useState(0);

  // navigation management routes setup
  let navigate = useNavigate();
  const handleAddNewCompany = () => {
    let path = '/company/new';
    navigate(path);
  };

  // const navigateToCompanyDetailPage = ticker => {
  //   let path = `/bulletin/${ticker}`;
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
            title="Bulletin Board"
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
          <Grid templateColumns={'repeat(4, 1fr)'} gap={6}>
            {companies.map((company, index) => (
              <LinkBox
                as="article"
                _hover={{
                  border: '2px',
                  borderRadius: '20',
                  borderColor: 'gray.100',
                }}
              >
                <GridItem key={index} w="100%">
                  <LinkOverlay
                    href={`/bulletin/${company.ticker}`}
                  ></LinkOverlay>
                  <CompanyCard company={company} />
                </GridItem>
              </LinkBox>
            ))}
          </Grid>
        </Flex>
        <Flex  pos="sticky" bottom={'0'} p="4">
          <Flex w="100%" p="4" bg="gray.100">
            <Button
              bg="brand.400"
              color="white"
              _hover={{ backgroundColor: 'white', color: 'brand.400' }}
              onClick={handleAddNewCompany}
            >
              <Flex p="2">
                <AddIcon />
              </Flex>
              <Text>Add a Company to the Discussion</Text>
            </Button>
          </Flex>
        </Flex>
      </Flex>
      <Outlet />
    </Flex>
  );
}

export default Bulletin;
