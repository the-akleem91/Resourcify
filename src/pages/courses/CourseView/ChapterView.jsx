import React, { useEffect, useState } from 'react';
import Sidebar from '../../Dashboard/Student-Components/sidebar';
import {
    Button, HStack, VStack, Box, AspectRatio, Icon, Text, Flex, ChakraProvider, Progress, Tag, TagLeftIcon, TagLabel
} from '@chakra-ui/react';
import { FaBackward, FaRegCircleDot } from 'react-icons/fa6';
import { BsFilePdfFill, BsTextParagraph } from 'react-icons/bs';
import CommentSection from './components/CommentSection';
import { MdOutlinePlayCircle } from "react-icons/md";
import { CiClock1 } from 'react-icons/ci';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function ChapterView() {
    const navigate = useNavigate();
    const title = useParams(); // Destructure to get 'title' directly
    const [chapters, setChapters] = useState([]);
    const [chapter, setChapter] = useState([]);
    const chaptertitle = title.id;
    let chapterId;

    if (chapter && chapter.length > 0) {
        chapterId = chapter[0]._id;
    } else {
        console.error('Chapter or chapter[0] is undefined or empty.');
    }
    console.log(chapterId);
    let c;

    useEffect(() => {
        async function fetchChapters() {
            try {
                const response = await axios.get('https://resourcify-qw1s.onrender.com/chapters');
                const filteredCourse = response.data.filter(chapter => {
                    return chapter.title === chaptertitle;
                });
                c = filteredCourse[0].courseTitle;
                setChapter(filteredCourse);
                const filteredCourses = response.data.filter(chapter => {
                    return chapter.courseTitle === c;
                });
                setChapters(filteredCourses);
            } catch (error) {
                console.error('Error fetching chapters:', error);
            }
        }

        fetchChapters();
    }, [title]);
    
    const navigateToChapterDetails = (chapterTitle) => {
        navigate(`/course/${c}/${chapterTitle}`);
    };

    const handleVideoComplete = async (chapterId) => {  // Accept chapterId as a parameter
        try {
          console.log('Video has ended');
          console.log(`Sending request to mark chapter ${chapterId} as completed`);
          await axios.post(`https://resourcify-qw1s.onrender.com/chapters/complete`, { chapterId });   // Include chapterId in the URL
          console.log('Completion status saved to MongoDB');
        } catch (error) {
          console.error('Error saving completion status:', error);
        }
      };

    return (
        <ChakraProvider>
            <Flex h="100vh" flexDirection={{ base: 'column', lg: 'row' }}>
                <Sidebar/>
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
                                <AspectRatio ratio={16 / 9} >
                                    <video
                                        src='../../img/Eduvid.mp4'
                                        controls
                                        onEnded={() => handleVideoComplete(chapterId)} 
                                    />
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
                                        onClick={() => navigateToChapterDetails(chapter.title)}
                                    >
                                        <HStack>
                                            <Icon as={chaptertitle === chapter.title ? MdOutlinePlayCircle : FaRegCircleDot} h={5} w={5} />
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
                    {chapter.map(chapter => (
                        <VStack key={chapter._id}>
                            <Box w="100%">
                                <HStack spacing="2" mb="4">
                                    <Icon as={BsTextParagraph} />
                                    <Text fontSize="xl" fontWeight="bold">
                                        Chapter Overview
                                    </Text>
                                </HStack>
                                <Text>
                                    {chapter.description}
                                </Text>
                            </Box>
                            <Box w="100%">
                                <HStack spacing="2" mb="4">
                                    <Icon as={BsFilePdfFill} />
                                    <Text fontSize="xl" fontWeight="bold">
                                        Resources & Attachments
                                    </Text>
                                </HStack>
                                <Box border="1px solid #e2e8f0" w="200px" h="150px" borderRadius="10px" bg="gray.100" >
                                    {chapter.notes}
                                </Box>
                            </Box>

                            <Box w="100%" pb={10}>
                                <CommentSection />
                            </Box>
                        </VStack>
                    ))}
                </VStack>
            </Flex>
        </ChakraProvider>
    );
}

export default ChapterView;
