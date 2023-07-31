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

import { Backend } from '../../utils/utils';

import { useForm } from 'react-hook-form';

import { ArrowBackIcon } from '@chakra-ui/icons'


const AddMenuItemModal = ({ isOpen, onClose, updateItemCardData }) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        const result = await Backend.post('/menuItem/add-menu-item', data);
        console.log(result);
        updateItemCardData();
        onClose();
    };

    const transformFieldName = (str) => {
        // Convert the nutrionalTypes to a valid field name
        let transformedStr = str.toLowerCase();
        transformedStr = transformedStr.replace(/\([^)]+\)/g, '');
        transformedStr = transformedStr.trim();
        transformedStr = transformedStr.replace(/\s+/g, '_');
      
        return transformedStr;
      };

    const showNutritionalInformation = () => {

        const nutritionalTypes = ['Calories','Total Fat (g)',
        'Saturated Fat (g)', 'Sodium (mg)', 'Total Carbs (g)', 'Dietary Fiber (g)',
        'Sugar (g)', 'Protein (g)'];
        
        return nutritionalTypes.map( category => 
            <>
            <GridItem>
                <Text as="b">{ category }</Text>
            </GridItem>
            <GridItem>
                <NumberInput>
                    <NumberInputField {...register(transformFieldName(category))} />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
            </GridItem>
            </>
        )
        
    };

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
                        <Input width="80%" {...register('name')} />
                    </Box>
                    <Box ml={8} mb={10}>
                        <Text>Description</Text>
                        <Input width="80%" height="20vh" {...register('description')} />
                    </Box>
                    <Box ml={8} mb={10}>
                        <Text>Upload Image</Text>
                        <Button>Choose File</Button>
                    </Box>
                    <Box ml={8} mb={10}>
                        <Text>Item Tags</Text>
                        <Select width="50%" {...register('tags')}>
                            <option>None</option>
                            <option>Gluten Free</option>
                            <option>Vegan</option>
                            <option>Organic</option>
                        </Select>
                    </Box>
                    <Box ml={8} mb={10}>
                        <Text>Item Type</Text>
                        <Select width="50%" {...register('type')}>
                            <option>Appetizer</option>
                            <option>Entree</option>
                            <option>Wine</option>
                            <option>Dessert</option>
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
            <Button colorScheme="green" onClick={handleSubmit(onSubmit)}>Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
}

export default AddMenuItemModal;