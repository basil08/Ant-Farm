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
  Avatar,
} from '@chakra-ui/react';

import { ArrowUpIcon, ArrowDownIcon, WarningIcon } from '@chakra-ui/icons';
import moment from 'moment/moment';

export default function CommentCard({ comment }) {
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

  const reportComment = () => {
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
      borderColor={'gray.300'}
    >
      <Flex w="10%" pr="2"><Avatar size={"md"} src={comment.avatarUrl}></Avatar></Flex>
      <Flex flexDir={'column'}>
        <Flex>
          <Text fontWeight={"bold"}>{comment.author}</Text>
        </Flex>
        <Text color="gray.400" fontSize="sm">
          {moment(comment.timestamp).fromNow()}
        </Text>
        <Text color="gray.500" p="2">
          {comment.text}
        </Text>
        <Text>
          <OrderedList>
            {comment.links.map((link, index) => (
              <ListItem color={'#5BB0FF'} key={index}>
                <Link href={link.url}>{link.title}</Link>
              </ListItem>
            ))}
          </OrderedList>
        </Text>

        <Flex m="4">
        <Button
          mr="4"
          variant={'outline'}
          onClick={() => handleUpvote(comment.id)}
          color={isUpvoted ? 'green' : 'gray.600'}
          borderColor={isUpvoted ? 'green' : 'gray.400'}
        >
          UPVOTES {comment.upvotes} <ArrowUpIcon />
        </Button>
        <Button
          mr="4"
          variant={'outline'}
          onClick={() => handleDownvote(comment.id)}
          color={isDownvoted ? 'brand.400' : 'gray.600'}
          borderColor={isDownvoted ? 'brand.400' : 'gray.400'}
        >
          DOWNVOTES {comment.downvotes} <ArrowDownIcon />
        </Button>
        <Button
          mr="4"
          variant={'outline'}
          onClick={() => handleReportConfirmationModal(comment.id)}
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
              <Button onClick={() => reportComment()} variant="ghost">
                Yes, do it!
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
      </Flex>


    </Flex>
  );
}
