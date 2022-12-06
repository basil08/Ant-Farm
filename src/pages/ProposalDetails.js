import React from 'react';

import { Flex, Text, Heading, Button, Badge } from '@chakra-ui/react';

import { AddIcon } from '@chakra-ui/icons';

import { useNavigate, useParams } from 'react-router-dom';
import Sidebar from '../components/sidebar';
import CompanyStats from '../components/companyStats';

import { Outlet } from 'react-router-dom';

export default function ProposalDetails() {
  const params = useParams();

  // const company = getCompany(params.companyTicker);
  // const user = getUser();

  // remove this array and ideally query for a single company object
  const proposals = [
    {
      id: 1,
      ticker: 'AAPL',
      action: 'BUY',
      days: 30,
      text: 'Irure excepteur enim exercitation. Lorem minim consequat sint commodo commodo enim. Laboris adipisicing sit non eu dolor reprehenderit qui non elit pariatur elit incididunt. Laborum sint ex eu ad qui elit incididunt nostrud mollit dolore. Ad mollit nostrud do veniam cupidatat nisi enim tempor ad ex aliqua velit sunt commodo.',
      links: [
        {
          title: 'Elon Musk agrees to buy Twitter at original offer price',
          url: 'https://twitter.com',
        },
        {
          title: 'Elon Musk agrees to buy Twitter at original offer price',
          url: 'https://twitter.com',
        },
        {
          title: 'Elon Musk agrees to buy Twitter at original offer price',
          url: 'https://twitter.com',
        },
        {
          title: 'Elon Musk agrees to buy Twitter at original offer price',
          url: 'https://twitter.com',
        },
      ],
      upvotes: 37,
      downvotes: 28,
      timestamp: '2022-11-07T05:01:30+0000',
      esgFactor: 'Waste Management',
    },
    {
      id: 2,
      ticker: 'GOOGL',
      action: 'SELL',
      days: 12,
      text: 'Irure excepteur enim exercitation. Lorem minim consequat sint commodo commodo enim. Laboris adipisicing sit non eu dolor reprehenderit qui non elit pariatur elit incididunt. Laborum sint ex eu ad qui elit incididunt nostrud mollit dolore. Ad mollit nostrud do veniam cupidatat nisi enim tempor ad ex aliqua velit sunt commodo.',
      links: [
        {
          title: 'Elon Musk agrees to buy Twitter at original offer price',
          url: 'https://twitter.com',
        },
        {
          title: 'Elon Musk agrees to buy Twitter at original offer price',
          url: 'https://twitter.com',
        },
        {
          title: 'Elon Musk agrees to buy Twitter at original offer price',
          url: 'https://twitter.com',
        },
        {
          title: 'Elon Musk agrees to buy Twitter at original offer price',
          url: 'https://twitter.com',
        },
      ],
      upvotes: 12,
      downvotes: 54,
      timestamp: '2022-10-07T05:01:30+0000',
      esgFactor: 'Waste Management',
    },
  ];

  // replace by a API call later
  // using the company ticker in the URL
  const proposal = proposals.find(
    proposal => String(proposal.id) === String(params.proposalId)
  );

  let navigate = useNavigate();

  const handleCreateNewProposal = ticker => {
    let path = `/bulletin/${ticker}/new`;
    navigate(path);
  };

  return (
    <Flex minHeight={'100vh'} height={'fit-content'} width={'98vw'}>
      <Sidebar />
      <Flex flexDir="column" height={'fit-content'} width="50%">
        <Flex m="4" flexDir={'column'}>
          <Heading>
            <Flex>
              <Text>Proposal &mdash; &nbsp;</Text>
              <Text color={proposal.action === 'SELL' ? 'brand.400' : 'green'}>
                {proposal.action + ' '}
              </Text>
              <Text>
                {' ' + proposal.ticker + ' '}| {' ' + proposal.days} days
              </Text>
            </Flex>
          </Heading>
          <Text>
            Discussion thread for the proposal to{' '}
            {proposal.action.toLowerCase()} {proposal.ticker} for{' '}
            {proposal.days} days.
          </Text>
          <Flex>
            <Badge variant="solid" borderRadius="20" p='1' bg="#FFA05B" color="white">{proposal.esgFactor}</Badge>
          </Flex>
        </Flex>

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
