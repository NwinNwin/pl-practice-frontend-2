import React from "react";
import { Modal, ModalOverlay, ModalContent, ModalBody,
        ModalFooter, Button, Flex, Box,
        Text, Input, Divider, Select, Heading, Grid, GridItem,
        NumberInput,
        NumberInputField,
        NumberInputStepper,
        NumberIncrementStepper,
        NumberDecrementStepper,
        Link 
    } from "@chakra-ui/react";
import { ArrowBackIcon } from '@chakra-ui/icons'


const AddMenuItemModal = ({isOpen, onClose, onOpen}) => {
    const showNutritionalInformation = () => {

        const nutritionalTypes = ['Calories','Total Fat (g)',
        'Saturated Fat (g)', 'Cholesterol (mg)', 'Total Carbs (g)', 'Dietary Fiber (g)',
        'Sugars (g)', 'Protein (g)'];
        
        return nutritionalTypes.map( category => 
            <>
            <GridItem>
                <Text as="b">{ category }</Text>
            </GridItem>
            <GridItem>
                <NumberInput>
                    <NumberInputField />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
            </GridItem>
            </>
        )
        
    }
    return (
    <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
          <Button onClick={onClose} mt={5} mb={7} ml={8} variant="ghost"><ArrowBackIcon mr={3}/>Back</Button>
            <Heading size="lg" ml={8}>
                Add Item
            </Heading>
            <Divider mb={4} />
            <Flex>
                <Box minW="60vw">
                    <Heading size="md" ml={8} mb={4}>
                        Item Details
                    </Heading>
                    <Box ml={8} mb={10}>
                        <Text>Item Name</Text>
                        <Input width="80%" />
                    </Box>
                    <Box ml={8} mb={10}>
                        <Text>Description</Text>
                        <Input width="80%" height="20vh" />
                    </Box>
                    <Box ml={8} mb={10}>
                        <Text>Upload Image</Text>
                        <Button>Choose File</Button>
                    </Box>
                    <Box ml={8} mb={10}>
                        <Text>Item Tags</Text>
                        <Select width="50%">
                            <option>Option 1</option>
                        </Select>
                    </Box>
                    <Box ml={8} mb={10}>
                        <Text>Item Type</Text>
                        <Select width="50%" placeholder="Item Tag">
                            <option>Option 1</option>
                        </Select>
                    </Box>
                </Box>
                <Box>
                    <Heading size="md" mb={8}>Nutritional Information</Heading>
                    <Grid templateColumns="repeat(2,8fr)" columnGap={25} rowGap={8}>
                        {showNutritionalInformation()}
                    </Grid>
                </Box>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="green">Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
}

export default AddMenuItemModal;