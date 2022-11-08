import {
  Flex,
  Tabs,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Text,
  Heading,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';

import { AddIcon, WarningIcon } from '@chakra-ui/icons';

import React from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import Sidebar from '../components/sidebar';
import CompanyStats from '../components/companyStats';
import GeneralDiscussionThread from '../components/generalDiscussionThread';
import ProposalThread from '../components/proposalThread';

import { Outlet } from 'react-router-dom';

export default function CompanyDetails() {
  const params = useParams();

  // const company = getCompany(params.companyTicker);
  // const user = getUser();

  // remove this array and ideally query for a single company object
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
      name: 'Apple Inc.',
      ticker: 'AAPL',
      stockPrice: '101.87',
      currencySymbol: '$',
      changePercentage: '2.74',
    },
  ];

  const company = companies.find(
    company => company.ticker === params.companyTicker
  );

  let navigate = useNavigate();

  const handleCreateNewProposal = ticker => {
    let path = `/bulletin/new`;
    navigate(path);
  };

  return (
    <Flex minHeight={'100vh'} height={'fit-content'} width={'98vw'}>
      <Sidebar />
      <Flex flexDir="column" height={'fit-content'} width="50%">
        <Flex m="4" flexDir={'column'}>
          <Heading>
            <Flex>
              <Text>{company.name} &ndash; </Text>
              <Text
                pl="1"
                color={
                  company.changePercentage.startsWith('-')
                    ? 'brand.400'
                    : 'green'
                }
              >
                {company.currencySymbol}
                {company.stockPrice} ({company.changePercentage}%){' '}
              </Text>
            </Flex>
          </Heading>
          <Text>Discussion thread for {company.name}</Text>
        </Flex>

        <Tabs
          isLazy
          colorScheme={'brand.400'}
          variant={'soft-rounded'}
          size={'lg'}
        >
          <TabList>
            <Tab _selected={{ bg: 'white', color: 'brand.400' }}>Proposals</Tab>
            <Tab _selected={{ bg: 'white', color: 'brand.400' }}>
              General Discussion
            </Tab>
          </TabList>

          <hr />

          <TabPanels>
            <TabPanel>
              <ProposalThread
                ticker={company.ticker}
              />
            </TabPanel>
            <TabPanel>
              <GeneralDiscussionThread ticker={company.ticker} />
            </TabPanel>
          </TabPanels>
        </Tabs>

        <Flex m="4" pos="sticky" bottom={'0'} p="4">
          <Button
            bg="brand.400"
            color="white"
            _hover={{ backgroundColor: 'white', color: 'brand.400' }}
            onClick={handleCreateNewProposal}
          >
            <Flex p="2">
              <AddIcon />
            </Flex>
            <Text>Raise a Proposal</Text>
          </Button>
        </Flex>
      </Flex>

      {/* TODO: Component with company info from external API */}
      <Flex borderLeft={'1px'} borderColor={'gray.400'}>
        <CompanyStats />
      </Flex>

      <Outlet />
    </Flex>
  );
}
