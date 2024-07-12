import React, { useEffect, useState } from 'react';
import { ChakraProvider, Box, Flex, VStack, HStack, Img, Text, Icon, Tag, Progress } from '@chakra-ui/react';
import Sidebar from './Student-Components/sidebar';
import { IoBookSharp } from "react-icons/io5";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function SBrowse() {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true); // Track loading state

    const navigate=useNavigate();

    useEffect(() => {
        async function fetchCourses() {
            try {
                const response = await axios.get('http://localhost:3000/auth/courses');
                setCourses(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        }

        fetchCourses();
    }, []);

    const navigateToCourseDetails = (title) => {
        navigate(`/course/${title}`);
      };    

    return (
        <ChakraProvider>
            <Flex direction={{ base: 'column', md: 'row' }}>
                <Sidebar />
                <Box flex="1" p="4">
                    <HStack spacing={4} mb={4} wrap="wrap" justify={{ base: 'center', md: 'flex-start' }}>
                        <Tag>Accounting</Tag>
                        <Tag>Computer Science</Tag>
                        <Tag>Engineering</Tag>
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
                                onClick={() => navigateToCourseDetails(course.title)}
                            >
                                <Img src={course.image} alt={course.title} aspectRatio={3/4} h='150px'/>
                                <Text fontWeight='bold' fontSize='20px' align='left' h='50px'>{course.title}</Text>
                                <Text fontWeight='light' align='left'>{course.description}</Text>
                                <HStack>
                                    <Box bg='orange.100' borderRadius='50%' h={6} w={6}>
                                        <Icon as={IoBookSharp} w={4} h={4} m={1} color='orange' />
                                    </Box>
                                    <Text>{course.chapters} Chapters</Text>
                                </HStack>
                                <Tag colorScheme='orange'>{course.status}</Tag>
                                <Progress value={course.progress} size='xs' colorScheme='orange' w="full" />
                            </VStack>
                        ))}
                    </Flex>
                </Box>
            </Flex>
        </ChakraProvider>
    );
}
