import React, { useState, useEffect } from 'react';
import { Img, Progress, Text, useBreakpointValue } from '@chakra-ui/react';
import { ChakraProvider, Box, Flex, HStack, VStack, Tag } from '@chakra-ui/react';
import Sidebar from './Student-Components/sidebar';
import { Icon } from '@chakra-ui/react';
import { FiClock, FiCheckCircle } from 'react-icons/fi';
import { IoBookSharp } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

export default function SCompCourses() {
    const [courses, setCourses] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:3000/auth/courses')
            .then(response => response.json())
            .then(data => setCourses(data))
            .catch(error => console.error('Error fetching courses:', error));
    }, []);

    const columnWidth = useBreakpointValue({ base: '100%', md: '45%', lg: '30%' });

    const handleCourseClick = (id) => {
        navigate(`/course/${id}`);
    };

    const handleCardClick = () => {
        navigate('/student-courses/enrolled');
    };
    

    return (
        <ChakraProvider>
            <Flex>
                <Sidebar />
                <Box flex="1" p="4">
                    <HStack spacing={4}>
                        <HStack border='3px solid gray' w={columnWidth} borderRadius='10px' p={2} onClick={handleCardClick} cursor="pointer">
                            <Box bg='orange.100' borderRadius='50%' h={10} w={10}>
                                <Icon as={FiClock} w={8} h={8} m={1} color='orange' />
                            </Box>
                            <Box>
                                <Text fontSize='20px' fontWeight='semibold'>Enrolled</Text>
                                <Text>{courses.filter(course => !course.completed).length} Courses</Text>
                            </Box>
                        </HStack>
                        <HStack border='3px solid gray' w={columnWidth} borderRadius='10px' p={2} >
                            <Box bg='green.100' borderRadius='50%' h={10} w={10}>
                                <Icon as={FiCheckCircle} w={8} h={8} m={1} color='green' />
                            </Box>
                            <Box>
                                <Text fontSize='20px' fontWeight='semibold'>Completed</Text>
                                <Text>{courses.filter(course => course.completed).length} Courses</Text>
                            </Box>
                        </HStack>
                    </HStack>
                    <Flex wrap='wrap' justifyContent='center'>
                        {courses.map(course => (
                            <VStack
                                key={course._id} // Assuming your course model has _id as the unique identifier
                                border='3px solid gray'
                                w={{ base: '100%', sm: '45%', md: '30%' }}
                                align='left'
                                p='10px'
                                m={3}
                                borderRadius='10'
                                boxShadow='lg'
                                onClick={() => handleCourseClick(course._id)}
                            >
                                <Img src={course.image} alt={course.title} aspectRatio={3/4} h='150px' />
                                <Text fontWeight='bold' fontSize='20px' align='left' h='50px'>{course.title}</Text>
                                <Text fontWeight='light' align='left'>{course.description}</Text>
                                <HStack>
                                    <Box bg='orange.100' borderRadius='50%' h={6} w={6}>
                                        <Icon as={IoBookSharp} w={4} h={4} m={1} color='orange' />
                                    </Box>
                                    <Text>{course.chapterNo} Chapters</Text>
                                </HStack>
                                <Tag colorScheme='orange'>{course.status}</Tag>
                                <Text>% completed</Text>
                                <Progress value={course.progress} />
                            </VStack>
                        ))}
                    </Flex>
                </Box>
            </Flex>
        </ChakraProvider>
    );
}
