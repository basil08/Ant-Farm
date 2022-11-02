import React, { useState } from 'react';
import {
  Box,
  Image,
  Flex,
  Center,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Spacer,
  Button,
  Square,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';

function Login() {
  const validateEmail = values => {
    const errors = {};

    if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }

    return errors;
  };

  return (
    <Box>
      <Flex>
        <Box p="4" pl="8">
          <Flex>
            <Center w="75px">
              <Image boxSize="40px" objectFit="cover" src="./logo.svg" />
            </Center>
            <Square size="90px">
              <Text fontSize={'lg'} fontWeight={'bold'}>
                Ant Farm
              </Text>
            </Square>
          </Flex>
          <Box p="2">
            <Text fontWeight={'bold'}>Login</Text>
            <Text color={'gray.500'}>
              A Digital Investment Club &mdash; make money the right way.
            </Text>
          </Box>

          <Box p="4">
            <Center>
              <Button border="1px" borderColor={'gray.400'} bg="white">
                <Center>
                  <Image boxSize={4} src="./googlelogo.png"></Image>
                  <Text>Sign up with Google</Text>
                </Center>
              </Button>
            </Center>
          </Box>

          <hr />

          <Box p="4">
            <Box p="2"></Box>
            <Formik
              initialValues={{ email: '', password: '' }}
              validate={validateEmail}
              onSubmit={(values, setSubmitting) => {

                // make POST request here
                // values.email and values.password

                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({ values, errors, handleSubmit, isSubmitting }) => (
                <Form>
                  <Field name="email">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.email && form.touched.email}
                      >
                        <FormLabel>
                          <Text color={'gray.500'}>Email*</Text>
                        </FormLabel>
                        <Input {...field} value={values.email} />
                        <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Field name="password">
                    {({ field, form }) => (
                      <FormControl
                        size={'sm'}
                        isInvalid={
                          form.errors.password && form.touched.password
                        }
                      >
                        <FormLabel>
                          <Flex>
                            <Text color={'gray.500'}>Password*</Text>
                            <Spacer />
                            <Text color="brand.400">
                              <Link to="/forgotpassword">Forgot Password?</Link>
                            </Text>
                          </Flex>
                        </FormLabel>
                        <Input
                          {...field}
                          type="password"
                          value={values.password}
                        />
                        <FormErrorMessage>
                          {form.errors.password}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Box p="2"></Box>
                  <Flex>
                    <Text fontSize={'sm'} color={'gray.400'}>
                      Don't have an account? &nbsp;{' '}
                    </Text>
                    <Text fontSize={'sm'} color={'brand.400'}>
                      <Link to="/signup">Create a new account here!</Link>
                    </Text>
                  </Flex>

                  <Box pt="8"></Box>
                  <Button
                    colorScheme="brand"
                    size="md"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Login to your Dashboard
                  </Button>
                </Form>
              )}
            </Formik>
          </Box>
        </Box>
        <Spacer />
        <Box p="4">
          <Center>
            <Image boxSize={'37em'} src="./logo.svg"></Image>
          </Center>
        </Box>
      </Flex>
    </Box>
  );
}

export default Login;
