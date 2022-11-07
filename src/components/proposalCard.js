import React, { useState } from 'react';
import {
  Flex,
  Text,
  Avatar,
  Link,
  OrderedList,
  ListItem,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';

import { ArrowUpIcon, ArrowDownIcon } from '@chakra-ui/icons';
import moment from 'moment/moment';

export default function ProposalCard({
  proposal,
  handleReportConfirmationModal,
}) {
  const [isUpvoted, setIsUpvoted] = useState(false);
  const [isDownvoted, setIsDownvoted] = useState(false);

  const handleUpvote = id => {
    // API call to upvote a proposal

    // dummy state change for testing
    setIsUpvoted(!isUpvoted);
  };

  const handleDownvote = id => {
    // API call to downvote a proposal

    setIsDownvoted(!isDownvoted);
  };

  return (
    <Flex
      p="4"
      mb="2"
      height={'fit-content'}
      width={'100%'}
      border={'1px'}
      borderRadius="20"
      flexDir={'column'}
      borderColor={'gray.300'}
    >
      <Flex flexDir={'column'}>
        <Flex>
          <Text as="span" fontWeight={'bold'} fontSize="lg">
            Action:
            <Text
              as="span"
              color={proposal.action === 'BUY' ? 'green' : 'brand.300'}
            >
              {' '}
              {proposal.action}{' '}
            </Text>
            {proposal.ticker} | {proposal.days} days{' '}
          </Text>
        </Flex>
        <Text color="gray.400" fontSize="sm">
          {moment(proposal.timestamp).fromNow()}
        </Text>
        <Text color="gray.500" p="2">
          {proposal.text}
        </Text>
        <Text>
          <OrderedList>
            {proposal.links.map((link, index) => (
              <ListItem color={'#5BB0FF'} key={index}>
                <Link href={link.url}>{link.title}</Link>
              </ListItem>
            ))}
          </OrderedList>
        </Text>
      </Flex>

      <Flex m="4">
        <Button
          mr="4"
          variant={'outline'}
          onClick={() => handleUpvote(proposal.id)}
          color={isUpvoted ? 'green' : 'gray.600'}
          borderColor={isUpvoted ? 'green' : 'gray.400'}
        >
          UPVOTES {proposal.upvotes} <ArrowUpIcon />
        </Button>
        <Button
          mr="4"
          variant={'outline'}
          onClick={() => handleDownvote(proposal.id)}
          color={isDownvoted ? 'brand.400' : 'gray.600'}
          borderColor={isDownvoted ? 'brand.400' : 'gray.400'}
        >
          DOWNVOTES {proposal.downvotes} <ArrowDownIcon />
        </Button>
        <Button
          mr="4"
          variant={'outline'}
          onClick={() => handleReportConfirmationModal()}
          borderColor={'gray.400'}
        >
          REPORT
        </Button>
      </Flex>
    </Flex>
  );
}
