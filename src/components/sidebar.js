import React from 'react';
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  useColorModeValue,
  Text,
  Center,
  Square,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuDivider,
  MenuList,
} from '@chakra-ui/react';
import {
  HomeIcon,
  BoxIcon,
  GlobeIcon,
  DoubleCardsIcon,
  HelpIcon,
  GearIcon,
  TextCloudIcon,
} from '../icons';
import NavItem from './navItem';
import CompanyBadge from './companyBadge';

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
      name: 'Portfolio Analysis',
      icon: BoxIcon,
      toUrl: '/analysis',
    },
    {
      name: 'Newsfeed',
      icon: GlobeIcon,
      toUrl: '/newsfeed',
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
  return (
    <Flex
      pos="sticky"
      left="3"
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
      </Flex>
    </Flex>
  );
}

function SidebarContent({ onClose, ...rest }) {
  <Box
    transition="3s ease"
    bg={useColorModeValue('white', 'gray.900')}
    borderRight="1px"
    borderRightColor={useColorModeValue('gray.200', 'gray.700')}
    w={{ base: 'full', md: 60 }}
    pos="fixed"
    h="full"
    {...rest}
  >
    <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
      <Center w="75px">
        <Image boxSize="40px" objectFit="cover" src="./logo.svg" />
      </Center>
      <Square size="90px">
        <Text fontSize={'lg'} fontWeight={'bold'}>
          Ant Farm
        </Text>
      </Square>
      <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
    </Flex>
    <Text color={'gray.100'}>INVESTMENTS</Text>
    {LinkItems.investments.map(link => (
      <NavItem key={link.name} icon={link.icon} toUrl={link.toUrl}>
        {link.name}
      </NavItem>
    ))}
    <hr />
    <Text color={'gray.100'}>INFORMATION</Text>
    {LinkItems.information.map(link => (
      <NavItem key={link.name} icon={link.icon} toUrl={link.toUrl}>
        {link.name}
      </NavItem>
    ))}
  </Box>;
}

function MobileNav({ onOpen, ...rest }) {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}
    >
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
      />

      <Text
        display={{ base: 'flex', md: 'none' }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
      >
        Logo
      </Text>

      <HStack spacing={{ base: '0', md: '6' }}>
        <IconButton size="lg" variant="ghost" aria-label="open menu" />
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: 'none' }}
            >
              <HStack>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm" fontWeight={'bold'}>
                    Parth Sharma
                  </Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}></Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue('white', 'gray.900')}
              borderColor={useColorModeValue('gray.200', 'gray.700')}
            >
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Billing</MenuItem>
              <MenuDivider />
              <MenuItem>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
}

export default Sidebar;
