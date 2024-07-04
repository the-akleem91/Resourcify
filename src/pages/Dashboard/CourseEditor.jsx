import React from 'react';
import { Button, Img, Input, Text } from '@chakra-ui/react';
import { ChakraProvider, Box, Flex, HStack, VStack } from '@chakra-ui/react';
import Sidebar from './Creator-Components/sidebar';
import { Icon } from '@chakra-ui/react';
import { TbLayout2 } from "react-icons/tb";
import { MdOutlineModeEdit, MdChecklistRtl, MdDelete } from "react-icons/md";
import { FaDeleteLeft, FaFileLines } from "react-icons/fa6";
import { FiPlusCircle } from "react-icons/fi";
import { CgMenuGridO } from "react-icons/cg";
import { useState } from 'react';
import { Tag , TagLabel, TagCloseButton} from '@chakra-ui/react';

export default function CourseEditor() {

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

  return (
    <ChakraProvider>
      <Flex>
        <Sidebar />
        <Box flex="1" p="4">
            <HStack justifyContent='space-between' w='100%' pb={10}>
                <VStack>
                    <Text fontSize='30px' fontWeight='bold' >Course Setup</Text>
                    <Text fontSize='20px' fontWeight='normal'>Complete all fields</Text>
                </VStack>
                <HStack>
                    <Button colorScheme='orange'>Publish</Button>
                    <Button aspectRatio={1}><Icon as={MdDelete} w={6} h={6}/></Button>
                </HStack>
            </HStack>
            <HStack>
                <VStack w='55%' align='left'>
                    <VStack spacing={4}>
                        <HStack spacing={2} w='100%'>
                            <Box align='left' bg='#F6D6A8' h={12} w={12} borderRadius='50%' p={1} color='#FF9500'>
                                <Icon as={TbLayout2} h={10} w={10} />
                            </Box>
                            <Text  fontSize='25px' fontWeight='semibold'>Customize your course</Text>
                        </HStack>
                        <VStack w='100%' bg="gray.100" p="20px" borderRadius='5px'>
                            <HStack w='100%' justifyContent='space-between'>
                                <Text fontWeight='semibold'>Course Title</Text>
                                <Button leftIcon={<MdOutlineModeEdit/>}>Edit</Button>
                            </HStack>
                            <Input placeholder='Write course title'/>
                        </VStack>
                        <VStack w='100%' bg="gray.100" p="20px" borderRadius='5px'>
                            <HStack w='100%' justifyContent='space-between'>
                                <Text fontWeight='semibold'>Course Description</Text>
                                <Button leftIcon={<MdOutlineModeEdit/>}>Edit description</Button>
                            </HStack>
                            <Input placeholder='Write course decription'/>
                        </VStack>
                        <VStack w='100%' bg="gray.100" p="20px" borderRadius='5px'>
                            <HStack w='100%' justifyContent='space-between'>
                                <Text fontWeight='semibold'>Course Thumbnail</Text>
                                <Button leftIcon={<MdOutlineModeEdit/>}>Edit image</Button>
                            </HStack>
                            <Input placeholder='Add Thumbnail' type='file' onChange={handleChange} accept="image/png, image/jpeg" size=''/>
                            <Img src={file} />
                        </VStack>
                        <VStack w='100%' bg="gray.100" p="20px" borderRadius='5px'>
                            <HStack w='100%' justifyContent='space-between'>
                                <Text fontWeight='semibold'>Course Tags</Text>
                                <Button leftIcon={<MdOutlineModeEdit/>} >Add tag</Button>
                            </HStack>
                            <Input placeholder='Add tags' type='text' name='tags'onClick={handleInputChange}/>
                            <Box mt={4}>
                                {tagList.map((tag, index) => (
                                <Tag 
                                key={index} 
                                mr={2} 
                                mb={2}  
                                borderRadius='full'
                                variant='solid'
                                colorScheme='orange'>
                                    <TagLabel>{tag}</TagLabel>
                                    <TagCloseButton />
                                </Tag>
                                ))}
                            </Box>
                        </VStack>
                    </VStack>
                </VStack>
                <VStack w='55%' align='left' borderRadius='20px'>
                    <VStack spacing={4} >
                        <HStack spacing={2} w='100%'>
                            <Box align='left' bg='#F6D6A8' h={12} w={12} borderRadius='50%' p={1} color='#FF9500'>
                                <Icon as={MdChecklistRtl} h={10} w={10} />
                            </Box>
                            <Text  fontSize='25px' fontWeight='semibold'>Course Chapters</Text>
                        </HStack>
                        <VStack w='100%' bg="gray.100" p="20px">
                            <HStack w='100%' justifyContent='space-between'>
                                <Text fontWeight='semibold'>Course Chapters</Text>
                                <Button leftIcon={<FiPlusCircle/>}>Add Chapter</Button>
                            </HStack>
                            <HStack justifyContent='space-between' border='2px solid gray' width='100%' bg='gray.200' p='10px' borderRadius='10px'>
                                <HStack>
                                    <Icon as={CgMenuGridO} />
                                    <Text>Introduction</Text>
                                </HStack>
                                <HStack>
                                    <Tag 
                                    borderRadius='full'
                                    variant='solid'
                                    bg='black' >
                                        <TagLabel>Free</TagLabel>
                                    </Tag>
                                    <Tag  
                                    borderRadius='full'
                                    variant='solid'
                                    colorScheme='orange'>
                                        <TagLabel>Published</TagLabel>
                                    </Tag>
                                    <Icon as={MdOutlineModeEdit} />
                                </HStack>
                            </HStack>
                            <HStack justifyContent='space-between' border='2px solid gray' width='100%' bg='gray.200' p='10px' borderRadius='10px'>
                                <HStack>
                                    <Icon as={CgMenuGridO} />
                                    <Text>Introduction</Text>
                                </HStack>
                                <HStack>
                                    <Tag  
                                    borderRadius='full'
                                    variant='solid'
                                    colorScheme='orange'>
                                        <TagLabel>Published</TagLabel>
                                    </Tag>
                                    <Icon as={MdOutlineModeEdit} />
                                </HStack>
                            </HStack>
                            <HStack justifyContent='space-between' border='2px solid gray' width='100%' bg='gray.200' p='10px' borderRadius='10px'>
                                <HStack>
                                    <Icon as={CgMenuGridO} />
                                    <Text>Introduction</Text>
                                </HStack>
                                <HStack>
                                    <Tag  
                                    borderRadius='full'
                                    variant='solid'
                                    colorScheme='orange'>
                                        <TagLabel>Published</TagLabel>
                                    </Tag>
                                    <Icon as={MdOutlineModeEdit} />
                                </HStack>
                            </HStack>
                            <HStack justifyContent='space-between' border='2px solid gray' width='100%' bg='gray.200' p='10px' borderRadius='10px'>
                                <HStack>
                                    <Icon as={CgMenuGridO} />
                                    <Text>Introduction</Text>
                                </HStack>
                                <HStack>
                                    <Tag  
                                    borderRadius='full'
                                    variant='solid'
                                    colorScheme='orange'>
                                        <TagLabel>Published</TagLabel>
                                    </Tag>
                                    <Icon as={MdOutlineModeEdit} />
                                </HStack>
                            </HStack>
                        </VStack>
                        <HStack spacing={2} w='100%'>
                            <Box align='left' bg='#F6D6A8' h={12} w={12} borderRadius='50%' p={1} color='#FF9500'>
                                <Icon as={FaFileLines} h={8} w={8} m={1}/>
                            </Box>
                            <Text  fontSize='25px' fontWeight='semibold'>Resources and Attachments</Text>
                        </HStack>
                        <VStack w='100%' bg="gray.100" p="20px" borderRadius='5px'>
                            <HStack w='100%' justifyContent='space-between'>
                                <Text fontWeight='semibold'>Course Thumbnail</Text>
                                <Button leftIcon={<MdOutlineModeEdit/>}>Edit image</Button>
                            </HStack>
                            <Input placeholder='Add Thumbnail' type='file' onChange={handlePdfChange} accept="application/pdf" size=''/>
                            <Img src={file} />
                        </VStack>
                    </VStack>
                </VStack>
            </HStack>
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

