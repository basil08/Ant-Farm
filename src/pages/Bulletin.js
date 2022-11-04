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
} from '@chakra-ui/react';

import Sidebar from '../components/sidebar';
import Navbar from '../components/navbar';
import FilterBand from '../components/filterBand';
import CompanyCard from '../components/companyCard';

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

  const company = {
    logoUrl:
      'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9',
    name: 'Alphabet Inc.',
    ticker: 'GOOGL',
    stockPrice: '99.87',
    currencySymbol: '$',
    changePercentage: '-1.74',
  };

  const [searchText, setSearchText] = useState('');
  const [isActive, setIsActive] = useState(0);

  const handleFilterChange = index => setIsActive(index);
  const handleSearchTextChange = value => setSearchText(value);

  return (
    <Flex minHeight={'100vh'} height={'fit-content'} width={'100vw'}>
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
            <GridItem w="100%">
              <CompanyCard company={company} />
            </GridItem>
            <GridItem w="100%">
              <CompanyCard company={company} />
            </GridItem>
            <GridItem w="100%">
              <CompanyCard company={company} />
            </GridItem>
            <GridItem w="100%">
              <CompanyCard company={company} />
            </GridItem>
            <GridItem w="100%">
              <CompanyCard company={company} />
            </GridItem>
            <GridItem w="100%">
              <CompanyCard company={company} />
            </GridItem>
            <GridItem w="100%">
              <CompanyCard company={company} />
            </GridItem>
            <GridItem w="100%">
              <CompanyCard company={company} />
            </GridItem>
            <GridItem w="100%">
              <CompanyCard company={company} />
            </GridItem>
            <GridItem w="100%">
              <CompanyCard company={company} />
            </GridItem>
            <GridItem w="100%">
              <CompanyCard company={company} />
            </GridItem>
            <GridItem w="100%">
              <CompanyCard company={company} />
            </GridItem>
            <GridItem w="100%">
              <CompanyCard company={company} />
            </GridItem>
            <GridItem w="100%">
              <CompanyCard company={company} />
            </GridItem>
            <GridItem w="100%">
              <CompanyCard company={company} />
            </GridItem>
            <GridItem w="100%">
              <CompanyCard company={company} />
            </GridItem>
          </Grid>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Bulletin;
