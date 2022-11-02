import React from "react";
import {
  Flex
} from "@chakra-ui/react";

import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";

function PortfolioTransactionHistory() {
  return (
      <Flex w="100%">
        <Sidebar />
        <Navbar
          title="Portfolio Transaction History"
          subtitle="Make money the right way, and see how your favourite ESG indicators are performing."
          user={{
            name: "Parth Sharma",
            profilePic: "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
          }}
        />
      </Flex>
  );
}

export default PortfolioTransactionHistory;