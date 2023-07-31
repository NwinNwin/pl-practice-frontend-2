import React, { useState } from "react";
import { Text, Button, Flex, Box, Heading, SimpleGrid, Link, useDisclosure } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import AddMenuItemModal from "../components/AddMenuItem/AddMenuItemModal";
import background from "../assets/background.jpg";
import ItemCard from "../components/ItemCard/ItemCard";

const Landing = () => {
  const [isEdit, setIsEdit] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Flex
        minW="100vh"
        h="850px"
        justifyContent="center"
        alignItems="center"
        bgImage={background}
        bgSize="cover"
      >
        <Flex
          w="941px"
          h="350px"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
        >
          <Heading size="3xl" color="white" textAlign="center">
            Crunchy Tofu Castle
          </Heading>
          <Heading size="lg" color="white" textAlign="center" mt="32px">
            Lorem ipsum dolor sit amet consectetur. Velit consectetur nisl
            sodales aliquam.
          </Heading>
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Button
              mt="56px"
              colorScheme="teal"
              w="168px"
              h="48px"
              justifySelf="center"
            >
              <Heading size="md">
                <Link href="#menu">
                  View Menu
                </Link>
              </Heading>
            </Button>
            <Link href="#menu"><ChevronDownIcon mt="15px" boxSize="4em" color="white" /></Link>
          </Flex>
        </Flex>
      </Flex>
      {/* EDIT BUTTONS */}
      <Flex justify="flex-end" mr={7} mt={5}>
        {!isEdit ? (
          <Button
            variant="outline"
            colorScheme="green"
            borderRadius="30px"
            onClick={() => setIsEdit(true)}
          >
            Edit Menu
          </Button>
        ) : (
          <Flex gap={2}>
            <Button variant="outline" colorScheme="green" borderRadius="30px" onClick={onOpen} mr={5}>
              +
            </Button>
            <AddMenuItemModal isOpen={isOpen} onClose={onClose}/>
            <Button
              variant="outline"
              colorScheme="green"
              borderRadius="30px"
              onClick={() => setIsEdit(false)}
            >
              Done
            </Button>
          </Flex>
        )}
      </Flex>
      {/* SECTIONS */}
      <Flex
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        mt={10}
        id="menu"
      >
        <Heading fontSize="4xl" as="b" mb={10}>
          Appetizers
        </Heading>
        <SimpleGrid columns={4} rowGap={1} spacing={50} justifyItems="center">
          <ItemCard isEditable={isEdit}/>
          <ItemCard isEditable={isEdit}/>
          <ItemCard isEditable={isEdit}/>
          <ItemCard isEditable={isEdit}/>
          <ItemCard isEditable={isEdit}/>
        </SimpleGrid>

        <Heading fontSize="4xl" as="b" mb={10}>
          Entrees
        </Heading>
        <SimpleGrid columns={4} rowGap={1} spacing={50} justifyItems="center">
          <ItemCard isEditable={isEdit}/>
          <ItemCard isEditable={isEdit}/>
          <ItemCard isEditable={isEdit}/>
          <ItemCard isEditable={isEdit}/>
          <ItemCard isEditable={isEdit}/>
          <ItemCard isEditable={isEdit}/>
          <ItemCard isEditable={isEdit}/>
          <ItemCard isEditable={isEdit}/>
        </SimpleGrid>

        <Heading fontSize="4xl" as="b" mb={10}>
          Wines
        </Heading>
        <SimpleGrid columns={4} rowGap={1} spacing={50} justifyItems="center">
          <ItemCard isEditable={isEdit}/>
          <ItemCard isEditable={isEdit}/>
          <ItemCard isEditable={isEdit}/>
          <ItemCard isEditable={isEdit}/>
        </SimpleGrid>

        <Heading fontSize="4xl" as="b" mb={10}>
          Desserts
        </Heading>
        <SimpleGrid columns={4} rowGap={1} spacing={50} justifyItems="center">
          <ItemCard isEditable={isEdit}/>
          <ItemCard isEditable={isEdit}/>
          <ItemCard isEditable={isEdit}/>
          <ItemCard isEditable={isEdit}/>
          <ItemCard isEditable={isEdit}/>
        </SimpleGrid>
      </Flex>
    </Box>
  );
};

export default Landing;
