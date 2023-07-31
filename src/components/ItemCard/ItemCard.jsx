import {
  Text,
  Button,
  Flex,
  Box,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Tag,
  Image,
  Heading,
  useDisclosure,
  Badge
} from "@chakra-ui/react";
import item_img from "../../assets/item_img.png";
import ItemDetailsDrawer from "../ItemDetailsDrawer/ItemDetailsDrawer";

const ItemCard = ({ itemData, isEditable }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Button float="right" colorScheme="red" variant="outline" borderRadius={25} bg="rgba(249, 244, 234, 1)"
              textAlign="center" w="2" h="10" mt={-7} ml={-7} onClick={()=> console.log('kill me :)')}> — </Button>
      <Card
        bg="rgba(249, 244, 234, 1)"
        width="20vw"
        borderRadius="10px"
        marginBottom="100px"
        onClick={onOpen}
      >
        <Image borderTopRadius="10px" src={item_img} />
        <CardBody>
          <Heading fontSize="20px" marginBottom={3}>
            Sesame Salad
          </Heading>
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
          </Flex>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          </Text>
        </CardBody>
      </Card>
      <ItemDetailsDrawer isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default ItemCard;
