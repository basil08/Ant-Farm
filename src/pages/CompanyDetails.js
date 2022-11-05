import { Flex } from "@chakra-ui/react";
import React from "react";

import { useParams } from "react-router-dom";

export default function CompanyDetails() {
  const params = useParams();
  return (
    <Flex>
      Company Details with ticker: {params.companyTicker}
    </Flex>
  )
}