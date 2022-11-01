import React from 'react';
import {
  Box,
  Image,
  Flex,
  Center,
  Text,
  FormControl,
  FormLabel,
  Input,
  Spacer,
  Button,
  Square,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <Box>
      <Flex>
        <Box p="4" pl={8}>
          <Flex>
            <Center w="50px">
              <Image boxSize="40px" objectFit="cover" src="./logo.svg" />
            </Center>
            <Square size="75px">
              <Text fontWeight={'bold'}>Ant Farm</Text>
            </Square>
          </Flex>
          <Box p="2">
            <Text fontWeight={'bold'}>Login</Text>
            <Text fontSize={'xs'} color={'gray.500'}>
              A Digital Investment Club &mdash; make money the right way.
            </Text>
          </Box>

          <Box p="4">
            <Center>
              <Button size='xs' border='1px' borderColor={'gray.400'} bg='white'>
                <Center>
                  <Image boxSize={4} src="./googlelogo.png"></Image>
                  <Text>Sign up with Google</Text>
                </Center>
              </Button>
            </Center>
          </Box>

          <hr />

          <Box p="4">
            <FormControl size={'sm'}>
              <FormLabel>
                <Text fontSize={'xs'} color={'gray.500'}>
                  Email*
                </Text>
              </FormLabel>
              <Input
                placeholder="johndoe@example.com"
                htmlSize={4}
                type="email"
              />
            </FormControl>

            <Box p="2"></Box>
            <FormControl size={'sm'}>
              <FormLabel>
                <Flex>
                  <Text fontSize={'xs'} color={'gray.500'}>
                    Password*
                  </Text>
                  <Spacer />
                  <Text fontSize={'xs'} color="brand.400">
                    <Link to="/forgotpassword">Forgot Password?</Link>
                  </Text>
                </Flex>
              </FormLabel>
              <Input
                placeholder="Minimum 6 characters"
                htmlSize={2}
                type="password"
              />
            </FormControl>

            <Box p="2"></Box>
            <Flex>
              <Text fontSize={'xs'} color={'gray.400'}>
                Don't have an account? &nbsp;{' '}
              </Text>
              <Text fontSize={'xs'} color={'brand.400'}>
                <Link to="/signup">Create a new account here!</Link>
              </Text>
            </Flex>

            <Box pt="2"></Box>
            <Button colorScheme="brand" size="md">
              Login to your Dashboard
            </Button>
          </Box>
        </Box>
        <Spacer />
        <Box p="4">
          <Center>
            <Image boxSize={'28em'} src="./logo.svg"></Image>
          </Center>
        </Box>
      </Flex>
    </Box>
  );
}

export default Login;
