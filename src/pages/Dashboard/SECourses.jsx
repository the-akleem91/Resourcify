import React, { useState, useEffect } from 'react';
import { Img, Progress, Text, useBreakpointValue } from '@chakra-ui/react';
import { ChakraProvider, Box, Flex, HStack, VStack, Tag , Avatar} from '@chakra-ui/react';
import Sidebar from './Student-Components/sidebar';
import { Icon } from '@chakra-ui/react';
import { FiClock, FiCheckCircle } from 'react-icons/fi';
import { IoBookSharp } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';



export default function SECourses() {
    const [courses, setCourses] = useState([]);
    const [userDetails, setUserDetails] = useState(null);
    let d= useParams().id;
    console.log("id : ",d);
    const username= d;

    const fetchUserDetails = async (username) => {
        try {
            console.log("hello, are you here");
            const response = await axios.get(`https://resourcify-qw1s.onrender.com/auth/user/${username}`);
            if (response.status === 200) {
                const userDetails = response.data;
                console.log('User details fetched successfully:', userDetails);
                // Set the user details in the state
                setUserDetails(userDetails);
            } else {
                console.error('Failed to fetch user details:', response.data.message);
                setError(response.data.message); // Set the error message from the response
            }
        } catch (error) {
            console.error('Error fetching user details:', error);
            if (error.response) {
                console.error('Error response data:', error.response.data);
                setError(error.response.data.message);
            }
        }
    };

    useEffect(() => {
        fetchUserDetails(username);
    }, [username]);


    const navigate = useNavigate();
    useEffect(() => {
        fetch('https://resourcify-qw1s.onrender.com/auth/courses')
            .then(response => response.json())
            .then(data => setCourses(data))
            .catch(error => console.error('Error fetching courses:', error));
    }, []);
    

    let c = courses[0];
    console.log("this is courses", c); 
    const columnWidth = useBreakpointValue({ base: '100%', md: '45%', lg: '30%' });

    const handleCourseClick = (id) => {
        navigate(`/course/${id}`);
    };

    const handleAvatar = () => {
        navigate(`/profile/${username}`);
    };

    const handleCardClick = () => {
        navigate('/student-courses/completed');
    };

    return (
        <ChakraProvider>
            <Flex>
                <Sidebar />
                <Box flex="1" p="4">
                    <HStack justifyContent='flex-end'>
                        <Avatar name='Kola Tioluwani' src='https://bit.ly/tioluwani-kolawole' onClick={handleAvatar} />
                    </HStack>
                    <HStack spacing={4}>
                        <HStack border='3px solid gray' w={columnWidth} borderRadius='10px' p={2}>
                            <Box bg='orange.100' borderRadius='50%' h={10} w={10}>
                                <Icon as={FiClock} w={8} h={8} m={1} color='orange'></Icon>
                            </Box>
                            <Box>
                                <Text fontSize='20px' fontWeight='semibold'>Enrolled</Text>
                                <Text>{courses.filter(course => !course.completed).length} Courses</Text>
                            </Box>
                        </HStack>
                        <HStack border='3px solid gray' w={columnWidth} borderRadius='10px' p={2} onClick={handleCardClick} cursor="pointer" >
                            <Box bg='green.100' borderRadius='50%' h={10} w={10}>
                                <Icon as={FiCheckCircle} w={8} h={8} m={1} color='green'></Icon>
                            </Box>
                            <Box>
                                <Text fontSize='20px' fontWeight='semibold' >Completed</Text>
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
                                <Progress size='xs' colorScheme='orange' value='50'></Progress>
                            </VStack>
                        ))}
                    </Flex>
                </Box>
            </Flex>
        </ChakraProvider>
    );
}
