import React from 'react';
import { Flex, Text, LinkBox, LinkOverlay } from '@chakra-ui/react';
import { LinkIcon } from '@chakra-ui/icons';


export default function DocumentLink({ title, url }) {
  return (
    <LinkBox as="article">
      <Flex
        border={'1px solid'}
        bg={'gray.100'}
        borderColor={'gray.500'}
        borderRadius={'5'}
        m="4"
        p="4"
      >
        <Flex w="100%" justifyContent={'space-between'}>
          <LinkOverlay href={url}>
            <Text fontWeight={'bold'}>{title}</Text>
          </LinkOverlay>
          <LinkIcon />
        </Flex>
      </Flex>
    </LinkBox>
  );
}
