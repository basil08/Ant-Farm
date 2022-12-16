import React, { useState } from 'react';
import {
  Flex,
  Text,
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
  LinkBox,
  LinkOverlay
} from '@chakra-ui/react';

import { ArrowUpIcon, ArrowDownIcon, WarningIcon } from '@chakra-ui/icons';
import moment from 'moment/moment';


export default function ProposalCard({ proposal }) {
  const [isUpvoted, setIsUpvoted] = useState(false);
  const [isDownvoted, setIsDownvoted] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [reportableId, setReportableId] = useState('');

  const handleUpvote = id => {
    // API call to upvote a proposal
    // dummy state change for testing
    setIsUpvoted(!isUpvoted);
  };

  const handleDownvote = id => {
    // API call to downvote a proposal
    setIsDownvoted(!isDownvoted);
  };

  const handleReportConfirmationModal = id => {
    setReportableId(id);
    onOpen(!isOpen);
  };

  const reportProposal = () => {
    // use state variable reportableId here
    console.log(`Reporting id: ${reportableId}`);
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
          <LinkBox as="span">
            <LinkOverlay href={`/research/${proposal.ticker}/${proposal.id}`}>
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
            </LinkOverlay>

          </LinkBox>
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
          onClick={() => handleReportConfirmationModal(proposal.id)}
          borderColor={'gray.400'}
        >
          REPORT
        </Button>


        <Modal
          isOpen={isOpen}
          onClose={() => {
            setReportableId('');
            onClose();
          }}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              <WarningIcon color="brand.400" />{' '}
              <Text as="span" color="brand.400">
                Warning!
              </Text>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>Are you sure you want to report this proposal?</Text>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme={'brand'} mr={3} onClick={onClose}>
                Close
              </Button>
              <Button onClick={() => reportProposal()} variant="ghost">
                Yes, do it!
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
    </Flex>
  );
}
