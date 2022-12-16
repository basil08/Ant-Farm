import React, { useState } from 'react';
import {
  useRadio,
  Select,
  Box,
  HStack,
  useRadioGroup,
  Textarea,
  Heading,
  FormControl,
  FormLabel,
  Switch,
  Input,
  Flex,
  Text,
  Button,
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverCloseButton,
  PopoverBody,
  PopoverFooter,
  Portal,
  PopoverTrigger,
} from '@chakra-ui/react';
import Sidebar from '../components/sidebar';

import { useNavigate } from 'react-router-dom';

function RadioCard(props) {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: props.children === 'SELL' ? 'brand.400' : 'green',
          color: 'white',
          borderColor: props.children === 'SELL' ? 'brand.400' : 'green',
        }}
        _focus={{
          boxShadow: 'outline',
        }}
        px={5}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  );
}

export default function ProposalForm(props) {
  const options = ['BUY', 'SELL'];
  const [isSubmitting, setIsSubmitting] = useState(false);

  const durationOptions = [
    { name: "1 Day", value: 1 },
    { name: "1 Week", value: 7 },
    { name: "1 Month", value: 30 }
  ];

  const envOptions = [
    { name: 'Climate Policy' },
    { name: 'Energy Usage' },
    { name: 'Waste Management' },
    { name: 'Pollution Standards' },
    { name: 'Resource Conservation' },
    { name: 'Treatment of Animals' },
    { name: 'Carbon Emissions' },
    { name: 'Deforestation' },
    { name: 'Other reasons' },
  ];

  const socOptions = [
    { name: 'Climate Policy' },
    { name: 'Energy Usage' },
    { name: 'Waste Management' },
    { name: 'Pollution Standards' },
    { name: 'Resource Conservation' },
    { name: 'Treatment of Animals' },
    { name: 'Carbon Emissions' },
    { name: 'Deforestation' },
    { name: 'Other reasons' },
  ];

  const govOptions = [
    { name: 'Climate Policy' },
    { name: 'Energy Usage' },
    { name: 'Waste Management' },
    { name: 'Pollution Standards' },
    { name: 'Resource Conservation' },
    { name: 'Treatment of Animals' },
    { name: 'Carbon Emissions' },
    { name: 'Deforestation' },
    { name: 'Other reasons' },
  ];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'action',
    defaultValue: 'BUY',
    onChange: console.log,
  });

  let navigate = useNavigate();

  const handleCancelForm = () => {
    let path = `/research`;
    navigate(path);
  };

  const handleSubmitForm = () => {
    setIsSubmitting(true);

    // TODO: segregate all state variables
    // make call to create proposal endpoint
    console.log('Creating a new proposal...');

    setIsSubmitting(false);
  };

  const group = getRootProps();


  return (
    <Flex minHeight={'100vh'} height={'fit-content'} width={'98vw'}>
      <Sidebar />

      <Flex flexDir="column" height={'fit-content'} width="95%">
        <Flex m="4" flexDir={'column'}>
          <Heading>
            <Flex>
              <Text fontWeight={'bold'}>Raising a New Proposal</Text>
            </Flex>
          </Heading>
          <Text>
            Create a new anonymous proposal for the community to discuss.
          </Text>
        </Flex>
        <Flex>
          <Flex w="50%" pr="4" flexDir={'column'}>
            <FormControl p="2">
              <FormLabel>
                <Text fontWeight={'bold'}>Enter the stock ticker here</Text>
              </FormLabel>
              <Input
                type="text"
                placeholder="Eg: TSLA, AAPL, FORD, ALPB, COCA"
              ></Input>
            </FormControl>

            <FormControl p="2">
              <FormLabel>
                <Text fontWeight={'bold'}>Proposed Action</Text>
              </FormLabel>
              <HStack {...group}>
                {options.map(value => {
                  const radio = getRadioProps({ value });
                  return (
                    <RadioCard key={value} {...radio}>
                      {value}
                    </RadioCard>
                  );
                })}
              </HStack>
            </FormControl>

            <FormControl p="2">
              <FormLabel>
                <Text fontWeight={'bold'}>For how long?</Text>
              </FormLabel>
              <Select p="2" placeholder="Selection duration for this action">
                {durationOptions.map((opt, index) => (
                  <option value={opt.value}>{opt.name}</option>
                ))}
              </Select>
            </FormControl>

            <FormControl p="2">
              <FormLabel>
                <Text fontWeight={'bold'}>
                  Why have you come to this conclusion?
                </Text>
              </FormLabel>
              <Textarea
                // _focus={{
                //   borderColor: 'brand.400',
                //   boxShadow: 'md',
                //   borderWidth: '2px'
                // }}
                rows={10}
                placeholder={'Tell us more about this proposal....'}
              ></Textarea>
            </FormControl>
          </Flex>
          <Flex w="50%" flexDir={'column'}>
            <FormControl p="2">
              <FormLabel>
                <Text fontWeight={'bold'}>ESG Breakdown</Text>
              </FormLabel>
              <Select p="2" placeholder="Select an environmental reason">
                {envOptions.map((envOption, index) => (
                  <option value={envOption.name}>{envOption.name}</option>
                ))}
              </Select>
              <Select p="2" placeholder="Select a social reason">
                {socOptions.map((socOption, index) => (
                  <option value={socOption.name}>{socOption.name}</option>
                ))}
              </Select>
              <Select p="2" placeholder="Select a governance reason">
                {govOptions.map((govOption, index) => (
                  <option value={govOption.name}>{govOption.name}</option>
                ))}
              </Select>
            </FormControl>

            <FormControl p="2">
              <FormLabel>Upload documents</FormLabel>
              <Input type="file"></Input>
            </FormControl>

            <FormControl p="2" display="flex" alignItems="center">
              <FormLabel htmlFor="confirm-proposal" mb="0">
                <Text>
                  I confirm that this proposal is based solely on publicly
                  available information.
                </Text>
              </FormLabel>
              <Switch id="confirm-proposal" colorScheme={'brand'} />
            </FormControl>
          </Flex>
        </Flex>
        <Flex p="4" w="50%" justifyContent={'space-between'}>
          <Button onClick={() => handleCancelForm()}>Cancel</Button>
          <Popover>
            <PopoverTrigger>
              <Button disabled={isSubmitting} color="white" bg="brand.400">
                Confirm Proposal
              </Button>
            </PopoverTrigger>
            <Portal>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                  By confirming your submission, you agree to base your opinion
                  only on publicly available information.
                </PopoverBody>
                <PopoverFooter>
                  <Button
                    colorScheme="brand"
                    onClick={() => handleSubmitForm()}
                  >
                    Confirm
                  </Button>
                </PopoverFooter>
              </PopoverContent>
            </Portal>
          </Popover>
        </Flex>
      </Flex>
    </Flex>
  );
}
