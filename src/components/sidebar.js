import React from 'react';
import { Button, Flex, Text } from '@chakra-ui/react';
import {
  HomeIcon,
  BoxIcon,
  GlobeIcon,
  DoubleCardsIcon,
  HelpIcon,
  GearIcon,
  TextCloudIcon,
} from '../icons';

import { AddIcon } from '@chakra-ui/icons';

import NavItem from './navItem';
import CompanyBadge from './companyBadge';
import { Link, useNavigate } from 'react-router-dom';

const LinkItems = {
  investments: [
    {
      name: 'Dashboard',
      icon: HomeIcon,
      toUrl: '/dashboard',
    },
    {
      name: 'Bulletin Board',
      icon: TextCloudIcon,
      toUrl: '/bulletin',
    },
    {
      name: 'Newsfeed',
      icon: GlobeIcon,
      toUrl: '/newsfeed',
    },
    {
      name: 'Portfolio Analytics',
      icon: BoxIcon,
      toUrl: '/analytics',
    },
    {
      name: 'Transaction History',
      icon: DoubleCardsIcon,
      toUrl: '/history',
    },
  ],
  information: [
    {
      name: 'Rules and Regulations',
      icon: HelpIcon,
      toUrl: '/rar',
    },
    {
      name: 'My Account',
      icon: GearIcon,
      toUrl: '/account',
    },
  ],
};

function Sidebar() {
  let navigate = useNavigate();

  const navigateToProposalForm = () => {
    let path = `/bulletin/new`;
    navigate(path);
  };

  return (
    <Flex
      pos="sticky"
      m="4"
      bg="#F8F8F8"
      h="100vh"
      marginTop={'2.5vh'}
      marginBottom={'2.5vh'}
      boxShadow="0 4px 12 px 0 rgba(0, 0, 0, 0.5)"
      borderRadius="30px"
      w={'20%'}
      flexDir="column"
      justifyContent={'space-between'}
    >
      <Flex p="5%" flexDir="column" w="100%" alignItems="flex-start" as="nav">
        <CompanyBadge />

        <Button
          mb="2"
          bg={'brand.400'}
          color="white"
          _hover={{ backgroundColor: 'white', color: 'brand.400', borderColor:"brand.400", border:"2px" }}
          onClick={navigateToProposalForm}
        >
          <Flex p="2">
            <AddIcon />
          </Flex>
          Raise a proposal
        </Button>
        <Text fontWeight={'bold'} color={'gray.500'}>
          INVESTMENTS
        </Text>
        {LinkItems.investments.map(link => (
          <NavItem key={link.name} icon={link.icon} toUrl={link.toUrl}>
            {link.name}
          </NavItem>
        ))}
        <hr />
        <Text fontWeight={'bold'} color={'gray.500'}>
          INFORMATION
        </Text>
        {LinkItems.information.map(link => (
          <NavItem key={link.name} icon={link.icon} toUrl={link.toUrl}>
            {link.name}
          </NavItem>
        ))}

        <Flex>
          <Link to={`/logout`}>
            <Text color="gray.400" fontWeight={'bold'}>
              LOGOUT
            </Text>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Sidebar;
