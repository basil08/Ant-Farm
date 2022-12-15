import React from 'react';
import { Flex, Text, Button } from '@chakra-ui/react';

import Sidebar from '../components/sidebar';
import Navbar from '../components/navbar';

function Account() {
  const user = {
    name: 'Parth Sharma',
    profilePic:
      'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9',
    currentBalance: '1350340.56',
    currencySymbol: '$',
    returnPercentage: '24.5%',
  };

  return (
    <Flex minHeight={'100vh'} height={'fit-content'} width={'98vw'}>
      <Sidebar />
      <Flex flexDir="column" height={'fit-content'} width="95%">
        <Flex m="4">
          <Navbar
            title="My Account"
            subtitle="Track your progress while making money."
            user={user}
          />
        </Flex>

        <Flex m="4">
          <Flex
            flexDir={'column'}
            border="1px"
            borderColor={'gray.400'}
            borderRadius="md"
            p="4"
            mr="4"
          >
            <Text fontWeight={'bold'} color="#454545">
              MY CURRENT BALANCE
            </Text>
            <Text
              fontSize={'2xl'}
              fontWeight={'bold'}
              color={
                user.returnPercentage.startsWith('-') ? 'brand.400' : 'green'
              }
            >
              {user.currencySymbol}
              {Number(user.currentBalance).toLocaleString()}
            </Text>
          </Flex>
        </Flex>

        <Flex m="4">
          <Flex p="4">	
            <Button size="lg" color="white" bg={'#FFA05B'}>
              <Button onClick={() => {}} variant={'unstyled'}>
                <Text size="xl">Subscribe</Text>
              </Button>
            </Button>
          </Flex>
          <Flex p="4">
            <Button size="lg" color="white" bg={'#FFA05B'}>
              <Button onClick={() => {}} variant={'unstyled'}>
                <Text size="xl">Redeem</Text>
              </Button>
            </Button>
          </Flex>
        </Flex>

        <Flex>Place holder for chart</Flex>

        <Flex m="2" p="2">
          <Button m="2" color="#0092E4">
            Form 1040
          </Button>
          <Button m="2" color="#0092E4">
            Form 1099-NT
          </Button>
          <Button m="2" color="#0092E4">
            Form 1099-MISC
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Account;
