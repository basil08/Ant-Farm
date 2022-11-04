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
  MenuItem,
  Button,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

export default function Navbar({ title, subtitle, user }) {

  return (
    <Flex justifyContent={'space-between'} height="10vh" width="100%">
    <Flex flexDir="column">
      <Heading>{title}</Heading>
      <Text>{subtitle}</Text>
    </Flex>
    <Flex p="4">
      <Menu>
        <MenuButton
          as={Button}
          variant="ghost"
          rightIcon={<ChevronDownIcon />}
          _hover={{
            background: '#D9D9D9',
          }}
        >
          <HStack p="4">
            <Avatar
              size="sm"
              src={user.profilePic}></Avatar>
            <Text color="black">{user.name}</Text>
          </HStack>
        </MenuButton>
        <MenuList>
          <MenuItem>Logout</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  </Flex>
  );
}