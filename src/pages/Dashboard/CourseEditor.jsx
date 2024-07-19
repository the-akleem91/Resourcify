import React, { useState, useEffect } from 'react';
import {
    Button, Img, Input, Text, ChakraProvider, Box, Flex, HStack, VStack, Icon, Tag, TagLabel, TagCloseButton, useToast
} from '@chakra-ui/react';
import Sidebar from './Creator-Components/sidebar';
// import ChapterList from './Creator-Components/ChapterList';
import { TbLayout2 } from "react-icons/tb";
import { MdOutlineModeEdit, MdDelete } from "react-icons/md";
import { FiPlusCircle } from "react-icons/fi";
import { CgMenuGridO } from "react-icons/cg";
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

export default function CourseEditor() {
    const {id, title} = useParams();
    const navigate = useNavigate();
    const courseTitle = title;
    console.log('This title : ', courseTitle);
    const [courseDescription, setCourseDescription] = useState('');
    const [courseThumbnail, setCourseThumbnail] = useState(null);
    const [tagList, setTagList] = useState([]);
    const [chapterList, setChapterList] = useState([]);
    const [input, setInput] = useState('');
    const [file, setFile] = useState(null);
    const toast = useToast();


    const handleOnDragEnd = (result) => {
        if (!result.destination) return;
    
        const items = Array.from(chapterList);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
    
        // Update your state with the reordered items
        setChapterList(items);
    };
    

    useEffect(() => {
        async function fetchChapters() {
            try {
                const response = await axios.get('http://localhost:3000/chapters');
                const filteredChapters = response.data.filter(chapter => chapter.courseTitle === courseTitle);
                setChapterList(filteredChapters);
            } catch (error) {
                console.error('Error fetching chapters:', error);
            }
        }

        fetchChapters();
    }, [courseTitle]);

    const handleChapterClick = async () => {
        navigate(`/edit-course/${id}/${title}/chapter`)
    };

    const onInputChange = (e) => {
        console.log(e.target.files[0]);
        setCourseThumbnail(e.target.files[0]);
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


    const deleteChapterByTitle = async (title) => {
        try {
          const response = await axios.delete(`http://localhost:3000/chapters/by-title/${title}`);
          console.log('Chapter deleted:', response.data);
        } catch (err) {
          console.error('Error deleting chapter:', err.message);
        }
      };
    
      // Handle the button click
      const handleDeleteClick = (title) => {
        deleteChapterByTitle(title);
      };


      const handlePublish = async () => {
        const courseData = {
            title: courseTitle,
            description: courseDescription,
            tags: tagList,
            chapters: chapterList,
            thumbnail: courseThumbnail ? courseThumbnail.toString() : '', // Convert to string
        };
    
        try {
            const response = await axios.put('http://localhost:3000/courses', courseData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
    
            console.log(response.data);
            toast({
                title: "Course Published",
                description: "Your course details have been saved.",
                status: "success",
                duration: 5000,
                isClosable: true,
            });
                 
            navigate(`/dashboard/${id}`);

            // Reset the form (optional)
            // setCourseTitle(''); // Reset title
            setCourseDescription(''); // Reset description
            setCourseThumbnail(null); // Reset thumbnail
            setChapterList([]); // Reset chapters list after successful publish
            setTagList([]); // Reset tags list after successful publish
        } catch (error) {
            console.error('Error saving course details:', error);  // Log the error
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
                    <HStack w='100%'>
                        <HStack w='100%'>
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
                                        </HStack>
                                        <HStack w='100%' justifyContent='space-between'>
                                            <Text >{courseTitle}</Text>
                                        </HStack>
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
                                            onChange={onInputChange}
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
                                            placeholder='Enter tags and press enter'
                                            value={input}
                                            onChange={handleInputChange}
                                            onKeyPress={handleKeyPress}
                                        />
                                        <HStack>
                                            {tagList.map((tag, index) => (
                                                <Tag
                                                    size='lg'
                                                    key={index}
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
                            <VStack w="50%" flexDirection='column'>
                                    <VStack w='100%' bg="gray.100" p="20px" borderRadius='5px'>
                                        <HStack w='100%' justifyContent='space-between'>
                                            <Text fontWeight='semibold'>Add Chapters</Text>
                                            <Button leftIcon={<FiPlusCircle />} onClick={handleChapterClick}>New Chapter</Button>
                                        </HStack>
                                        {chapterList.map((chapter, index) => (
                                            <HStack key={index} w='100%' justifyContent='space-between'>
                                                <HStack>
                                                    <Box bg='#F6D6A8' h={12} w={12} borderRadius='50%' p={1} color='#FF9500'>
                                                        <Icon as={CgMenuGridO} h={10} w={10} />
                                                    </Box>
                                                    <Text>{chapter.title}</Text>
                                                </HStack>
                                                <HStack>
                                                    <Button leftIcon={<MdOutlineModeEdit />} variant='link'>Edit</Button>
                                                    <Button leftIcon={<MdDelete />} onClick={() => deleteChapterByTitle('Chapter Title')} variant='link'>Delete</Button>
                                                </HStack>
                                            </HStack>
                                        ))}
                                    </VStack>
                                    {/* <ChapterList 
                                        chapterList={chapterList}
                                        handleChapterClick={handleChapterClick}
                                        deleteChapterByTitle={deleteChapterByTitle}
                                        onDragEnd={handleOnDragEnd}
                                    /> */}
                            </VStack>
                        </HStack>
                    </HStack>
                </Box>
            </Flex>
        </ChakraProvider>
    );
}
