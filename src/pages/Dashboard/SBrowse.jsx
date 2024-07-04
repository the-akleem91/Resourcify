import React, { useState } from 'react';
import { ChakraProvider, Box, Flex, VStack, HStack, Img, Text, Icon, Tag, Progress, Input } from '@chakra-ui/react';
import Sidebar from './Student-Components/sidebar';
import { IoBookSharp } from "react-icons/io5";

export default function SBrowse() {
    const [file, setFile] = useState();
    const [input, setInput] = useState('');
    const [tagList, setTagList] = useState([]);

    function handleChange(e) {
        let inputFile = e.target.files[0];
        let size = inputFile.size;
        let type = inputFile.type;
        if (size < 2000000 && (type === 'image/png' || type === 'image/jpg')) {
            setFile(URL.createObjectURL(e.target.files[0]));
        } else {
            alert("img size exceeded or type is undesired");
        }
    }

    function handlePdfChange(e) {
        let inputFile = e.target.files[0];
        let size = inputFile.size;
        let type = inputFile.type;
        if (size < 10000000 && (type === 'application/pdf')) {
            setFile(URL.createObjectURL(e.target.files[0]));
        } else {
            alert("img size exceeded or type is undesired");
        }
    }

    const handleInputChange = (e) => {
        const input = e.target.value;
        setInput(input);
        const tags = input.split(' ');
        setTagList(tags);
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
                        {[...Array(12)].map((_, i) => (
                            <VStack
                                key={i}
                                border='3px solid gray'
                                w={{ base: '100%', sm: '45%', md: '30%' }}
                                align='left'
                                p='10px'
                                m={3}
                                borderRadius='10'
                                boxShadow='lg'
                            >
                                <Img src='../../img/Image1.png' />
                                <Text fontWeight='bold' fontSize='20px' align='left'>Introduction to engineering</Text>
                                <Text fontWeight='light' align='left'>Filmy</Text>
                                <HStack>
                                    <Box bg='orange.100' borderRadius='50%' h={6} w={6}>
                                        <Icon as={IoBookSharp} w={4} h={4} m={1} color='orange' />
                                    </Box>
                                    <Text>2 Chapters</Text>
                                </HStack>
                                {i % 6 === 0 ? (
                                    <Tag colorScheme='orange'>Trending</Tag>
                                ) : (
                                    <Progress value={80} size='xs' colorScheme='orange' w="full" />
                                )}
                                {i % 6 !== 0 && <Text>50% Completed</Text>}
                            </VStack>
                        ))}
                    </Flex>
                </Box>
            </Flex>
        </ChakraProvider>
    );
}
