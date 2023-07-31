import React, { useState, useEffect } from "react";
import { Text, Button, Flex, Box, Heading, SimpleGrid, Link, useDisclosure } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import AddMenuItemModal from "../components/AddMenuItem/AddMenuItemModal";
import background from "../assets/background.jpg";
import ItemCard from "../components/ItemCard/ItemCard";

import { Backend } from "../utils/utils";

const Landing = () => {
  const [isEdit, setIsEdit] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [appetizerArr, setAppetizerArr] = useState([]);
  const [entreeArr, setEntreeArr] = useState([]);
  const [wineArr, setWineArr] = useState([]);
  const [dessertArr, setDessertArr] = useState([]);


  const updateItemCardData = async () => {
    const appetizerRes = await Backend.get('/menuItem/Appetizer');
    setAppetizerArr(appetizerRes.data.data)
    
    const entreeRes = await Backend.get('/menuItem/Entree');
    setEntreeArr(entreeRes.data.data)

    const wineRes = await Backend.get('/menuItem/Wine');
    setWineArr(wineRes.data.data)

    const dessertRes = await Backend.get('/menuItem/Dessert');
    setDessertArr(dessertRes.data.data)
  };

  useEffect(() => {
    updateItemCardData();
  }, []);

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
            <AddMenuItemModal isOpen={isOpen} onClose={onClose} updateItemCardData={updateItemCardData} />
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
          {appetizerArr?.map((appetizer) => (
            <ItemCard 
              id={appetizer.id}
              name={appetizer.name}
              description={appetizer.description}
              tags={appetizer.tags}
              type={appetizer.type}
              calories={appetizer.calories}
              totalFat={appetizer.total_fat}
              saturatedFat={appetizer.saturated_fat}
              sodium={appetizer.sodium}
              carbs={appetizer.carbs}
              fiber={appetizer.fiber}
              sugar={appetizer.sugar}
              protein={appetizer.protein}
              isEditable={isEdit}
            />
          ))};
        </SimpleGrid>

        <Heading fontSize="4xl" as="b" mb={10}>
          Entrees
        </Heading>
        <SimpleGrid columns={4} rowGap={1} spacing={50} justifyItems="center">
          {entreeArr?.map((entree) => (
              <ItemCard 
                id={entree.id}
                name={entree.name}
                description={entree.description}
                tags={entree.tags}
                type={entree.type}
                calories={entree.calories}
                totalFat={entree.total_fat}
                saturatedFat={entree.saturated_fat}
                sodium={entree.sodium}
                carbs={entree.carbs}
                fiber={entree.fiber}
                sugar={entree.sugar}
                protein={entree.protein}
                isEditable={isEdit}
              />
            ))};
        </SimpleGrid>

        <Heading fontSize="4xl" as="b" mb={10}>
          Wines
        </Heading>
        <SimpleGrid columns={4} rowGap={1} spacing={50} justifyItems="center">
          {wineArr?.map((wine) => (
              <ItemCard 
                id={wine.id}
                name={wine.name}
                description={wine.description}
                tags={wine.tags}
                type={wine.type}
                calories={wine.calories}
                totalFat={wine.total_fat}
                saturatedFat={wine.saturated_fat}
                sodium={wine.sodium}
                carbs={wine.carbs}
                fiber={wine.fiber}
                sugar={wine.sugar}
                protein={wine.protein}
                isEditable={isEdit}
              />
            ))};
        </SimpleGrid>

        <Heading fontSize="4xl" as="b" mb={10}>
          Desserts
        </Heading>
        <SimpleGrid columns={4} rowGap={1} spacing={50} justifyItems="center">
          {dessertArr?.map((dessert) => (
              <ItemCard 
                id={dessert.id}
                name={dessert.name}
                description={dessert.description}
                tags={dessert.tags}
                type={dessert.type}
                calories={dessert.calories}
                totalFat={dessert.total_fat}
                saturatedFat={dessert.saturated_fat}
                sodium={dessert.sodium}
                carbs={dessert.carbs}
                fiber={dessert.fiber}
                sugar={dessert.sugar}
                protein={dessert.protein}
                isEditable={isEdit}
              />
            ))};
        </SimpleGrid>
      </Flex>
    </Box>
  );
};

export default Landing;
