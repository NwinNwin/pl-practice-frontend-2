import {
  Text,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Flex,
  Image,
  Tag,
  Grid,
  GridItem,
} from "@chakra-ui/react";

import drawer_img from "../../assets/drawer_img.png";

const ItemDetailsDrawer = ({ isOpen, onClose }) => {
  // GET ITEM PROPS

  const showNutritionalInformation = () => {
    const nutritionalTypes = [
      { category: "Calories", amount: 300 },
      { category: "Total Fat (g)", amount: 22 },
      { category: "Saturated Fat (g)", amount: 7 },
      { category: "Sodium (mg)", amount: 8 },
      { category: "Cholesterol (mg)", amount: 1 },
      { category: "Total Carbs (g)", amount: 8 },
      { category: "Dietary Fiber (g)", amount: 100 },
      { category: "Sugars (g)", amount: 12 },
      { category: "Protein (g)", amount: 9 },
    ];

    return nutritionalTypes.map((item) => (
      <>
        <GridItem>
          <Text fontWeight={600} fontSize="lg">
            {item.category}
          </Text>
        </GridItem>
        <GridItem>
          <Text fontWeight={600} fontSize="lg">
            {item.amount}
          </Text>
        </GridItem>
      </>
    ));
  };
  return (
    <>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="md">
        <DrawerOverlay />
        <DrawerContent borderLeftRadius="30px">
          <DrawerCloseButton />
          <DrawerHeader></DrawerHeader>

          <DrawerBody>
            <Image src={drawer_img} />
            <Flex
              justifyContent="space-between"
              alignItems="center"
              marginY="10px"
            >
              <Text fontSize="4xl" as="b">
                Sesame Salad
              </Text>
              <Button borderRadius="30px" variant="outline" colorScheme="green">
                Edit
              </Button>
            </Flex>
            <Flex gap={2} marginBottom={3}>
              <Tag
                bg="rgba(52, 78, 65, 1)"
                size="lg"
                color="white"
                borderRadius="30px"
              >
                Gluten Free
              </Tag>
              <Tag
                bg="rgba(52, 78, 65, 1)"
                size="lg"
                color="white"
                borderRadius="30px"
              >
                Vegan
              </Tag>
              <Button borderRadius="100%" variant="outline" colorScheme="green">
                +
              </Button>
            </Flex>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>

            <Text marginY="20px" fontSize="2xl" fontWeight="600">
              Nutritional Information
            </Text>

            <Grid templateColumns="repeat(2,8fr)" columnGap={35} rowGap={3}>
              {showNutritionalInformation()}
            </Grid>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ItemDetailsDrawer;
