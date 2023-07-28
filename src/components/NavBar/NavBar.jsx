import React from "react";

import { Text, Button, Box, Flex } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <Flex justify="space-between" minW="100vh" alignItems="center">
      <Text fontSize="2vw" as="b" ml={8} mt={2} mb={2}>
        CTC
      </Text>
      <Flex justify="flex-end">
        <Flex gap={20}>
          <Text fontSize="xl" class="right-header" mt={2} mr={10}>
            Menu
          </Text>
          <Text fontSize="xl" class="right-header" mt={2} mr={4}>
            Contact
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default NavBar;
