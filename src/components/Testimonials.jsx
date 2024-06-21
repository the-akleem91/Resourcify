import { Box , Button, Center, Img, ChakraProvider, Grid, HStack, Icon, SimpleGrid , Text} from "@chakra-ui/react";
import { MdArrowOutward } from "react-icons/md";

export default function OurTestimonials() {
  return (
    <Box ml="100px" mb="60px">
        
        <ChakraProvider>
                <Text fontSize="30px" fontWeight="semibold">
                Our Testimonials
                </Text>
                <SimpleGrid p="10px" spacing={10} maxWidth="1300px" minChildWidth={{ base: "100px" , lg : "150px" , xl : "550px"}}>
                    <Box 
                    width={{base: "50px" , lg : "150px" , xl : "1000px"}}
                    height={{ base: "50px" , lg : "75px" , xl : "100px"}}><Text>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</Text></Box>
                    
                </SimpleGrid>
        </ChakraProvider>
       
        <SimpleGrid p="10px" spacing={10} maxWidth="1300px" minChildWidth={{ base: "100px" , lg : "150px" , xl : "500px"}}>
            <Box 
            bg="white"
            borderRadius="15px"
            height={{ base: "100px" , lg : "150px" , xl : "200px"}}>
                <Box px="30px" h="50%">
                    <Text mt="10px">The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!</Text>
                </Box>
                <Box bg="gray.50" h="46%" borderBottomRadius="15px" borderTop="2px solid whitesmoke" px="30px">
                    <HStack py="15px">
                        <Img src="../../img/CImage1.png" alt="Client1" aspect-ratio="1/1" h="50px"></Img>
                        <Text>Sarah L</Text>
                    </HStack>
                </Box>
            </Box>
            <Box 
            bg="white"
            borderRadius="15px"
            height={{ base: "100px" , lg : "150px" , xl : "200px"}}>
                <Box px="30px" h="50%">
                    <Text mt="10px">The UI/UX design course exceeded my expectations. The instructor's expertise and practical assignments helped me improve my design skills. I feel more confident in my career now. Thank you!</Text>
                </Box>
                <Box bg="gray.50" h="46%" borderBottomRadius="15px" borderTop="2px solid whitesmoke" px="30px">
                    <HStack py="15px">
                        <Img src="../../img/CImage2.png" alt="Client1" aspect-ratio="1/1" h="50px"></Img>
                        <Text>Max S</Text>
                    </HStack>
                </Box>
            </Box>
            <Box 
            bg="white"
            borderRadius="15px"
            height={{ base: "100px" , lg : "150px" , xl : "200px"}}>
                <Box px="30px" h="50%">
                    <Text mt="10px">The mobile app development course was fantastic! The step-by-step tutorials and hands-on projects helped me grasp the concepts easily. I'm now building my own app. Great course!</Text>
                </Box>
                <Box bg="gray.50" h="46%" borderBottomRadius="15px" borderTop="2px solid whitesmoke" px="30px">
                    <HStack py="15px">
                        <Img src="../../img/CImage3.png" alt="Client1" aspect-ratio="1/1" h="50px"></Img>
                        <Text>Susan G</Text>
                    </HStack>
                </Box>
            </Box>
            <Box 
            bg="white"
            borderRadius="15px"
            height={{ base: "100px" , lg : "150px" , xl : "200px"}}>
                <Box px="30px" h="50%">
                    <Text mt="10px">I enrolled in the graphic design course as a beginner, and it was the perfect starting point. The instructor's guidance and feedback improved my design abilities significantly. I'm grateful for this course!</Text>
                </Box>
                <Box bg="gray.50" h="46%" borderBottomRadius="15px" borderTop="2px solid whitesmoke" px="30px">
                    <HStack py="15px">
                        <Img src="../../img/CImage4.png" alt="Client1" aspect-ratio="1/1" h="50px"></Img>
                        <Text>Stefen B</Text>
                    </HStack>
                </Box>
            </Box>
        </SimpleGrid>
    </Box>
  )
}