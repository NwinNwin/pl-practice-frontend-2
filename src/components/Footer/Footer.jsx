import React from "react";

import { Text, Button, Box, Flex, Center, Icon, Image } from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";
import phone from "../../assets/phone.png";
import pin from "../../assets/pin.png";

const Footer = () => {
  return (
    <Box justify="center" minW="100vh">
      <Center fontSize="2vw" as="b" mb={4}>
        Cruncy Tofu Castle
      </Center>
      <Center mb={2}>
        <Image src={phone} boxSize="2vw"></Image>
      </Center>
      <Center fontSize="1.5vw" mb={6}>
        (626) 755-1234
      </Center>
      <Center mb={2}>
        <Image src={pin} boxSize="3vw"></Image>
      </Center>
      <Center fontSize="1.5vw">11002 Bee Canyon Access Rd</Center>
      <Center fontSize="1.5vw" mb={10}>
        Irvine, CA 92602
      </Center>
    </Box>
  );
};

export default Footer;
