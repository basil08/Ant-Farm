import React from "react";
import {
  NavLink
} from "react-router-dom";

import {
  Icon,
  Flex
} from "@chakra-ui/react";

function NavItem({ icon, children, toUrl, ...rest }) {
  return (
    <NavLink
      to={toUrl}
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
    >
      <Flex
        align="center"
        p="2"
        borderRadius={'lg'}
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'brand.400',
          color: 'white',
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            w="5"
            h="5"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </NavLink>
  );
}

export default NavItem;