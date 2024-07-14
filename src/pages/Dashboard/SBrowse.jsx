import React, { useEffect, useState } from 'react';
import { ChakraProvider, Box, Flex, VStack, HStack, Img, Text, Icon, Tag, Progress, Input } from '@chakra-ui/react';
import Sidebar from './Student-Components/sidebar';
import { IoBookSharp } from "react-icons/io5";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Search2Icon } from '@chakra-ui/icons';
import { InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react';

export default function SBrowse() {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true); // Track loading state
    const [input, setInput] = useState("");
    const [chapters, setChapters] = useState([]);
    const navigate = useNavigate();

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

        async function fetchChapters() {
            try {
                const response = await axios.get('http://localhost:3000/chapters');
                setChapters(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching chapters:', error);
            }
        }

        fetchChapters();
        fetchCourses();
    }, []);

    const handleInputChange = (e) => {
        setInput(e.target.value.toLowerCase());
    };

    const Search = async () => {
        try {
            console.log(input);
            const response = await axios.get('http://localhost:3000/chapters');
            const filteredChapters = response.data.filter(chapter => {
                const tags = chapter.tags.map(tag => tag.toLowerCase());
                return tags.includes(input);
            });

            if (filteredChapters.length === 0) {
                console.log('No chapters found with the given tag');
                return;
            }

            let c = filteredChapters[0].courseTitle;
            console.log(c);
            const cresponse = await axios.get('http://localhost:3000/auth/courses');
            const filteredCourses = cresponse.data.filter(course => course.title === c);

            setCourses(filteredCourses);
            console.log('Filtered Courses:', filteredCourses);
            setChapters(filteredChapters);
        } catch (error) {
            console.error('Error fetching chapters:', error);
        }
    };

    const handleTagClick = (tag) => {
        setInput(tag.toLowerCase()); // Set input value to the clicked tag
        Search(); // Trigger search with the clicked tag
    };

    const renderUniqueTags = () => {
        // Aggregate all tags from all chapters
        const allTags = chapters.reduce((accumulator, chapter) => {
            accumulator.push(...chapter.tags);
            return accumulator;
        }, []);

        // Remove duplicates using Set
        const uniqueTags = Array.from(new Set(allTags));

        return uniqueTags.map(tag => <Tag key={tag} onClick={() => handleTagClick(tag)}>{tag}</Tag>);
    };

    const navigateToCourseDetails = (title) => {
        navigate(`/course/${title}`);
    };

    return (
        <ChakraProvider>
            <Flex direction={{ base: 'column', md: 'row' }} overflowX='hidden'>
                <Sidebar />
                <Box flex="1" p="4">
                    <HStack>
                        <InputGroup>
                            <Input placeholder='Enter search text' type='text' onChange={handleInputChange} />
                            <InputRightElement onClick={Search}>
                                <Search2Icon color='green.500' />
                            </InputRightElement>
                        </InputGroup>
                    </HStack>
                    {/* Horizontal scrollable list of tags */}
                    <HStack spacing={4} mb={4} wrap='wrap' justify={{ base: 'center', md: 'flex-start' }}>
                        {renderUniqueTags()}
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
                                <Img src={course.image} alt={course.title} aspectRatio={3/4} h='150px' />
                                <Text fontWeight='bold' fontSize='20px' align='left' h='50px'>{course.title}</Text>
                                <Text fontWeight='light' align='left'>{course.description}</Text>
                                <HStack>
                                    <Box bg='orange.100' borderRadius='50%' h={6} w={6}>
                                        <Icon as={IoBookSharp} w={4} h={4} m={1} color='orange' />
                                    </Box>
                                    <Text>{course.chapters} Chapters</Text>
                                </HStack>
                                <Tag colorScheme='orange'>{course.status}</Tag>
                                
                            </VStack>
                        ))}
                    </Flex>
                </Box>
            </Flex>
        </ChakraProvider>
    );
}
