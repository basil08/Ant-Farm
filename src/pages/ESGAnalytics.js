import React from 'react';

import {
  Flex,
  Text,
  Select,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react';

import Sidebar from '../components/sidebar';
import Navbar from '../components/navbar';

export default function ESGAnalytics() {
  const envRates = [
    { name: 'Climate Change', percentage: 65.3 },
    { name: 'Energy Usage', percentage: 65.3 },
    { name: 'Waste Management', percentage: 65.3 },
    { name: 'Pollution Standards', percentage: 65.3 },
    { name: 'Resource Conservation', percentage: 65.3 },
    { name: 'Treatment of Animals', percentage: 65.3 },
    { name: 'Carbon Emission', percentage: 65.3 },
    { name: 'Deforestation', percentage: 65.3 },
    { name: 'Others', percentage: 65.3 },
  ];
  const socRates = [
    { name: 'Climate Change', percentage: 65.3 },
    { name: 'Energy Usage', percentage: 65.3 },
    { name: 'Waste Management', percentage: 65.3 },
    { name: 'Pollution Standards', percentage: 65.3 },
    { name: 'Resource Conservation', percentage: 65.3 },
    { name: 'Treatment of Animals', percentage: 65.3 },
    { name: 'Carbon Emission', percentage: 65.3 },
    { name: 'Deforestation', percentage: 65.3 },
    { name: 'Others', percentage: 65.3 },
  ];
  const govRates = [
    { name: 'Climate Change', percentage: 65.3 },
    { name: 'Energy Usage', percentage: 65.3 },
    { name: 'Waste Management', percentage: 65.3 },
    { name: 'Pollution Standards', percentage: 65.3 },
    { name: 'Resource Conservation', percentage: 65.3 },
    { name: 'Treatment of Animals', percentage: 65.3 },
    { name: 'Carbon Emission', percentage: 65.3 },
    { name: 'Deforestation', percentage: 65.3 },
    { name: 'Others', percentage: 65.3 },
  ];

  return (
    <Flex minHeight={'100vh'} height={'fit-content'} width={'98vw'}>
      <Sidebar />
      <Flex flexDir="column" height={'fit-content'} width="95%">
        <Flex m="4">
          <Navbar
            title="ESG Analytics"
            subtitle="Make money the right way, and see how your favourite ESG indicators are performing."
            user={{
              name: 'Parth Sharma',
              profilePic:
                'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9',
            }}
          />
        </Flex>

        <Flex m="4" w="20%" bg={'#F1F1F1'} borderRadius={15}>
          <Select placeholder="Select a time span" border={0}>
            <option value="WEEK">In the past week</option>
            <option value="MONTH">In the past month</option>
            <option value="YEAR">In the past year</option>
          </Select>
        </Flex>

        <Flex m="4" justifyContent={'space-between'}>
          <Flex flexDir={'column'} justifyContent="start">
            <Text color={'#0B98FF'} fontWeight="bold" fontSize={'lg'}>
              Environmental
            </Text>

            <Flex
              mt={2}
              borderRadius={17}
              borderColor="mygray.200"
              borderWidth={1}
            >
              <TableContainer>
                <Table variant="unstyled">
                  <Thead color={'mygray.100'}>
                    <Tr>
                      <Th>FACTOR</Th>
                      <Th>WIN RATE</Th>
                    </Tr>
                  </Thead>
                  <Tbody fontWeight={'bold'}>
                    {envRates.map((item, index) => (
                      <Tr key={index}>
                        <Td>{item.name}</Td>
                        <Td>{`${item.percentage}%`}</Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>
            </Flex>
          </Flex>
          <Flex flexDir={'column'} justifyContent="start">
            <Text color={'#B10BFF'} fontWeight="bold" fontSize={'lg'}>
              Social
            </Text>

            <Flex
              mt={2}
              borderRadius={17}
              borderColor="mygray.200"
              borderWidth={1}
            >
              <TableContainer>
                <Table variant="unstyled">
                  <Thead color={'mygray.100'}>
                    <Tr>
                      <Th>FACTOR</Th>
                      <Th>WIN RATE</Th>
                    </Tr>
                  </Thead>
                  <Tbody fontWeight={'bold'}>
                    {socRates.map((item, index) => (
                      <Tr key={index}>
                        <Td>{item.name}</Td>
                        <Td>{`${item.percentage}%`}</Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>
            </Flex>
          </Flex>
          <Flex flexDir={'column'} justifyContent="start">
            <Text color={'#FFAC0B'} fontWeight="bold" fontSize={'lg'}>
              Governance
            </Text>

            <Flex
              mt={2}
              borderRadius={17}
              borderColor="mygray.200"
              borderWidth={1}
            >
              <TableContainer>
                <Table variant="unstyled">
                  <Thead color={'mygray.100'}>
                    <Tr>
                      <Th>FACTOR</Th>
                      <Th>WIN RATE</Th>
                    </Tr>
                  </Thead>
                  <Tbody fontWeight={'bold'}>
                    {govRates.map((item, index) => (
                      <Tr key={index}>
                        <Td>{item.name}</Td>
                        <Td>{`${item.percentage}%`}</Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
