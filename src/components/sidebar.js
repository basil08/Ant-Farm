import React from 'react';
import {
  Button, Flex, Select, Text, useDisclosure, Modal,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
} from '@chakra-ui/react';

import { AiOutlineGlobal as GlobeIcon } from 'react-icons/ai';
import { AiOutlineQuestionCircle as HelpIcon } from 'react-icons/ai';
import { AiOutlineHome as HomeIcon } from 'react-icons/ai';
import { AiOutlineInbox as BoxIcon } from 'react-icons/ai';
import { AiOutlineCreditCard as DoubleCardsIcon } from 'react-icons/ai';
import { AiOutlineSetting as GearIcon } from 'react-icons/ai';
import { BsChatSquare as TextCloudIcon } from 'react-icons/bs';

import NavItem from './navItem';
import CompanyBadge from './companyBadge';
import { useNavigate } from 'react-router-dom';

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
    }
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
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navigateToProposalForm = (ticker) => {
    let path = `/bulletin/new?ticker=${ticker}`;
    navigate(path);
  };

  const handleTickerForm = () => {
    onOpen(!isOpen);
  }

  // get these from some API
  const companies = [
    { ticker: "GOOGL" },
    { ticker: "GOOGL" },
    { ticker: "GOOGL" },
    { ticker: "GOOGL" },
    { ticker: "GOOGL" },
    { ticker: "GOOGL" },
    { ticker: "GOOGL" },
    { ticker: "GOOGL" },
    { ticker: "GOOGL" },
  ];

  return (
    <Flex
      pos="sticky"
      m="4"
      bg="#F8F8F8"
      h="150%"
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

        <Text fontWeight={'bold'} color={'gray.500'}>
          INVESTMENTS
        </Text>
        {LinkItems.investments.map(link => (
          <Flex w="100%">
            <NavItem key={link.name} icon={link.icon} toUrl={link.toUrl}>
              {link.name}
            </NavItem>
          </Flex>
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
      </Flex>

      <Flex>&nbsp;</Flex>
      <Flex>&nbsp;</Flex>
      <Flex>&nbsp;</Flex>
      <Flex>&nbsp;</Flex>
      <Flex>&nbsp;</Flex>
      <Flex>&nbsp;</Flex>
      <Flex>&nbsp;</Flex>
      <Flex>&nbsp;</Flex>

      <Flex justifyContent={"center"}>
        <Button
          mb="2"
          bg={'brand.400'}
          color="white"
          borderRadius={20}
          _hover={{
            backgroundColor: 'white',
            color: 'brand.400',
            borderColor: 'brand.400',
            border: '2px',
          }}
          onClick={handleTickerForm}
        >
          <Flex p="2">
          </Flex>
          Raise a proposal
        </Button>
      </Flex>

      <Modal
        isOpen={isOpen}
        onClose={() => {
          onClose();
        }}

        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Text as="span" fontWeight={"bold"}>
              Raise a New Proposal
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text color="mygray.100" fontSize="sm" fontWeight={"bold"} p="1">SELECT COMPANY TICKER</Text>
            <FormControl>
              <Select>
                {companies.map((company, index) => (
                  <option key={index} value={company.ticker}>{company.ticker}</option>
                ))}
              </Select>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button bg="#009E10" color="white" onClick={navigateToProposalForm}>
              RAISE PROPOSAL
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    </Flex>
  );
}

export default Sidebar;
