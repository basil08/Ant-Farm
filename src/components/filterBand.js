import React from 'react';
import {
  Flex,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

export default function FilterBand({
  categories,
  isActive,
  searchText,
  handleSearchTextChange,
  handleFilterChange,
}) {
  return (
    <Flex justifyContent={'space-between'}>
      <Flex alignItems={'center'}>
        {categories.map((category, index) => (
          <Button
            m="1"
            key={index}
            bg={isActive === index ? 'brand.400' : 'white'}
            color={isActive === index ? 'white' : 'gray.500'}
            variant={isActive === index ? 'solid' : 'ghost'}
            onClick={() => handleFilterChange(index)}
          >
            {category.name}
          </Button>
        ))}
      </Flex>
      <Flex>
        <InputGroup m="auto">
          <InputLeftElement children={<SearchIcon color="gray.400" />} />
          <Input
            placeholder="Search by company name"
            borderRadius={30}
            value={searchText}
            onChange={e => handleSearchTextChange(e.target.value)}
          />
        </InputGroup>
      </Flex>
    </Flex>
  );
}
