import React, { useState, useEffect } from 'react';
import {
    Button, Img, Input, Text, ChakraProvider, Box, Flex, HStack, VStack, Icon, Tag, TagLabel, TagCloseButton, useToast
} from '@chakra-ui/react';
import Sidebar from './Creator-Components/sidebar';
import { TbLayout2 } from "react-icons/tb";
import { MdOutlineModeEdit, MdDelete } from "react-icons/md";
import { FiPlusCircle } from "react-icons/fi";
import { CgMenuGridO } from "react-icons/cg";
import axios from 'axios';

export default function CourseEditor() {
    const [courseTitle, setCourseTitle] = useState('');
    const [courseDescription, setCourseDescription] = useState('');
    const [courseThumbnail, setCourseThumbnail] = useState(null);
    const [tagList, setTagList] = useState([]);
    const [chapterList, setChapterList] = useState([]);
    const [input, setInput] = useState('');
    const [file, setFile] = useState(null);
    const toast = useToast();

    useEffect(() => {
        async function fetchChapters() {
            try {
                const response = await axios.get('http://localhost:3000/chapters');
                setChapterList(response.data);
            } catch (error) {
                console.error('Error fetching chapters:', error);
            }
        }

        fetchChapters();
    }, []);

    const handleFileChange = async (e) => {
        let inputFile = e.target.files[0];
        let size = inputFile.size;
        let type = inputFile.type;

        console.log('File selected:', inputFile);
        console.log('File size:', size);
        console.log('File type:', type);

        if (size < 2000000 && (type === 'image/png' || type === 'image/jpg' || type === 'image/jpeg')) {
            const formData = new FormData();
            formData.append('file', inputFile);

            console.log('FormData created:', formData);

            try {
                console.log('Sending POST request to upload image...');
                const response = await axios.post('http://localhost:3000/auth/courses', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });

                console.log('Response received:', response);
                setFile(URL.createObjectURL(inputFile));
                console.log('File URL set:', URL.createObjectURL(inputFile));
            } catch (error) {
                console.error('Error uploading image:', error);
                if (error.response) {
                    console.error('Response data:', error.response.data);
                    console.error('Response status:', error.response.status);
                    console.error('Response headers:', error.response.headers);
                } else if (error.request) {
                    console.error('Request data:', error.request);
                } else {
                    console.error('Error message:', error.message);
                }
            }
        } else {
            alert("Image size exceeded or type is undesired");
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            const trimmedInput = input.trim();
            if (trimmedInput && !tagList.includes(trimmedInput)) {
                setTagList([...tagList, trimmedInput]);
                setInput('');
            }
        }
    };

    const removeTag = (tag) => {
        setTagList(tagList.filter(item => item !== tag));
    };

    const handleInputChange = (e) => {
        const input = e.target.value;
        setInput(input);
    };

    const handlePublish = async () => {
        const formData = new FormData();
        formData.append('title', courseTitle);
        formData.append('description', courseDescription);
        formData.append('thumbnail', courseThumbnail);
        formData.append('tags', JSON.stringify(tagList));
        formData.append('chapters', JSON.stringify(chapterList));
    
        try {
            console.log('Publishing course...');
            const response = await axios.post('http://localhost:3000/auth/courses', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
    
            console.log('Course published successfully:', response.data);
            toast({
                title: "Course Published",
                description: "Your course details have been saved.",
                status: "success",
                duration: 5000,
                isClosable: true,
            });
    
            // Reset the form (optional)
            setCourseTitle('');
            setCourseDescription('');
            setCourseThumbnail(null);
            setTagList([]);
            setChapterList([]);
        } catch (error) {
            console.error('Error saving course details:', error);
            if (error.response) {
                console.error('Response data:', error.response.data);
                console.error('Response status:', error.response.status);
                console.error('Response headers:', error.response.headers);
            } else if (error.request) {
                console.error('Request data:', error.request);
            } else {
                console.error('Error message:', error.message);
            }
    
            toast({
                title: "Error",
                description: "There was an error saving your course details.",
                status: "error",
                duration: 5000,
                isClosable: true,
            });
        }
    };
    
    
    
    return (
        <ChakraProvider>
            <Flex>
                <Sidebar />
                <Box flex="1" p="4">
                    <HStack justifyContent='space-between' w='100%' pb={10}>
                        <VStack>
                            <Text fontSize='30px' fontWeight='bold'>Course Setup</Text>
                            <Text fontSize='20px' fontWeight='normal'>Complete all fields</Text>
                        </VStack>
                        <HStack>
                            <Button colorScheme='orange' onClick={handlePublish}>Publish</Button>
                            <Button aspectRatio={1}><Icon as={MdDelete} w={6} h={6} /></Button>
                        </HStack>
                    </HStack>
                    <HStack>
                        <VStack w='55%' align='left'>
                            <VStack spacing={4}>
                                <HStack spacing={2} w='100%'>
                                    <Box align='left' bg='#F6D6A8' h={12} w={12} borderRadius='50%' p={1} color='#FF9500'>
                                        <Icon as={TbLayout2} h={10} w={10} />
                                    </Box>
                                    <Text fontSize='25px' fontWeight='semibold'>Customize your course</Text>
                                </HStack>
                                <VStack w='100%' bg="gray.100" p="20px" borderRadius='5px'>
                                    <HStack w='100%' justifyContent='space-between'>
                                        <Text fontWeight='semibold'>Course Title</Text>
                                        <Button leftIcon={<MdOutlineModeEdit />}>Edit</Button>
                                    </HStack>
                                    <Input
                                        placeholder='Write course title'
                                        value={courseTitle}
                                        onChange={(e) => setCourseTitle(e.target.value)}
                                    />
                                </VStack>
                                <VStack w='100%' bg="gray.100" p="20px" borderRadius='5px'>
                                    <HStack w='100%' justifyContent='space-between'>
                                        <Text fontWeight='semibold'>Course Description</Text>
                                        <Button leftIcon={<MdOutlineModeEdit />}>Edit description</Button>
                                    </HStack>
                                    <Input
                                        placeholder='Write course description'
                                        value={courseDescription}
                                        onChange={(e) => setCourseDescription(e.target.value)}
                                    />
                                </VStack>
                                <VStack w='100%' bg="gray.100" p="20px" borderRadius='5px'>
                                    <HStack w='100%' justifyContent='space-between'>
                                        <Text fontWeight='semibold'>Course Thumbnail</Text>
                                        <Button leftIcon={<MdOutlineModeEdit />}>Edit image</Button>
                                    </HStack>
                                    <Input
                                        placeholder='Add Thumbnail'
                                        type='file'
                                        onChange={handleFileChange}
                                        accept="image/png, image/jpeg"
                                    />
                                    {file && <Img src={file} />}
                                </VStack>
                                <VStack w='100%' bg="gray.100" p="20px" borderRadius='5px'>
                                    <HStack w='100%' justifyContent='space-between'>
                                        <Text fontWeight='semibold'>Course Tags</Text>
                                        <Button leftIcon={<MdOutlineModeEdit />}>Edit Tags</Button>
                                    </HStack>
                                    <Input
                                        placeholder='Enter tags and press Enter'
                                        value={input}
                                        onChange={handleInputChange}
                                        onKeyPress={handleKeyPress}
                                    />
                                    <HStack spacing={2} wrap='wrap'>
                                        {tagList.map((tag, index) => (
                                            <Tag
                                                key={index}
                                                size='md'
                                                borderRadius='full'
                                                variant='solid'
                                                colorScheme='orange'
                                            >
                                                <TagLabel>{tag}</TagLabel>
                                                <TagCloseButton onClick={() => removeTag(tag)} />
                                            </Tag>
                                        ))}
                                    </HStack>
                                </VStack>
                            </VStack>
                        </VStack>
                        <VStack w='45%' align='left' borderRadius='20px'>
                            <VStack spacing={4}>
                                <HStack spacing={2} w='100%'>
                                    <Box align='left' bg='#F6D6A8' h={12} w={12} borderRadius='50%' p={1} color='#FF9500'>
                                        <Icon as={FiPlusCircle} h={8} w={8} m={1} />
                                    </Box>
                                    <Text fontSize='25px' fontWeight='semibold'>Course Chapters</Text>
                                </HStack>
                                <VStack w='100%' bg="gray.100" p="20px">
                                    <HStack w='100%' justifyContent='space-between'>
                                        <Text fontWeight='semibold'>Course Chapters</Text>
                                        <Button leftIcon={<FiPlusCircle />}>Add Chapter</Button>
                                    </HStack>
                                    {chapterList.map((item, index) => (
                                        <HStack key={index} justifyContent='space-between' border='2px solid gray' width='100%' bg='gray.200' p='10px' borderRadius='10px'>
                                            <HStack>
                                                <Icon as={CgMenuGridO} />
                                                <Text>{item.title}</Text>
                                            </HStack>
                                            <HStack>
                                                <Tag borderRadius='full' variant='solid' bg='black'>
                                                    <TagLabel>Free</TagLabel>
                                                </Tag>
                                                <Tag borderRadius='full' variant='solid' colorScheme='orange'>
                                                    <TagLabel>Published</TagLabel>
                                                </Tag>
                                                <Icon as={MdOutlineModeEdit} />
                                            </HStack>
                                        </HStack>
                                    ))}
                                </VStack>
                            </VStack>
                        </VStack>
                    </HStack>
                </Box>
            </Flex>
        </ChakraProvider>
    );
}
