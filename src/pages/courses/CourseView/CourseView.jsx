import React, { useEffect, useState } from 'react';
import Sidebar from './components/sidebar';
import {
    Button, HStack, VStack, Box, AspectRatio, Icon, Text, Flex, ChakraProvider, Progress, Tag, TagLeftIcon, TagLabel, useToast
} from '@chakra-ui/react';
import { FaBackward, FaRegCircleDot } from 'react-icons/fa6';
import { BsFilePdfFill, BsTextParagraph } from 'react-icons/bs';
import CommentSection from './components/CommentSection';
import { MdOutlinePlayCircle } from "react-icons/md";
import { CiClock1 } from 'react-icons/ci';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function ChapterView() {
    const  {uid, cid}  = useParams(); 
    const navigate = useNavigate(); // Destructure to get 'id' directly from useParams
    const [chapters, setChapters] = useState([]);
    const [courses, setCourses] = useState([]);
    const toast = useToast();

    useEffect(() => {
        async function fetchChapters() {
            try {
                const response = await axios.get('https://localhost:3000/chapters');
                const filteredCourses = response.data.filter(chapter => chapter.courseTitle === courses[0]?.title);
                setChapters(filteredCourses);
            } catch (error) {
                console.error('Error fetching chapters:', error);
            }
        }
    
        async function fetchCourses(courseId) {
            try {
                const response = await axios.get('https://resourcify-qw1s.onrender.com/auth/courses');
                const filteredCourses = response.data.filter(course => course._id === courseId);
                setCourses(filteredCourses);
            } catch (error) {
                toast({
                    title: "Error",
                    description: error.response?.data?.message || error.message,
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                });
            }
        }

        fetchCourses(cid);
        fetchChapters();
    }, [cid, courses, toast]);

    const navigateToChapterDetails = (id) => {
        navigate(`/course/${uid}/${cid}/${id}`);
    };

    return (
        <ChakraProvider>
            <Flex h="100vh" flexDirection={{ base: 'column', lg: 'row' }}>
                <Sidebar />
                <VStack
                    h="100%"
                    w="100%"
                    m={{ base: '4', md: '10' }}
                    p={{ base: '2', md: '5' }}
                    spacing={{ base: '4', md: '8' }}
                    alignItems="flex-start"
                >
                    <Box w="100%" textAlign='right' mr={10}>
                        <Button leftIcon={<FaBackward />} onClick={() => navigate(-1)}>Back</Button>
                    </Box>
                    <Flex
                        w='100%'
                        flexDirection={{ base: 'column', lg: 'column' }}
                        alignItems={{ base: 'center', lg: 'flex-start' }}
                    >
                        <Box
                            w={{ base: '100%', lg: '98%' }}
                            maxW="1300px"
                            mx="auto"
                            my={{ base: '4', md: '10' }}
                            p={{ base: '2', md: '5' }}
                        >
                            <AspectRatio ratio={16 / 9}>
                                <iframe src="../../img/Eduvid.mp4" frameBorder="1" allowFullScreen title="Course Video" />
                            </AspectRatio>
                        </Box>
                        <Box
                            border="1px solid #e2e8f0"
                            w={{ base: '100%', lg: '98%' }}
                            p={4}
                            mt={{ base: '4', lg: '0' }}
                        >
                            <VStack align='left'>
                                <Text>Course Content</Text>
                                <Progress colorScheme='orange' size='xs' value={40} />
                            </VStack>
                            {chapters.length > 0 ? (
                                chapters.map((chapter, index) => (
                                    <HStack
                                        key={chapter._id}
                                        border="1px solid #e2e8f0"
                                        p={2}
                                        my={2}
                                        justifyContent='space-between'
                                        borderRadius={5}
                                        cursor='pointer'
                                        onClick={() => navigateToChapterDetails(chapter._id)}
                                    >
                                        <HStack>
                                            <Icon as={index === 0 ? MdOutlinePlayCircle : FaRegCircleDot} h={5} w={5} />
                                            <Text fontWeight='semibold'>{chapter.title}</Text>
                                        </HStack>
                                        <HStack spacing={4}>
                                            <Tag size='md' variant='subtle' colorScheme='orange'>
                                                <TagLeftIcon boxSize='12px' as={CiClock1} h={5} w={5} />
                                                <TagLabel>{chapter.duration}</TagLabel>
                                            </Tag>
                                        </HStack>
                                    </HStack>
                                ))
                            ) : (
                                <Text>No chapters available</Text>
                            )}
                        </Box>
                    </Flex>

                    <Box w="100%">
                        <HStack spacing="2" mb="4">
                            <Icon as={BsTextParagraph} />
                            <Text fontSize="xl" fontWeight="bold">
                                Course Overview
                            </Text>
                        </HStack>
                        <Text>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                        </Text>
                    </Box>
                    <Box w="100%">
                        <HStack spacing="2" mb="4">
                            <Icon as={BsFilePdfFill} />
                            <Text fontSize="xl" fontWeight="bold">
                                Resources & Attachments
                            </Text>
                        </HStack>
                        <Box border="1px solid #e2e8f0" w="200px" h="150px" borderRadius="10px" bg="gray.100" />
                    </Box>
                    <Box w="100%" pb={10}>
                        <CommentSection />
                    </Box>
                </VStack>
            </Flex>
        </ChakraProvider>
    );
}

export default ChapterView;
