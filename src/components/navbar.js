import React from 'react';
import {
  Flex,
  HStack,
  Text,
  Menu,
  MenuButton,
  Avatar,
  MenuList,
  Heading,
  Box,
  MenuItem,
  useColorModeValue,
  Spacer,
  Icon,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { DownArrow } from '../icons';

export default function Navbar({ title, subtitle, user }) {
  return (
    <Flex pos="sticky" h="15vh" w="100%" p="2">
      {/* <HStack spacing={{ base: '0', md: '6' }}> */}
      {/* <IconButton size="lg" variant="ghost" aria-label="open menu" /> */}
      <Flex
        minWidth={'max-content'}
        alignItems={'center'}
        justifyContent="space-between"
        gap="2"
      >
        <Box p="8">
          <Heading size="lg">{title}</Heading>
          <Text color={'gray.400'}>{subtitle}</Text>
        </Box>
        <Spacer />
        <Box p="2" pos="absolute" right="0">
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: 'none' }}
            >
              <HStack>
                <Avatar size={'md'} src={user.profilePic} />
                <Text fontSize="sm" fontWeight={'bold'}>
                  {user.name}
                </Text>
                <Icon w="6" h="6" as={DownArrow}></Icon>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue('white', 'gray.900')}
              borderColor={useColorModeValue('gray.200', 'gray.700')}
            >
              <MenuItem>
                <Link to={`/logout`}>Sign out</Link>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
      {/* </HStack> */}
    </Flex>
  );
}
