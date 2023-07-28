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
} from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";
import phone from "../../assets/phone.png";
import pin from "../../assets/pin.png";

const AddMenuItem = () => {
  return (
    <Box minW="100vh">
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
        <Select>
          <option>Option 1</option>
        </Select>
      </Box>
    </Box>
  );
};

export default AddMenuItem;
