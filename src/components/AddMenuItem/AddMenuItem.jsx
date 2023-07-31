import React from "react";
import {
  Text,
  Button,
  Box,
  Flex,
  Center,
  Icon,
  Image,
  Divider,
  Input,
  Select,
  Heading,
} from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";
import phone from "../../assets/phone.png";
import pin from "../../assets/pin.png";

const AddMenuItem = () => {
  return (
    <Flex>
      <Box minW="100vw">
        <Text fontSize="1.75vw" as="b" ml={8}>
          Add Item
        </Text>
        <Divider mb={4} />
        <Text fontSize="1.25vw" as="b" ml={8} mb={4}>
          Item Details
        </Text>
        <Box ml={8} mb={10}>
          <Text>Item Name</Text>
          <Input width="50%" />
        </Box>
        <Box ml={8} mb={10}>
          <Text>Description</Text>
          <Input width="50%" height="20vh" />
        </Box>
        <Box ml={8} mb={10}>
          <Text>Upload Image</Text>
          <Button>Choose File</Button>
        </Box>
        <Box ml={8} mb={10}>
          <Text>Item Tags</Text>
          <Select width="30%">
            <option>Option 1</option>
          </Select>
        </Box>
        <Box ml={8} mb={10}>
          <Text>Item Type</Text>
          <Select width="30%" placeholder="Item Tag">
            <option>Option 1</option>
          </Select>
        </Box>
      </Box>
      <Box>
        <Heading>Nutritional Information</Heading>
      </Box>
    </Flex>
  );
};

export default AddMenuItem;
