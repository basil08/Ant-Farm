import React from 'react';
import { Flex, LinkBox, LinkOverlay, Text } from '@chakra-ui/react';

import Sidebar from '../components/sidebar';
import Navbar from '../components/navbar';
import DocumentLink from '../components/documentLink';

import { LinkIcon } from '@chakra-ui/icons';

function RulesAndRegulations() {
  const linkUrl1 = 'https://google.com';

  return (
    <Flex minHeight={'100vh'} height={'fit-content'} width={'98vw'}>
      <Sidebar />
      <Flex flexDir="column" height={'fit-content'} width="95%">
        <Flex m="4">
          <Navbar
            title="Rules and Regulations"
            subtitle=""
            user={{
              name: 'Parth Sharma',
              profilePic:
                'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9',
            }}
          />
        </Flex>

        <Flex m="4" width={'55%'} flexDir={'column'}>
          <Text color={'gray.500'}>
            Minim exercitation adipisicing laboris ullamco. Est Lorem fugiat
            sint cupidatat officia ex non incididunt culpa cillum id pariatur
            labore reprehenderit. Amet aliquip voluptate ipsum. Veniam esse
            exercitation anim dolore. Anim adipisicing cillum consequat commodo
            esse. Nulla aute enim enim aliqua in exercitation exercitation
            cillum elit deserunt aliquip qui velit velit. Eiusmod nulla
            excepteur eiusmod id aute enim id. Dolore id culpa ipsum excepteur
            id deserunt consectetur ut nostrud sint. Velit ut nostrud sit sint
            ea culpa est aliquip id. Irure voluptate minim laboris eiusmod est
            et aliquip velit et.
          </Text>

          <DocumentLink
            title={'Rules and Regulations Document'}
            url={linkUrl1}
          />

          <Text color={'gray.500'}>
            Minim exercitation adipisicing laboris ullamco. Est Lorem fugiat
            sint cupidatat officia ex non incididunt culpa cillum id pariatur
            labore reprehenderit. Amet aliquip voluptate ipsum. Veniam esse
            exercitation anim dolore. Anim adipisicing cillum consequat commodo
            esse. Nulla aute enim enim aliqua in exercitation exercitation
            cillum elit deserunt aliquip qui velit velit. Eiusmod nulla
            excepteur eiusmod id aute enim id. Dolore id culpa ipsum excepteur
            id deserunt consectetur ut nostrud sint. Velit ut nostrud sit sint
            ea culpa est aliquip id. Irure voluptate minim laboris eiusmod est
            et aliquip velit et.
          </Text>

          <DocumentLink
            title={'Real Trades Partner Agreement'}
            url={linkUrl1}
          />

          <Text color={'gray.500'}>
            Minim exercitation adipisicing laboris ullamco. Est Lorem fugiat
            sint cupidatat officia ex non incididunt culpa cillum id pariatur
            labore reprehenderit. Amet aliquip voluptate ipsum. Veniam esse
            exercitation anim dolore. Anim adipisicing cillum consequat commodo
            esse. Nulla aute enim enim aliqua in exercitation exercitation
            cillum elit deserunt aliquip qui velit velit. Eiusmod nulla
            excepteur eiusmod id aute enim id. Dolore id culpa ipsum excepteur
            id deserunt consectetur ut nostrud sint. Velit ut nostrud sit sint
            ea culpa est aliquip id. Irure voluptate minim laboris eiusmod est
            et aliquip velit et.
          </Text>

          <DocumentLink
            title={'Appeal Form'}
            url={linkUrl1}
          />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default RulesAndRegulations;
