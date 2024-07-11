import React, { useState, useEffect } from 'react';
import { Img, Progress, Text, useBreakpointValue } from '@chakra-ui/react';
import { ChakraProvider, Box, Flex, HStack, VStack } from '@chakra-ui/react';
import Sidebar from './Student-Components/sidebar';
import { Icon } from '@chakra-ui/react';
import { FiClock, FiCheckCircle } from 'react-icons/fi';
import { IoBookSharp } from 'react-icons/io5';

export default function SCourses() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/auth/courses')
            .then(response => response.json())
            .then(data => setCourses(data))
            .catch(error => console.error('Error fetching courses:', error));
    }, []);
    
    const columnWidth = useBreakpointValue({ base: '100%', md: '45%', lg: '30%' });

    return (
        <ChakraProvider>
            <Flex>
                <Sidebar />
                <Box flex="1" p="4">
                    <HStack spacing={4}>
                        <HStack border='3px solid gray' w={columnWidth} borderRadius='10px' p={2}>
                            <Box bg='orange.100' borderRadius='50%' h={10} w={10}>
                                <Icon as={FiClock} w={8} h={8} m={1} color='orange'></Icon>
                            </Box>
                            <Box>
                                <Text fontSize='20px' fontWeight='semibold'>In Progress</Text>
                                <Text>{courses.filter(course => !course.completed).length} Courses</Text>
                            </Box>
                        </HStack>
                        <HStack border='3px solid gray' w={columnWidth} borderRadius='10px' p={2}>
                            <Box bg='green.100' borderRadius='50%' h={10} w={10}>
                                <Icon as={FiCheckCircle} w={8} h={8} m={1} color='green'></Icon>
                            </Box>
                            <Box>
                                <Text fontSize='20px' fontWeight='semibold'>Completed</Text>
                                <Text>{courses.filter(course => course.completed).length} Courses</Text>
                            </Box>
                        </HStack>
                    </HStack>
                    <Flex wrap='wrap' spacing={4}>
                        {courses.map(course => (
                            <VStack key={course._id} border='3px solid gray' w={columnWidth} align='left' p='10px' m={2} borderRadius='10'>
                                <Img src={course.image} alt={course.title} />
                                <Text fontWeight='bold' fontSize='20px' align='left'>{course.title}</Text>
                                <Text fontWeight='light' align='left'>{course.description}</Text>
                                <HStack>
                                    <Box bg='orange.100' borderRadius='50%' h={6} w={6}>
                                        <Icon as={IoBookSharp} w={4} h={4} m={1} color='orange'></Icon>
                                    </Box>
                                    <Text>{course.chapters} Chapters</Text>
                                </HStack>
                                <Progress value={course.progress} size='xs' colorScheme='orange' />
                                <Text>{course.progress}% Completed</Text>
                            </VStack>
                        ))}
                    </Flex>
                </Box>
            </Flex>
        </ChakraProvider>
    );
}
