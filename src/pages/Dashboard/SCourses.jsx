import React from 'react';
import { Img, Input, Progress, Text, useBreakpointValue } from '@chakra-ui/react';
import { ChakraProvider, Box, Flex, HStack, VStack } from '@chakra-ui/react';
import Sidebar from './Student-Components/sidebar';
import { Icon } from '@chakra-ui/react';
import { MdOutlineModeEdit, MdChecklistRtl, MdDelete } from "react-icons/md";
import { FiClock } from "react-icons/fi";
import { FiCheckCircle } from "react-icons/fi";
import { IoBookSharp } from "react-icons/io5";
import { useState } from 'react';
import { Tag , TagLabel, TagCloseButton} from '@chakra-ui/react';

export default function SCourses() {

    const [file, setFile] = useState();
    function handleChange(e) {
        let inputFile=e.target.files[0];
        console.log(inputFile);
        let size=inputFile.size;
        console.log(size);
        let type=inputFile.type;
        console.log(type);
        if(size<2000000 && (type==='image/png' || type==='image/jpg')){
            setFile(URL.createObjectURL(e.target.files[0]));
        }else{
            alert("img size exceeded or type is undesired");
        }
    }

    function handlePdfChange(e) {
        let inputFile=e.target.files[0];
        console.log(inputFile);
        let size=inputFile.size;
        console.log(size);
        let type=inputFile.type;
        console.log(type);
        if(size<10000000 && (type==='application/pdf')){
            setFile(URL.createObjectURL(e.target.files[0]));
        }else{
            alert("img size exceeded or type is undesired");
        }
    }
    
    const [input, setInput] = useState('');
    const [tagList, setTagList] = useState([]);

    const handleInputChange = (e) => {
        const input = e.target.value;
        setInput(input);
        const tags = input.split(' ');
        setTagList(tags);
        
        // Logging the input value and tagList for debugging
        console.log("Input Value:", input);
        console.log("Tag List:", tags);
    };

    const columnWidth = useBreakpointValue({ base: "100%", md: "45%", lg: "30%" });

    return (
        <ChakraProvider>
        <Flex>
            <Sidebar />
            <Box flex="1" p="4">
                <HStack spacing={4}>
                    <HStack border='3px solid gray' w={columnWidth} borderRadius='10px' p={2}>
                        <Box bg='orange.100' borderRadius='50%' h={10} w={10} >
                            <Icon as={FiClock} w={8} h={8} m={1} color='orange'></Icon>
                        </Box>
                        <Box>
                            <Text fontSize='20px' fontWeight='semibold'>In Progress</Text>
                            <Text>3 Courses</Text>
                        </Box>
                    </HStack>
                    <HStack border='3px solid gray' w={columnWidth} borderRadius='10px' p={2}>
                        <Box bg='green.100' borderRadius='50%' h={10} w={10} >
                            <Icon as={FiCheckCircle} w={8} h={8} m={1} color='green'></Icon>
                        </Box>
                        <Box>
                            <Text fontSize='20px' fontWeight='semibold'>Completed</Text>
                            <Text>4 Courses</Text>
                        </Box>
                    </HStack>
                </HStack>
                <Flex wrap='wrap' spacing={4}>
                    <VStack border='3px solid gray' w={columnWidth} align='left' p='10px' m={2} borderRadius='10'>
                        <Img src='../../img/Image1.png'></Img>
                        <Text fontWeight='bold' fontSize='20px' align='left' >Introduction to engineering</Text>
                        <Text fontWeight='light' align='left'>Filmy</Text>
                        <HStack>
                            <Box bg='orange.100' borderRadius='50%' h={6} w={6} >
                                <Icon as={IoBookSharp} w={4} h={4} m={1} color='orange'></Icon>
                            </Box>
                            <Text>2 Chapters</Text>
                        </HStack>
                        <Progress value={80} size='xs' colorScheme='orange' />
                        <Text>50% Completed</Text>
                    </VStack>
                    <VStack border='3px solid gray' w={columnWidth} align='left' p='10px' m={2} borderRadius='10'>
                        <Img src='../../img/Image1.png'></Img>
                        <Text fontWeight='bold' fontSize='20px' align='left' >Introduction to engineering</Text>
                        <Text fontWeight='light' align='left'>Filmy</Text>
                        <HStack>
                            <Box bg='orange.100' borderRadius='50%' h={6} w={6} >
                                <Icon as={IoBookSharp} w={4} h={4} m={1} color='orange'></Icon>
                            </Box>
                            <Text>2 Chapters</Text>
                        </HStack>
                        <Progress value={80} size='xs' colorScheme='orange' />
                        <Text>50% Completed</Text>
                    </VStack>
                    <VStack border='3px solid gray' w={columnWidth} align='left' p='10px' m={2} borderRadius='10'>
                        <Img src='../../img/Image1.png'></Img>
                        <Text fontWeight='bold' fontSize='20px' align='left' >Introduction to engineering</Text>
                        <Text fontWeight='light' align='left'>Filmy</Text>
                        <HStack>
                            <Box bg='orange.100' borderRadius='50%' h={6} w={6} >
                                <Icon as={IoBookSharp} w={4} h={4} m={1} color='orange'></Icon>
                            </Box>
                            <Text>2 Chapters</Text>
                        </HStack>
                        <Progress value={80} size='xs' colorScheme='orange' />
                        <Text>50% Completed</Text>
                    </VStack>
                    <VStack border='3px solid gray' w={columnWidth} align='left' p='10px' m={2} borderRadius='10'>
                        <Img src='../../img/Image1.png'></Img>
                        <Text fontWeight='bold' fontSize='20px' align='left' >Introduction to engineering</Text>
                        <Text fontWeight='light' align='left'>Filmy</Text>
                        <HStack>
                            <Box bg='orange.100' borderRadius='50%' h={6} w={6} >
                                <Icon as={IoBookSharp} w={4} h={4} m={1} color='orange'></Icon>
                            </Box>
                            <Text>2 Chapters</Text>
                        </HStack>
                        <Progress value={80} size='xs' colorScheme='orange' />
                        <Text>50% Completed</Text>
                    </VStack>
                    <VStack border='3px solid gray' w={columnWidth} align='left' p='10px' m={2} borderRadius='10'>
                        <Img src='../../img/Image1.png'></Img>
                        <Text fontWeight='bold' fontSize='20px' align='left' >Introduction to engineering</Text>
                        <Text fontWeight='light' align='left'>Filmy</Text>
                        <HStack>
                            <Box bg='orange.100' borderRadius='50%' h={6} w={6} >
                                <Icon as={IoBookSharp} w={4} h={4} m={1} color='orange'></Icon>
                            </Box>
                            <Text>2 Chapters</Text>
                        </HStack>
                        <Progress value={80} size='xs' colorScheme='orange' />
                        <Text>50% Completed</Text>
                    </VStack> 
                    <VStack border='3px solid gray' w={columnWidth} align='left' p='10px' m={2} borderRadius='10'>
                        <Img src='../../img/Image1.png'></Img>
                        <Text fontWeight='bold' fontSize='20px' align='left' >Introduction to engineering</Text>
                        <Text fontWeight='light' align='left'>Filmy</Text>
                        <HStack>
                            <Box bg='orange.100' borderRadius='50%' h={6} w={6} >
                                <Icon as={IoBookSharp} w={4} h={4} m={1} color='orange'></Icon>
                            </Box>
                            <Text>2 Chapters</Text>
                        </HStack>
                        <Progress value={80} size='xs' colorScheme='orange' />
                        <Text>50% Completed</Text>
                    </VStack>
                </Flex>
                
            </Box>
        </Flex>
    </ChakraProvider>
    )
}
