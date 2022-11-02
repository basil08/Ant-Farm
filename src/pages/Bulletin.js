import React from "react";
import {
  Flex
} from "@chakra-ui/react";

import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";

function Bulletin() {
  return (
      <Flex w="100%">
        <Sidebar />
        <Navbar
          title="Bulletin Board"
          subtitle="View active discussions on and proposals for companies that we're currently watching."
          user={{
            name: "Parth Sharma",
            profilePic: "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
          }}
        />
      </Flex>
  );
}

export default Bulletin;