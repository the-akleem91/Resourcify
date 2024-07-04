import React from 'react'
import Sidebar from '../../Dashboard/Student-Components/sidebar'
import { Button, HStack, VStack , Box, AspectRatio} from '@chakra-ui/react'
import { FaBackward } from 'react-icons/fa6';
function CourseView() {
  return (
    <HStack h='100vh'>
        <Box border='5px solid black' h='100vh'>
            <Sidebar  h='100vh'/>
        </Box>
        <VStack h='100%' w='100%' m={10} p={5}>
            <Box w='100%' align='right' >
                <Button leftIcon={<FaBackward />}>Back</Button>
            </Box>
            <Box maxW="1300px" mx="auto" my="100px" p={10}>
                <AspectRatio ratio={16 / 9}>
                    <iframe
                    src="../../img/Eduvid.mp4"
                    frameBorder="1"
                    allowFullScreen
                    />
                </AspectRatio>
            </Box>
        </VStack>
    </HStack>
  )
}

export default CourseView
